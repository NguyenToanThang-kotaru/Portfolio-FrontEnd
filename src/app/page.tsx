"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SuperTitle } from "@/components/hero/hero";
import { About } from "@/components/about/about"


export default function Background() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      // className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <SuperTitle></SuperTitle>
      </motion.div>
      
      <About></About>
      <footer className="text-muted-foreground mt-[20em]">© 2025 Nguyen Toan Thang. Software Engineer</footer>
    </AuroraBackground>
  );
}