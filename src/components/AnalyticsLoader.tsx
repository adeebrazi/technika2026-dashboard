import React, { useState, useEffect } from 'react';
import { Cpu, RefreshCw, AlertCircle, Sparkles, Activity } from 'lucide-react';

interface AnalyticsLoaderProps {
  error?: string;
  onRetry?: () => void;
  onLoadFallback?: () => void;
}

const LOADING_STEPS = [
  'Connecting to Technika 6.0 Telemetry Gateway...',
  'Querying MongoDB Atlas Cluster (ap-south-1)...',
  'Synthesizing Event Popularity & Demographic Cohorts...',
  'Synchronizing Real-time Institutional Registrations...',
  'Preparing Executive Claymorphism Workspace...'
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
      {/* Ambient background light orbs */}
      <div className="al-orb al-orb-cyan" />
      <div className="al-orb al-orb-amber" />
      <div className="al-orb al-orb-purple" />

      {/* Main Glassmorphic Loading Card */}
      <div className="al-card">
        {/* Brand header */}
        <div className="al-header">
          <div className="al-brand-row">
            <div className="al-cap-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div className="al-brand-text">
              <div className="al-uni-title">ARKA JAIN UNIVERSITY</div>
              <div className="al-uni-subtitle">Jharkhand &nbsp;·&nbsp; NAAC Grade A</div>
            </div>
          </div>

          <div className="al-fest-badge">
            <span>Technika</span>
            <span className="al-cyan-text">6.0</span>
          </div>
        </div>

        {/* Center Visual Loader Animation */}
        <div className="al-center-stage">
          <div className="al-radar-wrap">
            <div className="al-radar-ring al-ring-3" />
            <div className="al-radar-ring al-ring-2" />
            <div className="al-radar-ring al-ring-1" />
            
            <div className="al-core-icon">
              {error ? (
                <AlertCircle size={32} className="text-red" />
              ) : (
                <Cpu size={32} className="al-cpu-icon" />
              )}
            </div>
          </div>
        </div>

        {/* Status text & progress */}
        <div className="al-status-section">
          {error ? (
            <div className="al-error-box">
              <div className="al-error-title">Telemetry Connection Notice</div>
              <div className="al-error-msg">{error}</div>
              <div className="al-actions-row">
                {onRetry && (
                  <button className="al-retry-btn" onClick={onRetry}>
                    <RefreshCw size={14} />
                    <span>Retry Connection</span>
                  </button>
                )}
                {onLoadFallback && (
                  <button className="al-preview-btn" onClick={onLoadFallback}>
                    <Sparkles size={14} />
                    <span>Open Analytics Workspace</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="al-loading-title-row">
                <h3 className="al-loading-title">Initializing Analytics Workspace</h3>
                <span className="al-percent-pill">{progress}%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="al-progress-track">
                <div 
                  className="al-progress-fill" 
                  style={{ width: `${progress}%` }} 
                />
              </div>

              {/* Dynamic cycling step label */}
              <div className="al-step-row">
                <Activity size={14} className="al-activity-icon" />
                <span className="al-step-text">{LOADING_STEPS[stepIdx]}</span>
              </div>

              {/* If taking longer than expected */}
              {tookLong && (
                <div className="al-took-long-box">
                  <span>Server taking a few seconds to wake up?</span>
                  <div className="al-took-long-actions">
                    {onRetry && (
                      <button className="al-mini-btn" onClick={onRetry}>
                        <RefreshCw size={12} />
                        <span>Force Refresh</span>
                      </button>
                    )}
                    {onLoadFallback && (
                      <button className="al-mini-btn al-mini-accent" onClick={onLoadFallback}>
                        <span>Continue to Workspace &rarr;</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Security Badges */}
        <div className="al-footer">
          <div className="al-pill">
            <span className="al-pulse-dot" />
            <span>LIVE REST API</span>
          </div>
          <div className="al-pill">
            <span>MONGODB ATLAS SYNC</span>
          </div>
          <div className="al-pill">
            <span>TLS 1.3 ENCRYPTED</span>
          </div>
        </div>

      </div>

      {/* Component Styles */}
      <style>{`
        .analytics-loader-root {
          min-height: 100vh;
          width: 100vw;
          background: #080c16;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          color: #f8fafc;
        }

        /* ── Ambient Glow Orbs ── */
        .al-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          opacity: 0.35;
        }

        .al-orb-cyan {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #22d3ee 0%, transparent 70%);
          top: -120px;
          left: -100px;
          animation: alFloat 8s ease-in-out infinite alternate;
        }

        .al-orb-amber {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, #f59e0b 0%, transparent 70%);
          bottom: -100px;
          right: -80px;
          animation: alFloat 10s ease-in-out infinite alternate-reverse;
        }

        .al-orb-purple {
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, #a855f7 0%, transparent 70%);
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.18;
        }

        @keyframes alFloat {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(25px) scale(1.08); }
        }

        /* ── Main Glassmorphic Card ── */
        .al-card {
          width: 100%;
          max-width: 520px;
          background: linear-gradient(145deg, rgba(21, 32, 54, 0.88) 0%, rgba(13, 21, 39, 0.94) 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          box-shadow: 0 30px 65px rgba(0, 0, 0, 0.65), inset 0 1px 3px rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }

        /* ── Brand Header ── */
        .al-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 20px;
        }

        .al-brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .al-cap-badge {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.1) 100%);
          border: 1px solid rgba(245, 158, 11, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);
        }

        .al-uni-title {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
        }

        .al-uni-subtitle {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
          margin-top: 1px;
        }

        .al-fest-badge {
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.3);
          padding: 6px 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .al-cyan-text {
          color: #22d3ee;
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
        }

        /* ── Radar Visual Stage ── */
        .al-center-stage {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
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
          opacity: 0.6;
        }

        .al-ring-1 {
          width: 90px;
          height: 90px;
          border-color: rgba(34, 211, 238, 0.4);
          animation: alSpin 4s linear infinite;
        }

        .al-ring-2 {
          width: 118px;
          height: 118px;
          border-color: rgba(14, 165, 233, 0.3);
          border-style: dashed;
          animation: alSpinReverse 8s linear infinite;
        }

        .al-ring-3 {
          width: 140px;
          height: 140px;
          border-color: rgba(245, 158, 11, 0.25);
          animation: alPulseRing 2.4s ease-out infinite;
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
          0% { transform: scale(0.85); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.85); opacity: 0.8; }
        }

        .al-core-icon {
          width: 66px;
          height: 66px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%);
          border: 1.5px solid rgba(34, 211, 238, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(34, 211, 238, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.25);
          z-index: 2;
        }

        .al-cpu-icon {
          color: #22d3ee;
          filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.8));
          animation: alCorePulse 1.8s infinite;
        }

        @keyframes alCorePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: 0.8; }
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
          color: #ffffff;
          margin: 0;
        }

        .al-percent-pill {
          font-size: 12px;
          font-weight: 800;
          color: #22d3ee;
          font-family: monospace;
          background: rgba(34, 211, 238, 0.12);
          border: 1px solid rgba(34, 211, 238, 0.3);
          padding: 2px 8px;
          border-radius: 8px;
        }

        .al-progress-track {
          width: 100%;
          height: 8px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .al-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0ea5e9 0%, #22d3ee 50%, #f59e0b 100%);
          border-radius: 20px;
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
          transition: width 0.4s ease;
        }

        .al-step-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #94a3b8;
          min-height: 22px;
        }

        .al-activity-icon {
          color: #10b981;
          flex-shrink: 0;
          animation: alCorePulse 1.2s infinite;
        }

        .al-step-text {
          font-weight: 600;
          color: #cbd5e1;
        }

        /* ── Took long box ── */
        .al-took-long-box {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          color: #94a3b8;
          margin-top: 4px;
        }

        .al-took-long-actions {
          display: flex;
          gap: 6px;
        }

        .al-mini-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          color: #e2e8f0;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s;
        }

        .al-mini-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        .al-mini-accent {
          background: rgba(34, 211, 238, 0.15);
          border-color: rgba(34, 211, 238, 0.35);
          color: #22d3ee;
        }

        .al-mini-accent:hover {
          background: rgba(34, 211, 238, 0.25);
          color: #ffffff;
        }

        /* ── Error Box ── */
        .al-error-box {
          background: rgba(239, 68, 68, 0.1);
          border: 1.5px solid rgba(239, 68, 68, 0.35);
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
          color: #f87171;
        }

        .al-error-msg {
          font-size: 12px;
          color: #fca5a5;
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
          background: #ef4444;
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .al-preview-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          color: #ffffff;
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
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .al-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.06em;
        }

        .al-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
          animation: alCorePulse 2s infinite;
        }

        .text-red {
          color: #ef4444;
        }
      `}</style>
    </div>
  );
};

export default AnalyticsLoader;
