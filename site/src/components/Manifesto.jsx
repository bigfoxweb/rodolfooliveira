import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Manifesto() {
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
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )

    if (secaoRef.current) {
      observer.observe(secaoRef.current)
    }

    return () => observer.disconnect()
  }, secaoRef)

  return () => ctx.revert()
}, [])

  return (
    <section ref={secaoRef} className="relative w-full bg-[#fff]" id="manifesto">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          {/* Imagem à esquerda */}
          <div
            data-anima
            className="relative aspect-square md:col-span-4"
          >
            <img
              data-anima
              src="img/manifesto.avif"
              alt="Manifesto - Espaço Rodolfo Oliveira"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* Texto à direita: label + título + textos */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <span
          data-anima
          className="fonte-corpo peso-semi-negrito relative mx-auto inline-flex w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#ac8b4e] md:mx-0"
        >
          Nosso manifesto

          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-[#333333]"
          />
        </span>
            <h2
              data-anima
              className="fonte-titulo peso-negrito text-5xl leading-[1.15] text-[#333333] text-center md:text-left"
            >
              Aqui, o sorriso não é padronizado.<br/>
              É planejado.
            </h2>

            <p
              data-anima
              className="fonte-corpo peso-regular mx-auto max-w-2xl text-center text-[17px] leading-relaxed text-[#6b6375] md:mx-0 md:text-left md:text-lg"
            >
              O trabalho do Dr. Rodolfo parte de uma ideia simples: cada sorriso
              tem a sua história e merece um planejamento feito só para ele.
              Criamos um espaço onde você tem tempo, atenção e clareza em cada
              etapa.
            </p>

            <p
              data-anima
              className="fonte-corpo peso-regular mx-auto max-w-2xl text-center text-[17px] leading-relaxed text-[#6b6375] md:mx-0 md:text-left md:text-lg"
            >
              Antes de qualquer decisão, escutamos o que você deseja,
              avaliamos a saúde dos seus dentes e conversamos com honestidade
              sobre o que é possível e o que não é.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}