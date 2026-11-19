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
    <section ref={secaoRef} className="relative w-full bg-[#fff]">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          {/* Imagem à esquerda */}
          <div
            data-anima
            className="md:col-span-4 relative aspect-[3/4] md:aspect-auto md:h-[600px]"
          >
            <img
              data-anima
              src="/img/hero-desktop.avif"
              alt="Manifesto - Espaço Rodolfo Oliveira"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Texto à direita: label + título + textos */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <span
              data-anima
              className="fonte-corpo peso-semi-negrito inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#ac8b4e]"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#ac8b4e]" />
              Nosso manifesto
            </span>

            <h2
              data-anima
              className="fonte-titulo peso-negrito text-3xl leading-[1.15] text-[#08060d] md:text-5xl"
            >
              Aqui, o sorriso não é padronizado. É planejado.
            </h2>

            <p
              data-anima
              className="fonte-corpo peso-regular max-w-2xl text-base leading-relaxed text-[#6b6375] md:text-lg"
            >
              O trabalho do Dr. Rodolfo parte de uma ideia simples: cada sorriso
              tem a sua história e merece um planejamento feito só para ele.
              Criamos um espaço onde você tem tempo, atenção e clareza em cada
              etapa.
            </p>

            <p
              data-anima
              className="fonte-corpo peso-regular max-w-2xl text-base leading-relaxed text-[#6b6375] md:text-lg"
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