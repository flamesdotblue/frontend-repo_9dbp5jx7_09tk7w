import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Shield className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-white/90">Defensive-only | Read‑only OSINT & Threat Intel</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          CortexSweep
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Mobile-first toolkit that unifies lawful reconnaissance, incident triage, and malware intelligence. Read-only aggregations. No active scanning.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#search"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <Rocket className="h-4 w-4" />
            Start triage
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Explore features
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/95 to-transparent" />
    </section>
  );
}
