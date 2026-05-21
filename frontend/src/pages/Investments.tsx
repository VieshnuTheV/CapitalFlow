import TotalPortfolioValue from '../components/investments/TotalPortfolioValue';
import SectorAllocation from '../components/investments/SectorAllocation';
import PerformanceHistory from '../components/investments/PerformanceHistory';
import Watchlist from '../components/investments/Watchlist';
import PortfolioHoldings from '../components/investments/PortfolioHoldings';

export default function Investments() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-8">
      {/* Page Header matching the screenshot if needed */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h1 className="font-inter font-bold text-[32px] text-on-surface tracking-tight">Investments</h1>
        
        {/* We assume search and topbar actions might be handled by AppShell TopBar in reality,
            but adding a sync button here for completeness if needed. 
            If the AppShell TopBar already handles it, this can be removed. */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (spanning 2 columns on lg screens) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <TotalPortfolioValue />
          <PerformanceHistory />
        </div>

        {/* Right Column (spanning 1 column on lg screens) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <SectorAllocation />
          <Watchlist />
        </div>
      </div>

      {/* Bottom Full Width */}
      <div className="w-full">
        <PortfolioHoldings />
      </div>
    </div>
  );
}
