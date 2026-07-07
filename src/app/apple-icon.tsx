import { ImageResponse } from "next/og";
import { loadShipporiMincho } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * ホーム画面用アイコン。iOS側が角丸マスクを適用するため、
 * こちらは角丸なしの全面塗りにする（透過角があると黒く見える）。
 */
export default async function AppleIcon() {
  const font = await loadShipporiMincho("R");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#156b5a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Shippori Mincho", serif',
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 116,
            fontWeight: 700,
            color: "#f9f8f6",
            marginTop: -8,
          }}
        >
          R
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "Shippori Mincho", data: font, weight: 700, style: "normal" }]
        : undefined,
    },
  );
}
