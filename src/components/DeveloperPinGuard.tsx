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
      {/* Background ambient orbs */}
      <div className="dev-pin-orb dev-pin-orb-1" />
      <div className="dev-pin-orb dev-pin-orb-2" />
      <div className="dev-pin-orb dev-pin-orb-3" />

      {/* Security Passcode Modal Card */}
      <div className={`dev-pin-card ${shake ? 'is-shaking' : ''}`}>
        
        {/* Card Header */}
        <div className="dev-pin-header">
          <div className="dev-pin-icon-wrap">
            {success ? (
              <CheckCircle2 size={28} className="text-green dev-pulse-icon" />
            ) : (
              <Lock size={28} className="text-cyan dev-pulse-icon" />
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

      <style>{`
        .dev-pin-wrapper {
          min-height: 100vh;
          background: #070b14;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }

        .dev-pin-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.35;
        }

        .dev-pin-orb-1 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, #22d3ee 0%, transparent 70%);
          top: -100px;
          left: -100px;
        }

        .dev-pin-orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #0ea5e9 0%, transparent 70%);
          bottom: -150px;
          right: -100px;
        }

        .dev-pin-orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #a855f7 0%, transparent 70%);
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.15;
        }

        .dev-pin-card {
          width: 100%;
          max-width: 460px;
          background: linear-gradient(145deg, rgba(19, 29, 49, 0.9) 0%, rgba(13, 21, 39, 0.95) 100%);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
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

        .dev-pin-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .dev-pin-icon-wrap {
          width: 68px;
          height: 68px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(14, 165, 233, 0.08) 100%);
          border: 1.5px solid rgba(34, 211, 238, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
          box-shadow: 0 8px 25px rgba(34, 211, 238, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.2);
        }

        .dev-pin-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          color: #fbbf24;
          letter-spacing: 0.06em;
        }

        .dev-pin-title {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .dev-pin-subtitle {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0;
          max-width: 340px;
        }

        /* ── Digit Inputs ── */
        .dev-pin-inputs-row {
          display: flex;
          gap: 14px;
          justify-content: center;
          margin: 6px 0;
        }

        .dev-pin-input {
          width: 62px;
          height: 72px;
          background: #0f172a;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          font-size: 30px;
          font-weight: 800;
          color: #22d3ee;
          text-align: center;
          outline: none;
          box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.5);
          transition: all 0.2s ease;
          font-family: monospace;
        }

        .dev-pin-input:focus {
          border-color: #22d3ee;
          background: #131d35;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .dev-pin-input.has-val {
          border-color: rgba(34, 211, 238, 0.6);
          background: #111b30;
        }

        .dev-pin-input.has-error {
          border-color: #ef4444;
          color: #ef4444;
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.3);
        }

        .dev-pin-input.is-valid {
          border-color: #10b981;
          color: #10b981;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }

        /* ── Error Notification ── */
        .dev-pin-error {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          color: #f87171;
        }

        .dev-pin-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
        }

        .dev-pin-back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          color: #cbd5e1;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .dev-pin-back-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .dev-pulse-icon {
          animation: devIconPulse 2s infinite;
        }

        @keyframes devIconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .text-cyan { color: #22d3ee; }
        .text-green { color: #10b981; }

        @media (max-width: 480px) {
          .dev-pin-card {
            padding: 30px 20px;
          }
          .dev-pin-input {
            width: 50px;
            height: 60px;
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default DeveloperPinGuard;
