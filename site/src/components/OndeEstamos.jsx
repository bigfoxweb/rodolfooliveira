
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function OndeEstamos() {
  const secaoRef = useRef(null)
  const mapaRef = useRef(null)

  const endereco =
    'Avenida Nova Independência, 87, conjunto 33, Cidade Monções, São Paulo, SP, 04570-000'

  const coordenadas = [-23.6072774, -46.6928849]

  const rotaUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(endereco)}`

  // Animações
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

  // Mapa Leaflet
  useEffect(() => {
    if (!mapaRef.current) return

    const mapa = L.map(mapaRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
    }).setView(coordenadas, 16)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(mapa)

    L.circleMarker(coordenadas, {
      radius: 9,
      color: '#ffffff',
      weight: 3,
      fillColor: '#ac8b4e',
      fillOpacity: 1,
    })
      .addTo(mapa)
      .bindPopup('Consultório Dr. Rodolfo Oliveira')

    return () => mapa.remove()
  }, [])

  return (
    <section
      ref={secaoRef}
      id="onde"
      className="overflow-hidden bg-[#121212] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span
            data-anima
            className="fonte-corpo peso-semi-negrito relative mx-auto inline-flex w-fit pb-2 text-xs uppercase tracking-[0.2em] text-[#c6a66c]"
          >
            LOCALIZAÇÃO

            <span
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-[#efefef]"
            />
          </span>

          <h2
            data-anima
            className="fonte-titulo peso-negrito mt-4 text-4xl leading-tight text-white md:text-5xl"
          >
            Sua avaliação acontece no Brooklin.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">

          {/* Endereço e informações */}
          <div data-anima>
            <div className="space-y-2">
              <p className="fonte-corpo peso-semi-negrito text-xs uppercase tracking-[0.2em] text-[#c6a66c]">
                Endereço
              </p>

              <p className="fonte-corpo text-base leading-8 text-[#e5e4e7]">
                Av. Nova Independência, 87 · conj. 33
                <br />
                Cidade Monções, São Paulo · SP
                <br />
                CEP 04570-000
              </p>

              <p className="fonte-corpo pt-2 text-sm leading-7 text-[#aaa6ad]">
                Na região do Brooklin e da Avenida Berrini.
              </p>
            </div>

            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="fonte-corpo peso-semi-negrito text-xs uppercase tracking-[0.2em] text-[#c6a66c]">
                Horários
              </p>

              <p className="fonte-corpo mt-3 text-sm text-[#aaa6ad]">
                Horários de atendimento a confirmar.
              </p>
            </div>

            {/* Botões */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={rotaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fonte-corpo peso-semi-negrito inline-flex items-center justify-center rounded-full border border-[#ac8b4e] px-8 py-3 text-sm text-[#d2b77f] transition-colors hover:bg-[#ac8b4e] hover:text-white"
              >
                Como chegar
              </a>

              <a
                href="https://wa.me/5511934144558"
                target="_blank"
                rel="noopener noreferrer"
                className="fonte-corpo peso-semi-negrito inline-flex items-center justify-center rounded-full bg-[#ac8b4e] px-8 py-3 text-sm text-white transition-colors hover:bg-[#9a7c44]"
              >
                Agendar visita
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div
            data-anima
            className="relative z-0 h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-[#242424] md:h-[480px]"
          >
            <div
              ref={mapaRef}
              className="mapa-leaflet h-full w-full"
            />
          </div>

        </div>
      </div>

      {/* Aparência dos tiles */}
      <style>{`
        .mapa-leaflet .leaflet-tile {
          filter: grayscale(1) contrast(0.9);
        }

        .mapa-leaflet .leaflet-control-attribution {
          font-size: 9px;
        }

        .mapa-leaflet .leaflet-control-zoom a {
          color: #333;
        }
      `}</style>
    </section>
  )
}
