import { ImageResponse } from "next/og";
import { SITE } from "../../constants";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

const PAGE = "#222222";
const TEXT = "#f2f2f2";
const MUTED = "rgba(255,255,255,0.55)";
const FAINT = "rgba(255,255,255,0.35)";
const BORDER = "rgba(255,255,255,0.12)";

async function loadFont(url: string) {
  const response = await fetch(url);
  return response.ok ? response.arrayBuffer() : null;
}

function parseTitle(title: string) {
  const parts = title.split(" — ");
  if (parts.length >= 2) {
    return { headline: parts[0], subline: parts.slice(1).join(" — ") };
  }
  return { headline: title, subline: SITE.role };
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const title = searchParams.get("title") ?? SITE.title;
  const description = searchParams.get("description") ?? SITE.description;
  const { headline, subline } = parseTitle(title);

  const logoResponse = await fetch(new URL("/logo.png", origin));
  const logoSrc = logoResponse.ok ? new URL("/logo.png", origin).toString() : null;

  const [onestBold, onestMedium] = await Promise.all([
    loadFont(
      "https://fonts.gstatic.com/s/onest/v9/gNMZW3F-SZuj7zOT0IfSjTS16cPhEhiZsg.ttf"
    ),
    loadFont(
      "https://fonts.gstatic.com/s/onest/v9/gNMZW3F-SZuj7zOT0IfSjTS16cPhxx-Zsg.ttf"
    ),
  ]);

  const fonts = [
    onestBold && {
      name: "Onest",
      data: onestBold,
      style: "normal" as const,
      weight: 700 as const,
    },
    onestMedium && {
      name: "Onest",
      data: onestMedium,
      style: "normal" as const,
      weight: 500 as const,
    },
  ].filter(Boolean) as NonNullable<
    ConstructorParameters<typeof ImageResponse>[1]
  >["fonts"];

  const bold = onestBold ? "Onest" : "sans-serif";
  const medium = onestMedium ? "Onest" : "sans-serif";
  const domain = SITE.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const summary =
    description.length > 160 ? `${description.slice(0, 157)}...` : description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: PAGE,
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {logoSrc ? (
            <img src={logoSrc} alt="" width={50} height={50} />
          ) : (
            <div
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2a2a2a",
                border: `1px solid ${BORDER}`,
                color: TEXT,
                fontFamily: bold,
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              S
            </div>
          )}
          <span
            style={{
              fontFamily: bold,
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: TEXT,
            }}
          >
            Steve
          </span>
        </div>

        <div
          style={{
            marginTop: "40px",
            width: "100%",
            height: "1px",
            backgroundColor: BORDER,
          }}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "8px",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              fontFamily: bold,
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: TEXT,
              maxWidth: "920px",
            }}
          >
            {headline}
          </div>
          <div
            style={{
              marginTop: "20px",
              fontFamily: medium,
              fontSize: "28px",
              fontWeight: 500,
              lineHeight: 1.3,
              color: MUTED,
            }}
          >
            {subline}
          </div>
          <div
            style={{
              marginTop: "24px",
              fontFamily: medium,
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: 1.45,
              color: FAINT,
              maxWidth: "880px",
            }}
          >
            {summary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <span
            style={{
              fontFamily: medium,
              fontSize: "18px",
              fontWeight: 500,
              color: FAINT,
            }}
          >
            {SITE.email}
          </span>
          <span
            style={{
              fontFamily: medium,
              fontSize: "18px",
              fontWeight: 500,
              color: FAINT,
            }}
          >
            {domain}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
