'use client';
import { Plus, Truck, Clock, Map, TrendingUp, MoreHorizontal } from 'lucide-react';

export default function FleetManager() {
  const mockTrucks = [
    { id: 'TRK-402', type: 'Refrigerated (Vaccines)', status: 'Rerouting', distance: '342 km', uptime: '14 hrs', health: 'Critical' },
    { id: 'TRK-882', type: 'Cryo (Blood Plasma)', status: 'Active', distance: '89 km', uptime: '4 hrs', health: 'Optimal' },
    { id: 'TRK-119', type: 'Refrigerated (Insulin)', status: 'Docked', distance: '1,204 km', uptime: '48 hrs', health: 'Maintenance' },
    { id: 'TRK-550', type: 'Standard (Agri)', status: 'Active', distance: '450 km', uptime: '12 hrs', health: 'Optimal' },
  ];

  return (
    <div className="w-full h-full p-6 overflow-y-auto bg-slate-50 dark:bg-slate-950/50">
      
      {/* Header & Add Button */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Fleet Analytics</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage vehicles, telemetry, and historical data.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-4 h-4" /> Add New Vehicle
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Distance (30d)', value: '45,231 km', icon: Map, color: 'text-blue-500' },
          { label: 'Active Fleet Uptime', value: '98.4%', icon: Clock, color: 'text-emerald-500' },
          { label: 'Spoilage Prevented', value: '$4.2M', icon: TrendingUp, color: 'text-purple-500' },
        ].map((kpi, i) => (
          <div key={i} className="p-5 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.label}</span>
              <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{kpi.value}</h3>
          </div>
        ))}
      </div>

      {/* The Vehicle Data Table */}
      <div className="rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 backdrop-blur-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-white/5 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/20">
          <h3 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <Truck className="w-4 h-4 text-slate-500" /> Active Roster
          </h3>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Vehicle ID</th>
                <th className="px-6 py-3 font-medium">Cargo Profile</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Distance Log</th>
                <th className="px-6 py-3 font-medium text-right">Uptime</th>
                <th className="px-6 py-3 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {mockTrucks.map((truck) => (
                <tr key={truck.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">{truck.id}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{truck.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      truck.health === 'Critical' ? 'bg-red-100 border-red-200 text-red-700 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400' :
                      truck.health === 'Maintenance' ? 'bg-amber-100 border-amber-200 text-amber-700 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-400' :
                      'bg-emerald-100 border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400'
                    }`}>
                      {truck.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-600 dark:text-slate-400 font-mono">{truck.distance}</td>
                  <td className="px-6 py-4 text-right text-slate-600 dark:text-slate-400 font-mono">{truck.uptime}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-slate-400 hover:text-blue-500 transition-colors">
                      <MoreHorizontal className="w-5 h-5 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}