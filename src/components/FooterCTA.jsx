import React from 'react';
import { Lock, Settings, FileDown } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Privacy, safety, and ethics by default</h3>
          <p className="mt-2 max-w-prose text-sm text-slate-300">
            This toolkit is for defensive security only. All requests are read-only, follow provider TOS, and are logged locally for transparency. Reports include PII-aware redaction options.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1">
              <Lock className="h-4 w-4 text-emerald-400" /> TLS-only, optional pinning
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1">
              <Settings className="h-4 w-4 text-emerald-400" /> Bring your own API keys
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <a
            href="#search"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-400"
          >
            <FileDown className="h-4 w-4" /> Generate sample report
          </a>
          <p className="text-xs text-slate-400">Free core features. Pro tier unlocks multi-workspace and advanced exports.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} CortexSweep • For lawful, defensive use only
      </div>
    </footer>
  );
}
