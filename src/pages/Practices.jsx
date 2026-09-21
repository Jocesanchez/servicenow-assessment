import { useEffect } from 'react'

export default function Practices() {

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
      <div className="breadcrumb">
        <a href="/">Overview</a>
        <span>›</span>
        <span>Practices</span>
      </div>
      <h1>📋 Practices — AI Tools &amp; Platform Support</h1>
      <p className="subtitle">ServiceNow usage across consulting practice groups — incident management, change tracking, and AI enablement</p>
      <div className="header-meta">
        <span className="meta-pill">📅 Interview: September 2026</span>
        <span className="meta-pill">👤 Lead: Jose Manuel Sanchez</span>
        <span className="meta-pill">✅ Interview Complete</span>
      </div>
    </div>

    <div className="page-content">

      
      <div className="diagram-panel">
        <div className="diagram-panel-header">
          <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — Practices</span>
          <span className="diagram-panel-meta">Click to enlarge</span>
        </div>
        <img className="diagram-panel-img" src="/images/practices.png" alt="Practices ServiceNow Process Diagram" />
      </div>

      
      <div className="summary-box">
        <h3>Team Summary</h3>
        <p>
          The Practices team supports AI tools and platform enablement for consulting practice groups.
          They manage ServiceNow for <strong>incident management</strong>, <strong>change tracking</strong>,
          and are piloting <strong>Now Assist / Knowledge Central (KC)</strong> as an AI first-responder
          in support Slack channels. The team has personally solved the reporting pain point through an
          MCP/Cursor connection to ServiceNow — but advocates for a native in-platform AI analysis experience
          so all users can benefit, not just technically advanced team members.
        </p>
        <div className="summary-meta">
          <div className="summary-meta-item"><strong>Team size</strong>6–8 people</div>
          <div className="summary-meta-item"><strong>Primary modules</strong>Incident (INC), Change, Problem</div>
          <div className="summary-meta-item"><strong>AI in use</strong>Now Assist / KC (pilot)</div>
          <div className="summary-meta-item"><strong>Key workaround</strong>MCP/Cursor → ServiceNow for reporting</div>
        </div>
      </div>

      
      <div className="stat-bar">
        <div className="stat-item">
          <div className="stat-value">~40%</div>
          <div className="stat-label">Requests Answerable by AI</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">~60%</div>
          <div className="stat-label">Requests AI Could Address</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">6–8</div>
          <div className="stat-label">Support Team Members</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">3</div>
          <div className="stat-label">Top Pain Points</div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔧 Modules &amp; Tools in Use</h2>
        <div className="grid-2">
          <div className="card">
            <div className="card-title">📦 ServiceNow Modules</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>📋</span><div><strong>Incident (INC)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Primary module — ticket creation, assignment, resolution, and user notification</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🔄</span><div><strong>Change Management</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Formal change tracking — though many teams still document in Confluence/Word and email in</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>⚠️</span><div><strong>Problem Management</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Exists and workflows are in place, but adoption and completion are inconsistent (especially SREs)</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🤖</span><div><strong>Now Assist / Knowledge Central (KC)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Pilot — AI first-responder in support Slack channels; Knowledge Central deflection metrics in use</span></div></li>
            </ul>
          </div>
          <div className="card">
            <div className="card-title">🛠️ Tools Used Alongside ServiceNow</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🧠</span><div><strong>Cursor + MCP (ServiceNow connection)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Pulls ServiceNow data on request; refreshes dashboards without manual extraction — personal workaround for reporting</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>📊</span><div><strong>Power BI (formerly Tableau)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Used for reporting and analysis after data is exported from ServiceNow</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>📝</span><div><strong>Confluence / Word</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Used by some practice groups for change documentation instead of ServiceNow change module</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🔗</span><div><strong>Dynatrace</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Integrated to automatically create ServiceNow tickets from monitoring alerts</span></div></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔄 End-to-End Process</h2>
        
        <div className="placeholder-notice">
          <span>📎</span>
          <span><strong>E2E Process Document:</strong> Formal process diagram will be added when provided. The steps below are synthesized from the stakeholder interview.</span>
        </div>

        <div className="grid-2" style={{ gap: "24px" }}>
          
          <div>
            <h3 style={{ fontSize: ".9rem", fontWeight: 700, color: "var(--mds-color-electric-blue-500)", marginBottom: "14px" }}>🎫 Incident Management</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">1</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Ticket Creation</h4>
                  <p>Created via ServiceNow portal, email, or automated from Dynatrace monitoring alerts. Platform McKinsey's custom "Get Help" request also creates ServiceNow incidents (separate integration).</p>
                  <span className="step-tag partial">⚡ Partially Automated</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">2</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Assignment &amp; Work</h4>
                  <p>Ticket assigned to appropriate team member. Investigation and resolution performed. ServiceNow used for updates throughout the lifecycle.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">3</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Resolution &amp; User Notification</h4>
                  <p>Incident resolved; user notified via ServiceNow. Typical ITSM workflow — no major deviations.</p>
                  <span className="step-tag auto">🤖 Automated (notification)</span>
                </div>
              </div>
            </div>
          </div>

          
          <div>
            <h3 style={{ fontSize: ".9rem", fontWeight: 700, color: "var(--mds-color-electric-blue-500)", marginBottom: "14px" }}>🔄 Change Management</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">1</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Change Documentation (External)</h4>
                  <p>Some teams (e.g., Org practice) document changes in Confluence/Word and route approvals via email — never touching ServiceNow's change module. Other teams use the formal change workflow.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                  <span className="step-tag" style={{ background: "#FEEBEB", color: "var(--mds-color-crimson-red-500)" }}>⚠️ Inconsistent Adoption</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">2</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Email → ServiceNow Case (Audit)</h4>
                  <p>Teams that don't use the formal module email support@mckinsey.com → creates a ServiceNow case for audit purposes only. No workflow runs; STA reviews and closes the case.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">3</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Standard Change Auto-creation (Proposed)</h4>
                  <p>Longstanding proposal: CI/CD pipelines automatically create and process standard-change records on deployment. Never adopted while the interviewee supported practices. More critical now as AI-driven development increases release frequency.</p>
                  <span className="step-tag" style={{ background: "#FFF9D6", color: "#996600" }}>⚡ Not Yet Implemented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔴 Top Pain Points</h2>
        <ul className="insight-list">
          <li className="insight-item">
            <span className="insight-icon">📉</span>
            <div className="insight-body">
              <h4>Native reporting/analytics is difficult and unintuitive</h4>
              <p>
                Native ServiceNow reporting produces unintuitive charts and requires expertise to configure. As a result,
                teams pull data out to Excel and analyze in Power BI — a workaround the interviewee personally solved via
                an MCP/Cursor connection to ServiceNow (pulling tables on request and refreshing dashboards). However, this
                workaround is not available to the broader team and does not solve the problem natively in the platform.
                The ideal: <em>"a Cursor window inside ServiceNow"</em> — in-platform natural-language analysis.
              </p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">📝</span>
            <div className="insight-body">
              <h4>Lack of automated standard-change logging</h4>
              <p>
                Teams still document changes manually (Confluence/email) instead of having CI/CD pipelines automatically
                create and process standard-change records. This is a longstanding gap that is becoming more pressing now
                that AI-driven development increases release frequency for practice products and tools.
              </p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">❌</span>
            <div className="insight-body">
              <h4>Low adoption and completion of problem management</h4>
              <p>
                Problem management tools and workflows exist but teams — particularly SREs — often don't complete
                root-cause documentation or vendor follow-up consistently. This leaves systemic issues unresolved.
                CMDB usability (navigation for less experienced users, unreliable natural-language search) is a
                related secondary pain point.
              </p>
            </div>
          </li>
        </ul>
      </div>

      
      <div className="section">
        <h2 className="section-title">🤖 AI &amp; Automation Readiness</h2>
        <div className="grid-2">
          <div className="card">
            <div className="card-title">✅ In Use / Piloting</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", gap: "8px" }}><span>🤖</span><div>
                <strong>Now Assist / Knowledge Central (KC)</strong>
                <p>Piloting as AI first-responder in support Slack channels alongside existing Now Assist Slack app. KC deflection metrics already tracked. Estimated ~40% of incoming requests are simple how-to/setup questions addressable by AI; up to ~60% could at least be partially addressed.</p>
              </div></li>
              <li style={{ display: "flex", gap: "8px" }}><span>📊</span><div>
                <strong>MCP/Cursor → ServiceNow reporting</strong>
                <p>Interviewee personally uses MCP connection to pull ServiceNow data and refresh dashboards without manual extraction. Eliminates the historical top pain point for her — but not yet available to the broader team.</p>
              </div></li>
            </ul>
          </div>
          <div className="card">
            <div className="card-title">⚡ Top Automation Candidates</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", gap: "8px" }}><span>💬</span><div>
                <strong>AI deflection for simple support tickets</strong>
                <p>~40% of incoming requests are basic access/setup/how-to questions. An AI first-responder could deflect these, freeing the 6–8 person team for complex issues. Key risk: knowledge consistency — different bots (Now Assist/KC vs. Platform McKinsey "Ask AI") must reference the same knowledge repository.</p>
              </div></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🔄</span><div>
                <strong>CI/CD pipeline → Standard Change auto-creation</strong>
                <p>Auto-create and process standard-change records on deployment. Removes manual data entry for low-risk releases and would especially benefit AI-driven development teams with higher release frequency.</p>
              </div></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
        <div className="accordion">

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🏢</span>What is the team's primary function, and how does ServiceNow support day-to-day work?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>The team supports AI tools and platform enablement for consulting practice groups. ServiceNow is used for incident management, change tracking, and problem management. Some automation exists — Dynatrace alerts have been integrated over the years to automatically create tickets. Platform McKinsey built its own custom "Get Help" integration that also creates ServiceNow incidents, though this has caused some confusion/inconsistency in how support flows in.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🔧</span>What customizations has the team built or requested?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>The current team hasn't requested customizations directly. However, the interviewee personally led the project-management side of the <strong>Salesforce-to-ServiceNow migration</strong> and worked closely with the ServiceNow COEI to recreate custom forms and workflows that practice teams had previously used in Salesforce — so case/request intake would match each group's operating model. Custom forms/workflows were built for the Forward product, GMNS, Org, and Wave practice groups. No upgrade issues or rarely-used customizations were reported for these.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>⚙️</span>What workarounds or manual steps exist outside ServiceNow?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>(1) <strong>Change tracking outside the formal module:</strong> Some teams (e.g., Org practice) still document changes in Confluence/Word and route approvals via email rather than using ServiceNow's change workflow. (2) <strong>Reporting:</strong> ServiceNow's native reporting is considered difficult to use ("not intuitive"), so data is exported to Excel and analyzed in Power BI (previously Tableau). The interviewee has automated this specific workaround using an MCP connection between ServiceNow and Cursor — but this still runs outside ServiceNow itself, not natively within the platform.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🗄️</span>How does the team rate CMDB accuracy and usability?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>CMDB is considered reliable and has improved tremendously over the last few years, though there is still room for improvement. The main gap is <strong>usability rather than data quality</strong> — navigating tables and moving from one CMDB table to another is easy for experienced ServiceNow users but difficult for average/less-experienced users, even though front-end pages such as the product portal already pull from CMDB. The interviewee tested ServiceNow's newer AI/natural-language CMDB search and found it doesn't work reliably yet, though she expects improvement with future updates.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🎓</span>Training needs and knowledge levels across the team
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>Mixed knowledge across the team. The interviewee and colleague Dayana have strong ServiceNow knowledge from prior practice experience and current reporting work. Colleague Sakshi has some exposure through Platform McKinsey workflow work but not at the same depth. Remaining colleagues have limited experience since they don't use ServiceNow extensively. <strong>Recommended training:</strong> a general ServiceNow overview for less-experienced colleagues, plus dedicated change-management training (similar to prior sessions run by Arun Quattro) if senior leadership issues a mandate for standardized change-management practices — the specific training depends on the team's future scope/mandate, which is not yet finalized.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🔮</span>Future state — what would the team change about ServiceNow?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>Two main areas: (1) <strong>UI</strong> — not very user-friendly, especially for first-time users; becomes intuitive only after extended use despite past updates (classic vs. newer mode). (2) <strong>Performance at scale</strong> — ServiceNow is fast with ~100 tickets but becomes very slow when searching or extracting data across 1,000–2,000+ tickets; attributed to large volume of historical data. On the question of whether ServiceNow is the right tool: yes, for now — it's the right platform for integrated incident/change/problem management because they're interlinked with product/asset data and the CMDB. However, if the team's mandate narrows significantly, a more specialized tool might be a better fit.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>👥</span>Who else should be interviewed?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>Suggested contact: <strong>Sam Mesbahi</strong> (former colleague) — to clarify the current state and ownership of <strong>ServiceNow On-Call</strong>, an engineering-side capability (migrated from VictorOps/Splunk On-Call) that the interviewee helped set up and test but hasn't tracked since. Ownership between Engineering, Operations, and DTO is unclear post-reorganization and needs alignment.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}
