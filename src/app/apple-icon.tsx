import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const Bg = "#FAF9F7";
const OakBrown = "#8B4513";
const ForestGreen = "#2D5A27";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: Bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        {/* Build: 四角（角丸） */}
        <div
          style={{
            width: 100,
            height: 100,
            background: OakBrown,
            borderRadius: 16,
            position: "absolute",
            left: 40,
            top: 55,
          }}
        />
        {/* Culture: 双葉（左） */}
        <div
          style={{
            width: 34,
            height: 44,
            background: ForestGreen,
            borderRadius: "50% 50% 0 50%",
            position: "absolute",
            left: 73,
            top: 32,
            transform: "rotate(-25deg)",
          }}
        />
        {/* Culture: 双葉（右） */}
        <div
          style={{
            width: 34,
            height: 44,
            background: ForestGreen,
            borderRadius: "50% 50% 50% 0",
            position: "absolute",
            left: 95,
            top: 32,
            transform: "rotate(25deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
