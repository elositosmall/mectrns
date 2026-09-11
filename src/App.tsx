import { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mectransformation',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.3 0 .59.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.15 15.7 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.34-6.34V9.01a8.27 8.27 0 0 0 4.76 1.5V7.06a4.83 4.83 0 0 1-1-.37z"/>
        </svg>
      ),
      color: 'hover:bg-black hover:text-white',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mectransformation',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/mectransformation',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:bg-blue-600 hover:text-white',
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#fdf6f0] via-[#f5ebe0] to-[#d5c4a1]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#e8d5c4] opacity-30 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#c9b8a8] opacity-20 blur-3xl"></div>
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] rounded-full bg-[#f0e6d8] opacity-40 blur-2xl"></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center px-6 py-12 max-w-md w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Profile image / Logo area */}
        <div className="w-28 h-28 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-white/50">
          <img 
            src="https://image.qwenlm.ai/generated-images/7e3b7650-c0ba-41ae-b1f6-870d34c17ebd/_result.png" 
            alt="Mectransformation Logo" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and tagline */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#4a3728] text-center mb-2">
          Mectransformation
        </h1>
        <p className="text-[#7a6352] text-center text-sm md:text-base mb-2 max-w-xs">
          Transformación mental desde el corazón
        </p>
        <p className="text-[#9a8572] text-center text-xs md:text-sm mb-8 max-w-xs italic">
          Mentoría · Terapia · Cursos en video
        </p>

        {/* Main CTA Button - Web Principal */}
        <a
          href="https://mec-transformation.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mb-4 px-6 py-4 bg-gradient-to-r from-[#8b6f47] to-[#a0845c] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center gap-3"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          Visitar Web Principal
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/593984662083?text=Hola%20Rebeca%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Mectransformation."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mb-8 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center gap-3"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Escríbenos por WhatsApp
        </a>

        {/* Divider */}
        <div className="w-full flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#c9b8a8]/50"></div>
          <span className="text-[#9a8572] text-xs uppercase tracking-wider">Síguenos</span>
          <div className="flex-1 h-px bg-[#c9b8a8]/50"></div>
        </div>

        {/* Social media buttons */}
        <div className="flex items-center gap-5 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className={`w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-[#d5c4a1]/50 flex items-center justify-center text-[#6b5744] shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Social labels */}
        <div className="flex items-center gap-5 mb-8">
          {socialLinks.map((link) => (
            <span key={link.name} className="text-xs text-[#9a8572] w-14 text-center">
              {link.name}
            </span>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-[#9a8572] text-xs text-center mt-4">
          © 2025 Mectransformation. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default App;
