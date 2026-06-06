/* Section04 — Contact & Footer */
import { useState } from 'react'

const C = {
  green: '#00ff50',
  greenDim: 'rgba(0,255,80,0.15)',
  greenBorder: 'rgba(0,255,80,0.3)',
  white: '#ffffff',
  muted: 'rgba(255,255,255,0.45)',
  subtle: 'rgba(255,255,255,0.2)',
  faint: 'rgba(255,255,255,0.06)',
  bg: '#0a0a0a',
}

function FooterLink({ href, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      style={{
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: hovered ? C.green : C.subtle,
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

function Section04() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div id="contact" style={{ backgroundColor: C.bg, color: C.white }}>

      {/* Contact CTA */}
      <div style={{
        padding: '120px 48px',
        borderBottom: `1px solid ${C.faint}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '24px',
      }}>
        <p style={{
          fontSize: '10px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: C.green,
        }}>
          Get in touch
        </p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: C.white,
          maxWidth: '600px',
        }}>
          Let's work<br />together.
        </h2>

        <p style={{
          fontSize: '14px',
          lineHeight: 1.9,
          color: C.muted,
          maxWidth: '400px',
        }}>
          Open to QA testing roles and junior developer opportunities.
          Feel free to reach out for collaboration or inquiries.
        </p>

        <a
          href="mailto:"
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            marginTop: '8px',
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: btnHovered ? C.bg : C.green,
            backgroundColor: btnHovered ? C.green : 'transparent',
            border: `1px solid ${C.greenBorder}`,
            padding: '14px 36px',
            borderRadius: '2px',
            textDecoration: 'none',
            transition: 'background-color 0.25s, color 0.25s',
          }}
        >
          Send a message
        </a>
      </div>

      {/* Footer */}
      <footer style={{
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: C.green,
        }}>
          JK.
        </span>

        <span style={{
          fontSize: '11px',
          color: C.subtle,
          letterSpacing: '0.08em',
        }}>
          © 2025 Jakkrong Conto
        </span>

        <div style={{ display: 'flex', gap: '28px' }}>
          <FooterLink href="#">GitHub</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
          <FooterLink href="mailto:">Email</FooterLink>
        </div>
      </footer>
    </div>
  )
}

export default Section04
