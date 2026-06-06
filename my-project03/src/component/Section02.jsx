/* Section02 — Technical Skills */

const C = {
  green: '#00ff50',
  greenDim: 'rgba(0,255,80,0.15)',
  white: '#ffffff',
  muted: 'rgba(255,255,255,0.50)',
  subtle: 'rgba(255,255,255,0.35)',
  faint: 'rgba(255,255,255,0.06)',
  gridLine: 'rgba(255,255,255,0.07)',
  bg: '#0a0a0a',
}

const skills = [
  {
    category: 'Front-end',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Back-end',
    items: ['JavaScript', 'Node.js', 'Express'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB'],
  },
]

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

function Section02() {
  return (
    <div id="skills" style={{ backgroundColor: C.bg, color: C.white }}>

      {/* Section header */}
      <div style={{ padding: '72px 48px 0' }}>
        <SectionLabel>Technical skills</SectionLabel>
      </div>

      {/* Skills grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        backgroundColor: C.gridLine,
        borderTop: `1px solid ${C.gridLine}`,
        borderBottom: `1px solid ${C.gridLine}`,
        marginBottom: '0',
      }}>
        {skills.map(({ category, items }) => (
          <div key={category} style={{
            backgroundColor: C.bg,
            padding: '48px',
          }}>
            <p style={{
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: C.green,
              marginBottom: '28px',
            }}>
              {category}
            </p>
            <ul style={{ listStyle: 'none' }}>
              {items.map(item => (
                <li key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '14px',
                  color: C.muted,
                  padding: '10px 0',
                  borderBottom: `1px solid ${C.faint}`,
                }}>
                  <span style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: C.green,
                    opacity: 0.5,
                    flexShrink: 0,
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Personal profile */}
      <div style={{
        padding: '72px 48px',
        borderBottom: `1px solid ${C.faint}`,
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '64px',
        alignItems: 'start',
      }}>
        <div>
          <SectionLabel>About me</SectionLabel>
        </div>
        <p style={{
          fontSize: '15px',
          lineHeight: 2,
          color: C.muted,
          maxWidth: '600px',
          paddingTop: '0',
          marginTop: '-48px',
        }}>
          Entry-level QA Tester transitioning from a Junior Software Developer bootcamp
          and a background in accounting and asset management. Strong attention to detail,
          structured documentation, and problem-solving. Familiar with web application
          concepts and the software development lifecycle — eager to grow in manual testing,
          defect reporting, and working in cross-functional teams.
        </p>
      </div>

    </div>
  )
}

export default Section02
