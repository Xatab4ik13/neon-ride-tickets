const AnimatedMotorcycle = () => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-end">
      {/* Motorcycle SVG - compact size for mini app */}
      <div className="relative animate-motorcycle z-10 mr-1">
        <svg 
          width="140" 
          height="80" 
          viewBox="0 0 280 160" 
          className="drop-shadow-[0_0_15px_hsl(300_100%_65%)]"
        >
          <defs>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(300 100% 65%)" />
              <stop offset="50%" stopColor="hsl(320 100% 70%)" />
              <stop offset="100%" stopColor="hsl(300 100% 65%)" />
            </linearGradient>
          </defs>

          <g filter="url(#neonGlow)">
            {/* Back wheel */}
            <circle cx="55" cy="120" r="32" fill="none" stroke="hsl(300 100% 65%)" strokeWidth="5" />
            <circle cx="55" cy="120" r="12" fill="hsl(300 100% 65% / 0.4)" stroke="hsl(300 100% 65%)" strokeWidth="3" />
            
            {/* Front wheel */}
            <circle cx="225" cy="120" r="32" fill="none" stroke="hsl(300 100% 65%)" strokeWidth="5" />
            <circle cx="225" cy="120" r="12" fill="hsl(300 100% 65% / 0.4)" stroke="hsl(300 100% 65%)" strokeWidth="3" />
            
            {/* Main frame */}
            <path d="M55 120 L100 70 L170 65 L225 120" fill="none" stroke="url(#neonGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Swingarm */}
            <path d="M55 120 L95 95" fill="none" stroke="hsl(300 100% 65%)" strokeWidth="4" strokeLinecap="round" />
            
            {/* Body/Fuel Tank */}
            <path d="M90 75 Q115 40 155 50 L170 65 L105 72 Z" fill="hsl(300 100% 65% / 0.5)" stroke="hsl(300 100% 65%)" strokeWidth="3" />
            
            {/* Seat */}
            <path d="M100 72 Q120 55 150 58 L145 70 L100 72 Z" fill="hsl(300 100% 65% / 0.7)" stroke="hsl(300 100% 65%)" strokeWidth="2" />
            
            {/* Handlebar */}
            <path d="M170 65 L200 40 M192 35 L210 45" fill="none" stroke="hsl(300 100% 65%)" strokeWidth="4" strokeLinecap="round" />
            
            {/* Front fork */}
            <path d="M185 70 L225 120" fill="none" stroke="hsl(300 100% 65%)" strokeWidth="5" strokeLinecap="round" />
            
            {/* Engine block */}
            <rect x="85" y="85" width="45" height="28" rx="4" fill="hsl(300 100% 65% / 0.4)" stroke="hsl(300 100% 65%)" strokeWidth="3" />
            
            {/* Exhaust */}
            <path d="M65 105 L45 108 L30 115" fill="none" stroke="hsl(300 100% 65%)" strokeWidth="4" strokeLinecap="round" />
            
            {/* Headlight */}
            <circle cx="215" cy="65" r="8" fill="hsl(300 100% 65%)" className="animate-pulse" />
            <circle cx="215" cy="65" r="14" fill="hsl(300 100% 65% / 0.3)" />
          </g>
        </svg>
      </div>
      
      {/* Subtle glow under motorcycle */}
      <div 
        className="absolute bottom-1 right-4 w-32 h-4 rounded-full blur-xl"
        style={{ background: 'hsl(300 100% 65% / 0.4)' }}
      />
    </div>
  );
};

export default AnimatedMotorcycle;
