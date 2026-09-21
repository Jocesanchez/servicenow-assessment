import { useEffect } from 'react'

export default function Scope() {

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
      <div className="page-icon">📋</div>
      <h1>Project Scope &amp; Alcance</h1>
      <p className="page-subtitle">ServiceNow Platform Strategy &amp; Enablement — Scope Document v0.1 · September 8, 2026</p>
    </div>

    <div className="page-content">

      
      <div className="section">
        <h2 className="section-title">📌 Context &amp; Purpose</h2>
        <div className="card">
          <p>ServiceNow is a critical platform supporting operational and service-management processes across multiple functional groups including SOM, DTO, Infrastructure Operations, and Monitoring &amp; Event Management. Over time, individual groups have evolved their implementations independently — resulting in varying levels of process divergence, customization, and adoption of standard capabilities.</p>
          <p style={{ marginTop: "12px" }}>With ServiceNow increasingly embedding AI and automation into its standard offerings, there is an opportunity to simplify and standardize the environment and establish a stronger foundation for future innovation.</p>
          <p style={{ marginTop: "16px", padding: "14px 18px", background: "#EFF4FF", borderLeft: "4px solid var(--mds-color-electric-blue-500)", borderRadius: "var(--mds-radius-sm)", fontWeight: 500, color: "var(--mds-color-electric-blue-500)" }}>
            🔑 Central question: How can we evolve our current ServiceNow landscape toward a more standardized, scalable, and AI-ready platform while continuing to meet the critical business needs of individual functions?
          </p>
          <p style={{ marginTop: "16px", padding: "12px 16px", background: "var(--mds-color-background-subtle)", borderRadius: "var(--mds-radius-sm)", fontSize: "12px", color: "var(--mds-color-text-subtle)" }}>
            <strong style={{ color: "var(--mds-color-text-default)" }}>Guiding principle:</strong> "Standardize where possible; customize where justified."
          </p>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🎯 Strategic Objectives</h2>
        <div className="objective-grid">
          <div className="objective-card">
            <h4>🔍 Assess Current State</h4>
            <p>Structured assessment across SOM, DTO, SOC, Monitoring &amp; Event Management covering processes, modules, workflows, integrations, and customizations.</p>
          </div>
          <div className="objective-card">
            <h4>⚙️ Standardize &amp; Simplify</h4>
            <p>Identify gaps vs. ServiceNow standard capabilities; maximize out-of-the-box adoption while retaining customization only where clearly justified.</p>
          </div>
          <div className="objective-card">
            <h4>🤖 Establish AI Foundation</h4>
            <p>Prepare the platform, processes, data, and user community for adoption of ServiceNow's AI and automation capabilities (Now Assist, AIOps, etc.).</p>
          </div>
          <div className="objective-card">
            <h4>🗺️ 2027 Roadmap</h4>
            <p>Define target state, prioritize changes, and develop a phased implementation roadmap. Assessment complete end of 2026; execution begins Jan 2027.</p>
          </div>
          <div className="objective-card">
            <h4>📚 Build Awareness</h4>
            <p>Expand ServiceNow knowledge beyond existing users through training, demonstrations, and workshops — creating a pathway for new use cases and citizen development.</p>
          </div>
          <div className="objective-card">
            <h4>📊 Establish Governance</h4>
            <p>Define clear ownership, governance model, and decision framework for ServiceNow customizations, upgrades, and module expansion going forward.</p>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🗓️ Project Timeline</h2>
        <div className="timeline-row">
          <div className="timeline-phase">
            <div className="phase-label">Phase 1</div>
            <div className="phase-title">Scope &amp; Kickoff</div>
            <div className="phase-date">Early September 2026</div>
            <p style={{ fontSize: "11px", color: "var(--mds-color-text-subtle)", marginTop: "8px" }}>Scope document approved, interview questionnaire finalized, stakeholder list confirmed.</p>
          </div>
          <div className="timeline-phase active">
            <div className="phase-label">Phase 2 — Current ▶</div>
            <div className="phase-title">Round 1 Interviews</div>
            <div className="phase-date">Sep 8 – Sep 17, 2026</div>
            <p style={{ fontSize: "11px", color: "var(--mds-color-electric-blue-500)", marginTop: "8px" }}>Stakeholder interviews across Operations, SOM, Observability, CMDB, DTO, and Practices. 13+ interviews completed.</p>
          </div>
          <div className="timeline-phase">
            <div className="phase-label">Phase 3</div>
            <div className="phase-title">Round 2 Interviews</div>
            <div className="phase-date">Late September 2026</div>
            <p style={{ fontSize: "11px", color: "var(--mds-color-text-subtle)", marginTop: "8px" }}>ERP, VoIP/Video, remaining DTO groups, and power users identified in Round 1.</p>
          </div>
          <div className="timeline-phase">
            <div className="phase-label">Phase 4</div>
            <div className="phase-title">Analysis &amp; Synthesis</div>
            <div className="phase-date">October – November 2026</div>
            <p style={{ fontSize: "11px", color: "var(--mds-color-text-subtle)", marginTop: "8px" }}>Cross-team analysis, gap assessment, opportunity sizing, and target-state definition.</p>
          </div>
          <div className="timeline-phase">
            <div className="phase-label">Phase 5</div>
            <div className="phase-title">Roadmap &amp; Delivery</div>
            <div className="phase-date">December 2026 → Jan 2027</div>
            <p style={{ fontSize: "11px", color: "var(--mds-color-text-subtle)", marginTop: "8px" }}>Phased roadmap presented to Jim &amp; Steffen Perner. Execution begins January 2027.</p>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">👥 Groups to Cover — Interview Status</h2>
        <div className="table-wrapper">
          <table className="workstream-table">
            <thead>
              <tr>
                <th>Functional Area</th>
                <th>Sub-Team / Focus</th>
                <th>Stakeholders</th>
                <th>Date</th>
                <th>Status</th>
                <th>Workstream Lead</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Operations</strong></td><td>Network</td><td>Vinay Jain</td><td>Sep 14, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Heath Williams</td></tr>
              <tr><td><strong>Operations</strong></td><td>Cloud, Containers &amp; IAM</td><td>Abhishek Bhatia, Venu</td><td>Sep 15, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Heath Williams</td></tr>
              <tr><td><strong>Operations</strong></td><td>Messaging</td><td>Dipin Mehta, Aman Kumar</td><td>Sep 15, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Heath Williams</td></tr>
              <tr><td><strong>Operations</strong></td><td>SREs — On-Call &amp; CSM</td><td>Manuel Vasquez, Sam Mesbahi</td><td>Sep 17, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Heath Williams</td></tr>
              <tr><td><strong>Operations</strong></td><td>PMAT — Premises Monitoring</td><td>Karla Barquero</td><td>Sep 16, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Heath Williams / Priti Singh</td></tr>
              <tr><td><strong>SOM</strong></td><td>Major Incident, Change &amp; Problem</td><td>Arun Kwatra, Ayoosh Singh, Jyotsna Virmani</td><td>Sep 15, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Vishal Nandwani</td></tr>
              <tr><td><strong>Observability</strong></td><td>Dynatrace / Product Tooling</td><td>Pulkit Agarwal</td><td>Sep 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Priti Singh</td></tr>
              <tr><td><strong>CMDB</strong></td><td>CMDB Quality, Discovery &amp; Product Inventory</td><td>Ondrej Burda, Gabriel Banas</td><td>Sep 17, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Priti Singh</td></tr>
              <tr><td><strong>DTO</strong></td><td>SOC — Security Operations</td><td>Prashant Saxena</td><td>Sep 14, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Jose Manuel Sanchez</td></tr>
              <tr><td><strong>DTO</strong></td><td>Forensics &amp; Threat Intel</td><td>Angela Nucci</td><td>Sep 16, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Jose Manuel Sanchez</td></tr>
              <tr><td><strong>DTO</strong></td><td>GRC — Internal Risk Platform</td><td>Sterling Rong, Kevin D'Costa</td><td>Sep 16, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Jose Manuel Sanchez</td></tr>
              <tr><td><strong>DTO</strong></td><td>BC-DR — Business Continuity</td><td>BC-DR Team</td><td>Sep 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Jose Manuel Sanchez</td></tr>
              <tr><td><strong>Practices</strong></td><td>Practice-facing enablement</td><td>Ocheme Saleh</td><td>Sep 14, 2026</td><td><span className="pill pill-green">✅ Complete</span></td><td>Jose Manuel Sanchez</td></tr>
              <tr><td><strong>Operations</strong></td><td>ERP</td><td>TBD</td><td>Round 2</td><td><span className="pill pill-amber">⏳ Pending</span></td><td>Heath Williams</td></tr>
              <tr><td><strong>Operations</strong></td><td>VoIP / Video</td><td>TBD</td><td>Round 2</td><td><span className="pill pill-amber">⏳ Pending</span></td><td>Heath Williams</td></tr>
              <tr><td><strong>DTO / Security</strong></td><td>Vulnerability Management (UCF, Control Assignments)</td><td>TBD</td><td>Round 2</td><td><span className="pill pill-amber">⏳ Pending</span></td><td>Jose Manuel Sanchez</td></tr>
              <tr><td><strong>Business Users</strong></td><td>ServiceNow power users / workflow consumers</td><td>TBD (per Kevin D'Costa recommendation)</td><td>Round 2</td><td><span className="pill pill-amber">⏳ Pending</span></td><td>TBD</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      
      <div className="section">
        <div className="card" style={{ borderLeft: "4px solid var(--mds-color-border-default)" }}>
          <div className="card-title">📌 Scope Boundaries — What's In vs. Out</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "4px" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 500, color: "#117E1A", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: "10px" }}>✅ In Scope</p>
              <ul style={{ fontSize: "12px", lineHeight: 2, paddingLeft: "16px", color: "var(--mds-color-text-default)" }}>
                <li>ServiceNow ITSM, SecOps, IRM, Event Management, On-Call, CSM</li>
                <li>Current modules, workflows, and process documentation per team</li>
                <li>Custom fields, integrations, and automation in use today</li>
                <li>CMDB data quality, coverage, and governance</li>
                <li>AI/automation readiness and Now Assist adoption</li>
                <li>Training gaps and citizen development capability</li>
                <li>Stakeholder interviews — Round 1 &amp; Round 2</li>
                <li>Gap analysis vs. ServiceNow standard capabilities</li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 500, color: "#CD3030", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: "10px" }}>❌ Out of Scope</p>
              <ul style={{ fontSize: "12px", lineHeight: 2, paddingLeft: "16px", color: "var(--mds-color-text-default)" }}>
                <li>ServiceNow licensing negotiations or contract changes</li>
                <li>Platform upgrade execution (assessment only)</li>
                <li>Palo Alto XIM / Serenity platform architecture</li>
                <li>Salesforce CMS (Insider Risk — deliberate platform choice)</li>
                <li>Jira instance management</li>
                <li>Lenel OnGuard (PMAT real-time monitoring system)</li>
                <li>Data localization / residency implementation (open question for assessment)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">📦 Key Deliverables</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
          <div className="card" style={{ borderLeft: "4px solid var(--mds-color-electric-blue-500)" }}>
            <div className="card-title" style={{ color: "var(--mds-color-electric-blue-500)" }}>📄 Round 1 Report</div>
            <p style={{ fontSize: "12px" }}>Aggregated findings from 13+ interviews — this website serves as the live working document for Round 1 results.</p>
            <p style={{ fontSize: "11px", color: "var(--mds-color-text-subtle)", marginTop: "8px" }}>Status: <strong style={{ color: "#117E1A" }}>In progress</strong></p>
          </div>
          <div className="card">
            <div className="card-title">📊 Full Assessment Report</div>
            <p style={{ fontSize: "12px" }}>Cross-team analysis, gap assessment, and opportunity sizing — to be presented to Jim &amp; Steffen Perner.</p>
            <p style={{ fontSize: "11px", color: "var(--mds-color-text-subtle)", marginTop: "8px" }}>Status: <strong style={{ color: "#996600" }}>Pending Round 2</strong></p>
          </div>
          <div className="card">
            <div className="card-title">🗺️ 2027 Roadmap</div>
            <p style={{ fontSize: "12px" }}>Phased implementation plan defining target state, priorities, and execution timeline starting Jan 2027.</p>
            <p style={{ fontSize: "11px", color: "var(--mds-color-text-subtle)", marginTop: "8px" }}>Status: <strong style={{ color: "#996600" }}>December 2026</strong></p>
          </div>
        </div>
      </div>

      
      <div className="section">
        <div className="card" style={{ background: "var(--mds-color-background-subtle)" }}>
          <div className="card-title">📎 Source Document</div>
          <p style={{ fontSize: "12px", color: "var(--mds-color-text-subtle)" }}>
            This page is derived from: <strong style={{ color: "var(--mds-color-text-default)" }}>TBD - ServiceNow effforts - scope-document.docx</strong>
            &nbsp;·&nbsp; Status: Initial draft (v0.1) &nbsp;·&nbsp; Date: September 8, 2026
            <br />Stored at: SharePoint / ITOM Platform Enablement / ServiceNow Efforts / Project Details
          </p>
        </div>
      </div>

    </div>
    </>
  )
}
