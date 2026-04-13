import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Activity, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password");
      return;
    }
    // Simulated login — accept any credentials
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="card-elevated p-8 w-full max-w-sm animate-fade-in">
        <div className="flex items-center gap-2 justify-center mb-6">
          <Activity className="h-7 w-7 text-primary" />
          <span className="font-heading font-semibold text-xl text-foreground">PredictAI</span>
        </div>

        <h1 className="font-heading text-lg font-semibold text-foreground text-center mb-1">Welcome back</h1>
        <p className="text-sm text-muted-foreground text-center mb-6">Sign in to your dashboard</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full gap-2">
            <LogIn className="h-4 w-4" /> Sign In
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Demo: use any email &amp; password
        </p>
      </div>
    </div>
  );
}
