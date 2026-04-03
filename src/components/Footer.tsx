import { Instagram, MapPin, Code } from 'lucide-react';

export default function Footer({ openModal }: { openModal: (m: string) => void }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-gold-400 mb-4">Dra. Elaine Ferreira</h3>
            <p className="text-gray-400 text-sm">Psicologia Clínica e Avaliação Neuropsicológica.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-gold-400 mb-4">Contato</h3>
            <button onClick={() => openModal('location')} className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm text-left">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span>Edifício Clinical Tower - R. Cel. Dulcídio, 1317 - 5º andar, sala 58 - Centro, Ponta Grossa - PR</span>
            </button>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-gold-400 mb-4">Redes Sociais</h3>
            <a href="https://www.instagram.com/psi.elainemachado" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
              <span>@psi.elainemachado</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Dra. Elaine Ferreira Machado. Todos os direitos reservados.</p>
          <button 
            onClick={() => openModal('developer')}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gold-400 transition-colors"
          >
            <Code className="w-4 h-4" />
            <span>Desenvolvido por InteligenciArte.IA ✨</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
