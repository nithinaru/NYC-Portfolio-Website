// Portfolio — Vignelli-inspired Station Board v2
// All Helvetica · mixed-case headings · live indicators · 6 sections

// ────────────────────────────────────────────────────────────
// Tokens
// ────────────────────────────────────────────────────────────
const PF_LINES = {
  R: { color: "#ee352e", fg: "#fff" },
  B: { color: "#0039a6", fg: "#fff" },
  G: { color: "#00933c", fg: "#fff" },
  O: { color: "#ff6319", fg: "#fff" },
  Y: { color: "#fccc0a", fg: "#000" },
  P: { color: "#b933ad", fg: "#fff" },
};

// ────────────────────────────────────────────────────────────
// Primitives
// ────────────────────────────────────────────────────────────
function PfBullet({ label, line = "B", size = 28, style }) {
  const cfg = PF_LINES[line] || PF_LINES.B;
  return (
    <span
      className="pf-bullet"
      style={{
        width: size,
        height: size,
        background: cfg.color,
        color: cfg.fg,
        fontSize: Math.round(size * 0.5),
        lineHeight: 1,
        ...(style || {}),
      }}
    >
      {label}
    </span>
  );
}

function PfDot({ color = "#00933c", size = 8, className = "", style }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: 999,
        background: color,
        boxShadow: `0 0 ${size}px ${color}66`,
        flex: "0 0 auto",
        ...(style || {}),
      }}
    />
  );
}

function PfImageSlot({ label = "Image", height, style }) {
  return (
    <div
      className="pf-stripes pf-meta"
      style={{
        width: "100%",
        height: height || "100%",
        background: "#0b0b0b",
        border: "1px solid var(--hairline)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--muted-2)",
        fontSize: 10,
        ...(style || {}),
      }}
    >
      {label}
    </div>
  );
}

function PfRule({ color = "var(--hairline)", thickness = 1 }) {
  return <div style={{ height: thickness, background: color, width: "100%" }} />;
}

// Live clock — updates every second
function useLiveClock() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function PfClock({ style }) {
  const now = useLiveClock();
  const pad = (n) => String(n).padStart(2, "0");
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  return (
    <span className="pf-meta" style={{ fontSize: 11, letterSpacing: "0.12em", ...(style || {}) }}>
      {hh}:{mm}:{ss}
    </span>
  );
}

function PfFooter() {
  return (
    <div
      className="pf-footer"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 24,
        padding: "12px 32px",
        borderTop: "1px solid var(--hairline-strong)",
        background: "#040404",
      }}
    >
      <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", justifySelf: "start" }}>
        © 2026 Nithin Aruswamy
      </span>
      <span className="pf-meta" style={{ fontSize: 9, color: "var(--muted-2)", display: "inline-flex", alignItems: "center", gap: 8 }}>
        <PfDot color="#00933c" className="pf-blink-pulse" />
        System Operational
      </span>
      <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", justifySelf: "end" }}>
        Inspired by Massimo Vignelli
      </span>
    </div>
  );
}

function PfStatusLights() {
  const items = [
    { color: "#00933c", label: "Online",   cls: "pf-blink-pulse pf-blink-1" },
    { color: "#ee352e", label: "Email",    cls: "pf-blink-pulse pf-blink-2", href: "mailto:nithin.alaska@gmail.com" },
    { color: "#0039a6", label: "LinkedIn", cls: "pf-blink-slow pf-blink-3",  href: "https://www.linkedin.com/in/aruswamy" },
    { color: "#fccc0a", label: "GitHub",   cls: "pf-blink pf-blink-4",       href: "https://github.com/nithin-arus" },
    { color: "#ff6319", label: "Twitter",  cls: "pf-blink pf-blink-5",       href: "https://x.com/nithinaru" },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }} className="pf-status-lights">
      {items.map((it) => {
        const inner = (
          <>
            <PfDot color={it.color} className={it.cls} />
            <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>{it.label}</span>
          </>
        );
        if (!it.href) {
          return (
            <span key={it.label} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              {inner}
            </span>
          );
        }
        return (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const lbl = e.currentTarget.querySelector("span.pf-meta");
              if (lbl) lbl.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const lbl = e.currentTarget.querySelector("span.pf-meta");
              if (lbl) lbl.style.color = "var(--muted)";
            }}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}

// Generic top board header used on every view
function PfBoardHeader({ stationCode, name, platform }) {
  const now = useLiveClock();
  const dayLabel = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }).replace(",", " ·");
  return (
    <div
      className="pf-board-header"
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: 24,
        padding: "14px 32px",
        borderBottom: "1px solid var(--hairline)",
        background: "#040404",
      }}
    >
      <div className="pf-meta" style={{ fontSize: 11, color: "var(--muted)" }}>
        <span style={{ color: "#fff" }}>{stationCode}</span>
        <span style={{ margin: "0 10px", color: "var(--muted-2)" }}>·</span>
        <span>{name}</span>
        {platform && (
          <>
            <span style={{ margin: "0 10px", color: "var(--muted-2)" }}>·</span>
            <span>Platform {platform}</span>
          </>
        )}
      </div>
      <div style={{ justifySelf: "center" }} className="pf-status-lights-wrap">
        <PfStatusLights />
      </div>
      <div className="pf-board-header-right" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <PfClock style={{ color: "#fff" }} />
        <span style={{ width: 1, height: 14, background: "var(--hairline)" }} />
        <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>{dayLabel}</span>
      </div>
    </div>
  );
}

Object.assign(window, {
  PF_LINES, PfBullet, PfDot, PfImageSlot, PfRule, PfClock, PfBoardHeader, PfStatusLights, PfFooter, useLiveClock,
});
