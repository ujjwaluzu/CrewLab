import { ImageResponse } from "next/og";

export const alt = "CrewLab. Find your crew. Build what matters.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          background: "#0F0E0C",
          color: "#F1EDE4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          <span
            style={{
              display: "flex",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#D42A1E",
              color: "#FBF6EC",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            CL
          </span>
          CrewLab
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
            }}
          >
            Find your crew.
          </div>
          <div
            style={{
              display: "flex",
              fontStyle: "italic",
              fontSize: 52,
              lineHeight: 1.1,
              color: "#E9B44C",
            }}
          >
            Build what matters.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 120,
            height: 12,
            background: "#D42A1E",
          }}
        />
      </div>
    ),
    size
  );
}