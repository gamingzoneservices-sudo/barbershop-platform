'use client'

import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { Skeleton } from '@/components/ui/Skeleton'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero placeholder */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white">
              Where Craft Meets Art
            </h1>
            <p className="mt-4 text-text-secondary text-lg md:text-xl">
              Luxury Barbershop · Berlin
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Book Your Appointment
              </Button>
              <Button variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Component showcase */}
      <section className="section-padding container-custom">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
          Component Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 text-center">
            <h3 className="text-xl font-display text-white">Glass Card</h3>
            <p className="text-text-secondary mt-2">With hover effect</p>
            <Button variant="primary" size="sm" className="mt-4">
              Action
            </Button>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <LoadingSpinner />
            <p className="text-text-secondary mt-2">Loading Spinner</p>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <Skeleton className="h-12 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
            <p className="text-text-secondary mt-4">Skeleton Loading</p>
          </GlassCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="glass">Glass</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>
    </main>
  )
}