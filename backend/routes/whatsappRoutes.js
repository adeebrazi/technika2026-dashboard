const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const WhatsAppState = require('../models/WhatsAppState');

// Enable CORS on all WhatsApp routes
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const DATA_FILE = path.resolve(__dirname, '../data/groups.json');

// Default fallback state if database or file does not exist
const DEFAULT_STATE = {
  limit: 1000,
  groups: [
    {
      id: 1,
      name: "Group Alpha",
      tag: "Alpha",
      link: "https://chat.whatsapp.com/JGuwj0BeaqXHtaOT8azHtc",
      count: 0,
      status: "OPEN",
      accent: "#00FF66"
    },
    {
      id: 2,
      name: "Group Beta",
      tag: "Beta",
      link: "https://chat.whatsapp.com/CjfVMQB3G8oA9IlKH3RTXm",
      count: 0,
      status: "LOCKED",
      accent: "#FFE600"
    },
    {
      id: 3,
      name: "Group Gamma",
      tag: "Gamma",
      link: "https://chat.whatsapp.com/invite-gamma-03",
      count: 0,
      status: "LOCKED",
      accent: "#00D8F6"
    },
    {
      id: 4,
      name: "Group Delta",
      tag: "Delta",
      link: "https://chat.whatsapp.com/invite-delta-04",
      count: 0,
      status: "LOCKED",
      accent: "#FF007F"
    }
  ],
  allFull: false,
  activeGroupId: 1,
  totalJoined: 0,
  totalCapacity: 4000,
  totalRemaining: 4000
};

// In-memory cache for fast zero-latency response
let memoryState = JSON.parse(JSON.stringify(DEFAULT_STATE));
let auditLogs = [
  {
    timestamp: new Date().toISOString(),
    type: "SYSTEM_INIT",
    message: "WhatsApp Management initialized."
  }
];

function logEvent(type, message) {
  const item = {
    timestamp: new Date().toISOString(),
    type,
    message
  };
  auditLogs.unshift(item);
  if (auditLogs.length > 500) auditLogs.pop();
}

function recalculateState(state) {
  const limit = state.limit || 1000;
  let activeFound = false;
  const previousActive = state.activeGroupId;

  state.groups.forEach((group) => {
    if (group.count < 0) group.count = 0;

    if (group.count >= limit) {
      group.count = limit;
      group.status = "FROZEN";
    } else if (!activeFound) {
      group.status = "OPEN";
      activeFound = true;
    } else {
      group.status = "LOCKED";
    }
  });

  state.allFull = !activeFound;
  state.activeGroupId = activeFound ? state.groups.find(g => g.status === "OPEN").id : null;
  state.totalJoined = state.groups.reduce((acc, g) => acc + g.count, 0);
  state.totalCapacity = state.groups.length * limit;
  state.totalRemaining = Math.max(0, state.totalCapacity - state.totalJoined);

  if (previousActive && state.activeGroupId && previousActive !== state.activeGroupId) {
    logEvent("ROLLOVER", `Group #${previousActive} filled and FROZE. Group #${state.activeGroupId} is now OPEN.`);
  } else if (previousActive && state.allFull) {
    logEvent("ALL_FULL", `All WhatsApp groups are at maximum capacity (${state.totalCapacity}/${state.totalCapacity}).`);
  }

  return state;
}

// Asynchronously load and initialize from MongoDB Atlas if available
async function syncFromMongo() {
  try {
    const doc = await WhatsAppState.findOne({ key: 'global_state' });
    if (doc) {
      memoryState = recalculateState({
        limit: doc.limit,
        groups: doc.groups.map(g => ({
          id: g.id,
          name: g.name,
          tag: g.tag,
          link: g.link,
          count: g.count,
          status: g.status,
          accent: g.accent
        })),
        activeGroupId: doc.activeGroupId,
        totalJoined: doc.totalJoined,
        totalCapacity: doc.totalCapacity,
        totalRemaining: doc.totalRemaining,
        allFull: doc.allFull
      });
      syncToLocalFile(memoryState);
      return memoryState;
    } else {
      // First time MongoDB initialization: persist initial state
      const initial = recalculateState(JSON.parse(JSON.stringify(memoryState)));
      await WhatsAppState.create({
        key: 'global_state',
        ...initial
      });
      return initial;
    }
  } catch (err) {
    // MongoDB not ready or network issue; fallback to memory/file
    return null;
  }
}

// Asynchronously persist to MongoDB Atlas
async function syncToMongo(state) {
  try {
    await WhatsAppState.findOneAndUpdate(
      { key: 'global_state' },
      {
        limit: state.limit,
        groups: state.groups,
        activeGroupId: state.activeGroupId,
        totalJoined: state.totalJoined,
        totalCapacity: state.totalCapacity,
        totalRemaining: state.totalRemaining,
        allFull: state.allFull,
        updatedAt: new Date()
      },
      { upsert: true, new: true }
    );
  } catch (err) {
    // Non-blocking catch
  }
}

function syncToLocalFile(state) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(state, null, 2), 'utf-8');
  } catch (err) {
    // If running in cloud/serverless without local path, safely ignore
  }
}

function loadState() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      memoryState = recalculateState(parsed);
      return memoryState;
    }
  } catch (err) {
    // ignore
  }
  return recalculateState(memoryState);
}

function saveState(state) {
  memoryState = recalculateState(state);
  syncToLocalFile(memoryState);
  syncToMongo(memoryState);
  broadcastToClients();
}

// Initial async MongoDB bootstrap
setTimeout(() => {
  syncFromMongo().then(st => {
    if (st) broadcastToClients();
  }).catch(() => {});
}, 1000);

let sseClients = [];

function broadcastToClients() {
  try {
    const fresh = loadState();
    const payload = `data: ${JSON.stringify(fresh)}\n\n`;
    sseClients.forEach(c => {
      try { c.res.write(payload); } catch(e) {}
    });
  } catch (err) {}
}

// Watch DATA_FILE so any change from standalone port 3000 syncs instantly
let sseDebounce = null;
try {
  if (fs.existsSync(DATA_FILE)) {
    fs.watch(DATA_FILE, () => {
      clearTimeout(sseDebounce);
      sseDebounce = setTimeout(() => {
        broadcastToClients();
      }, 80);
    });
  }
} catch (e) {}

// SSE stream for real-time live synchronization
router.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const state = loadState();
  res.write(`data: ${JSON.stringify(state)}\n\n`);

  const id = Date.now() + Math.random();
  sseClients.push({ id, res });
  req.on('close', () => {
    sseClients = sseClients.filter(c => c.id !== id);
  });
});

// GET status
router.get('/', (req, res) => {
  res.json(loadState());
});

router.get('/status', (req, res) => {
  res.json(loadState());
});

// POST /join - Claim a seat in the active WhatsApp squad
router.post('/join', (req, res) => {
  let state = loadState();
  const activeGroup = state.groups.find(g => g.status === "OPEN");

  if (!activeGroup) {
    return res.status(400).json({
      success: false,
      message: "All WhatsApp groups are currently full.",
      state
    });
  }

  activeGroup.count += 1;
  logEvent("MEMBER_JOIN", `Seat claimed in ${activeGroup.name} (${activeGroup.tag}). Seats remaining: ${Math.max(0, state.limit - activeGroup.count)}`);

  state = recalculateState(state);
  saveState(state);

  res.json({
    success: true,
    message: `Seat secured in ${activeGroup.name}!`,
    joinedGroupId: activeGroup.id,
    whatsappUrl: activeGroup.link,
    state
  });
});

// POST /config - Update invite links, names, counts or global limit
router.post('/config', (req, res) => {
  let state = loadState();
  const { limit, groups } = req.body;

  if (limit && Number(limit) > 0) {
    state.limit = Number(limit);
  }

  if (Array.isArray(groups)) {
    groups.forEach(incoming => {
      const existing = state.groups.find(g => g.id === incoming.id);
      if (existing) {
        if (incoming.name) existing.name = incoming.name;
        if (incoming.link) existing.link = incoming.link;
        if (incoming.tag) existing.tag = incoming.tag;
        if (incoming.accent) existing.accent = incoming.accent;
        if (typeof incoming.count === 'number') existing.count = incoming.count;
      }
    });
    logEvent("CONFIG_UPDATE", "WhatsApp group details and invite links updated via Dashboard.");
  }

  state = recalculateState(state);
  saveState(state);

  res.json({
    success: true,
    message: "WhatsApp configuration saved successfully.",
    state
  });
});

// POST /simulate - Adjust group member counts
router.post('/simulate', (req, res) => {
  let state = loadState();
  const { groupId, action, value } = req.body;
  const group = state.groups.find(g => g.id === Number(groupId));

  if (!group && action !== 'reset-all') {
    return res.status(404).json({ success: false, message: "Group not found." });
  }

  if (action === 'add') {
    group.count += Number(value || 1);
    logEvent("QUOTA_ADJUST", `Added ${value} members to Group #${groupId}. Count is now ${group.count}.`);
  } else if (action === 'set') {
    group.count = Number(value);
    logEvent("QUOTA_ADJUST", `Set Group #${groupId} count directly to ${value}.`);
  } else if (action === 'reset') {
    group.count = 0;
    logEvent("QUOTA_ADJUST", `Reset Group #${groupId} count back to 0.`);
  } else if (action === 'reset-all') {
    state.groups.forEach(g => g.count = 0);
    logEvent("QUOTA_RESET_ALL", "All WhatsApp groups reset to 0 members.");
  }

  state = recalculateState(state);
  saveState(state);

  res.json({
    success: true,
    message: "Quota adjustment applied successfully.",
    state
  });
});

// POST /add-group - Add new squad
router.post('/add-group', (req, res) => {
  let state = loadState();
  const { name, tag, link, accent } = req.body;
  const newId = state.groups.length > 0 
    ? Math.max(...state.groups.map(g => g.id)) + 1 
    : 1;

  const defaultAccents = ['#00FF66', '#FFE600', '#00D8F6', '#FF007F', '#A855F7', '#FF6B00'];
  const groupAccent = accent || defaultAccents[(newId - 1) % defaultAccents.length];

  const newGroup = {
    id: newId,
    name: name || `Group #0${newId}`,
    tag: tag ? tag.toUpperCase() : `Group ${newId}`,
    link: link || `https://chat.whatsapp.com/invite-new-${newId}`,
    count: 0,
    status: 'LOCKED',
    accent: groupAccent
  };

  state.groups.push(newGroup);
  state = recalculateState(state);
  saveState(state);

  logEvent("ADD_GROUP", `Created new WhatsApp group #${newId}: ${newGroup.name}`);

  res.json({
    success: true,
    message: `Group #${newId} created successfully.`,
    state
  });
});

// POST /remove-group - Delete squad
router.post('/remove-group', (req, res) => {
  let state = loadState();
  const { groupId } = req.body;
  const idToRemove = Number(groupId);

  if (state.groups.length <= 1) {
    return res.status(400).json({
      success: false,
      message: "At least one group must remain in the allocation system."
    });
  }

  const groupIndex = state.groups.findIndex(g => g.id === idToRemove);
  if (groupIndex === -1) {
    return res.status(404).json({ success: false, message: "Group not found." });
  }

  const removedName = state.groups[groupIndex].name;
  state.groups.splice(groupIndex, 1);
  state = recalculateState(state);
  saveState(state);

  logEvent("REMOVE_GROUP", `Removed Group #${idToRemove}: ${removedName}`);

  res.json({
    success: true,
    message: `${removedName} removed successfully.`,
    state
  });
});

// GET /logs
router.get('/logs', (req, res) => {
  res.json({ logs: auditLogs });
});

// GET /export-csv
router.get('/export-csv', (req, res) => {
  let csv = "Timestamp,Type,Event\n";
  auditLogs.forEach(row => {
    csv += `"${row.timestamp}","${row.type}","${row.message.replace(/"/g, '""')}"\n`;
  });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename="whatsapp-audit-${Date.now()}.csv"`);
  res.send(csv);
});

module.exports = router;
