"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement Supabase registration
    console.log("Register attempt:", formData);
    
    setTimeout(() => {
      setIsLoading(false);
      // TODO: Handle registration success/error
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl border border-border shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
              PreFlight
            </h1>
            <h2 className="text-xl text-foreground">הרשמה למערכת</h2>
            <p className="text-muted-foreground mt-2">צור חשבון חדש והתחל ללמוד</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                placeholder="שם מלא"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                דואר אלקטרוני
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                סיסמה
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                אימות סיסמה
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "נרשם..." : "הרשמה"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              כבר יש לך חשבון?{" "}
              <Link href="/auth/login" className="text-accent hover:text-orange-600 font-semibold transition-colors">
                התחבר עכשיו
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link 
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              חזור לדף הבית
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
