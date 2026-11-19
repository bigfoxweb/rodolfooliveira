import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const PALAVRAS = ['Escuta', 'Desenho', 'Técnica', 'Acompanhamento']

export default function Hero() {
  const secaoRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('[data-anima]', {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        clearProps: 'opacity,transform',
      })
    }, secaoRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secaoRef}
      className="relative w-full overflow-hidden bg-[#040405] text-white"
    >
      {/* Fundo */}
      <img
        src="img/hero-fundo.avif"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Escurecimento para leitura */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col items-center px-6 py-12 md:px-12 md:py-20">
        {/* Hero principal */}
        <div className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Texto */}
          <div className="order-1 max-w-xl">
            <div className="inline-flex flex-col items-center">
              <img
                data-anima
                src="img/logo-topo.webp"
                alt="Odontologia Estética - Espaço Rodolfo Oliveira"
                className="mb-6 h-auto w-32 md:w-40"
              />

              <span
                data-anima
                className="fonte-titulo peso-regular inline-flex items-center gap-2 rounded-full border border-[#ac8b4e]/60 bg-[#ac8b4e]/10 px-4 py-2 text-[11px] uppercase leading-none tracking-[0.18em] text-[#ac8b4e] backdrop-blur-sm md:text-xs"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#ac8b4e]" />
                Lentes de contato dental · Brooklin, São Paulo
              </span>
            </div>

            <h1
              data-anima
              className="fonte-titulo peso-negrito mt-5 text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
            >
              Onde o sorriso vira arte.
            </h1>

            <p
              data-anima
              className="fonte-corpo peso-regular mt-6 max-w-md text-base leading-relaxed text-[#e5e4e7] md:text-lg"
            >
              Cada sorriso é único. Por isso, cada planejamento também é.
              Escutamos o que você deseja, avaliamos seus dentes e planejamos
              lentes de contato dental pensadas peça por peça, para o seu
              rosto.
            </p>

            <a
              data-anima
              href="https://wa.me/5511934144558"
              target="_blank"
              rel="noopener noreferrer"
              className="fonte-corpo peso-semi-negrito mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#ac8b4e] px-8 py-4 text-white transition-colors hover:bg-[#9a7c44] sm:w-auto"
            >
              Agendar pelo WhatsApp
            </a>

            <div
              data-anima
              className="mt-8 max-w-md border-t border-[#ac8b4e]/40 pt-5"
            >
              <p className="fonte-corpo peso-regular text-sm leading-relaxed text-[#e5e4e7]/80 text-center">
                Antes de qualquer lente, definimos{' '}
                <span className="text-[#ac8b4e]">formato</span>,{' '}
                <span className="text-[#ac8b4e]">proporção</span> e{' '}
                <span className="text-[#ac8b4e]">cor</span> em um{' '}
                <span className="text-[#ac8b4e]">planejamento individual</span>.
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div
            data-anima
            className="order-2 relative mx-auto w-full max-w-md md:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border border-[#ac8b4e]/50 md:-bottom-4 md:-right-4"
            />

            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="img/hero-desktop.avif"
                type="image/avif"
              />
              <img
                src="img/hero-mobile.avif"
                alt="Detalhe do trabalho em lentes de contato dental"
                decoding="async"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover md:aspect-auto md:h-[78svh] md:max-h-[720px]"
              />
            </picture>
          </div>
        </div>

        {/* Faixa de Valores - dentro do mesmo fundo do hero */}
        <div data-anima className="w-full max-w-7xl mt-16 md:mt-24 pt-12 border-t border-[#ac8b4e]/30">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2
              data-anima
              className="fonte-titulo peso-negrito text-3xl text-[#ac8b4e] md:text-4xl"
            >
              Sorrisos com identidade
            </h2>

            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {PALAVRAS.map((palavra) => (
                <li
                  key={palavra}
                  data-anima
                  className="fonte-corpo peso-semi-negrito flex items-center gap-4 text-sm uppercase tracking-[0.14em] text-[#e5e4e7]/80 md:text-base"
                >
                  {palavra}
                  {palavra !== PALAVRAS[PALAVRAS.length - 1] && (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-[#ac8b4e]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}