export default function PortfolioHoldings() {
  const holdings = [
    { 
      symbol: 'VOO', 
      name: 'Vanguard S&P 500 ETF', 
      shares: 1240.00, 
      costBasis: 412.50, 
      currentPrice: 518.32, 
      totalValue: 642617.60, 
      pl: 25.6,
      iconLetter: 'V',
      iconColor: 'bg-[#0b1c30] text-white'
    },
    { 
      symbol: 'QQQM', 
      name: 'Invesco Nasdaq 100 ETF', 
      shares: 2150.00, 
      costBasis: 154.20, 
      currentPrice: 189.42, 
      totalValue: 407253.00, 
      pl: 22.8,
      iconLetter: 'Q',
      iconColor: 'bg-[#7073ff] text-white'
    },
    { 
      symbol: 'SPYM', 
      name: 'SPDR Portfolio S&P 500', 
      shares: 500.00, 
      costBasis: 52.10, 
      currentPrice: 61.85, 
      totalValue: 30925.00, 
      pl: 18.7,
      iconLetter: 'S',
      iconColor: 'bg-[#006c49] text-white'
    },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6 flex justify-between items-center border-b border-outline-variant">
        <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Portfolio Holdings</h3>
        <div className="flex gap-2">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low rounded-full">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low rounded-full">
            <span className="material-symbols-outlined text-[20px]">download</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="py-3 px-6 text-label-caps font-bold text-on-surface-variant w-[30%]">SYMBOL</th>
              <th className="py-3 px-6 text-label-caps font-bold text-on-surface-variant">SHARES</th>
              <th className="py-3 px-6 text-label-caps font-bold text-on-surface-variant">COST BASIS</th>
              <th className="py-3 px-6 text-label-caps font-bold text-on-surface-variant">CURRENT PRICE</th>
              <th className="py-3 px-6 text-label-caps font-bold text-on-surface-variant">TOTAL VALUE</th>
              <th className="py-3 px-6 text-label-caps font-bold text-on-surface-variant">P/L (%)</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <tr key={holding.symbol} className="border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${holding.iconColor}`}>
                      {holding.iconLetter}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-on-surface">{holding.symbol}</span>
                      <span className="text-[12px] text-on-surface-variant">{holding.name}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-body-sm text-on-surface font-medium">
                  {holding.shares.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="py-4 px-6 text-body-sm text-on-surface font-medium">
                  ${holding.costBasis.toFixed(2)}
                </td>
                <td className="py-4 px-6 text-body-sm text-on-surface font-bold">
                  ${holding.currentPrice.toFixed(2)}
                  <div className="text-[10px] text-secondary font-medium uppercase mt-0.5">Live</div>
                </td>
                <td className="py-4 px-6 text-body-sm text-on-surface font-bold">
                  ${holding.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="py-4 px-6">
                  <div className="inline-block bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-label-caps font-medium">
                    +{holding.pl}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-surface-container-lowest border-t border-outline-variant/50 text-center">
        <button className="text-body-sm font-bold text-on-surface hover:text-primary transition-colors">
          View All 18 Holdings
        </button>
      </div>
    </div>
  );
}
