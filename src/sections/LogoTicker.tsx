"use client";

import Image from "next/image";
import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulsaLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";
import React from "react";

export const LogoTicker = () => {
  const logos = [
    { src: AcmeLogo, alt: "Acme Logo" },
    { src: QuantumLogo, alt: "QuantumLogo Logo" },
    { src: EchoLogo, alt: "EchoLogo Logo" },
    { src: CelestialLogo, alt: "CelestialLogo Logo" },
    { src: PulsaLogo, alt: "PulsaLogo Logo" },
    { src: ApexLogo, alt: "ApexLogo Logo" },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {logos.map((logo, index) => {
                  return (
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      key={index}
                      className="logo-ticker-image"
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
