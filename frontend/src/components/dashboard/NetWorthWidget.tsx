export default function NetWorthWidget() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="flex-1">
        <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">Total Net Worth</h3>
        <div className="flex items-center gap-4 mb-1">
          <span className="font-display-lg text-display-lg text-on-surface">$1,245,890.00</span>
          <span className="inline-flex items-center gap-1 bg-secondary-fixed px-2 py-1 rounded-full text-on-secondary-fixed text-body-sm font-semibold">
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            2.4%
          </span>
        </div>
        <p className="text-body-sm text-outline">Updated just now</p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        {/* Liquid */}
        <div className="bg-surface rounded-lg p-4 border border-outline-variant flex-1 min-w-[120px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></div>
            <span className="text-body-sm text-on-surface-variant">Liquid</span>
          </div>
          <span className="font-stat-primary text-stat-primary text-on-surface">$420k</span>
        </div>
        
        {/* Non-Liquid */}
        <div className="bg-surface rounded-lg p-4 border border-outline-variant flex-1 min-w-[120px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
            <span className="text-body-sm text-on-surface-variant">Non-Liquid</span>
          </div>
          <span className="font-stat-primary text-stat-primary text-on-surface">$880k</span>
        </div>
        
        {/* Liabilities */}
        <div className="bg-surface rounded-lg p-4 border border-outline-variant flex-1 min-w-[120px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-error"></div>
            <span className="text-body-sm text-on-surface-variant">Liabilities</span>
          </div>
          <span className="font-stat-primary text-stat-primary text-on-surface">-$54k</span>
        </div>
      </div>
    </div>
  )
}
