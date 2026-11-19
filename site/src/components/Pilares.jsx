
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FaPencilRuler, FaComments, FaStethoscope } from 'react-icons/fa'

const pilares = [
  {
    titulo: 'O Desenho',
    descricao:
      'Cada sorriso é pensado em conjunto com o rosto: formato, proporção e cor trabalhados com atenção aos detalhes.',
    Icone: FaPencilRuler,
  },
  {
    titulo: 'A Escuta',
    descricao:
      'Atendimento individual, sem pressa. Um espaço para você explicar o que sente e o que espera do seu sorriso.',
    Icone: FaComments,
  },
  {
    titulo: 'A Técnica',
    descricao:
      'Planejamento clínico criterioso, com indicação feita caso a caso, inclusive quando outra alternativa faz mais sentido.',
    Icone: FaStethoscope,
  },
]

export default function TresPilares() {
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
      className="relative w-full bg-[#f5f3ef]"
      style={{
         backgroundImage:
          'linear-gradient(#efefef 1px, transparent 1px), linear-gradient(90deg, #efefef 1px, transparent 1px)',
         backgroundSize: '4px 4px',
       }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="mb-14 text-center">
          <span
            data-anima
            className="fonte-corpo peso-semi-negrito relative inline-flex w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#ac8b4e]"
          >
            Três pilares
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-[#333333]"
            />
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {pilares.map(({ titulo, descricao, Icone }) => (
            <article
              key={titulo}
              data-anima
              className="flex flex-col items-center text-center border-1 border-[#f3dbdb] rounded-2xl p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center border-b border-[#ac8b4e]">
                <Icone
                  size={32}
                  className="text-[#ac8b4e]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="fonte-titulo peso-negrito mb-4 text-2xl text-[#333333]">
                {titulo}
              </h3>

              <p className="fonte-corpo peso-semi-negrito max-w-sm text-base leading-relaxed text-[#6b6375]">
                {descricao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
