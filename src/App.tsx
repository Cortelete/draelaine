/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Modals from './components/Modals';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-gray-800 overflow-x-hidden selection:bg-gold-200 selection:text-gray-900">
      <Navbar openModal={openModal} />
      
      <main>
        <Hero openModal={openModal} />
        <Services openModal={openModal} />
        <About />
      </main>
      
      <Footer openModal={openModal} />
      <FloatingWhatsApp openModal={openModal} />
      
      <Modals activeModal={activeModal} closeModal={closeModal} openModal={openModal} />
    </div>
  );
}
