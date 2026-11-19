
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Tratamento() {
  const secaoRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementos = entry.target.querySelectorAll('[data-anima]')

            gsap.set(elementos, { opacity: 0, y: 26 })

            gsap.to(elementos, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.12,
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
  }, [])

  const cards = [
    {
      titulo: 'Formato',
      texto: 'Bordas, curvaturas e o desenho de cada dente podem ser trabalhados para harmonizar o sorriso, sempre conforme a avaliação e a indicação profissional.',
      foto: 'img/hero-desktop.avif',
    },
    {
      titulo: 'Proporção',
      texto: 'O tamanho de cada dente em relação aos demais, ao lábio e ao rosto faz diferença. É aqui que o sorriso ganha equilíbrio.',
      foto: 'img/hero-desktop.avif',
    },
    {
      titulo: 'Cor',
      texto: 'O tom é escolhido em conversa com você, levando em conta o seu rosto, a sua pele e o que você deseja para o seu sorriso.',
      foto: 'img/hero-desktop.avif',
    },
  ]

  return (
    <section ref={secaoRef} className="relative w-full bg-[#faf9f7]" id="tratamentos">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span
            data-anima
            className="fonte-corpo peso-semi-negrito relative mx-auto inline-flex w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#ac8b4e]"
          >
            O que as lentes podem trabalhar
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-[2px] w-1/4 -translate-x-1/2 bg-[#333]"
            />
          </span>

          <h2
            data-anima
            className="fonte-titulo peso-negrito mt-6 text-center text-5xl leading-[1.15] text-[#333] md:text-5xl"
          >
            Três detalhes que mudam a forma de sorrir.
          </h2>

          <p
            data-anima
            className="fonte-corpo peso-regular mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[#6b6375] md:text-lg"
          >
            Lentes de contato dental são peças cerâmicas finas, planejadas para recobrir a
            superfície dos dentes e modificar características estéticas. Cada peça é pensada
            para um sorriso específico: o seu.
          </p>
        </div>

  <div className="mt-12 grid gap-8 md:grid-cols-3">
  {cards.map((card) => (
    <article
      key={card.titulo}
      data-anima
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={card.foto}
          alt={card.titulo}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="fonte-titulo peso-negrito text-2xl text-[#08060d]">
          {card.titulo}
        </h3>

        <p className="fonte-corpo peso-regular text-base leading-relaxed text-[#6b6375]">
          {card.texto}
        </p>
      </div>
    </article>
  ))}
</div>

<div className="mt-12 flex justify-center">
  <a
    href="https://wa.me/5511934144558"
    target="_blank"
    rel="noopener noreferrer"
    className="fonte-corpo peso-semi-negrito inline-flex items-center justify-center rounded-full bg-[#ac8b4e] px-8 py-3 text-white transition-colors hover:bg-[#9a7c44]"
  >
    Agendar avaliação
  </a>
</div>



        

      </div>
    </section>
  )
}
