// Portfolio v2 — Interests & Skills view

function ViewInterests() {
  const skillGroups = [
    { line: "B", title: "Engineering",  items: ["iOS App Development", "Autonomous Systems", "Control Systems (PID)", "Stochastic Processes", "Robotics", "GPIO"] },
    { line: "G", title: "Systems",      items: ["Embedded Systems", "Sensor Integration", "Bluetooth Low Energy (BLE)", "Hydroponic Systems"] },
    { line: "Y", title: "Design",       items: ["UI/UX Design", "Hardware Prototyping", "Human-Centric Design"] },
    { line: "O", title: "Tools",        items: ["Nvidia Jetson", "CAD", "Xcode", "Figma", "GitHub", "Claude Code"] },
    { line: "R", title: "Languages",    items: ["Swift", "Java", "Python", "R", "C++"] },
  ];

  const interests = [
    "Operations Research",
    "Smart Wearable Tech",
    "Autonomous Farming",
    "Battery Cell Technology",
    "Nuclear Energy",
    "Global Travel",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N05" name="Interests &amp; Skills" />

      <div className="pf-scroll" style={{ flex: 1 }}>
        <div className="pf-view-pad" style={{ padding: "32px 40px 24px", borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-tighter pf-display-xl" style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02 }}>
            Interests<span style={{ color: "var(--muted-2)" }}> &amp; </span>Skills
          </div>
          <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 8, maxWidth: 620 }}>
            Areas I work in and topics I nerd out on — from PID loops to power-grid policy.
          </div>
        </div>

        {/* Skills grid */}
        <div className="pf-view-pad" style={{ padding: "28px 40px", borderBottom: "1px solid var(--hairline)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <PfDot color="#0039a6" className="pf-blink-pulse" />
            <div className="pf-tight" style={{ fontSize: 22, fontWeight: 700 }}>Skills</div>
            <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto" }}>
              {skillGroups.reduce((n, g) => n + g.items.length, 0)} Designations · {skillGroups.length} Lines
            </span>
          </div>

          <div className="pf-3col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, border: "1px solid var(--hairline)" }}>
            {skillGroups.map((g, gi) => (
              <div key={g.title} style={{
                padding: "18px 20px",
                borderBottom: gi < skillGroups.length - (skillGroups.length % 2 === 0 ? 2 : 1) ? "1px solid var(--hairline)" : 0,
                borderRight: gi % 2 === 0 ? "1px solid var(--hairline)" : 0,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <PfBullet label={g.title[0]} line={g.line} size={22} />
                  <div className="pf-tight" style={{ fontSize: 18, fontWeight: 700 }}>{g.title}</div>
                  <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto" }}>{g.items.length} stops</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {g.items.map((s) => (
                    <span key={s} className="pf-tight" style={{
                      fontSize: 13,
                      padding: "5px 10px",
                      border: "1px solid var(--hairline-strong)",
                      color: "#fff",
                      fontWeight: 500,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="pf-view-pad" style={{ padding: "28px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <PfDot color="#b933ad" className="pf-blink-pulse" />
            <div className="pf-tight" style={{ fontSize: 22, fontWeight: 700 }}>Interests</div>
            <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto" }}>{interests.length} Stops</span>
          </div>
          <div className="pf-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--hairline)" }}>
            {interests.map((it, i) => (
              <div key={it} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "16px 18px",
                borderRight: (i % 3) !== 2 ? "1px solid var(--hairline)" : 0,
                borderTop: i >= 3 ? "1px solid var(--hairline)" : 0,
              }}>
                <PfBullet label={String(i + 1).padStart(2, "0")} line="P" size={28} style={{ fontSize: 10 }} />
                <span className="pf-tight" style={{ fontSize: 18, fontWeight: 500 }}>{it}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ViewInterests });
