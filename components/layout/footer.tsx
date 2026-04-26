import Link from "next/link";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="bg-ink px-6 pt-16 pb-10 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-12 border-b border-white/8 mb-10">
          <div>
            <div className="font-serif text-3xl text-cream mb-3">déjalo</div>
            <p className="text-[13px] text-white/35 max-w-[260px] leading-relaxed">
              Tus cosas, en otro lado. Tu hogar, tuyo otra vez.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-5">
              <h5 className="text-[11px] tracking-[0.2em] uppercase text-white/25 font-medium">Producto</h5>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="#como" className="text-sm text-white/50 hover:text-cream transition-colors">Cómo funciona</Link></li>
                <li><Link href="#precios" className="text-sm text-white/50 hover:text-cream transition-colors">Precios</Link></li>
                <li><Link href="#zonas" className="text-sm text-white/50 hover:text-cream transition-colors">Zonas de cobertura</Link></li>
                <li><Link href="#bodega" className="text-sm text-white/50 hover:text-cream transition-colors">La app</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="text-[11px] tracking-[0.2em] uppercase text-white/25 font-medium">Empresa</h5>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="#" className="text-sm text-white/50 hover:text-cream transition-colors">Sobre Déjalo</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-cream transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-cream transition-colors">Trabaja con nosotros</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-cream transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="text-[11px] tracking-[0.2em] uppercase text-white/25 font-medium">Legal</h5>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="#" className="text-sm text-white/50 hover:text-cream transition-colors">Términos de servicio</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-cream transition-colors">Privacidad</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-cream transition-colors">Seguro y coberturas</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-white/20">© 2025 Déjalo SpA · Santiago, Chile</p>
          <a 
            href="https://wa.me/56952188310?text=Hola!%20Me%20interesa%20agendar%20un%20pickup" 
            className="inline-flex items-center gap-2.5 bg-white/8 px-5 py-2.5 rounded-full border border-white/10 text-cream hover:bg-white/14 text-sm font-medium transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
