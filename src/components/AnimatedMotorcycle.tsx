const AnimatedMotorcycle = () => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-end justify-end">
      {/* Moving road/ground effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 animate-road"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            hsl(300 100% 65% / 0.4) 60px,
            hsl(300 100% 65% / 0.4) 120px
          )`,
        }}
      />
      
      {/* Speed lines - enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-primary/80 to-transparent animate-road"
            style={{
              left: `${(i % 4) * 25}%`,
              top: `${10 + (i * 7)}%`,
              width: `${50 + Math.random() * 80}px`,
              animationDelay: `${i * 0.08}s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Motorcycle SVG with enhanced neon glow */}
      <div className="relative animate-motorcycle z-10 mr-4 mb-8">
        <svg 
          width="280" 
          height="160" 
          viewBox="0 0 280 160" 
          className="drop-shadow-[0_0_25px_hsl(300_100%_65%)]"
        >
          {/* Outer glow effect */}
          <defs>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
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
            <circle 
              cx="55" cy="120" r="32" 
              fill="none" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="5"
            />
            <circle 
              cx="55" cy="120" r="22" 
              fill="none" 
              stroke="hsl(300 100% 65% / 0.5)" 
              strokeWidth="2"
            />
            <circle 
              cx="55" cy="120" r="12" 
              fill="hsl(300 100% 65% / 0.4)" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="3"
            />
            {/* Wheel spokes */}
            {[0, 45, 90, 135].map((angle) => (
              <line
                key={angle}
                x1="55"
                y1="120"
                x2={55 + 28 * Math.cos((angle * Math.PI) / 180)}
                y2={120 + 28 * Math.sin((angle * Math.PI) / 180)}
                stroke="hsl(300 100% 65% / 0.6)"
                strokeWidth="2"
              />
            ))}
            
            {/* Front wheel */}
            <circle 
              cx="225" cy="120" r="32" 
              fill="none" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="5"
            />
            <circle 
              cx="225" cy="120" r="22" 
              fill="none" 
              stroke="hsl(300 100% 65% / 0.5)" 
              strokeWidth="2"
            />
            <circle 
              cx="225" cy="120" r="12" 
              fill="hsl(300 100% 65% / 0.4)" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="3"
            />
            {/* Wheel spokes */}
            {[0, 45, 90, 135].map((angle) => (
              <line
                key={angle}
                x1="225"
                y1="120"
                x2={225 + 28 * Math.cos((angle * Math.PI) / 180)}
                y2={120 + 28 * Math.sin((angle * Math.PI) / 180)}
                stroke="hsl(300 100% 65% / 0.6)"
                strokeWidth="2"
              />
            ))}
            
            {/* Main frame */}
            <path 
              d="M55 120 L100 70 L170 65 L225 120" 
              fill="none" 
              stroke="url(#neonGradient)" 
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Swingarm */}
            <path 
              d="M55 120 L95 95" 
              fill="none" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="4"
              strokeLinecap="round"
            />
            
            {/* Body/Fuel Tank */}
            <path 
              d="M90 75 Q115 40 155 50 L170 65 L105 72 Z" 
              fill="hsl(300 100% 65% / 0.5)" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="3"
            />
            
            {/* Seat */}
            <path 
              d="M100 72 Q120 55 150 58 L145 70 L100 72 Z" 
              fill="hsl(300 100% 65% / 0.7)" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="2"
            />
            
            {/* Handlebar */}
            <path 
              d="M170 65 L200 40 M192 35 L210 45" 
              fill="none" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="4"
              strokeLinecap="round"
            />
            
            {/* Front fork */}
            <path 
              d="M185 70 L225 120" 
              fill="none" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="5"
              strokeLinecap="round"
            />
            
            {/* Engine block */}
            <rect 
              x="85" y="85" 
              width="45" height="28" 
              rx="4"
              fill="hsl(300 100% 65% / 0.4)" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="3"
            />
            {/* Engine details */}
            <line x1="95" y1="90" x2="95" y2="108" stroke="hsl(300 100% 65% / 0.8)" strokeWidth="2" />
            <line x1="105" y1="90" x2="105" y2="108" stroke="hsl(300 100% 65% / 0.8)" strokeWidth="2" />
            <line x1="115" y1="90" x2="115" y2="108" stroke="hsl(300 100% 65% / 0.8)" strokeWidth="2" />
            
            {/* Exhaust pipes */}
            <path 
              d="M65 105 L45 108 L30 115 L20 118" 
              fill="none" 
              stroke="hsl(300 100% 65%)" 
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="20" cy="118" r="4" fill="hsl(300 100% 65% / 0.6)" />
            
            {/* Headlight - animated glow */}
            <circle 
              cx="215" cy="65" r="10" 
              fill="hsl(300 100% 65%)"
              className="animate-pulse"
            />
            <circle 
              cx="215" cy="65" r="18" 
              fill="hsl(300 100% 65% / 0.3)"
            />
            <circle 
              cx="215" cy="65" r="25" 
              fill="hsl(300 100% 65% / 0.15)"
            />
            
            {/* Tail light */}
            <circle 
              cx="55" cy="75" r="5" 
              fill="hsl(0 100% 50%)"
              className="animate-pulse"
            />
            <circle 
              cx="55" cy="75" r="10" 
              fill="hsl(0 100% 50% / 0.3)"
            />
          </g>
        </svg>
      </div>
      
      {/* Enhanced glow effect under motorcycle */}
      <div 
        className="absolute bottom-8 right-8 w-56 h-8 rounded-full blur-2xl animate-pulse"
        style={{ background: 'hsl(300 100% 65% / 0.5)' }}
      />
      
      {/* Additional ambient glow */}
      <div 
        className="absolute bottom-0 right-0 w-full h-32 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at bottom right, hsl(300 100% 65% / 0.2) 0%, transparent 70%)' 
        }}
      />
    </div>
  );
};

export default AnimatedMotorcycle;
