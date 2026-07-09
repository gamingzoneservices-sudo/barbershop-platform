import { ReactNode } from 'react'

interface OwnerLayoutProps {
  children: ReactNode
}

export default function OwnerLayout({ children }: OwnerLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Owner dashboard layout wrapper */}
      {children}
    </div>
  )
}