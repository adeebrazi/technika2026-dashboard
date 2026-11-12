import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldAlert,
  Plus,
  Trash2,
  Shield,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  FileSpreadsheet,
  QrCode,
  CreditCard,
  Phone,
  Trash,
  Database,
  Search,
  Sparkles,
  Send,
  UserCheck,
  MessageSquare
} from 'lucide-react';
import { getAdminIdentity, fetchAdminApi, getAdminPhotoUrl } from '../../utils/adminAuth';

export interface StaffPermissions {
  canViewPhone: boolean;
  canViewEmail: boolean;
  canSendEmail: boolean;
  canVerifyPayments: boolean;
  canCheckIn: boolean;
  canExportCSV: boolean;
  canDelete: boolean;
  canManageWhatsapp?: boolean;
  canViewContact?: boolean;
}

export interface StaffUser {
  _id?: string;
  name: string;
  email: string;
  role: 'admin' | 'faculty' | 'coordinator' | 'volunteer';
  designation: string;
  permissions?: StaffPermissions;
  isPermanent?: boolean;
  isActive?: boolean;
  createdAt?: string;
}

export const AccessControlView: React.FC = () => {
  const navigate = useNavigate();
  const { canAccessAccessControl } = getAdminIdentity();

  // Strict Authorization: Exclusively Adeeb Razi and Prof. Mamatha Vayelapelli
  if (!canAccessAccessControl) {
    return (
      <div className="fresh-access-denied">
        <div className="denied-box">
          <ShieldAlert size={56} className="denied-icon" />
          <h2>Access Restricted</h2>
          <p>
            Access Control and staff permission management are restricted exclusively to <strong>Adeeb Razi</strong> and <strong>Prof. Mamatha Vayelapelli</strong>.
          </p>
          <button onClick={() => navigate('/admin/participants')} className="denied-return-btn">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const [staffUsers, setStaffUsers] = useState<StaffUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'admin' | 'faculty' | 'coordinator' | 'volunteer'>('all');
  const [saveToast, setSaveToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [savingKey, setSavingKey] = useState<string | null>(null);

  // Modal State for Adding Staff
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [newStaffData, setNewStaffData] = useState<{
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'faculty' | 'coordinator' | 'volunteer';
    designation: string;
  }>({
    name: '',
    email: '',
    password: '',
    role: 'coordinator',
    designation: 'Event Coordinator',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [modalError, setModalError] = useState<string>('');
  const [modalSubmitting, setModalSubmitting] = useState<boolean>(false);

  // Fetch staff users from MongoDB database
  const fetchStaffUsers = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetchAdminApi('/api/admin/staff', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.staff) {
          setStaffUsers(data.staff);
        }
      }
    } catch (err) {
      console.warn('Could not fetch staff from database:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaffUsers();
  }, []);

  const handleRoleSelectionInModal = (selectedRole: 'admin' | 'faculty' | 'coordinator' | 'volunteer') => {
    const defaultDesignations: Record<string, string> = {
      admin: 'Administrator',
      faculty: 'Faculty Coordinator',
      coordinator: 'Student Coordinator',
      volunteer: 'Desk Volunteer'
    };
    setNewStaffData(prev => ({
      ...prev,
      role: selectedRole,
      designation: defaultDesignations[selectedRole] || 'Staff Member'
    }));
  };

  const handleCreateStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError('');

    if (!newStaffData.name.trim() || !newStaffData.email.trim() || !newStaffData.password.trim()) {
      setModalError('Please enter name, email, and password.');
      return;
    }

    if (newStaffData.password.trim().length < 6) {
      setModalError('Password must be at least 6 characters long.');
      return;
    }

    setModalSubmitting(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetchAdminApi('/api/admin/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newStaffData)
      });

      const data = await res.json();
      if (res.ok) {
        setSaveToast({ message: `✓ Account created for ${newStaffData.name} and saved to MongoDB!`, type: 'success' });
        setIsAddModalOpen(false);
        setNewStaffData({
          name: '',
          email: '',
          password: '',
          role: 'coordinator',
          designation: 'Event Coordinator',
        });
        await fetchStaffUsers();
        setTimeout(() => setSaveToast(null), 3500);
      } else {
        setModalError(data.message || 'Failed to create staff account.');
      }
    } catch {
      setModalError('Network error while creating staff account.');
    } finally {
      setModalSubmitting(false);
    }
  };

  const handleDeleteStaff = async (staff: StaffUser) => {
    if (staff.isPermanent || staff.email.toLowerCase() === 'adeeb@technika2026.online') {
      alert('Master Administrator (Adeeb Razi) is permanently protected and cannot be deleted.');
      return;
    }

    if (!window.confirm(`Are you sure you want to permanently delete "${staff.name}" (${staff.email})?\n\nThis will remove their database record and revoke login access.`)) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const idToDel = staff._id || staff.email;
      const res = await fetchAdminApi(`/api/admin/staff/${encodeURIComponent(idToDel)}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await res.json();
      if (res.ok) {
        setSaveToast({ message: `✓ Removed ${staff.name} from MongoDB`, type: 'success' });
        setStaffUsers(prev => prev.filter(s => (s._id !== staff._id && s.email.toLowerCase() !== staff.email.toLowerCase())));
        setTimeout(() => setSaveToast(null), 3500);
      } else {
        setSaveToast({ message: data.message || 'Failed to delete staff member.', type: 'error' });
      }
    } catch {
      setSaveToast({ message: 'Network error while deleting staff member.', type: 'error' });
    }
  };

  // Instant Database-Driven Toggle for the 5 Limited Permissions
  const handleTogglePermission = async (staff: StaffUser, permKey: keyof StaffPermissions) => {
    if (staff.isPermanent || staff.role === 'admin') return;

    const currentPerms: StaffPermissions = staff.permissions ? { ...staff.permissions } : {
      canViewPhone: staff.role === 'faculty',
      canViewEmail: staff.role === 'faculty',
      canSendEmail: staff.role === 'faculty',
      canVerifyPayments: staff.role === 'faculty',
      canCheckIn: true,
      canExportCSV: staff.role === 'faculty',
      canDelete: false,
      canManageWhatsapp: false,
    };

    const nextVal = !currentPerms[permKey];
    const updatedPerms: StaffPermissions = {
      ...currentPerms,
      [permKey]: nextVal,
    };
    if (permKey === 'canViewPhone') {
      updatedPerms.canViewContact = nextVal;
    }

    // 1. Optimistic UI Update
    setStaffUsers(prev => prev.map(s => {
      if ((staff._id && s._id === staff._id) || s.email.toLowerCase() === staff.email.toLowerCase()) {
        return { ...s, permissions: updatedPerms };
      }
      return s;
    }));

    const keyTag = `${staff._id || staff.email}-${permKey}`;
    setSavingKey(keyTag);

    // 2. Persist directly to MongoDB
    try {
      const token = localStorage.getItem('adminToken');
      const idToUpdate = staff._id || staff.email;
      const res = await fetchAdminApi(`/api/admin/staff/${encodeURIComponent(idToUpdate)}/permissions`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ permissions: updatedPerms })
      });

      if (res.ok) {
        const labelMap: Record<keyof StaffPermissions, string> = {
          canViewPhone: 'Contact (Phone)',
          canViewEmail: 'Email Address',
          canSendEmail: 'Send Email',
          canVerifyPayments: 'Payment Details',
          canCheckIn: 'Check-In Desk',
          canExportCSV: 'Export CSV',
          canDelete: 'Delete Power',
          canManageWhatsapp: 'WhatsApp Management',
          canViewContact: 'Contact (Phone)'
        };
        setSaveToast({
          message: `✓ ${labelMap[permKey]} ${nextVal ? 'Granted' : 'Revoked'} for ${staff.name} (Saved in MongoDB)`,
          type: 'success'
        });
        setTimeout(() => setSavingKey(null), 1200);
        setTimeout(() => setSaveToast(null), 3000);
      } else {
        throw new Error('Database update failed');
      }
    } catch (err) {
      // Revert optimistic update on failure
      setStaffUsers(prev => prev.map(s => {
        if ((staff._id && s._id === staff._id) || s.email.toLowerCase() === staff.email.toLowerCase()) {
          return { ...s, permissions: currentPerms };
        }
        return s;
      }));
      setSavingKey(null);
      setSaveToast({ message: '⚠️ Failed to save changes to database.', type: 'error' });
      setTimeout(() => setSaveToast(null), 3500);
    }
  };

  // Filter staff list
  const filteredStaff = staffUsers.filter(s => {
    if (roleFilter !== 'all' && s.role !== roleFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name?.toLowerCase().includes(q) ||
      s.email?.toLowerCase().includes(q) ||
      s.designation?.toLowerCase().includes(q)
    );
  });

  const adminCount = staffUsers.filter(s => s.role === 'admin').length;
  const facultyCount = staffUsers.filter(s => s.role === 'faculty').length;
  const coordinatorCount = staffUsers.filter(s => s.role === 'coordinator').length;
  const volunteerCount = staffUsers.filter(s => s.role === 'volunteer').length;

  return (
    <div className="fresh-access-wrap">
      {/* ── Top Header Bar ── */}
      <div className="fresh-header-card">
        <div className="header-left-col">
          <div className="header-icon-badge">
            <Shield className="icon-main" />
          </div>
          <div>
            <div className="title-row">
              <h1 className="header-title">Staff &amp; Access Control</h1>
              <span className="live-db-pill">
                <Database size={13} className="pill-icon" />
                <span>{loading ? 'Syncing...' : 'MongoDB Synced'}</span>
              </span>
            </div>
            <p className="header-sub">
              Manage festival personnel credentials and limited privilege switches saved directly to database.
            </p>
          </div>
        </div>

        <div className="header-actions">
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="btn-create-staff"
          >
            <Plus size={18} />
            <span>Add Staff Member</span>
          </button>
        </div>
      </div>

      {/* ── Toast Notification ── */}
      {saveToast && (
        <div className={`fresh-toast ${saveToast.type}`}>
          <div className="toast-content">
            {saveToast.type === 'success' ? <CheckCircle2 size={18} /> : <ShieldAlert size={18} />}
            <span>{saveToast.message}</span>
          </div>
        </div>
      )}

      {/* ── Toolbar with Colorful Filter Chips & Search (Unified) ── */}
      <div className="fresh-toolbar">
        <div className="fresh-stats-bar">
          <button
            type="button"
            className={`stat-chip total ${roleFilter === 'all' ? 'active' : ''}`}
            onClick={() => setRoleFilter('all')}
            title="Show all personnel"
          >
            <User size={16} />
            <span>Total Staff: <strong>{staffUsers.length}</strong></span>
          </button>
          <button
            type="button"
            className={`stat-chip admin ${roleFilter === 'admin' ? 'active' : ''}`}
            onClick={() => setRoleFilter('admin')}
            title="Filter Administrators"
          >
            <Shield size={16} />
            <span>Administrators: <strong>{adminCount}</strong></span>
          </button>
          <button
            type="button"
            className={`stat-chip faculty ${roleFilter === 'faculty' ? 'active' : ''}`}
            onClick={() => setRoleFilter('faculty')}
            title="Filter Faculty Coordinators"
          >
            <Sparkles size={16} />
            <span>Faculty: <strong>{facultyCount}</strong></span>
          </button>
          <button
            type="button"
            className={`stat-chip coordinator ${roleFilter === 'coordinator' ? 'active' : ''}`}
            onClick={() => setRoleFilter('coordinator')}
            title="Filter Student Coordinators"
          >
            <QrCode size={16} />
            <span>Coordinators: <strong>{coordinatorCount}</strong></span>
          </button>
          <button
            type="button"
            className={`stat-chip volunteer ${roleFilter === 'volunteer' ? 'active' : ''}`}
            onClick={() => setRoleFilter('volunteer')}
            title="Filter Desk Volunteers"
          >
            <UserCheck size={16} />
            <span>Volunteers: <strong>{volunteerCount}</strong></span>
          </button>
        </div>

        <div className="search-box-wrap">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, or designation..."
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
      </div>

      {/* ── Limited Permissions Legend ── */}
      <div className="limited-legend-bar">
        <span className="legend-label">Limited Privileges Key:</span>
        <div className="legend-items">
          <span className="legend-item"><Phone size={13} /> Contact (Phone)</span>
          <span className="legend-item"><Mail size={13} /> Email Address</span>
          <span className="legend-item"><Send size={13} /> Send Email</span>
          <span className="legend-item"><CreditCard size={13} /> Payment Details</span>
          <span className="legend-item"><QrCode size={13} /> Check-In Desk</span>
          <span className="legend-item"><FileSpreadsheet size={13} /> Export Excel</span>
          <span className="legend-item"><MessageSquare size={13} /> WhatsApp Management</span>
          <span className="legend-item"><Trash size={13} /> Delete Power</span>
        </div>
      </div>

      {/* ── Staff Cards Grid ── */}
      <div className="fresh-cards-grid">
        {filteredStaff.map((staff, idx) => {
          const isMaster = Boolean(staff.isPermanent) || staff.email.toLowerCase() === 'adeeb@technika2026.online';
          const isAdmin = staff.role === 'admin';
          const photo = getAdminPhotoUrl(staff.name, staff.email);

          // Resolve effective permissions
          const p: StaffPermissions = staff.permissions || {
            canViewPhone: isAdmin || staff.role === 'faculty',
            canViewEmail: isAdmin || staff.role === 'faculty',
            canSendEmail: isAdmin || staff.role === 'faculty',
            canVerifyPayments: isAdmin || staff.role === 'faculty',
            canCheckIn: true,
            canExportCSV: isAdmin || staff.role === 'faculty',
            canDelete: isAdmin,
          };

          return (
            <div
              key={staff._id || idx}
              className={`fresh-staff-card ${isMaster ? 'master-card' : ''} ${staff.role}`}
            >
              {/* Card Header */}
              <div className="card-header-area">
                <div className="avatar-side">
                  {photo ? (
                    <img src={photo} alt={staff.name} className="avatar-img" />
                  ) : (
                    <div className={`avatar-fallback ${staff.role}`}>
                      {staff.name?.charAt(0) || 'S'}
                    </div>
                  )}
                  {isMaster && (
                    <span className="crown-badge" title="Master Root Administrator">👑</span>
                  )}
                </div>

                <div className="profile-side">
                  <div className="profile-name-row">
                    <h3 className="profile-name">{staff.name}</h3>
                    <span className={`role-tag ${staff.role}`}>
                      {staff.role === 'admin'
                        ? 'Admin'
                        : staff.role === 'faculty'
                        ? 'Faculty'
                        : staff.role === 'volunteer'
                        ? 'Volunteer'
                        : 'Coordinator'}
                    </span>
                  </div>
                  <div className="profile-designation">{staff.designation || 'Staff Member'}</div>
                  <div className="profile-email">
                    <Mail size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    <span>{staff.email}</span>
                  </div>
                </div>

                <div className="card-action-side">
                  {isMaster ? (
                    <div className="locked-badge" title="Permanent Root account cannot be deleted">
                      <Lock size={14} />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleDeleteStaff(staff)}
                      className="btn-trash-staff"
                      title={`Delete account for ${staff.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Limited Permissions Section */}
              <div className="card-permissions-area">
                <div className="perm-section-title">
                  <span>Database Access Privileges</span>
                  {isAdmin && <span className="admin-all-clear">Full Authority</span>}
                </div>

                {isAdmin ? (
                  <div className="admin-full-banner">
                    <Shield size={16} color="#6366f1" />
                    <span>All limited privileges are permanently granted for Administrators.</span>
                  </div>
                ) : (
                  <div className="limited-toggles-grid">
                    {/* 1. Contact (Phone) */}
                    <div className={`perm-toggle-tile ${p.canViewPhone ? 'active' : ''}`}>
                      <div className="tile-info">
                        <Phone size={15} className="tile-icon" />
                        <div>
                          <div className="tile-title">Contact (Phone)</div>
                          <div className="tile-desc">WhatsApp &amp; phone number</div>
                        </div>
                      </div>
                      <div className="switch-wrap">
                        {savingKey === `${staff._id || staff.email}-canViewPhone` && (
                          <span className="saving-pulse">Saving...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(staff, 'canViewPhone')}
                          className={`switch-btn ${p.canViewPhone ? 'on' : 'off'}`}
                        >
                          <span className="switch-thumb" />
                        </button>
                      </div>
                    </div>

                    {/* 2. Email Address */}
                    <div className={`perm-toggle-tile ${p.canViewEmail ? 'active' : ''}`}>
                      <div className="tile-info">
                        <Mail size={15} className="tile-icon" />
                        <div>
                          <div className="tile-title">Email Address</div>
                          <div className="tile-desc">View participant email</div>
                        </div>
                      </div>
                      <div className="switch-wrap">
                        {savingKey === `${staff._id || staff.email}-canViewEmail` && (
                          <span className="saving-pulse">Saving...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(staff, 'canViewEmail')}
                          className={`switch-btn ${p.canViewEmail ? 'on' : 'off'}`}
                        >
                          <span className="switch-thumb" />
                        </button>
                      </div>
                    </div>

                    {/* 3. Send Email */}
                    <div className={`perm-toggle-tile ${p.canSendEmail ? 'active' : ''}`}>
                      <div className="tile-info">
                        <Send size={15} className="tile-icon" />
                        <div>
                          <div className="tile-title">Send Email</div>
                          <div className="tile-desc">Dispatch QR passes &amp; emails</div>
                        </div>
                      </div>
                      <div className="switch-wrap">
                        {savingKey === `${staff._id || staff.email}-canSendEmail` && (
                          <span className="saving-pulse">Saving...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(staff, 'canSendEmail')}
                          className={`switch-btn ${p.canSendEmail ? 'on' : 'off'}`}
                        >
                          <span className="switch-thumb" />
                        </button>
                      </div>
                    </div>

                    {/* 4. Payment Details */}
                    <div className={`perm-toggle-tile ${p.canVerifyPayments ? 'active' : ''}`}>
                      <div className="tile-info">
                        <CreditCard size={15} className="tile-icon" />
                        <div>
                          <div className="tile-title">Payment Details</div>
                          <div className="tile-desc">Verify UPI, slips &amp; fees</div>
                        </div>
                      </div>
                      <div className="switch-wrap">
                        {savingKey === `${staff._id || staff.email}-canVerifyPayments` && (
                          <span className="saving-pulse">Saving...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(staff, 'canVerifyPayments')}
                          className={`switch-btn ${p.canVerifyPayments ? 'on' : 'off'}`}
                        >
                          <span className="switch-thumb" />
                        </button>
                      </div>
                    </div>

                    {/* 5. Check-In Desk */}
                    <div className={`perm-toggle-tile ${p.canCheckIn ? 'active' : ''}`}>
                      <div className="tile-info">
                        <QrCode size={15} className="tile-icon" />
                        <div>
                          <div className="tile-title">Check-In Desk</div>
                          <div className="tile-desc">Scan venue QR codes</div>
                        </div>
                      </div>
                      <div className="switch-wrap">
                        {savingKey === `${staff._id || staff.email}-canCheckIn` && (
                          <span className="saving-pulse">Saving...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(staff, 'canCheckIn')}
                          className={`switch-btn ${p.canCheckIn ? 'on' : 'off'}`}
                        >
                          <span className="switch-thumb" />
                        </button>
                      </div>
                    </div>

                    {/* 6. Export Excel */}
                    <div className={`perm-toggle-tile ${p.canExportCSV ? 'active' : ''}`}>
                      <div className="tile-info">
                        <FileSpreadsheet size={15} className="tile-icon" />
                        <div>
                          <div className="tile-title">Export Excel</div>
                          <div className="tile-desc">Download 3-sheet XLSX workbooks</div>
                        </div>
                      </div>
                      <div className="switch-wrap">
                        {savingKey === `${staff._id || staff.email}-canExportCSV` && (
                          <span className="saving-pulse">Saving...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(staff, 'canExportCSV')}
                          className={`switch-btn ${p.canExportCSV ? 'on' : 'off'}`}
                        >
                          <span className="switch-thumb" />
                        </button>
                      </div>
                    </div>

                                        {/* 7. WhatsApp Management */}
                    <div className={`perm-toggle-tile ${p.canManageWhatsapp ? 'active' : ''}`}>
                      <div className="tile-info">
                        <MessageSquare size={15} className="tile-icon" />
                        <div>
                          <div className="tile-title">WhatsApp Management</div>
                          <div className="tile-desc">Group allocation &amp; rollover</div>
                        </div>
                      </div>
                      <div className="switch-wrap">
                        {savingKey === `${staff._id || staff.email}-canManageWhatsapp` && (
                          <span className="saving-pulse">Saving...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(staff, 'canManageWhatsapp')}
                          className={`switch-btn ${p.canManageWhatsapp ? 'on' : 'off'}`}
                        >
                          <span className="switch-thumb" />
                        </button>
                      </div>
                    </div>

                    {/* 8. Delete Records */}
                    <div className={`perm-toggle-tile ${p.canDelete ? 'active danger' : ''}`}>
                      <div className="tile-info">
                        <Trash size={15} className="tile-icon danger" />
                        <div>
                          <div className="tile-title">Delete Power</div>
                          <div className="tile-desc">Purge registrations</div>
                        </div>
                      </div>
                      <div className="switch-wrap">
                        {savingKey === `${staff._id || staff.email}-canDelete` && (
                          <span className="saving-pulse">Saving...</span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(staff, 'canDelete')}
                          className={`switch-btn danger ${p.canDelete ? 'on' : 'off'}`}
                        >
                          <span className="switch-thumb" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filteredStaff.length === 0 && (
          <div className="fresh-empty-state">
            <Search size={36} color="#94a3b8" />
            <h3>No Staff Found</h3>
            <p>No personnel records matched your filter query.</p>
          </div>
        )}
      </div>

      {/* ── Modal for Adding New Staff Member ── */}
      {isAddModalOpen && (
        <div className="fresh-modal-backdrop" onClick={() => setIsAddModalOpen(false)}>
          <div className="fresh-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon-wrap">
                <Plus size={20} />
              </div>
              <div>
                <h3 className="modal-title">Add Staff Member</h3>
                <p className="modal-sub">Create credentials saved directly into MongoDB.</p>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setIsAddModalOpen(false)}
              >
                ✕
              </button>
            </div>

            {modalError && (
              <div className="modal-alert-error">
                <ShieldAlert size={16} />
                <span>{modalError}</span>
              </div>
            )}

            <form onSubmit={handleCreateStaff} className="modal-form">
              <div className="form-row">
                <label className="form-label">Full Name</label>
                <div className="input-wrap">
                  <User size={16} className="field-icon" />
                  <input
                    type="text"
                    required
                    value={newStaffData.name}
                    onChange={(e) => setNewStaffData({ ...newStaffData, name: e.target.value })}
                    placeholder="e.g. Awesh Hussain"
                    className="text-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <label className="form-label">Email Address (Login Username)</label>
                <div className="input-wrap">
                  <Mail size={16} className="field-icon" />
                  <input
                    type="email"
                    required
                    value={newStaffData.email}
                    onChange={(e) => setNewStaffData({ ...newStaffData, email: e.target.value })}
                    placeholder="e.g. awesh@technika2026.online"
                    className="text-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <label className="form-label">Password</label>
                <div className="input-wrap">
                  <Lock size={16} className="field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={newStaffData.password}
                    onChange={(e) => setNewStaffData({ ...newStaffData, password: e.target.value })}
                    placeholder="Minimum 6 characters"
                    className="text-input"
                  />
                  <button
                    type="button"
                    className="eye-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="form-row">
                <label className="form-label">Account Role</label>
                <select
                  value={newStaffData.role}
                  onChange={(e) => handleRoleSelectionInModal(e.target.value as any)}
                  className="select-input"
                >
                  <option value="coordinator">Student Coordinator</option>
                  <option value="faculty">Faculty Coordinator</option>
                  <option value="admin">Administrator</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              <div className="form-row">
                <label className="form-label">Designation / Title</label>
                <input
                  type="text"
                  value={newStaffData.designation}
                  onChange={(e) => setNewStaffData({ ...newStaffData, designation: e.target.value })}
                  placeholder="e.g. Event Coordinator, Technical Lead, Stage Incharge"
                  className="text-input no-icon"
                />
              </div>

              <div className="modal-btn-row">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="btn-cancel"
                  disabled={modalSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={modalSubmitting}
                >
                  {modalSubmitting ? 'Saving to Database...' : '✓ Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Fresh Component Styles ── */}
      <style>{`
        .fresh-access-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.5rem 1rem 3rem 1rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #0f172a;
          box-sizing: border-box;
          width: 100%;
        }

        /* Top Header Card */
        .fresh-header-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 1.5rem 2rem;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
          margin-bottom: 1.5rem;
        }

        .header-left-col {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .header-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(79, 70, 229, 0.25);
        }

        .icon-main {
          width: 28px;
          height: 28px;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .header-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .live-db-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .header-sub {
          margin: 0.35rem 0 0 0;
          color: #64748b;
          font-size: 0.88rem;
          line-height: 1.4;
        }

        .btn-create-staff {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);
          transition: all 0.2s ease;
        }

        .btn-create-staff:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);
        }

        /* Toast */
        .fresh-toast {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.9rem 1.4rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.88rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .fresh-toast.success .toast-content {
          background: #065f46;
          color: #ffffff;
        }

        .fresh-toast.error .toast-content {
          background: #991b1b;
          color: #ffffff;
        }

        /* Toolbar & Interactive Colorful Filter Chips */
        .fresh-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 1.25rem;
        }

        .fresh-stats-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .stat-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.55rem 1.1rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          color: #334155;
        }

        .stat-chip:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
        }

        /* Total Staff */
        .stat-chip.total {
          color: #0f172a;
        }
        .stat-chip.total.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
        }

        /* Administrators */
        .stat-chip.admin {
          color: #4338ca;
        }
        .stat-chip.admin.active {
          background: #4338ca;
          color: #ffffff;
          border-color: #4338ca;
          box-shadow: 0 4px 12px rgba(67, 56, 202, 0.25);
        }

        /* Faculty */
        .stat-chip.faculty {
          color: #b45309;
        }
        .stat-chip.faculty.active {
          background: #b45309;
          color: #ffffff;
          border-color: #b45309;
          box-shadow: 0 4px 12px rgba(180, 83, 9, 0.25);
        }

        /* Coordinators */
        .stat-chip.coordinator {
          color: #0284c7;
        }
        .stat-chip.coordinator.active {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);
        }

        /* Volunteers */
        .stat-chip.volunteer {
          color: #059669;
        }
        .stat-chip.volunteer.active {
          background: #059669;
          color: #ffffff;
          border-color: #059669;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
        }

        .search-box-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.45rem 0.85rem;
          width: 340px;
          max-width: 100%;
        }

        .search-icon {
          color: #94a3b8;
        }

        .search-input {
          border: none;
          outline: none;
          font-size: 0.85rem;
          width: 100%;
          color: #0f172a;
        }

        .search-clear-btn {
          border: none;
          background: transparent;
          color: #94a3b8;
          font-size: 0.85rem;
          cursor: pointer;
        }

        /* Limited Privileges Legend Bar */
        .limited-legend-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          background: #f8fafc;
          border: 1px dashed #cbd5e1;
          border-radius: 12px;
          padding: 0.6rem 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.78rem;
          color: #64748b;
        }

        .legend-label {
          font-weight: 700;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .legend-items {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #ffffff;
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          font-weight: 600;
          color: #475569;
        }

        /* Cards Grid */
        .fresh-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 1.25rem;
        }

        @media (max-width: 640px) {
          .fresh-access-wrap {
            padding: 0.5rem 0 2rem 0 !important;
            width: 100% !important;
          }
          .fresh-header-card {
            padding: 1rem !important;
            border-radius: 16px !important;
            gap: 0.85rem !important;
          }
          .header-left-col {
            gap: 0.75rem !important;
            width: 100% !important;
          }
          .header-icon-badge {
            width: 42px !important;
            height: 42px !important;
            border-radius: 12px !important;
            flex-shrink: 0 !important;
          }
          .icon-main {
            width: 22px !important;
            height: 22px !important;
          }
          .header-title {
            font-size: 1.15rem !important;
          }
          .header-sub {
            font-size: 0.78rem !important;
          }
          .btn-create-staff {
            width: 100% !important;
            justify-content: center !important;
            font-size: 0.82rem !important;
            padding: 0.65rem 1rem !important;
          }
          .fresh-toolbar {
            gap: 8px !important;
            width: 100% !important;
          }
          .fresh-stats-bar {
            gap: 6px !important;
            width: 100% !important;
          }
          .stat-chip {
            padding: 0.4rem 0.7rem !important;
            font-size: 0.75rem !important;
            border-radius: 10px !important;
          }
          .search-box-wrap {
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .limited-legend-bar {
            padding: 0.5rem 0.75rem !important;
            font-size: 0.72rem !important;
          }
          .fresh-cards-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            width: 100% !important;
            gap: 1rem !important;
          }
          .fresh-staff-card {
            padding: 1rem !important;
            border-radius: 16px !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }
          .card-header-area {
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .card-permissions-area {
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .perm-section-title {
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .profile-name {
            font-size: 0.95rem !important;
            word-break: break-word !important;
          }
          .profile-email {
            font-size: 0.72rem !important;
            display: flex !important;
            align-items: center !important;
            min-width: 0 !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          .profile-email span {
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
            min-width: 0 !important;
          }
        }

        /* Individual Staff Card */
        .fresh-staff-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.25rem;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          transition: all 0.2s ease;
          min-width: 0;
          max-width: 100%;
          box-sizing: border-box;
        }

        .fresh-staff-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.08);
        }

        .fresh-staff-card.master-card {
          border: 2px solid #f59e0b;
          background: linear-gradient(180deg, #fffbeb 0%, #ffffff 30%);
        }

        /* Card Header Area */
        .card-header-area {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .avatar-side {
          position: relative;
        }

        .avatar-img {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          object-fit: cover;
          border: 2px solid #e2e8f0;
        }

        .avatar-fallback {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.3rem;
          color: #ffffff;
        }

        .avatar-fallback.admin {
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
        }

        .avatar-fallback.faculty {
          background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
        }

        .avatar-fallback.coordinator {
          background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%);
        }

        .avatar-fallback.volunteer {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
        }

        .crown-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          font-size: 1rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        .profile-side {
          flex: 1;
          min-width: 0;
        }

        .profile-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .profile-name {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .role-tag {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .role-tag.admin {
          background: #e0e7ff;
          color: #4338ca;
        }

        .role-tag.faculty {
          background: #fef3c7;
          color: #b45309;
        }

        .role-tag.coordinator {
          background: #e0f2fe;
          color: #0369a1;
        }

        .role-tag.volunteer {
          background: #d1fae5;
          color: #065f46;
        }

        .profile-designation {
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          margin-top: 2px;
        }

        .profile-email {
          font-size: 0.76rem;
          color: #94a3b8;
          margin-top: 3px;
          display: flex;
          align-items: center;
          min-width: 0;
          overflow: hidden;
        }

        .profile-email span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }

        .card-action-side {
          margin-left: auto;
        }

        .locked-badge {
          background: #fef3c7;
          color: #d97706;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-trash-staff {
          background: transparent;
          border: 1px solid #fee2e2;
          color: #ef4444;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .btn-trash-staff:hover {
          background: #ef4444;
          color: #ffffff;
        }

        /* Card Permissions Area */
        .card-permissions-area {
          border-top: 1px solid #f1f5f9;
          padding-top: 0.9rem;
        }

        .perm-section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          margin-bottom: 0.75rem;
        }

        .admin-all-clear {
          color: #4f46e5;
          background: #eef2ff;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .admin-full-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #4338ca;
        }

        /* Limited Toggles Grid */
        .limited-toggles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
        }

        .perm-toggle-tile {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          transition: all 0.15s ease;
        }

        .perm-toggle-tile.active {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }

        .perm-toggle-tile.active.danger {
          background: #fef2f2;
          border-color: #fecaca;
        }

        .tile-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tile-icon {
          color: #64748b;
        }

        .perm-toggle-tile.active .tile-icon {
          color: #16a34a;
        }

        .perm-toggle-tile.active.danger .tile-icon.danger {
          color: #dc2626;
        }

        .tile-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1e293b;
        }

        .tile-desc {
          font-size: 0.7rem;
          color: #64748b;
        }

        /* iOS Switch Button */
        .switch-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .saving-pulse {
          font-size: 0.72rem;
          font-weight: 700;
          color: #059669;
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .switch-btn {
          width: 44px;
          height: 24px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          position: relative;
          background: #cbd5e1;
          transition: background 0.2s ease;
          padding: 2px;
        }

        .switch-btn.on {
          background: #16a34a;
        }

        .switch-btn.danger.on {
          background: #dc2626;
        }

        .switch-thumb {
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
        }

        .switch-btn.on .switch-thumb {
          transform: translateX(20px);
        }

        /* Empty State */
        .fresh-empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem 1rem;
          background: #ffffff;
          border: 1px dashed #cbd5e1;
          border-radius: 16px;
        }

        .fresh-empty-state h3 {
          margin: 0.75rem 0 0.25rem 0;
          color: #334155;
        }

        .fresh-empty-state p {
          margin: 0;
          color: #94a3b8;
          font-size: 0.88rem;
        }

        /* Modal Styles */
        .fresh-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
        }

        .fresh-modal-box {
          background: #ffffff;
          border-radius: 20px;
          width: 480px;
          max-width: 100%;
          padding: 1.75rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.25rem;
          position: relative;
        }

        .modal-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #eef2ff;
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-title {
          font-size: 1.15rem;
          font-weight: 800;
          margin: 0;
          color: #0f172a;
        }

        .modal-sub {
          margin: 2px 0 0 0;
          font-size: 0.8rem;
          color: #64748b;
        }

        .modal-close {
          position: absolute;
          top: 0;
          right: 0;
          background: transparent;
          border: none;
          font-size: 1.1rem;
          color: #94a3b8;
          cursor: pointer;
        }

        .modal-alert-error {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fee2e2;
          color: #991b1b;
          padding: 0.65rem 0.9rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }

        .input-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0.6rem 0.85rem;
          background: #ffffff;
        }

        .input-wrap:focus-within {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .field-icon {
          color: #94a3b8;
        }

        .text-input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.88rem;
          color: #0f172a;
        }

        .text-input.no-icon {
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0.6rem 0.85rem;
          outline: none;
        }

        .text-input.no-icon:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .eye-toggle {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
        }

        .select-input {
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0.65rem 0.85rem;
          font-size: 0.88rem;
          background: #ffffff;
          outline: none;
          color: #0f172a;
        }

        .select-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .modal-btn-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 0.5rem;
        }

        .btn-cancel {
          background: #f1f5f9;
          border: none;
          color: #475569;
          padding: 0.65rem 1.25rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .btn-submit {
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: #ffffff;
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        /* Access Denied */
        .fresh-access-denied {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .denied-box {
          background: #ffffff;
          border: 1px solid #fee2e2;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          max-width: 440px;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.08);
        }

        .denied-icon {
          color: #ef4444;
          margin-bottom: 1rem;
        }

        .denied-box h2 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #991b1b;
          margin: 0 0 0.5rem 0;
        }

        .denied-box p {
          color: #64748b;
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .denied-return-btn {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
