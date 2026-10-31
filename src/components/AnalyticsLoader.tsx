import React, { useState, useEffect } from 'react';
import { BarChart3, RefreshCw, AlertCircle, Sparkles, Activity } from 'lucide-react';

interface AnalyticsLoaderProps {
  error?: string;
  onRetry?: () => void;
  onLoadFallback?: () => void;
}

const LOADING_STEPS = [
  'Connecting to Technika 6.0 registration portal...',
  'Fetching latest participant numbers...',
  'Organizing college & event statistics...',
  'Preparing charts and festival insights...',
  'Almost ready! Opening your dashboard...'
];

export const AnalyticsLoader: React.FC<AnalyticsLoaderProps> = ({
  error,
  onRetry,
  onLoadFallback
}) => {
  const [stepIdx, setStepIdx] = useState(0);
  const [progress, setProgress] = useState(15);
  const [tookLong, setTookLong] = useState(false);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStepIdx(prev => (prev + 1) % LOADING_STEPS.length);
    }, 1800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 92) return 92;
        return prev + Math.floor(Math.random() * 12 + 6);
      });
    }, 500);

    const timeout = setTimeout(() => {
      setTookLong(true);
    }, 4500);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="analytics-loader-root">
      {/* Soft Ambient Light Glow Orbs */}
      <div className="al-orb al-orb-blue" />
      <div className="al-orb al-orb-amber" />
      <div className="al-orb al-orb-purple" />

      {/* Main Light Claymorphism Card */}
      <div className="al-card">
        {/* Brand header */}
        <div className="al-header">
          <div className="al-brand-row">
            <div className="al-logo-badge" title="Arka Jain University">
              <img 
                src="/logo.webp" 
                alt="ARKA JAIN UNIVERSITY" 
                className="al-uni-logo-img" 
              />
            </div>
            <div className="al-brand-text">
              <div className="al-uni-title">ARKA JAIN UNIVERSITY</div>
              <div className="al-uni-subtitle">Jharkhand &nbsp;·&nbsp; NAAC Grade A</div>
            </div>
          </div>

          <div className="al-fest-badge" title="Technika 6.0">
            <img 
              src="/technika_logo.webp" 
              alt="Technika 6.0" 
              className="al-fest-logo-img" 
            />
            <div className="al-fest-brand">
              <span>Technika</span>
              <span className="al-brand-accent">6.0</span>
            </div>
          </div>
        </div>

        {/* Center Visual 3D Clay Stage */}
        <div className="al-center-stage">
          <div className="al-radar-wrap">
            <div className="al-radar-ring al-ring-3" />
            <div className="al-radar-ring al-ring-2" />
            <div className="al-radar-ring al-ring-1" />
            
            <div className="al-core-icon">
              {error ? (
                <AlertCircle size={32} className="text-red" />
              ) : (
                <BarChart3 size={32} className="al-chart-icon" />
              )}
            </div>
          </div>
        </div>

        {/* Status text & progress */}
        <div className="al-status-section">
          {error ? (
            <div className="al-error-box">
              <div className="al-error-title">Unable to Load Data</div>
              <div className="al-error-msg">{error}</div>
              <div className="al-actions-row">
                {onRetry && (
                  <button className="al-retry-btn" onClick={onRetry}>
                    <RefreshCw size={14} />
                    <span>Try Again</span>
                  </button>
                )}
                {onLoadFallback && (
                  <button className="al-preview-btn" onClick={onLoadFallback}>
                    <Sparkles size={14} />
                    <span>View Dashboard</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="al-loading-title-row">
                <h3 className="al-loading-title">Loading Technika Dashboard</h3>
                <span className="al-percent-pill">{progress}%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="al-progress-track">
                <div 
                  className="al-progress-fill" 
                  style={{ width: `${progress}%` }} 
                >
                  <div className="al-progress-shimmer" />
                </div>
              </div>

              {/* Dynamic cycling step label */}
              <div className="al-step-row">
                <Activity size={15} className="al-activity-icon" />
                <span className="al-step-text">{LOADING_STEPS[stepIdx]}</span>
              </div>

              {/* If taking longer than expected */}
              {tookLong && (
                <div className="al-took-long-box">
                  <span>Taking a few seconds to load...</span>
                  <div className="al-took-long-actions">
                    {onRetry && (
                      <button className="al-mini-btn" onClick={onRetry}>
                        <RefreshCw size={12} />
                        <span>Refresh</span>
                      </button>
                    )}
                    {onLoadFallback && (
                      <button className="al-mini-btn al-mini-accent" onClick={onLoadFallback}>
                        <span>Continue &rarr;</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Badges */}
        <div className="al-footer">
          <div className="al-pill">
            <span className="al-pulse-dot" />
            <span>LIVE REGISTRATIONS</span>
          </div>
          <div className="al-pill-divider">·</div>
          <div className="al-pill">
            <span>REAL-TIME STATS</span>
          </div>
          <div className="al-pill-divider">·</div>
          <div className="al-pill">
            <span>OFFICIAL PORTAL</span>
          </div>
        </div>

      </div>

      {/* Component Styles - Light Theme Claymorphic Aesthetics */}
      <style>{`
        .analytics-loader-root {
          min-height: 100vh;
          width: 100vw;
          background: #f0f4f9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          color: #0f172a;
        }

        /* ── Soft Ambient Glow Orbs ── */
        .al-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.55;
        }

        .al-orb-blue {
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(191, 219, 254, 0.8) 0%, transparent 70%);
          top: -100px;
          left: -100px;
          animation: alFloat 9s ease-in-out infinite alternate;
        }

        .al-orb-amber {
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(254, 215, 170, 0.7) 0%, transparent 70%);
          bottom: -80px;
          right: -80px;
          animation: alFloat 11s ease-in-out infinite alternate-reverse;
        }

        .al-orb-purple {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(233, 213, 255, 0.6) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.35;
        }

        @keyframes alFloat {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(22px) scale(1.05); }
        }

        /* ── Main Light Claymorphism Card ── */
        .al-card {
          width: 100%;
          max-width: 500px;
          background: #ffffff;
          border-radius: 30px;
          border: 2px solid #ffffff;
          padding: 34px 32px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          box-shadow: 
            16px 22px 48px rgba(162, 178, 201, 0.38),
            -10px -10px 30px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.95),
            inset -1.5px -1.5px 3px rgba(162, 178, 201, 0.12);
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }

        /* ── Brand Header ── */
        .al-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1.5px solid #eef2f6;
          padding-bottom: 18px;
        }

        .al-brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .al-logo-badge {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: #ffffff;
          border: 1.5px solid #e2eaf4;
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            3px 4px 10px rgba(162, 178, 201, 0.25),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
        }

        .al-uni-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 9px;
        }

        .al-uni-title {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #0f172a;
        }

        .al-uni-subtitle {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
          margin-top: 1px;
        }

        .al-fest-badge {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          background: #f8fafc;
          border: 1.5px solid #ffffff;
          padding: 4px 12px 4px 6px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 
            3px 4px 10px rgba(162, 178, 201, 0.2),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
        }

        .al-fest-logo-img {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid #e2e8f0;
        }

        .al-fest-brand {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .al-brand-accent {
          color: #2563eb;
          font-weight: 900;
        }

        /* ── Center Stage & Floating Clay Orb ── */
        .al-center-stage {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 0 6px 0;
        }

        .al-radar-wrap {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .al-radar-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid;
          pointer-events: none;
        }

        .al-ring-1 {
          width: 96px;
          height: 96px;
          border-color: rgba(37, 99, 235, 0.25);
          animation: alSpin 5s linear infinite;
        }

        .al-ring-2 {
          width: 120px;
          height: 120px;
          border-color: rgba(6, 182, 212, 0.28);
          border-style: dashed;
          animation: alSpinReverse 9s linear infinite;
        }

        .al-ring-3 {
          width: 140px;
          height: 140px;
          border-color: rgba(245, 158, 11, 0.25);
          animation: alPulseRing 2.6s ease-out infinite;
        }

        @keyframes alSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes alSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes alPulseRing {
          0% { transform: scale(0.88); opacity: 0.7; }
          50% { transform: scale(1.06); opacity: 0.2; }
          100% { transform: scale(0.88); opacity: 0.7; }
        }

        .al-core-icon {
          width: 72px;
          height: 72px;
          border-radius: 24px;
          background: linear-gradient(135deg, #ffffff 0%, #f0f5fc 100%);
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            6px 8px 20px rgba(162, 178, 201, 0.35),
            -4px -4px 12px rgba(255, 255, 255, 0.95),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.9),
            inset -1.5px -1.5px 3px rgba(162, 178, 201, 0.15);
          z-index: 2;
        }

        .al-chart-icon {
          color: #2563eb;
          animation: alCorePulse 1.8s ease-in-out infinite;
        }

        @keyframes alCorePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.85; }
        }

        /* ── Status Section ── */
        .al-status-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .al-loading-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .al-loading-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .al-percent-pill {
          font-size: 12px;
          font-weight: 800;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 3px 9px;
          border-radius: 10px;
          box-shadow: 1px 1px 3px rgba(162, 178, 201, 0.2);
        }

        .al-progress-track {
          width: 100%;
          height: 10px;
          background: #e2eaf4;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: 
            inset 2px 2px 4px rgba(162, 178, 201, 0.35),
            inset -1px -1px 2px rgba(255, 255, 255, 0.8);
          position: relative;
        }

        .al-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #2563eb 0%, #06b6d4 60%, #f59e0b 100%);
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .al-progress-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          animation: alShimmer 1.8s infinite;
        }

        @keyframes alShimmer {
          100% { left: 160%; }
        }

        .al-step-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
          min-height: 20px;
        }

        .al-activity-icon {
          color: #059669;
          flex-shrink: 0;
          animation: alCorePulse 1.2s infinite;
        }

        .al-step-text {
          font-weight: 600;
          color: #475569;
        }

        /* ── Took long box ── */
        .al-took-long-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          color: #64748b;
          margin-top: 4px;
          box-shadow: 2px 2px 6px rgba(162, 178, 201, 0.12);
        }

        .al-took-long-actions {
          display: flex;
          gap: 6px;
        }

        .al-mini-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 5px 11px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          color: #334155;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s;
          box-shadow: 1px 1px 3px rgba(162, 178, 201, 0.15);
        }

        .al-mini-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .al-mini-accent {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #2563eb;
        }

        .al-mini-accent:hover {
          background: #dbeafe;
          color: #1d4ed8;
        }

        /* ── Error Box ── */
        .al-error-box {
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          border-radius: 16px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: center;
          align-items: center;
        }

        .al-error-title {
          font-size: 14px;
          font-weight: 800;
          color: #dc2626;
        }

        .al-error-msg {
          font-size: 12px;
          color: #b91c1c;
          line-height: 1.4;
        }

        .al-actions-row {
          display: flex;
          gap: 10px;
          margin-top: 6px;
        }

        .al-retry-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #dc2626;
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(220, 38, 38, 0.25);
        }

        .al-preview-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          color: #334155;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        /* ── Footer ── */
        .al-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          padding-top: 8px;
          border-top: 1.5px solid #eef2f6;
        }

        .al-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.05em;
        }

        .al-pill-divider {
          color: #cbd5e1;
          font-weight: 900;
          font-size: 12px;
        }

        .al-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.6);
          animation: alCorePulse 2s infinite;
        }

        .text-red {
          color: #dc2626;
        }

        /* ── Mobile Responsiveness ── */
        @media (max-width: 580px) {
          .analytics-loader-root {
            padding: 16px;
          }
          .al-card {
            padding: 24px 18px;
            border-radius: 24px;
            gap: 20px;
            width: 100%;
          }
          .al-header {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding-bottom: 14px;
            text-align: center;
          }
          .al-brand-row {
            flex-direction: column;
            gap: 8px;
            align-items: center;
          }
          .al-uni-title {
            font-size: 12px;
          }
          .al-uni-subtitle {
            font-size: 10px;
          }
          .al-took-long-box {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            text-align: center;
            padding: 12px 14px;
          }
          .al-took-long-actions {
            display: flex;
            gap: 8px;
            width: 100%;
          }
          .al-mini-btn {
            flex: 1;
            justify-content: center;
            padding: 8px 10px;
            font-size: 11px;
          }
          .al-footer {
            gap: 8px;
          }
          .al-pill {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnalyticsLoader;
