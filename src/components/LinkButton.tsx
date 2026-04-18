import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface LinkButtonProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  primary?: boolean;
}

export default function LinkButton({ icon, title, subtitle, onClick, href, external, primary }: LinkButtonProps) {
  const content = (
    <div className={`relative flex items-center p-4 sm:p-5 w-full rounded-2xl overflow-hidden transition-all duration-300 ${
      primary 
        ? 'bg-white border border-brand-300 shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm border border-white/50 shadow-md'
    }`}>
      {/* Icon container */}
      <div className={`absolute left-4 sm:left-5 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${
        primary ? 'bg-brand-50' : 'bg-gray-50'
      }`}>
        {icon}
      </div>
      
      {/* Text container */}
      <div className="w-full text-center pl-12 sm:pl-16 pr-4">
        <h3 className={`text-sm sm:text-base font-semibold ${primary ? 'text-brand-600' : 'text-gray-800'}`}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5 line-clamp-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
    </div>
  );

  const motionProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    className: "w-full block group"
  };

  if (href) {
    return (
      <motion.a 
        href={href} 
        target={external ? "_blank" : "_self"} 
        rel={external ? "noopener noreferrer" : ""}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  );
}
