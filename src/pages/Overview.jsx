import { useEffect } from 'react'

export default function Overview() {

  // Accordion toggle
  useEffect(() => {
    function handleAccordion(e) {
      const trigger = e.target.closest('.accordion-trigger')
      if (!trigger) return
      const item = trigger.closest('.accordion-item')
      const body = item && item.querySelector('.accordion-body')
      const isOpen = trigger.getAttribute('aria-expanded') === 'true'
      const accordion = trigger.closest('.accordion')
      if (accordion) {
        accordion.querySelectorAll('.accordion-trigger').forEach(t => {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false')
            const b = t.closest('.accordion-item')?.querySelector('.accordion-body')
            if (b) b.classList.remove('open')
          }
        })
      }
      trigger.setAttribute('aria-expanded', String(!isOpen))
      if (body) body.classList.toggle('open', !isOpen)
    }
    document.addEventListener('click', handleAccordion)
    return () => document.removeEventListener('click', handleAccordion)
  }, [])

  return (
    <>
      
    <div className="page-header">
      <p className="hero-eyebrow" style={{ fontSize: "10px", fontWeight: 500, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mds-color-cyan-500)", marginBottom: "10px" }}>McKinsey &amp; Company · MCS · September 2026</p>
      <h1>ServiceNow Platform Strategy &amp; Enablement</h1>
      <p className="page-subtitle">Discovery Brief — Round 1 Findings · 14 interviews across 7 functional areas</p>
      <div className="summary-meta" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="summary-meta-item"><strong>Version</strong>0.3 — Draft for review</div>
        <div className="summary-meta-item"><strong>Period</strong>Sep 8 – Sep 18, 2026</div>
        <div className="summary-meta-item"><strong>Scope</strong>Operations, SOM, Observability, CMDB, DTO, Practices, IAM</div>
      </div>
    </div>

    <div className="page-content">

      
      <div className="section">
        <div className="sec-label">Section 1 of 4</div>
        <h2 className="sec-heading">Current Lay of the Land</h2>

        <div className="discovery-grid">

          
          <div className="disc-card">
            <div className="disc-card-header">
              <div className="disc-card-icon blue">🖥️</div>
              <div>
                <div className="disc-card-title">Platform &amp; License State</div>
                <div className="disc-card-sub">What we know about the instance today</div>
              </div>
            </div>
            <ul className="disc-list">
              <li><span className="bullet bullet-blue"></span><span><strong>Version:</strong> Production environment is on the <strong>Australia release</strong> (pending confirmation with Philip). Interview participants generally lacked visibility into the platform version in use.</span></li>
              <li><span className="bullet bullet-amber"></span><span><strong>License inventory:</strong> License counts under validation — numbers ordered, assigned, in-use, and spare (including ITSM, GRC, and other license types) to be confirmed by Priti. The ~40% inactive figure is unvalidated.</span></li>
              <li><span className="bullet bullet-green"></span><span><strong>Now Assist access:</strong> All teams have access to Now Assist as part of the ServiceNow platform subscription. Basic features (incident summarization, case summarization, Now Assist panel) are broadly available.</span></li>
              <li><span className="bullet bullet-blue"></span><span><strong>Modules confirmed in use:</strong> ITSM — all teams (includes on-call scheduling); SIR — 3 teams; ITOM / Event Management — 2 teams; IRM — 1 team; CSM/Cases — 5 teams total (STA within DTO/operations scope); GRC; IAM self-service forms.</span></li>
            </ul>
          </div>

          
          <div className="disc-card">
            <div className="disc-card-header">
              <div className="disc-card-icon amber">🔧</div>
              <div>
                <div className="disc-card-title">Customization Depth</div>
                <div className="disc-card-sub">The hidden technical debt across all teams</div>
              </div>
            </div>
            <ul className="disc-list">
              <li><span className="bullet bullet-red"></span><span><strong>No team can list their own customizations.</strong> Teams know changes exist but cannot identify or document each one. There is also confusion between true customization and standard ServiceNow configuration (e.g., email notifications).</span></li>
              <li><span className="bullet bullet-amber"></span><span><strong>Field recognition risk for AI:</strong> Some Now Assist / generative AI features are prebuilt to recognize standard ServiceNow field names. Renamed fields, custom tables, and altered terminology may prevent AI from identifying the relevant data — scope to be validated with GHD and SOM.</span></li>
              <li><span className="bullet bullet-amber"></span><span><strong>Release visibility is limited:</strong> Users generally do not know when upgrades occur or what new features are introduced. Releases are not accompanied by open-house sessions, feature briefings, or a test environment. Changes can take months to deliver.</span></li>
              <li><span className="bullet bullet-amber"></span><span><strong>Age-old forms:</strong> IAM has self-service forms (Active Directory service accounts, PKI certs) that predate modern engineering practices. No SDK or version control.</span></li>
            </ul>
          </div>

          
          <div className="disc-card">
            <div className="disc-card-header">
              <div className="disc-card-icon amber">📄</div>
              <div>
                <div className="disc-card-title">Documentation State</div>
                <div className="disc-card-sub">What exists vs. what's missing</div>
              </div>
            </div>
            <ul className="disc-list">
              <li><span className="bullet bullet-red"></span><span><strong>Largely undocumented:</strong> Most teams acknowledge they have little or no documentation of their ServiceNow workflows, forms, or customizations.</span></li>
              <li><span className="bullet bullet-amber"></span><span><strong>Knowledge Base fragmented:</strong> Some teams (Practices, PMAT) are actively migrating KB content to ServiceNow; others (Forensics, BC/DR) have not started.</span></li>
              <li><span className="bullet bullet-amber"></span><span><strong>Self-service content is bottlenecked:</strong> Publishing or updating KB/self-service content requires coordination with the central ServiceNow team for every change — no direct-publish model.</span></li>
            </ul>
          </div>

          
          <div className="disc-card">
            <div className="disc-card-header">
              <div className="disc-card-icon blue">🔀</div>
              <div>
                <div className="disc-card-title">Platform Fragmentation</div>
                <div className="disc-card-sub">What lives outside ServiceNow</div>
              </div>
            </div>
            <ul className="disc-list">
              <li><span className="bullet bullet-blue"></span><span><strong>Every team uses 2+ external tools</strong> alongside ServiceNow: Jira, Slack, Salesforce, Dynatrace, Palo Alto / Serenity (SOC), Okta/AD (IAM), Platform McKinsey (IAM).</span></li>
              <li><span className="bullet bullet-red"></span><span><strong>Slack collaboration is invisible in ServiceNow.</strong> Incidents are still opened and closed in ServiceNow, but much of the actual collaboration and resolution work happens in Slack without integration — creating manual overhead and gaps in reporting and SLA data.</span></li>
              <li><span className="bullet bullet-amber"></span><span><strong>SOC has moved AI out:</strong> Built their AI (alert triage, threat detection) on Serenity / Palo Alto externally rather than waiting for native ServiceNow AI.</span></li>
              <li><span className="bullet bullet-blue"></span><span><strong>IAM shifting to Platform McKinsey</strong> for self-service capabilities — teams are building outside SN because it's faster and more developer-friendly.</span></li>
            </ul>
          </div>

        </div>
      </div>

      
      <div className="section">
        <div className="sec-label">Section 2 of 4</div>
        <h2 className="sec-heading">What Works</h2>

        <div className="disc-card" style={{ borderLeft: "4px solid #2E7D32" }}>
          <div className="disc-card-header" style={{ borderBottomColor: "#A5D6A7" }}>
            <div className="disc-card-icon green">✅</div>
            <div>
              <div className="disc-card-title" style={{ color: "#2E7D32" }}>Strengths confirmed across multiple interviews</div>
              <div className="disc-card-sub">What the platform is doing well that should be preserved</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <ul className="disc-list">
              <li><span className="bullet bullet-green"></span><span><strong>Incident Management is the one process running close to out-of-box.</strong> Adopted across all 7 functional areas. Change and Problem Management are also in use across teams but are substantially customized — functioning mainly as records of work performed elsewhere rather than native ServiceNow process flows.</span></li>
              <li><span className="bullet bullet-green"></span><span><strong>CMDB is reliable where teams own their records.</strong> GRC (DTO) and Practices both describe their CMDB data as accurate and self-stewarded. Observability's tool data is reliable.</span></li>
              <li><span className="bullet bullet-green"></span><span><strong>Operational knowledge is strong in heavy-use teams.</strong> Network, Cloud/Containers, Messaging, and SOM teams are daily power users with deep platform familiarity — capable of doing more if enabled.</span></li>
              <li><span className="bullet bullet-green"></span><span><strong>On-call scheduling is working.</strong> Used by Network, Cloud/Containers, and SREs — reduces manual coordination and is one of the highest-satisfaction modules.</span></li>
            </ul>
            <ul className="disc-list">
              <li><span className="bullet bullet-green"></span><span><strong>SOC operational comfort is high.</strong> SOC team rates themselves as comfortable with ServiceNow and uses SIR (Security Incident Response) effectively for their core workflow.</span></li>
              <li><span className="bullet bullet-green"></span><span><strong>Now Assist basic features are actively in use.</strong> Incident summarization, case summarization, and the Now Assist panel are broadly available across all teams. Practices is piloting Now Assist KC, PMAT is using incident summarization, and SOM is exploring it for major incident workflows.</span></li>
              <li><span className="bullet bullet-green"></span><span><strong>CMDB discovery cadence runs daily.</strong> ServiceNow Discovery runs daily for on-prem infrastructure, providing automated asset detection for the core infrastructure layer.</span></li>
              <li><span className="bullet bullet-green"></span><span><strong>IAM CMDB commitment is consistent.</strong> Despite known gaps, IAM uses CMDB as the authoritative source for device lifecycle (decommissions, offboarding) and mandates teams keep their records current.</span></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="section">
        <div className="sec-label">Section 3 of 4</div>
        <h2 className="sec-heading">What Needs Improvement</h2>

        <div className="disc-card" style={{ borderLeft: "4px solid #D97706" }}>
          <div className="disc-card-header" style={{ borderBottomColor: "#FFE599" }}>
            <div className="disc-card-icon amber">⚠️</div>
            <div>
              <div className="disc-card-title" style={{ color: "#996600" }}>Pain points raised by 2 or more teams independently</div>
              <div className="disc-card-sub">Ranked by number of teams raising each issue — themes confirmed across all 7 functional areas</div>
            </div>
          </div>

          <table className="mini-table" style={{ marginTop: 0 }}>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Pain Point</th>
                <th style={{ width: "12%" }}>Teams affected</th>
                <th>What we heard</th>
                <th style={{ width: "22%" }}>Possible action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Too many customizations — no inventory, no visibility</strong></td>
                <td><span className="pill pill-red">All 7 teams</span></td>
                <td>No team can produce a list of their customizations. There is also confusion between true customization and standard configuration. Changes are manual, slow, and unpredictable — teams avoid requesting changes because the turnaround is weeks or months.</td>
                <td>Get ServiceNow's out-of-box vs. customized comparison list (Priti); share with GHD, SOM, and other key teams to validate what was changed and why.</td>
              </tr>
              <tr>
                <td><strong>AI features limited by field customization</strong></td>
                <td><span className="pill pill-red">5+ teams</span></td>
                <td>Basic Now Assist features (incident / case summarization) are in use. However, renamed fields and custom table names may prevent generative AI from recognizing standard ServiceNow data structures — causing those specific features to silently fail.</td>
                <td>Compare customized terminology with out-of-box field names; work with GHD and Zalman to identify cosmetic renames that can be reverted as quick wins to restore AI functionality.</td>
              </tr>
              <tr>
                <td><strong>Slow central-team delivery / COEI capacity crunch</strong></td>
                <td><span className="pill pill-red">5+ teams</span></td>
                <td>A small central team handles requests from many groups. Release timing is opaque. A basic form takes a day to prototype but months to fully deliver. Every team named this as a top blocker.</td>
                <td>Explore citizen development model and self-serve publishing to reduce central-team dependency. Review backlog and identify low-effort changes currently stalled.</td>
              </tr>
              <tr>
                <td><strong>Slack–ServiceNow integration gap</strong></td>
                <td><span className="pill pill-amber">4+ teams</span></td>
                <td>Incidents are opened and closed in ServiceNow, but collaboration and resolution happens in Slack. No integration converts Slack interactions into incidents — users must manually create and populate records, creating overhead and leaving context out of the platform.</td>
                <td>Build a Slack-to-ServiceNow integration or AI chatbot that auto-creates incidents from Slack interactions. One team already has a Slack agent for how-to lookups — extend pattern to incident creation.</td>
              </tr>
              <tr>
                <td><strong>Reporting &amp; analytics limited; self-service demand high</strong></td>
                <td><span className="pill pill-amber">6 of 7 areas</span></td>
                <td>Native ServiceNow reporting is hard to use and missing standard metrics (e.g., MTTR). 6 of 7 functional areas want self-serve reports and forms. Some teams are using ServiceNow MCP with Cursor to query raw data in natural language — but this is not yet broadly known or available.</td>
                <td>Promote ServiceNow MCP reporting capability to teams. Invest in self-serve dashboard templates. Enable direct form/report publishing for teams without central-team coordination.</td>
              </tr>
              <tr>
                <td><strong>Limited release visibility — no open-house model</strong></td>
                <td><span className="pill pill-amber">All 7 teams</span></td>
                <td>Teams generally do not know when upgrades occur or what new features are introduced. No open-house sessions, feature briefings, or lab environment exist for users to explore new functionality. Current communication (email/Slack) does not consistently reach or inform users.</td>
                <td>Establish a release communication cadence: open-house sessions per release, feature spotlights, a sandbox environment for testing new functionality before it goes live.</td>
              </tr>
              <tr>
                <td><strong>CMDB gaps — cloud assets, ownership, operational status</strong></td>
                <td><span className="pill pill-amber">5 teams</span></td>
                <td>Cloud asset coverage is incomplete. Ownership data is stale — product portals list leads who left teams years ago. SREs trust only 30–40% of operational status data. Gaps cascade into incorrect escalation, inaccurate reporting, and broken automations.</td>
                <td>Assign CMDB stewardship owners per product domain. Automate cloud asset discovery. Enforce periodic ownership review in the product portal.</td>
              </tr>
              <tr>
                <td><strong>CMDB service mapping incomplete</strong></td>
                <td><span className="pill pill-amber">3+ teams</span></td>
                <td>No complete service map exists between products, services, and downstream configuration items. Users can see individual upstream or downstream elements but cannot trace the full impact path. An earlier mapping initiative was started but not completed (confirmed by Andrea and Gabriel).</td>
                <td>Restart the service-mapping initiative with clear ownership. Leverage CMDB Discovery and ServiceNow Service Mapping module to automate relationship population.</td>
              </tr>
              <tr>
                <td><strong>Change &amp; Problem Management heavily customized</strong></td>
                <td><span className="pill pill-amber">All teams using it</span></td>
                <td>Change and Problem Management are in use, but both are substantially customized — functioning mainly as records of work performed elsewhere rather than native ServiceNow process flows. Teams using these processes are often unaware of how far they deviate from out-of-box.</td>
                <td>Establish Global Leads for Change and Problem Management to drive firm-wide alignment. Assess which customizations are essential vs. cosmetic and create a roadmap back to standard process.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
      <div className="section">
        <div className="sec-label">Section 4 of 4</div>
        <h2 className="sec-heading">Our Recommendations</h2>

        <div className="rec-grid" style={{ marginBottom: "24px" }}>
          <div className="rec-card">
            <div className="rec-number">Option A</div>
            <div className="rec-title">Map &amp; Rationalize Customizations Per Team</div>
            <div className="rec-body">Work with each team to understand their specific customizations — what exists, why it was built, and whether it can be brought back to OOB. This creates the foundation for AI enablement and reduces upgrade risk over time.</div>
            <div className="rec-body" style={{ marginTop: "10px", color: "var(--mds-color-text-subtle)" }}>This is the most thorough path but will require significant time investment. The lack of any existing inventory means discovery must start from scratch with each team.</div>
            <span className="rec-effort">Effort: High · Timeline: 3–6 months</span>
          </div>

          <div className="rec-card green-top">
            <div className="rec-number green">Option B</div>
            <div className="rec-title">Go Greenfield — Redesign Workflows with Each Team</div>
            <div className="rec-body">Skip the legacy audit and work with each team to design their ideal ServiceNow workflows from scratch, using OOB modules where possible. Faster path to AI-ready, clean instance — but requires teams to accept transition disruption.</div>
            <div className="rec-body" style={{ marginTop: "10px", color: "var(--mds-color-text-subtle)" }}>Best for teams with high customization debt (IAM, PMAT) or those already migrating away (IAM → Platform McKinsey). Requires strong change management and executive sponsorship.</div>
            <span className="rec-effort" style={{ borderColor: "#A5D6A7", color: "#2E7D32" }}>Effort: High · Impact: Very High</span>
          </div>

          <div className="rec-card amber-top">
            <div className="rec-number amber">Option C</div>
            <div className="rec-title">Bring Global Leads for Problem &amp; Change</div>
            <div className="rec-body">Establish Global Leads for Problem Management and Change Management to work with team counterparts across the firm. This addresses the #1 structural gap: no single owner ensuring standard adoption, alignment, and best-practice sharing.</div>
            <div className="rec-body" style={{ marginTop: "10px", color: "var(--mds-color-text-subtle)" }}>This is a prerequisite for Options A and B to succeed at scale. Without process ownership, any technical improvements risk drifting back to fragmented practices.</div>
            <span className="rec-effort" style={{ borderColor: "#FFE599", color: "#996600" }}>Effort: Medium · Quick win possible</span>
          </div>
        </div>

        
        <div className="action-banner">
          <div className="action-banner-label">Near-term Action</div>
          <div>
            <div className="action-banner-text">
              <strong>Build a Slack-to-ServiceNow integration / AI chatbot.</strong>
              This is the #1 automation request across all interviews, raised independently by 5 of 7 teams. Automating the conversion of Slack interactions into ServiceNow incidents — and surfacing resolution context back into the platform — would immediately improve reporting accuracy, SLA tracking, and management visibility regardless of which strategic path is chosen.
            </div>
            <div className="action-banner-teams">Requested by: Operations (Network, Cloud, Messaging) · SOM · SREs · Practices · IAM</div>
          </div>
        </div>
      </div>

      
      <div className="section">
        <div className="sec-label">Deep Dives</div>
        <h2 className="sec-heading">Functional Area Detail Pages</h2>
        <p style={{ fontSize: "13px", color: "var(--mds-color-text-subtle)", marginBottom: "20px", marginTop: "-10px" }}>Click into any area for the full interview transcript, end-to-end process diagram, pain points, and Q&amp;A.</p>

        <div className="team-mini-grid">
          <a className="team-mini" href="/operations">
            <div className="team-badge">⚙️</div>
            <h4>Operations</h4>
            <div className="role">Network · Cloud/Containers · Messaging · SREs · PMAT · CCE · EDAP</div>
            <div className="team-stat-row"><span className="k">Sub-teams</span><span className="v">7 interviewed</span></div>
            <div className="team-stat-row"><span className="k">Top pain</span><span className="v">Slack invisible in SN</span></div>
            <div className="view-link">View full details →</div>
          </a>

          <a className="team-mini" href="/som">
            <div className="team-badge">📊</div>
            <h4>SOM</h4>
            <div className="role">Service Operations Management</div>
            <div className="team-stat-row"><span className="k">Stakeholders</span><span className="v">Arun, Ayoosh, Jyotsna</span></div>
            <div className="team-stat-row"><span className="k">AI status</span><span className="v">Piloting Now Assist</span></div>
            <div className="view-link">View full details →</div>
          </a>

          <a className="team-mini" href="/observability">
            <div className="team-badge">🔭</div>
            <h4>Observability</h4>
            <div className="role">Platform Tooling &amp; Dynatrace Integration</div>
            <div className="team-stat-row"><span className="k">Stakeholders</span><span className="v">Venu · Product Tooling team</span></div>
            <div className="team-stat-row"><span className="k">Top pain</span><span className="v">Alert-to-incident accuracy</span></div>
            <div className="view-link">View full details →</div>
          </a>

          <a className="team-mini" href="/cmdb">
            <div className="team-badge">🗄️</div>
            <h4>CMDB</h4>
            <div className="role">Discovery, Quality &amp; Product Inventory</div>
            <div className="team-stat-row"><span className="k">Stakeholders</span><span className="v">Ondrej Burda, Gabriel Banas</span></div>
            <div className="team-stat-row"><span className="k">Top pain</span><span className="v">Service catalog gap (~22 yrs)</span></div>
            <div className="view-link">View full details →</div>
          </a>

          <a className="team-mini" href="/dto">
            <div className="team-badge">🛡️</div>
            <h4>DTO</h4>
            <div className="role">SOC · Forensics &amp; TI · GRC · BC/DR · Practices · IAM</div>
            <div className="team-stat-row"><span className="k">Sub-teams</span><span className="v">6 interviewed</span></div>
            <div className="team-stat-row"><span className="k">Top pain</span><span className="v">CMDB gaps &amp; support speed</span></div>
            <div className="view-link">View full details →</div>
          </a>

          <a className="team-mini" href="/practices">
            <div className="team-badge">📋</div>
            <h4>Practices</h4>
            <div className="role">Practice-facing enablement &amp; citizen development</div>
            <div className="team-stat-row"><span className="k">Stakeholders</span><span className="v">Ocheme Saleh</span></div>
            <div className="team-stat-row"><span className="k">AI status</span><span className="v">Piloting Now Assist KC</span></div>
            <div className="view-link">View full details →</div>
          </a>
        </div>
      </div>

    </div>
    </>
  )
}
