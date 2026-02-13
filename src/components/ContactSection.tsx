"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";

const inputBase =
  "w-full rounded-lg border border-gray-200 bg-white/60 px-4 py-3 text-[0.9375rem] tracking-[0.02em] text-[#2D2D2D] placeholder:text-gray-400/90 transition-all duration-200 focus:border-gray-300 focus:bg-white focus:outline-none focus:shadow-[0_0_0_1px_rgba(0,0,0,0.06)]";

/** サーバーから渡す Formspree の送信先URL（環境変数はサーバーで読み、props で渡す） */
export interface ContactSectionProps {
  formspreeEndpoint?: string | null;
}

/**
 * お問い合わせセクション。Formspree + スクロールで灯りが灯る演出。
 */
export function ContactSection({ formspreeEndpoint = null }: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formAction = formspreeEndpoint && formspreeEndpoint.trim() ? formspreeEndpoint.trim() : null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formAction || !formRef.current) return;

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        const data = (await res.json()) as { errors?: { message: string }[] };
        setStatus("error");
        setErrorMessage(
          data.errors?.map((e) => e.message).join("、") ?? "送信に失敗しました。しばらくしてからお試しください。"
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("送信に失敗しました。しばらくしてからお試しください。");
    }
  }

  return (
    <ScrollRevealSection
      id="contact"
      className="bg-[#F9F8F6] pb-24 pt-16 sm:pb-28 sm:pt-24 md:pb-32 md:pt-28 lg:pb-36 lg:pt-32"
      borderTop={true}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
        <p className="mb-10 text-sm tracking-[0.22em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-12 md:mb-16">
          CONTACT
        </p>
        <p className="mb-10 max-w-lg text-[0.95rem] tracking-[0.02em] leading-[2.1] text-[#2D2D2D]/85 sm:mb-12 sm:text-[1rem] sm:leading-[2.15] md:mb-14">
          お仕事の相談や感想など、お気軽にご連絡ください。
        </p>

        {!formAction ? (
          <p className="text-[0.9rem] text-[#2D2D2D]/60">
            フォームは設定後に表示されます。
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-xl"
          >
            {status === "success" ? (
              <p className="py-8 text-[1rem] leading-[2.2] tracking-[0.02em] text-[#2D2D2D]/90 sm:text-[1.0625rem]">
                無事に届きました。ありがとうございます。
              </p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    お名前
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="お名前"
                    className={inputBase}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    メールアドレス
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="メールアドレス"
                    className={inputBase}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    メッセージ
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="メッセージ"
                    className={`${inputBase} resize-y min-h-[120px]`}
                    disabled={status === "submitting"}
                  />
                </div>
                {status === "error" && errorMessage && (
                  <p className="text-[0.875rem] text-[#2D2D2D]/70">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-lg border border-gray-200 bg-white/80 px-6 py-3 text-[0.9375rem] tracking-[0.02em] text-[#2D2D2D] transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06)] disabled:opacity-60"
                >
                  {status === "submitting" ? "送信中…" : "送信"}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </div>
    </ScrollRevealSection>
  );
}
