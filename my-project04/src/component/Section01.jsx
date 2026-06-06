import background from '../assets/Section01/background.png'
import main from '../assets/Section01/main.png'

function NavLink({ href, children }) {
    return (
        <a
            href={href}
            style={{
                color: '#E2E8F0',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                letterSpacing: '0.05rem',
                transition: '0.3s',
            }}
            onMouseEnter={(e) => {
                e.target.style.color = '#60A5FA'
            }}
            onMouseLeave={(e) => {
                e.target.style.color = '#E2E8F0'
            }}
        >
            {children}
        </a>
    )
}

function Section01() {
    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                background:
                    'linear-gradient(135deg, #0F172A 0%, #111827 50%, #1E293B 100%)',
            }}
        >
            {/* Background Effect */}
            <img
                src={background}
                alt="background"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.08,
                }}
            />

            {/* Navbar */}
            <nav
                style={{
                    position: 'fixed',
                    top: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '40px',
                    padding: '16px 40px',
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    zIndex: 1000,
                }}
            >
                <NavLink href="#home">HOME</NavLink>
                <NavLink href="#about">ABOUT</NavLink>
                <NavLink href="#experience">EXPERIENCE</NavLink>
                <NavLink href="#projects">PROJECTS</NavLink>
                <NavLink href="#contact">CONTACT</NavLink>
            </nav>

            {/* Left Content */}
            <div
                style={{
                    position: 'absolute',
                    left: '10%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    maxWidth: '600px',
                }}
            >
                <p
                    style={{
                        color: '#60A5FA',
                        fontSize: '1.1rem',
                        marginBottom: '12px',
                        letterSpacing: '0.1rem',
                    }}
                >
                    HELLO, I'M
                </p>

                <h1
                    style={{
                        fontSize: '5rem',
                        fontWeight: '700',
                        margin: 0,
                        lineHeight: 1.1,
                    }}
                >
                    Jakkrapong
                </h1>

                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: '400',
                        color: '#94A3B8',
                        marginTop: '10px',
                    }}
                >
                    Full Stack Developer
                </h2>

                <p
                    style={{
                        marginTop: '25px',
                        color: '#CBD5E1',
                        fontSize: '1.05rem',
                        lineHeight: '1.8',
                    }}
                >
                    Passionate about building scalable and modern web
                    applications using React, Node.js, Express.js, and MongoDB.
                    Focused on creating clean user experiences and efficient
                    backend systems.
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '15px',
                        marginTop: '35px',
                    }}
                >
                    <button
                        style={{
                            padding: '14px 28px',
                            borderRadius: '10px',
                            border: 'none',
                            background: '#2563EB',
                            color: 'white',
                            fontWeight: '600',
                            cursor: 'pointer',
                        }}
                    >
                        View Projects
                    </button>

                    <button
                        style={{
                            padding: '14px 28px',
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: 'transparent',
                            color: 'white',
                            fontWeight: '600',
                            cursor: 'pointer',
                        }}
                    >
                        Contact Me
                    </button>
                </div>
            </div>

            {/* Right Profile */}
            <div
                style={{
                    position: 'absolute',
                    right: '10%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    padding: '20px',
                    borderRadius: '24px',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
            >
                <img
                    src={main}
                    alt="profile"
                    style={{
                        width: '320px',
                        borderRadius: '20px',
                        display: 'block',
                    }}
                />
            </div>
        </div>
    )
}

export default Section01