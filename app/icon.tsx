import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563EB 0%, #8B5CF6 60%, #EC4899 100%)",
          color: "white",
          fontFamily: "system-ui",
          fontWeight: 800,
          fontSize: 32,
          borderRadius: 14,
          letterSpacing: -1,
        }}
      >
        L
      </div>
    ),
    size
  );
}
