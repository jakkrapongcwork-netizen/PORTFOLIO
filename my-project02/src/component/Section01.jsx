import { useState } from 'react'
import background from '../assets/Section01/background.png'
import main from '../assets/Section01/main.png'
import skeletonHand01 from '../assets/Section01/skeletonHand01.png'
import skeletonHand02 from '../assets/Section01/skeletonHand02.png'
import mascot from '../assets/Section01/mascot.png'
import skeletonO from '../assets/Section01/skeletonO.png'

function NavLink({ href, children, isActive = false }) {
    const [hovered, setHovered] = useState(false)

    return (
        <a
            href={href}
            style={{
                color: isActive || hovered ? '#00ff00' : 'white',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                letterSpacing: '0.1rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                textShadow: hovered ? '0 0 10px #00ff00, 0 0 20px #00ff00' : 'none',
                transition: 'color 0.3s, text-shadow 0.3s',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </a>
    )
}

function Section01() {
    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            overflow: 'hidden',
        }}>
            <img src={background} alt="background" style={{
                position: 'absolute',
                width: '90%',
                height: '90%',
                objectFit: 'cover',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '10px',
            }} />

            <nav style={{
                position: 'fixed',
                top: '2.5%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(20, 20, 20, 0.85)',
                borderRadius: '50px',
                padding: '12px 80px',
                display: 'flex',
                alignItems: 'center',
                gap: '60px',
                zIndex: 1000,
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'visible',
            }}>
                <NavLink href="#home" isActive={true}>HOME</NavLink>
                <NavLink href="#about">ABOUT ME</NavLink>
                <NavLink href="#projects">EXPERIENCE</NavLink>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(20, 20, 20, 0.95)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    marginTop: '-50px',
                    boxShadow: '0 0 12px rgba(0,255,0,0.3)',
                    transform: 'translateY(29%)',
                    flexShrink: 0,
                }}>
                    <img src={skeletonO} alt="skull" style={{
                        width: '38px',
                        height: '38px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 6px #00ff00)',
                    }} />
                </div>

                <NavLink href="#blog">PROJECTS</NavLink>
                <NavLink href="#contact">CONTACT</NavLink>
            </nav>

            <img src={main} alt="main" style={{
                position: 'absolute',
                width: '20%',
                top: '50%',
                left: '65%',
                transform: 'translateY(-50%)',
                borderRadius: '10%',
            }} />

            <img src={skeletonHand01} alt="skeletonHand01" style={{
                position: 'absolute',
                width: '20%',
                top: '-10%',
                left: '-1%',
                transform: 'rotate(-10deg)',
            }} />

            <img src={skeletonHand02} alt="skeletonHand02" style={{
                position: 'absolute',
                width: '20%',
                bottom: '-10%',
                right: '1%',
                transform: 'rotate(-15deg)',
            }} />

            <img src={mascot} alt="mascot" style={{
                position: 'absolute',
                width: '13%',
                bottom: '5%',
                left: '3%',
            }} />

            <h1 style={{
                position: 'absolute',
                top: '38%',
                left: '50%',
                transform: 'translateX(-60%)',
                color: 'white',
                fontSize: '5rem',
                fontWeight: 'bold',
                letterSpacing: '0.5rem',
                margin: 0,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
            }}>
                JAKKRAP
                <img src={skeletonO} alt="O" style={{
                    width: '6%',
                    bottom: '5%',
                    transform: 'translateY(7%)',
                    border: '3px solid white',
                    borderRadius: '45%',
                    margin: '0 0.05em',
                }} />
                NG
            </h1>

            <h1 style={{
                position: 'absolute',
                top: '52%',
                left: '50%',
                transform: 'translateX(-5%)',
                color: 'white',
                fontSize: '5rem',
                fontWeight: 'bold',
                letterSpacing: '0.5rem',
                margin: 0,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
            }}>
                C
                <img src={skeletonO} alt="O" style={{
                    width: '6%',
                    bottom: '5%',
                    transform: 'translateY(7%)',
                    border: '3px solid white',
                    borderRadius: '45%',
                    margin: '0 0.05em',
                }} />
                NT
                <img src={skeletonO} alt="O" style={{
                    width: '6%',
                    bottom: '5%',
                    transform: 'translateY(7%)',
                    border: '3px solid white',
                    borderRadius: '45%',
                    margin: '0 0.05em',
                }} />
            </h1>
        </div>
    )
}

export default Section01
