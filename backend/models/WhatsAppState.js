const mongoose = require('mongoose');

const groupItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  tag: { type: String, required: true },
  link: { type: String, required: true },
  count: { type: Number, default: 0 },
  status: { type: String, default: 'LOCKED', enum: ['OPEN', 'LOCKED', 'FROZEN'] },
  accent: { type: String, default: '#00FF66' }
}, { _id: false });

const whatsAppStateSchema = new mongoose.Schema({
  key: { type: String, default: 'global_state', unique: true },
  limit: { type: Number, default: 1000 },
  groups: [groupItemSchema],
  activeGroupId: { type: Number, default: 1 },
  totalJoined: { type: Number, default: 0 },
  totalCapacity: { type: Number, default: 4000 },
  totalRemaining: { type: Number, default: 4000 },
  allFull: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('WhatsAppState', whatsAppStateSchema);
