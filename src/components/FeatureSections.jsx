import React from 'react';
import { Search, Server, Bug, Globe, FileText, Shield } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-5 w-5 text-emerald-400" />,
    title: 'Indicator triage',
    desc: 'Paste IPs, domains, URLs, or hashes to consolidate reputation, passive DNS, and related indicators.'
  },
  {
    icon: <Server className="h-5 w-5 text-emerald-400" />,
    title: 'Surface scan review',
    desc: 'Fetch assets by org or ASN from Shodan and Censys and group by service and exposure risk.'
  },
  {
    icon: <Bug className="h-5 w-5 text-emerald-400" />,
    title: 'Malware intel',
    desc: 'VirusTotal verdicts, sandbox behavior summaries, URLScan and Hybrid-Analysis lookups.'
  },
  {
    icon: <Globe className="h-5 w-5 text-emerald-400" />,
    title: 'Reputation/telemetry',
    desc: 'GreyNoise, AbuseIPDB, OTX, ThreatFox, and passive DNS context from trusted sources.'
  },
  {
    icon: <FileText className="h-5 w-5 text-emerald-400" />,
    title: 'Vulnerability context',
    desc: 'CVE/NVD with CVSS and EPSS. Maps discovered services to relevant advisories.'
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Compliance-first',
    desc: 'Read-only to public or user-authorized APIs. Logs queries locally for transparency.'
  }
];

const workflows = [
  {
    title: 'Indicator triage',
    steps: ['Paste artifact', 'Query vendors', 'Review verdict & related IOCs', 'Export report']
  },
  {
    title: 'Surface scan review',
    steps: ['Enter org or ASN', 'Pull assets', 'Group by exposure risk', 'Map to CVEs']
  },
  {
    title: 'Incident case',
    steps: ['Create case', 'Add multiple indicators', 'Annotate & tag', 'Export signed report']
  }
];

export default function FeatureSections() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 text-white">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Built for blue teams and OSINT researchers</h2>
      <p className="mt-2 max-w-2xl text-slate-300">Clean, mobile-first experience. Bottom-tab navigation with Search, Assets, Cases, Reports, and Settings.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
            <div className="mb-3 inline-flex items-center justify-center rounded-md bg-emerald-500/10 p-2">
              {f.icon}
            </div>
            <h3 className="text-lg font-medium">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {workflows.map((w) => (
          <div key={w.title} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
            <h4 className="text-base font-medium">{w.title}</h4>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300">
              {w.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
