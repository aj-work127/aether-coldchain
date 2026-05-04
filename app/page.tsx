'use client'; 

import { useState } from 'react';
import dynamic from 'next/dynamic';
import TriageFeed from './components/TriageFeed'; 
import Navbar from './components/Navbar';
import FleetManager from './components/FleetManager';

// Dynamically import the map
const MapView = dynamic(() => import('./components/MapView'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-500 font-mono">INITIALIZING AETHER TACTICAL MAP...</div>
});

export default function Dashboard() {
  // Simple state to toggle between views!
  const [activeView, setActiveView] = useState<'map' | 'analytics'>('map');

  return (
    <main className="flex flex-col h-screen w-full bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-50 overflow-hidden font-sans relative selection:bg-blue-500/30 transition-colors duration-300">
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/10 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Pass the state to the Navbar so buttons actually work */}
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      <div className="flex w-full h-[calc(100vh-4rem)] z-10 relative">
        
        {/* VIEW 1: The Map and Live Feed */}
        {activeView === 'map' && (
          <>
            <section className="w-8/12 h-full relative border-r border-slate-200 dark:border-slate-800/50 flex flex-col">
              <MapView />
            </section>
            <section className="w-4/12 h-full bg-white/50 dark:bg-slate-950/80 backdrop-blur-xl flex flex-col relative shadow-[-20px_0_40px_rgba(0,0,0,0.05)] dark:shadow-[-20px_0_40px_rgba(0,0,0,0.5)]">
              <TriageFeed />
            </section>
          </>
        )}

        {/* VIEW 2: The Fleet Analytics Dashboard */}
        {activeView === 'analytics' && (
          <section className="w-full h-full">
            <FleetManager />
          </section>
        )}

      </div>
    </main>
  );
}