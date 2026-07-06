"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";

const inputBase =
  "w-full rounded-lg border border-ink/15 bg-surface px-4 py-3 text-[0.9375rem] tracking-[0.02em] text-ink placeholder:text-ink/40 transition-all duration-200 focus:border-accent focus:bg-surface-2 focus:outline-none";

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
      className="bg-paper pb-24 pt-16 sm:pb-28 sm:pt-24 md:pb-32 md:pt-28 lg:pb-36 lg:pt-32"
      borderTop={true}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
        <div className="mb-4 flex items-baseline gap-4">
          <span className="font-mono text-[0.72rem] tracking-[0.14em] text-ink/55">
            05 — Contact
          </span>
          <h2 className="text-[1.4rem] font-bold tracking-[0.01em] text-ink sm:text-[1.7rem] md:text-[2rem]">
            まずは30分、話しませんか
          </h2>
        </div>
        <p className="mb-10 max-w-xl text-[0.95rem] tracking-[0.02em] leading-[2.1] text-ink/75 sm:mb-12 sm:text-[1rem] sm:leading-[2.15] md:mb-14">
          お仕事のご相談・30分オンライン相談の予約・記事の感想など、お気軽にどうぞ。候補日時をいただければ、こちらから調整のご連絡をします。
        </p>

        {!formAction ? (
          <p className="text-[0.9rem] text-ink/60">
            フォームは設定後に表示されます。
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="max-w-xl"
          >
            {status === "success" ? (
              <p className="py-8 text-[1rem] leading-[2.2] tracking-[0.02em] text-ink/90 sm:text-[1.0625rem]">
                無事に届きました。ありがとうございます。
              </p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="お名前"
                    aria-label="お名前"
                    className={inputBase}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="メールアドレス"
                    aria-label="メールアドレス"
                    className={inputBase}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="メッセージ"
                    aria-label="メッセージ"
                    className={`${inputBase} resize-y min-h-[120px]`}
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <textarea
                    id="contact-preferred-dates"
                    name="preferred_dates"
                    rows={2}
                    placeholder="オンライン相談をご希望の場合、候補日時を2〜3件（例：7/10 14:00〜 / 7/11 終日）"
                    aria-label="希望日時（任意・2〜3件）"
                    className={`${inputBase} resize-y`}
                    disabled={status === "submitting"}
                  />
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-ink/50">
                    ※ 30分オンライン相談をご希望の方は、候補日時を書いていただくと折り返しがスムーズです（任意）。
                  </p>
                </div>
                {status === "error" && errorMessage && (
                  <p className="text-[0.875rem] text-ink/70">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-[0.9rem] font-medium tracking-[0.04em] text-white shadow-sm transition-opacity active:opacity-80 hover:opacity-90 disabled:opacity-60"
                >
                  {status === "submitting" ? "送信中…" : "送信する"}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </div>
    </ScrollRevealSection>
  );
}
