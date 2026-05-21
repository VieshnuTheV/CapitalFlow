import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import AppShell from './components/layout/AppShell'
import Accounts from './pages/Accounts'
import Dashboard from './pages/Dashboard'
import Investments from './pages/Investments'
import Settings from './pages/Settings'

export default function App() {
  return (
    <BrowserRouter>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <AppShell>
          <Routes>
            <Route path="/" element={<Navigate to="/accounts" replace />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AppShell>
      </SignedIn>
    </BrowserRouter>
  )
}
