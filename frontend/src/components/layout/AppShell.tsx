import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import BottomNav from './BottomNav'

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-background antialiased">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-container-padding-mobile md:p-container-padding-desktop pb-20 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
