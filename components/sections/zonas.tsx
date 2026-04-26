import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";

const ZONAS = [
  {
    dia: "Lunes · Jueves",
    nombre: "Oriente",
    comunas: "Las Condes · Vitacura\nLo Barnechea · La Reina",
    status: "Activa",
  },
  {
    dia: "Próximamente",
    nombre: "Centro Norte",
    comunas: "Providencia · Ñuñoa\nSantiago Centro · Recoleta",
    status: "Lista de espera",
  },
  {
    dia: "Próximamente",
    nombre: "Sur Poniente",
    comunas: "Maipú · Pudahuel\nCerrillos · Estación Central",
    status: "Lista de espera",
  },
  {
    dia: "Próximamente",
    nombre: "Sur",
    comunas: "La Florida · Puente Alto\nSan Bernardo · Macul",
    status: "Lista de espera",
  },
];

export const Zonas = () => {
  return (
    <AnimatedSection id="zonas" className="bg-cream-dark px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <Badge variant="clay">Cobertura</Badge>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-[-0.02em] text-ink max-w-[700px] mt-6">
          Santiago,<br />
          <em className="italic text-clay not-italic font-serif">por zonas.</em>
        </h2>
        <p className="text-base font-light text-ink-3 max-w-[480px] leading-relaxed mt-5">
          Operamos por zona y día para consolidar rutas y llegar siempre a tiempo. Tu zona tiene día fijo de pickup.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 mt-16">
          {ZONAS.map((zona, i) => (
            <div
              key={i}
              className="p-8 border border-sand bg-cream hover:bg-white transition-colors duration-200"
            >
              <div className="text-[10px] tracking-[0.2em] uppercase text-clay font-semibold mb-2.5">
                {zona.dia}
              </div>
              <h4 className="text-base font-medium text-ink mb-2">{zona.nombre}</h4>
              <p className="text-[12px] text-ink-4 leading-relaxed whitespace-pre-line">
                {zona.comunas}
              </p>
              <div className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-medium" style={{ color: zona.status === 'Activa' ? 'var(--color-sage)' : 'var(--color-ink-4)' }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: zona.status === 'Activa' ? 'var(--color-sage)' : 'var(--color-sand)' }} />
                {zona.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
