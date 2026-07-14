// Portfolio v2 — sidebar nav with grouped tabs + travel blog button

function PfSidebar({ tab, setTab, tabs, open }) {
  // Split into two groups: Main Routes / Connecting Service
  const groupA = tabs.filter((t) => t.group === "main");
  const groupB = tabs.filter((t) => t.group === "connect");

  return (
    <aside
      id="portfolio-navigation"
      className={"pf-sidebar" + (open ? " pf-open" : "")}
      style={{
        width: 320,
        flex: "0 0 320px",
        borderRight: "1px solid var(--hairline-strong)",
        display: "flex",
        flexDirection: "column",
        background: "#000",
        position: "relative",
      }}
    >
      {/* Identity plate */}
      <div style={{ padding: "26px 24px 20px", borderBottom: "1px solid var(--hairline-strong)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <PfBullet label="N" line="Y" size={36} />
          <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>
            <PfDot color="#00933c" className="pf-blink-pulse" style={{ marginRight: 6 }} />
            Live · System Map 2026
          </div>
        </div>
        <div className="pf-tighter" style={{ fontSize: 38, fontWeight: 500, lineHeight: 1.1 }}>
          Nithin<br />
          <span style={{ color: "var(--muted)" }}>Aruswamy</span>
        </div>
        <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted-2)", marginTop: 10 }}>
          Last Serviced on {new Date().toLocaleDateString("en-US")}
        </div>
      </div>

      {/* Tabs */}
      <nav className="pf-scroll" aria-label="Portfolio sections" style={{ flex: 1, padding: "10px 0" }}>
        <PfTabGroup heading="Main Routes" tabs={groupA} tab={tab} setTab={setTab} />
        <div style={{ height: 14 }} />
        <PfTabGroup heading="Shortcuts" tabs={groupB} tab={tab} setTab={setTab} />
      </nav>

      {/* Travel blog — under construction; arrow nudges on hover */}
      <button
        type="button"
        className="pf-travel"
        disabled
        aria-disabled="true"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: 14,
          padding: "20px 24px",
          background: "#fccc0a",
          color: "#000",
          textDecoration: "none",
          border: 0,
          borderTop: "1px solid var(--hairline-strong)",
          textAlign: "left",
          cursor: "not-allowed",
          width: "100%",
          font: "inherit",
        }}
      >
        <PfBullet label="T" line="O" size={28} />
        <div>
          <div className="pf-tight" style={{ fontSize: 18, fontWeight: 700, lineHeight: 1 }}>
            Travel Blog
          </div>
          <div className="pf-meta" style={{ fontSize: 9, color: "#3a2f00", marginTop: 4, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <PfDot color="#3a2f00" className="pf-blink" />
            Under Construction
          </div>
        </div>
        <span className="pf-travel-arrow" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "transform 180ms ease" }}>
          <svg
            width="32"
            height="22"
            viewBox="0 0 32 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            style={{ display: "block" }}
          >
            <line x1="2" y1="12" x2="26" y2="12" />
            <polyline points="20,4 28,12 20,20" />
          </svg>
        </span>
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 24px",
          borderTop: "1px solid var(--hairline-strong)",
        }}
        className="pf-meta"
      >
        <span style={{ fontSize: 9, color: "var(--muted-2)" }}>37.7749°N / 122.4194°W</span>
        <span style={{ fontSize: 9, color: "var(--muted-2)" }}>V1.0</span>
      </div>
    </aside>
  );
}

function PfTabGroup({ heading, tabs, tab, setTab }) {
  return (
    <div>
      <div
        className="pf-meta"
        style={{
          fontSize: 9,
          color: "var(--muted-2)",
          padding: "6px 24px 8px",
          letterSpacing: "0.16em",
        }}
      >
        {heading}
      </div>
      {tabs.map((t) => {
        const active = t.id === tab;
        return (
          <button
            key={t.id}
            className="pf-tab"
            aria-current={active ? "page" : undefined}
            onClick={() => setTab(t.id)}
            style={{
              display: "grid",
              gridTemplateColumns: "32px 1fr auto",
              alignItems: "center",
              gap: 12,
              width: "100%",
              textAlign: "left",
              padding: "13px 24px",
              background: active ? "#0c0c0c" : "transparent",
              border: 0,
              borderTop: active ? "1px solid #fff" : "1px solid transparent",
              borderBottom: active ? "1px solid #fff" : "1px solid transparent",
              cursor: "pointer",
              color: active ? "#fff" : "var(--muted)",
            }}
          >
            {active ? (
              <PfBullet label={t.num} line={t.line} size={26} />
            ) : (
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 999,
                  border: "1px solid var(--hairline-strong)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  color: "var(--muted-2)",
                  fontWeight: 500,
                }}
              >
                {t.num}
              </span>
            )}
            <span
              className="pf-tight pf-tab-label"
              style={{ fontSize: 18, fontWeight: active ? 700 : 500 }}
            >
              {t.label}
            </span>
            {active && (
              <PfDot color={PF_LINES[t.line].color} className="pf-blink-pulse" />
            )}
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { PfSidebar });
