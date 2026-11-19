
import { useEffect, useState } from 'react'

const secoes = [
  { id: 'hero', nome: 'Início' },
  { id: 'manifesto', nome: 'Manifesto' },
  { id: 'pilares', nome: 'Pilares' },
  { id: 'seo-local', nome: 'Lentes em São Paulo' },
  { id: 'tratamentos', nome: 'Tratamentos' },
  { id: 'como', nome: 'Como funciona' },
  { id: 'frase', nome: 'Uma visão sobre o cuidado' },
  { id: 'antes-depois', nome: 'Casos clínicos' },
  { id: 'quem', nome: 'Quem faz' },
  { id: 'onde', nome: 'Onde estamos' },
]

export default function NavegacaoSections() {
  const [ativa, setAtiva] = useState('inicio')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visiveis = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )

        if (visiveis.length) {
          setAtiva(visiveis[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-15% 0px -15% 0px',
      }
    )

    secoes.forEach(({ id }) => {
      const elemento = document.getElementById(id)
      if (elemento) observer.observe(elemento)
    })

    return () => observer.disconnect()
  }, [])

  const navegar = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }


  return (
    <nav
      aria-label="Navegação pelas seções"
      className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
    >
      {secoes.map((secao, index) => {
        const selecionada = ativa === secao.id

        return (
          <button
            key={secao.id}
            type="button"
            onClick={() => navegar(secao.id)}
            aria-label={`Ir para ${secao.nome}`}
            aria-current={selecionada ? 'location' : undefined}
            title={secao.nome}
            className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border text-[9px] tracking-tight transition-all duration-300 ${
              selecionada
                ? 'border-[#ac8b4e] bg-[#ac8b4e] text-white'
                : 'border-white/30 bg-black/50 text-white/80 hover:border-[#c6a66c] hover:text-[#c6a66c]'
            }`}
          >
            {index + 1}
          </button>
        )
      })}
    </nav>
  )

}
