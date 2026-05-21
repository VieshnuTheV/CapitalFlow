import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Technology', value: 42, color: '#0b1c30' },
  { name: 'Finance', value: 24, color: '#006c49' },
  { name: 'Healthcare', value: 18, color: '#7073ff' },
  { name: 'Other', value: 16, color: '#c6c6cd' },
];

export default function SectorAllocation() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-6 tracking-wider">Sector Allocation</h3>
      
      <div className="flex-1 relative min-h-[200px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
              ))}
            </Pie>
            <Tooltip 
               contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
               itemStyle={{ color: '#0b1c30', fontWeight: 500 }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-label-caps text-on-surface-variant">Top Sector</span>
          <span className="font-stat-primary text-[20px] font-bold text-on-surface">Tech</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-y-4 gap-x-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2 group">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
            <div className="flex flex-col">
              <span className="text-body-sm font-medium text-on-surface group-hover:text-primary transition-colors">{item.name}</span>
              <span className="text-[12px] text-on-surface-variant">({item.value}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
