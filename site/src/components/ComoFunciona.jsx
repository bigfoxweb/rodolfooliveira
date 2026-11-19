
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const etapas = [
  {
    numero: '01',
    titulo: 'Escuta',
    texto: 'Entender o que você deseja e o que hoje te incomoda ou te inspira no seu sorriso.',
  },
  {
    numero: '02',
    titulo: 'Avaliação',
    texto: 'Analisar a saúde dos seus dentes e da sua gengiva e conversar com clareza sobre o que é possível.',
  },
  {
    numero: '03',
    titulo: 'Desenho',
    texto: 'Planejar o sorriso respeitando o seu rosto e as suas características.',
  },
  {
    numero: '04',
    titulo: 'Confecção',
    texto: 'Trabalho minucioso, peça por peça.',
  },
  {
    numero: '05',
    titulo: 'Prova e ajustes',
    texto: 'Acompanhamento até a finalização.',
  },
]

export default function ComoFunciona() {
  const secaoRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const elementos = gsap.utils.toArray('[data-anima]')

      gsap.set(elementos, {
        opacity: 0,
        y: 26,
      })

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(elementos, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.12,
                clearProps: 'opacity,transform',
              })

              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -10% 0px',
        }
      )

      if (secaoRef.current) {
        observer.observe(secaoRef.current)
      }

      return () => observer.disconnect()
    }, secaoRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secaoRef}
      className="relative w-full overflow-hidden bg-[#121212] text-[#e5e4e7]"
      id="como"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">

        {/* Cabeçalho */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span
            data-anima
            className="fonte-corpo peso-semi-negrito relative mx-auto inline-flex w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#ac8b4e]"
          >
            Como funciona
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-[#efefef]"
            />
          </span>

          <h2
            data-anima
            className="fonte-titulo peso-negrito mt-6 text-5xl leading-[1.15] text-[#e5e4e7] md:text-5xl"
          >
            Do primeiro olhar à prova final.
          </h2>

          <p
            data-anima
            className="fonte-corpo peso-regular mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#aaa6ad] md:text-lg"
          >
            Por trás de cada lente existe um trabalho minucioso, feito com
            atenção ao detalhe.
          </p>
        </div>

        {/* Linha do tempo */}
        <div className="relative">

          {/* Conexão vertical mobile */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[23px] top-8 w-px bg-[#ac8b4e]/40 md:hidden"
          />

          {/* Conexão horizontal desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-[#ac8b4e]/40 md:block"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                data-anima
                className="relative flex items-start gap-6 md:flex-col md:items-center md:gap-8 md:text-center"
              >
                {/* Número */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#ac8b4e] bg-[#121212]">
                  <span className="fonte-corpo peso-semi-negrito text-sm tracking-wider text-[#ac8b4e]">
                    {etapa.numero}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col gap-3 pt-1 md:pt-0">
                  <h3 className="fonte-titulo peso-negrito text-2xl text-[#e5e4e7]">
                    {etapa.titulo}
                  </h3>

                  <p className="fonte-corpo peso-regular max-w-xs text-base leading-relaxed text-[#aaa6ad] md:mx-auto">
                    {etapa.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Chamada para ação */}
        <div data-anima className="mt-20 flex justify-center">
          <a
            href="https://wa.me/5511934144558"
            target="_blank"
            rel="noopener noreferrer"
            className="fonte-corpo peso-semi-negrito inline-flex items-center justify-center rounded-full bg-[#ac8b4e] px-8 py-4 text-[15px] text-white transition-colors duration-300 hover:bg-[#9a7c44]"
          >
            Quero agendar minha avaliação
          </a>
        </div>

      </div>
    </section>
  )
}
