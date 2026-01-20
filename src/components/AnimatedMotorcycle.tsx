const AnimatedMotorcycle = () => {
  return (
    <div className="relative w-full h-48 overflow-hidden flex items-center justify-center">
      {/* Moving road/ground effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-8 animate-road"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            hsl(300 100% 65% / 0.3) 40px,
            hsl(300 100% 65% / 0.3) 80px
          )`,
        }}
      />
      
      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-primary/60 to-transparent animate-road"
            style={{
              left: `${i * 20}%`,
              top: `${20 + i * 12}%`,
              width: `${30 + Math.random() * 40}px`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Motorcycle SVG with neon glow */}
      <div className="relative animate-motorcycle z-10">
        <svg 
          width="180" 
          height="100" 
          viewBox="0 0 180 100" 
          className="drop-shadow-[0_0_15px_hsl(300_100%_65%)]"
        >
          {/* Back wheel */}
          <circle 
            cx="35" cy="75" r="20" 
            fill="none" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="4"
            className="drop-shadow-[0_0_10px_hsl(300_100%_65%)]"
          />
          <circle 
            cx="35" cy="75" r="8" 
            fill="hsl(300 100% 65% / 0.3)" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="2"
          />
          
          {/* Front wheel */}
          <circle 
            cx="145" cy="75" r="20" 
            fill="none" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="4"
            className="drop-shadow-[0_0_10px_hsl(300_100%_65%)]"
          />
          <circle 
            cx="145" cy="75" r="8" 
            fill="hsl(300 100% 65% / 0.3)" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="2"
          />
          
          {/* Frame */}
          <path 
            d="M35 75 L70 45 L110 45 L145 75" 
            fill="none" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_8px_hsl(300_100%_65%)]"
          />
          
          {/* Body/Tank */}
          <path 
            d="M60 50 Q75 30 100 35 L110 45 L70 50 Z" 
            fill="hsl(300 100% 65% / 0.4)" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="3"
            className="drop-shadow-[0_0_10px_hsl(300_100%_65%)]"
          />
          
          {/* Seat */}
          <path 
            d="M70 45 Q85 35 100 40 L95 48 L70 48 Z" 
            fill="hsl(300 100% 65% / 0.6)" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="2"
          />
          
          {/* Handlebar */}
          <path 
            d="M110 45 L130 30 M125 28 L135 32" 
            fill="none" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Front fork */}
          <path 
            d="M120 50 L145 75" 
            fill="none" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Engine block */}
          <rect 
            x="55" y="55" 
            width="30" height="18" 
            rx="3"
            fill="hsl(300 100% 65% / 0.3)" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="2"
          />
          
          {/* Exhaust */}
          <path 
            d="M40 65 L25 68 L20 72" 
            fill="none" 
            stroke="hsl(300 100% 65%)" 
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Headlight glow */}
          <circle 
            cx="140" cy="45" r="6" 
            fill="hsl(300 100% 65%)"
            className="animate-pulse"
          />
          <circle 
            cx="140" cy="45" r="10" 
            fill="hsl(300 100% 65% / 0.3)"
          />
        </svg>
      </div>
      
      {/* Glow effect under motorcycle */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-4 rounded-full blur-xl"
        style={{ background: 'hsl(300 100% 65% / 0.4)' }}
      />
    </div>
  );
};

export default AnimatedMotorcycle;
