import { ImageResponse } from "next/og";
import { loadShipporiMincho } from "@/lib/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** ブランドカラーのタイル × 明朝の「R」。OG画像・サイトのトンマナと揃える。 */
export default async function Icon() {
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
          borderRadius: 7,
          fontFamily: '"Shippori Mincho", serif',
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 23,
            fontWeight: 700,
            color: "#f9f8f6",
            marginTop: -2,
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
