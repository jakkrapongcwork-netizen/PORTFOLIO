/* Section03 — Job Experience */
import Laguna from '../assets/Section03/Laguna.jpg'
import Kata from '../assets/Section03/Kata.png'

const C = {
  green: '#00ff50',
  greenDim: 'rgba(0,255,80,0.15)',
  greenAccent: 'rgba(0,255,80,0.4)',
  white: '#ffffff',
  muted: 'rgba(255,255,255,0.50)',
  subtle: 'rgba(255,255,255,0.25)',
  faint: 'rgba(255,255,255,0.06)',
  divider: 'rgba(255,255,255,0.08)',
  bg: '#0a0a0a',
}

function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '48px',
    }}>
      <span style={{
        fontSize: '10px',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: C.green,
        whiteSpace: 'nowrap',
      }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', backgroundColor: C.greenDim }} />
    </div>
  )
}

const experiences = [
  {
    logo: Laguna,
    company: 'Laguna Phuket',
    role: 'Accountant',
    subtitle: 'Accounts Receivable & Payable',
    points: [
      'Recorded customer payments based on transfer slips in AccPac and SilverMan systems.',
      'Verified and processed incoming payments according to categorized revenue types.',
      'Received, checked, and classified invoices, delivery notes, and tax documents.',
      'Recorded accounting transactions and maintained organized filing systems.',
      'Planned documentation workflows to ensure timely processing and compliance.',
    ],
  },
  {
    logo: Kata,
    company: 'Kata Group & Beyond Resorts',
    role: 'Asset Analyst',
    subtitle: 'Asset Management',
    points: [
      'Assisted in initiating the asset management system for the hotel.',
      'Inspected assets across departments and prepared detailed record reports.',
      'Received damaged asset reports, inspected conditions, and documented findings.',
      'Prepared approval documents, obtained signatures, and forwarded to responsible departments.',
      'Compiled monthly asset reports per department and presented to supervisors.',
      'Coordinated with asset management personnel across group hotels.',
    ],
  },
]

function ExperienceCard({ logo, company, role, subtitle, points }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: '48px',
      padding: '48px 0',
      borderBottom: `1px solid ${C.divider}`,
    }}>
      {/* Left meta */}
      <div>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '10px',
          backgroundColor: 'white',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <img
            src={logo}
            alt={company}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '18px',
          fontWeight: 600,
          color: C.white,
          marginBottom: '6px',
          lineHeight: 1.2,
        }}>
          {company}
        </p>
        <p style={{
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: C.green,
          marginBottom: '8px',
        }}>
          {role}
        </p>
        <p style={{
          fontSize: '11px',
          color: C.subtle,
          letterSpacing: '0.05em',
        }}>
          {subtitle}
        </p>
      </div>

      {/* Right points */}
      <ul style={{ listStyle: 'none', paddingTop: '4px' }}>
        {points.map((point, i) => (
          <li key={i} style={{
            display: 'flex',
            gap: '16px',
            fontSize: '13px',
            lineHeight: 1.8,
            color: C.muted,
            padding: '10px 0',
            borderBottom: i < points.length - 1 ? `1px solid ${C.faint}` : 'none',
          }}>
            <span style={{
              color: C.greenAccent,
              flexShrink: 0,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '16px',
              lineHeight: '1.5',
            }}>
              —
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Section03() {
  return (
    <div id="experience" style={{
      backgroundColor: C.bg,
      color: C.white,
      padding: '72px 48px',
      borderBottom: `1px solid ${C.faint}`,
    }}>
      <SectionLabel>Experience</SectionLabel>

      {experiences.map((exp) => (
        <ExperienceCard key={exp.company} {...exp} />
      ))}
    </div>
  )
}

export default Section03
