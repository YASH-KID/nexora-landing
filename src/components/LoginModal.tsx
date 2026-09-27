import { useEffect, useRef, useState } from "react";
import { X, KeyRound, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

type View = "form" | "success";
type Submitting = null | "password" | "sso";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginModal({ open, setOpen }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [view, setView] = useState<View>("form");
  const [submitting, setSubmitting] = useState<Submitting>(null);
  const [forgotClicked, setForgotClicked] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const emailError = touched.email && !EMAIL_RE.test(email) ? "Enter a valid email address" : "";
  const passwordError = touched.password && password.length < 6 ? "Password must be at least 6 characters" : "";
  const canSubmit = EMAIL_RE.test(email) && password.length >= 6;

  useEffect(() => {
    if (open) {
      setView("form");
      setSubmitting(null);
      setEmail("");
      setPassword("");
      setTouched({ email: false, password: false });
      setForgotClicked(false);
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => emailRef.current?.focus(), 10);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [open, setOpen]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!canSubmit) return;
    setSubmitting("password");
    setTimeout(() => setView("success"), 900);
  }

  function handleSSO() {
    setSubmitting("sso");
    setTimeout(() => setView("success"), 700);
  }

  return (
    <div className="auth-backdrop" onClick={() => setOpen(false)}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={() => setOpen(false)} aria-label="Close">
          <X size={18} />
        </button>

        {view === "success" ? (
          <div className="auth-success">
            <div className="auth-success__icon">
              <CheckCircle2 size={28} />
            </div>
            <h3>You're in!</h3>
            <p>
              This is a portfolio demo, so no real account was created — but this is exactly what a successful sign-in to Nexora would look
              like.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="auth-modal__title">Welcome back</h3>
            <p className="auth-modal__subtitle">Log in to your Nexora workspace.</p>

            <form onSubmit={handleSubmit} noValidate>
              <label className="auth-field">
                <span>Email</span>
                <input
                  ref={emailRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder="you@company.com"
                  className={emailError ? "invalid" : ""}
                  disabled={submitting !== null}
                />
                {emailError && (
                  <span className="auth-field__error">
                    <AlertCircle size={13} /> {emailError}
                  </span>
                )}
              </label>

              <label className="auth-field">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                  placeholder="••••••••"
                  className={passwordError ? "invalid" : ""}
                  disabled={submitting !== null}
                />
                {passwordError && (
                  <span className="auth-field__error">
                    <AlertCircle size={13} /> {passwordError}
                  </span>
                )}
              </label>

              <div className="auth-modal__row">
                <label className="auth-checkbox">
                  <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                  Remember me
                </label>
                <button
                  type="button"
                  className="auth-link"
                  onClick={() => setForgotClicked(true)}
                >
                  Forgot password?
                </button>
              </div>

              {forgotClicked && (
                <p className="auth-modal__hint">Password reset isn't wired up in this demo — it's a portfolio piece, not a live product.</p>
              )}

              <button type="submit" className="btn btn-primary btn-lg auth-submit" disabled={submitting !== null}>
                {submitting === "password" ? (
                  <>
                    <Loader2 size={17} className="auth-spinner" /> Logging in...
                  </>
                ) : (
                  "Log in"
                )}
              </button>
            </form>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <button className="btn btn-secondary btn-lg auth-sso" onClick={handleSSO} disabled={submitting !== null}>
              {submitting === "sso" ? (
                <>
                  <Loader2 size={17} className="auth-spinner" /> Connecting...
                </>
              ) : (
                <>
                  <KeyRound size={17} /> Continue with SSO
                </>
              )}
            </button>

            <p className="auth-modal__footer">
              Don't have an account?{" "}
              <a
                href="#final-cta"
                onClick={() => setOpen(false)}
              >
                Start free
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
