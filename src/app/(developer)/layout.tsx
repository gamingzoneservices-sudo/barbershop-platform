import { ReactNode } from 'react'

interface DeveloperLayoutProps {
  children: ReactNode
}

export default function DeveloperLayout({ children }: DeveloperLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}