// Shared Authentication & Identity Helpers for Technika Dashboard

export const getApiUrl = (): string => {
  const envUrl = (import.meta.env.VITE_API_URL || '').trim();
  // If in production mode or running under a live domain, never allow localhost or 127.0.0.1
  const isProd = import.meta.env.PROD || (typeof window !== 'undefined' && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1'));
  if (isProd) {
    if (!envUrl || envUrl.includes('localhost') || envUrl.includes('127.0.0.1')) {
      return 'https://reg.technika2026.online';
    }
  }
  return envUrl || 'https://reg.technika2026.online';
};

export const API_BASE_URL = getApiUrl();

export const getMainWebsiteUrl = (): string => {
  if (typeof window === 'undefined') return 'https://technika2026.online';
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:8080';
  }
  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return `http://${hostname}:8080`;
  }
  return 'https://technika2026.online';
};

/**
 * Maps administrator name / email to their official photo path on the Main Website.
 * Strictly hotlinked to Main Website to avoid bloating the Dashboard bundle.
 */
export const getAdminPhotoUrl = (name: string = '', email: string = ''): string | null => {
  const n = (name || '').toLowerCase().trim();
  const e = (email || '').toLowerCase().trim();
  const key = `${n} ${e}`;
  const base = getMainWebsiteUrl();

  if (key.includes('adeeb')) return `${base}/team/adeeb.png`;
  if (key.includes('sanchit')) return `${base}/team/sanchit.png`;
  if (key.includes('mamatha')) return `${base}/team/mamatha.png`;
  if (key.includes('arvind')) return `${base}/team/arvind.png`;
  if (key.includes('ashwini')) return `${base}/team/ashwini.png`;
  if (key.includes('viranshu')) return `${base}/team/viranshu.png`;
  if (key.includes('rashid')) return `${base}/team/rashid.png`;
  if (key.includes('divya')) return `${base}/team/divya.png`;
  if (key.includes('prem')) return `${base}/team/prem.png`;
  if (key.includes('sayantani')) return `${base}/team/sayantani.png`;
  if (key.includes('astik')) return `${base}/team/astik.png`;
  if (key.includes('padmaja')) return `${base}/team/padmaja.jpeg`;
  if (key.includes('anjali')) return `${base}/team/Anjali.png`;
  if (key.includes('sonali')) return `${base}/team/sonali.png`;
  if (key.includes('nikita')) return `${base}/team/nikita.png`;
  if (key.includes('aaditya') || key.includes('aditya')) return `${base}/team/aaditya.png`;
  if (key.includes('sohail')) return `${base}/team/sohail.jpeg`;
  if (key.includes('harsh')) return `${base}/team/harsh.png`;
  if (key.includes('ishika')) return `${base}/team/ishika.png`;
  if (key.includes('ankit')) return `${base}/team/ankit.png`;
  if (key.includes('suman')) return `${base}/team/s%20suman.png`;
  if (key.includes('prince')) return `${base}/team/prince.png`;
  if (key.includes('anish')) return `${base}/team/anish.png`;
  if (key.includes('rishav')) return `${base}/team/rishav.png`;
  if (key.includes('awesh')) return `${base}/team/awesh.png`;
  if (key.includes('himanshu')) return `${base}/team/himanshu.png`;

  return null;
};

export interface AdminIdentity {
  token: string | null;
  role: string | null;
  name: string;
  email: string;
  designation: string;
  photoUrl: string | null;
  isAdeeb: boolean;
  isSanchit: boolean;
  isMamatha: boolean;
  canAccessDeveloper: boolean;
  canAccessAccessControl: boolean;
}

export const getAdminIdentity = (): AdminIdentity => {
  const token = localStorage.getItem('adminToken');
  const role = localStorage.getItem('adminRole');
  let name = localStorage.getItem('adminName') || 'Administrator';
  let email = localStorage.getItem('adminEmail') || '';
  const designation = localStorage.getItem('adminDesignation') || (role === 'admin' ? 'Administration' : 'Coordinator');

  if (token) {
    try {
      const parts = token.split('.');
      if (parts.length === 3) {
        const payload = JSON.parse(atob(parts[1]));
        if (!email && payload.email) email = payload.email;
        if ((!name || name === 'Administrator') && payload.name) name = payload.name;
      }
    } catch {
      // fallback to localStorage values
    }
  }

  const n = name.toLowerCase().trim();
  const e = email.toLowerCase().trim();

  // Adeeb Razi: 'adeeb' in email or name
  const isAdeeb = n.includes('adeeb') || e.includes('adeeb');
  // Sanchit Agarwal: 'sanchit' in email or name
  const isSanchit = n.includes('sanchit') || e.includes('sanchit');
  // Prof. Mamatha Vayelapelli: 'mamatha' in email or name
  const isMamatha = n.includes('mamatha') || e.includes('mamatha');

  // Developer Access: Adeeb Razi, Sanchit Agarwal, or any student/staff explicitly assigned canViewDeveloperHub by Admin
  let hasAssignedDevPerm = false;
  try {
    const raw = localStorage.getItem('adminPermissions');
    if (raw) {
      const p = JSON.parse(raw);
      if (p.canViewDeveloperHub) hasAssignedDevPerm = true;
    }
  } catch {}

  const canAccessDeveloper = isAdeeb || isSanchit || hasAssignedDevPerm;

  // Access Control: ONLY Adeeb Razi and Mamatha Mam
  const canAccessAccessControl = isAdeeb || isMamatha;

  const photoUrl = getAdminPhotoUrl(name, email);

  return {
    token,
    role,
    name,
    email,
    designation,
    photoUrl,
    isAdeeb,
    isSanchit,
    isMamatha,
    canAccessDeveloper,
    canAccessAccessControl,
  };
};
