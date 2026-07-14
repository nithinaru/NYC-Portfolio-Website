// Portfolio v2 — Home view ("Main Terminal")

function ViewHome() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PfBoardHeader stationCode="N01" name="Main Terminal" />

      <div className="pf-scroll" style={{ flex: 1 }}>
        {/* Marquee headline */}
        <div className="pf-view-pad" style={{ padding: "44px 40px 28px", borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-meta" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
            <PfDot color="#fccc0a" className="pf-blink" />
            Now Arriving · Platform 1
          </div>
          <div
            className="pf-tighter pf-display-2xl"
            style={{ fontSize: 116, fontWeight: 500, lineHeight: 1.02 }}
          >
            Main Terminal
          </div>
          <div
            className="pf-tight"
            style={{ fontSize: 26, color: "var(--muted)", marginTop: 20, fontWeight: 400, lineHeight: 1.3 }}
          >
            Student at UC Berkeley
          </div>
        </div>

        {/* Two-column body */}
        <div className="pf-2col" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", borderBottom: "1px solid var(--hairline)" }}>
          <div className="pf-view-pad" style={{ borderRight: "1px solid var(--hairline)", padding: 32, display: "flex", flexDirection: "column" }}>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>Fig. 01 — Recent Stamps</span>
              <span style={{ color: "var(--muted-2)" }}>Total Visited · 53</span>
            </div>
            <div style={{ border: "1px solid var(--hairline)", background: "#070707" }}>
              {[
                { country: "Bolivia",  code: "BO", when: "Spring 2026", flag: "BO" },
                { country: "Chile",    code: "CL", when: "Spring 2026", flag: "CL" },
                { country: "Colombia", code: "CO", when: "Summer 2025", flag: "CO" },
                { country: "Brazil",   code: "BR", when: "Summer 2025", flag: "BR" },
                { country: "Peru",     code: "PE", when: "Summer 2025", flag: "PE" },
              ].map((c, i, a) => (
                <div
                  key={c.code}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr auto",
                    gap: 14,
                    alignItems: "center",
                    padding: "12px 14px",
                    borderBottom: i === a.length - 1 ? 0 : "1px solid var(--hairline)",
                  }}
                >
                  <PfFlag code={c.flag} />
                  <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                    <span className="pf-tight" style={{ fontSize: 18, fontWeight: 600 }}>{c.country}</span>
                    <span className="pf-meta" style={{ fontSize: 9, color: "var(--muted-2)", marginTop: 3 }}>{c.code}</span>
                  </div>
                  <span className="pf-meta" style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>{c.when}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pf-view-pad" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>About</div>
            <div className="pf-tight" style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 500 }}>
              Hey, I'm Nithin 👋
            </div>
            <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55 }}>
              I study Operations Research &amp; Math at UC Berkeley. I'm heavily invested in
              agricultural automation and smart wearable technology. I currently work
              as an operations researcher at the UC Davis Graduate School of Management.
            </div>
            <div style={{ marginTop: "auto", paddingTop: 12 }}>
              <PfStatPair k="Now Operating" v="Student · Researcher" />
              <PfStatPair k="Based" v="SF, California" />
              <PfStatPair k="In Service Since" v="2026" />
            </div>
          </div>
        </div>

        {/* Departure board feel — current focuses */}
        <div className="pf-view-pad" style={{ padding: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <PfDot color="#00933c" className="pf-blink-pulse" />
            <div className="pf-tight" style={{ fontSize: 22, fontWeight: 700 }}>
              Next Departures
            </div>
            <div className="pf-meta" style={{ fontSize: 10, color: "var(--muted)", marginLeft: "auto" }}>
              Updated <PfClock />
            </div>
          </div>
          {[
            {
              icon: "B", line: "G", time: "Now", st: "Live", stc: "#00933c",
              dest: (
                <>
                  Building World's 1st Mass-Market{" "}
                  <a
                    href="https://therapeuo.xyz/"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ color: "#9aa0a6", textDecoration: "none" }}
                  >
                    Smart Insole
                  </a>
                </>
              ),
            },
            {
              icon: "O", line: "Y", time: "Now", st: "Live", stc: "#00933c",
              dest: (
                <>
                  Operations Research in{" "}
                  <span style={{ color: "#9aa0a6" }}>Marketing Analytics</span>
                </>
              ),
            },
            {
              icon: "T", line: "P", time: "Q3", st: "Planned", stc: "#fccc0a",
              dest: (
                <>
                  Designing a{" "}
                  <a
                    href="https://github.com/nithinaru/Truffle"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ color: "#9aa0a6", textDecoration: "none" }}
                  >
                    Natural Language Optimizer
                  </a>
                </>
              ),
            },
            { icon: "O", line: "B", time: "—",    dest: "[Open to opportunities]",  st: "Standby",  stc: "#a7a9ac" },
          ].map((d, i, a) => (
            <div key={`${d.icon}-${d.time}-${d.st}`} className="pf-departure-row"
              style={{
                display: "grid",
                gridTemplateColumns: "28px 80px 1fr auto",
                gap: 16,
                alignItems: "center",
                padding: "16px 0",
                borderTop: "1px solid var(--hairline)",
                borderBottom: i === a.length - 1 ? "1px solid var(--hairline)" : 0,
              }}
            >
              <PfBullet label={d.icon} line={d.line} size={22} />
              <span className="pf-tight pf-departure-time" style={{ fontSize: 22, fontWeight: 600 }}>{d.time}</span>
              <span className="pf-tight" style={{ fontSize: 22, fontWeight: 500 }}>{d.dest}</span>
              <span className="pf-meta" style={{ fontSize: 11, color: d.stc, display: "inline-flex", alignItems: "center", gap: 6 }}>
                <PfDot color={d.stc} className="pf-blink-slow" />
                {d.st}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PfFlag({ code, width = 56, height = 32 }) {
  const shared = {
    width,
    height,
    style: { display: "block", border: "1px solid #1a1a1a" },
    preserveAspectRatio: "none",
  };
  if (code === "BO") {
    return (
      <svg viewBox="0 0 9 6" {...shared}>
        <rect width="9" height="2" y="0" fill="#d52b1e" />
        <rect width="9" height="2" y="2" fill="#f9e300" />
        <rect width="9" height="2" y="4" fill="#007a33" />
      </svg>
    );
  }
  if (code === "CL") {
    return (
      <svg viewBox="0 0 30 20" {...shared}>
        <rect width="30" height="10" fill="#ffffff" />
        <rect y="10" width="30" height="10" fill="#d52b1e" />
        <rect width="10" height="10" fill="#0039a6" />
        <polygon
          points="5,1.6 5.88,4.32 8.74,4.32 6.43,5.99 7.31,8.71 5,7.04 2.69,8.71 3.57,5.99 1.26,4.32 4.12,4.32"
          fill="#ffffff"
        />
      </svg>
    );
  }
  if (code === "CO") {
    return (
      <svg viewBox="0 0 6 4" {...shared}>
        <rect width="6" height="2" fill="#fcd116" />
        <rect y="2" width="6" height="1" fill="#003893" />
        <rect y="3" width="6" height="1" fill="#ce1126" />
      </svg>
    );
  }
  if (code === "BR") {
    return (
      <svg viewBox="0 0 100 70" {...shared}>
        <rect width="100" height="70" fill="#009c3b" />
        <polygon points="50,9 91,35 50,61 9,35" fill="#ffdf00" />
        <circle cx="50" cy="35" r="13" fill="#002776" />
      </svg>
    );
  }
  if (code === "PE") {
    return (
      <svg viewBox="0 0 9 6" {...shared}>
        <rect x="0" width="3" height="6" fill="#d52b1e" />
        <rect x="3" width="3" height="6" fill="#ffffff" />
        <rect x="6" width="3" height="6" fill="#d52b1e" />
      </svg>
    );
  }
  return null;
}

function PfStatPair({ k, v }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "10px 0",
      borderTop: "1px solid var(--hairline)",
    }}>
      <span className="pf-meta" style={{ fontSize: 10, color: "var(--muted)" }}>{k}</span>
      <span className="pf-tight" style={{ fontSize: 15, fontWeight: 500 }}>{v}</span>
    </div>
  );
}

Object.assign(window, { ViewHome, PfStatPair, PfFlag });
