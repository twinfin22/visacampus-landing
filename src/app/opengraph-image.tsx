import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "VisaCampus - 대학 국제처를 위한 유학생 비자 관리 플랫폼";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "64px",
              height: "64px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "16px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            VC
          </div>
          <span style={{ fontSize: "48px", fontWeight: 700 }}>VisaCampus</span>
        </div>
        <div
          style={{
            fontSize: "32px",
            opacity: 0.9,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          유학생 비자 관리, 엑셀에서 벗어나세요
        </div>
        <div style={{ fontSize: "20px", opacity: 0.7, marginTop: "16px" }}>
          대학 국제처를 위한 유학생 관리 플랫폼
        </div>
      </div>
    ),
    { ...size },
  );
}
