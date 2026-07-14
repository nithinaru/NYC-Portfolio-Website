// Portfolio v2 — Experience view ("Career Line")
// Treats job history as a route with stations (stops)

function ViewExperience() {
  const stops = [
    { current: true,  role: "Operations Researcher",     co: "UC Davis · Graduate School of Management", dates: "May 2026 — Present", loc: "Davis, CA",     desc: "Built a donor allocation framework across 500k+ records to improve outreach ROI." },
    { role: "Teacher Assistant",                        co: "UC Berkeley Haas · B-BAY",   dates: "Sep 2025 — May 2026", loc: "Berkeley, CA",  desc: "Guided student founders in launching scalable ventures at Berkeley Business Academy for Youth.", href: "https://haas.berkeley.edu/business-academy/careers/instructors/", linkColor: "#fccc0a" },
    { role: "Founder",                                   co: "OneDay",                      dates: "Aug 2025 — Dec 2025", loc: "Onsite",        desc: "Built full-stack productivity iOS app with 5,000+ users across 30 countries.", href: "https://apps.apple.com/us/app/oneday-by-nithin-aruswamy/id6755661127", linkColor: "#00933c" },
    { role: "Machine Learning Researcher",               co: "UC Irvine · EECS Lab",        dates: "Aug 2025 — Dec 2025", loc: "Irvine, CA",    desc: "Created novel AI pipeline with computer vision for fabric categorization and wear prediction.", href: "https://www.xia-lab.com/team", linkColor: "#b933ad" },
    { role: "Product Engineer",                          co: "Gamr (Techstars '23)",        dates: "Jul 2024 — Feb 2026", loc: "Onsite",        desc: "Built AMA, an AI-powered career guide for gamers at Africa's #1 gaming platform.", href: "https://www.gamr.africa/", linkColor: "#0039a6" },
    { role: "Robotics Instructor",                       co: "Robolabs",                    dates: "Jun 2023 — Nov 2025", loc: "Bay Area, CA",  desc: "Mentored 10+ middle school teams to global success and managed logistics for the global VEX event at UC Berkeley.", href: "https://www.robolabs.org/", linkColor: "#ee352e" },
    { role: "Author",                                    co: "Jet-Set Teen",                dates: "Jun 2021 — Sep 2024", loc: "Onsite",        desc: "Explored 50+ countries and published Amazon #1 New Release (Travel Guide).", href: "https://www.amazon.com/Jet-Set-Teen-International-Travels-Budgeting/dp/B0DF6VKC18", linkColor: "#ff6319" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N02" name="Experience" />

      <div className="pf-scroll pf-view-pad" style={{ flex: 1, padding: "32px 40px 40px" }}>
        {/* Title */}
        <div className="pf-title-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
          <div className="pf-tighter pf-display-xl" style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02 }}>
            Experience
          </div>
          <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", paddingBottom: 12, textAlign: "right" }}>
            Line O · {stops.length} Stops<br />
            Origin → Present
          </div>
        </div>

        {/* Route */}
        <div className="pf-experience-route" style={{ position: "relative", paddingLeft: 56 }}>
          {stops.map((s, i) => (
            <div key={`${s.role}-${s.co}`} style={{ display: "grid", gridTemplateColumns: "1fr", paddingBottom: i === stops.length - 1 ? 0 : 28, position: "relative" }}>
              {/* Connector segment from this dot down to the next (omit on last stop) */}
              {i < stops.length - 1 && (
                <div
                  className="pf-exp-connector"
                  style={{
                    position: "absolute",
                    left: -42,        /* dot center (-56 + 18) - half of line width (4) */
                    top: 42,          /* bottom of dot: top 6 + height 36 */
                    bottom: -6,       /* extend to top of next row's dot (top:6) */
                    width: 8,
                    background: "#ff6319",
                  }}
                />
              )}

              {/* Stop disc */}
              <div
                className="pf-exp-disc"
                style={{
                  position: "absolute",
                  left: -56,
                  top: 6,
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: "#fff",
                  border: "5px solid #ff6319",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {s.current && (
                  <PfDot color="#ff6319" size={12} className="pf-blink-pulse" />
                )}
              </div>

              {/* Content */}
              <div className="pf-exp-card" style={{
                border: "1px solid var(--hairline)",
                background: s.current ? "#0c0c0c" : "transparent",
                padding: "16px 20px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 16,
                alignItems: "start",
                position: "relative",
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    {s.current && (
                      <span className="pf-meta" style={{ fontSize: 9, color: "#ff6319", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <PfDot color="#ff6319" className="pf-blink" />
                        Now Serving
                      </span>
                    )}
                  </div>
                  <div className="pf-tight" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>
                    {s.role}
                  </div>
                  <div className="pf-tight" style={{ fontSize: 16, color: "var(--muted)", marginTop: 2 }}>
                    {s.co}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 10, lineHeight: 1.5, maxWidth: 640 }}>
                    {s.desc}
                  </div>
                </div>
                <div className="pf-exp-meta" style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 6 }}>
                  <span className="pf-meta" style={{ fontSize: 11, color: "#fff", fontWeight: 600 }}>
                    {s.dates}
                  </span>
                  <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>
                    {s.loc}
                  </span>
                </div>
                {s.href && (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Open link for ${s.role}`}
                    className="pf-exp-link"
                    style={{
                      position: "absolute",
                      right: 14,
                      bottom: 14,
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      background: s.linkColor || "#fff",
                      color: PF_LINES[Object.keys(PF_LINES).find(k => PF_LINES[k].color === s.linkColor)]?.fg || "#000",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    <svg
                      className="pf-exp-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      style={{ display: "block" }}
                    >
                      <line x1="6" y1="18" x2="18" y2="6" />
                      <polyline points="8,6 18,6 18,16" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ViewExperience });
