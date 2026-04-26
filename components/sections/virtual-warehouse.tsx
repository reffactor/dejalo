import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";

const FEATURES = [
  {
    icon: "📸",
    title: "Foto de cada ítem",
    body: 'No "caja #3". Ves exactamente qué es y en qué estado está. Antes y después.',
  },
  {
    icon: "📦",
    title: "Cobro real por m³",
    body: "Pagas solo el volumen que ocupas, medido al entregar. Sin espacios fijos ni sorpresas.",
  },
  {
    icon: "🔒",
    title: "Seguro incluido",
    body: "Todo lo guardado tiene cobertura. Puedes declarar el valor de tus cosas al momento del pickup.",
  },
];

const ITEMS = [
  { name: "Maleta grande", meta: "0.18 m³ · Agregado 12 jun", icon: "🧳", bg: "#E8EEE8" },
  { name: "Esquíes + botas", meta: "0.22 m³ · Agregado 8 may", icon: "🎿", bg: "#F2E8E0" },
  { name: "Cajas libros (x4)", meta: "0.40 m³ · Agregado 3 abr", icon: "📚", bg: "#E4EDE4" },
  { name: "Bicicleta plegable", meta: "0.25 m³ · Agregado 1 mar", icon: "🚲", bg: "#F2E8E0" },
];

export const VirtualWarehouse = () => {
  return (
    <AnimatedSection id="bodega" className="bg-cream px-6 py-24 md:px-12 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Badge variant="clay">La diferencia</Badge>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-12">
          <div>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-[-0.02em] text-ink max-w-[700px]">
              Tu bodega<br />
              <em className="italic text-clay not-italic font-serif">en el bolsillo.</em>
            </h2>
            <p className="text-base font-light text-ink-3 max-w-[480px] leading-relaxed mt-6 mb-12">
              Cada cosa guardada aparece con foto en tu app. Sabes exactamente qué tienes, dónde está y puedes pedirla con un toque.
            </p>

            <div className="flex flex-col gap-8">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-clay-light flex items-center justify-center text-xl shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[17px] font-medium text-ink mb-1.5">{f.title}</h4>
                    <p className="text-[14px] font-light text-ink-3 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative max-w-[320px] mx-auto lg:mr-0">
            {/* Phone Frame */}
            <div className="bg-ink rounded-[48px] p-4 shadow-[0_40px_80px_rgba(28,28,25,0.2),0_0_0_1px_rgba(28,28,25,0.1)]">
              <div className="bg-cream rounded-[36px] overflow-hidden aspect-[9/19] flex flex-col">
                <div className="px-5 py-4 flex justify-between text-[11px] font-medium text-ink">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>

                <div className="px-5 pt-2 pb-4 border-b border-sand">
                  <h5 className="font-serif text-xl text-ink">Mi bodega</h5>
                  <p className="text-[12px] text-ink-4 mt-0.5">8 ítems · 1.4 m³ · $49.000/mes</p>
                </div>

                <div className="p-4 flex flex-col gap-2 flex-1">
                  {ITEMS.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-sand">
                      <div className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center text-xl" style={{ backgroundColor: item.bg }}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-ink">{item.name}</div>
                        <div className="text-[11px] text-ink-4 mt-0.5">{item.meta}</div>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-sage-light text-sage">Pedir</span>
                    </div>
                  ))}
                </div>

                <div className="mx-4 mb-4 bg-ink rounded-full py-3 text-center text-[13px] font-medium text-white">
                  + Agregar más cosas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
