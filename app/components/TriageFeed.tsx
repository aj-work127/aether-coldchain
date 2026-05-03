'use client';
import { AlertTriangle, CheckCircle2, ThermometerSnowflake, Activity } from 'lucide-react';

export default function TriageFeed() {
  const mockAlerts = [
    {
      id: 1,
      type: 'critical',
      truck: 'TRK-402',
      cargo: 'Pfizer Vaccines',
      temp: '-14°C',
      target: '-20°C',
      message: 'Thermal decay predicted in 1.2 hrs due to unexpected gridlock. Autonomous reroute to Safe Harbor Beta initiated.',
      time: '00:02:41'
    },
    {
      id: 2,
      type: 'success',
      truck: 'TRK-882',
      cargo: 'Blood Plasma',
      temp: '-18°C',
      target: '-18°C',
      message: 'Successfully docked at Safe Harbor Alpha. Cargo secured.',
      time: '00:14:09'
    }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/20 flex justify-between items-center transition-colors">
        <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <Activity className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          Live AI Interventions
        </h2>
        <span className="text-[10px] font-mono text-slate-600 dark:text-slate-500 bg-slate-200 dark:bg-slate-800/50 px-2 py-1 rounded">2 EVENTS</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {mockAlerts.map((alert) => (
          <div key={alert.id} className="group relative p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 ease-out cursor-default overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${alert.type === 'critical' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-emerald-500'}`} />

            <div className="flex items-start gap-4 ml-2">
              <div className={`p-2 rounded-lg ${alert.type === 'critical' ? 'bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400' : 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'}`}>
                {alert.type === 'critical' ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{alert.truck} <span className="text-slate-500 font-normal ml-1">· {alert.cargo}</span></h3>
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider">{alert.time}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 bg-slate-50 dark:bg-slate-950/50 p-2 rounded-md border border-slate-100 dark:border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest mb-0.5">Current Temp</span>
                    <span className={`text-xs font-mono ${alert.type === 'critical' ? 'text-red-500 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                      {alert.temp} <span className="text-slate-400 dark:text-slate-600">/ {alert.target}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-end text-slate-400">
                    <ThermometerSnowflake className="w-3.5 h-3.5 mr-1 opacity-50" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {alert.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}