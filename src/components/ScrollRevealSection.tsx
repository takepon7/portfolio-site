"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const defaultTransition = {
  duration: 1,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

interface ScrollRevealSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** 奥から手前に（少し小さく→等倍） */
  scale?: boolean;
  /** 上境界線をゆっくり描画 */
  borderTop?: boolean;
}

export function ScrollRevealSection({
  children,
  id,
  className = "",
  scale = true,
  borderTop = false,
}: ScrollRevealSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, scale: scale ? 0.98 : 1, y: scale ? 12 : 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
      transition={defaultTransition}
      className={`relative ${className}`}
    >
      {borderTop && (
        <motion.div
          className="absolute left-0 right-0 top-0 h-px bg-[#2D2D2D]/08 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        />
      )}
      {children}
    </motion.section>
  );
}
