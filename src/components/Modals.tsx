import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Star, Send, ChevronRight, CheckCircle2, Code, MessageCircle } from 'lucide-react';

interface ModalsProps {
  activeModal: string | null;
  closeModal: () => void;
  openModal: (modalName: string) => void;
}

const WHATSAPP_NUMBER = "5541988710303"; // Replace with actual client number later, using dev number for now as requested for developer, but client needs one too. Prompt says "para o número específico do whatsapp em uma mensagem personalizada". I will use the dev number for dev modal, and a placeholder or the same for client until specified. Actually, I'll use a placeholder for client. Let's use 5541900000000.

export default function Modals({ activeModal, closeModal, openModal }: ModalsProps) {
  if (!activeModal) return null;

  return (
    <AnimatePresence>
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1 p-6 sm:p-8 custom-scrollbar">
              {activeModal?.startsWith('schedule') && <ScheduleModal closeModal={closeModal} prefilledService={activeModal.split('|')[1]} />}
              {activeModal === 'contact' && <ContactModal closeModal={closeModal} />}
              {activeModal === 'location' && <LocationModal />}
              {activeModal === 'review' && <ReviewModal closeModal={closeModal} />}
              {activeModal === 'developer' && <DeveloperModal closeModal={closeModal} />}
              {activeModal?.startsWith('service_') && <ServiceModal serviceId={activeModal} closeModal={closeModal} openModal={openModal} />}
              {activeModal === 'facebook_construction' && (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold text-gradient-gold mb-4">Em Construção</h2>
                  <p className="text-gray-600">Nossa página do Facebook estará disponível em breve!</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// --- Individual Modals ---

const serviceDetails = [
  { 
    title: "Avaliação Neuropsicológica", 
    desc: "Investigação detalhada das funções cognitivas, comportamentais e emocionais a partir dos 6 anos de idade.",
    example: "Identificar TDAH, dislexia ou altas habilidades em crianças que apresentam dificuldades ou facilidades extremas na escola, orientando o melhor caminho para o desenvolvimento."
  },
  { 
    title: "Psicoterapia", 
    desc: "Acompanhamento focado no bem-estar emocional, autoconhecimento e resolução de conflitos internos.",
    example: "Aprender a lidar com crises de ansiedade no trabalho ou na vida pessoal através de técnicas de regulação emocional e ressignificação de pensamentos."
  },
  { 
    title: "Palestras", 
    desc: "Compartilhamento de conhecimento e estratégias de saúde mental para grupos, empresas e instituições.",
    example: "Workshop interativo em empresas sobre como prevenir o Burnout, gerenciar o estresse e manter a saúde mental no ambiente corporativo."
  },
  { 
    title: "Supervisão Clínica", 
    desc: "Apoio e direcionamento para profissionais da psicologia em seus atendimentos clínicos.",
    example: "Discussão aprofundada de casos complexos para encontrar a melhor abordagem terapêutica, garantindo um atendimento ético e eficaz ao paciente."
  },
  { 
    title: "Supervisão em Avaliação", 
    desc: "Orientação técnica especializada na escolha, aplicação e correção de testes neuropsicológicos.",
    example: "Auxílio na interpretação de resultados de testes específicos e na elaboração de laudos neuropsicológicos precisos e bem fundamentados."
  },
  { 
    title: "Orientação para Pais", 
    desc: "Suporte e psicoeducação para lidar com os desafios do desenvolvimento infantil e da parentalidade.",
    example: "Desenvolver estratégias práticas para lidar com birras, estabelecer limites saudáveis e melhorar a comunicação sem perder a conexão afetiva com a criança."
  },
  { 
    title: "Consultoria Escolar", 
    desc: "Parceria com educadores e instituições de ensino para promover a inclusão e o aprendizado.",
    example: "Orientação na adaptação de materiais, rotinas e abordagens pedagógicas para alunos com necessidades educacionais especiais ou dificuldades de aprendizagem."
  },
];

function ServiceModal({ serviceId, closeModal, openModal }: { serviceId: string, closeModal: () => void, openModal: (m: string) => void }) {
  const idx = parseInt(serviceId.split('_')[1]);
  const service = serviceDetails[idx];

  if (!service) return null;

  return (
    <div className="text-left">
      <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mb-6 border border-gold-100">
        <Star className="w-8 h-8 text-gold-500" />
      </div>
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.title}</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-bold text-gold-600 uppercase tracking-wider mb-2">Sobre o Serviço</h3>
          <p className="text-gray-600 leading-relaxed">{service.desc}</p>
        </div>
        
        <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1 h-full bg-gold-400"></div>
          <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold-500" /> Exemplo Prático
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed italic">
            "{service.example}"
          </p>
        </div>
      </div>

      <button 
        onClick={() => {
          closeModal();
          setTimeout(() => openModal(`schedule|${encodeURIComponent(service.title)}`), 300);
        }}
        className="w-full mt-8 py-3 btn-gold-metallic text-white font-semibold rounded-xl transition-all"
      >
        Entendi, quero agendar
      </button>
    </div>
  );
}

function ScheduleModal({ closeModal, prefilledService }: { closeModal: () => void, prefilledService?: string }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    age: '', 
    type: prefilledService ? decodeURIComponent(prefilledService) : '', 
    reason: '' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de agendar um atendimento.%0A%0A*Nome:* ${formData.name}%0A*Idade:* ${formData.age}%0A*Serviço de interesse:* ${formData.type}%0A*Motivo:* ${formData.reason}`;
    window.open(`https://wa.me/5541900000000?text=${text}`, '_blank');
    closeModal();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gradient-gold mb-2">Agende seu atendimento</h2>
      <p className="text-sm text-gradient-gold mb-6">Dê o primeiro passo para cuidar de você. Preencha os dados abaixo para agilizarmos seu atendimento.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Idade</label>
          <input required type="number" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Serviço de interesse</label>
          <select required className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-white" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
            <option value="">Selecione...</option>
            <option value="Avaliação Neuropsicológica">Avaliação Neuropsicológica</option>
            <option value="Psicoterapia">Psicoterapia</option>
            <option value="Palestras">Palestras</option>
            <option value="Supervisão Clínica">Supervisão Clínica</option>
            <option value="Supervisão em Avaliação">Supervisão em Avaliação</option>
            <option value="Orientação para Pais">Orientação para Pais</option>
            <option value="Consultoria Escolar">Consultoria Escolar</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Motivo (breve relato)</label>
          <textarea required rows={3} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all resize-none" value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})}></textarea>
        </div>
        
        <div className="pt-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Serviços Prestados:</h3>
          <ul className="text-xs text-gray-500 space-y-1 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-1">
            <li>• Avaliação Neuropsicológica (a partir 6 anos)</li>
            <li>• Psicoterapia</li>
            <li>• Palestras</li>
            <li>• Supervisão clínica</li>
            <li>• Supervisão em avaliação neuropsicológica</li>
            <li>• Orientação para pais</li>
            <li>• Consultoria para professores</li>
          </ul>
        </div>

        <button type="submit" className="w-full py-3 btn-gold-metallic text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
          <Send className="w-4 h-4" /> Enviar para WhatsApp
        </button>
      </form>
    </div>
  );
}

function ContactModal({ closeModal }: { closeModal: () => void }) {
  const [formData, setFormData] = useState({ name: '', age: '', reason: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de entrar em contato.%0A%0A*Nome:* ${formData.name}%0A*Idade:* ${formData.age}%0A*Motivo do contato:* ${formData.reason}`;
    window.open(`https://wa.me/5541900000000?text=${text}`, '_blank');
    closeModal();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gradient-gold mb-2">Fale Conosco</h2>
      <p className="text-sm text-gradient-gold mb-6">Preencha os dados abaixo para iniciarmos nossa conversa.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Idade</label>
          <input required type="number" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Motivo do contato</label>
          <textarea required rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all resize-none" value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})}></textarea>
        </div>
        
        <button type="submit" className="w-full py-3 mt-4 btn-gold-metallic text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
          <Send className="w-4 h-4" /> Confirmar e Enviar
        </button>
      </form>
    </div>
  );
}

function LocationModal() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-gradient-gold mb-2">Nossa Localização</h2>
      <p className="text-sm text-gradient-gold mb-4 flex items-start gap-2">
        <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
        <span>Edifício Clinical Tower - R. Cel. Dulcídio, 1317 - 5º andar, sala 58 - Centro, Ponta Grossa - PR, 84010-280</span>
      </p>
      
      <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200 mb-4 flex-shrink-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.364369336558!2d-50.1623649!3d-25.0895243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81bd573d398dd%3A0x982413eadde44b19!2sPsic%C3%B3loga%20Elaine%20Ferreira!5e0!3m2!1spt-BR!2sbr!4v1775236048917!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <a 
        href="https://maps.app.goo.gl/YOUR_LINK_HERE" // Replace with actual maps link if needed, or just use a generic search
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 btn-gold-metallic text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 mt-auto"
      >
        Abrir no Google Maps <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function ReviewModal({ closeModal }: { closeModal: () => void }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleRating = (rate: number) => {
    setRating(rate);
    if (rate === 5) {
      window.open('https://search.google.com/local/writereview?placeid=ChIJ3ZjTc9Ub6JQRGUvk3eoTJJg', '_blank');
      closeModal();
    } else {
      setShowFeedback(true);
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use formsubmit.co or similar
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/your-email@example.com'; // Replace with actual email
    form.target = '_blank';
    
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'Feedback';
    input.value = `Rating: ${rating} stars. Feedback: ${feedback}`;
    
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    closeModal();
  };

  if (showFeedback) {
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Como podemos melhorar?</h2>
        <p className="text-sm text-gray-500 mb-4">Sentimos muito que sua experiência não tenha sido 5 estrelas. Por favor, nos conte o que aconteceu.</p>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea 
            required 
            rows={4} 
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all resize-none mb-4" 
            placeholder="Sua mensagem..."
            value={feedback} 
            onChange={e => setFeedback(e.target.value)}
          ></textarea>
          <button type="submit" className="w-full py-3 btn-gold-metallic text-white font-semibold rounded-xl transition-all">
            Enviar Feedback
          </button>
        </form>
      </motion.div>
    );
  }

  return (
    <div className="text-center py-4">
      <h2 className="text-2xl font-bold text-gradient-gold mb-2">Avalie nosso atendimento</h2>
      <p className="text-sm text-gradient-gold mb-8">Sua opinião é muito importante para nós!</p>
      
      <div className="flex justify-center gap-2 mb-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="focus:outline-none transition-transform hover:scale-110"
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <Star 
              className={`w-10 h-10 sm:w-12 sm:h-12 ${
                star <= (hover || rating) 
                  ? 'fill-gold-400 text-gold-400' 
                  : 'text-gray-300'
              } transition-colors duration-200`} 
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function DeveloperModal({ closeModal }: { closeModal: () => void }) {
  const [clientName, setClientName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${clientName}. Vi o site da Dra. Elaine Ferreira Machado e gostaria de ter um site elegante e moderno como o dela!`;
    window.open(`https://wa.me/5541988710303?text=${text}`, '_blank');
    closeModal();
  };

  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform rotate-3">
        <Code className="w-10 h-10 text-gold-400" />
      </div>
      
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">InteligenciArte.IA</h2>
      <p className="text-sm text-gray-500 mb-6">Desenvolvimento de soluções digitais modernas, elegantes e exclusivas.</p>
      
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-left">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-500" /> Quer um site incrível como esse?
        </h3>
        <p className="text-sm text-gray-600 mb-4">Basta entrar em contato! Preencha seu nome abaixo e fale comigo diretamente pelo WhatsApp.</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            required 
            type="text" 
            placeholder="Seu nome"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all mb-3 bg-white" 
            value={clientName} 
            onChange={e => setClientName(e.target.value)} 
          />
          <button type="submit" className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
            <MessageCircle className="w-5 h-5" /> Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
