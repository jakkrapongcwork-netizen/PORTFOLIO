import { useState } from 'react'
import skeletonO from '../assets/Section01/skeletonO.png'

/* ── Shared style tokens ── */
const C = {
  green: '#00ff50',
  greenDim: 'rgba(0,255,80,0.15)',
  greenBorder: 'rgba(0,255,80,0.25)',
  white: '#ffffff',
  muted: 'rgba(255,255,255,0.55)',
  subtle: 'rgba(255,255,255,0.35)',
  faint: 'rgba(255,255,255,0.06)',
  divider: 'rgba(255,255,255,0.1)',
  bg: '#0a0a0a',
}

/* ── NavLink ── */
function NavLink({ href, children, isActive = false }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      style={{
        color: isActive || hovered ? C.green : C.muted,
        textDecoration: 'none',
        fontSize: '11px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'color 0.25s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

/* ── Section01 ── */
function Section01() {
  const [ctaHovered, setCtaHovered] = useState(false)

  return (
    <div style={{ backgroundColor: C.bg, color: C.white }}>

      {/* ── Nav ── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        borderBottom: `1px solid ${C.greenDim}`,
        backgroundColor: 'rgba(10,10,10,0.95)',
        backdropFilter: 'blur(12px)',
      }}>
        {/* Logo */}
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '22px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: C.green,
        }}>
          JK.
        </span>

        {/* Links */}
        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none' }}>
          <li><NavLink href="#home" isActive>Home</NavLink></li>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#skills">Skills</NavLink></li>
          <li><NavLink href="#experience">Experience</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
        </ul>

        {/* CTA */}
        <button
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: ctaHovered ? C.bg : C.green,
            border: `1px solid ${C.greenBorder}`,
            padding: '8px 20px',
            borderRadius: '2px',
            cursor: 'pointer',
            backgroundColor: ctaHovered ? C.green : 'transparent',
            transition: 'background-color 0.25s, color 0.25s',
          }}
        >
          Get in touch
        </button>
      </nav>

      {/* ── Hero ── */}
      <section id="home" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        borderBottom: `1px solid ${C.faint}`,
      }}>
        {/* Left */}
        <div style={{
          padding: '80px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: `1px solid ${C.faint}`,
        }}>
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: C.green,
            marginBottom: '16px',
          }}>
            Portfolio · 2025
          </p>

          {/* Name with skeletonO replacing "O" */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: C.white,
            marginBottom: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0',
          }}>
            {'JAKKR'}
            <img
              src={skeletonO}
              alt="O"
              style={{
                height: '0.85em',
                width: 'auto',
                border: `2px solid ${C.white}`,
                borderRadius: '45%',
                margin: '0 0.04em',
                verticalAlign: 'middle',
                filter: `drop-shadow(0 0 6px ${C.green})`,
              }}
            />
            {'NG'}
          </h1>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: C.white,
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
          }}>
            {'C'}
            <img
              src={skeletonO}
              alt="O"
              style={{
                height: '0.85em',
                width: 'auto',
                border: `2px solid ${C.white}`,
                borderRadius: '45%',
                margin: '0 0.04em',
                verticalAlign: 'middle',
                filter: `drop-shadow(0 0 6px ${C.green})`,
              }}
            />
            {'NT'}
            <img
              src={skeletonO}
              alt="O"
              style={{
                height: '0.85em',
                width: 'auto',
                border: `2px solid ${C.white}`,
                borderRadius: '45%',
                margin: '0 0.04em',
                verticalAlign: 'middle',
                filter: `drop-shadow(0 0 6px ${C.green})`,
              }}
            />
          </h1>

          <p style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.subtle,
            marginBottom: '32px',
          }}>
            QA Tester · Junior Developer
          </p>

          <p style={{
            fontSize: '14px',
            lineHeight: 1.9,
            color: C.muted,
            maxWidth: '360px',
          }}>
            Entry-level QA Tester transitioning from a Junior Software Developer bootcamp
            with a background in accounting and asset management. Strong attention to
            detail and structured problem-solving.
          </p>
        </div>

        {/* Right */}
        <div style={{
          padding: '80px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '32px',
          backgroundColor: 'rgba(0,255,80,0.015)',
        }}>
          {/* Stats */}
          <div style={{ display: 'flex', gap: '32px' }}>
            {[
              { num: '2+', label: 'Years experience' },
              { num: '10+', label: 'Tech skills' },
              { num: '2',  label: 'Languages' },
            ].map(({ num, label }) => (
              <div key={label} style={{
                flex: 1,
                borderTop: `1px solid ${C.divider}`,
                paddingTop: '16px',
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '48px',
                  fontWeight: 700,
                  color: C.green,
                  lineHeight: 1,
                  marginBottom: '6px',
                }}>
                  {num}
                </div>
                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: C.subtle,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Skill tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['HTML','CSS','JavaScript','React','Tailwind CSS','Node.js','Express','PostgreSQL','MongoDB'].map(skill => (
              <span key={skill} style={{
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                border: `1px solid ${C.greenBorder}`,
                padding: '5px 12px',
                borderRadius: '2px',
                color: C.muted,
              }}>
                {skill}
              </span>
            ))}
          </div>

          {/* About blurb */}
          <div style={{
            borderTop: `1px solid ${C.faint}`,
            paddingTop: '24px',
          }}>
            <p style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: C.green,
              marginBottom: '12px',
            }}>
              Languages
            </p>
            <p style={{ fontSize: '13px', lineHeight: 1.8, color: C.muted }}>
              Thai: Native &nbsp;·&nbsp; English: Basic (actively improving)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section01
