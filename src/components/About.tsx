import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for professional photo */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Dra. Elaine Ferreira" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-gold-200 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre a Profissional</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">Elaine Ferreira</strong> é psicóloga dedicada ao cuidado com a saúde emocional e bem-estar de seus pacientes.
              </p>
              <p>
                Seu trabalho é baseado em uma escuta atenta e acolhedora, oferecendo um espaço seguro para que cada pessoa possa se expressar, se compreender melhor e desenvolver novas formas de lidar com seus desafios.
              </p>
              <blockquote className="p-6 bg-white border-l-4 border-gold-500 shadow-sm italic text-gray-700">
                "Com atendimentos personalizados, busco auxiliar no fortalecimento emocional, promovendo mais equilíbrio, clareza e qualidade de vida."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
