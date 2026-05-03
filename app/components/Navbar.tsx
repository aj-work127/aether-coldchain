'use client';
import { useTheme } from "next-themes";
import { Sun, Moon, LayoutDashboard, Truck, Activity, Settings } from "lucide-react";
import { useEffect, useState } from "react";

// Add props definition
export default function Navbar({ activeView, setActiveView }: { activeView?: string, setActiveView?: any }) {
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
        
        {/* UPDATED BUTTONS WITH ONCLICK */}
        <div className="hidden md:flex items-center gap-1 ml-8">
          <button 
            onClick={() => setActiveView('map')}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeView === 'map' ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}`}
          >
            <Activity className="w-4 h-4" /> Live Triage
          </button>
          
          <button 
            onClick={() => setActiveView('analytics')}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeView === 'analytics' ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}`}
          >
            <LayoutDashboard className="w-4 h-4" /> Analytics
          </button>
        </div>
      </div>
      
      {/* ... Rest of your Navbar code (System Online, Theme Toggle, etc.) remains exactly the same ... */}
      <div className="flex items-center gap-4">
        {/* ... */}
      </div>
    </nav>
  );
}