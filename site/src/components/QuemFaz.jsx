
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function QuemFaz() {
  const secaoRef = useRef(null)

  useEffect(() => {
    const secao = secaoRef.current
    if (!secao) return

    const elementos = secao.querySelectorAll('[data-anima]')

    gsap.set(elementos, { opacity: 0, y: 35 })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(elementos, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.16,
              clearProps: 'all',
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(secao)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={secaoRef}
      id="quem"
      className="overflow-hidden bg-[#ac8b4e] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-12">

        {/* Retrato */}
        <div data-anima className="relative mx-auto w-full max-w-md px-3 py-3">
          <div
            data-anima
            className="order-2 relative mx-auto w-full max-w-md md:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border border-[#efefef] md:-bottom-4 md:-right-4"
            />

            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="img/rodolfo-retrato.avif"
                type="image/avif"
              />
              <img
                src="img/rodolfo-retrato-mobile.avif"
                alt="Detalhe do trabalho em lentes de contato dental"
                decoding="async"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover md:aspect-auto md:h-[78svh] md:max-h-[720px]"
              />
            </picture>
          </div>

        </div>

        {/* Apresentação */}
        <div className="flex flex-col text-center md:py-8 md:items-start md:text-left">
            <span
            data-anima
            className="fonte-corpo peso-semi-negrito relative inline-flex w-fit self-center pb-2 text-xs uppercase tracking-[0.2em] text-[#efefef] md:self-start"
            >
            QUEM FAZ

            <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-[#333333]"
            />
            </span>

          <h2
            data-anima
            className="fonte-titulo peso-semi-negrito text-4xl leading-tight text-[#ebeadd] md:text-5xl mt-8"
          >
            Prazer, Dr. Rodolfo.
          </h2>

          <p
            data-anima
            className="fonte-corpo mt-8 text-base leading-8 text-white/90 md:text-lg"
          >
            Escolhi a odontologia estética porque acredito que um sorriso bem
            planejado respeita quem a pessoa é. Meu atendimento é individual,
            com tempo para escutar, explicar e indicar apenas o que faz sentido
            para cada caso, inclusive quando isso significa sugerir outra
            alternativa.
          </p>

          <div
            data-anima
            className="mt-10 border-t border-white/35 pt-6"
          >
            <p className="fonte-corpo peso-negrito text-sm text-white">
              Dr. Rodolfo Oliveira
            </p>

            <p className="fonte-corpo peso-semi-negrito mt-2 text-xs uppercase tracking-[0.15em] text-white/75">
              Cirurgião-dentista · CROSP 102091
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
