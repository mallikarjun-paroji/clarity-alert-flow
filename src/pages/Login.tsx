import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Activity, LogIn, Mail, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="relative">
        {/* Spinning ring loader around the card */}
        <div
          className={`absolute -inset-4 rounded-2xl border-[3px] border-transparent transition-opacity duration-500 ${
            loading
              ? "opacity-100 animate-spin-slow border-t-primary border-r-primary/40 border-b-primary/10 border-l-primary/60"
              : "opacity-0"
          }`}
          style={{ borderRadius: "1.25rem" }}
        />

        <div className="card-elevated p-8 w-full max-w-sm animate-fade-in relative overflow-hidden">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Activity className="h-7 w-7 text-primary" />
            <span className="font-heading font-semibold text-xl text-foreground">PredictAI</span>
          </div>

          <h1 className="font-heading text-lg font-semibold text-foreground text-center mb-1">Welcome back</h1>
          <p className="text-sm text-muted-foreground text-center mb-6">Sign in to your dashboard</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="pl-10"
                disabled={loading}
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <div className="relative">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                className="pl-10"
                disabled={loading}
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full gap-2" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Signing in...
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4" /> Sign In
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Demo: use any email &amp; password
          </p>
        </div>
      </div>
    </div>
  );
}
