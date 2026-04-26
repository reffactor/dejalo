"use client";

import { useState } from "react";
import { AnimatedSection } from "../ui/animated-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setStatus("success");
    }
  };

  return (
    <AnimatedSection id="cta" className="bg-clay px-6 py-32 md:px-12 flex flex-col items-center text-center">
      <Badge variant="sand" className="text-white/60 mb-8">Empieza hoy</Badge>
      
      <h2 className="font-serif text-[clamp(40px,6vw,80px)] text-cream leading-[1.1] tracking-[-0.03em] max-w-[700px] mb-5">
        Déjalo.<br />
        <em className="italic text-white/60 not-italic font-serif">Ya.</em>
      </h2>
      
      <p className="text-lg font-light text-white/70 max-w-[400px] mb-12">
        El primer pickup es gratis. Sin tarjeta de crédito. Sin compromiso.
      </p>

      {status === "idle" ? (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 w-full max-w-[480px]">
          <input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3.5 bg-white/15 border border-white/30 rounded-full text-cream placeholder:text-white/50 outline-none focus:bg-white/20 focus:border-white/60 transition-all"
            required
          />
          <Button variant="white" type="submit" className="whitespace-nowrap">
            Agendar pickup →
          </Button>
        </form>
      ) : (
        <div className="bg-white/10 px-8 py-4 rounded-full text-white font-medium">
          ✓ Recibido — te escribimos hoy
        </div>
      )}

      <p className="mt-5 text-[12px] text-white/50">
        O escríbenos por WhatsApp al <a href="https://wa.me/56952188310?text=Hola!%20Me%20interesa%20agendar%20un%20pickup" className="underline hover:text-white transition-colors">+56 9 5218 8310</a>
      </p>
    </AnimatedSection>
  );
};
