export default function Accounts() {
  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
        <div>
          <h2 className="font-inter text-display-lg text-on-surface">Income & Expenses</h2>
          <p className="font-inter text-body-md text-on-surface-variant mt-2">
            Manage cash flow, monitor allocations, and review recent activity.
          </p>
        </div>
        <button className="px-4 py-2 border border-outline-variant rounded-lg font-inter text-label-md text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Monthly Allocation Goals */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-geist text-label-caps text-on-surface-variant">Monthly Allocation Goals</h3>
              <button className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Goal 1 */}
              <div>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary-container/30 text-secondary-fixed-dim rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">show_chart</span>
                    </div>
                    <div>
                      <div className="font-inter text-body-md font-medium text-on-surface">SPYM Index Fund</div>
                      <div className="font-inter text-body-sm text-on-surface-variant">Investing</div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-1">
                    <span className="font-geist text-[18px] font-semibold text-on-surface">RM 250</span>
                    <span className="font-inter text-body-sm text-on-surface-variant pt-1"> / RM 300</span>
                  </div>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '83.33%' }} />
                </div>
              </div>

              {/* Goal 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary-container/30 text-secondary-fixed-dim rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">home</span>
                    </div>
                    <div>
                      <div className="font-inter text-body-md font-medium text-on-surface">Emergency Fund</div>
                      <div className="font-inter text-body-sm text-on-surface-variant">Cash Savings</div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-1">
                    <span className="font-geist text-[18px] font-semibold text-on-surface">RM 1,000</span>
                    <span className="font-inter text-body-sm text-on-surface-variant pt-1"> / RM 1,000</span>
                  </div>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 border-b border-surface-variant gap-4">
              <h3 className="font-geist text-label-caps text-on-surface-variant">Recent Transactions</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-1.5 bg-on-surface text-surface rounded-full font-inter text-label-sm">All</button>
                <button className="px-4 py-1.5 border border-outline-variant text-on-surface-variant rounded-full font-inter text-label-sm hover:bg-surface-container transition-colors">Housing</button>
                <button className="px-4 py-1.5 border border-outline-variant text-on-surface-variant rounded-full font-inter text-label-sm hover:bg-surface-container transition-colors">Food</button>
                <button className="px-4 py-1.5 border border-outline-variant text-on-surface-variant rounded-full font-inter text-label-sm hover:bg-surface-container transition-colors">Investing</button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-surface-variant bg-surface-container-lowest font-geist text-label-caps text-on-surface-variant">
                    <th className="p-4 font-normal">Date</th>
                    <th className="p-4 font-normal">Description</th>
                    <th className="p-4 font-normal">Category</th>
                    <th className="p-4 font-normal text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="font-inter text-body-md text-on-surface">
                  <tr className="border-b border-surface-variant hover:bg-surface-container transition-colors">
                    <td className="p-4 text-on-surface-variant whitespace-nowrap">Oct 24,<br/>2023</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                        </div>
                        Whole Foods Market
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-[#e0f2fe] text-[#0369a1] dark:bg-[#0c4a6e] dark:text-[#38bdf8] rounded text-[10px] uppercase tracking-wider font-geist font-semibold">Food</span>
                    </td>
                    <td className="p-4 text-right font-geist font-semibold">-RM 142.50</td>
                  </tr>
                  
                  <tr className="border-b border-surface-variant hover:bg-surface-container transition-colors">
                    <td className="p-4 text-on-surface-variant whitespace-nowrap">Oct 23,<br/>2023</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary-fixed-dim/20 text-secondary-fixed-dim rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">payments</span>
                        </div>
                        Tech Corp Inc.
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-[#dcfce7] text-[#15803d] dark:bg-[#14532d] dark:text-[#4ade80] rounded text-[10px] uppercase tracking-wider font-geist font-semibold">Salary</span>
                    </td>
                    <td className="p-4 text-right font-geist font-semibold text-secondary-fixed-dim">+RM 4,500.00</td>
                  </tr>
                  
                  <tr className="border-b border-surface-variant hover:bg-surface-container transition-colors">
                    <td className="p-4 text-on-surface-variant whitespace-nowrap">Oct 21,<br/>2023</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">home</span>
                        </div>
                        City Apartments
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-[#e0f2fe] text-[#0369a1] dark:bg-[#0c4a6e] dark:text-[#38bdf8] rounded text-[10px] uppercase tracking-wider font-geist font-semibold">Housing</span>
                    </td>
                    <td className="p-4 text-right font-geist font-semibold">-RM 1,200.00</td>
                  </tr>
                  
                  <tr className="hover:bg-surface-container transition-colors">
                    <td className="p-4 text-on-surface-variant whitespace-nowrap">Oct 20,<br/>2023</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">trending_up</span>
                        </div>
                        Vanguard SPYM Transfer
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-[#e0f2fe] text-[#0369a1] dark:bg-[#0c4a6e] dark:text-[#38bdf8] rounded text-[10px] uppercase tracking-wider font-geist font-semibold">Investing</span>
                    </td>
                    <td className="p-4 text-right font-geist font-semibold">-RM 250.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-surface-variant text-center">
              <button className="font-inter text-label-md text-on-surface-variant hover:text-on-surface transition-colors">
                View All Transactions
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Monthly Income */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6">
            <div className="mb-6">
              <h3 className="font-geist text-label-caps text-on-surface-variant mb-2">Monthly Income</h3>
              <div className="font-geist text-[32px] leading-tight font-medium text-on-surface">RM 5,240.00</div>
              <div className="font-inter text-body-sm text-secondary-fixed-dim mt-1">↑ +4.2% vs last month</div>
            </div>
            
            <div>
              <h4 className="font-inter text-body-sm text-on-surface-variant mb-4">Streams</h4>
              <div className="flex flex-col gap-4 border-t border-surface-variant pt-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></div>
                    <span className="font-inter text-body-sm text-on-surface">Primary Salary</span>
                  </div>
                  <span className="font-geist text-[16px] font-medium text-on-surface">RM 4,500.00</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                    <span className="font-inter text-body-sm text-on-surface">Dividends</span>
                  </div>
                  <span className="font-geist text-[16px] font-medium text-on-surface">RM 340.00</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-on-surface-variant"></div>
                    <span className="font-inter text-body-sm text-on-surface">Side Hustle</span>
                  </div>
                  <span className="font-geist text-[16px] font-medium text-on-surface">RM 400.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6">
            <h3 className="font-geist text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">data_object</span>
              System Status
            </h3>
            
            <div className="bg-surface-container rounded-lg p-4 mb-4">
              <h4 className="font-inter text-body-sm text-on-surface-variant mb-2">Live Socket Connection</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary-fixed-dim shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
                <span className="font-inter text-body-sm text-on-surface">Connected (wss://api.v1)</span>
              </div>
            </div>
            
            <div className="bg-surface-container rounded-lg p-4">
              <h4 className="font-inter text-body-sm text-on-surface-variant mb-2">Last Webhook Received</h4>
              <div className="flex justify-between items-center">
                <span className="font-geist text-body-sm text-on-surface break-all mr-2">evt_sync_success_8x9a</span>
                <span className="font-inter text-body-xs text-on-surface-variant whitespace-nowrap">2 mins ago</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
