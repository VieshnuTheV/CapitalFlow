import NetWorthWidget from '../components/dashboard/NetWorthWidget'
import CashFlowChart from '../components/dashboard/CashFlowChart'
import AssetAllocationChart from '../components/dashboard/AssetAllocationChart'
import RecentTransactionsTable from '../components/dashboard/RecentTransactionsTable'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full">
      {/* Top Row: Net Worth */}
      <section>
        <NetWorthWidget />
      </section>

      {/* Middle Row: Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CashFlowChart />
        </div>
        <div className="lg:col-span-1">
          <AssetAllocationChart />
        </div>
      </section>

      {/* Bottom Row: Transactions */}
      <section>
        <RecentTransactionsTable />
      </section>
    </div>
  )
}
