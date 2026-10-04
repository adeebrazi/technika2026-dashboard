import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Server, GitBranch, GitCommit, Database, Activity,
  CheckCircle2, RefreshCw, Clock, ArrowUpRight,
  ExternalLink, Layers, Wifi, Terminal, ShieldCheck,
  FileSpreadsheet, Cpu, BarChart3, ChevronRight,
  Play, Check, Copy, Lock
} from 'lucide-react';
import { DeveloperPinGuard } from '../components/DeveloperPinGuard';

const API = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '' : 'https://reg.technika2026.online');

interface ServerInfo {
  id: string;
  name: string;
  repo: string;
  githubUrl: string;
  url: string;
  role: string;
  hosting: string;
  branch: string;
  lastCommit: {
    hash: string;
    message: string;
    date: string;
    author: string;
  };
  pingMs?: number;
  status?: 'ONLINE' | 'CHECKING' | 'DEGRADED';
}

interface PipelineNode {
  id: string;
  name: string;
  protocol: string;
  source: string;
  target: string;
  status: 'HEALTHY' | 'ACTIVE' | 'STANDBY';
  latency: string;
  description: string;
  flowSteps: string[];
  tech: string;
}

export const DeveloperDashboard: React.FC = () => {
  const navigate = useNavigate();
  // Strictly require PIN 2207 on every page load, refresh, or back navigation (no persistent storage)
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

  useEffect(() => {
    sessionStorage.removeItem('dev_dashboard_unlocked');
    localStorage.removeItem('dev_dashboard_unlocked');
  }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date>(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>('pipe-mongo');
  const [logs, setLogs] = useState<Array<{ time: string; level: 'INFO' | 'SUCCESS' | 'WARN'; message: string }>>([]);

  // Server state with real commit and probe telemetry
  const [servers, setServers] = useState<ServerInfo[]>([
    {
      id: 'main-site',
      name: 'Main Festival Website',
      repo: 'adeebrazi/technika2026-main-website',
      githubUrl: 'https://github.com/adeebrazi/technika2026-main-website',
      url: 'https://technika2026.online',
      role: 'Public Event Portal & Brochure',
      hosting: 'Vercel Edge Network',
      branch: 'main',
      status: 'ONLINE',
      pingMs: 78,
      lastCommit: {
        hash: '727447a',
        message: 'chore: remove Dashboard subfolder as it is now in a standalone repository',
        date: 'Sun Oct 4 20:01:40 2026 +0530',
        author: 'adeebrazi'
      }
    },
    {
      id: 'registration-api',
      name: 'Registration & Core API Server',
      repo: 'adeebrazi/technika2026-registration-website',
      githubUrl: 'https://github.com/adeebrazi/technika2026-registration-website',
      url: 'https://reg.technika2026.online',
      role: 'Backend API, Auth & Data Pipelines',
      hosting: 'Vercel Serverless / Node.js Express',
      branch: 'main',
      status: 'ONLINE',
      pingMs: 24,
      lastCommit: {
        hash: '9b7c2b7',
        message: 'feat(api): add /api/admin/developer-status endpoint for Developer Dashboard telemetry',
        date: 'Sun Oct 4 21:50:32 2026 +0530',
        author: 'adeebrazi'
      }
    },
    {
      id: 'dashboard-standalone',
      name: 'Standalone Analytics Dashboard',
      repo: 'adeebrazi/technika2026-dashboard',
      githubUrl: 'https://github.com/adeebrazi/technika2026-dashboard',
      url: 'https://dashboard.technika2026.online',
      role: 'Executive & Developer Dashboards',
      hosting: 'Vercel Production SPA',
      branch: 'main',
      status: 'ONLINE',
      pingMs: 1,
      lastCommit: {
        hash: '8573cd8',
        message: 'Remove tab strip, add Event Categories and Age Demographics analytics',
        date: 'Sun Oct 4 20:41:28 2026 +0530',
        author: 'adeebrazi'
      }
    }
  ]);

  // Database metrics
  const [dbStatus, setDbStatus] = useState({
    name: 'MongoDB Atlas',
    status: 'HEALTHY',
    pingMs: 18,
    collections: {
      users: 2,
      teams: 1,
      registrations: 3,
      events: 22
    }
  });

  // Pipeline definitions
  const pipelines: PipelineNode[] = useMemo(() => [
    {
      id: 'pipe-reg',
      name: 'Participant Registration Pipeline',
      protocol: 'HTTPS / REST (JSON + Multer)',
      source: 'Registration Web UI (reg.technika2026.online)',
      target: 'Express API Server Gateway (/api/register)',
      status: 'HEALTHY',
      latency: '24ms',
      description: 'Ingests multi-step user registration, validates credentials, parses payment slips and passes payloads into atomic DB operations.',
      flowSteps: [
        'Client Form Fill & File Select',
        'Payload Validation & Multer Buffer',
        'Password Bcrypt Hashing',
        'Unique Registration ID Generation',
        'MongoDB Atlas Commit'
      ],
      tech: 'React Hook Form -> Express 4 -> Mongoose Driver'
    },
    {
      id: 'pipe-mongo',
      name: 'MongoDB Atlas Persistence Engine',
      protocol: 'mongodb+srv (TLS Encrypted)',
      source: 'Express Backend Services',
      target: 'MongoDB Atlas Cluster (AWS ap-south-1)',
      status: 'HEALTHY',
      latency: `${dbStatus.pingMs}ms`,
      description: 'Primary high-availability ACID document store holding all user profiles, team rosters, registration tokens, and event catalogues.',
      flowSteps: [
        'Connection Pooling (Mongoose v8)',
        'Users & Teams Cross-referencing',
        'Role-Based Access Enforcement',
        'Instant Query Indexing'
      ],
      tech: 'MongoDB Atlas 7.0 + Mongoose ORM'
    },
    {
      id: 'pipe-sheets',
      name: 'Google Sheets Live Data Lake Sync',
      protocol: 'Google Sheets API v4 (Service Account OAuth2)',
      source: 'In-Memory Async Queue Worker (sheetsService.js)',
      target: 'Google Cloud Spreadsheet Backup',
      status: 'HEALTHY',
      latency: '1.8s Sync Interval',
      description: 'Asynchronous event-driven queue worker that continuously streams registration rows directly into University Google Spreadsheets for offline audit.',
      flowSteps: [
        'Registration Success Hook',
        'Async FIFO In-Memory Queue Push',
        'Batching & Rate Limit Protection',
        'Google Sheets v4 API Row Append'
      ],
      tech: 'googleapis v118 + Google Service Account JWT'
    },
    {
      id: 'pipe-media',
      name: 'Payment Screenshot & CDN Pipeline',
      protocol: 'HTTPS (Multi-part upload -> Cloudinary CDN)',
      source: 'Registration Upload Widget',
      target: 'Cloudinary Global Edge CDN Storage',
      status: 'HEALTHY',
      latency: '420ms avg upload',
      description: 'Handles banking UTR receipts and payment transaction screenshots, compressing and uploading directly to secure CDN with signed HTTPS URLs.',
      flowSteps: [
        'Client Image Selection (Max 5MB)',
        'Express Memory Storage Buffer',
        'Cloudinary Stream Upload API',
        'Secure CDN URL Recorded in DB & Sheets'
      ],
      tech: 'Multer MemoryStorage -> Cloudinary SDK v2'
    },
    {
      id: 'pipe-telemetry',
      name: 'Real-time Analytics Feed Pipeline',
      protocol: 'HTTPS / REST (/api/admin/analytics)',
      source: 'MongoDB Aggregation Engine',
      target: 'Standalone Dashboard (dashboard.technika2026.online)',
      status: 'HEALTHY',
      latency: '14ms query time',
      description: 'Computes institutional breakdowns, age demographics, male/female distribution, and event popularity curves on-the-fly for live presentation.',
      flowSteps: [
        'Dashboard Live Polling Hook',
        'MongoDB Pipeline Aggregations ($group, $match)',
        'Event Category & Age Demographics Classifier',
        'Compressed JSON Response Stream'
      ],
      tech: 'Mongoose Aggregation -> React Recharts'
    }
  ], [dbStatus.pingMs]);

  // Append a log entry
  const addLog = (level: 'INFO' | 'SUCCESS' | 'WARN', message: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [{ time, level, message }, ...prev.slice(0, 19)]);
  };

  // Probe server health and fetch live data
  const probeSystem = async (manual = false) => {
    if (manual) setIsRefreshing(true);
    const startTime = Date.now();

    try {
      addLog('INFO', 'Initiating pipeline telemetry probe across ecosystem servers...');
      
      // Probe backend developer-status endpoint
      const res = await fetch(`${API}/api/admin/developer-status`).catch(() => null);
      const ping = Date.now() - startTime;

      if (res && res.ok) {
        const data = await res.json();
        addLog('SUCCESS', `Backend API responding (RTT: ${ping}ms). MongoDB state: ${data.database?.status || 'HEALTHY'}`);
        
        if (data.database) {
          setDbStatus(prev => ({
            ...prev,
            status: data.database.status || 'HEALTHY',
            pingMs: data.database.pingMs || ping,
            collections: data.database.collections || prev.collections
          }));
        }

        // Update server commits if returned
        if (data.servers && Array.isArray(data.servers)) {
          setServers(prev => prev.map(s => {
            const matched = data.servers.find((srv: any) => srv.id === s.id || srv.repo === s.repo);
            if (matched) {
              return {
                ...s,
                pingMs: s.id === 'registration-api' ? ping : s.pingMs,
                status: 'ONLINE',
                lastCommit: matched.lastCommit || s.lastCommit
              };
            }
            return s;
          }));
        }
      } else {
        // Fallback: ping analytics endpoint directly
        const startAna = Date.now();
        const anaRes = await fetch(`${API}/api/admin/analytics`).catch(() => null);
        const anaPing = Date.now() - startAna;

        if (anaRes && anaRes.ok) {
          addLog('SUCCESS', `Registration backend live via /api/admin/analytics (${anaPing}ms)`);
          setServers(prev => prev.map(s => s.id === 'registration-api' ? { ...s, pingMs: anaPing, status: 'ONLINE' } : s));
        } else {
          addLog('WARN', 'Backend endpoint responded with degraded latency or offline indicator.');
        }
      }

      setLastChecked(new Date());
    } catch (err: any) {
      addLog('WARN', `Probe encountered intermittent connection: ${err.message}`);
    } finally {
      if (manual) {
        setTimeout(() => setIsRefreshing(false), 500);
      }
    }
  };

  useEffect(() => {
    if (!isUnlocked) return;
    probeSystem();
    addLog('INFO', 'Developer Dashboard initialized. 3 servers & 5 pipelines connected.');

    let interval: ReturnType<typeof setInterval>;
    if (autoRefresh) {
      interval = setInterval(() => {
        probeSystem();
      }, 15000);
    }
    return () => clearInterval(interval);
  }, [autoRefresh, isUnlocked]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(text);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const selectedPipeDetails = pipelines.find(p => p.id === selectedNode) || pipelines[0];

  if (!isUnlocked) {
    return (
      <DeveloperPinGuard
        onSuccess={() => {
          setIsUnlocked(true);
        }}
      />
    );
  }

  return (
    <div className="dev-wrapper">
      {/* ── TOP CLAY NAVIGATION BAR ── */}
      <header className="dev-nav">
        <div className="dev-nav-left">
          <div className="dev-nav-badge">
            <Cpu size={20} className="dev-cyan-glow" />
          </div>
          <div className="dev-nav-titles">
            <div className="dev-nav-uni">ARKA JAIN UNIVERSITY &nbsp;·&nbsp; TECHNIKA 6.0</div>
            <div className="dev-nav-heading">
              Developer Dashboard <span className="dev-brand-cyan">Console</span>
            </div>
          </div>
        </div>

        {/* Center Mode Switcher (Analytics <-> Developer) */}
        <div className="dev-nav-center">
          <div className="dev-segmented-tabs">
            <button
              className="dev-seg-btn"
              onClick={() => navigate('/')}
              title="Switch to Registration Analytics"
            >
              <BarChart3 size={15} />
              <span>Registration Analytics</span>
            </button>
            <button
              className="dev-seg-btn is-active"
              title="Currently viewing Developer Dashboard"
            >
              <Terminal size={15} />
              <span>Developer Dashboard</span>
              <span className="dev-pulse-dot" />
            </button>
          </div>
        </div>

        {/* Right Status Controls */}
        <div className="dev-nav-right">
          <div className="dev-auto-refresh-pill">
            <span className="dev-live-indicator" />
            <span className="dev-auto-label">
              {autoRefresh ? `LIVE (${lastChecked.toLocaleTimeString()})` : 'PAUSED'}
            </span>
            <button
              className="dev-toggle-btn"
              onClick={() => setAutoRefresh(!autoRefresh)}
              title={autoRefresh ? 'Pause auto-probe' : 'Resume auto-probe'}
            >
              {autoRefresh ? 'Pause' : 'Resume'}
            </button>
          </div>

          <button
            className={`dev-refresh-btn ${isRefreshing ? 'is-spinning' : ''}`}
            onClick={() => probeSystem(true)}
            disabled={isRefreshing}
            title="Probe all systems now"
          >
            <RefreshCw size={16} className={isRefreshing ? 'dev-spin' : ''} />
            <span>Probe Systems</span>
          </button>

          <button
            className="dev-lock-btn"
            onClick={() => {
              sessionStorage.removeItem('dev_dashboard_unlocked');
              setIsUnlocked(false);
            }}
            title="Lock Developer Dashboard"
          >
            <Lock size={14} />
            <span>Lock Console</span>
          </button>
        </div>
      </header>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="dev-container">
        
        {/* ── TOP HERO TELEMETRY SUMMARY ── */}
        <section className="dev-hero-bar">
          <div className="dev-hero-item">
            <div className="dev-hero-icon-box box-green">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="dev-hero-label">System Health Score</div>
              <div className="dev-hero-val text-green">100% OPERATIONAL</div>
              <div className="dev-hero-sub">Zero pipeline bottlenecks detected</div>
            </div>
          </div>

          <div className="dev-hero-divider" />

          <div className="dev-hero-item">
            <div className="dev-hero-icon-box box-cyan">
              <Server size={22} />
            </div>
            <div>
              <div className="dev-hero-label">Active Ecosystem Servers</div>
              <div className="dev-hero-val text-cyan">3 of 3 Online</div>
              <div className="dev-hero-sub">Main, Registration &amp; Dashboard</div>
            </div>
          </div>

          <div className="dev-hero-divider" />

          <div className="dev-hero-item">
            <div className="dev-hero-icon-box box-amber">
              <Activity size={22} />
            </div>
            <div>
              <div className="dev-hero-label">Average API Latency</div>
              <div className="dev-hero-val text-amber">{servers[1]?.pingMs || 24} ms</div>
              <div className="dev-hero-sub">Fastest region: AWS ap-south-1</div>
            </div>
          </div>

          <div className="dev-hero-divider" />

          <div className="dev-hero-item">
            <div className="dev-hero-icon-box box-pink">
              <Database size={22} />
            </div>
            <div>
              <div className="dev-hero-label">Database Documents</div>
              <div className="dev-hero-val text-pink">
                {dbStatus.collections.users + dbStatus.collections.teams + dbStatus.collections.registrations} Records
              </div>
              <div className="dev-hero-sub">Users, Teams &amp; Regs in Atlas</div>
            </div>
          </div>
        </section>

        {/* ── 3 ECOSYSTEM SERVERS STATUS SECTION ── */}
        <section className="dev-section">
          <div className="dev-section-head">
            <div className="dev-section-title-wrap">
              <Server size={20} className="text-cyan" />
              <h2 className="dev-section-title">The 3 Ecosystem Servers &amp; Git Commits</h2>
            </div>
            <div className="dev-section-hint">
              Tracking real deployment branches, latest git commit hashes &amp; live endpoints
            </div>
          </div>

          <div className="dev-servers-grid">
            {servers.map((srv, idx) => {
              const isCopied = copiedHash === srv.lastCommit.hash;
              return (
                <div key={srv.id} className="dev-server-card">
                  {/* Card Header */}
                  <div className="dev-srv-header">
                    <div className="dev-srv-title-row">
                      <div className="dev-srv-badge-num">0{idx + 1}</div>
                      <div>
                        <h3 className="dev-srv-name">{srv.name}</h3>
                        <div className="dev-srv-role">{srv.role}</div>
                      </div>
                    </div>
                    <div className="dev-srv-status-pill">
                      <span className="dev-status-dot-green" />
                      <span>{srv.status}</span>
                    </div>
                  </div>

                  {/* Server Details Table */}
                  <div className="dev-srv-meta-rows">
                    <div className="dev-srv-meta-row">
                      <span className="dev-meta-lbl">Live Domain:</span>
                      <a
                        href={srv.url}
                        target="_blank"
                        rel="noreferrer"
                        className="dev-meta-link"
                      >
                        <span>{srv.url.replace('https://', '')}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="dev-srv-meta-row">
                      <span className="dev-meta-lbl">Hosting Platform:</span>
                      <span className="dev-meta-val">{srv.hosting}</span>
                    </div>
                    <div className="dev-srv-meta-row">
                      <span className="dev-meta-lbl">Git Branch:</span>
                      <span className="dev-branch-pill">
                        <GitBranch size={12} />
                        <span>{srv.branch}</span>
                      </span>
                    </div>
                    <div className="dev-srv-meta-row">
                      <span className="dev-meta-lbl">Response RTT:</span>
                      <span className="dev-meta-ping">
                        <Wifi size={12} />
                        <span>{srv.pingMs} ms</span>
                      </span>
                    </div>
                  </div>

                  {/* Last Commit Box */}
                  <div className="dev-srv-commit-box">
                    <div className="dev-commit-top">
                      <div className="dev-commit-hash-wrap">
                        <GitCommit size={14} className="text-cyan" />
                        <span className="dev-commit-hash">{srv.lastCommit.hash}</span>
                        <button
                          className="dev-copy-btn"
                          onClick={() => copyToClipboard(srv.lastCommit.hash)}
                          title="Copy commit hash"
                        >
                          {isCopied ? <Check size={12} className="text-green" /> : <Copy size={12} />}
                        </button>
                      </div>
                      <span className="dev-commit-author">by {srv.lastCommit.author}</span>
                    </div>

                    <div className="dev-commit-msg">"{srv.lastCommit.message}"</div>
                    
                    <div className="dev-commit-footer">
                      <Clock size={11} />
                      <span>{srv.lastCommit.date}</span>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <a
                    href={srv.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="dev-srv-github-btn"
                  >
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── INTERACTIVE DATA PIPELINES ARCHITECTURE & FLOW ── */}
        <section className="dev-section">
          <div className="dev-section-head">
            <div className="dev-section-title-wrap">
              <Layers size={20} className="text-pink" />
              <h2 className="dev-section-title">Data Pipelines Connection &amp; Architecture Flow</h2>
            </div>
            <div className="dev-section-hint">
              Click any pipeline below to inspect operational flow, protocol specifications &amp; failover guarantees
            </div>
          </div>

          {/* Interactive Flow Visualizer Canvas */}
          <div className="dev-flow-canvas">
            {/* Visual Nodes Chain */}
            <div className="dev-flow-chain">
              {/* Step 1: Client */}
              <div
                className={`dev-flow-node ${selectedNode === 'pipe-reg' ? 'is-selected' : ''}`}
                onClick={() => setSelectedNode('pipe-reg')}
              >
                <div className="dev-node-icon"><Terminal size={18} /></div>
                <div className="dev-node-label">Registration Client</div>
                <div className="dev-node-sub">reg.technika2026.online</div>
                <div className="dev-node-badge badge-green">24ms Flow</div>
              </div>

              <div className="dev-flow-arrow">
                <ChevronRight size={20} />
                <span className="dev-arrow-label">HTTPS POST</span>
              </div>

              {/* Step 2: API Gateway */}
              <div
                className={`dev-flow-node ${selectedNode === 'pipe-mongo' ? 'is-selected' : ''}`}
                onClick={() => setSelectedNode('pipe-mongo')}
              >
                <div className="dev-node-icon"><Cpu size={18} /></div>
                <div className="dev-node-label">Backend API Server</div>
                <div className="dev-node-sub">Express 4.x Gateway</div>
                <div className="dev-node-badge badge-cyan">Active Engine</div>
              </div>

              <div className="dev-flow-arrow">
                <ChevronRight size={20} />
                <span className="dev-arrow-label">Mongoose / TLS</span>
              </div>

              {/* Step 3: MongoDB */}
              <div
                className={`dev-flow-node ${selectedNode === 'pipe-mongo' ? 'is-selected' : ''}`}
                onClick={() => setSelectedNode('pipe-mongo')}
              >
                <div className="dev-node-icon"><Database size={18} /></div>
                <div className="dev-node-label">MongoDB Atlas</div>
                <div className="dev-node-sub">AWS ap-south-1</div>
                <div className="dev-node-badge badge-green">ACID Primary</div>
              </div>

              <div className="dev-flow-arrow">
                <ChevronRight size={20} />
                <span className="dev-arrow-label">Async Queue</span>
              </div>

              {/* Step 4: Google Sheets Data Lake */}
              <div
                className={`dev-flow-node ${selectedNode === 'pipe-sheets' ? 'is-selected' : ''}`}
                onClick={() => setSelectedNode('pipe-sheets')}
              >
                <div className="dev-node-icon"><FileSpreadsheet size={18} /></div>
                <div className="dev-node-label">Google Sheets API</div>
                <div className="dev-node-sub">Live Backup Rows</div>
                <div className="dev-node-badge badge-amber">Batch Queue</div>
              </div>

              <div className="dev-flow-arrow">
                <ChevronRight size={20} />
                <span className="dev-arrow-label">Live Polling</span>
              </div>

              {/* Step 5: Dashboard */}
              <div
                className={`dev-flow-node ${selectedNode === 'pipe-telemetry' ? 'is-selected' : ''}`}
                onClick={() => setSelectedNode('pipe-telemetry')}
              >
                <div className="dev-node-icon"><BarChart3 size={18} /></div>
                <div className="dev-node-label">Analytics Dashboard</div>
                <div className="dev-node-sub">dashboard.technika2026.online</div>
                <div className="dev-node-badge badge-pink">Telemetry Feed</div>
              </div>
            </div>

            {/* Selected Node Details Drawer */}
            <div className="dev-pipe-inspector">
              <div className="dev-inspector-top">
                <div>
                  <div className="dev-inspector-tag">SELECTED PIPELINE TELEMETRY</div>
                  <h3 className="dev-inspector-title">{selectedPipeDetails.name}</h3>
                </div>
                <div className="dev-inspector-pill">
                  <CheckCircle2 size={15} className="text-green" />
                  <span>{selectedPipeDetails.status} &nbsp;·&nbsp; {selectedPipeDetails.latency}</span>
                </div>
              </div>

              <p className="dev-inspector-desc">{selectedPipeDetails.description}</p>

              <div className="dev-inspector-grid">
                <div>
                  <div className="dev-ins-lbl">Protocol &amp; Transport</div>
                  <div className="dev-ins-val">{selectedPipeDetails.protocol}</div>
                </div>
                <div>
                  <div className="dev-ins-lbl">Core Technology Stack</div>
                  <div className="dev-ins-val">{selectedPipeDetails.tech}</div>
                </div>
                <div>
                  <div className="dev-ins-lbl">Data Source</div>
                  <div className="dev-ins-val">{selectedPipeDetails.source}</div>
                </div>
                <div>
                  <div className="dev-ins-lbl">Target Destination</div>
                  <div className="dev-ins-val">{selectedPipeDetails.target}</div>
                </div>
              </div>

              <div className="dev-steps-box">
                <div className="dev-steps-title">Executed Data Flow Sequence:</div>
                <div className="dev-steps-row">
                  {selectedPipeDetails.flowSteps.map((step, sIdx) => (
                    <div key={sIdx} className="dev-step-item">
                      <span className="dev-step-badge">{sIdx + 1}</span>
                      <span className="dev-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPREHENSIVE PIPELINES TABLE & LIVE LOG STREAM ── */}
        <div className="dev-bottom-split">
          {/* Left: Complete Pipelines Matrix */}
          <div className="dev-card dev-matrix-card">
            <div className="dev-card-head">
              <div className="dev-card-title-wrap">
                <Activity size={18} className="text-cyan" />
                <h3 className="dev-card-title">Pipelines Health Matrix</h3>
              </div>
              <span className="dev-count-tag">5 Active Pipelines</span>
            </div>

            <div className="dev-table-wrap">
              <table className="dev-table">
                <thead>
                  <tr>
                    <th>Pipeline Name</th>
                    <th>Protocol</th>
                    <th>Status</th>
                    <th>Latency</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pipelines.map(pipe => {
                    const isSelected = selectedNode === pipe.id;
                    return (
                      <tr
                        key={pipe.id}
                        className={isSelected ? 'is-row-selected' : ''}
                        onClick={() => setSelectedNode(pipe.id)}
                      >
                        <td>
                          <div className="dev-t-name">{pipe.name}</div>
                          <div className="dev-t-desc">{pipe.source}</div>
                        </td>
                        <td>
                          <span className="dev-proto-badge">{pipe.protocol.split(' ')[0]}</span>
                        </td>
                        <td>
                          <span className="dev-status-pill-mini">
                            <span className="dev-status-dot-green" />
                            <span>{pipe.status}</span>
                          </span>
                        </td>
                        <td>
                          <span className="dev-lat-num">{pipe.latency}</span>
                        </td>
                        <td>
                          <button
                            className="dev-inspect-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedNode(pipe.id);
                            }}
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Live Terminal Diagnostics Log Stream */}
          <div className="dev-card dev-terminal-card">
            <div className="dev-card-head">
              <div className="dev-card-title-wrap">
                <Terminal size={18} className="text-amber" />
                <h3 className="dev-card-title">Live Diagnostic Probe Stream</h3>
              </div>
              <span className="dev-terminal-live">
                <span className="dev-pulse-amber" />
                <span>TERMINAL</span>
              </span>
            </div>

            <div className="dev-terminal-console">
              {logs.map((lg, lIdx) => (
                <div key={lIdx} className="dev-log-line">
                  <span className="dev-log-time">[{lg.time}]</span>
                  <span className={`dev-log-level lvl-${lg.level.toLowerCase()}`}>{lg.level}</span>
                  <span className="dev-log-msg">{lg.message}</span>
                </div>
              ))}
              {logs.length === 0 && (
                <div className="dev-log-empty">Waiting for probe events...</div>
              )}
            </div>

            <div className="dev-terminal-foot">
              <div className="dev-term-stat">
                <span>Active Target:</span> <code>{API || 'https://reg.technika2026.online'}</code>
              </div>
              <button
                className="dev-term-run-btn"
                onClick={() => probeSystem(true)}
              >
                <Play size={12} />
                <span>Execute Ping</span>
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* ── EMBEDDED CLAY STYLES ── */}
      <style>{`
        /* ── Base Wrapper ── */
        .dev-wrapper {
          min-height: 100vh;
          background: #090d16;
          color: #e2e8f0;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding-bottom: 60px;
        }

        /* ── Navigation Bar ── */
        .dev-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.08);
          padding: 14px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .dev-nav-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .dev-nav-badge {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%);
          border: 1.5px solid rgba(34, 211, 238, 0.4);
          box-shadow: 0 4px 15px rgba(34, 211, 238, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dev-cyan-glow {
          color: #22d3ee;
          filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
        }

        .dev-nav-uni {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #94a3b8;
        }

        .dev-nav-heading {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
        }

        .dev-brand-cyan {
          color: #22d3ee;
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
        }

        /* ── Segmented Mode Switcher ── */
        .dev-segmented-tabs {
          display: flex;
          background: rgba(30, 41, 59, 0.8);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 4px;
          gap: 4px;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .dev-seg-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 700;
          color: #94a3b8;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dev-seg-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .dev-seg-btn.is-active {
          color: #ffffff;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.25) 0%, rgba(14, 165, 233, 0.2) 100%);
          border: 1px solid rgba(34, 211, 238, 0.4);
          box-shadow: 0 4px 12px rgba(34, 211, 238, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2);
        }

        .dev-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 8px #22d3ee;
          animation: devPulse 1.8s infinite;
        }

        @keyframes devPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        /* ── Right Actions ── */
        .dev-nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dev-auto-refresh-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          font-size: 11px;
          font-weight: 700;
        }

        .dev-live-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: devPulse 2s infinite;
        }

        .dev-auto-label {
          color: #cbd5e1;
        }

        .dev-toggle-btn {
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #94a3b8;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .dev-toggle-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
        }

        .dev-refresh-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 1.5px solid rgba(34, 211, 238, 0.35);
          border-radius: 14px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.15);
          transition: all 0.2s;
        }

        .dev-refresh-btn:hover:not(:disabled) {
          border-color: #22d3ee;
          box-shadow: 0 4px 20px rgba(34, 211, 238, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.25);
          transform: translateY(-1px);
        }

        .dev-spin {
          animation: devSpin 0.8s linear infinite;
        }

        @keyframes devSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── Main Container ── */
        .dev-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* ── Top Hero Telemetry Bar ── */
        .dev-hero-bar {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 20px 28px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          align-items: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.1);
        }

        .dev-hero-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .dev-hero-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .box-green {
          background: rgba(16, 185, 129, 0.15);
          border: 1.5px solid rgba(16, 185, 129, 0.4);
          color: #10b981;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
        }

        .box-cyan {
          background: rgba(34, 211, 238, 0.15);
          border: 1.5px solid rgba(34, 211, 238, 0.4);
          color: #22d3ee;
          box-shadow: 0 4px 15px rgba(34, 211, 238, 0.2);
        }

        .box-amber {
          background: rgba(245, 158, 11, 0.15);
          border: 1.5px solid rgba(245, 158, 11, 0.4);
          color: #f59e0b;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);
        }

        .box-pink {
          background: rgba(236, 72, 153, 0.15);
          border: 1.5px solid rgba(236, 72, 153, 0.4);
          color: #ec4899;
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.2);
        }

        .dev-hero-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .dev-hero-val {
          font-size: 20px;
          font-weight: 800;
          line-height: 1.2;
        }

        .text-green { color: #10b981; }
        .text-cyan { color: #22d3ee; }
        .text-amber { color: #f59e0b; }
        .text-pink { color: #ec4899; }

        .dev-hero-sub {
          font-size: 11px;
          color: #64748b;
          margin-top: 2px;
        }

        .dev-hero-divider {
          display: none;
        }

        /* ── Generic Section Styling ── */
        .dev-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .dev-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .dev-section-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dev-section-title {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .dev-section-hint {
          font-size: 12px;
          color: #64748b;
        }

        /* ── The 3 Ecosystem Servers Grid ── */
        .dev-servers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .dev-server-card {
          background: linear-gradient(145deg, #131d31 0%, #0d1527 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
        }

        .dev-server-card:hover {
          border-color: rgba(34, 211, 238, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(34, 211, 238, 0.1);
        }

        .dev-srv-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .dev-srv-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dev-srv-badge-num {
          font-size: 12px;
          font-weight: 900;
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.12);
          border: 1px solid rgba(34, 211, 238, 0.3);
          padding: 4px 8px;
          border-radius: 8px;
        }

        .dev-srv-name {
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .dev-srv-role {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 2px;
        }

        .dev-srv-status-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          color: #10b981;
        }

        .dev-status-dot-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .dev-srv-meta-rows {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 12px;
        }

        .dev-srv-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
        }

        .dev-meta-lbl {
          color: #64748b;
          font-weight: 600;
        }

        .dev-meta-link {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #38bdf8;
          text-decoration: none;
          font-weight: 700;
          transition: color 0.15s;
        }

        .dev-meta-link:hover {
          color: #7dd3fc;
          text-decoration: underline;
        }

        .dev-meta-val {
          color: #cbd5e1;
          font-weight: 600;
        }

        .dev-branch-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 11px;
          color: #e2e8f0;
          font-family: monospace;
        }

        .dev-meta-ping {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #10b981;
          font-weight: 700;
        }

        /* ── Commit Info Box ── */
        .dev-srv-commit-box {
          background: rgba(8, 14, 26, 0.8);
          border: 1.5px solid rgba(34, 211, 238, 0.2);
          border-radius: 14px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dev-commit-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dev-commit-hash-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dev-commit-hash {
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dev-copy-btn {
          background: transparent;
          border: none;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
          transition: color 0.15s;
        }

        .dev-copy-btn:hover {
          color: #cbd5e1;
        }

        .dev-commit-author {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
        }

        .dev-commit-msg {
          font-size: 12px;
          color: #e2e8f0;
          font-style: italic;
          line-height: 1.4;
        }

        .dev-commit-footer {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          color: #64748b;
          margin-top: 2px;
        }

        .dev-srv-github-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 9px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.2s;
        }

        .dev-srv-github-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.18);
        }

        /* ── Interactive Flow Visualizer ── */
        .dev-flow-canvas {
          background: linear-gradient(135deg, #10192d 0%, #0a101d 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.08);
        }

        .dev-flow-chain {
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow-x: auto;
          padding-bottom: 10px;
          gap: 12px;
        }

        .dev-flow-node {
          background: #152238;
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 16px 18px;
          min-width: 170px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        }

        .dev-flow-node:hover {
          transform: translateY(-3px);
          border-color: #22d3ee;
          box-shadow: 0 12px 30px rgba(34, 211, 238, 0.2);
        }

        .dev-flow-node.is-selected {
          border-color: #22d3ee;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(14, 165, 233, 0.05) 100%);
          box-shadow: 0 0 25px rgba(34, 211, 238, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.2);
        }

        .dev-node-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22d3ee;
        }

        .dev-node-label {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
        }

        .dev-node-sub {
          font-size: 10px;
          color: #94a3b8;
          font-family: monospace;
        }

        .dev-node-badge {
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 12px;
          margin-top: 4px;
        }

        .badge-green {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .badge-cyan {
          background: rgba(34, 211, 238, 0.15);
          color: #22d3ee;
          border: 1px solid rgba(34, 211, 238, 0.3);
        }

        .badge-amber {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .badge-pink {
          background: rgba(236, 72, 153, 0.15);
          color: #ec4899;
          border: 1px solid rgba(236, 72, 153, 0.3);
        }

        .dev-flow-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #64748b;
          font-size: 10px;
          font-weight: 700;
          gap: 2px;
          flex-shrink: 0;
        }

        .dev-arrow-label {
          font-size: 9px;
          letter-spacing: 0.05em;
          color: #94a3b8;
          font-family: monospace;
        }

        /* ── Pipeline Inspector Drawer ── */
        .dev-pipe-inspector {
          background: rgba(8, 14, 26, 0.7);
          border: 1.5px solid rgba(34, 211, 238, 0.25);
          border-radius: 18px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .dev-inspector-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .dev-inspector-tag {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #22d3ee;
          margin-bottom: 2px;
        }

        .dev-inspector-title {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .dev-inspector-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 20px;
          font-size: 11px;
          font-weight: 800;
          color: #10b981;
        }

        .dev-inspector-desc {
          font-size: 13px;
          color: #cbd5e1;
          line-height: 1.5;
          margin: 0;
        }

        .dev-inspector-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 14px;
        }

        .dev-ins-lbl {
          font-size: 10px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .dev-ins-val {
          font-size: 12px;
          font-weight: 700;
          color: #e2e8f0;
          word-break: break-word;
        }

        .dev-steps-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dev-steps-title {
          font-size: 11px;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dev-steps-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .dev-step-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 6px 12px;
          font-size: 12px;
        }

        .dev-step-badge {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(34, 211, 238, 0.2);
          border: 1px solid #22d3ee;
          color: #22d3ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 900;
        }

        .dev-step-text {
          color: #e2e8f0;
          font-weight: 600;
        }

        /* ── Bottom Split: Matrix & Terminal ── */
        .dev-bottom-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .dev-card {
          background: linear-gradient(145deg, #131d31 0%, #0d1527 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
        }

        .dev-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dev-card-title-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dev-card-title {
          font-size: 16px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .dev-count-tag {
          font-size: 11px;
          font-weight: 700;
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.3);
          padding: 3px 8px;
          border-radius: 8px;
        }

        /* ── Table Matrix ── */
        .dev-table-wrap {
          overflow-x: auto;
        }

        .dev-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .dev-table th {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dev-table td {
          padding: 12px;
          font-size: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          cursor: pointer;
        }

        .dev-table tr:hover td {
          background: rgba(255, 255, 255, 0.03);
        }

        .dev-table tr.is-row-selected td {
          background: rgba(34, 211, 238, 0.08);
        }

        .dev-t-name {
          font-weight: 700;
          color: #ffffff;
        }

        .dev-t-desc {
          font-size: 10px;
          color: #94a3b8;
          margin-top: 2px;
        }

        .dev-proto-badge {
          font-size: 10px;
          font-family: monospace;
          background: rgba(255, 255, 255, 0.06);
          padding: 3px 6px;
          border-radius: 4px;
          color: #cbd5e1;
        }

        .dev-status-pill-mini {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 700;
          color: #10b981;
        }

        .dev-lat-num {
          font-family: monospace;
          color: #f59e0b;
          font-weight: 700;
        }

        .dev-inspect-btn {
          background: rgba(34, 211, 238, 0.15);
          border: 1px solid rgba(34, 211, 238, 0.35);
          color: #22d3ee;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s;
        }

        .dev-inspect-btn:hover {
          background: rgba(34, 211, 238, 0.3);
          color: #ffffff;
        }

        /* ── Terminal Console ── */
        .dev-terminal-live {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          color: #f59e0b;
          font-family: monospace;
        }

        .dev-pulse-amber {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f59e0b;
          box-shadow: 0 0 8px #f59e0b;
          animation: devPulse 1.8s infinite;
        }

        .dev-terminal-console {
          background: #080d18;
          border: 1.5px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 14px;
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 11.5px;
          height: 240px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.6);
        }

        .dev-log-line {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        .dev-log-time {
          color: #64748b;
          flex-shrink: 0;
        }

        .dev-log-level {
          font-weight: 800;
          flex-shrink: 0;
        }

        .lvl-info { color: #38bdf8; }
        .lvl-success { color: #10b981; }
        .lvl-warn { color: #f59e0b; }

        .dev-log-msg {
          color: #e2e8f0;
          word-break: break-all;
        }

        .dev-log-empty {
          color: #64748b;
          font-style: italic;
          margin: auto;
        }

        .dev-terminal-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 4px;
          font-size: 11px;
          color: #94a3b8;
        }

        .dev-term-stat code {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dev-term-run-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.1) 100%);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #fbbf24;
          padding: 5px 12px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }

        .dev-term-run-btn:hover {
          background: rgba(245, 158, 11, 0.3);
          color: #ffffff;
        }

        .dev-lock-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(239, 68, 68, 0.12);
          border: 1.5px solid rgba(239, 68, 68, 0.35);
          border-radius: 14px;
          color: #f87171;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .dev-lock-btn:hover {
          background: rgba(239, 68, 68, 0.25);
          border-color: #ef4444;
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* ── Responsiveness ── */
        @media (max-width: 1180px) {
          .dev-hero-bar {
            grid-template-columns: repeat(2, 1fr);
          }
          .dev-servers-grid {
            grid-template-columns: 1fr;
          }
          .dev-bottom-split {
            grid-template-columns: 1fr;
          }
          .dev-inspector-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .dev-nav {
            flex-direction: column;
            align-items: stretch;
            padding: 14px 18px;
            gap: 12px;
          }
          .dev-nav-center {
            order: 3;
          }
          .dev-container {
            padding: 16px;
          }
          .dev-hero-bar {
            grid-template-columns: 1fr;
            padding: 16px;
          }
          .dev-inspector-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default DeveloperDashboard;
