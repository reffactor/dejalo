const ITEMS = [
  "Pickup a domicilio",
  "Inventario fotográfico",
  "Bodega virtual en tu celular",
  "Delivery el mismo día",
  "Seguro incluido",
  "Sin contratos largos",
  "Santiago RM",
  "Desde $18.000/mes",
];

export const Marquee = () => {
  return (
    <div className="border-y border-sand py-3.5 overflow-hidden bg-cream-dark">
      <div className="flex w-max animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 px-10 whitespace-nowrap text-[12px] tracking-[0.15em] uppercase text-ink-3">
                <span>{item}</span>
                <div className="w-1 h-1 rounded-full bg-clay" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
