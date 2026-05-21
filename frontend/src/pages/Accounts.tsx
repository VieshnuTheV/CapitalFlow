const liquid = {
  checking: { balance: 45200 },
  brokerage: {
    balance: 380450,
    holdings: [
      { symbol: 'VOO', price: 485.2 },
      { symbol: 'QQQM', price: 182.45 },
    ],
  },
  crypto: {
    total: 125000,
    coins: [
      { symbol: 'BTC', qty: 1.85, value: 115000 },
      { symbol: 'ETH', qty: 3.4, value: 10000 },
    ],
  },
}

const targets = [
  { label: 'ETFs & Index', target: 60, current: 55, variance: -5 },
  { label: 'Individual Stocks', target: 20, current: 25, variance: 5 },
  { label: 'Crypto', target: 20, current: 20, variance: 0 },
]

const liabilities = [
  { label: 'Mortgage', institution: 'Chase Bank', icon: 'home', rate: '3.2% Fixed', balance: 200000 },
  { label: 'Credit Card', institution: 'Amex Platinum', icon: 'credit_card', rate: 'Variable', balance: 4760 },
]

function fmt(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(n)
}

export default function Accounts() {
  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="font-inter text-display-lg text-on-surface">Net Worth</h2>
        <div className="flex items-baseline gap-4 mt-2">
          <span className="font-geist text-display-lg text-primary">$1,245,890.00</span>
          <span className="font-inter text-body-md text-secondary-fixed-dim bg-secondary-container/20 px-2 py-1 rounded">
            +2.4% ($29,400)
          </span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

        {/* Liquid Assets — 8 cols */}
        <div className="md:col-span-8 flex flex-col gap-6">
          <h3 className="font-geist text-stat-primary text-on-surface border-b border-outline-variant pb-2">
            Liquid Assets
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Checking */}
            <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 hover:shadow-[0px_4px_20px_rgba(15,23,42,0.05)] transition-shadow">
              <div className="flex items-start mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-surface-container rounded-lg text-primary">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div>
                    <h4 className="font-geist text-label-caps text-on-surface-variant">Checking</h4>
                    <p className="font-inter text-body-sm text-on-surface">Chase Premium</p>
                  </div>
                </div>
              </div>
              <div className="font-geist text-stat-primary text-on-surface">{fmt(liquid.checking.balance)}</div>
            </div>

            {/* Brokerage */}
            <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 hover:shadow-[0px_4px_20px_rgba(15,23,42,0.05)] transition-shadow">
              <div className="flex items-start mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-surface-container rounded-lg text-primary">
                    <span className="material-symbols-outlined">monitoring</span>
                  </div>
                  <div>
                    <h4 className="font-geist text-label-caps text-on-surface-variant">Brokerage</h4>
                    <p className="font-inter text-body-sm text-on-surface">Fidelity Intl</p>
                  </div>
                </div>
              </div>
              <div className="font-geist text-stat-primary text-on-surface">{fmt(liquid.brokerage.balance)}</div>
              <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-surface-variant">
                {liquid.brokerage.holdings.map((h) => (
                  <div key={h.symbol} className="flex justify-between font-inter text-body-sm">
                    <span className="text-on-surface font-semibold">{h.symbol}</span>
                    <span className="text-on-surface-variant">${h.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Crypto */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 hover:shadow-[0px_4px_20px_rgba(15,23,42,0.05)] transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-surface-container rounded-lg text-primary">
                  <span className="material-symbols-outlined">currency_bitcoin</span>
                </div>
                <h4 className="font-geist text-label-caps text-on-surface-variant">Crypto Wallets</h4>
              </div>
              <div className="font-geist text-stat-primary text-on-surface">{fmt(liquid.crypto.total)}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {liquid.crypto.coins.map((c) => (
                <div key={c.symbol} className="bg-surface rounded-lg p-4">
                  <div className="font-inter text-body-sm text-on-surface-variant mb-1">{c.symbol}</div>
                  <div className="font-geist text-[20px] font-semibold text-on-surface">{c.qty}</div>
                  <div className="font-inter text-body-sm text-secondary-fixed-dim mt-1">~{fmt(c.value)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Ratios — 4 cols */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h3 className="font-geist text-stat-primary text-on-surface border-b border-outline-variant pb-2">
            Target Ratios
          </h3>
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6">
            <div className="flex flex-col gap-6">
              {targets.map((t) => (
                <div key={t.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-geist text-label-caps text-on-surface">{t.label}</span>
                    <span className="font-inter text-body-sm text-on-surface-variant">{t.target}% Target</span>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${t.current}%` }} />
                  </div>
                  <div
                    className={`text-right mt-1 font-inter text-body-sm ${
                      t.variance < 0
                        ? 'text-error'
                        : t.variance > 0
                        ? 'text-secondary-fixed-dim'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {t.variance === 0
                      ? 'On Target'
                      : `${t.variance > 0 ? '+' : ''}${t.variance}% Variance`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Non-Liquid Assets — full width */}
        <div className="md:col-span-12 mt-4">
          <h3 className="font-geist text-stat-primary text-on-surface border-b border-outline-variant pb-2 mb-6">
            Non-Liquid Assets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Real Estate */}
            <div className="bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden hover:shadow-[0px_4px_20px_rgba(15,23,42,0.05)] transition-shadow">
              <div className="h-32 bg-surface-container-high" />
              <div className="p-6">
                <h4 className="font-geist text-label-caps text-on-surface-variant mb-1">Primary Residence</h4>
                <div className="font-geist text-stat-primary text-on-surface mb-4">$850,000.00</div>
                <div className="flex justify-between font-inter text-body-sm text-on-surface-variant border-t border-surface-variant pt-3">
                  <span>Zestimate</span>
                  <span className="text-secondary-fixed-dim">Updated 2d ago</span>
                </div>
              </div>
            </div>

            {/* Term Deposit */}
            <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 hover:shadow-[0px_4px_20px_rgba(15,23,42,0.05)] transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-surface-container rounded-lg text-primary">
                  <span className="material-symbols-outlined">savings</span>
                </div>
                <h4 className="font-geist text-label-caps text-on-surface-variant">Term Deposit (CD)</h4>
              </div>
              <div className="font-geist text-stat-primary text-on-surface mb-2">$50,000.00</div>
              <p className="font-inter text-body-sm text-on-surface-variant mb-4">Matures: Oct 2025 • 4.5% APY</p>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Liabilities — full width */}
        <div className="md:col-span-12 mt-4 mb-12">
          <h3 className="font-geist text-stat-primary text-on-surface border-b border-outline-variant pb-2 mb-6">
            Liabilities
          </h3>
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 px-6 py-3 bg-surface border-b border-surface-variant font-geist text-label-caps text-on-surface-variant">
              <div className="col-span-2">Account</div>
              <div>Interest Rate</div>
              <div className="text-right">Balance</div>
            </div>
            <div className="flex flex-col">
              {liabilities.map((l, i) => (
                <div
                  key={l.label}
                  className={`grid grid-cols-4 px-6 py-4 hover:bg-surface-container transition-colors items-center ${
                    i < liabilities.length - 1 ? 'border-b border-surface-variant' : ''
                  }`}
                >
                  <div className="col-span-2 flex items-center gap-3">
                    <div className="p-1.5 bg-error-container text-error rounded-md">
                      <span className="material-symbols-outlined text-[16px]">{l.icon}</span>
                    </div>
                    <div>
                      <div className="font-inter text-body-md font-medium text-on-surface">{l.label}</div>
                      <div className="font-inter text-body-sm text-on-surface-variant">{l.institution}</div>
                    </div>
                  </div>
                  <div className="font-inter text-body-md text-on-surface">{l.rate}</div>
                  <div className="text-right font-geist text-[18px] font-semibold text-error">
                    -{fmt(l.balance)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
