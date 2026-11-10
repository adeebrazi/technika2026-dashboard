import React, { useState, useEffect, useCallback } from 'react';
import {
  MessageSquare,
  Users,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Plus,
  Trash2,
  ExternalLink,
  Save,
  Lock,
  Radio,
  Sliders,
  Check
} from 'lucide-react';
import { API_BASE_URL as API, getAdminIdentity } from '../../utils/adminAuth';

interface WhatsAppGroup {
  id: number;
  name: string;
  tag: string;
  link: string;
  count: number;
  status: 'OPEN' | 'FROZEN' | 'LOCKED';
  accent: string;
}

interface WhatsAppState {
  limit: number;
  groups: WhatsAppGroup[];
  activeGroupId: number | null;
  totalJoined: number;
  totalCapacity: number;
  totalRemaining: number;
  allFull: boolean;
}

const DEFAULT_STATE: WhatsAppState = {
  limit: 1000,
  groups: [
    {
      id: 1,
      name: "Group Alpha",
      tag: "Alpha",
      link: "https://chat.whatsapp.com/Eqqx6LcVA472hc0trTMkcC",
      count: 1000,
      status: "FROZEN",
      accent: "#00FF66",
    },
    {
      id: 2,
      name: "Group Beta",
      tag: "Beta",
      link: "https://chat.whatsapp.com/Byt0h7SkQzX7kLuNLgDPeW",
      count: 36,
      status: "OPEN",
      accent: "#FFE600",
    },
  ],
  activeGroupId: 2,
  totalJoined: 1036,
  totalCapacity: 2000,
  totalRemaining: 964,
  allFull: false,
};

export const WhatsAppManagementView: React.FC = () => {
  const { role, isAdeeb, isMamatha } = getAdminIdentity();
  const perms = (() => {
    try {
      const p = localStorage.getItem('adminPermissions');
      return p ? JSON.parse(p) : null;
    } catch {
      return null;
    }
  })();
  const canAccess = role === 'admin' || isAdeeb || isMamatha || Boolean(perms?.canManageWhatsapp);

  const [state, setState] = useState<WhatsAppState>(DEFAULT_STATE);
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Group Invite Links editing state
  const [editLinks, setEditLinks] = useState<{ [id: number]: string }>({});
  const [savingId, setSavingId] = useState<number | null>(null);

  // Manual input values
  const [manualValues, setManualValues] = useState<{ [id: number]: string }>({});

  // Add Group Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [newGroupData, setNewGroupData] = useState<{
    name: string;
    tag: string;
    link: string;
    accent: string;
  }>({
    name: '',
    tag: '',
    link: '',
    accent: '#00FF66'
  });
  const [modalSubmitting, setModalSubmitting] = useState<boolean>(false);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Robust multi-tier API fetcher connecting directly to production unified engine
  const fetchWhatsAppApi = async (endpoint: string, options?: RequestInit): Promise<Response | null> => {
    const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    const token = localStorage.getItem('adminToken') || localStorage.getItem('dashboardToken');
    const headers = new Headers(options?.headers || {});
    if (token && !headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    const finalOptions: RequestInit = {
      ...options,
      headers,
    };

    const urls = isLocal
      ? [
          `/api/whatsapp${endpoint}`,
          `http://localhost:5000/api/whatsapp${endpoint}`,
          `https://technika2026.online/api/whatsapp${endpoint}`,
          `https://www.technika2026.online/api/whatsapp${endpoint}`
        ]
      : [
          `/api/whatsapp${endpoint}`,
          `https://technika2026.online/api/whatsapp${endpoint}`,
          `https://www.technika2026.online/api/whatsapp${endpoint}`,
          `${API}/api/whatsapp${endpoint}`,
          `https://dashboard.technika2026.online/api/whatsapp${endpoint}`
        ];

    for (const url of urls) {
      try {
        const res = await fetch(url, finalOptions);
        if (res && res.ok) {
          const ct = res.headers.get('content-type') || '';
          if (ct.includes('application/json') || endpoint === '/export-csv') {
            return res;
          }
        }
      } catch {
        // try next endpoint fallback
      }
    }
    return null;
  };

  // Fetch status from backend (automatic live sync)
  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetchWhatsAppApi('/status');
      if (res && res.ok) {
        const data: WhatsAppState = await res.json();
        if (data && Array.isArray(data.groups)) {
          setState(data);
          
          // Sync editing links
          const links: { [id: number]: string } = {};
          data.groups.forEach(g => {
            links[g.id] = g.link;
          });
          setEditLinks(links);
        }
      }
    } catch (err) {
      console.error("Error fetching WhatsApp status:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();

    // Auto polling every 2.5 seconds for instantaneous 2-way live sync
    const interval = setInterval(() => {
      fetchStatus();
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [fetchStatus]);

  // Save updated WhatsApp link for a group
  const handleSaveLink = async (groupId: number) => {
    const link = editLinks[groupId]?.trim();
    if (!link) {
      showToast("Please enter a valid WhatsApp invite link", "error");
      return;
    }

    setSavingId(groupId);
    try {
      const res = await fetchWhatsAppApi('/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          groups: [{ id: groupId, link }]
        })
      });

      if (res && res.ok) {
        const data = await res.json();
        if (data.success) {
          showToast(`Group #${groupId} WhatsApp invite link saved!`, "success");
          if (data.state) setState(data.state);
        } else {
          showToast(data.message || "Failed to update link", "error");
        }
      } else {
        showToast("Error updating link", "error");
      }
    } catch (err) {
      console.error("Save error:", err);
      showToast("Network error updating link", "error");
    } finally {
      setSavingId(null);
    }
  };

  // Adjust quota / counts (e.g. +1, +50, set, reset)
  const handleAdjustCount = async (groupId: number, action: 'add' | 'set' | 'reset', value?: number) => {
    try {
      const res = await fetchWhatsAppApi('/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ groupId, action, value })
      });

      if (res && res.ok) {
        const data = await res.json();
        if (data.success) {
          showToast(`Group #${groupId} quota updated!`, "success");
          if (data.state) setState(data.state);
        } else {
          showToast(data.message || "Adjustment failed", "error");
        }
      }
    } catch {
      showToast("Network error applying adjustment", "error");
    }
  };

  // Apply custom manual number
  const handleApplyManual = (groupId: number) => {
    const val = parseInt(manualValues[groupId] || '', 10);
    if (isNaN(val) || val < 0) {
      showToast("Please enter a valid positive member count", "error");
      return;
    }
    handleAdjustCount(groupId, 'set', val);
    setManualValues(prev => ({ ...prev, [groupId]: '' }));
  };

  // Add new group
  const handleAddGroupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroupData.name || !newGroupData.link) {
      showToast("Please provide both group name and invite link", "error");
      return;
    }

    setModalSubmitting(true);
    try {
      const res = await fetchWhatsAppApi('/add-group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGroupData)
      });

      if (res && res.ok) {
        const data = await res.json();
        if (data.success) {
          showToast(`New group created successfully!`, "success");
          if (data.state) setState(data.state);
          setIsAddModalOpen(false);
          setNewGroupData({ name: '', tag: '', link: '', accent: '#00FF66' });
        } else {
          showToast(data.message || "Failed to create group", "error");
        }
      }
    } catch {
      showToast("Error creating group", "error");
    } finally {
      setModalSubmitting(false);
    }
  };

  // Remove a group
  const handleRemoveGroup = async (groupId: number, groupName: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete "${groupName}"?`)) {
      return;
    }

    try {
      const res = await fetchWhatsAppApi('/remove-group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ groupId })
      });

      if (res && res.ok) {
        const data = await res.json();
        if (data.success) {
          showToast(`Group removed successfully`, "success");
          if (data.state) setState(data.state);
        } else {
          showToast(data.message || "Failed to remove group", "error");
        }
      }
    } catch {
      showToast("Error removing group", "error");
    }
  };

  if (!canAccess) {
    return (
      <div className="clay-access-denied" style={{ padding: '4rem 1rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          maxWidth: '480px',
          width: '100%',
          background: '#ffffff',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🔒</div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.6rem' }}>Access Restricted</h2>
          <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            WhatsApp Management is restricted to <strong>Administrators only</strong>. Access requires administrative permission granted via Access Control.
          </p>
          <button 
            type="button"
            onClick={() => window.location.href = '/admin/participants'}
            style={{
              padding: '11px 26px',
              borderRadius: '12px',
              background: '#2563eb',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.88rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
            }}
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (loading && !state) {
    return (
      <div className="clay-loading-box">
        <RefreshCw className="animate-spin text-blue-600 mb-3" size={36} />
        <p className="font-bold text-slate-600">Connecting to WhatsApp Rollover Engine...</p>
      </div>
    );
  }

  const {
    limit = 1000,
    groups = [],
    activeGroupId = 1,
    totalJoined = 0,
    totalCapacity = 4000,
    totalRemaining = 4000,
    allFull = false
  } = state || {};

  const globalPct = Math.min(100, (totalJoined / (totalCapacity || 1)) * 100).toFixed(1);
  const activeGroup = groups.find(g => g.id === activeGroupId);

  return (
    <div className="clay-whatsapp-view">
      {/* ── Toast Notification ── */}
      {toast && (
        <div className={`clay-toast ${toast.type}`}>
          {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* ── Page Header ── */}
      <div className="clay-page-header">
        <div className="clay-page-header-info">
          <div className="clay-header-tag">
            <Radio size={14} className="text-emerald-500 animate-pulse" />
            <span>TECHNIKA 6.0 AUTO-ROLLOVER CONTROLLER</span>
          </div>
          <h1 className="clay-page-title flex items-center gap-2.5"><MessageSquare size={26} className="text-emerald-500" /><span>WhatsApp Management</span></h1>
          <p className="clay-page-subtitle">
            Configure squad rollover sequences, real-time seat capacities, manual member overrides, and official WhatsApp group invite URLs.
          </p>
        </div>

        <div className="clay-header-actions">
          {/* Direct link connecting to live public WhatsApp Page */}
          <a
            href="https://technika2026.online/whatsapp"
            target="_blank"
            rel="noreferrer"
            className="clay-btn clay-btn-ghost flex items-center gap-1.5"
            title="Open Live Public WhatsApp Allocation Page"
          >
            <ExternalLink size={15} className="text-emerald-600" />
            <span>View Public Page ↗</span>
          </a>

          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="clay-btn clay-btn-primary"
          >
            <Plus size={16} />
            <span>Add New Group</span>
          </button>
        </div>
      </div>

      {/* ── 4 Key Overview Clay Cards ── */}
      <div className="clay-metrics-grid">
        {/* Metric 1: Total Enrolled */}
        <div className="clay-card clay-metric-card">
          <div className="clay-metric-header">
            <span className="clay-metric-title">TOTAL REGISTERED</span>
            <div className="clay-metric-icon bg-blue-100 text-blue-600">
              <Users size={18} />
            </div>
          </div>
          <div className="clay-metric-value-row">
            <span className="clay-metric-num">{totalJoined.toLocaleString()}</span>
            <span className="clay-metric-sub">/ {totalCapacity.toLocaleString()}</span>
          </div>
          <div className="clay-metric-bar-wrap">
            <div className="clay-metric-bar-fill bg-blue-500" style={{ width: `${globalPct}%` }} />
          </div>
          <span className="clay-metric-caption text-blue-700">{globalPct}% total network capacity occupied</span>
        </div>

        {/* Metric 2: Seats Available */}
        <div className="clay-card clay-metric-card">
          <div className="clay-metric-header">
            <span className="clay-metric-title">SEATS AVAILABLE</span>
            <div className="clay-metric-icon bg-emerald-100 text-emerald-600">
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div className="clay-metric-value-row">
            <span className="clay-metric-num text-emerald-600">{totalRemaining.toLocaleString()}</span>
            <span className="clay-metric-sub">Seats</span>
          </div>
          <div className="clay-metric-bar-wrap">
            <div className="clay-metric-bar-fill bg-emerald-500" style={{ width: `${Math.max(0, 100 - Number(globalPct))}%` }} />
          </div>
          <span className="clay-metric-caption text-emerald-700">Open seats across all standby groups</span>
        </div>

        {/* Metric 3: Active Squad */}
        <div className="clay-card clay-metric-card">
          <div className="clay-metric-header">
            <span className="clay-metric-title">CURRENT ACTIVE SQUAD</span>
            <div className="clay-metric-icon bg-amber-100 text-amber-600">
              <Radio size={18} className="animate-pulse" />
            </div>
          </div>
          <div className="clay-metric-value-row">
            <span className="clay-metric-num text-amber-600 truncate text-2xl sm:text-3xl">
              {allFull ? "ALL FULL" : activeGroup ? activeGroup.name : "None"}
            </span>
          </div>
          <div className="clay-active-badge-row">
            <span className={`clay-status-pill ${allFull ? 'frozen' : 'active'}`}>
              <span className="clay-pulse-dot" />
              {allFull ? 'SYSTEM MAXIMUM REACHED' : 'CURRENTLY ACCEPTING JOINS'}
            </span>
          </div>
          <span className="clay-metric-caption text-slate-500">Auto-freezes at {limit.toLocaleString()} members</span>
        </div>

        {/* Metric 4: Capacity Threshold */}
        <div className="clay-card clay-metric-card">
          <div className="clay-metric-header">
            <span className="clay-metric-title">ROLLOVER CAP</span>
            <div className="clay-metric-icon bg-purple-100 text-purple-600">
              <Sliders size={18} />
            </div>
          </div>
          <div className="clay-metric-value-row">
            <span className="clay-metric-num text-purple-600">{limit.toLocaleString()}</span>
            <span className="clay-metric-sub">/ Squad</span>
          </div>
          <div className="clay-active-badge-row">
            <span className="clay-status-pill standby">
              <Lock size={12} />
              STRICT FREEZE CAP
            </span>
          </div>
          <span className="clay-metric-caption text-purple-700">Triggers instantaneous handover to next group</span>
        </div>
      </div>

      {/* ── Squad Controllers Grid ── */}
      <div className="clay-squads-header">
        <div>
          <h2 className="clay-section-title">Individual Squad Controllers</h2>
          <p className="clay-section-desc">Live invite URLs, manual member counters, and auto-rollover triggers</p>
        </div>
      </div>

      <div className="clay-squads-grid">
        {groups.map((g) => {
          const seatsAvailable = Math.max(0, limit - g.count);
          const isOpen = g.status === 'OPEN';
          const isFrozen = g.status === 'FROZEN';

          return (
            <div 
              key={g.id} 
              className={`clay-card clay-squad-card ${isOpen ? 'active-squad' : ''}`}
            >
              {/* Accent top stripe */}
              <div className="clay-squad-accent-bar" style={{ backgroundColor: g.accent || '#3b82f6' }} />

              <div className="clay-squad-card-body">
                {/* Header row */}
                <div className="clay-squad-header">
                  <div className="flex items-center gap-2.5">
                    <span 
                      className="clay-squad-badge"
                      style={{ 
                        backgroundColor: g.accent || '#3b82f6',
                        color: g.id === 4 ? '#ffffff' : '#000000'
                      }}
                    >
                      0{g.id}
                    </span>
                    <div>
                      <h3 className="clay-squad-name">{g.name}</h3>
                      <span className="clay-squad-tag">{g.tag}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isOpen && (
                      <span className="clay-status-pill active">
                        <span className="clay-pulse-dot" />
                        ACTIVE
                      </span>
                    )}
                    {isFrozen && (
                      <span className="clay-status-pill frozen">
                        <Lock size={12} />
                        FROZEN
                      </span>
                    )}
                    {!isOpen && !isFrozen && (
                      <span className="clay-status-pill standby">
                        <Lock size={12} />
                        STANDBY
                      </span>
                    )}

                    {groups.length > 1 && (
                      <button
                        onClick={() => handleRemoveGroup(g.id, g.name)}
                        className="clay-icon-btn text-rose-500 hover:text-rose-700"
                        title="Delete Group"
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Triple Stats Bar */}
                <div className="clay-stat-trio">
                  <div className="clay-stat-col">
                    <span className="clay-stat-label">JOINED</span>
                    <span className="clay-stat-val text-slate-800">{g.count}</span>
                  </div>
                  <div className="clay-stat-col">
                    <span className="clay-stat-label">AVAILABLE</span>
                    <span className="clay-stat-val text-emerald-600">{seatsAvailable}</span>
                  </div>
                  <div className="clay-stat-col">
                    <span className="clay-stat-label">LIMIT</span>
                    <span className="clay-stat-val text-slate-600">{limit}</span>
                  </div>
                </div>

                {/* WhatsApp Link Editor */}
                <div className="clay-link-box">
                  <label className="clay-input-label">WhatsApp Invite Link</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={editLinks[g.id] ?? g.link}
                      onChange={(e) => setEditLinks(prev => ({ ...prev, [g.id]: e.target.value }))}
                      placeholder="https://chat.whatsapp.com/..."
                      className="clay-input flex-1 font-mono text-xs"
                    />
                    <button 
                      onClick={() => handleSaveLink(g.id)}
                      disabled={savingId === g.id}
                      className="clay-btn clay-btn-primary px-3 text-xs"
                      title="Save Invite URL"
                    >
                      {savingId === g.id ? <RefreshCw size={14} className="animate-spin" /> : <Save size={14} />}
                      <span>Save</span>
                    </button>
                  </div>
                </div>

                {/* Quota Override */}
                <div className="clay-override-box">
                  <label className="clay-input-label">Manual Member Count Override</label>
                  
                  {/* Direct input row */}
                  <div className="flex gap-2">
                    <input 
                      type="number"
                      min={0}
                      max={limit}
                      placeholder={`Enter count (e.g. 998)`}
                      value={manualValues[g.id] || ''}
                      onChange={(e) => setManualValues(prev => ({ ...prev, [g.id]: e.target.value }))}
                      className="clay-input flex-1 text-xs font-mono"
                    />
                    <button 
                      onClick={() => handleApplyManual(g.id)}
                      className="clay-btn clay-btn-primary px-3 text-xs"
                    >
                      Set Count
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Add New Group Modal ── */}
      {isAddModalOpen && (
        <div className="clay-modal-overlay">
          <div className="clay-modal-card">
            <div className="clay-modal-header">
              <div>
                <span className="clay-modal-badge">+ NEW WHATSAPP SQUAD</span>
                <h3 className="clay-modal-title">Add WhatsApp Group</h3>
                <p className="clay-modal-subtitle">Add an additional group that joins the sequential rollover sequence.</p>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="clay-modal-close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddGroupSubmit} className="clay-modal-form">
              <div>
                <label className="clay-input-label">Group Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Group Epsilon"
                  value={newGroupData.name}
                  onChange={(e) => setNewGroupData(prev => ({ ...prev, name: e.target.value }))}
                  className="clay-input"
                />
              </div>

              <div>
                <label className="clay-input-label">Wing Tag</label>
                <input 
                  type="text" 
                  placeholder="e.g. Epsilon"
                  value={newGroupData.tag}
                  onChange={(e) => setNewGroupData(prev => ({ ...prev, tag: e.target.value }))}
                  className="clay-input"
                />
              </div>

              <div>
                <label className="clay-input-label">WhatsApp Invite Link</label>
                <input 
                  type="url" 
                  required
                  placeholder="https://chat.whatsapp.com/..."
                  value={newGroupData.link}
                  onChange={(e) => setNewGroupData(prev => ({ ...prev, link: e.target.value }))}
                  className="clay-input font-mono text-xs"
                />
              </div>

              <div>
                <label className="clay-input-label">Accent Color</label>
                <div className="flex gap-2">
                  {['#00FF66', '#FFE600', '#00D8F6', '#FF007F', '#A855F7', '#FF6B00'].map(color => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setNewGroupData(prev => ({ ...prev, accent: color }))}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${newGroupData.accent === color ? 'scale-110 border-black' : 'border-white'}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="clay-modal-actions pt-2">
                <button 
                  type="submit" 
                  disabled={modalSubmitting}
                  className="clay-btn clay-btn-primary flex-1"
                >
                  {modalSubmitting ? <RefreshCw size={16} className="animate-spin" /> : <Check size={16} />}
                  <span>Create Squad</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsAddModalOpen(false)}
                  className="clay-btn clay-btn-ghost"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Claymorphism Component Styles ── */}
      <style>{`
        .clay-whatsapp-view {
          padding: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
          font-family: inherit;
        }

        /* Loading */
        .clay-loading-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        /* Toast */
        .clay-toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 16px;
          font-size: 0.85rem;
          font-weight: 700;
          background: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 6px 10px 24px rgba(162, 178, 201, 0.45);
          animation: toast-pop 0.25s ease-out;
        }
        .clay-toast.success { color: #059669; border-color: #a7f3d0; }
        .clay-toast.error { color: #e11d48; border-color: #fecdd3; }

        @keyframes toast-pop {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Page Header */
        .clay-page-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .clay-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 900;
          text-transform: uppercase;
          color: #2563eb;
          letter-spacing: 0.08em;
          background: #eff6ff;
          padding: 4px 10px;
          border-radius: 12px;
          margin-bottom: 0.5rem;
          border: 1px solid rgba(191, 219, 254, 0.8);
        }
        .clay-page-title {
          font-size: 1.85rem;
          font-weight: 900;
          color: #1e293b;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .clay-page-subtitle {
          font-size: 0.88rem;
          color: #64748b;
          margin: 0.25rem 0 0 0;
          max-width: 650px;
          line-height: 1.5;
        }
        .clay-header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        /* Clay Buttons */
        .clay-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 14px;
          font-size: 0.82rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.15s ease;
          border: 2px solid rgba(255, 255, 255, 0.9);
          user-select: none;
        }
        .clay-btn:hover {
          transform: translateY(-1px);
        }
        .clay-btn:active {
          transform: translateY(1px);
        }
        .clay-btn-primary {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 4px 6px 14px rgba(37, 99, 235, 0.35), inset 1px 1px 2px rgba(255, 255, 255, 0.5);
        }
        .clay-btn-primary:hover {
          background: #1d4ed8;
          box-shadow: 6px 8px 18px rgba(37, 99, 235, 0.45);
        }
        .clay-btn-ghost {
          background: #f1f5f9;
          color: #334155;
          box-shadow: 4px 6px 12px rgba(162, 178, 201, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }
        .clay-btn-outline {
          background: #ffffff;
          color: #334155;
          box-shadow: 4px 6px 12px rgba(162, 178, 201, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        /* Clay Card Base */
        .clay-card {
          background: #f8fafc;
          border-radius: 22px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.85),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.12);
          overflow: hidden;
          transition: all 0.2s ease;
        }

        /* Metrics Grid */
        .clay-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }
        .clay-metric-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .clay-metric-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .clay-metric-title {
          font-size: 0.72rem;
          font-weight: 900;
          color: #64748b;
          letter-spacing: 0.06em;
        }
        .clay-metric-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.8), 2px 2px 6px rgba(0,0,0,0.06);
        }
        .clay-metric-value-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 0.5rem;
        }
        .clay-metric-num {
          font-size: 2rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1;
        }
        .clay-metric-sub {
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
        }
        .clay-metric-bar-wrap {
          height: 6px;
          width: 100%;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 0.4rem;
        }
        .clay-metric-bar-fill {
          height: 100%;
          border-radius: 999px;
          transition: width 0.3s ease;
        }
        .clay-metric-caption {
          font-size: 0.72rem;
          font-weight: 700;
        }

        /* Status Pills */
        .clay-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 9px;
          border-radius: 999px;
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .clay-status-pill.active {
          background: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
        }
        .clay-status-pill.frozen {
          background: #ffe4e6;
          color: #be123c;
          border: 1px solid #fecdd3;
        }
        .clay-status-pill.standby {
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        }
        .clay-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #16a34a;
          animation: pulse-ring 1.5s infinite;
        }
        @keyframes pulse-ring {
          0% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.3); }
          100% { opacity: 0.4; transform: scale(0.9); }
        }

        /* Global Progress Card */
        .clay-global-progress-card {
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
        }
        .clay-card-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .clay-card-title {
          font-size: 0.95rem;
          font-weight: 900;
          color: #1e293b;
          margin: 0;
        }
        .clay-card-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin: 0.15rem 0 0 0;
        }
        .clay-badge-pill {
          font-size: 0.75rem;
          font-weight: 800;
          background: #e2e8f0;
          color: #1e293b;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .clay-progress-track {
          height: 14px;
          width: 100%;
          background: #e2e8f0;
          border-radius: 999px;
          display: flex;
          overflow: hidden;
          box-shadow: inset 1px 1px 3px rgba(0,0,0,0.12);
          margin-bottom: 0.85rem;
        }
        .clay-progress-segment {
          height: 100%;
          transition: width 0.3s ease;
        }
        .clay-legend-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .clay-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .clay-legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .clay-legend-name {
          color: #475569;
        }
        .clay-legend-val {
          color: #0f172a;
          font-weight: 800;
        }

        /* Squads Section */
        .clay-squads-header {
          margin-bottom: 1.25rem;
        }
        .clay-section-title {
          font-size: 1.2rem;
          font-weight: 900;
          color: #1e293b;
          margin: 0;
        }
        .clay-section-desc {
          font-size: 0.82rem;
          color: #64748b;
          margin: 0.2rem 0 0 0;
        }

        .clay-squads-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .clay-squad-card {
          position: relative;
        }
        .clay-squad-card.active-squad {
          box-shadow:
            6px 8px 24px rgba(37, 99, 235, 0.18),
            -5px -5px 14px rgba(255, 255, 255, 0.95),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
          border-color: #bfdbfe;
        }
        .clay-squad-accent-bar {
          height: 5px;
          width: 100%;
        }
        .clay-squad-card-body {
          padding: 1.25rem;
        }
        .clay-squad-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          margin-bottom: 0.85rem;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }
        .clay-squad-badge {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 900;
          box-shadow: 2px 2px 4px rgba(0,0,0,0.12);
        }
        .clay-squad-name {
          font-size: 1rem;
          font-weight: 900;
          color: #1e293b;
          margin: 0;
          line-height: 1.2;
        }
        .clay-squad-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }
        .clay-icon-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .clay-icon-btn:hover {
          background: #fee2e2;
        }

        /* Stat Trio */
        .clay-stat-trio {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #ffffff;
          padding: 0.75rem;
          border-radius: 14px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: inset 1px 1px 3px rgba(0,0,0,0.03);
          text-align: center;
          margin-bottom: 0.85rem;
        }
        .clay-stat-col:not(:last-child) {
          border-right: 1px solid #f1f5f9;
        }
        .clay-stat-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
        }
        .clay-stat-val {
          display: block;
          font-size: 1.15rem;
          font-weight: 900;
          line-height: 1.2;
        }

        /* Progress Mini */
        .clay-squad-progress-wrap {
          margin-bottom: 1rem;
        }
        .clay-progress-track-mini {
          height: 6px;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
        }
        .clay-progress-fill-mini {
          height: 100%;
          border-radius: 999px;
          transition: width 0.3s ease;
        }

        /* Link Box */
        .clay-link-box {
          background: #ffffff;
          padding: 0.85rem;
          border-radius: 14px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          margin-bottom: 0.85rem;
        }
        .clay-input-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          color: #475569;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
        .clay-input {
          width: 100%;
          padding: 7px 12px;
          border-radius: 10px;
          border: 1.5px solid #cbd5e1;
          background: #f8fafc;
          font-size: 0.82rem;
          color: #0f172a;
          box-shadow: inset 1px 1px 2px rgba(0,0,0,0.05);
          outline: none;
          transition: border-color 0.15s;
        }
        .clay-input:focus {
          border-color: #2563eb;
          background: #ffffff;
        }

        /* Override Box */
        .clay-override-box {
          background: #f1f5f9;
          padding: 0.85rem;
          border-radius: 14px;
          border: 1px solid rgba(226, 232, 240, 0.9);
        }
        .clay-pill-btn {
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 800;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #334155;
          cursor: pointer;
          transition: all 0.1s ease;
          box-shadow: 1px 1px 2px rgba(0,0,0,0.05);
        }
        .clay-pill-btn:hover {
          background: #f8fafc;
          transform: translateY(-1px);
        }
        .clay-pill-amber {
          background: #fef3c7;
          border-color: #fde68a;
          color: #b45309;
        }
        .clay-pill-emerald {
          background: #d1fae5;
          border-color: #a7f3d0;
          color: #047857;
        }
        .clay-pill-rose {
          background: #ffe4e6;
          border-color: #fecdd3;
          color: #be123c;
        }

        /* Modal Overlay */
        .clay-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .clay-modal-card {
          background: #ffffff;
          border-radius: 24px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          width: 100%;
          max-width: 480px;
          padding: 1.75rem;
          position: relative;
          animation: modal-scale 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes modal-scale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .clay-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .clay-modal-badge {
          font-size: 0.68rem;
          font-weight: 900;
          color: #2563eb;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .clay-modal-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0.2rem 0 0 0;
        }
        .clay-modal-subtitle {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0.2rem 0 0 0;
        }
        .clay-modal-close {
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-weight: 800;
          cursor: pointer;
          color: #64748b;
          transition: all 0.15s;
        }
        .clay-modal-close:hover {
          background: #e2e8f0;
          color: #0f172a;
        }
        .clay-modal-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .clay-modal-actions {
          display: flex;
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
};
