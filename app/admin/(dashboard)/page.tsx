import { Building2, Home, Map } from 'lucide-react';
import { getApartments } from '@/lib/apartments';
import { getVillas } from '@/lib/villas';
import { getPlots } from '@/lib/plots';

export default function AdminDashboardPage() {
  const stats = [
    { name: 'Total Apartments', value: getApartments().length, icon: Building2, color: 'bg-blue-500' },
    { name: 'Total Villas', value: getVillas().length, icon: Home, color: 'bg-green-500' },
    { name: 'Total Plots', value: getPlots().length, icon: Map, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center">
            <div className={`p-4 rounded-xl text-white ${stat.color} mr-6`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
