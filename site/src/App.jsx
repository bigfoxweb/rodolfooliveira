import { useEffect, useRef } from 'react'
import { useLenis } from './hooks/useLenis.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const lenis = useLenis({ lerp: 0.1 })

  return (
    <div className="min-h-screen bg-[#fff] text-[#6b6375] font-sans">
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
