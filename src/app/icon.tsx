import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const Bg = "#FAF9F7";
const OakBrown = "#8B4513";
const ForestGreen = "#2D5A27";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        {/* Build: 四角 */}
        <div
          style={{
            width: 18,
            height: 18,
            background: OakBrown,
            borderRadius: 3,
            position: "absolute",
            left: 7,
            top: 10,
          }}
        />
        {/* Culture: 双葉（左） */}
        <div
          style={{
            width: 6,
            height: 8,
            background: ForestGreen,
            borderRadius: "50% 50% 0 50%",
            position: "absolute",
            left: 13,
            top: 6,
            transform: "rotate(-25deg)",
          }}
        />
        {/* Culture: 双葉（右） */}
        <div
          style={{
            width: 6,
            height: 8,
            background: ForestGreen,
            borderRadius: "50% 50% 50% 0",
            position: "absolute",
            left: 17,
            top: 6,
            transform: "rotate(25deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
