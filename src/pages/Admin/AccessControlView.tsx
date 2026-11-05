import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Plus, Trash2, Shield, User, Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { getAdminIdentity, API_BASE_URL as API, getAdminPhotoUrl } from '../../utils/adminAuth';

interface PermissionConfig {
  targetKey: string;
  title: string;
  canViewParticipants: boolean;
  canViewContactInfo: boolean;
  canViewFinancials: boolean;
  canViewDocuments: boolean;
  canViewTeams: boolean;
  canViewAnalytics: boolean;
  canViewDeveloperHub: boolean;
  canVerifyPayments: boolean;
  canDeleteParticipants: boolean;
  canEditTeams: boolean;
  canExportCSV: boolean;
  canCheckInParticipants: boolean;
  assignedEvents: string[];
  updatedBy?: string;
  updatedAt?: string;
}

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

const DEFAULT_PERMS: Record<'faculty' | 'coordinator', PermissionConfig> = {
  faculty: {
    targetKey: 'faculty',
    title: 'Faculty Coordinator',
    canViewParticipants: true,
    canViewContactInfo: true,
    canViewFinancials: true,
    canViewDocuments: true,
    canViewTeams: true,
    canViewAnalytics: true,
    canViewDeveloperHub: false,
    canVerifyPayments: true,
    canDeleteParticipants: false,
    canEditTeams: true,
    canExportCSV: true,
    canCheckInParticipants: true,
    assignedEvents: [],
  },
  coordinator: {
    targetKey: 'coordinator',
    title: 'Student Coordinator',
    canViewParticipants: true,
    canViewContactInfo: true,
    canViewFinancials: false,
    canViewDocuments: false,
    canViewTeams: true,
    canViewAnalytics: false,
    canViewDeveloperHub: false,
    canVerifyPayments: false,
    canDeleteParticipants: false,
    canEditTeams: false,
    canExportCSV: false,
    canCheckInParticipants: true,
    assignedEvents: [],
  },
};

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
            Access Control and permission delegation are restricted exclusively to <strong>Adeeb Razi</strong> and <strong>Prof. Mamatha Vayelapelli</strong>.
          </p>
          <button onClick={() => navigate('/admin/participants')} className="clay-denied-btn">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState<'staff' | 'faculty' | 'coordinator'>('staff');
  const [facultyPerms, setFacultyPerms] = useState<PermissionConfig>(DEFAULT_PERMS.faculty);
  const [coordinatorPerms, setCoordinatorPerms] = useState<PermissionConfig>(DEFAULT_PERMS.coordinator);
  const [customOverrides, setCustomOverrides] = useState<PermissionConfig[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<{
    name: string;
    email: string;
    role: 'faculty' | 'coordinator';
  } | null>(null);
  const [individualPerms, setIndividualPerms] = useState<PermissionConfig | null>(null);
  const [staffSearchQuery, setStaffSearchQuery] = useState<string>('');
  const [staffRoleFilter, setStaffRoleFilter] = useState<'all' | 'admin' | 'faculty' | 'coordinator'>('all');
  const [staffList, setStaffList] = useState<{ faculty: any[]; coordinators: any[]; admins?: any[] }>({ faculty: [], coordinators: [], admins: [] });
  const [staffUsers, setStaffUsers] = useState<StaffUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
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
    }
  };

  // Fetch permissions matrix from backend
  const fetchPermissions = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API}/api/admin/permissions`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.faculty) setFacultyPerms(data.faculty);
        if (data.coordinator) setCoordinatorPerms(data.coordinator);
        if (data.customOverrides) setCustomOverrides(data.customOverrides);
        if (data.staffList) setStaffList(data.staffList);
      }
    } catch (err) {
      console.warn('Could not fetch remote permissions, using local defaults', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPermissions();
    fetchStaffUsers();
  }, []);

  const currentStaffList = activeTab === 'faculty' ? staffList.faculty : staffList.coordinators;
  const filteredStaffList = currentStaffList.filter(s => {
    if (!staffSearchQuery.trim()) return true;
    const q = staffSearchQuery.toLowerCase();
    return s.name?.toLowerCase().includes(q) || s.email?.toLowerCase().includes(q);
  });

  // Filtered complete staff directory for "staff" tab
  const allStaffDirectory: StaffUser[] = staffUsers.length > 0
    ? staffUsers
    : [
        ...(staffList.admins || []).map(a => ({ ...a, role: 'admin' as const })),
        ...staffList.faculty.map(f => ({ ...f, role: 'faculty' as const })),
        ...staffList.coordinators.map(c => ({ ...c, role: 'coordinator' as const }))
      ];

  const filteredAllStaff = allStaffDirectory.filter(s => {
    if (staffRoleFilter !== 'all' && s.role !== staffRoleFilter) return false;
    if (!staffSearchQuery.trim()) return true;
    const q = staffSearchQuery.toLowerCase();
    return s.name?.toLowerCase().includes(q) || s.email?.toLowerCase().includes(q) || s.designation?.toLowerCase().includes(q);
  });

  const getStaffOverride = (email: string) => {
    return customOverrides.find(o => o.targetKey?.toLowerCase() === email?.toLowerCase());
  };

  const handleTabChange = (tab: 'staff' | 'faculty' | 'coordinator') => {
    setActiveTab(tab);
    setSelectedStaff(null);
    setIndividualPerms(null);
    setStaffSearchQuery('');
  };

  const handleSelectStaff = (staff: { name: string; email: string }) => {
    setSelectedStaff({ ...staff, role: (activeTab === 'faculty' ? 'faculty' : 'coordinator') });
    const existing = getStaffOverride(staff.email);
    if (existing) {
      setIndividualPerms({ ...existing });
    } else {
      const base = activeTab === 'faculty' ? facultyPerms : coordinatorPerms;
      const { _id, __v, ...cleanBase } = (base as any) || {};
      setIndividualPerms({
        ...cleanBase,
        targetKey: staff.email.toLowerCase(),
        title: staff.name
      });
    }
  };

  const handleClearSelectedStaff = () => {
    setSelectedStaff(null);
    setIndividualPerms(null);
  };

  const handleConfigureStaffPrivileges = (staff: StaffUser) => {
    const targetTab: 'faculty' | 'coordinator' = staff.role === 'faculty' ? 'faculty' : 'coordinator';
    setActiveTab(targetTab);
    handleSelectStaff({ name: staff.name, email: staff.email });
  };

  const handleRoleSelectionInModal = (role: 'admin' | 'faculty' | 'coordinator' | 'volunteer') => {
    const defaultDesignations: Record<string, string> = {
      admin: 'Administration',
      faculty: 'Faculty Coordinator',
      coordinator: 'Student Coordinator',
      volunteer: 'Volunteer'
    };
    setNewStaffData(prev => ({
      ...prev,
      role,
      designation: defaultDesignations[role] || 'Staff Member'
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
        setSaveToast({ message: data.message || `✓ Staff account created for ${newStaffData.name}!`, type: 'success' });
        setIsAddStaffModalOpen(false);
        setNewStaffData({
          name: '',
          email: '',
          password: '',
          role: 'coordinator',
          designation: 'Student Coordinator',
        });
        await fetchStaffUsers();
        await fetchPermissions();
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
        setSaveToast({ message: data.message || `✓ Account for ${staff.name} deleted.`, type: 'success' });
        await fetchStaffUsers();
        await fetchPermissions();
        setTimeout(() => setSaveToast(null), 3500);
      } else {
        setSaveToast({ message: data.message || 'Failed to delete staff member.', type: 'error' });
      }
    } catch {
      setSaveToast({ message: 'Network error deleting staff account.', type: 'error' });
    }
  };

  const isEditingIndividual = selectedStaff !== null && individualPerms !== null;
  const activePerms = isEditingIndividual 
    ? individualPerms 
    : (activeTab === 'faculty' ? facultyPerms : coordinatorPerms);

  const handleToggle = (key: keyof PermissionConfig) => {
    if (isEditingIndividual) {
      setIndividualPerms(prev => prev ? { ...prev, [key]: !prev[key] } : null);
    } else if (activeTab === 'faculty') {
      setFacultyPerms(prev => ({ ...prev, [key]: !prev[key] }));
    } else {
      setCoordinatorPerms(prev => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleSave = async () => {
    if (!activePerms) return;
    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const { _id, __v, ...payload } = (activePerms as any) || {};
      const res = await fetch(`${API}/api/admin/permissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setSaveToast({ 
          message: data.message || `Permissions saved successfully for ${activePerms.title}`, 
          type: 'success' 
        });
        if (isEditingIndividual && data.permission) {
          setCustomOverrides(prev => {
            const filtered = prev.filter(p => p.targetKey?.toLowerCase() !== activePerms.targetKey?.toLowerCase());
            return [...filtered, data.permission];
          });
        }
        setTimeout(() => setSaveToast(null), 3500);
      } else {
        setSaveToast({ message: data.message || 'Failed to save permissions', type: 'error' });
      }
    } catch {
      setSaveToast({ message: 'Network error while updating access controls', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleRevertIndividual = async (email: string, name: string) => {
    if (!window.confirm(`Revoke custom sole access for ${name} and revert to default ${activeTab === 'faculty' ? 'Faculty' : 'Coordinator'} permissions?`)) {
      return;
    }
    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API}/api/admin/permissions/${encodeURIComponent(email)}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setCustomOverrides(prev => prev.filter(p => p.targetKey?.toLowerCase() !== email.toLowerCase()));
        const base = activeTab === 'faculty' ? facultyPerms : coordinatorPerms;
        const { _id, __v, ...cleanBase } = (base as any) || {};
        setIndividualPerms({
          ...cleanBase,
          targetKey: email.toLowerCase(),
          title: name
        });
        setSaveToast({ message: `✓ Sole access revoked for ${name}. Reverted to default role permissions.`, type: 'success' });
        setTimeout(() => setSaveToast(null), 3500);
      } else {
        const errJson = await res.json().catch(() => ({}));
        setSaveToast({ message: errJson.message || 'Failed to revert individual permissions.', type: 'error' });
      }
    } catch {
      setSaveToast({ message: 'Network error while reverting permissions.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleResetDefaults = () => {
    if (isEditingIndividual) {
      if (window.confirm(`Reset ${activePerms.title}'s custom settings to match the base role permissions?`)) {
        const base = activeTab === 'faculty' ? facultyPerms : coordinatorPerms;
        setIndividualPerms({
          ...base,
          targetKey: selectedStaff!.email.toLowerCase(),
          title: selectedStaff!.name
        });
      }
    } else {
      if (window.confirm(`Reset ${activePerms.title} permissions back to standard recommended defaults?`)) {
        if (activeTab === 'faculty') setFacultyPerms(DEFAULT_PERMS.faculty);
        else setCoordinatorPerms(DEFAULT_PERMS.coordinator);
      }
    }
  };

  return (
    <div className="clay-access-page">
      {/* ── Top Header ── */}
      <div className="clay-access-header">
        <div className="clay-header-left">
          <div className="clay-header-emblem">🛡️</div>
          <div>
            <h1 className="clay-page-title">ACCESS CONTROL &amp; PERMISSIONS</h1>
            <p className="clay-page-subtitle">
              Administrator authority: configure what Faculty and Student Coordinators can see and edit.
            </p>
          </div>
        </div>
        <div className="clay-admin-tag">
          <span className="clay-dot-live" />
          <span>{loading ? 'SYNCING MATRIX...' : 'ROOT ADMIN CLEARANCE'}</span>
        </div>
      </div>

      {/* ── Save Notification Toast ── */}
      {saveToast && (
        <div className={`clay-toast ${saveToast.type}`}>
          <span>{saveToast.type === 'success' ? '✓' : '⚠️'}</span>
          <span>{saveToast.message}</span>
        </div>
      )}

      {/* ── Role Tab Selector ── */}
      <div className="clay-role-tabs-bar">
        <button
          className={`clay-role-tab ${activeTab === 'staff' ? 'active staff' : ''}`}
          onClick={() => handleTabChange('staff')}
        >
          <span className="tab-icon">👥</span>
          <div className="tab-text">
            <span className="tab-title">Staff &amp; Accounts</span>
            <span className="tab-sub">User Management &amp; Roles ({allStaffDirectory.length} accounts)</span>
          </div>
        </button>

        <button
          className={`clay-role-tab ${activeTab === 'faculty' ? 'active faculty' : ''}`}
          onClick={() => handleTabChange('faculty')}
        >
          <span className="tab-icon">🎓</span>
          <div className="tab-text">
            <span className="tab-title">Faculty Coordinators</span>
            <span className="tab-sub">Professors &amp; Event Leads ({staffList.faculty.length || 9} staff)</span>
          </div>
        </button>

        <button
          className={`clay-role-tab ${activeTab === 'coordinator' ? 'active coordinator' : ''}`}
          onClick={() => handleTabChange('coordinator')}
        >
          <span className="tab-icon">⚡</span>
          <div className="tab-text">
            <span className="tab-title">Student Coordinators</span>
            <span className="tab-sub">On-ground desk organizers ({staffList.coordinators.length || 13} staff)</span>
          </div>
        </button>
      </div>

      {/* ── Main Panel Content ── */}
      <div className="clay-permissions-container">

        {/* ============================================================ */}
        {/* VIEW 1: DYNAMIC STAFF & ACCOUNTS MANAGEMENT TAB              */}
        {/* ============================================================ */}
        {activeTab === 'staff' && (
          <div className="clay-panel-card clay-staff-management-card">
            <div className="clay-panel-head" style={{ alignItems: 'flex-start' }}>
              <div className="head-icon staff-purple">👥</div>
              <div style={{ flex: 1 }}>
                <div className="clay-staff-head-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h2 className="clay-panel-title">
                      STAFF &amp; COORDINATORS DIRECTORY ({filteredAllStaff.length} ACCOUNTS)
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
                      All ({allStaffDirectory.length})
                    </button>
                    <button
                      className={`clay-role-pill-btn admin ${staffRoleFilter === 'admin' ? 'active' : ''}`}
                      onClick={() => setStaffRoleFilter('admin')}
                    >
                      Administrators ({allStaffDirectory.filter(s => s.role === 'admin').length})
                    </button>
                    <button
                      className={`clay-role-pill-btn faculty ${staffRoleFilter === 'faculty' ? 'active' : ''}`}
                      onClick={() => setStaffRoleFilter('faculty')}
                    >
                      Faculty Coordinators ({allStaffDirectory.filter(s => s.role === 'faculty').length})
                    </button>
                    <button
                      className={`clay-role-pill-btn coordinator ${staffRoleFilter === 'coordinator' ? 'active' : ''}`}
                      onClick={() => setStaffRoleFilter('coordinator')}
                    >
                      Student Coordinators ({allStaffDirectory.filter(s => s.role === 'coordinator' || s.role === 'volunteer').length})
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
              {filteredAllStaff.map((staff, idx) => {
                const isMaster = Boolean(staff.isPermanent) || staff.email.toLowerCase() === 'adeeb@technika2026.online';
                const photo = getAdminPhotoUrl(staff.name, staff.email);
                const override = getStaffOverride(staff.email);

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
                        {!isMaster && override && (
                          <span className="chip-pill-custom" title="Custom sole privileges assigned">
                            ✨ Sole Access
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
                        <>
                          <button
                            type="button"
                            onClick={() => handleConfigureStaffPrivileges(staff)}
                            className="card-configure-btn"
                            title="Configure sole permissions for this staff member"
                          >
                            <Sparkles size={14} />
                            <span>Privileges</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteStaff(staff)}
                            className="card-delete-btn"
                            title={`Delete staff account ${staff.name}`}
                          >
                            <Trash2 size={15} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}

              {filteredAllStaff.length === 0 && (
                <div className="clay-empty-staff-msg" style={{ gridColumn: '1 / -1' }}>
                  <span>🔍 No staff accounts found matching your query.</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 2 & 3: FACULTY / STUDENT COORDINATOR PERMISSION EDITING */}
        {/* ============================================================ */}
        {activeTab !== 'staff' && (
          <>
            {/* ── Staff Directory & Sole Access Management Section ── */}
            <div className="clay-panel-card clay-staff-management-card">
              <div className="clay-panel-head">
                <div className="head-icon staff-purple">👥</div>
                <div style={{ flex: 1 }}>
                  <div className="clay-staff-head-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                      <h2 className="clay-panel-title">
                        {activeTab === 'faculty' ? 'FACULTY COORDINATOR DIRECTORY' : 'STUDENT COORDINATOR DIRECTORY'} ({currentStaffList.length} STAFF)
                      </h2>
                      <p className="clay-panel-desc">
                        Select any individual below to configure or review custom sole privileges.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setNewStaffData(prev => ({
                          ...prev,
                          role: activeTab === 'faculty' ? 'faculty' : 'coordinator',
                          designation: activeTab === 'faculty' ? 'Faculty Coordinator' : 'Student Coordinator'
                        }));
                        setIsAddStaffModalOpen(true);
                      }}
                      className="clay-add-staff-btn"
                    >
                      <Plus size={16} />
                      <span>Add {activeTab === 'faculty' ? 'Faculty' : 'Coordinator'}</span>
                    </button>
                  </div>

                  <div className="clay-staff-filter-wrap" style={{ marginTop: '0.8rem' }}>
                    <span className="search-icon">🔍</span>
                    <input
                      type="text"
                      value={staffSearchQuery}
                      onChange={(e) => setStaffSearchQuery(e.target.value)}
                      placeholder="Search staff by name or email..."
                      className="clay-staff-search-input"
                    />
                    {staffSearchQuery && (
                      <button className="clay-staff-search-clear" onClick={() => setStaffSearchQuery('')}>✕</button>
                    )}
                  </div>
                </div>
              </div>

              {/* Interactive Staff Cards Grid */}
              <div className="clay-staff-chips-grid">
                {filteredStaffList.map((staff, idx) => {
                  const override = getStaffOverride(staff.email);
                  const isSelected = selectedStaff?.email?.toLowerCase() === staff.email?.toLowerCase();
                  const isMaster = Boolean(staff.isPermanent) || staff.email?.toLowerCase() === 'adeeb@technika2026.online';

                  return (
                    <div 
                      key={idx} 
                      className={`clay-staff-chip-card ${isSelected ? 'is-selected' : ''} ${override ? 'has-override' : ''}`}
                      onClick={() => handleSelectStaff(staff)}
                      title={`Click to manage sole permissions for ${staff.name}`}
                    >
                      <div className="chip-avatar-orb">
                        {staff.name?.charAt(0) || 'S'}
                      </div>
                      <div className="chip-info">
                        <div className="chip-name-row">
                          <span className="chip-name">{staff.name}</span>
                          {override ? (
                            <span className="chip-pill-custom" title="Custom sole permissions configured for this person">
                              ✨ Sole Access
                            </span>
                          ) : (
                            <span className="chip-pill-default">Base Role</span>
                          )}
                        </div>
                        <span className="chip-email">{staff.email}</span>
                      </div>
                      <div className="chip-action-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{isSelected ? '✓ Editing' : 'Configure →'}</span>
                        {!isMaster && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteStaff(staff);
                            }}
                            className="chip-delete-btn"
                            title={`Delete account for ${staff.name}`}
                          >
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Active Target Banner: Explains what is currently being edited ── */}
            <div className={`clay-active-target-banner ${isEditingIndividual ? 'individual-mode' : 'group-mode'}`}>
              <div className="target-banner-icon">
                {isEditingIndividual ? '👤' : (activeTab === 'faculty' ? '🎓' : '⚡')}
              </div>
              <div className="target-banner-content">
                <div className="target-banner-title">
                  {isEditingIndividual ? (
                    <>
                      <span>SOLE PERMISSIONS FOR: <strong>{selectedStaff.name}</strong></span>
                      {getStaffOverride(selectedStaff.email) ? (
                        <span className="target-tag custom">✨ Custom Overrides Active</span>
                      ) : (
                        <span className="target-tag inheriting">Inheriting Base Defaults (Unsaved)</span>
                      )}
                    </>
                  ) : (
                    <>
                      <span>BASE {activeTab === 'faculty' ? 'FACULTY' : 'COORDINATOR'} ROLE PRIVILEGES</span>
                      <span className="target-tag default">Applies to all {currentStaffList.length} staff</span>
                    </>
                  )}
                </div>
                <p className="target-banner-desc">
                  {isEditingIndividual 
                    ? `You are configuring custom access exclusively for ${selectedStaff.name} (${selectedStaff.email}). Any switches changed here apply solely to this person upon login.`
                    : `These baseline permissions are inherited by every ${activeTab === 'faculty' ? 'faculty coordinator' : 'student coordinator'} unless individual custom access has been granted.`}
                </p>
              </div>
              <div className="target-banner-actions">
                {isEditingIndividual && getStaffOverride(selectedStaff.email) && (
                  <button
                    type="button"
                    onClick={() => handleRevertIndividual(selectedStaff.email, selectedStaff.name)}
                    className="clay-revert-action-btn"
                    title="Delete custom overrides and revert back to standard group privileges"
                  >
                    ↺ Revert to Base Role
                  </button>
                )}
                {isEditingIndividual && (
                  <button
                    type="button"
                    onClick={handleClearSelectedStaff}
                    className="clay-back-group-action-btn"
                  >
                    ← Back to Base Role
                  </button>
                )}
              </div>
            </div>
            
            {/* Section 1: WHAT THEY CAN SEE (View Access) */}
            <div className="clay-panel-card">
              <div className="clay-panel-head">
                <div className="head-icon eye-blue">👁️</div>
                <div>
                  <h2 className="clay-panel-title">WHAT THEY CAN SEE (READ ACCESS)</h2>
                  <p className="clay-panel-desc">Controls data visibility across Participants and Analytics views.</p>
                </div>
              </div>

              <div className="clay-toggles-grid">
                {/* View Participants */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">View Participant Directory</span>
                    <span className="toggle-desc">Access registered student names, college/institution, and enrolled events.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canViewParticipants}
                      onChange={() => handleToggle('canViewParticipants')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>

                {/* View Contact Info */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">View Contact Information</span>
                    <span className="toggle-desc">Show participant Gmail addresses and WhatsApp phone numbers in directories.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canViewContactInfo}
                      onChange={() => handleToggle('canViewContactInfo')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>

                {/* View Financials */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">View Financial &amp; Payment Data</span>
                    <span className="toggle-desc">Inspect 12-digit UPI UTR numbers, fee transaction amounts, and exemption records.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canViewFinancials}
                      onChange={() => handleToggle('canViewFinancials')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>

                {/* View Documents */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">View Verification Documents</span>
                    <span className="toggle-desc">Access side-by-side viewer for UPI payment screenshots, ₹600 No-Dues slips &amp; College IDs.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canViewDocuments}
                      onChange={() => handleToggle('canViewDocuments')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>

                {/* View Analytics */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">View Festival Analytics</span>
                    <span className="toggle-desc">Access live dashboard revenue summaries, category breakdowns, and departmental charts.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canViewAnalytics}
                      onChange={() => handleToggle('canViewAnalytics')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>

                {/* View Developer Hub */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">View Developer Telemetry Hub</span>
                    <span className="toggle-desc">Inspect Cloudinary storage meters, Vercel CDN logs, and pipeline latency probes.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canViewDeveloperHub}
                      onChange={() => handleToggle('canViewDeveloperHub')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>
              </div>
            </div>

            {/* Section 2: WHAT THEY CAN EDIT (Action / Write Access) */}
            <div className="clay-panel-card">
              <div className="clay-panel-head">
                <div className="head-icon edit-amber">✍️</div>
                <div>
                  <h2 className="clay-panel-title">WHAT THEY CAN EDIT (WRITE &amp; ACTION ACCESS)</h2>
                  <p className="clay-panel-desc">Controls verification powers, record deletion, check-in operations, and data export.</p>
                </div>
              </div>

              <div className="clay-toggles-grid">
                {/* Verify & Approve */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">Verify &amp; Approve Payments</span>
                    <span className="toggle-desc">Authorize this role to review payment slips and approve participant verification tickets.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canVerifyPayments}
                      onChange={() => handleToggle('canVerifyPayments')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>

                {/* Delete / Cancel Registrations */}
                <div className="clay-toggle-card alert-danger">
                  <div className="toggle-info">
                    <span className="toggle-title text-danger">Delete / Cancel Registrations</span>
                    <span className="toggle-desc">Permanently cancel student registrations or purge invalid submissions from database.</span>
                  </div>
                  <label className="clay-switch danger">
                    <input
                      type="checkbox"
                      checked={activePerms.canDeleteParticipants}
                      onChange={() => handleToggle('canDeleteParticipants')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>

                {/* Export CSV */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">Export Registration CSVs</span>
                    <span className="toggle-desc">Download complete spreadsheets and attendance manifests for offline event desks.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canExportCSV}
                      onChange={() => handleToggle('canExportCSV')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>

                {/* On-ground Check-in */}
                <div className="clay-toggle-card">
                  <div className="toggle-info">
                    <span className="toggle-title">On-Ground Event Desk Check-in</span>
                    <span className="toggle-desc">Mark participant physical presence and verify QR badges at stage venue entrances.</span>
                  </div>
                  <label className="clay-switch">
                    <input
                      type="checkbox"
                      checked={activePerms.canCheckInParticipants}
                      onChange={() => handleToggle('canCheckInParticipants')}
                    />
                    <span className="clay-slider" />
                  </label>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="clay-action-strip">
              {isEditingIndividual && getStaffOverride(selectedStaff.email) && (
                <button
                  type="button"
                  onClick={() => handleRevertIndividual(selectedStaff.email, selectedStaff.name)}
                  className="clay-revoke-btn"
                  disabled={saving}
                  title="Revoke custom sole access and restore default permissions"
                >
                  🗑️ Revoke Sole Access &amp; Revert to Base Role
                </button>
              )}

              <button
                onClick={handleResetDefaults}
                className="clay-reset-btn"
                disabled={saving}
              >
                {isEditingIndividual 
                  ? '↺ Match Base Role Defaults' 
                  : '↺ Reset Role to Recommended Defaults'}
              </button>

              <button
                onClick={handleSave}
                className={`clay-save-btn ${isEditingIndividual ? 'individual-save' : ''}`}
                disabled={saving}
              >
                {saving 
                  ? 'Saving Privileges...' 
                  : isEditingIndividual 
                    ? `✓ Save Sole Privileges for ${selectedStaff.name}` 
                    : `✓ Save Base Privileges for All ${activeTab === 'faculty' ? 'Faculty' : 'Student Coordinators'}`}
              </button>
            </div>
          </>
        )}

      </div>

      {/* ============================================================ */}
      {/* ── MODAL: ADD NEW STAFF / COORDINATOR ACCOUNT ──            */}
      {/* ============================================================ */}
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
                    placeholder="e.g. Anjali Singh"
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
                    placeholder="e.g. anjali@technika2026.online"
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
                  placeholder="e.g. Administration, Student Coordinator, Registration Desk Lead"
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
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
        }

        /* ── Header ── */
        .clay-access-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          background: #f4f8fd;
          padding: 1.2rem 1.6rem;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.2),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
        }

        .clay-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-header-emblem {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: #ffffff;
          border: 2px solid #ffffff;
          box-shadow:
            4px 6px 14px rgba(37, 99, 235, 0.35),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -2px -2px 4px rgba(15, 23, 42, 0.25);
        }

        .clay-page-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .clay-page-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin: 2px 0 0 0;
          font-weight: 500;
        }

        .clay-admin-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #dbeafe;
          color: #1e40af;
          font-size: 0.72rem;
          font-weight: 900;
          padding: 6px 14px;
          border-radius: 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 2px 3px 8px rgba(37, 99, 235, 0.12);
        }

        .clay-dot-live {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 8px #2563eb;
        }

        /* ── Role Tab Selector ── */
        .clay-role-tabs-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .clay-role-tabs-bar {
            grid-template-columns: 1fr;
          }
        }

        .clay-role-tab {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
          padding: 1rem 1.4rem;
          border-radius: 18px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow:
            4px 6px 14px rgba(162, 178, 201, 0.18),
            -4px -4px 10px rgba(255, 255, 255, 0.8),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          text-align: left;
        }

        .clay-role-tab:hover {
          transform: translateY(-2px);
          box-shadow: 6px 8px 18px rgba(162, 178, 201, 0.25);
        }

        .clay-role-tab.active.faculty {
          border-color: #8b5cf6;
          background: #fbf9ff;
          box-shadow:
            6px 8px 20px rgba(139, 92, 246, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(139, 92, 246, 0.1);
        }

        .clay-role-tab.active.coordinator {
          border-color: #059669;
          background: #f6fdfa;
          box-shadow:
            6px 8px 20px rgba(5, 150, 105, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(5, 150, 105, 0.1);
        }

        .tab-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .tab-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .tab-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
        }

        .tab-sub {
          font-size: 0.72rem;
          color: #64748b;
          font-weight: 500;
        }

        /* ── Panels ── */
        .clay-permissions-container {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .clay-panel-card {
          background: #f4f8fd;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .clay-panel-head {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .head-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          border: 2px solid #ffffff;
          flex-shrink: 0;
        }

        .eye-blue {
          background: #dbeafe;
          box-shadow: 2px 4px 10px rgba(37, 99, 235, 0.2);
        }

        .edit-amber {
          background: #fef3c7;
          box-shadow: 2px 4px 10px rgba(217, 119, 6, 0.2);
        }

        .staff-purple {
          background: #ede9fe;
          box-shadow: 2px 4px 10px rgba(109, 40, 217, 0.2);
        }

        .clay-panel-title {
          font-size: 0.95rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .clay-panel-desc {
          font-size: 0.74rem;
          color: #64748b;
          margin: 2px 0 0 0;
          font-weight: 500;
        }

        /* ── Toggle Cards Grid ── */
        .clay-toggles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .clay-toggles-grid {
            grid-template-columns: 1fr;
          }
        }

        .clay-toggle-card {
          background: #ffffff;
          padding: 1rem 1.2rem;
          border-radius: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            3px 5px 12px rgba(162, 178, 201, 0.15),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: all 0.2s;
        }

        .clay-toggle-card.alert-danger {
          background: #fff8f8;
          border-color: rgba(239, 68, 68, 0.2);
        }

        .toggle-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .toggle-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
        }

        .toggle-title.text-danger {
          color: #b91c1c;
        }

        .toggle-desc {
          font-size: 0.7rem;
          color: #64748b;
          line-height: 1.35;
          font-weight: 500;
        }

        /* ── Switch Slider ── */
        .clay-switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 26px;
          flex-shrink: 0;
        }

        .clay-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .clay-slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: #cbd5e1;
          transition: 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 30px;
          box-shadow: inset 1px 1px 3px rgba(0,0,0,0.2);
        }

        .clay-slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 3px;
          bottom: 3px;
          background-color: #ffffff;
          transition: 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 50%;
          box-shadow: 1px 2px 4px rgba(0,0,0,0.25);
        }

        input:checked + .clay-slider {
          background-color: #2563eb;
        }

        .clay-switch.danger input:checked + .clay-slider {
          background-color: #ef4444;
        }

        input:checked + .clay-slider:before {
          transform: translateX(22px);
        }

        /* ── Staff Management Directory Card ── */
        .clay-staff-management-card {
          border-left: 4px solid #8b5cf6;
        }

        .clay-staff-head-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 4px;
        }

        .clay-staff-filter-wrap {
          display: flex;
          align-items: center;
          background: #ffffff;
          padding: 6px 14px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          box-shadow: inset 1px 1px 3px rgba(162, 178, 201, 0.2);
          gap: 8px;
          min-width: 260px;
        }

        .clay-staff-filter-wrap .search-icon {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .clay-staff-search-input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.78rem;
          font-weight: 600;
          color: #1e293b;
          width: 100%;
          font-family: inherit;
        }

        .clay-staff-search-clear {
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 0.75rem;
          padding: 0 2px;
        }

        /* ── Scope Switcher ── */
        .clay-scope-selector-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding-bottom: 6px;
        }

        .clay-scope-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 14px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          background: #ffffff;
          color: #334155;
          font-weight: 800;
          font-size: 0.8rem;
          cursor: pointer;
          box-shadow: 2px 4px 10px rgba(162, 178, 201, 0.18);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-scope-chip:hover {
          transform: translateY(-1px);
          box-shadow: 4px 6px 14px rgba(162, 178, 201, 0.25);
        }

        .clay-scope-chip.is-active {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-color: #3b82f6;
          color: #1d4ed8;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }

        .scope-count-badge {
          background: #ffffff;
          padding: 2px 7px;
          border-radius: 20px;
          font-size: 0.68rem;
          font-weight: 800;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .clay-scope-or-lbl {
          font-size: 0.68rem;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 0.5px;
        }

        /* ── Staff Cards Grid ── */
        .clay-staff-chips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 10px;
        }

        .clay-staff-chip-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          padding: 10px 14px;
          border-radius: 14px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 2px 4px 10px rgba(162, 178, 201, 0.15);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-staff-chip-card:hover {
          transform: translateY(-2px);
          box-shadow: 4px 8px 18px rgba(162, 178, 201, 0.25);
          border-color: #cbd5e1;
        }

        .clay-staff-chip-card.is-selected {
          border-color: #2563eb;
          background: #f8faff;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.22), inset 1px 1px 2px rgba(255, 255, 255, 0.9);
        }

        .clay-staff-chip-card.has-override {
          border-left: 3.5px solid #d97706;
        }

        .clay-staff-chip-card.is-selected.has-override {
          border-color: #d97706;
          background: #fffdfa;
        }

        .chip-avatar-orb {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.82rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1.5px solid #dbeafe;
          box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.9);
        }

        .clay-staff-chip-card.has-override .chip-avatar-orb {
          background: #fef3c7;
          color: #b45309;
          border-color: #fde68a;
        }

        .chip-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          min-width: 0;
        }

        .chip-name-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .chip-name {
          font-size: 0.8rem;
          font-weight: 800;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chip-email {
          font-size: 0.68rem;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chip-pill-custom {
          background: #fef3c7;
          color: #b45309;
          font-size: 0.62rem;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 6px;
          border: 1px solid #fde68a;
        }

        .chip-pill-default {
          background: #f1f5f9;
          color: #64748b;
          font-size: 0.62rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 6px;
        }

        .chip-action-arrow {
          font-size: 0.72rem;
          font-weight: 800;
          color: #2563eb;
          flex-shrink: 0;
        }

        /* ── Active Target Banner ── */
        .clay-active-target-banner {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 1rem 1.4rem;
          border-radius: 18px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 4px 6px 16px rgba(162, 178, 201, 0.2);
          transition: all 0.25s;
        }

        .clay-active-target-banner.group-mode {
          background: linear-gradient(135deg, #f0f7ff 0%, #e0effe 100%);
          border-color: #93c5fd;
        }

        .clay-active-target-banner.individual-mode {
          background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
          border-color: #fcd34d;
        }

        .target-banner-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .target-banner-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .target-banner-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .target-banner-desc {
          font-size: 0.75rem;
          color: #475569;
          margin: 0;
          line-height: 1.4;
        }

        .target-tag {
          font-size: 0.68rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 6px;
        }

        .target-tag.default {
          background: #dbeafe;
          color: #1e40af;
          border: 1px solid #bfdbfe;
        }

        .target-tag.custom {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fde68a;
        }

        .target-tag.inheriting {
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        }

        .target-banner-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .clay-revert-action-btn {
          background: #ffffff;
          border: 1.5px solid #f87171;
          color: #dc2626;
          font-weight: 800;
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-revert-action-btn:hover {
          background: #fee2e2;
        }

        .clay-back-group-action-btn {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #334155;
          font-weight: 800;
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-back-group-action-btn:hover {
          background: #f8fafc;
          border-color: #94a3b8;
        }

        .clay-save-btn.individual-save {
          background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
          box-shadow: 4px 6px 16px rgba(217, 119, 6, 0.35);
        }

        .clay-save-btn.individual-save:hover:not(:disabled) {
          box-shadow: 6px 9px 20px rgba(217, 119, 6, 0.45);
        }

        /* ── Action Bar ── */
        .clay-action-strip {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 6px;
        }

        .clay-revoke-btn {
          background: #fee2e2;
          color: #dc2626;
          border: 2px solid #f87171;
          font-weight: 800;
          font-size: 0.82rem;
          padding: 0.85rem 1.4rem;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 2px 4px 10px rgba(239, 68, 68, 0.15);
        }

        .clay-revoke-btn:hover:not(:disabled) {
          background: #fecaca;
          transform: translateY(-1px);
          box-shadow: 2px 6px 14px rgba(239, 68, 68, 0.25);
        }

        .clay-revoke-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .clay-reset-btn {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          color: #64748b;
          font-weight: 800;
          font-size: 0.82rem;
          padding: 0.85rem 1.4rem;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-reset-btn:hover {
          background: #f8fafc;
          color: #0f172a;
          border-color: #cbd5e1;
        }

        .clay-save-btn {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          font-weight: 900;
          font-size: 0.88rem;
          padding: 0.85rem 1.8rem;
          border-radius: 14px;
          border: 2px solid #ffffff;
          cursor: pointer;
          box-shadow:
            4px 6px 16px rgba(37, 99, 235, 0.35),
            inset 1px 1px 2px rgba(255, 255, 255, 0.5);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-save-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 6px 9px 20px rgba(37, 99, 235, 0.45);
        }

        .clay-save-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ── Toast ── */
        .clay-toast {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .clay-toast.success {
          background: #dcfce7;
          color: #15803d;
          border: 1.5px solid #86efac;
        }

        .clay-toast.error {
          background: #fee2e2;
          color: #b91c1c;
          border: 1.5px solid #fca5a5;
        }

        /* ── Add Staff Button & Filters ── */
        .clay-add-staff-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: #ffffff;
          border: 2px solid #ffffff;
          padding: 0.65rem 1.25rem;
          border-radius: 14px;
          font-weight: 800;
          font-size: 0.82rem;
          cursor: pointer;
          box-shadow:
            3px 5px 14px rgba(79, 70, 229, 0.35),
            inset 1px 1px 2px rgba(255, 255, 255, 0.6);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-add-staff-btn:hover {
          transform: translateY(-2px);
          box-shadow: 4px 7px 18px rgba(79, 70, 229, 0.45);
        }

        .clay-role-filters-pills {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .clay-role-pill-btn {
          background: #f1f5f9;
          border: 1.5px solid #e2e8f0;
          color: #64748b;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .clay-role-pill-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .clay-role-pill-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.2);
        }

        .clay-role-pill-btn.admin.active {
          background: #6366f1;
          border-color: #6366f1;
        }

        .clay-role-pill-btn.faculty.active {
          background: #2563eb;
          border-color: #2563eb;
        }

        .clay-role-pill-btn.coordinator.active {
          background: #059669;
          border-color: #059669;
        }

        /* ── Staff Users Grid & Cards ── */
        .clay-staff-users-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 16px;
        }

        .clay-staff-user-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 1.2rem;
          border: 2px solid #e2e8f0;
          box-shadow:
            4px 6px 16px rgba(148, 163, 184, 0.12),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-staff-user-card:hover {
          transform: translateY(-3px);
          box-shadow: 6px 10px 24px rgba(148, 163, 184, 0.22);
          border-color: #cbd5e1;
        }

        .clay-staff-user-card.master-admin-card {
          background: linear-gradient(145deg, #ffffff 0%, #fefce8 100%);
          border: 2.5px solid #facc15;
          box-shadow:
            0 8px 24px rgba(234, 179, 8, 0.2),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .card-avatar-wrap {
          position: relative;
          width: 48px;
          height: 48px;
        }

        .card-avatar-img {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          object-fit: cover;
          border: 2px solid #ffffff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .card-avatar-fallback {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 900;
          color: #ffffff;
          border: 2px solid #ffffff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .card-avatar-fallback.admin {
          background: linear-gradient(135deg, #6366f1 0%, #4338ca 100%);
        }

        .card-avatar-fallback.faculty {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        }

        .card-avatar-fallback.coordinator,
        .card-avatar-fallback.volunteer {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .master-crown-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          font-size: 0.9rem;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        .card-badge-row {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .role-badge {
          font-size: 0.68rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 3px 8px;
          border-radius: 8px;
        }

        .role-badge.admin {
          background: #ede9fe;
          color: #4f46e5;
          border: 1px solid #c7d2fe;
        }

        .role-badge.faculty {
          background: #dbeafe;
          color: #1e40af;
          border: 1px solid #bfdbfe;
        }

        .role-badge.coordinator {
          background: #d1fae5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .role-badge.volunteer {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fde68a;
        }

        .permanent-badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.65rem;
          font-weight: 900;
          color: #854d0e;
          background: #fef08a;
          padding: 2px 7px;
          border-radius: 6px;
          border: 1px solid #fde047;
        }

        .card-body-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .card-staff-name {
          font-size: 1.02rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
        }

        .card-staff-designation {
          font-size: 0.78rem;
          font-weight: 700;
          color: #2563eb;
        }

        .card-staff-email {
          font-size: 0.75rem;
          color: #64748b;
          font-family: monospace;
          word-break: break-all;
        }

        .card-footer-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 4px;
          padding-top: 8px;
          border-top: 1px dashed #e2e8f0;
        }

        .master-protected-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 900;
          color: #854d0e;
          background: rgba(250, 204, 21, 0.25);
          padding: 6px 12px;
          border-radius: 10px;
          border: 1px solid rgba(234, 179, 8, 0.4);
        }

        .card-configure-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          border: 1.5px solid #cbd5e1;
          color: #0f172a;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .card-configure-btn:hover {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .card-delete-btn {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #dc2626;
          border: 1.5px solid #fca5a5;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .card-delete-btn:hover {
          background: #dc2626;
          color: #ffffff;
          border-color: #dc2626;
          transform: scale(1.05);
        }

        .chip-delete-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }

        .chip-delete-btn:hover {
          color: #ef4444;
          background: #fee2e2;
        }

        .clay-empty-staff-msg {
          text-align: center;
          padding: 3rem 1rem;
          color: #64748b;
          font-size: 0.9rem;
          font-weight: 700;
          background: #f8fafc;
          border-radius: 16px;
          border: 2px dashed #cbd5e1;
        }

        /* ── Modal Styles ── */
        .clay-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 1rem;
        }

        .clay-modal-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 2rem;
          max-width: 480px;
          width: 100%;
          border: 2.5px solid #ffffff;
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.3),
            inset 1px 1px 3px rgba(255, 255, 255, 0.9);
          animation: modalPop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes modalPop {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .clay-modal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.2rem;
        }

        .clay-modal-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        .clay-modal-title {
          font-size: 1.15rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
        }

        .clay-modal-subtitle {
          font-size: 0.75rem;
          color: #64748b;
          margin: 2px 0 0 0;
        }

        .clay-modal-close-btn {
          background: #f1f5f9;
          border: none;
          color: #64748b;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }

        .clay-modal-close-btn:hover {
          background: #fee2e2;
          color: #ef4444;
        }

        .clay-modal-error {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          color: #dc2626;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .clay-modal-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .clay-form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .clay-form-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .clay-input-icon-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .clay-input-icon-wrap .input-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }

        .clay-form-input,
        .clay-form-select {
          width: 100%;
          padding: 0.65rem 0.85rem 0.65rem 2.4rem;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          background: #f8fafc;
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
          outline: none;
          transition: all 0.2s ease;
        }

        .clay-form-select {
          padding-left: 0.85rem;
          cursor: pointer;
        }

        .clay-form-input:focus,
        .clay-form-select:focus {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .clay-form-hint {
          font-size: 0.68rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .clay-eye-btn {
          position: absolute;
          right: 12px;
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .clay-eye-btn:hover {
          color: #0f172a;
        }

        .clay-modal-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 1rem;
        }

        .clay-modal-cancel-btn {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          color: #64748b;
          font-weight: 800;
          font-size: 0.82rem;
          padding: 0.65rem 1.2rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .clay-modal-cancel-btn:hover {
          background: #f8fafc;
          color: #0f172a;
        }

        .clay-modal-submit-btn {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          border: 2px solid #ffffff;
          font-weight: 800;
          font-size: 0.85rem;
          padding: 0.65rem 1.4rem;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-modal-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.45);
        }

        .clay-modal-submit-btn:disabled {
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
          padding: 2.5rem;
          border-radius: 24px;
          text-align: center;
          max-width: 480px;
          border: 2px solid #fee2e2;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.15);
        }

        .clay-denied-icon { font-size: 3rem; }
        .clay-denied-btn {
          margin-top: 1rem;
          padding: 0.75rem 1.4rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
