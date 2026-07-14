// Portfolio v2 — Awards view

function ViewAwards() {
  const rows = [
    { line: "Y", title: "1st Place Pitch",               org: "Berkeley MET.ia",     year: "2024", status: "Active" },
    { line: "G", title: "Top 10 Global Skills",          org: "VEX Robotics",        year: "2024", status: "Active" },
    { line: "B", title: "VEX Worlds Quarterfinalist",    org: "VEX Robotics",        year: "2023", status: "Active" },
    { line: "R", title: "State Seal of Biliteracy",      org: "Government of CA",    year: "2026", status: "Active" },
    { line: "O", title: "2nd Place Pitch",               org: "NFTE WSI",            year: "2025", status: "Active" },
    { line: "P", title: "Top 100 Pitch",                 org: "Blue Ocean",          year: "2025", status: "Active" },
    { line: "Y", title: "Finalist",                      org: "Conrad Challenge",    year: "2025", status: "Active" },
    { line: "G", title: "Finalist",                      org: "Genius Olympiad",     year: "2025", status: "Active" },
    { line: "B", title: "Finalist",                      org: "Paradigm Challenge",  year: "2025", status: "Active" },
    { line: "R", title: "2nd Place · Design Hackathon",  org: "CapCut",              year: "2026", status: "Active" },
    { line: "O", title: "1st Place · Hackathon",         org: "Apify",               year: "2026", status: "Active" },
  ].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N04" name="Awards &amp; Honors" />

      <div className="pf-scroll" style={{ flex: 1 }}>
        <div className="pf-view-pad" style={{ padding: "32px 40px 24px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-tighter pf-display-xl" style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02 }}>
            Awards
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="pf-tight" style={{ fontSize: 56, fontWeight: 700, lineHeight: 1 }}>{rows.length}</div>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginTop: 4 }}>Designations Logged</div>
          </div>
        </div>

        <table className="pf-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Line", "Designation", "Issuing Body", "Year", "Status"].map((h, i) => (
                <th key={h} className="pf-meta" style={{
                  textAlign: i >= 3 ? "right" : "left",
                  fontSize: 10, color: "var(--muted)", fontWeight: 500,
                  padding: i === 0 ? "16px 12px 16px 40px" : i === 4 ? "16px 40px 16px 12px" : "16px 12px",
                  borderBottom: "1px solid var(--hairline-strong)",
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.title}-${r.org}`} style={{ borderBottom: "1px solid var(--hairline)" }}>
                <td className="pf-cell-bullet" style={{ padding: "16px 12px 16px 40px", width: 80 }}>
                  <PfBullet label={r.title.charAt(0)} line={r.line} size={24} />
                </td>
                <td className="pf-tight pf-cell-title" style={{ padding: "16px 12px", fontSize: 19, fontWeight: 500 }}>
                  {r.title}
                </td>
                <td className="pf-cell-meta" style={{ padding: "16px 12px", fontSize: 13, color: "var(--muted)" }}>
                  {r.org}
                </td>
                <td className="pf-meta pf-cell-meta" style={{ padding: "16px 12px", fontSize: 11, color: "var(--muted)", textAlign: "right" }}>
                  {r.year}
                </td>
                <td className="pf-meta pf-cell-status" style={{ padding: "16px 40px 16px 12px", fontSize: 10, textAlign: "right" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: r.status === "Active" ? "#00933c" : "var(--muted)" }}>
                    <PfDot color={r.status === "Active" ? "#00933c" : "#6b6d70"} className={r.status === "Active" ? "pf-blink-slow" : ""} />
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Object.assign(window, { ViewAwards });
