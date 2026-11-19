
import { useState } from 'react'

export default function Casos() {
  const [posicao, setPosicao] = useState(50)

  return (
    <section className="bg-[#f5f3ef] py-24 md:py-32" id="antes-depois">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
            <span
            data-anima
            className="fonte-corpo peso-semi-negrito relative mx-auto inline-flex w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#ac8b4e] md:mx-0"
            >
            CASOS CLÍNICOS

            <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-[#333333]"
            />
            </span>

          <h2 className="fonte-titulo peso-negrito text-5xl leading-tight text-[#333] md:text-5xl mt-4">
            Cada caso é único.
          </h2>

          <p className="fonte-corpo mt-6 text-base leading-8 text-[#6b6375] md:text-lg">
            Não seguimos padrões. Cada planejamento é pensado para valorizar
            o que faz o seu sorriso ser o seu. Aqui você vê exemplos de casos,
            lembrando que cada resultado depende das características de cada
            pessoa.
          </p>
        </div>

        {/* Comparador antes e depois */}
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[3/4] w-full select-none overflow-hidden bg-[#dedbd5] sm:aspect-[4/3] md:aspect-[16/9]">

            {/* Imagem do antes */}
            <img
              src="img/caso-depois.avif"
              alt="Sorriso antes do tratamento"
              draggable="false"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Imagem do depois */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - posicao}% 0 0)`,
              }}
            >
              <img
                src="img/caso-antes.avif"
                alt="Sorriso depois do tratamento"
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Identificação das imagens */}
            {posicao > 18 && (
            <span className="absolute bottom-3 left-3 z-10 bg-black/65 px-2 py-1 text-[10px] uppercase tracking-wider text-white md:bottom-8 md:left-8 md:px-4 md:py-2 md:text-xs md:tracking-widest">
                Antes
            </span>
            )}

            {posicao < 82 && (
            <span className="absolute bottom-3 right-3 z-10 bg-black/65 px-2 py-1 text-[10px] uppercase tracking-wider text-white md:bottom-8 md:right-8 md:px-4 md:py-2 md:text-xs md:tracking-widest">
                Depois
            </span>
            )}

            {/* Divisória e controle */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-white"
              style={{ left: `${posicao}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-[#ac8b4e] text-white shadow-lg md:h-14 md:w-14">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 5 3 12l5 7M16 5l5 7-5 7" />
                </svg>
              </div>
            </div>

            {/* Controle de arraste */}
            <input
              type="range"
              min="0"
              max="100"
              value={posicao}
              onChange={(e) => setPosicao(Number(e.target.value))}
              aria-label="Arraste para comparar o antes e depois"
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          <p className="fonte-corpo mt-4 text-center text-xs tracking-wide text-[#6b6375]">
            Arraste o controle para revelar o resultado
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://wa.me/5511934144558"
            target="_blank"
            rel="noopener noreferrer"
            className="fonte-corpo peso-semi-negrito inline-flex items-center justify-center rounded-full bg-[#ac8b4e] px-8 py-3 text-white transition-colors hover:bg-[#9a7c44]"
          >
            Quero conversar sobre o meu caso
          </a>
        </div>

      </div>
    </section>
  )
}
