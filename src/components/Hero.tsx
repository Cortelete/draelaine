import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import CoinLogo from './CoinLogo';

export default function Hero({ openModal }: { openModal: (m: string) => void }) {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#faf9f6]">
      {/* Background Watermark */}
      <div className="absolute left-[-15%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <img src="/iniciais.png" alt="" className="w-[800px] h-[800px] object-contain" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <CoinLogo src="/iniciais.png" alt="Logo Dra. Elaine Ferreira" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
        >
          SAÚDE EMOCIONAL E BEM-ESTAR <br />
          <span className="text-gradient-gold">PARA SUA VIDA</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl font-light"
        >
          Atendimento psicológico com acolhimento, escuta e estratégias práticas para o seu dia a dia.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => openModal('schedule')}
          className="mt-10 btn-gold-metallic text-white px-8 py-4 rounded text-sm font-bold tracking-widest transition-all hover:-translate-y-1"
        >
          AGENDAR CONSULTA
        </motion.button>
      </div>

      <motion.a 
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-gold-500 transition-colors"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
