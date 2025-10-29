import React, { useMemo, useState } from 'react';
import { Search, Clipboard, History } from 'lucide-react';

function detectType(input) {
  if (!input) return null;
  const trimmed = input.trim();
  const ipv4 = /^(25[0-5]|2[0-4]\d|[01]?\d?\d)(\.(25[0-5]|2[0-4]\d|[01]?\d?\d)){3}$/;
  const ipv6 = /^(?:[A-Fa-f0-9]{1,4}:){7}[A-Fa-f0-9]{1,4}$/;
  const domain = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  const url = /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#\[\]@!$&'()*+,;=.]+$/i;
  const md5 = /^[a-fA-F0-9]{32}$/;
  const sha1 = /^[a-fA-F0-9]{40}$/;
  const sha256 = /^[a-fA-F0-9]{64}$/;

  if (ipv4.test(trimmed)) return 'IPv4 address';
  if (ipv6.test(trimmed)) return 'IPv6 address';
  if (url.test(trimmed)) return 'URL';
  if (domain.test(trimmed)) return 'Domain';
  if (sha256.test(trimmed)) return 'SHA-256 hash';
  if (sha1.test(trimmed)) return 'SHA-1 hash';
  if (md5.test(trimmed)) return 'MD5 hash';
  return 'Artifact';
}

export default function UniversalSearch() {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const type = useMemo(() => detectType(value), [value]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setHistory((h) => [value.trim(), ...h.filter((v) => v !== value.trim())].slice(0, 8));
  };

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setValue(text);
    } catch {}
  };

  return (
    <section id="search" className="relative mx-auto -mt-12 max-w-4xl rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-white shadow-xl backdrop-blur">
      <form onSubmit={onSubmit} className="flex items-center gap-3">
        <div className="flex flex-1 items-center gap-3 rounded-lg bg-slate-800/80 px-3 py-2">
          <Search className="h-5 w-5 text-emerald-400" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Paste an IP, domain, URL, or hash to triage…"
            className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
          />
          <span className="rounded bg-slate-700/60 px-2 py-1 text-xs text-slate-300">{type || 'Artifact'}</span>
        </div>
        <button
          type="button"
          onClick={pasteFromClipboard}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
        >
          <Clipboard className="h-4 w-4" /> Paste
        </button>
        <button
          type="submit"
          className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400"
        >
          Triage
        </button>
      </form>

      {history.length > 0 && (
        <div className="mt-5">
          <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
            <History className="h-3.5 w-3.5" /> Recent
          </div>
          <div className="flex flex-wrap gap-2">
            {history.map((h) => (
              <button
                key={h}
                onClick={() => setValue(h)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 hover:bg-white/10"
              >
                {h}
              </button>
            ))}
            <button
              onClick={() => setHistory([])}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 hover:bg-white/10"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-slate-800/60 p-4">
          <p className="text-sm text-slate-300">Reads public APIs only. No scanning or exploitation. Your queries stay local.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-800/60 p-4">
          <p className="text-sm text-slate-300">Auto-detects artifact type and prepares vendor lookups.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-800/60 p-4">
          <p className="text-sm text-slate-300">Export reports with sources, timestamps, and analyst notes.</p>
        </div>
      </div>
    </section>
  );
}
