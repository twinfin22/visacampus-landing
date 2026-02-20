import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VisaCampus - 엑셀과 수작업으로 관리하던 유학생 비자 업무, 이제 한 곳에서 해결하세요";
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
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-1px",
            marginBottom: 24,
          }}
        >
          VisaCampus
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#BAE6FD",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          유학생 비자 관리, 엑셀에서 벗어나세요
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            fontSize: 18,
            color: "#7DD3FC",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          FIMS 보고 · 비자 만료 관리 · IEQAS 모니터링 · AI 상담
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#7DD3FC",
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
