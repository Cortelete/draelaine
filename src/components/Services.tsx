import { motion } from 'motion/react';
import { Brain, Heart, Users, BookOpen, GraduationCap, UserPlus, Presentation } from 'lucide-react';

const services = [
  { icon: Brain, title: "Avaliação Neuropsicológica", desc: "A partir dos 6 anos de idade." },
  { icon: Heart, title: "Psicoterapia", desc: "Ansiedade, estresse, conflitos e autoconhecimento." },
  { icon: Presentation, title: "Palestras", desc: "Eventos e workshops sobre saúde mental." },
  { icon: GraduationCap, title: "Supervisão Clínica", desc: "Orientação para profissionais da psicologia." },
  { icon: BookOpen, title: "Supervisão em Avaliação", desc: "Apoio técnico em neuropsicologia." },
  { icon: Users, title: "Orientação para Pais", desc: "Suporte no desenvolvimento infantil." },
  { icon: UserPlus, title: "Consultoria Escolar", desc: "Orientação para professores e escolas." },
];

export default function Services({ openModal }: { openModal: (m: string) => void }) {
  return (
    <section id="atuacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Áreas de Atuação</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => openModal(`service_${idx}`)}
              className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl hover:border-gold-300 transition-all bg-[#faf9f6] group cursor-pointer"
            >
              <service.icon className="w-10 h-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
