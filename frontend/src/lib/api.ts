const BASE = import.meta.env.VITE_API_URL || '/api'

async function req<T>(path: string, token: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}

export interface Account {
  id: string
  name: string
  type: 'liquid' | 'non-liquid' | 'liability'
  category: 'cash' | 'crypto' | 'stock' | 'real_estate' | 'debt'
  balance: number
  currency: string
}

export interface Transaction {
  id: string
  account_id: string
  amount: number
  category: string
  description: string
  transaction_date: string
  type: 'income' | 'expense'
  source: string
}

export interface Holding {
  id: string
  symbol: string
  quantity: number
  cost_basis: number
  account_id: string
}

export const api = (token: string) => ({
  accounts: {
    list: () => req<Account[]>('/accounts', token),
    create: (body: Omit<Account, 'id'>) =>
      req<{ status: string }>('/accounts', token, { method: 'POST', body: JSON.stringify(body) }),
  },
  transactions: {
    list: (accountId?: string) =>
      req<Transaction[]>(`/transactions${accountId ? `?account_id=${accountId}` : ''}`, token),
    create: (body: Omit<Transaction, 'id'>) =>
      req<{ status: string }>('/transactions', token, { method: 'POST', body: JSON.stringify(body) }),
  },
  holdings: {
    list: () => req<Holding[]>('/holdings', token),
  },
  netWorth: {
    get: () => req<{ total: number; liquid: number; non_liquid: number; liabilities: number }>('/net-worth', token),
  },
})
