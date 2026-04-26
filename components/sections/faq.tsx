"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";

const FAQS = [
  {
    q: "¿Qué pasa si necesito algo en el mismo día?",
    a: "Puedes pedir un delivery express con cargo adicional. Tenemos slots de mañana (10–14) y tarde (15–19). Si tu zona tiene operación ese día, podemos coordinar. En cualquier caso, la respuesta llega en menos de 2 horas.",
  },
  {
    q: "¿Cómo se mide el volumen que estoy pagando?",
    a: "El operador mide cada ítem al momento del pickup con una cinta métrica y registra largo × ancho × alto. El cobro se calcula sobre el volumen total real, redondeado a 0.1 m³. Tú ves el cálculo en la app antes de confirmar el primer pago.",
  },
  {
    q: "¿Qué cosas no puedo guardar?",
    a: "No guardamos alimentos perecibles, materiales peligrosos o inflamables, animales, plantas, ni artículos de valor superior a $50.000.000 sin cobertura especial. Para documentos o joyas hay un proceso diferente. Cualquier duda, pregunta antes del pickup.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. No hay contratos de permanencia. Puedes cancelar en cualquier momento — pedimos 7 días de aviso para coordinar la devolución de tus cosas. El mes en curso se cobra completo.",
  },
  {
    q: "¿Está seguro lo que guardo?",
    a: "La bodega tiene seguro de contenido de terceros. Al momento del pickup declaras el valor de tus cosas y eso determina la cobertura. Adicionalmente, fotografiamos todo para tener registro del estado al ingresar — es tu protección y la nuestra.",
  },
  {
    q: "¿Necesito empacar yo mis cosas?",
    a: "Los ítems grandes (muebles, bicicletas) van tal cual. Para cosas pequeñas recomendamos cajas — si no tienes, podemos llevarte materiales en el pickup por un cargo adicional. Si necesitas ayuda con el empaque, también lo coordinamos.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatedSection id="faq" className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <Badge variant="clay">Preguntas</Badge>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-[-0.02em] text-ink text-center mt-6">
          Las que todos<br />
          <em className="italic text-clay not-italic font-serif">se hacen.</em>
        </h2>

        <div className="max-w-[680px] mx-auto mt-16">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-sand overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left hover:text-clay transition-colors group"
              >
                <span className="text-base font-medium text-ink group-hover:text-clay transition-colors">{faq.q}</span>
                <div className={cn(
                  "w-6 h-6 rounded-full border border-sand flex items-center justify-center text-ink-3 transition-transform duration-300",
                  openIndex === i && "rotate-45"
                )}>
                  <Plus className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-[15px] font-light text-ink-3 leading-relaxed pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
