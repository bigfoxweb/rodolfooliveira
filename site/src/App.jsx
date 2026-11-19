import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Pilares from './components/Pilares.jsx'
import SEOLocal from './components/SEOLocal.jsx'
import { useLenis } from './hooks/useLenis.jsx'

function App() {
  useLenis({ lerp: 0.1 })

  return (
    <div className="min-h-screen bg-[#fff] text-[#6b6375] font-sans">
      <main>
        <Hero />
        <Manifesto />
        <Pilares />
        <SEOLocal />
      </main>
    </div>
  )
}

export default App