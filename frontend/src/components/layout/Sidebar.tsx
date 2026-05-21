import { Link, useLocation } from 'react-router-dom'
import { useClerk } from '@clerk/clerk-react'

const navItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { path: '/accounts', icon: 'account_balance', label: 'Accounts' },
  { path: '/investments', icon: 'trending_up', label: 'Investments' },
  { path: '/settings', icon: 'settings', label: 'Settings' },
]

export default function Sidebar() {
  const { pathname } = useLocation()
  const { signOut } = useClerk()

  return (
    <nav className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant bg-surface-container-lowest py-8 px-4 flex-shrink-0">
      <div className="mb-8 px-4">
        <h1 className="font-inter font-black text-headline-lg text-on-surface">Wealth Manager</h1>
        <p className="font-inter text-body-sm text-on-surface-variant mt-1">Verified Portfolio</p>
      </div>

      <button className="w-full mb-8 bg-primary-container text-on-primary-container hover:bg-surface-container-high transition-colors duration-150 rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-geist text-label-caps">
        <span className="material-symbols-outlined text-[18px]">add</span>
        New Transaction
      </button>

      <div className="flex-1 flex flex-col gap-2">
        {navItems.map(({ path, icon, label }) => {
          const active = pathname === path
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 font-geist text-label-caps ${
                active
                  ? 'bg-secondary-container text-on-secondary-container font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              <span className={`material-symbols-outlined ${active ? 'fill' : ''}`}>{icon}</span>
              {label}
            </Link>
          )
        })}
      </div>

      <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-surface-container-highest">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-150 font-geist text-label-caps"
        >
          <span className="material-symbols-outlined">help_outline</span>
          Support
        </a>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-150 font-geist text-label-caps w-full text-left"
        >
          <span className="material-symbols-outlined">logout</span>
          Sign Out
        </button>
      </div>
    </nav>
  )
}
