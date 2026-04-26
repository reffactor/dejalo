import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";

const TESTIMONIALS = [
  {
    name: "Sofía Martínez",
    detail: "Hogar 52m², Providencia",
    text: "Tenía el clóset lleno de cosas que uso dos veces al año. Ahora tengo espacio y sé exactamente dónde están.",
    avatar: "SM",
  },
  {
    name: "Cristóbal Bórquez",
    detail: "Arrendatario, Las Condes",
    text: "Me fui 3 meses a trabajar al extranjero. Dejé todo con Déjalo. Cuando volví, me trajeron todo en un día. Perfecto.",
    avatar: "CB",
  },
  {
    name: "Antonia Valdés",
    detail: "Mudanza, Ñuñoa",
    text: "Lo que más me gustó fue ver las fotos de mis cosas en la app. Con las bodegas normales nunca sabes qué tienes ahí adentro.",
    avatar: "AV",
  },
];

export const Testimonials = () => {
  return (
    <AnimatedSection id="testimonios" className="bg-white px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <Badge variant="clay">Clientes</Badge>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-[-0.02em] text-ink max-w-[700px] mt-6">
          Lo dicen<br />
          <em className="italic text-clay not-italic font-serif">los que lo usan.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-10 border border-sand relative">
              <span className="font-serif text-[64px] leading-[0.5] text-clay-light block mb-6">"</span>
              <div className="text-clay text-[12px] mb-3 tracking-[0.2em]">★★★★★</div>
              <p className="text-base font-light italic text-ink-2 leading-relaxed mb-7">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-clay-light flex items-center justify-center text-[14px] font-medium text-clay shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[14px] font-medium text-ink">{t.name}</div>
                  <div className="text-[12px] text-ink-4 mt-0.5">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
