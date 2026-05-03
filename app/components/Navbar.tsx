'use client';
import { useTheme } from "next-themes";
import { Sun, Moon, LayoutDashboard, Truck, Activity, Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full h-16 bg-white/80 dark:bg-slate-950/40 backdrop-blur-md border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-6 z-50 sticky top-0 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-sm shadow-[0_0_10px_rgba(37,99,235,0.4)] dark:shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            AETHER <span className="text-slate-500 dark:text-slate-400 font-normal">| ColdChain</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-1 ml-8">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 transition-colors">
            <Activity className="w-4 h-4" /> Live Triage
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
            <Truck className="w-4 h-4" /> Fleet Status
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
            <LayoutDashboard className="w-4 h-4" /> Analytics
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-400/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          SYSTEM_ONLINE
        </div>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2" />
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
        <button className="p-2 rounded-md text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}