import React from 'react';
import { NexovNeuralNetwork } from './NexovNeuralNetwork';

export const EcosystemSection: React.FC = () => (
  <section id="ecosystem" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="badge mb-5 inline-block">ECOSYSTEM MATRIX</span>
      <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4" style={{ color: '#0f172a' }}>
        Integrated Digital{' '}
        <span className="text-gradient">Ecosystem.</span>
      </h2>
      <p className="text-base md:text-lg" style={{ color: '#64748b' }}>
        Every product, capability, and research experiment converges into a single unified technology matrix.
      </p>
    </div>
    <NexovNeuralNetwork />
  </section>
);
