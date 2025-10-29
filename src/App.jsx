import React from 'react';
import Hero from './components/Hero';
import UniversalSearch from './components/UniversalSearch';
import FeatureSections from './components/FeatureSections';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <main className="mx-auto -mt-28 max-w-6xl px-6">
        <UniversalSearch />
        <FeatureSections />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
