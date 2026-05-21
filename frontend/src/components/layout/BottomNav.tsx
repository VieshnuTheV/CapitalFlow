import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { path: '/accounts', icon: 'account_balance', label: 'Accounts' },
  { path: '/investments', icon: 'trending_up', label: 'Investments' },
  { path: '/settings', icon: 'settings', label: 'Settings' },
]

export default function BottomNav() {
  const { pathname } = useLocation()

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest border-t border-outline-variant flex justify-around py-3 px-2 z-50">
      {navItems.map(({ path, icon, label }) => {
        const active = pathname === path
        return (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 ${active ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${active ? 'fill' : ''}`}>{icon}</span>
            <span className="font-geist text-[10px] tracking-widest uppercase">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
