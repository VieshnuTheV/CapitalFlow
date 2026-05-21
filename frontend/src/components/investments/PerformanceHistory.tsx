import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'JUL 23', value: 1000 },
  { name: 'OCT 23', value: 1150 },
  { name: 'JAN 24', value: 1050 },
  { name: 'APR 24', value: 1300 },
  { name: 'JUL 24', value: 1428.59 },
];

export default function PerformanceHistory() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant h-full flex flex-col group hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-1">Performance History</h3>
          <p className="text-body-sm text-on-surface-variant">Growth of $1M invested over 1 year</p>
        </div>
        <div className="flex bg-surface-container-low rounded-lg p-1 border border-outline-variant/50">
          <button className="px-3 py-1 text-label-caps font-bold bg-surface-container-lowest shadow-sm rounded-md text-on-surface transition-all">1Y</button>
          <button className="px-3 py-1 text-label-caps font-medium text-on-surface-variant hover:text-on-surface transition-colors">5Y</button>
          <button className="px-3 py-1 text-label-caps font-medium text-on-surface-variant hover:text-on-surface transition-colors">MAX</button>
        </div>
      </div>
      
      <div className="flex-1 min-h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e5eeff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e5eeff" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5eeff" />
            <XAxis 
              dataKey="name" 
              axisLine={true} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#76777d', fontWeight: 500 }} 
              dy={10}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5eeff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              itemStyle={{ color: '#0b1c30', fontWeight: 600 }}
              labelStyle={{ color: '#76777d', fontSize: '12px', marginBottom: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#0b1c30" 
              strokeWidth={2}
              fill="url(#colorPerf)" 
              activeDot={{ r: 6, fill: '#0b1c30', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
