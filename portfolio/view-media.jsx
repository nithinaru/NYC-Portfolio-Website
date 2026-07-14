// Portfolio v2 — Favorite Media view

function ViewMedia() {
  const cols = [
    {
      line: "R",
      title: "Books",
      items: [
        { t: "Dune",                     a: "Frank Herbert",           y: "1965", n: "★ Currently reading" },
        { t: "Build",                    a: "Tony Fadell",            y: "2022" },
        { t: "Meditations",              a: "Marcus Aurelius",        y: "170 CE" },
        { t: "Ikigai",                   a: "Francesc Miralles",      y: "2018" },
        { t: "Prisoners of Geography",   a: "Tim Marshall",           y: "2015" },
      ],
    },
    {
      line: "B",
      title: "Films",
      items: [
        { t: "In Whose Name?",                       a: "Nico Ballesteros",  y: "2025" },
        { t: "Captain America: The Winter Soldier",  a: "Russo Brothers",    y: "2014" },
        { t: "Schindler's List",                     a: "Steven Spielberg",  y: "1993" },
        { t: "Big Hero 6",                           a: "Don Hall",          y: "2014" },
        { t: "F1",                                   a: "Joseph Kosinski",   y: "2025" },
      ],
    },
    {
      line: "G",
      title: "Albums",
      items: [
        { t: "Yeezus",                a: "Kanye West",   y: "2013", n: "★ On rotation" },
        { t: "Jackman.",              a: "Jack Harlow",  y: "2023" },
        { t: "Honestly, Nevermind",   a: "Drake",        y: "2022" },
        { t: "Diamante",              a: "Gordo",        y: "2024" },
        { t: "IN LOVING MEMORY+",     a: "Sean Leon",    y: "2023" },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N06" name="Favorite Media" />

      <div className="pf-scroll" style={{ flex: 1 }}>
        <div className="pf-view-pad" style={{ padding: "32px 40px 24px", borderBottom: "1px solid var(--hairline)", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end" }}>
          <div className="pf-tighter pf-display-xl" style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02 }}>
            Library
          </div>
          <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", paddingBottom: 12, textAlign: "right", display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <PfDot color="#fccc0a" className="pf-blink" />
              Indexing · Continuous
            </span>
            <span>Updated <PfClock /></span>
          </div>
        </div>

        <div className="pf-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {cols.map((c, ci) => (
            <div key={c.title} style={{ borderRight: ci < cols.length - 1 ? "1px solid var(--hairline)" : 0 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "16px 24px",
                borderBottom: "1px solid var(--hairline)",
              }}>
                <PfBullet label={c.title[0]} line={c.line} size={22} />
                <div className="pf-tight" style={{ fontSize: 20, fontWeight: 700 }}>{c.title}</div>
                <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto" }}>{c.items.length}</span>
              </div>
              <div>
                {c.items.map((it, i, arr) => (
                  <div key={i} style={{
                    padding: "14px 24px",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--hairline)" : 0,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                      <span className="pf-tight" style={{ fontSize: 17, fontWeight: 500 }}>{it.t}</span>
                      <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>{it.y}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{it.a}</div>
                    {it.n && (
                      <div className="pf-meta" style={{
                        fontSize: 9,
                        color: PF_LINES[c.line].color,
                        marginTop: 6,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}>
                        <PfDot color={PF_LINES[c.line].color} className="pf-blink" />
                        {it.n.replace("★ ", "")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pf-view-pad pf-media-footer" style={{ padding: "20px 40px", borderTop: "1px solid var(--hairline)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>
            Library is non-exhaustive · Last revised July 2026
          </span>
          <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <PfDot color="#00933c" className="pf-blink-pulse" />
            Open to recommendations
          </span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ViewMedia });
