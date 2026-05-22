import brain from '../assets/Section02/brain.png'
import HTML from '../assets/Section02/HTML.png'
import CSS from '../assets/Section02/CSS.png'
import Tailwind_CSS from '../assets/Section02/Tailwind_CSS.png'
import JS from '../assets/Section02/JS.png'
import React from '../assets/Section02/React.png'
import PostgreSQL from '../assets/Section02/PostgreSQL.png'
import MongoDB from '../assets/Section02/MongoDB.png'
import Node_JS from '../assets/Section02/Node_JS.png'
import Express from '../assets/Section02/Express.png'

function Section02() {
    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            overflow: 'hidden',
        }}>
            {/* brain — ซ้ายบน เป็นรูปหลัก */}
            <img src={brain} alt="brain" style={{
                position: 'absolute',
                width: '30%',
                bottom: '5%',
                left: '4%',
                transform: 'translateY(10%)'
            }} />

            {/* Node.js — ซ้าย ระดับกลาง */}
            <img src={Node_JS} alt="Node_JS" style={{
                position: 'absolute',
                width: '6%',
                bottom: '42%',
                left: '9%',
            }} />

            {/* Tailwind — ซ้าย ใต้ Node */}
            <img src={Tailwind_CSS} alt="Tailwind_CSS" style={{
                position: 'absolute',
                width: '7%',
                bottom: '25%',
                left: '9%',
            }} />

            {/* JS — ซ้ายล่าง */}
            <img src={JS} alt="JS" style={{
                position: 'absolute',
                width: '6%',
                bottom: '10%',
                left: '9%',
            }} />

            {/* Express — ซ้ายล่างสุด */}
            <img src={Express} alt="Express" style={{
                position: 'absolute',
                width: '7%',
                bottom: '8%',
                left: '8%',
            }} />

            {/* PostgreSQL — กลางซ้าย ระดับกลาง */}
            <img src={PostgreSQL} alt="PostgreSQL" style={{
                position: 'absolute',
                width: '7%',
                bottom: '40%',
                left: '18%',
            }} />

            {/* MongoDB — กลาง ระดับกลาง */}
            <img src={MongoDB} alt="MongoDB" style={{
                position: 'absolute',
                width: '5%',
                bottom: '35%',
                left: '24%',
            }} />

            {/* CSS — กลาง ระดับล่าง */}
            <img src={CSS} alt="CSS" style={{
                position: 'absolute',
                width: '6%',
                bottom: '25%',
                left: '17.5%',
            }} />

            {/* HTML — กลางล่าง */}
            <img src={HTML} alt="HTML" style={{
                position: 'absolute',
                width: '6%',
                bottom: '12%',
                left: '19%',
            }} />

            {/* React — ขวาล่าง */}
            <img src={React} alt="React" style={{
                position: 'absolute',
                width: '7%',
                bottom: '20%',
                left: '24%',
            }} />

            {/* ===== Personal Profile ===== */}
            <h1 style={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '55%',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: 0,
            }}>
                Personal Profile
            </h1>
            <p style={{
                position: 'absolute',
                top: '20%',
                right: '5%',
                width: '55%',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.95rem',
                lineHeight: '1.8',
                margin: 0,
            }}>
                Entry-level QA Tester transitioning from a Junior Software Developer bootcamp
                and a background in accounting/asset management. Strong attention to detail,
                structured documentation, and problem-solving. Familiar with web application
                concepts and the software development lifecycle; eager to grow in manual testing,
                defect reporting, and working in cross-functional teams.
            </p>

            {/* ===== Technical Skills ===== */}
            <h1 style={{
                position: 'absolute',
                top: '38%',
                right: '5%',
                width: '55%',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: 0,
            }}>
                Technical Skills
            </h1>

            <div style={{
                position: 'absolute',
                top: '48%',
                right: '5%',
                width: '55%',
                display: 'flex',
                gap: '16px',
            }}>
                {/* Box 1 - Front-End */}
                <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    padding: '16px',
                }}>
                    <p style={{ color: '#00ff00', fontWeight: 'bold', margin: '0 0 10px 0' }}>Front-End</p>
                    <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '2', margin: 0, paddingLeft: '18px' }}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>

                {/* Box 2 - Back-End */}
                <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    padding: '16px',
                }}>
                    <p style={{ color: '#00ff00', fontWeight: 'bold', margin: '0 0 10px 0' }}>Back-End</p>
                    <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '2', margin: 0, paddingLeft: '18px' }}>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                </div>

                {/* Box 3 - Database */}
                <div style={{
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    padding: '16px',
                }}>
                    <p style={{ color: '#00ff00', fontWeight: 'bold', margin: '0 0 10px 0' }}>Database</p>
                    <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '2', margin: 0, paddingLeft: '18px' }}>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>

            {/* ===== Languages ===== */}
            <h1 style={{
                position: 'absolute',
                top: '80%',
                right: '5%',
                width: '55%',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: 0,
            }}>
                Languages
            </h1>
            <p style={{
                position: 'absolute',
                top: '88%',
                right: '5%',
                width: '55%',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.95rem',
                lineHeight: '1.8',
                margin: 0,
            }}>
                Thai: Native | English: Basic (actively improving for workplace communication)
            </p>
        </div>
    )
}

export default Section02