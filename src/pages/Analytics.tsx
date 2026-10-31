import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import {
  ClipboardList, Building2, GraduationCap,
  ArrowUpRight, RefreshCw, Sparkles,
  Info, LogOut, Cpu, Palette, Calendar,
  Lock, BarChart3, Globe, FileText
} from 'lucide-react';
import { AnalyticsLoader } from '../components/AnalyticsLoader';
import { getAdminPhotoUrl, API_BASE_URL as API } from '../utils/adminAuth';

interface AnalyticsData {
  totalRegistrations: number;
  websiteRegistrations?: number;
  googleFormRegistrations?: number;
  importRegistrations?: number;
  sourceBreakdown?: {
    website: number;
    googleForm: number;
    import: number;
  };
  instituteWise: { institute: string; count: number }[];
  totalInstitutes: number;
  eventWise: { eventId: string; eventName: string; count: number }[];
  maxEvent: { eventId: string; eventName: string; count: number } | null;
  minEvent: { eventId: string; eventName: string; count: number } | null;
  genderDistribution?: Record<string, number>;
  courseDistribution: { course: string; count: number }[];
  dailyTrend: { date: string; count: number }[];
  eventTypeBreakdown?: { category: string; count: number; share: number; color: string }[];
  totalEventRegistrations?: number;
}

export interface AnalyticsViewProps {
  onLogout?: () => void;
}

/* ── Animated Number Counter ── */
function useAnimatedCounter(target: number, duration = 1000): number {
  const [val, setVal] = useState(0);
  const prevRef = useRef(0);

  useEffect(() => {
    const start = prevRef.current;
    const diff = target - start;
    if (diff === 0) {
      setVal(target);
      return;
    }
    const startTime = performance.now();

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + diff * eased);
      setVal(current);
      prevRef.current = current;
      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }, [target, duration]);

  return val;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState('');

  const [adminAuth, setAdminAuth] = useState(() => {
    const name = localStorage.getItem('adminName') || 'Administrator';
    const email = localStorage.getItem('adminEmail') || '';
    return {
      token: localStorage.getItem('adminToken'),
      role: localStorage.getItem('adminRole'),
      name,
      designation: localStorage.getItem('adminDesignation') || 'Admin',
      photoUrl: getAdminPhotoUrl(name, email)
    };
  });
  const [avatarImgErr, setAvatarImgErr] = useState(false);

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRole');
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminDesignation');
    setAdminAuth({
      token: null,
      role: null,
      name: 'Administrator',
      designation: 'Admin',
      photoUrl: null
    });
    if (onLogout) onLogout();
  };

  const fetchAnalytics = async (isManual = false) => {
    if (isManual) setIsRefreshing(true);
    try {
      const token = localStorage.getItem('adminToken') || localStorage.getItem('dashboardToken');
      const headers: Record<string, string> = {};
      if (token) headers['Authorization'] = `Bearer ${token}`;
      const res = await fetch(`${API}/api/admin/analytics`, { headers });
      if (!res.ok) throw new Error('Failed to fetch analytics');
      const json: AnalyticsData = await res.json();
      setData(json);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Failed to load analytics data');
    } finally {
      setLoading(false);
      if (isManual) {
        setTimeout(() => setIsRefreshing(false), 600);
      }
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  // Format with leading zero if single digit, e.g. "02"
  const formatZeroPad = (n: number) => {
    return n < 10 ? `0${n}` : `${n}`;
  };

  // Helper to extract clean initials (e.g. "Arka Jain University" -> "AJ")
  const getInitials = (name: string, maxLen = 2): string => {
    if (!name) return '??';
    const words = name.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.slice(0, maxLen).toUpperCase();
  };

  // Derived metrics with safe fallbacks
  const totalRegistrations = data?.totalRegistrations || 0;

  const websiteCount = data?.websiteRegistrations ?? Math.max(0, totalRegistrations - (data?.googleFormRegistrations || 0));
  const googleFormCount = data?.googleFormRegistrations || 0;
  const institutesCount = data?.totalInstitutes || 0;

  const websitePercent = totalRegistrations > 0 ? Math.round((websiteCount / totalRegistrations) * 100) : 0;
  const googleFormPercent = totalRegistrations > 0 ? Math.round((googleFormCount / totalRegistrations) * 100) : 0;

  const animatedTotal = useAnimatedCounter(totalRegistrations);
  const animatedWebsite = useAnimatedCounter(websiteCount);
  const animatedGoogleForm = useAnimatedCounter(googleFormCount);
  const animatedInstitutes = useAnimatedCounter(institutesCount);

  // Top event image resolution
  const topEvent = data?.maxEvent;
  const topEventName = topEvent?.eventName || 'Robo Wars';
  const topEventCount = topEvent?.count || 2;
  const topEventShare = totalRegistrations > 0 ? Math.round((topEventCount / totalRegistrations) * 100) : 100;

  const leastEvent = data?.minEvent;
  const leastEventName = leastEvent?.eventName || 'Code Buster';
  const leastEventCount = leastEvent?.count || 1;

  // Event Registrations Interactive Filter
  const [eventCategoryFilter, setEventCategoryFilter] = useState<'TOP10' | 'ALL' | 'Technical' | 'Cultural' | 'Creative'>('TOP10');

  // Gender Demographics data computation
  const genderData = useMemo(() => {
    const dist = data?.genderDistribution || {};
    let male = 0;
    let female = 0;
    let unspecified = 0;

    Object.entries(dist).forEach(([key, val]) => {
      const k = (key || '').trim().toLowerCase();
      const count = typeof val === 'number' ? val : 0;
      if (k === 'male' || k === 'm') {
        male += count;
      } else if (k === 'female' || k === 'f') {
        female += count;
      } else {
        unspecified += count;
      }
    });

    const total = male + female + unspecified;
    const malePct = total > 0 ? Math.round((male / total) * 100) : (totalRegistrations > 0 ? 65 : 0);
    const femalePct = total > 0 ? Math.round((female / total) * 100) : (totalRegistrations > 0 ? 35 : 0);
    const unspecifiedPct = total > 0 && unspecified > 0 ? Math.max(0, 100 - malePct - femalePct) : 0;

    return {
      male,
      female,
      unspecified,
      total,
      malePct,
      femalePct,
      unspecifiedPct
    };
  }, [data, totalRegistrations]);

  // Helper to categorize events by ID or prefix
  const getEventCategory = (eventId: string = ''): 'Technical' | 'Cultural' | 'Creative' => {
    if (eventId.startsWith('TECH_')) return 'Technical';
    if (eventId.startsWith('CUL_')) return 'Cultural';
    if (eventId.startsWith('CRE_')) return 'Creative';
    return 'Technical';
  };

  // Chart data for Event registrations with category tagging
  const eventChartData = useMemo(() => {
    if (!data || !data.eventWise || data.eventWise.length === 0) {
      return [
        { name: 'Data Dash', count: 11, fill: '#2563eb', eventId: 'TECH_DD', category: 'Technical' as const },
        { name: 'IntelliQuest', count: 8, fill: '#2563eb', eventId: 'TECH_IQ', category: 'Technical' as const },
        { name: 'Need For Speed', count: 7, fill: '#ec4899', eventId: 'CRE_NF', category: 'Creative' as const },
        { name: 'Group Ramp Walk', count: 6, fill: '#f59e0b', eventId: 'CUL_GW', category: 'Cultural' as const }
      ];
    }
    const categoryColors: Record<string, string> = {
      Technical: '#2563eb',
      Cultural: '#f59e0b',
      Creative: '#ec4899'
    };
    return data.eventWise.map((e) => {
      const cat = getEventCategory(e.eventId);
      return {
        name: e.eventName,
        count: e.count,
        eventId: e.eventId,
        category: cat,
        fill: categoryColors[cat] || '#2563eb'
      };
    });
  }, [data]);

  // Filtered dataset according to user selection
  const filteredEventData = useMemo(() => {
    if (!eventChartData || eventChartData.length === 0) return [];
    if (eventCategoryFilter === 'TOP10') {
      return eventChartData.slice(0, 10);
    }
    if (eventCategoryFilter === 'ALL') {
      return eventChartData;
    }
    return eventChartData.filter(e => e.category === eventCategoryFilter);
  }, [eventChartData, eventCategoryFilter]);

  // Daily trend data
  const trendData = useMemo(() => {
    if (!data || data.dailyTrend.length === 0) {
      return [
        { date: 'Recorded day', count: 2 }
      ];
    }
    return data.dailyTrend.map(d => ({
      date: d.date.split('-').slice(1).join('/'),
      count: d.count
    }));
  }, [data]);

  // Event Type Categories (Technical, Cultural, Creative)
  const eventTypeBreakdown = useMemo(() => {
    if (data?.eventTypeBreakdown && data.eventTypeBreakdown.length > 0) {
      return data.eventTypeBreakdown;
    }
    let tech = 0, cul = 0, cre = 0;
    (data?.eventWise || []).forEach(ev => {
      const id = ev.eventId.toUpperCase();
      if (id.startsWith('TECH_') || id.includes('TECH') || id.includes('ROBO') || id.includes('CODE') || id.includes('HACK') || id.includes('WEB')) {
        tech += ev.count;
      } else if (id.startsWith('CUL_') || id.includes('CUL') || id.includes('DANCE') || id.includes('MUSIC') || id.includes('VOICE') || id.includes('RAMP')) {
        cul += ev.count;
      } else {
        cre += ev.count;
      }
    });
    const total = tech + cul + cre || 1;
    return [
      { category: 'Technical', count: tech, share: Number(((tech / total) * 100).toFixed(1)), color: '#22d3ee' },
      { category: 'Cultural', count: cul, share: Number(((cul / total) * 100).toFixed(1)), color: '#fbbf24' },
      { category: 'Creative', count: cre, share: Number(((cre / total) * 100).toFixed(1)), color: '#ec4899' }
    ];
  }, [data]);

  const totalEventRegistrations = data?.totalEventRegistrations || eventTypeBreakdown.reduce((acc, curr) => acc + curr.count, 0);

  const showLoader = loading || window.location.search.includes('loader');
  if (showLoader) {
    return (
      <AnalyticsLoader
        error={error}
        onRetry={() => {
          setLoading(true);
          fetchAnalytics(true);
        }}
        onLoadFallback={() => {
          setLoading(false);
        }}
      />
    );
  }

  return (
    <div className="clay-dashboard-root">
      {/* ── Background Floating Orbs (Same as /admin/users) ── */}
      <div className="clay-bg-orb clay-bg-orb-1" />
      <div className="clay-bg-orb clay-bg-orb-2" />
      <div className="clay-bg-orb clay-bg-orb-3" />

      {/* ── Top Navigation Bar ── */}
      <header className="clay-nav">
        <div className="clay-nav-left">
          {/* AJU Official Logo */}
          <div className="clay-nav-logo-badge" title="Arka Jain University">
            <img 
              src="/logo.png" 
              alt="ARKA JAIN UNIVERSITY" 
              className="clay-nav-logo-img" 
            />
          </div>
          <div className="clay-nav-titles">
            <div className="clay-nav-uni-title">ARKA JAIN UNIVERSITY</div>
            <div className="clay-nav-uni-subtitle">Jharkhand &nbsp;·&nbsp; NAAC Grade A</div>
          </div>

          <div className="clay-nav-divider" />

          {/* Technika 6.0 Official Logo */}
          <div className="clay-nav-tech-badge" title="Technika 6.0">
            <img 
              src="/technika_logo.jpg" 
              alt="Technika 6.0" 
              className="clay-nav-tech-img" 
            />
            <div className="clay-nav-brand">
              Technika <span className="clay-brand-cyan">6.0</span>
            </div>
          </div>
        </div>

        <div className="clay-nav-center">
          <div className="clay-nav-tab-group">
            <div className="clay-nav-tab active" title="Currently viewing Registration Analytics">
              <span className="clay-pulse-dot" />
              <span>Registration Analytics</span>
            </div>
          </div>
        </div>

        <div className="clay-nav-right">

          {/* Admin / Login Portal (Replaces old AJ avatar bubble) */}
          {adminAuth.token ? (
            <div className="clay-auth-group">
              <button 
                onClick={() => navigate('/admin/participants')}
                className="clay-portal-user-btn"
                title="Go to Admin Workspace"
              >
                <div className="clay-portal-avatar" style={{ padding: 0, overflow: 'hidden' }}>
                  {adminAuth.photoUrl && !avatarImgErr ? (
                    <img 
                      src={adminAuth.photoUrl} 
                      alt={adminAuth.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                      onError={() => setAvatarImgErr(true)}
                    />
                  ) : (
                    adminAuth.name
                      .split(' ')
                      .filter(Boolean)
                      .map((n: string) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase() || 'AD'
                  )}
                </div>
                <div className="clay-portal-meta">
                  <span className="clay-portal-user-name">{adminAuth.name}</span>
                  <span className="clay-portal-user-role">{adminAuth.designation}</span>
                </div>
                <span className="clay-portal-workspace-tag">Portal →</span>
              </button>
              <button 
                onClick={handleAdminLogout} 
                className="clay-logout-btn" 
                title="Log out of Admin Portal"
              >
                <LogOut size={14} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/admin/login')}
              className="clay-login-portal-btn"
              title="Access Admin & Organizer Portal"
            >
              <div className="clay-portal-icon-box">
                <Lock size={13} />
              </div>
              <span className="clay-login-portal-text">Login Portal</span>
              <span className="clay-portal-badge">Admin</span>
            </button>
          )}
        </div>
      </header>

      {/* ── Main Canvas Content ── */}
      <main className="clay-main-container">
        {error && (
          <div className="clay-error-banner">
            <Info size={16} />
            <span>{error}</span>
          </div>
        )}
        
        {/* ── Hero Title & Action Buttons Row ── */}
        <section className="clay-hero-section">
          <div className="clay-hero-left">
            <div className="clay-breadcrumb">
              TECHNIKA 6.0 &nbsp;/&nbsp; REGISTRATION DASHBOARD
            </div>
            <h1 className="clay-hero-heading">
              Registration overview<span className="clay-period">.</span>
            </h1>
            <p className="clay-hero-subtitle">
              Every participant. Every institute. The complete picture.
            </p>
          </div>

          <div className="clay-hero-actions">
            <button 
              className={`clay-btn-refresh ${isRefreshing ? 'is-spinning' : ''}`}
              onClick={() => fetchAnalytics(true)}
              disabled={isRefreshing}
            >
              <RefreshCw size={17} className={isRefreshing ? 'clay-spin-anim' : ''} />
              <span>Refresh</span>
            </button>
          </div>
        </section>

        {/* ── ROW 1: 4 Puffy Clay KPI Cards ── */}
        <section className="clay-kpi-grid">
          {/* Card 1: Total registrations */}
          <div className="clay-kpi-card">
            <div className="clay-kpi-head">
              <span className="clay-kpi-title">Total registrations</span>
              <div className="clay-kpi-icon-wrap">
                <ClipboardList size={18} />
              </div>
            </div>
            <div className="clay-kpi-val-row">
              <span className="clay-kpi-num clay-num-cyan">
                {formatZeroPad(animatedTotal)}
              </span>
              <span className="clay-kpi-label">participants</span>
            </div>
            <div className="clay-kpi-foot">
              Across {data?.eventWise?.length || 45} registered events
            </div>
          </div>

          {/* Card 2: Registration From Website */}
          <div className="clay-kpi-card">
            <div className="clay-kpi-head">
              <span className="clay-kpi-title">Registration From Website</span>
              <div className="clay-kpi-icon-wrap" style={{ color: '#2563eb', background: '#eff6ff' }}>
                <Globe size={18} />
              </div>
            </div>
            <div className="clay-kpi-val-row">
              <span className="clay-kpi-num">
                {formatZeroPad(animatedWebsite)}
              </span>
              <span className="clay-kpi-percent">{websitePercent}%</span>
            </div>
            <div className="clay-kpi-foot">
              Direct website portal registrations
            </div>
          </div>

          {/* Card 3: Registration through Google Form */}
          <div className="clay-kpi-card">
            <div className="clay-kpi-head">
              <span className="clay-kpi-title">Through Google Form</span>
              <div className="clay-kpi-icon-wrap" style={{ color: '#059669', background: '#ecfdf5' }}>
                <FileText size={18} />
              </div>
            </div>
            <div className="clay-kpi-val-row">
              <span className="clay-kpi-num">
                {formatZeroPad(animatedGoogleForm)}
              </span>
              <span className="clay-kpi-percent" style={{ color: '#059669' }}>{googleFormPercent}%</span>
            </div>
            <div className="clay-kpi-foot">
              Auto-synced from Google Sheet
            </div>
          </div>

          {/* Card 4: Participating institutes */}
          <div className="clay-kpi-card">
            <div className="clay-kpi-head">
              <span className="clay-kpi-title">Participating institutes</span>
              <div className="clay-kpi-icon-wrap">
                <Building2 size={18} />
              </div>
            </div>
            <div className="clay-kpi-val-row">
              <span className="clay-kpi-num">
                {formatZeroPad(animatedInstitutes)}
              </span>
              <span className="clay-kpi-label">institutes</span>
            </div>
            <div className="clay-kpi-foot">
              Representation across campuses
            </div>
          </div>
        </section>

        {/* ── ROW 2: Event Type Categories ── */}
        <section className="clay-categories-grid">
          {/* Event Type Categories */}
          <div className="clay-card clay-cat-card">
            <div className="clay-card-header-row">
              <div>
                <h2 className="clay-card-serif-title">Event type categories</h2>
                <p className="clay-card-subtitle">Technical, Cultural &amp; Creative participation breakdown</p>
              </div>
              <div className="clay-badge-pill">
                {totalEventRegistrations} total event entries
              </div>
            </div>

            {/* 3 Prominent Stat Tiles */}
            <div className="clay-cat-tiles-row">
              {eventTypeBreakdown.map((cat) => {
                const isTech = cat.category === 'Technical';
                const isCul = cat.category === 'Cultural';
                const isCre = cat.category === 'Creative';
                return (
                  <div key={cat.category} className={`clay-cat-tile ${isTech ? 'tile-cyan' : isCul ? 'tile-amber' : 'tile-pink'}`}>
                    <div className="clay-cat-tile-top">
                      <div className="clay-cat-tile-icon">
                        {isTech && <Cpu size={16} />}
                        {isCul && <Sparkles size={16} />}
                        {isCre && <Palette size={16} />}
                      </div>
                      <span className="clay-cat-tile-pill">{cat.share}%</span>
                    </div>
                    <div className="clay-cat-tile-num">{cat.count}</div>
                    <div className="clay-cat-tile-label">{cat.category}</div>
                    <div className="clay-cat-tile-desc">
                      {isTech ? 'Coding & Robotics' : isCul ? 'Music, Dance & Drama' : 'Design & Creative Arts'}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Segmented Proportional Clay Bar */}
            <div className="clay-cat-segmented-wrap">
              <div className="clay-cat-segmented-label">
                <span>Genre representation</span>
                <span>100% distribution</span>
              </div>
              <div className="clay-cat-segmented-track">
                {eventTypeBreakdown.map((cat, idx) => {
                  const widthPct = Math.max(cat.share, 2);
                  return (
                    <div
                      key={idx}
                      className="clay-cat-segment"
                      style={{
                        width: `${widthPct}%`,
                        backgroundColor: cat.color,
                        boxShadow: `0 0 10px ${cat.color}66`
                      }}
                      title={`${cat.category}: ${cat.count} registrations (${cat.share}%)`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Detailed Row Breakdown */}
            <div className="clay-cat-list">
              {eventTypeBreakdown.map((cat) => {
                const isTech = cat.category === 'Technical';
                const isCul = cat.category === 'Cultural';
                return (
                  <div key={cat.category} className="clay-cat-list-row">
                    <div className="clay-cat-list-left">
                      <span
                        className="clay-cat-indicator-dot"
                        style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                      />
                      <span className="clay-cat-name">{cat.category} Events</span>
                    </div>
                    <div className="clay-cat-list-right">
                      <div className="clay-bar-trough clay-cat-mini-trough">
                        <div
                          className={`clay-bar-fill ${isTech ? 'fill-cyan' : isCul ? 'fill-amber' : 'fill-pink'}`}
                          style={{ width: `${Math.min(100, Math.max(8, cat.share))}%` }}
                        />
                      </div>
                      <span className="clay-cat-count-val">{cat.count}</span>
                      <span className="clay-cat-share-val">{cat.share}%</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="clay-card-footer-info">
              <Info size={14} className="clay-info-icon" />
              <span>Categorized based on official Technika 6.0 technical, cultural and creative guidelines.</span>
            </div>
          </div>
        </section>

        {/* ── ROW 3: Event Registrations & Most Popular Event ── */}
        <section className="clay-mid-grid">
          {/* Left: Event registrations Interactive Visualizer */}
          <div className="clay-card clay-event-chart-card">
            <div className="clay-card-header-row">
              <div>
                <h2 className="clay-card-serif-title">Event registrations</h2>
                <p className="clay-card-subtitle">Participation across the Technika lineup</p>
              </div>
              <div className="clay-event-header-controls">
                <div className="clay-badge-pill">
                  {filteredEventData.length} of {data?.eventWise?.length || 45} events
                </div>
              </div>
            </div>

            {/* Category / Scope Filter Tabs */}
            <div className="clay-event-filter-bar">
              <button
                type="button"
                className={`clay-filter-chip ${eventCategoryFilter === 'TOP10' ? 'active' : ''}`}
                onClick={() => setEventCategoryFilter('TOP10')}
              >
                <span>🏆 Top 10</span>
              </button>
              <button
                type="button"
                className={`clay-filter-chip ${eventCategoryFilter === 'Technical' ? 'active tech' : ''}`}
                onClick={() => setEventCategoryFilter('Technical')}
              >
                <Cpu size={12} />
                <span>Technical (20)</span>
              </button>
              <button
                type="button"
                className={`clay-filter-chip ${eventCategoryFilter === 'Cultural' ? 'active cult' : ''}`}
                onClick={() => setEventCategoryFilter('Cultural')}
              >
                <Calendar size={12} />
                <span>Cultural (15)</span>
              </button>
              <button
                type="button"
                className={`clay-filter-chip ${eventCategoryFilter === 'Creative' ? 'active creat' : ''}`}
                onClick={() => setEventCategoryFilter('Creative')}
              >
                <Palette size={12} />
                <span>Creative (10)</span>
              </button>
              <button
                type="button"
                className={`clay-filter-chip ${eventCategoryFilter === 'ALL' ? 'active' : ''}`}
                onClick={() => setEventCategoryFilter('ALL')}
              >
                <span>All 45</span>
              </button>
            </div>

            {/* Visualizer Content: Ranked Horizontal Bars */}
            <div className="clay-ranked-bars-list">
              {filteredEventData.map((ev, idx) => {
                const maxCount = topEventCount > 0 ? topEventCount : 11;
                const pct = Math.max(8, Math.round((ev.count / maxCount) * 100));
                const shareOfParticipants = totalRegistrations > 0 ? ((ev.count / totalRegistrations) * 100).toFixed(0) : '0';
                const rankNumber = eventChartData.findIndex(e => e.eventId === ev.eventId) + 1;
                const isTop3 = rankNumber <= 3;
                const medal = rankNumber === 1 ? '🥇' : rankNumber === 2 ? '🥈' : rankNumber === 3 ? '🥉' : `#${rankNumber}`;

                return (
                  <div key={ev.eventId || idx} className="clay-ranked-bar-row">
                    <div className="clay-ranked-meta">
                      <span className={`clay-rank-badge ${isTop3 ? `rank-${rankNumber}` : ''}`}>
                        {medal}
                      </span>
                      <span className="clay-ranked-name" title={ev.name}>{ev.name}</span>
                      <span className={`clay-cat-tag cat-${ev.category.toLowerCase()}`}>
                        {ev.category}
                      </span>
                    </div>

                    <div className="clay-ranked-bar-track">
                      <div 
                        className={`clay-ranked-bar-fill fill-${ev.category.toLowerCase()}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <div className="clay-ranked-counts">
                      <span className="clay-count-val">{ev.count}</span>
                      <span className="clay-count-pct">{shareOfParticipants}%</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="clay-card-footer-info">
              <Info size={14} className="clay-info-icon" />
              <span>Participants may register for more than one event.</span>
            </div>
          </div>

          {/* Right: Most Popular Event Card */}
          <div className="clay-card clay-popular-card">
            {/* Robot Image Container */}
            <div className="clay-img-frame">
              <img 
                src="/robo-wars.jpg" 
                alt="Robo Wars" 
                className="clay-event-img"
                onError={(e) => {
                  // Fallback to high tech gradient if image is loading
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="clay-img-overlay-glow" />
            </div>

            <div className="clay-popular-body">
              <div className="clay-popular-tag">
                <Sparkles size={13} className="clay-sparkle-icon" />
                <span>MOST POPULAR EVENT</span>
              </div>

              <div className="clay-popular-title-row">
                <h3 className="clay-popular-name">{topEventName}</h3>
                <button className="clay-arrow-btn" title="View event details">
                  <ArrowUpRight size={17} />
                </button>
              </div>

              <div className="clay-popular-stats">
                {topEventCount} registrations &nbsp;·&nbsp; {topEventShare}% of participants
              </div>

              <div className="clay-popular-divider" />

              <div className="clay-popular-footer-row">
                <span className="clay-popular-foot-lbl">Least registered</span>
                <span className="clay-popular-foot-val">{leastEventName} &nbsp;·&nbsp; {leastEventCount}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROW 3: Institute Participation & Course Participation ── */}
        <section className="clay-tables-grid">
          {/* Left: Institute Participation */}
          <div className="clay-card clay-table-card">
            <div className="clay-card-header-row">
              <div>
                <h2 className="clay-card-serif-title">Institute participation</h2>
                <p className="clay-card-subtitle">Representation from participating institutions</p>
              </div>
              <div className="clay-kpi-icon-wrap">
                <Building2 size={18} />
              </div>
            </div>

            <div className="clay-table-wrap">
              <table className="clay-data-table">
                <thead>
                  <tr>
                    <th style={{ width: '56%' }}>INSTITUTE</th>
                    <th style={{ width: '20%', textAlign: 'center' }}>PARTICIPANTS</th>
                    <th style={{ width: '24%', textAlign: 'right' }}>SHARE</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.instituteWise && data.instituteWise.length > 0) ? (
                    data.instituteWise.map((inst, idx) => {
                      const share = totalRegistrations > 0 ? ((inst.count / totalRegistrations) * 100).toFixed(1) : '50.0';
                      const isCyan = idx % 2 === 0;
                      return (
                        <tr key={idx}>
                          <td>
                            <div className="clay-entity-cell">
                              <span className="clay-initial-badge">
                                {getInitials(inst.institute)}
                              </span>
                              <span className="clay-entity-name" title={inst.institute}>
                                {inst.institute}
                              </span>
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <span className="clay-count-val">{inst.count}</span>
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <div className="clay-share-col">
                              <div className="clay-bar-trough">
                                <div 
                                  className={`clay-bar-fill ${isCyan ? 'fill-cyan' : 'fill-amber'}`}
                                  style={{ width: `${Math.min(100, Math.max(10, Number(share)))}%` }}
                                />
                              </div>
                              <span className="clay-share-text">{share}%</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    // Elegant fallback matching the user's reference mockup
                    <>
                      <tr>
                        <td>
                          <div className="clay-entity-cell">
                            <span className="clay-initial-badge">AJ</span>
                            <span className="clay-entity-name">Arka Jain University</span>
                          </div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="clay-count-val">1</span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div className="clay-share-col">
                            <div className="clay-bar-trough">
                              <div className="clay-bar-fill fill-cyan" style={{ width: '50%' }} />
                            </div>
                            <span className="clay-share-text">50.0%</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="clay-entity-cell">
                            <span className="clay-initial-badge">AD</span>
                            <span className="clay-entity-name">AIIMS Deoghar</span>
                          </div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="clay-count-val">1</span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div className="clay-share-col">
                            <div className="clay-bar-trough">
                              <div className="clay-bar-fill fill-amber" style={{ width: '50%' }} />
                            </div>
                            <span className="clay-share-text">50.0%</span>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Course Participation */}
          <div className="clay-card clay-table-card">
            <div className="clay-card-header-row">
              <div>
                <h2 className="clay-card-serif-title">Course participation</h2>
                <p className="clay-card-subtitle">Registrations by academic discipline</p>
              </div>
              <div className="clay-kpi-icon-wrap">
                <GraduationCap size={18} />
              </div>
            </div>

            <div className="clay-table-wrap">
              <table className="clay-data-table">
                <thead>
                  <tr>
                    <th style={{ width: '56%' }}>COURSE</th>
                    <th style={{ width: '20%', textAlign: 'center' }}>PARTICIPANTS</th>
                    <th style={{ width: '24%', textAlign: 'right' }}>SHARE</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.courseDistribution && data.courseDistribution.length > 0) ? (
                    data.courseDistribution.map((c, idx) => {
                      const share = totalRegistrations > 0 ? ((c.count / totalRegistrations) * 100).toFixed(1) : '50.0';
                      const isCyan = idx % 2 === 0;
                      return (
                        <tr key={idx}>
                          <td>
                            <div className="clay-entity-cell">
                              <span className="clay-initial-badge">
                                {getInitials(c.course)}
                              </span>
                              <span className="clay-entity-name" title={c.course}>
                                {c.course}
                              </span>
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <span className="clay-count-val">{c.count}</span>
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <div className="clay-share-col">
                              <div className="clay-bar-trough">
                                <div 
                                  className={`clay-bar-fill ${isCyan ? 'fill-cyan' : 'fill-amber'}`}
                                  style={{ width: `${Math.min(100, Math.max(10, Number(share)))}%` }}
                                />
                              </div>
                              <span className="clay-share-text">{share}%</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    // Fallback reference rows
                    <>
                      <tr>
                        <td>
                          <div className="clay-entity-cell">
                            <span className="clay-initial-badge">BC</span>
                            <span className="clay-entity-name">BCA</span>
                          </div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="clay-count-val">1</span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div className="clay-share-col">
                            <div className="clay-bar-trough">
                              <div className="clay-bar-fill fill-cyan" style={{ width: '50%' }} />
                            </div>
                            <span className="clay-share-text">50.0%</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="clay-entity-cell">
                            <span className="clay-initial-badge">BT</span>
                            <span className="clay-entity-name">BTech</span>
                          </div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="clay-count-val">1</span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div className="clay-share-col">
                            <div className="clay-bar-trough">
                              <div className="clay-bar-fill fill-amber" style={{ width: '50%' }} />
                            </div>
                            <span className="clay-share-text">50.0%</span>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── ROW 4: Daily Registration Trend ── */}
        <section className="clay-bottom-grid">
          {/* Daily Registration Trend Area Chart */}
          <div className="clay-card clay-trend-card">
            <div className="clay-card-header-row">
              <div>
                <h2 className="clay-card-serif-title">Daily registration trend</h2>
                <p className="clay-card-subtitle">Registration activity over time</p>
              </div>
              <div className="clay-badge-pill">
                {totalRegistrations} registrations
              </div>
            </div>

            <div className="clay-trend-chart-box">
              <ResponsiveContainer width="100%" height={210}>
                <AreaChart data={trendData} margin={{ top: 20, right: 20, left: -25, bottom: 10 }}>
                  <defs>
                    <linearGradient id="clayCyanGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="date" 
                    tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} 
                    axisLine={false} 
                    tickLine={false} 
                  />
                  <YAxis 
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }} 
                    axisLine={false} 
                    tickLine={false} 
                    allowDecimals={false}
                    domain={[0, (dataMax: number) => Math.max(4, dataMax + 1)]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      borderRadius: 14, 
                      border: '1.5px solid rgba(162, 178, 201, 0.4)', 
                      boxShadow: '0 8px 24px rgba(162, 178, 201, 0.35)',
                      color: '#0f172a',
                      fontSize: 12,
                      fontWeight: 600
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="count" 
                    stroke="#2563eb" 
                    strokeWidth={2.5}
                    fill="url(#clayCyanGlow)" 
                    dot={{ fill: '#2563eb', stroke: '#ffffff', strokeWidth: 3, r: 5 }}
                    activeDot={{ fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: 2, r: 7 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="clay-card-footer-info">
              <Info size={14} className="clay-info-icon" />
              <span>
                {data?.dailyTrend?.length && data.dailyTrend.length > 1
                  ? 'Live registrations timeline updated automatically.'
                  : 'Registrations recorded for today.'}
              </span>
            </div>
          </div>

          {/* Gender Demographics Bar Graph Card */}
          <div className="clay-card clay-gender-card">
            <div className="clay-card-header-row">
              <div>
                <h2 className="clay-card-serif-title">Gender demographics</h2>
                <p className="clay-card-subtitle">Participant breakdown by gender</p>
              </div>
              <div className="clay-badge-pill">
                {genderData.total || totalRegistrations} participants
              </div>
            </div>

            {/* Split Proportional Visualizer Bar */}
            <div className="clay-gender-split-wrap">
              <div className="clay-gender-split-bar">
                <div 
                  className="clay-split-seg seg-male" 
                  style={{ width: `${genderData.malePct}%` }}
                  title={`Male: ${genderData.male} (${genderData.malePct}%)`}
                />
                <div 
                  className="clay-split-seg seg-female" 
                  style={{ width: `${genderData.femalePct}%` }}
                  title={`Female: ${genderData.female} (${genderData.femalePct}%)`}
                />
                {genderData.unspecified > 0 && (
                  <div 
                    className="clay-split-seg seg-unspecified" 
                    style={{ width: `${genderData.unspecifiedPct}%` }}
                    title={`Unspecified: ${genderData.unspecified} (${genderData.unspecifiedPct}%)`}
                  />
                )}
              </div>
              <div className="clay-gender-split-labels">
                <span className="split-lbl-male">♂ Male {genderData.malePct}%</span>
                <span className="split-lbl-female">♀ Female {genderData.femalePct}%</span>
                {genderData.unspecified > 0 && (
                  <span className="split-lbl-unspecified">❔ Unspecified {genderData.unspecifiedPct}%</span>
                )}
              </div>
            </div>

            {/* Detailed Claymorphic Bar Rows */}
            <div className="clay-gender-bars-list">
              {/* Male Row */}
              <div className="clay-gender-bar-row">
                <div className="clay-gender-meta">
                  <div className="clay-gender-icon-orb male">
                    <span>♂</span>
                  </div>
                  <div className="clay-gender-info">
                    <span className="clay-gender-name">Male</span>
                    <span className="clay-gender-pct-tag male">{genderData.malePct}%</span>
                  </div>
                </div>

                <div className="clay-gender-track">
                  <div 
                    className="clay-gender-fill fill-male" 
                    style={{ width: `${Math.max(8, genderData.malePct)}%` }} 
                  />
                </div>

                <div className="clay-gender-count-box">
                  <span className="clay-gender-count-val">{genderData.male}</span>
                  <span className="clay-gender-count-lbl">participants</span>
                </div>
              </div>

              {/* Female Row */}
              <div className="clay-gender-bar-row">
                <div className="clay-gender-meta">
                  <div className="clay-gender-icon-orb female">
                    <span>♀</span>
                  </div>
                  <div className="clay-gender-info">
                    <span className="clay-gender-name">Female</span>
                    <span className="clay-gender-pct-tag female">{genderData.femalePct}%</span>
                  </div>
                </div>

                <div className="clay-gender-track">
                  <div 
                    className="clay-gender-fill fill-female" 
                    style={{ width: `${Math.max(8, genderData.femalePct)}%` }} 
                  />
                </div>

                <div className="clay-gender-count-box">
                  <span className="clay-gender-count-val">{genderData.female}</span>
                  <span className="clay-gender-count-lbl">participants</span>
                </div>
              </div>

              {/* Unspecified Row (if present) */}
              {genderData.unspecified > 0 && (
                <div className="clay-gender-bar-row">
                  <div className="clay-gender-meta">
                    <div className="clay-gender-icon-orb unspecified">
                      <span>❔</span>
                    </div>
                    <div className="clay-gender-info">
                      <span className="clay-gender-name">Unspecified</span>
                      <span className="clay-gender-pct-tag unspecified">{genderData.unspecifiedPct}%</span>
                    </div>
                  </div>

                  <div className="clay-gender-track">
                    <div 
                      className="clay-gender-fill fill-unspecified" 
                      style={{ width: `${Math.max(8, genderData.unspecifiedPct)}%` }} 
                    />
                  </div>

                  <div className="clay-gender-count-box">
                    <span className="clay-gender-count-val">{genderData.unspecified}</span>
                    <span className="clay-gender-count-lbl">participants</span>
                  </div>
                </div>
              )}
            </div>

            <div className="clay-card-footer-info">
              <Info size={14} className="clay-info-icon" />
              <span>Demographic breakdown based on verified participant registration profiles.</span>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="clay-footer">
          <div className="clay-foot-left">
            Arka Jain University &nbsp;/&nbsp; Technika 6.0
          </div>
          <div className="clay-foot-right">
            Technika 6.0 · Arka Jain University
          </div>
        </footer>
      </main>

      {/* ── Mobile Bottom Navigation Bar (Docked at Bottom) ── */}
      <nav className="clay-mobile-bottom-bar" aria-label="Mobile Navigation">
        <div className="clay-mob-nav-inner">
          {/* Tab 1: Registration Analytics (Active) */}
          <button 
            className="clay-mob-nav-item is-active"
            title="Registration Analytics"
            type="button"
          >
            <div className="clay-mob-icon-wrap">
              <BarChart3 size={18} />
            </div>
            <span className="clay-mob-label">Analytics</span>
          </button>


          {/* Tab 3: Admin / User Profile or Login */}
          {adminAuth.token ? (
            <>
              <button 
                onClick={() => navigate('/admin/participants')}
                className="clay-mob-nav-item"
                title={`Admin Portal (${adminAuth.name})`}
                type="button"
              >
                <div className="clay-mob-avatar" style={{ padding: 0, overflow: 'hidden' }}>
                  {adminAuth.photoUrl && !avatarImgErr ? (
                    <img 
                      src={adminAuth.photoUrl} 
                      alt={adminAuth.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                      onError={() => setAvatarImgErr(true)}
                    />
                  ) : (
                    adminAuth.name
                      .split(' ')
                      .filter(Boolean)
                      .map((n: string) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase() || 'AD'
                  )}
                </div>
                <span className="clay-mob-label">Portal</span>
              </button>

              <button 
                onClick={handleAdminLogout} 
                className="clay-mob-nav-item is-logout"
                title="Log out of Admin Portal"
                type="button"
              >
                <div className="clay-mob-icon-wrap text-red">
                  <LogOut size={18} />
                </div>
                <span className="clay-mob-label text-red">Logout</span>
              </button>
            </>
          ) : (
            <button 
              onClick={() => navigate('/admin/login')}
              className="clay-mob-nav-item"
              title="Access Admin & Organizer Portal"
              type="button"
            >
              <div className="clay-mob-icon-wrap">
                <Lock size={18} />
              </div>
              <span className="clay-mob-label">Login</span>
            </button>
          )}
        </div>
      </nav>

      {/* ── EMBEDDED CLAYMORPHISM CSS STYLES (Light Theme matching /admin/users) ── */}
      <style>{`
        /* Reset and Root Variables */
        .clay-dashboard-root {
          min-height: 100vh;
          background-color: #e6ecf5;
          color: #0f172a;
          font-family: 'Space Grotesk', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          padding-bottom: 40px;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Background Floating Orbs (Same as /admin/users & AdminLayout) ── */
        .clay-bg-orb {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.06));
        }

        .clay-bg-orb-1 {
          width: 320px;
          height: 320px;
          top: -4%;
          right: 4%;
          background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
          box-shadow: 
            inset -12px -12px 24px rgba(99, 102, 241, 0.4),
            inset 12px 12px 24px rgba(255, 255, 255, 0.65);
          animation: floatOrb 10s ease-in-out infinite alternate;
          opacity: 0.5;
        }

        .clay-bg-orb-2 {
          width: 240px;
          height: 240px;
          bottom: 8%;
          right: 18%;
          background: linear-gradient(135deg, #6ee7b7 0%, #34d399 100%);
          box-shadow: 
            inset -10px -10px 20px rgba(16, 185, 129, 0.4),
            inset 10px 10px 20px rgba(255, 255, 255, 0.65);
          animation: floatOrb 12s ease-in-out 1s infinite alternate-reverse;
          opacity: 0.4;
        }

        .clay-bg-orb-3 {
          width: 180px;
          height: 180px;
          bottom: 25%;
          left: 5%;
          background: linear-gradient(135deg, #fde047 0%, #eab308 100%);
          box-shadow: 
            inset -8px -8px 16px rgba(202, 138, 4, 0.4),
            inset 8px 8px 16px rgba(255, 255, 255, 0.65);
          animation: floatOrb 8s ease-in-out 2s infinite alternate;
          opacity: 0.35;
        }

        @keyframes floatOrb {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }

        /* ── Top Navigation Bar ── */
        .clay-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 44px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 20px rgba(162, 178, 201, 0.35);
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* ── Mobile Bottom Navigation Bar (Hidden on Desktop) ── */
        .clay-mobile-bottom-bar {
          display: none;
        }

        .clay-nav-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-nav-logo-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: #ffffff;
          padding: 4px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.3),
            -3px -3px 8px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.8);
          flex-shrink: 0;
        }

        .clay-nav-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .clay-nav-tech-badge {
          display: flex;
          align-items: center;
          gap: 9px;
          background: #f4f8fd;
          border: 2px solid rgba(255, 255, 255, 0.95);
          padding: 4px 12px 4px 5px;
          border-radius: 14px;
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.25),
            -3px -3px 8px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-nav-tech-img {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          object-fit: cover;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .clay-nav-titles {
          display: flex;
          flex-direction: column;
        }

        .clay-nav-uni-title {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: #0f172a;
        }

        .clay-nav-uni-subtitle {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .clay-nav-divider {
          width: 1.5px;
          height: 28px;
          background: rgba(162, 178, 201, 0.4);
          margin: 0 4px;
        }

        .clay-nav-brand {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .clay-brand-cyan {
          color: #2563eb;
        }

        .clay-nav-center {
          display: flex;
          align-items: center;
        }

        .clay-nav-tab-group {
          display: flex;
          background: #e2eaf4;
          padding: 4px;
          border-radius: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 
            inset 2px 2px 4px rgba(162, 178, 201, 0.35),
            inset -2px -2px 4px rgba(255, 255, 255, 0.9);
          gap: 4px;
        }

        .clay-nav-tab {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clay-nav-tab.active {
          background: #ffffff;
          color: #1e293b;
          box-shadow: 
            2px 3px 8px rgba(162, 178, 201, 0.35),
            -1px -1px 4px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }

        .clay-nav-tab.inactive {
          background: transparent;
          color: #64748b;
        }

        .clay-nav-tab.inactive:hover {
          color: #0f172a;
          background: rgba(255, 255, 255, 0.6);
        }

        .clay-tab-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 6px #2563eb;
        }

        .clay-nav-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.25),
            -3px -3px 8px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.8);
          animation: pulseGlow 2s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .clay-status-text {
          font-size: 12px;
          font-weight: 700;
          color: #475569;
        }

        /* ── Login Portal & Auth Group ── */
        .clay-auth-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clay-login-portal-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 6px 14px 6px 8px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          color: #0f172a;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 
            5px 6px 16px rgba(162, 178, 201, 0.3),
            -3px -3px 8px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }

        .clay-login-portal-btn:hover {
          transform: translateY(-1px);
          border-color: #3b82f6;
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.2);
        }

        .clay-portal-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: #ffffff;
          box-shadow: 
            2px 2px 6px rgba(37, 99, 235, 0.3),
            inset 1px 1px 2px rgba(255, 255, 255, 0.6);
          flex-shrink: 0;
        }

        .clay-login-portal-text {
          font-size: 12.5px;
          font-weight: 700;
          color: #0f172a;
        }

        .clay-portal-badge {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 2px 7px;
          border-radius: 6px;
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          border: 1px solid rgba(37, 99, 235, 0.25);
        }

        .clay-portal-user-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 5px 12px 5px 6px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          color: #0f172a;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.25),
            -3px -3px 8px rgba(255, 255, 255, 0.9);
          transition: all 0.2s ease;
        }

        .clay-portal-user-btn:hover {
          transform: translateY(-1px);
          border-color: #3b82f6;
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.2);
        }

        .clay-portal-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          box-shadow: 
            2px 2px 6px rgba(37, 99, 235, 0.35),
            inset 1px 1px 2px rgba(255, 255, 255, 0.5);
        }

        .clay-portal-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
          text-align: left;
        }

        .clay-portal-user-name {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          max-width: 110px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .clay-portal-user-role {
          font-size: 10px;
          font-weight: 700;
          color: #2563eb;
          max-width: 110px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .clay-portal-workspace-tag {
          font-size: 10px;
          font-weight: 700;
          color: #2563eb;
          padding: 2px 6px;
          border-radius: 6px;
          background: rgba(37, 99, 235, 0.1);
        }

        .clay-logout-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: 12px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 3px 3px 8px rgba(239, 68, 68, 0.15);
          transition: all 0.2s ease;
        }

        .clay-logout-btn:hover {
          background: #ef4444;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
        }

        /* ── Main Container ── */
        .clay-main-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          position: relative;
          z-index: 1;
        }

        /* ── Hero Header ── */
        .clay-hero-section {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          padding: 8px 0;
        }

        .clay-breadcrumb {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #64748b;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .clay-hero-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 40px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
          line-height: 1.15;
        }

        .clay-period {
          color: #2563eb;
        }

        .clay-hero-subtitle {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .clay-hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-btn-refresh {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 14px;
          background: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.9);
          color: #0f172a;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 
            6px 8px 18px rgba(162, 178, 201, 0.28),
            -5px -5px 12px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }

        .clay-btn-refresh:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 8px 12px 22px rgba(162, 178, 201, 0.35);
        }

        .clay-btn-refresh:active {
          transform: translateY(1px);
        }

        .clay-spin-anim {
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .clay-btn-export {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border: 2px solid #ffffff;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 
            6px 8px 18px rgba(37, 99, 235, 0.32),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -2px -2px 4px rgba(15, 23, 42, 0.25);
          transition: all 0.2s ease;
        }

        .clay-btn-export:hover {
          transform: translateY(-2px);
          box-shadow: 8px 12px 24px rgba(37, 99, 235, 0.45);
        }

        .clay-btn-export:active {
          transform: translateY(1px);
        }

        /* ── Base Clay Card ── */
        .clay-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 26px 28px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 
            8px 10px 24px rgba(162, 178, 201, 0.28),
            -6px -6px 18px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .clay-card:hover {
          box-shadow: 
            10px 14px 30px rgba(162, 178, 201, 0.35),
            -6px -6px 18px rgba(255, 255, 255, 0.95);
        }

        /* ── ROW 1: 4 KPI Cards Grid ── */
        .clay-kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .clay-kpi-card {
          background: #ffffff;
          border-radius: 22px;
          padding: 22px 24px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 
            8px 10px 22px rgba(162, 178, 201, 0.26),
            -5px -5px 14px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.16);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .clay-kpi-card:hover {
          transform: translateY(-2px);
          box-shadow: 10px 14px 26px rgba(162, 178, 201, 0.35);
        }

        .clay-kpi-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .clay-kpi-title {
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
        }

        .clay-kpi-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 11px;
          background: #eef4fc;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 1px 1px 2px rgba(162, 178, 201, 0.35);
        }

        .clay-kpi-val-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 12px;
        }

        .clay-kpi-num {
          font-size: 38px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .clay-num-cyan {
          color: #2563eb;
        }

        .clay-kpi-label {
          font-size: 13px;
          color: #64748b;
          font-weight: 600;
        }

        .clay-kpi-percent {
          font-size: 16px;
          font-weight: 800;
          color: #2563eb;
        }

        .clay-kpi-foot {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
          margin-top: auto;
        }

        /* ── ROW 2: Event Type Categories ── */
        .clay-categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .clay-card-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .clay-card-serif-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .clay-card-subtitle {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .clay-badge-pill {
          padding: 4px 12px;
          border-radius: 9999px;
          background: #f1f5f9;
          border: 1px solid rgba(162, 178, 201, 0.3);
          font-size: 11px;
          font-weight: 700;
          color: #475569;
          box-shadow: inset 1px 1px 2px rgba(162, 178, 201, 0.2);
        }

        .clay-cat-tiles-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 18px;
        }

        .clay-cat-tile {
          border-radius: 18px;
          padding: 14px 16px;
          background: #f8fafc;
          border: 1.5px solid #ffffff;
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.22),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.9),
            inset -1.5px -1.5px 3px rgba(162, 178, 201, 0.15);
          transition: transform 0.2s ease;
        }

        .clay-cat-tile:hover {
          transform: translateY(-2px);
        }

        .clay-cat-tile.tile-cyan {
          border-color: rgba(37, 99, 235, 0.25);
        }
        .clay-cat-tile.tile-cyan .clay-cat-tile-icon {
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
        }
        .clay-cat-tile.tile-cyan .clay-cat-tile-pill {
          background: rgba(37, 99, 235, 0.12);
          color: #2563eb;
          border: 1px solid rgba(37, 99, 235, 0.25);
        }

        .clay-cat-tile.tile-amber {
          border-color: rgba(245, 158, 11, 0.25);
        }
        .clay-cat-tile.tile-amber .clay-cat-tile-icon {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }
        .clay-cat-tile.tile-amber .clay-cat-tile-pill {
          background: rgba(245, 158, 11, 0.12);
          color: #d97706;
          border: 1px solid rgba(245, 158, 11, 0.25);
        }

        .clay-cat-tile.tile-pink {
          border-color: rgba(236, 72, 153, 0.25);
        }
        .clay-cat-tile.tile-pink .clay-cat-tile-icon {
          background: rgba(236, 72, 153, 0.1);
          color: #db2777;
        }
        .clay-cat-tile.tile-pink .clay-cat-tile-pill {
          background: rgba(236, 72, 153, 0.12);
          color: #db2777;
          border: 1px solid rgba(236, 72, 153, 0.25);
        }

        .clay-cat-tile-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .clay-cat-tile-icon {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .clay-cat-tile-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 9999px;
        }

        .clay-cat-tile-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
        }

        .clay-cat-tile-label {
          font-size: 13px;
          font-weight: 700;
          color: #334155;
          margin-top: 2px;
        }

        .clay-cat-tile-desc {
          font-size: 10px;
          color: #64748b;
          margin-top: 2px;
        }

        .clay-cat-segmented-wrap {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .clay-cat-segmented-label {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .clay-cat-segmented-track {
          display: flex;
          height: 12px;
          background: #e2eaf4;
          border-radius: 9999px;
          padding: 2px;
          gap: 3px;
          box-shadow: 
            inset 2px 2px 4px rgba(162, 178, 201, 0.35),
            inset -1px -1px 2px rgba(255, 255, 255, 0.9);
          overflow: hidden;
        }

        .clay-cat-segment {
          height: 100%;
          border-radius: 6px;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .clay-cat-list {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .clay-cat-list-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 10px 14px;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px solid #e2eaf4;
        }

        .clay-cat-list-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .clay-cat-indicator-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .clay-cat-name {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }

        .clay-cat-list-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-cat-mini-trough {
          width: 110px;
        }

        .clay-cat-count-val {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          min-width: 24px;
          text-align: right;
        }

        .clay-cat-share-val {
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          min-width: 44px;
          text-align: right;
        }

        .fill-emerald {
          background: linear-gradient(90deg, #059669 0%, #10b981 100%);
        }
        .fill-purple {
          background: linear-gradient(90deg, #7c3aed 0%, #a855f7 100%);
        }
        .fill-pink {
          background: linear-gradient(90deg, #db2777 0%, #ec4899 100%);
        }

        /* ── ROW 3: Event Registrations & Most Popular Event ── */
        .clay-mid-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 22px;
        }

        .clay-event-header-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .clay-mini-switcher {
          display: flex;
          background: #e2eaf4;
          padding: 3px;
          border-radius: 12px;
          gap: 3px;
          box-shadow: inset 1px 1px 3px rgba(162, 178, 201, 0.4);
        }

        .clay-mini-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 9px;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clay-mini-btn.is-active {
          background: #ffffff;
          color: #2563eb;
          box-shadow: 2px 2px 6px rgba(162, 178, 201, 0.35);
        }

        .clay-event-filter-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .clay-filter-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .clay-filter-chip:hover {
          background: #e2e8f0;
          color: #1e293b;
        }

        .clay-filter-chip.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
        }

        .clay-filter-chip.active.tech {
          background: #2563eb;
          border-color: #2563eb;
        }

        .clay-filter-chip.active.cult {
          background: #f59e0b;
          border-color: #f59e0b;
          box-shadow: 0 4px 10px rgba(245, 158, 11, 0.25);
        }

        .clay-filter-chip.active.creat {
          background: #ec4899;
          border-color: #ec4899;
          box-shadow: 0 4px 10px rgba(236, 72, 153, 0.25);
        }

        .clay-ranked-bars-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 380px;
          overflow-y: auto;
          padding-right: 6px;
        }

        .clay-ranked-bars-list::-webkit-scrollbar {
          width: 5px;
        }

        .clay-ranked-bars-list::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        .clay-ranked-bar-row {
          display: grid;
          grid-template-columns: 200px 1fr 65px;
          align-items: center;
          gap: 14px;
          padding: 8px 12px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #ffffff;
          box-shadow: 2px 3px 8px rgba(162, 178, 201, 0.15);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .clay-ranked-bar-row:hover {
          transform: translateX(2px);
          box-shadow: 3px 4px 12px rgba(162, 178, 201, 0.25);
          background: #ffffff;
        }

        .clay-ranked-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .clay-rank-badge {
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          min-width: 24px;
          text-align: center;
        }

        .clay-rank-badge.rank-1,
        .clay-rank-badge.rank-2,
        .clay-rank-badge.rank-3 {
          font-size: 13px;
        }

        .clay-ranked-name {
          font-size: 12px;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
        }

        .clay-cat-tag {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }

        .cat-technical {
          background: rgba(37, 99, 235, 0.12);
          color: #2563eb;
        }

        .cat-cultural {
          background: rgba(245, 158, 11, 0.12);
          color: #d97706;
        }

        .cat-creative {
          background: rgba(236, 72, 153, 0.12);
          color: #db2777;
        }

        .clay-ranked-bar-track {
          height: 9px;
          background: #e2eaf4;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 1px 1px 2px rgba(162, 178, 201, 0.35);
        }

        .clay-ranked-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .clay-ranked-bar-fill.fill-technical {
          background: linear-gradient(90deg, #2563eb, #3b82f6);
        }

        .clay-ranked-bar-fill.fill-cultural {
          background: linear-gradient(90deg, #d97706, #f59e0b);
        }

        .clay-ranked-bar-fill.fill-creative {
          background: linear-gradient(90deg, #db2777, #ec4899);
        }

        .clay-ranked-counts {
          display: flex;
          align-items: baseline;
          justify-content: flex-end;
          gap: 6px;
        }

        .clay-count-val {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-count-pct {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
        }

        .clay-chart-tooltip {
          background: #ffffff;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .clay-tt-name {
          font-size: 12px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .clay-tt-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clay-tt-count {
          font-size: 11px;
          font-weight: 700;
          color: #2563eb;
        }

        .clay-barchart-container {
          width: 100%;
          min-height: 260px;
        }

        /* Popular Event Card */
        .clay-popular-card {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .clay-img-frame {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 18px;
          overflow: hidden;
          background: #e2eaf4;
          border: 2px solid #ffffff;
          box-shadow: 
            5px 6px 14px rgba(162, 178, 201, 0.25),
            inset 2px 2px 4px rgba(162, 178, 201, 0.2);
          margin-bottom: 18px;
        }

        .clay-event-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .clay-img-overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(15, 23, 42, 0.4) 100%);
          pointer-events: none;
        }

        .clay-popular-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .clay-popular-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #d97706;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .clay-sparkle-icon {
          color: #d97706;
        }

        .clay-popular-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .clay-popular-name {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 
            3px 3px 8px rgba(162, 178, 201, 0.3),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
          transition: transform 0.2s ease;
        }

        .clay-arrow-btn:hover {
          transform: scale(1.08);
          background: #e2eaf4;
        }

        .clay-popular-stats {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .clay-popular-divider {
          width: 100%;
          height: 1px;
          background: #e2eaf4;
          margin-top: auto;
          margin-bottom: 12px;
        }

        .clay-popular-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
        }

        .clay-popular-foot-lbl {
          color: #94a3b8;
          font-weight: 600;
        }

        .clay-popular-foot-val {
          color: #0f172a;
          font-weight: 800;
        }

        /* ── ROW 3: Tables Grid ── */
        .clay-tables-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .clay-table-wrap {
          overflow-x: auto;
          overflow-y: auto;
          max-height: 430px;
          padding-right: 4px;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
          scroll-behavior: smooth;
        }

        .clay-table-wrap::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .clay-table-wrap::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 999px;
        }

        .clay-table-wrap::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 999px;
        }

        .clay-table-wrap::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .clay-data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .clay-data-table th {
          position: sticky;
          top: 0;
          background: #ffffff;
          z-index: 2;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #64748b;
          text-transform: uppercase;
          padding: 8px 12px 14px 12px;
          border-bottom: 1.5px solid #e2e8f0;
          box-shadow: 0 1px 0 #e2e8f0;
          text-align: left;
        }

        .clay-data-table td {
          padding: 14px 12px;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: middle;
        }

        .clay-entity-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .clay-initial-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: #e2eaf4;
          border: 1.5px solid #ffffff;
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          box-shadow: 2px 2px 6px rgba(162, 178, 201, 0.25);
          flex-shrink: 0;
        }

        .clay-entity-name {
          color: #0f172a;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 240px;
        }

        .clay-count-val {
          font-weight: 700;
          color: #0f172a;
        }

        .clay-share-col {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        .clay-bar-trough {
          width: 64px;
          height: 6px;
          background: #e2eaf4;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 1px 1px 2px rgba(162, 178, 201, 0.3);
        }

        .clay-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fill-cyan {
          background: #2563eb;
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.4);
        }

        .fill-amber {
          background: #f59e0b;
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
        }

        .clay-share-text {
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          min-width: 44px;
          text-align: right;
        }

        /* ── ROW 4: Registration Trend & Gender Demographics Grid ── */
        .clay-bottom-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 22px;
        }

        .clay-trend-chart-box {
          width: 100%;
          min-height: 200px;
        }

        /* ── Gender Demographics Card Styles ── */
        .clay-gender-card {
          display: flex;
          flex-direction: column;
        }

        .clay-gender-split-wrap {
          margin-top: 14px;
          margin-bottom: 18px;
          padding: 12px 14px;
          border-radius: 16px;
          background: #eef3f9;
          box-shadow: inset 2px 2px 5px rgba(162, 178, 201, 0.3), inset -2px -2px 5px rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        .clay-gender-split-bar {
          height: 12px;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          background: #e2eaf4;
          box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
        }

        .clay-split-seg.seg-male {
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-split-seg.seg-female {
          background: linear-gradient(90deg, #ec4899 0%, #db2777 100%);
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-split-seg.seg-unspecified,
        .clay-split-seg.seg-other {
          background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-gender-split-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-size: 0.76rem;
          font-weight: 700;
        }

        .split-lbl-male { color: #2563eb; }
        .split-lbl-female { color: #db2777; }
        .split-lbl-unspecified,
        .split-lbl-other { color: #d97706; }

        .clay-gender-bars-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .clay-gender-bar-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.55);
          box-shadow: 3px 4px 10px rgba(162, 178, 201, 0.15), inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .clay-gender-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 105px;
        }

        .clay-gender-icon-orb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        .clay-gender-icon-orb.male {
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          box-shadow: 2px 3px 6px rgba(37, 99, 235, 0.15);
        }

        .clay-gender-icon-orb.female {
          background: #fdf2f8;
          color: #db2777;
          border: 1px solid #fbcfe8;
          box-shadow: 2px 3px 6px rgba(219, 39, 119, 0.15);
        }

        .clay-gender-icon-orb.unspecified,
        .clay-gender-icon-orb.other {
          background: #fffbeb;
          color: #d97706;
          border: 1px solid #fde68a;
          box-shadow: 2px 3px 6px rgba(217, 119, 6, 0.15);
        }

        .clay-gender-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .clay-gender-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1e293b;
        }

        .clay-gender-pct-tag {
          font-size: 0.7rem;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 6px;
          display: inline-block;
          width: fit-content;
        }

        .clay-gender-pct-tag.male {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .clay-gender-pct-tag.female {
          background: #fce7f3;
          color: #be185d;
        }

        .clay-gender-pct-tag.unspecified,
        .clay-gender-pct-tag.other {
          background: #fef3c7;
          color: #b45309;
        }

        .clay-gender-track {
          flex: 1;
          height: 10px;
          border-radius: 10px;
          background: #e2eaf4;
          overflow: hidden;
          box-shadow: inset 1px 1px 3px rgba(162, 178, 201, 0.4);
        }

        .clay-gender-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-gender-fill.fill-male {
          background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
        }

        .clay-gender-fill.fill-female {
          background: linear-gradient(90deg, #ec4899 0%, #be185d 100%);
          box-shadow: 0 2px 6px rgba(219, 39, 119, 0.3);
        }

        .clay-gender-fill.fill-unspecified,
        .clay-gender-fill.fill-other {
          background: linear-gradient(90deg, #f59e0b 0%, #b45309 100%);
          box-shadow: 0 2px 6px rgba(217, 119, 6, 0.3);
        }

        .clay-gender-count-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          min-width: 55px;
        }

        .clay-gender-count-val {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-gender-count-lbl {
          font-size: 0.65rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
        }

        /* ── Footer ── */
        .clay-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 4px 6px;
          font-size: 12px;
          color: #64748b;
          border-top: 1.5px solid #cbd5e1;
          margin-top: 8px;
        }

        .clay-foot-left {
          color: #64748b;
          font-weight: 600;
        }

        .clay-foot-right {
          color: #64748b;
          font-weight: 600;
        }

        /* Loading Screen */
        .clay-loading-screen {
          min-height: 100vh;
          background: #e6ecf5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .clay-spinner-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px;
          border-radius: 28px;
          background: #ffffff;
          box-shadow: 
            10px 14px 28px rgba(162, 178, 201, 0.35),
            -6px -6px 16px rgba(255, 255, 255, 0.9);
        }

        .clay-spinner {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 4px solid #e2eaf4;
          border-top-color: #2563eb;
          animation: spin 0.8s linear infinite;
        }

        .clay-loading-text {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }

        /* ── Responsiveness ── */
        @media (max-width: 1080px) {
          .clay-kpi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .clay-categories-grid {
            grid-template-columns: 1fr;
          }
          .clay-mid-grid {
            grid-template-columns: 1fr;
          }
          .clay-tables-grid {
            grid-template-columns: 1fr;
          }
          .clay-bottom-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .clay-nav {
            padding: 10px 14px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            box-sizing: border-box;
          }
          .clay-nav-left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
          }
          .clay-nav-divider {
            display: none;
          }
          .clay-nav-uni-title {
            font-size: 11px;
            letter-spacing: 0.04em;
          }
          .clay-nav-uni-subtitle {
            font-size: 9px;
          }
          .clay-nav-tech-badge {
            padding: 3px 8px 3px 4px;
          }
          .clay-nav-tech-img {
            width: 24px;
            height: 24px;
          }
          .clay-nav-brand {
            font-size: 12px;
          }
          /* Hide center tabs and right actions from top nav on mobile (they are now in the bottom bar) */
          .clay-nav-center {
            display: none !important;
          }
          .clay-nav-right {
            display: none !important;
          }

          /* Docked Mobile Bottom Navigation Bar */
          .clay-mobile-bottom-bar {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.94);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: 1.5px solid rgba(255, 255, 255, 0.9);
            box-shadow: 
              0 -8px 25px rgba(15, 23, 42, 0.08),
              0 -1px 3px rgba(162, 178, 201, 0.2);
            padding: 6px 12px calc(6px + env(safe-area-inset-bottom, 8px)) 12px;
            box-sizing: border-box;
          }

          .clay-mob-nav-inner {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 4px;
            max-width: 440px;
            margin: 0 auto;
          }

          .clay-mob-nav-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            padding: 6px 4px;
            border-radius: 12px;
            background: transparent;
            border: none;
            color: #64748b;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
          }

          .clay-mob-nav-item:active {
            transform: scale(0.94);
          }

          .clay-mob-nav-item.is-active {
            color: #2563eb;
          }

          .clay-mob-nav-item.is-active .clay-mob-icon-wrap {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #ffffff;
            box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
          }

          .clay-mob-icon-wrap {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 30px;
            border-radius: 14px;
            transition: all 0.2s ease;
          }

          .clay-mob-dot {
            position: absolute;
            top: 3px;
            right: 5px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #2563eb;
            box-shadow: 0 0 6px #2563eb;
          }

          .clay-mob-avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: #ffffff;
            font-size: 10px;
            font-weight: 800;
            box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
          }

          .clay-mob-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: -0.01em;
            white-space: nowrap;
          }

          .clay-mob-nav-item.is-logout {
            color: #dc2626;
          }

          .clay-mob-nav-item.is-logout .text-red {
            color: #dc2626;
          }

          .clay-main-container {
            padding: 16px 14px calc(90px + env(safe-area-inset-bottom, 12px)) 14px;
            box-sizing: border-box;
          }
          .clay-hero-heading {
            font-size: 26px;
            line-height: 1.15;
          }
          .clay-hero-actions {
            width: 100%;
            display: flex;
            gap: 10px;
          }
          .clay-btn-refresh,
          .clay-btn-export {
            flex: 1;
            justify-content: center;
            font-size: 12px;
            padding: 10px 12px;
          }
          .clay-kpi-grid {
            grid-template-columns: 1fr;
          }
          .clay-cat-tiles-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AnalyticsView;
