import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const FOOTER_NAME = "Ryosuke Takeda";
const FOOTER_TAGLINE = "要員計画・人事DX・AI実装";

/**
 * Google Fonts から使用文字だけをサブセット取得する（ビルド時のみ実行）。
 * 取得失敗時は null を返し、フォント指定なしで描画を続行する（ビルドは落とさない）。
 */
async function loadShipporiMincho(text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@700&text=${encodeURIComponent(text)}`;
    const cssRes = await fetch(url);
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!match) return null;
    const fontRes = await fetch(match[1]);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

export async function renderOgImage({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  const displayTitle = truncate(title, 64);
  const font = await loadShipporiMincho(
    `${displayTitle}${label}${FOOTER_NAME}${FOOTER_TAGLINE}`,
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f9f8f6",
          borderLeft: "14px solid #156b5a",
          padding: "72px 88px 64px",
          fontFamily: '"Shippori Mincho", serif',
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.2em",
            color: "#b5a48b",
          }}
        >
          {label}
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.5,
            color: "#2d2d2d",
            paddingRight: 24,
          }}
        >
          {displayTitle}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: "1px solid rgba(45, 45, 45, 0.14)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#2d2d2d" }}>
            {FOOTER_NAME}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(45, 45, 45, 0.55)",
            }}
          >
            {FOOTER_TAGLINE}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: font
        ? [{ name: "Shippori Mincho", data: font, weight: 700, style: "normal" }]
        : undefined,
    },
  );
}
