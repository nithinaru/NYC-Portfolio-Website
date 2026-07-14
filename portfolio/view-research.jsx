// Portfolio v2 — Research & Patents view

function ViewResearch() {
  const projects = [
    { id: "PRJ-01", title: "Therapeuo",    sub: "Smart Insole",                role: "Co-founder",   year: "2026", status: "Live",     href: "https://therapeuo.xyz/" },
    { id: "PRJ-02", title: "OneDay",       sub: "Productivity App",            role: "Founder",      year: "2025", status: "Active",   href: "https://apps.apple.com/us/app/oneday-by-nithin-aruswamy/id6755661127" },
    { id: "PRJ-04", title: "Jet-Set Teen", sub: "Travel Guide",                role: "Author",       year: "2024", status: "Active",   href: "https://www.amazon.com/Jet-Set-Teen-International-Travels-Budgeting/dp/B0DF6VKC18" },
    { id: "PRJ-03", title: "Terran",       sub: "Autonomous Farming",          role: "Co-Founder",   year: "2025", status: "Archived", href: "https://youtu.be/HTlI9NxZe-g?si=V1cE4Rpiqy2UMVoT" },
  ];
  const papers = [
    { id: "P-01", title: "Math Modeling & Geometry for Fabric Analysis",       venue: "TMLR",                       year: "2025", status: "Published", cite: 2,   href: "https://openreview.net/pdf/7a75b4e1e1528208c787ca2058ed083741cc29b7.pdf" },
    { id: "P-02", title: "Textile Microtexture Dataset",                       venue: "Harvard Dataverse",          year: "2025", status: "Published", cite: 320, href: "https://doi.org/10.7910/DVN/KUDCQX" },
    { id: "P-03", title: "Efficient Micro-Agriculture System",                 venue: "Youth Innovators Journal",   year: "2024", status: "Published", cite: 0,   href: "https://static1.squarespace.com/static/68f03354b22f613e25f92137/t/6902d275baad1a1ef23948ee/1761792629466/YIJ+-+SHIELD.pdf" },
    { id: "P-04", title: "Computer Vision Pipeline for MSE Microtextures",     venue: "ArXiv",                      year: "2024", status: "Preprint",  cite: 0,   href: "https://github.com/nithinaru/microtexture" },
  ];
  const patents = [
    { id: "63/742,004", title: "Sustainable Harvesting and Integrated Efficient Land Defense", year: "2023", status: "Granted" },
  ];

  const byYearDesc = (a, b) => Number(b.year) - Number(a.year);
  projects.sort(byYearDesc);
  papers.sort(byYearDesc);
  patents.sort(byYearDesc);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N03" name="Research &amp; Patents" />

      <div className="pf-scroll" style={{ flex: 1 }}>
        <div className="pf-view-pad" style={{ padding: "32px 40px 24px", borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-title-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div className="pf-tighter pf-display-xl" style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02 }}>
              Research<span style={{ color: "var(--muted-2)" }}> &amp; </span>Patents
            </div>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", textAlign: "right", paddingBottom: 12 }}>
              {projects.length} Projects · {papers.length} Research · {patents.length} Patent{patents.length === 1 ? "" : "s"}
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div style={{ borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-section-head" style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "16px 40px", borderBottom: "1px solid var(--hairline)",
          }}>
            <PfBullet label="P" line="O" size={24} />
            <div className="pf-tight" style={{ fontSize: 20, fontWeight: 700 }}>Projects</div>
            <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <PfDot color="#ff6319" className="pf-blink-pulse" /> Live · Active · Archived
            </span>
          </div>
          {projects.map((p, i, a) => {
            const stColor = p.status === "Live" ? "#00933c" : p.status === "Active" ? "#fccc0a" : "var(--muted)";
            const stDot   = p.status === "Live" ? "#00933c" : p.status === "Active" ? "#fccc0a" : "#6b6d70";
            return (
              <div key={p.id} className="pf-row-grid" style={{
                display: "grid",
                gridTemplateColumns: "110px 1fr auto auto auto",
                gap: 20,
                alignItems: "center",
                padding: "16px 40px",
                borderBottom: i === a.length - 1 ? 0 : "1px solid var(--hairline)",
              }}>
                <span className="pf-meta pf-row-id" style={{ fontSize: 11, color: "var(--muted)" }}>{p.id}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pf-tight pf-row-title"
                  style={{ fontSize: 19, fontWeight: 500, color: "#fff", textDecoration: "none" }}
                >
                  {p.title}
                  {p.sub && (
                    <span style={{ color: "var(--muted)" }}> - {p.sub}</span>
                  )}
                </a>
                <span className="pf-row-meta" style={{ fontSize: 13, color: "var(--muted)" }}>{p.role}</span>
                <span className="pf-meta pf-row-meta" style={{ fontSize: 11, color: "var(--muted)" }}>{p.year}</span>
                <span className="pf-meta pf-row-status" style={{ fontSize: 10, color: stColor, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <PfDot color={stDot} className={p.status !== "Archived" ? "pf-blink-slow" : ""} />
                  {p.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Papers section */}
        <div style={{ borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-section-head" style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "16px 40px", borderBottom: "1px solid var(--hairline)",
          }}>
            <PfBullet label="R" line="G" size={24} />
            <div className="pf-tight" style={{ fontSize: 20, fontWeight: 700 }}>Research</div>
            <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <PfDot color="#00933c" className="pf-blink-pulse" /> Published &amp; Preprint
            </span>
          </div>
          <table className="pf-table" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["ID", "Title", "Venue", "Year", "Cites", "Status"].map((h, i) => (
                  <th key={h} className="pf-meta" style={{
                    textAlign: i >= 3 ? "right" : "left",
                    fontSize: 10, color: "var(--muted)",
                    fontWeight: 500,
                    padding: i === 0 ? "12px 12px 12px 40px" : i === 5 ? "12px 40px 12px 12px" : "12px 12px",
                    borderBottom: "1px solid var(--hairline-strong)",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {papers.map((p) => (
                <tr key={p.id} style={{ borderBottom: "1px solid var(--hairline)" }}>
                  <td className="pf-meta pf-cell-meta" style={{ padding: "14px 12px 14px 40px", fontSize: 11, color: "var(--muted)" }}>{p.id}</td>
                  <td className="pf-tight pf-cell-title" style={{ padding: "14px 12px", fontSize: 17, fontWeight: 500 }}>
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noreferrer noopener" style={{ color: "#fff", textDecoration: "none" }}>{p.title}</a>
                    ) : p.title}
                  </td>
                  <td className="pf-cell-meta" style={{ padding: "14px 12px", fontSize: 13, color: "var(--muted)" }}>{p.venue}</td>
                  <td className="pf-meta pf-cell-meta" style={{ padding: "14px 12px", fontSize: 11, color: "var(--muted)", textAlign: "right" }}>{p.year}</td>
                  <td className="pf-tight pf-cell-meta" style={{ padding: "14px 12px", fontSize: 16, fontWeight: 600, textAlign: "right" }}>{p.cite}</td>
                  <td className="pf-meta pf-cell-status" style={{ padding: "14px 40px 14px 12px", fontSize: 10, textAlign: "right" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: p.status === "Preprint" ? "#fccc0a" : "#00933c" }}>
                      <PfDot color={p.status === "Preprint" ? "#fccc0a" : "#00933c"} className="pf-blink-slow" />
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Patents section */}
        <div>
          <div className="pf-section-head" style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "16px 40px", borderBottom: "1px solid var(--hairline)",
          }}>
            <PfBullet label="P" line="B" size={24} />
            <div className="pf-tight" style={{ fontSize: 20, fontWeight: 700 }}>Patents</div>
            <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <PfDot color="#0039a6" className="pf-blink-pulse" /> Filed / Granted
            </span>
          </div>
          {patents.map((p, i, a) => (
            <div key={p.id} className="pf-row-grid" style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto auto",
              gap: 20,
              alignItems: "center",
              padding: "18px 40px",
              borderBottom: i === a.length - 1 ? 0 : "1px solid var(--hairline)",
            }}>
              <span className="pf-meta pf-row-id" style={{ fontSize: 11, color: "var(--muted)", width: 110 }}>{p.id}</span>
              <span className="pf-tight pf-row-title" style={{ fontSize: 18, fontWeight: 500 }}>{p.title}</span>
              <span className="pf-meta pf-row-meta" style={{ fontSize: 11, color: "var(--muted)" }}>{p.year}</span>
              <span className="pf-meta pf-row-status" style={{ fontSize: 10, color: p.status === "Pending" ? "#fccc0a" : "#00933c", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <PfDot color={p.status === "Pending" ? "#fccc0a" : "#00933c"} className="pf-blink-slow" />
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ViewResearch });
