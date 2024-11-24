"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={ref}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="max-w-[478px]">
            <div className="tag">Version 2.0 is here</div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to your
              progress, motivate your efforts, and celebrate your success.
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 animate-up-down"
            />
            <Image
              src={CylinderImage}
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block md:absolute -top-8 -left-32"
            />
            <motion.img
              src={NoodleImage.src}
              alt="Noodle Image"
              width={220}
              height={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{ translateY: translateY, rotate: 30 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
