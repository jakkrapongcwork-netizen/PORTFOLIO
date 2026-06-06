import main from '../assets/Section01/main.png'

const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Profile' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
]

function Section01() {
    return (
        <section id="home" className="hero-section">
            <nav className="site-nav" aria-label="Main navigation">
                <a className="nav-brand" href="#home">Jakkkrapong Conto</a>
                <div className="nav-links">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href}>{item.label}</a>
                    ))}
                </div>
            </nav>

            <div className="hero-inner">
                <div className="hero-copy">
                    <p className="eyebrow">Entry-Level QA Tester / Junior Software Developer</p>
                    <h1>Jakkkrapong Conto</h1>
                    <p className="hero-summary">
                        Detail-oriented career switcher with a foundation in software development,
                        accounting operations, and asset management. Focused on manual testing,
                        clear defect reporting, and dependable team communication.
                    </p>
                    <div className="hero-actions">
                        <a className="primary-button" href="#experience">View Experience</a>
                        <a className="secondary-button" href="#contact">Contact</a>
                    </div>
                </div>
                <div className="portrait-panel">
                    <img src={main} alt="Jakkkrapong Conto professional portrait" />
                </div>
            </div>
        </section>
    )
}

export default Section01
