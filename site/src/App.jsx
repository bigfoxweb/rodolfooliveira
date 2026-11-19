import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Pilares from './components/Pilares.jsx'
import SEOLocal from './components/SEOLocal.jsx'
import Tratamentos from './components/Tratamento.jsx'
import Como from './components/ComoFunciona.jsx'
import Frase from './components/FraseDestaque.jsx'
import AnDp from './components/AntesDepois.jsx'
import Quem from './components/QuemFaz.jsx'
import Onde from './components/OndeEstamos.jsx'
import NavegacaoSections from './components/NavegacaoSections'
import Rodape from './components/Rodape.jsx'
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
        <Tratamentos />
        <Como />
        <Frase />
        <AnDp />
        <Quem />
        <Onde />
        <NavegacaoSections />
        <Rodape />
      </main>
    </div>
  )
}

export default App