export default function SystemStatus() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow duration-300">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-6">System Status</h3>
      
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-body-sm text-on-surface font-medium">Bank Sync</span>
          <div className="bg-secondary-container/30 text-on-secondary-container px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
            Active
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-body-sm text-on-surface font-medium">Security Score</span>
          <span className="text-body-sm text-on-surface font-bold">98/100</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-body-sm text-on-surface font-medium">API Health</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <span className="text-body-sm text-secondary font-medium">Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
