"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 pb-20 md:px-12 md:pb-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 bg-cream -z-10 overflow-hidden">
        <div className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] rounded-full bg-clay-light opacity-60" />
        <div className="absolute bottom-[120px] left-[20%] w-[300px] h-[300px] rounded-full bg-sage-light opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] tracking-[0.25em] uppercase text-clay font-medium mb-5"
        >
          Storage con pickup · Santiago, Chile
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-[clamp(48px,8vw,108px)] leading-none tracking-[-0.04em] text-ink max-w-[900px]"
        >
          Más espacio<br />en tu hogar.<br />
          <em className="italic text-clay not-italic font-serif">Sin mudarte.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <p className="text-lg font-light text-ink-2 max-w-[400px] leading-relaxed">
            Buscamos tus cosas, las guardamos con foto y te las traemos cuando las necesites. Tú no vas a ninguna bodega.
          </p>

          <div className="flex flex-col items-start md:items-end gap-3">
            <Button variant="primary" size="lg" className="group" onClick={() => window.location.href = 'https://wa.me/56952188310?text=Hola!%20Me%20interesa%20agendar%20un%20pickup%20gratis'}>
              Agendar pickup gratis
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
            <span className="text-[12px] text-ink-4">Sin tarjeta de crédito · Primer pickup gratis</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <div className="w-[1px] h-10 bg-linear-to-b from-sand to-transparent" />
      </motion.div>
    </section>
  );
};
