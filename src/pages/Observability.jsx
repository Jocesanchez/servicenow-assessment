import { useEffect } from 'react'

export default function Observability() {

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
        <span>Observability</span>
      </div>
      <h1>🔭 Observability &amp; Monitoring</h1>
      <p className="subtitle">Dynatrace → ServiceNow integration · AI-assisted incident analysis · CMDB CI mapping at cloud scale</p>
      <div className="header-meta">
        <span className="meta-pill">📅 Interview: September 2026</span>
        <span className="meta-pill">👤 Interviewers: Priti Singh, Heath Williams</span>
        <span className="meta-pill">✅ Interview Complete</span>
      </div>
    </div>

    <div className="page-content">

      
      <div className="diagram-panel">
        <div className="diagram-panel-header">
          <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — Observability / Dynatrace</span>
          <span className="diagram-panel-meta">Click to enlarge</span>
        </div>
        <img className="diagram-panel-img" src="/images/observability.png" alt="Observability ServiceNow Process Diagram" />
      </div>

      
      <div className="summary-box">
        <h3>Team Summary</h3>
        <p>
          Pulkit Agarwal leads <strong>Product Tooling / Citizen Developer Support</strong> — Dynatrace reliability for SaaS tools.
          This is not a dedicated observability team; Dynatrace is one of several tools supported (alongside GitHub, JFrog, Aikido, SonarQube, Claude, Cursor, Lovable).
          <strong>~1,000+ products</strong> are onboarded to Dynatrace as an opt-in platform.
          The Dynatrace → ServiceNow integration is <strong>native and workflow-based</strong> (not a legacy webhook), sending only pre-qualified incidents — never raw events, metrics, traces, or logs.
          The biggest pain point is that ServiceNow's native AI analysis quality falls well short of what's achievable via <strong>Cursor + Dynatrace MCP</strong>, despite reportedly having the same data access.
        </p>
        <div className="summary-meta">
          <div className="summary-meta-item"><strong>Interviewee</strong>Pulkit Agarwal</div>
          <div className="summary-meta-item"><strong>Interviewers</strong>Priti Singh (lead), Heath Williams</div>
          <div className="summary-meta-item"><strong>Scope</strong>Cloud/SaaS only — on-prem monitoring (OMD) owned by Network team</div>
          <div className="summary-meta-item"><strong>Key theme</strong>Native AI analysis quality gap vs. external MCP-based tools</div>
        </div>
      </div>

      
      <div className="stat-bar">
        <div className="stat-item">
          <div className="stat-value">1,000+</div>
          <div className="stat-label">Products on Dynatrace</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">0</div>
          <div className="stat-label">Raw Events to ServiceNow</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">~2M</div>
          <div className="stat-label">CIs in Lab from Dynatrace Push</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">6–7 mo</div>
          <div className="stat-label">Open Engagement on AI Gap</div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔗 Integration Architecture</h2>
        <div className="grid-2">
          <div className="card">
            <div className="card-title">🔧 Dynatrace → ServiceNow</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
              <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Native workflow-based integration</strong> (ServiceNow–Dynatrace partnership) — replaced legacy webhook</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>Pre-qualified incidents only</strong> — each team configures which specific alerts flow to ServiceNow vs. Slack; nothing sent by default</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🔄</span><span><strong>Correlation/deduplication happens in Dynatrace</strong>, not ServiceNow. One known exception: alerts via Dynatrace "workflows" path create duplicate tickets instead of appending — fix in progress (Sunil + Andre/Gabriel)</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🏷️</span><span><strong>CI mapping</strong>: Dynatrace alerting profiles/management zones tied to CI, product ID, and environment tag — opening an alert immediately shows which product it relates to</span></li>
            </ul>
          </div>
          <div className="card">
            <div className="card-title">🗄️ CMDB &amp; Scale Challenges</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
              <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span>CI-based tagging works well for SaaS-tooling use case — product ID alone is sufficient context</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>⚠️</span><span>Upstream dependency mapping missing — Priti flagged most CIs across the estate lack this. Not a blocker for Pulkit's use case but matters for foundational/infrastructure services</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🚨</span><span><strong>Cloud scale problem</strong>: A test push from Dynatrace into a ServiceNow lab instance created ~2 million CI records — CMDB was originally architected for on-prem scale and struggles with cloud CI volume at this level</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🏠</span><span>On-prem monitoring (OMD — AIX/Linux/Windows/network devices) is a separate platform owned entirely by the <strong>Network team</strong> — not connected to Pulkit's team</span></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔄 End-to-End Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-line"><div className="step-dot">1</div><div className="step-connector"></div></div>
            <div className="step-body">
              <h4>Alert Generated in Dynatrace</h4>
              <p>Synthetic HTTP/URL monitoring checks and threshold validation applied in Dynatrace. Suppression, tuning, and deduplication happen here — not in ServiceNow. Only pre-qualified events proceed.</p>
              <span className="step-tag auto">🤖 Fully Automated</span>
            </div>
          </div>
          <div className="process-step">
            <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
            <div className="step-body">
              <h4>Incident Created in ServiceNow</h4>
              <p>Native Dynatrace integration creates an incident record in ServiceNow, pre-tagged with CI, product ID, and environment. Alert noise is minimal — the large majority of queue volume is user-facing tickets (access issues, "this is broken") rather than monitoring noise.</p>
              <span className="step-tag auto">🤖 Automated</span>
            </div>
          </div>
          <div className="process-step">
            <div className="step-line"><div className="step-dot">3</div><div className="step-connector"></div></div>
            <div className="step-body">
              <h4>Analyst Triage in ServiceNow Queue</h4>
              <p>Operations team triages tickets in ServiceNow, determining ownership (their issue vs. route to Network, Platform McKinsey). Standard ITSM process — no significant customizations on this team's side.</p>
              <span className="step-tag manual">🖐 Manual</span>
            </div>
          </div>
          <div className="process-step">
            <div className="step-line"><div className="step-dot">4</div><div className="step-connector"></div></div>
            <div className="step-body">
              <h4>Deep Analysis via Cursor + Dynatrace MCP</h4>
              <p>For root cause analysis, analysts manually switch to Cursor connected to the Dynatrace MCP server (for logs/alerts) and the ServiceNow MCP server (for historical incident patterns). ServiceNow's built-in "SRE agent" analysis is described as "too generic" — the same data access produces noticeably weaker analysis than Cursor-based tools. This gap has been open with the ServiceNow team (Ed/Sandeep) for 6–7 months with no concrete resolution.</p>
              <span className="step-tag manual">🖐 Manual (context-switching)</span>
              <span className="step-tag" style={{ background: "#FEEBEB", color: "var(--mds-color-crimson-red-500)" }}>⚠️ Known AI Quality Gap</span>
            </div>
          </div>
          <div className="process-step">
            <div className="step-line"><div className="step-dot">5</div><div className="step-connector"></div></div>
            <div className="step-body">
              <h4>Resolution &amp; Problem Management</h4>
              <p>Incident resolved and closed in ServiceNow. Problem management and change validation follow standard ITSM process. No significant customizations on this team's operations side.</p>
              <span className="step-tag auto">🤖 Standard ITSM</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔴 Top Pain Points</h2>
        <ul className="insight-list">
          <li className="insight-item">
            <span className="insight-icon">🤖</span>
            <div className="insight-body">
              <h4>ServiceNow's native AI analysis quality falls well short of Cursor + Dynatrace MCP</h4>
              <p>ServiceNow's "SRE agent" reportedly has the same Dynatrace MCP access as Cursor, yet produces noticeably weaker analysis. Root cause is unclear. This engagement with the ServiceNow team (Ed/Sandeep) has been open for 6–7 months (current phase ~4 weeks) without concrete resolution — flagged as a <strong>leadership-visibility risk</strong>, since there is little tangible progress to report.</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">🔍</span>
            <div className="insight-body">
              <h4>No automated pattern detection or predictive knowledge-article suggestions</h4>
              <p>Two key missing capabilities: (1) auto-clustering recurring incidents to a common root cause or knowledge article over a rolling window (e.g., last 30 days); (2) predictive ticket deflection — as a user types a short description, ServiceNow should surface a matching past incident or knowledge article <em>before</em> the ticket is fully submitted. Both require AI applied to historical ServiceNow incident data.</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">⚠️</span>
            <div className="insight-body">
              <h4>Duplicate tickets from Dynatrace workflow integration path</h4>
              <p>A known, narrower issue: alerts sent via Dynatrace "workflows" (as opposed to other integration paths) create unique/duplicate tickets instead of appending to an existing incident/CI record. Sunil (Pulkit's team) is working with Andre/Gabriel to fix this — specific to this integration path, not a general problem.</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">📦</span>
            <div className="insight-body">
              <h4>CMDB cloud-scale volume problem</h4>
              <p>A test push from Dynatrace SmartScape topology into a ServiceNow lab instance created ~2 million CI records — making it very difficult to determine what to keep, discard, or how relationships fit together. CMDB was originally architected for on-prem scale and hasn't kept up with cloud CI volume. The relationship between Dynatrace-pushed CIs and manually maintained product CIs needs governance.</p>
            </div>
          </li>
        </ul>
      </div>

      
      <div className="section">
        <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
        <div className="accordion">

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🔗</span>How does the Dynatrace → ServiceNow integration work in detail?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p><strong>Old approach:</strong> Webhook integration from Dynatrace to ServiceNow. <strong>Current approach:</strong> Native, workflow-based integration (part of a ServiceNow–Dynatrace partnership). Data flowing in: only pre-qualified incidents/alerts — never raw events, metrics, traces, or logs. Each team defines in Dynatrace which specific alerts should flow to ServiceNow vs. Slack; nothing is sent by default. Correlation/deduplication happens entirely in Dynatrace, not ServiceNow. Validation logic (e.g., synthetic HTTP/URL monitoring checks) is applied in Dynatrace before an alert is even raised — by the time it reaches ServiceNow it's already a qualified incident.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🏠</span>What's in scope for this team vs. what isn't?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p><strong>In scope (this team):</strong> Cloud/SaaS observability via Dynatrace for products the team supports. The team provides L2 support for Dynatrace as a product itself, alongside GitHub, JFrog, Aikido, SonarQube, Claude, Cursor, Lovable. <strong>Out of scope:</strong> On-prem monitoring (OMD — covering AIX/Linux/Windows/network devices) is a completely separate platform, owned by the Network team with external vendor support. Pulkit's team doesn't touch it. <strong>Opt-in:</strong> Some product teams use AWS CloudWatch or Azure-native monitoring instead of Dynatrace — it's opt-in, not mandatory.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>📊</span>How does the team build and consume dashboards/reports?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>Standard operational dashboards (tickets open &gt;7 days, queue ownership/closure tracking) are built and used directly in ServiceNow — no separate BI tool for basic operational tracking. Native reporting is adequate for this level. For deeper analysis, Cursor is connected via both the Dynatrace MCP server (alert/log analysis) and the ServiceNow MCP server (incident/resolution trend analysis, heat maps of recurring root causes). Both done outside ServiceNow's own interface. The team has found MCP-based analysis far more powerful than anything ServiceNow's native AI currently offers.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🔮</span>Is ServiceNow the right long-term platform for observability?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>Yes — no fundamental complaint about ServiceNow as the ITSM platform. It's foundational to how the team tracks incidents, change, and problem management, and there's no case for an alternative. The gap is about ServiceNow <em>not yet delivering the AI capabilities it markets</em>, not about the core platform choice. <strong>Suggested additional contact:</strong> Saurabh Kunte, for a more complete picture of observability specifically (Venugopal Singh's team was interviewed separately). Saurabh is better-positioned on observability/monitoring than Pulkit, whose team is primarily a tool-support team.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}
