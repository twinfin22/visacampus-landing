import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VisaCampus - FIMS 보고부터 비자 만료 관리까지, 유학생 비자 관리 플랫폼";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const montserrat = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-Y3tcoqK5.ttf"
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #1E3A5F 0%, #172e4d 50%, #112240 100%)",
          position: "relative",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: 32,
          }}
        >
          VisaCampus
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          대학 국제처를 위한 유학생 비자 관리 플랫폼
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          {["FIMS 보고", "비자 만료 관리", "IEQAS 모니터링", "AI 상담"].map(
            (label) => (
              <div
                key={label}
                style={{
                  fontSize: 16,
                  color: "#BAE6FD",
                  padding: "8px 20px",
                  borderRadius: 100,
                  border: "1px solid rgba(186,230,253,0.3)",
                  background: "rgba(186,230,253,0.08)",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 15,
            color: "rgba(186,230,253,0.6)",
            letterSpacing: "1px",
          }}
        >
          www.visacampus.org
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Montserrat",
          data: montserrat,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
