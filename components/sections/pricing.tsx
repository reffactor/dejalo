"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const PLANS = [
  {
    name: "Chico",
    badge: "Caja",
    desc: "Hasta 0.5 m³ — ropa, libros, cajas",
    price: "18",
    period: ".000/mes",
    note: "Precio fijo por ítem pequeño",
    features: ["Pickup incluido (zonas activas)", "Inventario fotográfico", "Seguro básico $500.000", "1 delivery gratis al mes"],
    featured: false,
  },
  {
    name: "Medio",
    badge: "Más elegido",
    desc: "0.5–3 m³ — muebles, bicicletas, equipos",
    price: "35",
    period: ".000/m³/mes",
    note: "Cobrado sobre m³ real medido",
    features: ["Pickup incluido siempre", "Inventario fotográfico HD", "Seguro hasta $5.000.000", "2 deliveries gratis al mes", "Acceso app prioritario"],
    featured: true,
  },
  {
    name: "Grande",
    badge: "Mudanza",
    desc: "3+ m³ — contenido de departamento completo",
    price: "25",
    period: ".000/m³/mes",
    note: "Economía de escala desde 3 m³",
    features: ["Pickup + ayudante incluido", "Inventario fotográfico HD", "Seguro hasta $20.000.000", "Deliveries ilimitados", "Coordinador dedicado"],
    featured: false,
  },
];

export const Pricing = () => {
  const [volume, setVolume] = useState(14); // 1.4 m³

  const calculatePrice = (val: number) => {
    const v = val / 10;
    if (v < 0.5) return { price: 18000, detail: `${v.toFixed(1)} m³ · Plan Chico · precio fijo` };
    if (v < 3) return { price: Math.round(v * 35000), detail: `${v.toFixed(1)} m³ · Plan Medio · $35.000/m³` };
    return { price: Math.round(v * 25000), detail: `${v.toFixed(1)} m³ · Plan Grande · $25.000/m³` };
  };

  const { price, detail } = calculatePrice(volume);

  return (
    <AnimatedSection id="precios" className="bg-ink px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <Badge variant="clay" className="text-clay-mid">Precios</Badge>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-[-0.02em] text-cream max-w-[700px] mt-6">
          Claros.<br />
          <em className="italic text-clay-mid not-italic font-serif">Sin asteriscos.</em>
        </h2>
        <p className="text-base font-light text-ink-4 max-w-[480px] leading-relaxed mt-5">
          Pagas por el volumen real que ocupas, medido al entregar. Sin espacios mínimos ni sorpresas en la boleta.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "p-10 border border-white/8 transition-colors duration-300",
                plan.featured ? "bg-clay border-clay" : "hover:border-white/20"
              )}
            >
              <span className="inline-block text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-white/15 text-cream mb-6">
                {plan.badge}
              </span>
              <h3 className="font-serif text-3xl text-cream mb-1">{plan.name}</h3>
              <p className="text-[13px] text-white/50 mb-8">{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-base text-white/60">$</span>
                <span className="font-serif text-5xl text-cream tracking-tighter">{plan.price}</span>
                <span className="text-[13px] text-white/50">{plan.period}</span>
              </div>
              <p className="text-[12px] text-white/40 mb-8">{plan.note}</p>

              <div className="h-[0.5px] bg-white/10 mb-7" />

              <ul className="flex flex-col gap-3.5 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-white/70">
                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "secondary" : "outline"}
                className="w-full text-sm"
              >
                Empezar →
              </Button>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="mt-16 p-10 md:p-12 border border-white/8">
          <h4 className="font-serif text-[28px] text-cream mb-2">¿Cuánto pagarías tú?</h4>
          <p className="text-sm text-white/40 mb-8">Arrastra para calcular tu costo mensual estimado</p>

          <div className="flex flex-col gap-2 mb-6">
            <input
              type="range"
              min="1"
              max="100"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-full h-0.5 bg-white/15 rounded-full appearance-none outline-none cursor-pointer accent-clay-mid"
            />
            <div className="flex justify-between text-[12px] text-white/40 font-light">
              <span>0.1 m³</span>
              <span className="text-clay-mid font-medium">{(volume / 10).toFixed(1)} m³</span>
              <span>10+ m³</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-lg text-white/40">$</span>
            <span className="font-serif text-[56px] text-cream tracking-tighter">
              {price.toLocaleString("es-CL")}
            </span>
          </div>
          <p className="text-[13px] text-white/30">{detail}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};
