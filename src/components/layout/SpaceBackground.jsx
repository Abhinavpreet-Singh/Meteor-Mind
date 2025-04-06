import React from 'react';

const SpaceBackground = ({ variant = 'stars', opacity = 0.1, children }) => {
  // Background variants
  const backgrounds = {
    stars: {
      className: "bg-primary",
      overlay: (
        <div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
          {/* Tiny stars */}
          {[...Array(100)].map((_, i) => (
            <div
              key={`tiny-star-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Medium stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`medium-star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Larger star glows */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`star-glow-${i}`}
              className="absolute w-2 h-2 bg-blue-100 rounded-full blur-sm animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      )
    },
    galaxies: {
      className: "bg-primary",
      overlay: (
        <div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
          {/* Galaxy spiral effects */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`galaxy-${i}`}
              className="absolute rounded-full blur-xl animate-rotate-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${150 + Math.random() * 200}px`,
                height: `${150 + Math.random() * 200}px`,
                background: 'radial-gradient(ellipse at center, rgba(147,197,253,0.5) 0%, rgba(59,130,246,0.3) 40%, rgba(0,0,0,0) 70%)',
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDuration: `${100 + Math.random() * 100}s`
              }}
            />
          ))}
          
          {/* Star clusters */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`star-cluster-${i}`}
              className="absolute rounded-full blur-md"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${10 + Math.random() * 20}px`,
                height: `${10 + Math.random() * 20}px`,
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
              }}
            />
          ))}
        </div>
      )
    },
    gradient: {
      className: "bg-gradient-to-br from-primary via-blue-900 to-primary",
      overlay: (
        <div className="absolute inset-0 overflow-hidden" style={{ opacity: opacity * 0.5 }}>
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                animationDuration: `${15 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      )
    },
    nebula: {
      className: "bg-primary",
      overlay: (
        <div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
          {/* Nebula clouds */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`nebula-${i}`}
              className="absolute blur-2xl animate-pulse-slow"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                background: i % 2 === 0 
                  ? 'radial-gradient(ellipse at center, rgba(167,139,250,0.3) 0%, rgba(139,92,246,0.2) 40%, rgba(0,0,0,0) 70%)'
                  : 'radial-gradient(ellipse at center, rgba(252,165,165,0.3) 0%, rgba(239,68,68,0.2) 40%, rgba(0,0,0,0) 70%)',
                animationDuration: `${8 + Math.random() * 7}s`
              }}
            />
          ))}
          
          {/* Small distant stars */}
          {[...Array(80)].map((_, i) => (
            <div
              key={`small-star-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      )
    }
  };

  const { className, overlay } = backgrounds[variant] || backgrounds.stars;

  return (
    <div className={`relative ${className}`}>
      {overlay}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpaceBackground;