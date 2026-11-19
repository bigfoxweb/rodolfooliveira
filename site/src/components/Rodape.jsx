
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function Rodape() {
  const [mostrarTopo, setMostrarTopo] = useState(false)

  useEffect(() => {
    const verificarScroll = () => {
      setMostrarTopo(window.scrollY > 400)
    }

    window.addEventListener('scroll', verificarScroll, { passive: true })
    verificarScroll()

    return () => {
      window.removeEventListener('scroll', verificarScroll)
    }
  }, [])

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative bg-black px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center">

        <p className="fonte-corpo text-center text-xs tracking-wide text-white/50">
          Desenvolvido por{' '}
          <a
            href="https://bigfoxweb.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="peso-semi-negrito text-[#c6a66c] transition-colors hover:text-white"
          >
            Big Fox Web
          </a>
        </p>

      </div>

      {/* Voltar ao topo */}
      <button
        type="button"
        onClick={voltarAoTopo}
        aria-label="Voltar ao topo"
        className={`cursor-pointer absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#ac8b4e] hover:bg-[#ac8b4e] hover:text-white md:right-12 ${
          mostrarTopo
            ? 'pointer-events-auto translate-y-[-50%] opacity-100'
            : 'pointer-events-none translate-y-[-40%] opacity-0'
        }`}
      >
        <FaArrowUp size={13} />
      </button>
    </footer>
  )
}
