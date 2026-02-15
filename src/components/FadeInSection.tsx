"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInSection({ children, className = "", delay = 0 }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setVisible(true), delay);
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 sm:translate-y-5"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
