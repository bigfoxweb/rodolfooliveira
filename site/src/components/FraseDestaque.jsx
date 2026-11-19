
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FraseDestaque() {
  const secaoRef = useRef(null)
  const imagemRef = useRef(null)

  useEffect(() => {
    const secao = secaoRef.current
    const imagem = imagemRef.current

    if (!secao || !imagem) return

    const reduzirMovimento = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const ctx = gsap.context(() => {
      const elementos = gsap.utils.toArray('[data-anima]')

      gsap.set(elementos, {
        opacity: 0,
        y: 45,
      })

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const timeline = gsap.timeline()

              timeline.to(elementos, {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: 'power4.out',
                stagger: 0.2,
                clearProps: 'all',
              })

              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15 }
      )

      observer.observe(secao)

      if (!reduzirMovimento) {
        gsap.fromTo(
          imagem,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: secao,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      }

      return () => observer.disconnect()
    }, secaoRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secaoRef}
      id="frase"
      className="relative isolate flex min-h-[560px] w-full items-center justify-center overflow-hidden bg-[#121212] md:min-h-[680px]"
    >
      {/* Imagem com área extra para o movimento do parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imagemRef}
          src="img/hero-parallax.avif"
          alt="Dr. Rodolfo Oliveira em atendimento"
          className="absolute -top-[12%] left-0 block h-[124%] w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Camadas de contraste */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-28 text-center md:px-12 md:py-36">

        <div data-anima className="mb-9 flex flex-col items-center">
          <span className="fonte-corpo peso-semi-negrito relative mx-auto inline-flex w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#ac8b4e]">
            Uma visão sobre o cuidado
          </span>

          <span className="h-[2px] w-20 bg-[#efefef]" />
        </div>

        <h2
          data-anima
          className="fonte-titulo peso-regular max-w-5xl text-3xl leading-[1.35] text-white md:text-5xl md:leading-[1.3] lg:text-5xl"
        >
          <span className="text-[#ac8b4e]">“ </span>
          Antes de pensar em lentes, é preciso entender o sorriso, o rosto e a
          pessoa que vai usar.
          <span className="whitespace-nowrap text-[#ac8b4e]"> ”</span>
        </h2>

        <div
          data-anima
          className="mt-14 flex flex-col items-center gap-5"
        >
          <p className="fonte-corpo peso-semi-negrito text-xs uppercase tracking-[0.24em] text-[#ac8b4e]">
            Dr. Rodolfo Oliveira
          </p>
        </div>

      </div>
    </section>
  )
}
