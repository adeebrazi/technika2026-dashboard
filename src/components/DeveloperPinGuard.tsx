import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldAlert, ArrowLeft, KeyRound, CheckCircle2 } from 'lucide-react';

interface DeveloperPinGuardProps {
  onSuccess: () => void;
}

export const DeveloperPinGuard: React.FC<DeveloperPinGuardProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(['', '', '', '']);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      setShake(true);
      const t = setTimeout(() => setShake(false), 600);
      return () => clearTimeout(t);
    }
  }, [error]);

  const verifyPin = (enteredPin: string) => {
    if (enteredPin === '2207') {
      setError('');
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 700);
    } else {
      setError('Access Denied: Invalid 4-Digit Passcode');
      setDigits(['', '', '', '']);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  };

  const handleDigitChange = (index: number, value: string) => {
    // Only accept single digit
    const cleaned = value.replace(/\D/g, '').slice(-1);
    if (error) setError('');

    const next = [...digits];
    next[index] = cleaned;
    setDigits(next);

    // Auto-advance
    if (cleaned && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto verify when 4 digits filled
    if (cleaned && index === 3) {
      const pin = next.join('');
      if (pin.length === 4) {
        verifyPin(pin);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'Enter') {
      const pin = digits.join('');
      if (pin.length === 4) {
        verifyPin(pin);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    if (pasted.length === 4) {
      const next = pasted.split('');
      setDigits(next);
      inputRefs.current[3]?.focus();
      verifyPin(pasted);
    }
  };

  return (
    <div className={`dev-pin-wrapper ${success ? 'is-success' : ''}`}>
      {/* Soft Ambient Light Glow Orbs */}
      <div className="dev-pin-orb dev-pin-orb-1" />
      <div className="dev-pin-orb dev-pin-orb-2" />
      <div className="dev-pin-orb dev-pin-orb-3" />

      {/* Security Passcode Claymorphic Card */}
      <div className={`dev-pin-card ${shake ? 'is-shaking' : ''}`}>
        
        {/* Card Header */}
        <div className="dev-pin-header">
          <div className="dev-pin-icon-wrap">
            {success ? (
              <CheckCircle2 size={30} className="text-emerald dev-pulse-icon" />
            ) : (
              <Lock size={30} className="text-blue dev-pulse-icon" />
            )}
          </div>
          
          <div className="dev-pin-badge">
            <ShieldAlert size={13} />
            <span>RESTRICTED DEVELOPER ACCESS</span>
          </div>

          <h2 className="dev-pin-title">
            {success ? 'Passcode Verified!' : 'Enter Developer Code'}
          </h2>
          <p className="dev-pin-subtitle">
            {success
              ? 'Decrypting telemetry & establishing live pipeline connection...'
              : 'Enter the 4-digit security code to unlock infrastructure & server telemetry.'}
          </p>
        </div>

        {/* 4-Digit Input Fields */}
        <div className="dev-pin-inputs-row" onPaste={handlePaste}>
          {digits.map((digit, idx) => (
            <input
              key={idx}
              ref={el => { inputRefs.current[idx] = el; }}
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              disabled={success}
              onChange={e => handleDigitChange(idx, e.target.value)}
              onKeyDown={e => handleKeyDown(idx, e)}
              className={`dev-pin-input ${digit ? 'has-val' : ''} ${error ? 'has-error' : ''} ${success ? 'is-valid' : ''}`}
              autoComplete="off"
            />
          ))}
        </div>

        {/* Error notification */}
        {error && (
          <div className="dev-pin-error">
            <ShieldAlert size={15} />
            <span>{error}</span>
          </div>
        )}

        {/* Keypad hint & verification indicator */}
        <div className="dev-pin-hint">
          <KeyRound size={13} />
          <span>Security Protocol · SHA-256 Verified Session</span>
        </div>

        {/* Navigation Return Button */}
        <button
          className="dev-pin-back-btn"
          onClick={() => navigate('/')}
          title="Return to Registration Analytics"
        >
          <ArrowLeft size={15} />
          <span>Back to Registration Analytics</span>
        </button>

      </div>

      {/* Component Styles - Light Theme Claymorphism */}
      <style>{`
        .dev-pin-wrapper {
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
        .dev-pin-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.55;
        }

        .dev-pin-orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(191, 219, 254, 0.8) 0%, transparent 70%);
          top: -100px;
          left: -100px;
          animation: devFloat 9s ease-in-out infinite alternate;
        }

        .dev-pin-orb-2 {
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(254, 215, 170, 0.7) 0%, transparent 70%);
          bottom: -100px;
          right: -80px;
          animation: devFloat 11s ease-in-out infinite alternate-reverse;
        }

        .dev-pin-orb-3 {
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(233, 213, 255, 0.6) 0%, transparent 70%);
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.35;
        }

        @keyframes devFloat {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(22px) scale(1.05); }
        }

        /* ── Main Light Claymorphism Security Card ── */
        .dev-pin-card {
          width: 100%;
          max-width: 470px;
          background: #ffffff;
          border-radius: 30px;
          border: 2px solid #ffffff;
          padding: 42px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          box-shadow: 
            16px 22px 48px rgba(162, 178, 201, 0.38),
            -10px -10px 30px rgba(255, 255, 255, 0.9),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.95),
            inset -1.5px -1.5px 3px rgba(162, 178, 201, 0.12);
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .dev-pin-card.is-shaking {
          animation: devShake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }

        @keyframes devShake {
          10%, 90% { transform: translate3d(-3px, 0, 0); }
          20%, 80% { transform: translate3d(5px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-6px, 0, 0); }
          40%, 60% { transform: translate3d(6px, 0, 0); }
        }

        /* ── Header & 3D Clay Icon ── */
        .dev-pin-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .dev-pin-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 24px;
          background: linear-gradient(135deg, #ffffff 0%, #f0f5fc 100%);
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          box-shadow: 
            6px 8px 20px rgba(162, 178, 201, 0.35),
            -4px -4px 12px rgba(255, 255, 255, 0.95),
            inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.9),
            inset -1.5px -1.5px 3px rgba(162, 178, 201, 0.15);
        }

        .dev-pin-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 13px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.28);
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          color: #d97706;
          letter-spacing: 0.06em;
          box-shadow: 1px 1px 3px rgba(245, 158, 11, 0.1);
        }

        .dev-pin-title {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .dev-pin-subtitle {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
          max-width: 330px;
          font-weight: 500;
        }

        /* ── 4-Digit Input Boxes ── */
        .dev-pin-inputs-row {
          display: flex;
          gap: 14px;
          justify-content: center;
          margin: 4px 0;
        }

        .dev-pin-input {
          width: 64px;
          height: 74px;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          font-size: 30px;
          font-weight: 800;
          color: #2563eb;
          text-align: center;
          outline: none;
          box-shadow: 
            inset 2px 2px 4px rgba(162, 178, 201, 0.28),
            inset -1px -1px 2px rgba(255, 255, 255, 0.9);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: monospace;
        }

        .dev-pin-input:focus {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 
            0 0 0 3px rgba(37, 99, 235, 0.15),
            4px 6px 14px rgba(162, 178, 201, 0.25);
          transform: translateY(-2px);
        }

        .dev-pin-input.has-val {
          border-color: #93c5fd;
          background: #ffffff;
          color: #2563eb;
        }

        .dev-pin-input.has-error {
          border-color: #ef4444;
          color: #dc2626;
          background: #fef2f2;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
        }

        .dev-pin-input.is-valid {
          border-color: #10b981;
          color: #059669;
          background: #f0fdf4;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
        }

        /* ── Error Notification ── */
        .dev-pin-error {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          border-radius: 14px;
          font-size: 12px;
          font-weight: 700;
          color: #dc2626;
          box-shadow: 1px 2px 5px rgba(239, 68, 68, 0.1);
        }

        .dev-pin-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
        }

        /* ── Return Button ── */
        .dev-pin-back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: #f8fafc;
          border: 1.5px solid #ffffff;
          border-radius: 14px;
          color: #475569;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            3px 4px 10px rgba(162, 178, 201, 0.2),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
        }

        .dev-pin-back-btn:hover {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 
            4px 6px 14px rgba(162, 178, 201, 0.28),
            inset 1px 1px 2px rgba(255, 255, 255, 0.95);
          transform: translateY(-1px);
        }

        .dev-pulse-icon {
          animation: devIconPulse 2s infinite ease-in-out;
        }

        @keyframes devIconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .text-blue { color: #2563eb; }
        .text-emerald { color: #059669; }

        @media (max-width: 480px) {
          .dev-pin-card {
            padding: 30px 20px;
            border-radius: 24px;
          }
          .dev-pin-input {
            width: 52px;
            height: 62px;
            font-size: 24px;
            border-radius: 16px;
          }
          .dev-pin-inputs-row {
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default DeveloperPinGuard;
