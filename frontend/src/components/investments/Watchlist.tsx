export default function Watchlist() {
  const watchlist = [
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: 248.50, change: -2.14, isPositive: false },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 128.20, change: 3.45, isPositive: true },
    { symbol: 'BTC', name: 'Bitcoin', price: 64210, change: 1.02, isPositive: true },
    { symbol: 'AAPL', name: 'Apple Inc.', price: 224.12, change: 0.00, isPositive: null },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Watchlist</h3>
        <button className="text-outline hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container-low">
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
        </button>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {watchlist.map((item) => (
          <div key={item.symbol} className="flex justify-between items-center p-2 -mx-2 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
            <div className="flex flex-col">
              <span className="font-bold text-on-surface group-hover:text-primary transition-colors">{item.symbol}</span>
              <span className="text-[12px] text-on-surface-variant">{item.name}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-medium text-on-surface">
                ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              {item.isPositive === true && (
                <span className="text-[12px] font-medium text-secondary">+{item.change}%</span>
              )}
              {item.isPositive === false && (
                <span className="text-[12px] font-medium text-error">{item.change}%</span>
              )}
              {item.isPositive === null && (
                <span className="text-[12px] font-medium text-outline">{item.change.toFixed(2)}%</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 border border-outline-variant rounded-lg text-body-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors active:scale-[0.98]">
        View All Watchlist
      </button>
    </div>
  );
}
