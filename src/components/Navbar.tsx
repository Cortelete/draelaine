import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ openModal }: { openModal: (m: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="font-serif font-semibold text-gray-900 tracking-widest text-sm sm:text-base">
            PSICÓLOGA ELAINE FERREIRA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-gray-600">
          <a href="#inicio" className="hover:text-brand-500 transition-colors">INÍCIO</a>
          <a href="#sobre" className="hover:text-brand-500 transition-colors">SOBRE</a>
          <a href="#atuacao" className="hover:text-brand-500 transition-colors">ATUAÇÃO</a>
          <button onClick={() => openModal('contact')} className="hover:text-brand-500 transition-colors uppercase tracking-widest">Contato</button>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => openModal('schedule')}
            className="btn-primary text-white px-6 py-2.5 rounded text-xs font-bold tracking-wider transition-all hover:-translate-y-0.5"
          >
            AGENDAR CONSULTA
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden"
          >
            <div className="py-4 px-6 flex flex-col gap-4">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-gray-800 tracking-widest">INÍCIO</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-gray-800 tracking-widest">SOBRE</a>
              <a href="#atuacao" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-gray-800 tracking-widest">ATUAÇÃO</a>
              <button onClick={() => { openModal('contact'); setMobileMenuOpen(false); }} className="text-sm font-semibold text-gray-800 text-left tracking-widest">CONTATO</button>
              <div className="pt-4 border-t border-gray-100">
                <button 
                  onClick={() => { openModal('schedule'); setMobileMenuOpen(false); }}
                  className="w-full bg-brand-500 text-white px-4 py-3 rounded text-sm font-bold tracking-widest text-center"
                >
                  AGENDAR CONSULTA
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
