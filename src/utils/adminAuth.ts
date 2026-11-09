// Shared Authentication & Identity Helpers for Technika Dashboard

export const getApiUrl = (): string => {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const port = window.location.port;

    // If opened through VS Code / Antigravity Live Server (port 5500), route directly to backend
    if (port === '5500' || port === '5501') {
      return 'http://localhost:5000';
    }

    // When hosted on reg.technika2026.online, always use relative path '' so requests are same-origin
    if (host === 'reg.technika2026.online') {
      return '';
    }
    const isLocal = host === 'localhost' || host === '127.0.0.1';
    if (!isLocal) {
      const envUrl = (import.meta.env.VITE_API_URL || '').trim();
      if (envUrl && !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1') && !envUrl.startsWith('/')) {
        return envUrl.replace(/\/$/, '');
      }
      return '';
    }
  }
  const envUrl = (import.meta.env.VITE_API_URL || '').trim();
  if (envUrl && !envUrl.startsWith('/')) {
    return envUrl.replace(/\/$/, '');
  }
  return '';
};

export const API_BASE_URL = getApiUrl();

export const fetchAdminApi = async (endpoint: string, options: RequestInit = {}): Promise<Response> => {
  const token = localStorage.getItem('adminToken') || localStorage.getItem('dashboardToken');
  const headers = new Headers(options.headers || {});
  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  // Multi-tier candidate URLs for high resilience
  const candidates: string[] = [];
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  // 1. Configured base URL
  const base = (getApiUrl() || '').replace(/\/$/, '');
  if (base) {
    candidates.push(`${base}${cleanEndpoint}`);
  }

  // 2. Relative same-origin path (exclude on static Live Server ports 5500/5501)
  const isLiveServer = typeof window !== 'undefined' && (window.location.port === '5500' || window.location.port === '5501');
  if (!isLiveServer && !candidates.includes(cleanEndpoint)) {
    candidates.push(cleanEndpoint);
  }

  // 3. Local direct backend candidates if on localhost or LAN
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isLocal = host === 'localhost' || host === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(host);
    if (isLocal) {
      if (!candidates.includes(`http://localhost:5000${cleanEndpoint}`)) {
        candidates.push(`http://localhost:5000${cleanEndpoint}`);
      }
      if (!candidates.includes(`http://127.0.0.1:5000${cleanEndpoint}`)) {
        candidates.push(`http://127.0.0.1:5000${cleanEndpoint}`);
      }
    }
    // 4. Production Cloud Fallback (always included as guaranteed reliable target)
    if (!candidates.includes(`https://reg.technika2026.online${cleanEndpoint}`)) {
      candidates.push(`https://reg.technika2026.online${cleanEndpoint}`);
    }
  }

  let lastError: Error = new Error('Failed to connect to backend server');

  for (const url of candidates) {
    try {
      const res = await fetch(url, { ...options, headers });
      const contentType = (res.headers.get('content-type') || '').toLowerCase();

      // If endpoint is on a static dev server or route not found (404/405/5xx), try next candidate
      if (res.status === 404 || res.status === 405 || res.status >= 500) {
        lastError = new Error(`Server returned status ${res.status}`);
        continue;
      }

      // If response is HTML (e.g. static file fallback serving index.html), skip to next candidate
      if (contentType.includes('text/html')) {
        lastError = new Error(`Server returned HTML instead of API JSON (status ${res.status})`);
        continue;
      }

      // Read response body safely to verify non-empty JSON
      const rawText = await res.text();
      const trimmed = rawText.trim();

      // If empty response or HTML in disguise, skip to next candidate
      if (!trimmed || trimmed.startsWith('<!doctype') || trimmed.startsWith('<html')) {
        lastError = new Error(`Server returned empty or HTML response (status ${res.status})`);
        continue;
      }

      // Return synthetic Response with buffered text so caller can safely read .json() or .text()
      return new Response(rawText, {
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
      });
    } catch (err: any) {
      lastError = err;
      continue;
    }
  }

  // If all candidates failed, return synthetic 503 JSON Response so res.json() NEVER throws syntax errors
  const fallbackJson = JSON.stringify({
    success: false,
    message: lastError.message || 'Unable to connect to backend server. Please verify your connection.',
  });
  return new Response(fallbackJson, {
    status: 503,
    statusText: 'Service Unavailable',
    headers: { 'Content-Type': 'application/json' },
  });
};

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

  if (key.includes('adeeb')) return `${base}/team/adeeb.webp`;
  if (key.includes('sanchit')) return `${base}/team/sanchit.webp`;
  if (key.includes('mamatha')) return `${base}/team/mamatha.webp`;
  if (key.includes('arvind')) return `${base}/team/arvind.webp`;
  if (key.includes('ashwini')) return `${base}/team/ashwini.webp`;
  if (key.includes('viranshu')) return `${base}/team/viranshu.webp`;
  if (key.includes('rashid')) return `${base}/team/rashid.webp`;
  if (key.includes('divya')) return `${base}/team/divya.webp`;
  if (key.includes('prem')) return `${base}/team/prem.webp`;
  if (key.includes('sayantani')) return `${base}/team/sayantani.webp`;
  if (key.includes('astik')) return `${base}/team/astik.webp`;
  if (key.includes('padmaja')) return `${base}/team/padmaja.webp`;
  if (key.includes('anjali')) return `${base}/team/Anjali.webp`;
  if (key.includes('sonali')) return `${base}/team/sonali.webp`;
  if (key.includes('nikita')) return `${base}/team/nikita.webp`;
  if (key.includes('aaditya') || key.includes('aditya')) return `${base}/team/aaditya.webp`;
  if (key.includes('sohail')) return `${base}/team/sohail.webp`;
  if (key.includes('harsh')) return `${base}/team/harsh.webp`;
  if (key.includes('ishika')) return `${base}/team/ishika.webp`;
  if (key.includes('ankit')) return `${base}/team/ankit.webp`;
  if (key.includes('suman')) return `${base}/team/s%20suman.webp`;
  if (key.includes('prince')) return `${base}/team/prince.webp`;
  if (key.includes('anish')) return `${base}/team/anish.webp`;
  if (key.includes('rishav')) return `${base}/team/rishav.webp`;
  if (key.includes('awesh')) return `${base}/team/awesh.webp`;
  if (key.includes('himanshu')) return `${base}/team/himanshu.webp`;

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
    canAccessAccessControl,
  };
};
