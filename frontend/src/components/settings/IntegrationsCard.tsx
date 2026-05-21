export default function IntegrationsCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant hover:shadow-md transition-shadow duration-300">
      {/* Account Connections Section */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-label-caps text-[14px] font-bold text-on-surface">Account Connections</h3>
          <div className="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border border-secondary-container/30">
            Plaid Secured
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Linked Account Card */}
          <div className="border border-outline-variant rounded-lg p-4 flex flex-col justify-between hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">account_balance</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-body-sm text-on-surface">JP Morgan Chase</span>
                  <span className="text-[12px] text-on-surface-variant">Last sync: 2 mins ago</span>
                </div>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                <span className="material-symbols-outlined text-[18px]">settings</span>
              </button>
            </div>
            <p className="text-[12px] text-on-surface-variant">4 active accounts linked via Plaid Protocol.</p>
          </div>

          {/* Link New Institution Card */}
          <div className="border-2 border-dashed border-outline-variant rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer text-on-surface-variant hover:text-primary hover:border-primary group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">add_circle</span>
            </div>
            <span className="font-medium text-body-sm">Link New Institution</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-outline-variant/50"></div>

      {/* Developer Webhooks Section */}
      <div className="p-6">
        <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-6">Developer Webhooks</h3>
        
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-label-caps text-on-surface-variant font-medium">API Public Key</label>
            <div className="flex gap-2">
              <input 
                type="password" 
                defaultValue="supersecretapikey1234567890"
                readOnly
                className="flex-1 px-4 py-2.5 bg-surface-container-low border border-transparent rounded-lg text-body-sm text-on-surface font-mono tracking-widest outline-none"
              />
              <button className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-sm font-bold text-on-surface hover:bg-surface-container-low transition-colors active:scale-95">
                Copy
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-label-caps text-on-surface-variant font-medium">Webhook Endpoint URL</label>
            <input 
              type="url" 
              defaultValue="https://your-api.com/webhooks"
              className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
