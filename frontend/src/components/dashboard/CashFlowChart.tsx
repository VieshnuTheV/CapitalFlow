import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', income: 5000, expenses: 3000 },
  { name: 'Feb', income: 5500, expenses: 3200 },
  { name: 'Mar', income: 4000, expenses: 6000 },
  { name: 'Apr', income: 6000, expenses: 3500 },
  { name: 'May', income: 5800, expenses: 4000 },
  { name: 'Jun', income: 6500, expenses: 4200 },
];

export default function CashFlowChart() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Cash Flow</h3>
        <button className="text-body-sm font-medium px-3 py-1.5 border border-outline-variant rounded-md hover:bg-surface-variant transition-colors">
          Last 6 Months
        </button>
      </div>
      
      <div className="flex-1 min-h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#76777d' }}
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: '#f8f9ff' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="expenses" stackId="a" fill="#ba1a1a" radius={[0, 0, 4, 4]} />
            <Bar dataKey="income" stackId="a" fill="#0b1c30" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-on-surface rounded-sm"></div>
          <span className="text-body-sm text-on-surface-variant">Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-error rounded-sm"></div>
          <span className="text-body-sm text-on-surface-variant">Expenses</span>
        </div>
      </div>
    </div>
  );
}
