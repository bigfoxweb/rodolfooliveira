
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

export default function Localidade() {
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

      if (secaoRef.current) observer.observe(secaoRef.current)

      return () => observer.disconnect()
    }, secaoRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secaoRef}
      className="relative w-full overflow-hidden bg-[#121212] text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-12 md:py-28">

<div className="flex flex-col items-center gap-7 text-center md:col-span-7 md:items-start md:text-left">
<span
  data-anima
  className="fonte-corpo peso-semi-negrito relative inline-flex w-fit pb-2 pl-[0.2em] text-xs uppercase tracking-[0.2em] text-[#ac8b4e]"
>
  Onde estamos
  <span
    aria-hidden="true"
    className="absolute inset-x-0 bottom-0 mx-auto h-[2px] w-1/2 bg-[#efefef]"
  />
</span>

          <h2
            data-anima
            className="fonte-titulo peso-negrito text-center text-3xl leading-[1.15] text-[#e5e4e7] md:text-left md:text-5xl"
          >
            Lentes de contato dental em São Paulo: comece pela avaliação.
          </h2>

          <p
            data-anima
            className="fonte-corpo peso-regular text-center text-base leading-relaxed text-[#b5b1b8] md:text-left md:text-lg"
          >
            São Paulo oferece muitas opções de clínicas e de tratamentos
            estéticos. Por isso, mais do que escolher uma técnica, vale
            escolher quem vai planejar o seu sorriso e como esse planejamento
            é conduzido.
          </p>

          <p
            data-anima
            className="fonte-corpo peso-regular text-center text-base leading-relaxed text-[#b5b1b8] md:text-left md:text-lg"
          >
            No Brooklin, na região da Avenida Berrini, o Dr. Rodolfo recebe
            cada paciente com tempo para conversar, avaliar e explicar. A
            avaliação é o ponto de partida para entender se as lentes de
            contato dental são indicadas para você ou se outra alternativa
            faz mais sentido.
          </p>
        </div>

        <div
          data-anima
          className="relative flex min-h-[340px] flex-col justify-between overflow-hidden border border-[#ac8b4e]/30 bg-[#1b1b1b] p-8 md:col-span-5 md:min-h-[420px] md:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(#ac8b4e 1px, transparent 1px), linear-gradient(90deg, #ac8b4e 1px, transparent 1px)',
              backgroundSize: '38px 38px',
            }}
          />

          <div className="relative z-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#ac8b4e]/50">
              <FaMapMarkerAlt
                size={24}
                className="text-[#ac8b4e]"
                aria-hidden="true"
              />
            </div>

            <span className="fonte-corpo peso-semi-negrito text-xs uppercase tracking-[0.2em] text-[#ac8b4e]">
              São Paulo · SP
            </span>

            <h3 className="fonte-titulo peso-negrito mt-4 text-3xl text-[#e5e4e7] md:text-4xl">
              Brooklin
            </h3>

            <p className="fonte-corpo peso-regular mt-3 max-w-xs text-base leading-relaxed text-[#b5b1b8]">
              Região da Avenida Engenheiro Luís Carlos Berrini.
            </p>
          </div>

          <div className="relative z-10 mt-12 border-t border-[#ac8b4e]/30 pt-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Brooklin+Avenida+Engenheiro+Luis+Carlos+Berrini+Sao+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="fonte-corpo peso-semi-negrito inline-flex items-center gap-3 text-sm text-[#ac8b4e] transition-colors hover:text-[#e5e4e7]"
            >
              Ver região no Google Maps
              <FaExternalLinkAlt size={12} aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
