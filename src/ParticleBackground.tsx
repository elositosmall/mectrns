import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const COLORS = [
  'rgba(128, 0, 128,',   // morado
  'rgba(75, 0, 130,',    // índigo oscuro
  'rgba(186, 85, 211,',  // morado medio
  'rgba(219, 112, 247,', // rosa morado
  'rgba(255, 105, 180,', // rosa intenso
  'rgba(255, 182, 193,', // rosa claro
  'rgba(30, 0, 50,',     // negro morado
  'rgba(50, 0, 80,',     // negro violeta
  'rgba(148, 0, 211,',  // violeta oscuro
  'rgba(255, 20, 147,',  // deep pink
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const PARTICLE_COUNT = 120;

    const createParticle = (): Particle => {
      const colorBase = COLORS[Math.floor(Math.random() * COLORS.length)];
      const maxLife = 200 + Math.random() * 300;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3 - 0.1,
        opacity: Math.random() * 0.6 + 0.1,
        color: colorBase,
        life: Math.random() * maxLife,
        maxLife: maxLife,
      };
    };

    // Initialize particles
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, createParticle);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.7
      );
      gradient.addColorStop(0, '#1a0a2e');
      gradient.addColorStop(0.4, '#16082a');
      gradient.addColorStop(0.7, '#0d0015');
      gradient.addColorStop(1, '#050008');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particlesRef.current.forEach((particle, index) => {
        particle.life++;

        // Fade in and out
        const lifeRatio = particle.life / particle.maxLife;
        let currentOpacity = particle.opacity;
        if (lifeRatio < 0.1) {
          currentOpacity = particle.opacity * (lifeRatio / 0.1);
        } else if (lifeRatio > 0.8) {
          currentOpacity = particle.opacity * ((1 - lifeRatio) / 0.2);
        }

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color} ${currentOpacity})`;
        ctx.fill();

        // Add glow effect for larger particles
        if (particle.size > 1.5) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color} ${currentOpacity * 0.2})`;
          ctx.fill();
        }

        // Update position with slight wave motion
        particle.x += particle.speedX + Math.sin(particle.life * 0.01) * 0.1;
        particle.y += particle.speedY + Math.cos(particle.life * 0.008) * 0.05;

        // Reset particle if it goes off screen or life expires
        if (
          particle.life >= particle.maxLife ||
          particle.x < -10 ||
          particle.x > canvas.width + 10 ||
          particle.y < -10 ||
          particle.y > canvas.height + 10
        ) {
          particlesRef.current[index] = createParticle();
          // Start from edges sometimes
          if (Math.random() > 0.5) {
            particlesRef.current[index].x = Math.random() > 0.5 ? -5 : canvas.width + 5;
            particlesRef.current[index].y = Math.random() * canvas.height;
          }
        }
      });

      // Add subtle floating dust trails
      for (let i = 0; i < 3; i++) {
        const trailX = (canvas.width * 0.2) + Math.sin(Date.now() * 0.0003 + i * 2) * canvas.width * 0.3;
        const trailY = (canvas.height * 0.3) + Math.cos(Date.now() * 0.0002 + i * 3) * canvas.height * 0.3;
        const trailGradient = ctx.createRadialGradient(trailX, trailY, 0, trailX, trailY, 80);
        trailGradient.addColorStop(0, 'rgba(148, 0, 211, 0.03)');
        trailGradient.addColorStop(0.5, 'rgba(255, 105, 180, 0.02)');
        trailGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = trailGradient;
        ctx.fillRect(trailX - 80, trailY - 80, 160, 160);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
