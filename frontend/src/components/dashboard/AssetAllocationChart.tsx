import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'ETFs', value: 55, color: '#006c49' }, // secondary
  { name: 'Stocks', value: 30, color: '#0b1c30' }, // on-surface
  { name: 'Crypto', value: 15, color: '#76777d' }, // outline
];

export default function AssetAllocationChart() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant h-full flex flex-col">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-6">Asset Allocation</h3>
      
      <div className="flex-1 relative min-h-[200px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
               contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-label-caps text-on-surface-variant">Total Assets</span>
          <span className="font-stat-primary text-stat-primary text-on-surface">$1.3M</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }}></div>
              <span className="text-body-sm font-medium text-on-surface">{item.name}</span>
            </div>
            <span className="text-body-sm text-on-surface-variant">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
