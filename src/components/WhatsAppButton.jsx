import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexDirection: 'row-reverse',
      }}
    >
      {/* Tooltip */}
      <div
        style={{
          position: 'absolute',
          right: 62,
          background: 'rgba(11,11,15,0.92)',
          border: '1px solid rgba(34,197,94,0.25)',
          backdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-full)',
          padding: '6px 14px',
          fontSize: '0.78rem',
          fontFamily: "'Geist', sans-serif",
          fontWeight: 600,
          color: '#fff',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(6px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          pointerEvents: 'none',
        }}
      >
        Let's Chat 👋
      </div>

      {/* Button */}
      <a
        href="https://wa.me/919488450192?text=Hi%20Adharsh,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20UI/UX%20design%20project%20with%20you."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 56,
          height: 56,
          borderRadius: 'var(--radius-full)',
          background: '#22C55E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textDecoration: 'none',
          boxShadow: hovered
            ? '0 0 30px rgba(34,197,94,0.7), 0 8px 24px rgba(0,0,0,0.4)'
            : '0 0 20px rgba(34,197,94,0.4), 0 4px 16px rgba(0,0,0,0.3)',
          transform: hovered ? 'translateY(-4px) scale(1.08)' : 'translateY(0) scale(1)',
          transition: 'box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          animation: 'whatsapp-pulse 2.5s ease-in-out infinite',
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={26}
          height={26}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
