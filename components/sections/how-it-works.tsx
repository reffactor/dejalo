import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";

const STEPS = [
  {
    num: "01",
    title: "Agendas el pickup",
    body: "Eliges fecha y una ventana de 2 horas. Puedes pedir el pickup por WhatsApp o en el sitio — como prefieras.",
    detail: "Disponible lun–sáb · Respuesta en menos de 2 horas",
  },
  {
    num: "02",
    title: "Llegamos y guardamos",
    body: "Un operador llega puntual, fotografía cada ítem y lo lleva a la bodega. Tú ve todo en tiempo real en tu celular.",
    detail: "Inventario fotográfico incluido siempre · Seguro de contenido",
  },
  {
    num: "03",
    title: "Pides cuando necesitas",
    body: "¿Necesitas algo? Lo pides desde la app y te lo traemos. Sin tener que ir a ningún lado.",
    detail: "Delivery en el día · Elige horario y dirección",
  },
];

export const HowItWorks = () => {
  return (
    <AnimatedSection id="como" className="bg-white px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <Badge variant="clay">Cómo funciona</Badge>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-[-0.02em] text-ink max-w-[700px] mt-6">
          Tres pasos.<br />
          <em className="italic text-clay not-italic font-serif">Tú solo haces uno.</em>
        </h2>
        <p className="text-base font-light text-ink-3 max-w-[480px] leading-relaxed mt-5">
          Agendas. Nosotros hacemos todo lo demás.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16 border-collapse">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="group p-10 md:p-12 border border-sand hover:bg-cream transition-colors duration-300"
            >
              <div className="font-serif text-[72px] text-sand leading-none mb-6 group-hover:text-clay transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-xl font-medium text-ink mb-3">{step.title}</h3>
              <p className="text-[15px] font-light text-ink-3 leading-relaxed">
                {step.body}
              </p>
              <div className="mt-5 pt-5 border-t border-sand text-[12px] text-ink-4 tracking-wide">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
