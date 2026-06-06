import { useState, useEffect } from 'react'
import './App.css'
import Section01 from './component/Section01'
import WelcomePage from './component/WelcomePage'
import Section02 from './component/Section02'
import Section03 from './component/Section03'
import Section04 from './component/Section04'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
      setAnimate(true)
    }, 8100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showWelcome
        ? <WelcomePage />
        : <div className={animate ? 'reveal-open' : ''}>
          <Section01 />
          <Section02 />
          <Section03 />
          <Section04 />
        </div>
      }
    </>
  )
}

export default App
