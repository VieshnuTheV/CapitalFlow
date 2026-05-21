import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { value: 1000 },
  { value: 1200 },
  { value: 1100 },
  { value: 1400 },
  { value: 1350 },
  { value: 1600 },
  { value: 1500 },
  { value: 1800 },
];

export default function TotalPortfolioValue() {
  return (
    <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-6 flex flex-col justify-between min-h-[240px] group transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start z-10">
        <div>
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-2">Total Portfolio Value</h3>
          <div className="font-inter text-display-lg font-bold text-on-surface mb-2">
            $1,428,592.42
          </div>
          <div className="flex items-center gap-2 text-body-sm">
            <span className="text-secondary font-medium flex items-center">
              <span className="material-symbols-outlined text-[16px] mr-1">arrow_upward</span>
              +$242,104.12 (20.4%)
            </span>
            <span className="text-on-surface-variant">All-time Gain</span>
          </div>
        </div>

        <div className="text-right">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-2">Today's Change</h3>
          <div className="font-stat-primary text-stat-primary text-secondary mb-1">
            +$14,210.84
          </div>
          <div className="inline-block bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-label-caps font-medium">
            +1.12%
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#006c49" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#006c49" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="none" fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
