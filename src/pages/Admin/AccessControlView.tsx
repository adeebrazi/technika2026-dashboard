import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Plus, Trash2, Shield, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { getAdminIdentity, API_BASE_URL as API, getAdminPhotoUrl } from '../../utils/adminAuth';

export interface StaffUser {
  _id?: string;
  name: string;
  email: string;
  role: 'admin' | 'faculty' | 'coordinator' | 'volunteer';
  designation: string;
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
      <div className="clay-access-denied">
        <div className="clay-denied-card">
          <div className="clay-denied-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <ShieldAlert size={54} color="#ef4444" />
          </div>
          <h2>Access Restricted</h2>
          <p style={{ maxWidth: '420px', margin: '0 auto 1.5rem auto', color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>
            Access Control and staff management are restricted exclusively to <strong>Adeeb Razi</strong> and <strong>Prof. Mamatha Vayelapelli</strong>.
          </p>
          <button onClick={() => navigate('/admin/participants')} className="clay-denied-btn">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const [staffUsers, setStaffUsers] = useState<StaffUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [staffSearchQuery, setStaffSearchQuery] = useState<string>('');
  const [staffRoleFilter, setStaffRoleFilter] = useState<'all' | 'admin' | 'faculty' | 'coordinator'>('all');
  const [saveToast, setSaveToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Modal State for Adding Staff
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState<boolean>(false);
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
    designation: 'Student Coordinator',
  });
  const [showModalPassword, setShowModalPassword] = useState<boolean>(false);
  const [modalError, setModalError] = useState<string>('');
  const [modalSubmitting, setModalSubmitting] = useState<boolean>(false);

  // Fetch staff users from MongoDB database
  const fetchStaffUsers = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API}/api/admin/staff`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.staff) {
          setStaffUsers(data.staff);
        }
      }
    } catch (err) {
      console.warn('Could not fetch staff accounts from DB:', err);
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
      const res = await fetch(`${API}/api/admin/staff`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newStaffData)
      });

      const data = await res.json();
      if (res.ok) {
        setSaveToast({ message: data.message || `Account created for ${newStaffData.name}!`, type: 'success' });
        setIsAddStaffModalOpen(false);
        setNewStaffData({
          name: '',
          email: '',
          password: '',
          role: 'coordinator',
          designation: 'Student Coordinator',
        });
        await fetchStaffUsers();
        setTimeout(() => setSaveToast(null), 3500);
      } else {
        setModalError(data.message || 'Failed to create staff member.');
      }
    } catch {
      setModalError('Network error while creating staff account.');
    } finally {
      setModalSubmitting(false);
    }
  };

  const handleDeleteStaff = async (staff: StaffUser) => {
    if (staff.isPermanent || staff.email.toLowerCase() === 'adeeb@technika2026.online') {
      alert('Master Administrator (Adeeb Razi) is permanent and cannot be deleted.');
      return;
    }

    if (!window.confirm(`Are you sure you want to permanently delete staff account for "${staff.name}" (${staff.email})?\n\nThis will immediately remove their access and delete their account from the system.`)) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const idToDel = staff._id || staff.email;
      const res = await fetch(`${API}/api/admin/staff/${encodeURIComponent(idToDel)}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await res.json();
      if (res.ok) {
        setSaveToast({ message: `Account for ${staff.name} deleted successfully`, type: 'success' });
        setStaffUsers(prev => prev.filter(s => (s._id !== staff._id && s.email.toLowerCase() !== staff.email.toLowerCase())));
        setTimeout(() => setSaveToast(null), 3500);
      } else {
        setSaveToast({ message: data.message || 'Failed to delete staff member.', type: 'error' });
      }
    } catch {
      setSaveToast({ message: 'Network error while deleting staff member.', type: 'error' });
    }
  };

  // Filtered staff list
  const filteredStaff = staffUsers.filter(s => {
    if (staffRoleFilter !== 'all' && s.role !== staffRoleFilter) return false;
    if (!staffSearchQuery.trim()) return true;
    const q = staffSearchQuery.toLowerCase();
    return (
      s.name?.toLowerCase().includes(q) ||
      s.email?.toLowerCase().includes(q) ||
      s.designation?.toLowerCase().includes(q)
    );
  });

  const adminCount = staffUsers.filter(s => s.role === 'admin').length;
  const facultyCount = staffUsers.filter(s => s.role === 'faculty').length;
  const coordinatorCount = staffUsers.filter(s => s.role === 'coordinator' || s.role === 'volunteer').length;

  return (
    <div className="clay-access-page">
      {/* ── Top Header ── */}
      <div className="clay-access-header">
        <div className="clay-header-left">
          <div className="clay-header-emblem">🛡️</div>
          <div>
            <h1 className="clay-page-title">ACCESS CONTROL &amp; STAFF MANAGEMENT</h1>
            <p className="clay-page-subtitle">
              Manage administrator, faculty, and coordinator credentials stored in MongoDB.
            </p>
          </div>
        </div>
        <div className="clay-admin-tag">
          <span className="clay-dot-live" />
          <span>{loading ? 'SYNCING DIRECTORY...' : 'ROOT ADMIN CLEARANCE'}</span>
        </div>
      </div>

      {/* ── Save Notification Toast ── */}
      {saveToast && (
        <div className={`clay-toast ${saveToast.type}`}>
          <span>{saveToast.type === 'success' ? '✓' : '⚠️'}</span>
          <span>{saveToast.message}</span>
        </div>
      )}

      {/* ── Staff Management Main Panel ── */}
      <div className="clay-panel-card clay-staff-management-card">
        <div className="clay-panel-head" style={{ alignItems: 'flex-start' }}>
          <div className="head-icon staff-purple">👥</div>
          <div style={{ flex: 1 }}>
            <div className="clay-staff-head-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h2 className="clay-panel-title">
                  STAFF &amp; COORDINATORS DIRECTORY ({filteredStaff.length} ACCOUNTS)
                </h2>
                <p className="clay-panel-desc">
                  Dynamic database accounts. Master Admin <strong>Adeeb Razi</strong> is permanently protected and undestroyable.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsAddStaffModalOpen(true)}
                className="clay-add-staff-btn"
              >
                <Plus size={18} />
                <span>Add Staff / Coordinator</span>
              </button>
            </div>

            {/* Filter and Search Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginTop: '1.2rem' }}>
              <div className="clay-role-filters-pills">
                <button
                  className={`clay-role-pill-btn ${staffRoleFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setStaffRoleFilter('all')}
                >
                  All ({staffUsers.length})
                </button>
                <button
                  className={`clay-role-pill-btn admin ${staffRoleFilter === 'admin' ? 'active' : ''}`}
                  onClick={() => setStaffRoleFilter('admin')}
                >
                  Administrators ({adminCount})
                </button>
                <button
                  className={`clay-role-pill-btn faculty ${staffRoleFilter === 'faculty' ? 'active' : ''}`}
                  onClick={() => setStaffRoleFilter('faculty')}
                >
                  Faculty Coordinators ({facultyCount})
                </button>
                <button
                  className={`clay-role-pill-btn coordinator ${staffRoleFilter === 'coordinator' ? 'active' : ''}`}
                  onClick={() => setStaffRoleFilter('coordinator')}
                >
                  Student Coordinators ({coordinatorCount})
                </button>
              </div>

              <div className="clay-staff-filter-wrap">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  value={staffSearchQuery}
                  onChange={(e) => setStaffSearchQuery(e.target.value)}
                  placeholder="Search by name, email, designation..."
                  className="clay-staff-search-input"
                />
                {staffSearchQuery && (
                  <button className="clay-staff-search-clear" onClick={() => setStaffSearchQuery('')}>✕</button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Complete Staff Cards Grid */}
        <div className="clay-staff-users-grid" style={{ marginTop: '1.5rem' }}>
          {filteredStaff.map((staff, idx) => {
            const isMaster = Boolean(staff.isPermanent) || staff.email.toLowerCase() === 'adeeb@technika2026.online';
            const photo = getAdminPhotoUrl(staff.name, staff.email);

            return (
              <div key={staff._id || idx} className={`clay-staff-user-card ${isMaster ? 'master-admin-card' : ''}`}>
                <div className="card-top-row">
                  <div className="card-avatar-wrap">
                    {photo ? (
                      <img src={photo} alt={staff.name} className="card-avatar-img" />
                    ) : (
                      <div className={`card-avatar-fallback ${staff.role}`}>
                        {staff.name?.charAt(0) || 'S'}
                      </div>
                    )}
                    {isMaster && (
                      <span className="master-crown-badge" title="Permanent Master Administrator">👑</span>
                    )}
                  </div>

                  <div className="card-badge-row">
                    <span className={`role-badge ${staff.role}`}>
                      {staff.role === 'admin' ? 'Administrator' : (staff.role === 'faculty' ? 'Faculty Coordinator' : (staff.role === 'volunteer' ? 'Volunteer' : 'Student Coordinator'))}
                    </span>
                    {isMaster && (
                      <span className="permanent-badge" title="Undestroyable Root Account">
                        <Shield size={12} style={{ display: 'inline', marginRight: '3px' }} />
                        Permanent
                      </span>
                    )}
                  </div>
                </div>

                <div className="card-body-info">
                  <h3 className="card-staff-name">{staff.name}</h3>
                  <span className="card-staff-designation">{staff.designation || 'Staff Member'}</span>
                  <span className="card-staff-email">{staff.email}</span>
                </div>

                <div className="card-footer-actions">
                  {isMaster ? (
                    <div className="master-protected-tag">
                      <Lock size={13} />
                      <span>Undestroyable System Root</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleDeleteStaff(staff)}
                      className="card-delete-btn"
                      title={`Delete staff account ${staff.name}`}
                    >
                      <Trash2 size={15} />
                      <span style={{ fontSize: '0.8rem', marginLeft: '5px' }}>Delete Account</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {filteredStaff.length === 0 && (
            <div className="clay-empty-staff-msg" style={{ gridColumn: '1 / -1' }}>
              <span>🔍 No staff accounts found matching your query.</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Modal for Adding New Staff Member ── */}
      {isAddStaffModalOpen && (
        <div className="clay-modal-overlay" onClick={() => setIsAddStaffModalOpen(false)}>
          <div className="clay-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="clay-modal-header">
              <div className="clay-modal-icon">➕</div>
              <div style={{ flex: 1 }}>
                <h3 className="clay-modal-title">Add Staff Member / Coordinator</h3>
                <p className="clay-modal-subtitle">Creates a dynamic credentials account saved directly to MongoDB.</p>
              </div>
              <button
                type="button"
                className="clay-modal-close-btn"
                onClick={() => setIsAddStaffModalOpen(false)}
              >
                ✕
              </button>
            </div>

            {modalError && (
              <div className="clay-modal-error">
                <ShieldAlert size={16} />
                <span>{modalError}</span>
              </div>
            )}

            <form onSubmit={handleCreateStaff} className="clay-modal-form">
              <div className="clay-form-group">
                <label className="clay-form-label">Full Name</label>
                <div className="clay-input-icon-wrap">
                  <User size={16} className="input-icon" />
                  <input
                    type="text"
                    required
                    value={newStaffData.name}
                    onChange={(e) => setNewStaffData({ ...newStaffData, name: e.target.value })}
                    placeholder="e.g. Awesh Hussain"
                    className="clay-form-input"
                  />
                </div>
              </div>

              <div className="clay-form-group">
                <label className="clay-form-label">Email Address (Login Username)</label>
                <div className="clay-input-icon-wrap">
                  <Mail size={16} className="input-icon" />
                  <input
                    type="email"
                    required
                    value={newStaffData.email}
                    onChange={(e) => setNewStaffData({ ...newStaffData, email: e.target.value })}
                    placeholder="e.g. awesh@technika2026.online"
                    className="clay-form-input"
                  />
                </div>
              </div>

              <div className="clay-form-group">
                <label className="clay-form-label">Password</label>
                <div className="clay-input-icon-wrap">
                  <Lock size={16} className="input-icon" />
                  <input
                    type={showModalPassword ? 'text' : 'password'}
                    required
                    value={newStaffData.password}
                    onChange={(e) => setNewStaffData({ ...newStaffData, password: e.target.value })}
                    placeholder="Min. 6 characters"
                    className="clay-form-input"
                  />
                  <button
                    type="button"
                    className="clay-eye-btn"
                    onClick={() => setShowModalPassword(!showModalPassword)}
                  >
                    {showModalPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="clay-form-group">
                <label className="clay-form-label">Account Role</label>
                <select
                  value={newStaffData.role}
                  onChange={(e) => handleRoleSelectionInModal(e.target.value as any)}
                  className="clay-form-select"
                >
                  <option value="coordinator">Student Coordinator</option>
                  <option value="faculty">Faculty Coordinator</option>
                  <option value="admin">Administrator</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              <div className="clay-form-group">
                <label className="clay-form-label">Designation / Title</label>
                <input
                  type="text"
                  value={newStaffData.designation}
                  onChange={(e) => setNewStaffData({ ...newStaffData, designation: e.target.value })}
                  placeholder="e.g. Administration, Event Coordinator, Technical Lead"
                  className="clay-form-input"
                />
                <span className="clay-form-hint">Displayed on badges, staff directories, and portal headers.</span>
              </div>

              <div className="clay-modal-actions">
                <button
                  type="button"
                  onClick={() => setIsAddStaffModalOpen(false)}
                  className="clay-modal-cancel-btn"
                  disabled={modalSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="clay-modal-submit-btn"
                  disabled={modalSubmitting}
                >
                  {modalSubmitting ? 'Creating Account...' : '✓ Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Component Styles ── */}
      <style>{`
        .clay-access-page {
          max-width: 1250px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .clay-access-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          padding: 1.25rem 1.75rem;
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .clay-header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .clay-header-emblem {
          font-size: 2rem;
          background: #eff6ff;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          border: 1px solid #bfdbfe;
        }

        .clay-page-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .clay-page-subtitle {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0.25rem 0 0 0;
        }

        .clay-admin-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f1f5f9;
          padding: 0.4rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
          letter-spacing: 0.05em;
          border: 1px solid #e2e8f0;
        }

        .clay-dot-live {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
        }

        .clay-toast {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          animation: slideDown 0.25s ease-out;
        }

        .clay-toast.success {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .clay-toast.error {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .clay-panel-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          padding: 1.75rem;
        }

        .clay-panel-head {
          display: flex;
          gap: 1.25rem;
        }

        .head-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .head-icon.staff-purple {
          background: #f3e8ff;
          border: 1px solid #d8b4fe;
        }

        .clay-panel-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .clay-panel-desc {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0.35rem 0 0 0;
          line-height: 1.5;
        }

        .clay-add-staff-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          padding: 0.65rem 1.15rem;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        .clay-add-staff-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .clay-role-filters-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .clay-role-pill-btn {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.4rem 0.85rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .clay-role-pill-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .clay-role-pill-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }

        .clay-role-pill-btn.active.admin {
          background: #2563eb;
          border-color: #2563eb;
        }

        .clay-role-pill-btn.active.faculty {
          background: #7c3aed;
          border-color: #7c3aed;
        }

        .clay-role-pill-btn.active.coordinator {
          background: #059669;
          border-color: #059669;
        }

        .clay-staff-filter-wrap {
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.45rem 0.85rem;
          min-width: 280px;
          gap: 0.5rem;
        }

        .clay-staff-filter-wrap:focus-within {
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-icon {
          font-size: 0.85rem;
          opacity: 0.5;
        }

        .clay-staff-search-input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 0.85rem;
          width: 100%;
          color: #0f172a;
        }

        .clay-staff-search-clear {
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 0.85rem;
          padding: 0;
        }

        .clay-staff-users-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .clay-staff-user-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          transition: all 0.2s ease;
          position: relative;
        }

        .clay-staff-user-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          border-color: #cbd5e1;
        }

        .clay-staff-user-card.master-admin-card {
          border-color: #f59e0b;
          background: linear-gradient(180deg, #fffbeb 0%, #ffffff 100%);
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-avatar-wrap {
          position: relative;
        }

        .card-avatar-img {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          object-fit: cover;
          border: 2px solid #e2e8f0;
        }

        .card-avatar-fallback {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          color: #ffffff;
          background: #64748b;
        }

        .card-avatar-fallback.admin { background: #2563eb; }
        .card-avatar-fallback.faculty { background: #7c3aed; }
        .card-avatar-fallback.coordinator { background: #059669; }

        .master-crown-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          font-size: 1rem;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .card-badge-row {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.35rem;
        }

        .role-badge {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .role-badge.admin {
          background: #dbeafe;
          color: #1e40af;
        }

        .role-badge.faculty {
          background: #ede9fe;
          color: #6b21a8;
        }

        .role-badge.coordinator, .role-badge.volunteer {
          background: #d1fae5;
          color: #065f46;
        }

        .permanent-badge {
          display: flex;
          align-items: center;
          background: #fef3c7;
          color: #92400e;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 9999px;
        }

        .card-body-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .card-staff-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .card-staff-designation {
          font-size: 0.82rem;
          font-weight: 700;
          color: #475569;
        }

        .card-staff-email {
          font-size: 0.78rem;
          color: #64748b;
          word-break: break-all;
        }

        .card-footer-actions {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 1px solid #f1f5f9;
        }

        .master-protected-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #92400e;
          background: #fffbeb;
          padding: 0.35rem 0.75rem;
          border-radius: 8px;
          border: 1px solid #fde68a;
        }

        .card-delete-btn {
          display: flex;
          align-items: center;
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fee2e2;
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.15s ease;
        }

        .card-delete-btn:hover {
          background: #dc2626;
          color: #ffffff;
          border-color: #dc2626;
        }

        .clay-empty-staff-msg {
          text-align: center;
          padding: 2.5rem;
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 600;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px dashed #cbd5e1;
        }

        /* ── Modal Styles ── */
        .clay-modal-overlay {
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

        .clay-modal-card {
          background: #ffffff;
          border-radius: 20px;
          max-width: 480px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          animation: scaleUp 0.2s ease-out;
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        .clay-modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .clay-modal-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #dbeafe;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .clay-modal-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .clay-modal-subtitle {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0.2rem 0 0 0;
        }

        .clay-modal-close-btn {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.25rem;
        }

        .clay-modal-error {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
          padding: 0.75rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          margin: 1rem 1.5rem 0 1.5rem;
          border-radius: 10px;
        }

        .clay-modal-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .clay-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .clay-form-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .clay-input-icon-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 0.85rem;
          color: #94a3b8;
          pointer-events: none;
        }

        .clay-form-input, .clay-form-select {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 0.9rem;
          color: #0f172a;
          outline: none;
          transition: all 0.15s ease;
        }

        .clay-input-icon-wrap .clay-form-input {
          padding-left: 2.5rem;
          padding-right: 2.5rem;
        }

        .clay-form-input:focus, .clay-form-select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .clay-eye-btn {
          position: absolute;
          right: 0.85rem;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .clay-form-hint {
          font-size: 0.75rem;
          color: #64748b;
        }

        .clay-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .clay-modal-cancel-btn {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #475569;
          font-weight: 700;
          padding: 0.65rem 1.25rem;
          border-radius: 10px;
          cursor: pointer;
        }

        .clay-modal-submit-btn {
          background: #2563eb;
          border: none;
          color: #ffffff;
          font-weight: 700;
          padding: 0.65rem 1.5rem;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        .clay-modal-submit-btn:disabled, .clay-modal-cancel-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ── Denied State ── */
        .clay-access-denied {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .clay-denied-card {
          background: #ffffff;
          border: 1px solid #fee2e2;
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(239, 68, 68, 0.08);
        }

        .clay-denied-card h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #991b1b;
          margin: 0 0 0.5rem 0;
        }

        .clay-denied-btn {
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
