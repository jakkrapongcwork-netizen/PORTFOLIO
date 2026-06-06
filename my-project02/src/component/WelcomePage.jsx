import { useState, useEffect } from 'react'
import WelcomeVideo from '../assets/WelcomePage/welcomeVideo.mp4'

function WelcomePage() {
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true)
        }, 5000) // 5 วินาที

        return () => clearTimeout(timer)
    }, [])

    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <video
                src={WelcomeVideo}
                autoPlay
                muted
                loop
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />

            {/* ข้อความ Welcome */}
            {showText && (
                <p style={{
                    position: 'absolute',
                    color: 'green',
                    fontSize: '5rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.5rem',
                    textShadow: '0 0 20px rgba(255,255,255,0.8)',
                    animation: 'fadeIn 1.5s ease forwards',
                }}>
                    Welcome To My Portfolio
                </p>
            )}
        </div>
    )
}

export default WelcomePage