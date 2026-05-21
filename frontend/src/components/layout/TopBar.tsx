export default function TopBar() {
  return (
    <>
      {/* Desktop */}
      <header className="hidden md:flex justify-between items-center px-container-padding-desktop w-full h-16 border-b border-outline-variant bg-surface-container-lowest flex-shrink-0">
        <span className="font-inter font-bold text-headline-lg text-primary">CapitalFlow</span>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-body-sm focus:ring-1 focus:ring-primary outline-none w-64 text-on-surface placeholder:text-on-surface-variant font-inter"
              placeholder="Search assets..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 p-2 rounded-full active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 p-2 rounded-full active:scale-95">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
            <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-geist text-label-caps hover:opacity-90 transition-opacity whitespace-nowrap">
              Sync Now
            </button>
          </div>
        </div>
      </header>

      {/* Mobile */}
      <header className="md:hidden flex justify-between items-center px-container-padding-mobile h-16 bg-surface-container-lowest border-b border-outline-variant flex-shrink-0">
        <span className="font-inter font-bold text-headline-lg-mobile text-on-surface">CapitalFlow</span>
        <div className="flex gap-2">
          <button className="p-2 text-on-surface-variant">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 text-on-surface-variant">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>
    </>
  )
}
