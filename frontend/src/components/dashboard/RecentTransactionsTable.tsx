const transactions = [
  {
    id: 1,
    date: 'Today, 10:23 AM',
    description: 'Vanguard S&P 500 ETF',
    category: 'Investment',
    amount: -5000.00,
  },
  {
    id: 2,
    date: 'Yesterday',
    description: 'TechCorp Inc. Dividend',
    category: 'Income',
    amount: 450.00,
  },
  {
    id: 3,
    date: 'Oct 24, 2023',
    description: 'Whole Foods Market',
    category: 'Groceries',
    amount: -142.50,
  },
  {
    id: 4,
    date: 'Oct 22, 2023',
    description: 'Monthly Mortgage',
    category: 'Housing',
    amount: -2800.00,
  },
];

const categoryStyles: Record<string, string> = {
  Investment: 'bg-surface-variant text-on-surface-variant',
  Income: 'bg-secondary-fixed text-on-secondary-fixed',
  Groceries: 'bg-surface-container-highest text-on-surface-variant',
  Housing: 'bg-surface-container-highest text-on-surface-variant',
};

export default function RecentTransactionsTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Recent Transactions</h3>
          <span className="inline-flex items-center gap-1 bg-secondary-fixed-dim bg-opacity-20 text-on-secondary-fixed px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
            Live Sync
          </span>
        </div>
        <button className="text-body-sm font-medium text-on-surface hover:text-on-surface-variant transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant">
              <th className="py-3 px-2 font-medium text-body-sm text-on-surface-variant">Date</th>
              <th className="py-3 px-2 font-medium text-body-sm text-on-surface-variant">Description</th>
              <th className="py-3 px-2 font-medium text-body-sm text-on-surface-variant">Category</th>
              <th className="py-3 px-2 font-medium text-body-sm text-on-surface-variant text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-surface-container last:border-0 hover:bg-surface-container-lowest transition-colors">
                <td className="py-4 px-2 text-body-sm text-on-surface-variant">{tx.date}</td>
                <td className="py-4 px-2 text-body-sm font-medium text-on-surface">{tx.description}</td>
                <td className="py-4 px-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-medium ${categoryStyles[tx.category] || 'bg-surface-variant text-on-surface-variant'}`}>
                    {tx.category}
                  </span>
                </td>
                <td className={`py-4 px-2 text-right text-body-sm font-semibold ${tx.amount > 0 ? 'text-on-secondary-container' : 'text-on-surface'}`}>
                  {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
