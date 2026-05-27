/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import JourneyMap from './components/JourneyMap';
import WineCollection from './components/WineCollection';
import WeddingKit from './components/WeddingKit';
import Concierge from './components/Concierge';
import SommelierMockup from './components/SommelierMockup';

export default function App() {
  return (
    <main className="relative bg-sand selection:bg-bronze/30 selection:text-clay">
      <CustomCursor />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Heritage />
        <JourneyMap />
        <WineCollection />
        <WeddingKit />
        <Concierge />
      </div>

      <SommelierMockup />
    </main>
  );
}
