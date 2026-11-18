const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const connectDB = require('../config/db');
const AdminUser = require('../models/AdminUser');

async function run() {
  await connectDB();
  console.log('MongoDB connection established.');

  const filter = {
    $or: [
      { role: 'event_coordinator' },
      { designation: /Event Coordinator/i },
      { assignedEvent: { $exists: true, $ne: '' } }
    ]
  };

  const targetPermissions = {
    canViewPhone: true,
    canViewEmail: true,
    canSendEmail: false,
    canVerifyPayments: true,
    canCheckIn: true,
    canExportCSV: false,
    canDelete: false,
    canManageWhatsapp: false,
    canViewContact: true
  };

  const coordinators = await AdminUser.find(filter);
  console.log(`Found ${coordinators.length} Event Coordinator accounts.`);

  let count = 0;
  for (const c of coordinators) {
    c.permissions = { ...targetPermissions };
    await c.save();
    count++;
    console.log(`[${count}/${coordinators.length}] Updated ${c.email} (${c.assignedEvent}): Phone=ON, Email=ON, Payment=ON, CheckIn=ON`);
  }

  console.log(`\nSuccessfully updated all ${count} accounts!`);

  // Verify Sudoku specifically as requested in user's image
  const sudoku = await AdminUser.findOne({ email: 'sudoku@technika2026.online' });
  console.log('\n--- Sudoku Verification ---');
  console.log('Email:', sudoku.email);
  console.log('Role:', sudoku.role);
  console.log('Assigned Event:', sudoku.assignedEvent);
  console.log('Permissions:', JSON.stringify(sudoku.permissions, null, 2));

  process.exit(0);
}

run().catch(err => {
  console.error('Error updating permissions:', err);
  process.exit(1);
});
