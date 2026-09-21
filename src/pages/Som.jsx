import { useEffect } from 'react'

export default function Som() {

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
        <span>SOM</span>
      </div>
      <h1>📊 SOM — Service Operations Management</h1>
      <p className="subtitle">Major Incident, Problem, and Change Management — heavily customized workflows with Now Assist AI pilots in progress</p>
      <div className="header-meta">
        <span className="meta-pill">📅 Interview: September 15, 2026</span>
        <span className="meta-pill">👤 Lead: Vishal Nandwani</span>
        <span className="meta-pill">✅ Interview Complete</span>
      </div>
    </div>

    <div className="page-content">

      
      <div className="diagram-panel">
        <div className="diagram-panel-header">
          <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — SOM (Service Operations Management)</span>
          <span className="diagram-panel-meta">Click to enlarge</span>
        </div>
        <img className="diagram-panel-img" src="/images/som.png" alt="SOM ServiceNow Process Flow Diagram" />
      </div>

      
      <div className="summary-box">
        <h3>Team Summary</h3>
        <p>
          The SOM team manages the three core pillars of ITSM: <strong>Major Incident Management</strong>,
          <strong>Problem Management</strong>, and <strong>Change Management</strong>.
          All three modules are in use, but all three have been <strong>heavily customized</strong> since the
          platform's inception in 2016. The signature customization is the "Incident Alert" form —
          a fully custom form built on top of a regular INC that SOM owns end-to-end for major incidents.
          The team has its own internal innovation squad (SOM CDP Squad) and is actively piloting a
          Now Assist–powered "SOM Alerts Co-pilot" that auto-populates alert communications (currently in QA).
        </p>
        <div className="summary-meta">
          <div className="summary-meta-item"><strong>Interviewees</strong>Arun Kwatra · Ayoosh Singh · Jyotsna Virmani</div>
          <div className="summary-meta-item"><strong>Workstream Lead</strong>Vishal Nandwani</div>
          <div className="summary-meta-item"><strong>Platform version</strong>ServiceNow Zurich</div>
          <div className="summary-meta-item"><strong>Key theme</strong>Heavy customization (all 3 modules) vs. out-of-the-box opportunity</div>
        </div>
      </div>

      
      <div className="stat-bar">
        <div className="stat-item">
          <div className="stat-value">3</div>
          <div className="stat-label">Core ITSM Pillars</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">~2016</div>
          <div className="stat-label">Year Platform Adopted</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">3–4 wks</div>
          <div className="stat-label">Avg Customization SLA</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">6 mo</div>
          <div className="stat-label">SOM Co-pilot Development Time</div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔧 Modules &amp; Tools</h2>
        <div className="grid-2">
          <div className="card">
            <div className="card-title">📦 ServiceNow Modules</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🚨</span><div><strong>Major Incident Management (custom)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Fully customized "Incident Alert" form built on top of INC — created to give SOM ownership, ownership reporting, and end-user communications in one place. Not out-of-the-box.</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>⚠️</span><div><strong>Problem Management</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Base form came out-of-the-box; custom fields added over time (e.g., SPL — SOM Product Liaison field for ownership tracking). Linked to Incident Alert form.</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🔄</span><div><strong>Change Management</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Most customized of the three. Includes a custom risk assessment form (previously Excel-based, migrated on request). Multiple Jira-story-approved customizations over the years.</span></div></li>
            </ul>
          </div>
          <div className="card">
            <div className="card-title">🛠️ Tools &amp; Adjacent Processes</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>💬</span><div><strong>Slack / Zoom / MS Teams</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Major incident troubleshooting discussions managed via these channels (outside ServiceNow)</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>📧</span><div><strong>Firstup / Outlook / SMS</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Firm-wide end-user communications sent via Firstup and backup channels; alert content drafted via SOM Alert Co-pilot (in QA)</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>📋</span><div><strong>SharePoint / Jira</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>RCAs shared via SharePoint; customization requests tracked via Jira stories (reviewed by COE before approval)</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🤖</span><div><strong>Now Assist / Analysis Skills (QA)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>SOM CDP Squad developing Now Assist skills. SOM Alerts Co-pilot (auto-populates alert emails from one-liner input) is in QA — took 3 months to move from Lab to QA.</span></div></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔄 End-to-End Process</h2>
        <div className="grid-2" style={{ gap: "24px" }}>
          
          <div>
            <h3 style={{ fontSize: ".9rem", fontWeight: 700, color: "var(--mds-color-electric-blue-500)", marginBottom: "14px" }}>🚨 Major Incident Management</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-line"><div className="step-dot">1</div><div className="step-connector"></div></div>
                <div className="step-body">
                  <h4>Incident Reported</h4>
                  <p>An INC is created by GHD or auto-generated from monitoring. SOM identifies it as a potential major incident.</p>
                  <span className="step-tag partial">⚡ Partially Automated</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
                <div className="step-body">
                  <h4>Incident Alert Created (Custom Form)</h4>
                  <p>SOM selects "Create Incident Alert" from the INC, which automatically flags it as a major incident and opens the custom Incident Alert form. BCC recipient auto-populated from CMDB CI. The Incident Alert form is fully custom — owns communications, monitoring, status, and reporting.</p>
                  <span className="step-tag manual">🖐 Manual (trigger)</span>
                  <span className="step-tag auto">🤖 Auto-populates from CMDB</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line"><div className="step-dot">3</div><div className="step-connector"></div></div>
                <div className="step-body">
                  <h4>SOM Alert Communication</h4>
                  <p>Alert email drafted and sent from within the Incident Alert form (previously done in Outlook). Content is being automated via SOM Alerts Co-pilot (Now Assist skill, currently in QA) — one-liner input generates the full alert text. Outage Alert Portal (GSD portal) also updated manually.</p>
                  <span className="step-tag manual">🖐 Manual (production)</span>
                  <span className="step-tag" style={{ background: "#FFF9D6", color: "#996600" }}>⚡ Co-pilot In QA</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line"><div className="step-dot">4</div><div className="step-connector"></div></div>
                <div className="step-body">
                  <h4>Resolution &amp; Closure</h4>
                  <p>Incident resolved and Incident Alert closed. Problem ticket linked for RCA follow-up if needed. RCA shared via SharePoint.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 style={{ fontSize: ".9rem", fontWeight: 700, color: "var(--mds-color-electric-blue-500)", marginBottom: "14px" }}>🔄 Change Management</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-line"><div className="step-dot">1</div><div className="step-connector"></div></div>
                <div className="step-body">
                  <h4>Change Request with Risk Assessment</h4>
                  <p>Requester submits a change record using the customized change form, including a custom risk assessment form (replacing the old Excel-based process). High-risk changes go through a full review process with CABs and multi-week discussions.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
                <div className="step-body">
                  <h4>Review &amp; Approval</h4>
                  <p>COE team reviews all customization requests via Jira stories before approval. Regular meeting cadence for change review. Queries discussed via recurring meetings.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line"><div className="step-dot">3</div><div className="step-connector"></div></div>
                <div className="step-body">
                  <h4>Implementation &amp; Close</h4>
                  <p>Change executed and closed in ServiceNow. Tab auto-suggestion feature in development — when a keyword or CI is entered, the system suggests relevant change tags (partially implemented for specific cases).</p>
                  <span className="step-tag partial">⚡ Partial automation</span>
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
            <span className="insight-icon">⚙️</span>
            <div className="insight-body">
              <h4>Heavy customization makes it hard to adopt new ServiceNow features</h4>
              <p>All three SOM modules (Major Incident, Problem, Change) are heavily customized. As Arun noted: "when I see what ServiceNow offers out-of-the-box, we seem really old school." Starting in 2016 and largely unchanged, it's unclear how much of what the team has built exists in newer ServiceNow versions — a comparison exercise is needed before any standardization decisions.</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">⏳</span>
            <div className="insight-body">
              <h4>Slow COE delivery pipeline — 3+ months to move Lab → QA</h4>
              <p>The SOM CDP Squad built the Now Assist SOM Alerts Co-pilot independently but has been blocked waiting for the COE team to promote it from Lab to QA for over 3 months. Internal initiatives compete with other priorities and there's heavy dependency on a small COE team. Jyotsna confirmed: "it's like a government process."</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">🖐</span>
            <div className="insight-body">
              <h4>Manual alert communications and Outage Alert Portal updates</h4>
              <p>During major incidents, the team manually drafts SOM alert emails and separately updates the Outage Alert Portal on GSD — two manual steps that slow response time and introduce inconsistency. Both are in scope for Now Assist automation (Co-pilot is in QA for the first step).</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">📂</span>
            <div className="insight-body">
              <h4>No repository of customizations — institutional knowledge at risk</h4>
              <p>There is no documented list of what has been customized across the SOM modules vs. what came out-of-the-box. Arun agreed to build this — it's a prerequisite for any standardization discussion with the ServiceNow COE or vendor.</p>
            </div>
          </li>
        </ul>
      </div>

      
      <div className="section">
        <h2 className="section-title">🤖 AI &amp; Automation Readiness</h2>
        <div className="grid-2">
          <div className="card">
            <div className="card-title">✅ In Use / Active</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
              <li style={{ display: "flex", gap: "8px" }}><span>🎓</span><span>ServiceNow University micro-certifications completed by AI-development team members. Cursor one-on-one training at ~90% completion.</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🤖</span><span>Lily AI agents trained on historical SOM communications — draft end-user communications in seconds. Saves time and improves consistency.</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🏷️</span><span>Change tab auto-suggestion (partial) — implemented for specific CI/keyword patterns to suggest relevant tags on change records.</span></li>
            </ul>
          </div>
          <div className="card">
            <div className="card-title">⚡ In QA / In Progress</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
              <li style={{ display: "flex", gap: "8px" }}><span>🤖</span><strong>SOM Alerts Co-pilot (Now Assist)</strong><span>— Takes one-liner input and auto-populates the full SOM Alert email (subject, impact, workaround). Currently in QA after 6 months of development. Production rollout imminent.</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🌐</span><span>Outage Alert Portal (GSD) automation — exploring auto-posting outage status from ServiceNow to the GSD portal. Currently a manual copy-paste step.</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>📋</span><span>Citizen Developer Program enrollment — SOM team in queue for next cohort; uncertain if second cohort will proceed.</span></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
        <div className="accordion">

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🔧</span>What customizations exist in the three SOM modules?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p><strong>Major Incident:</strong> The "create major incident" checkbox was originally a flag; now it's replaced by a "Create Incident Alert" option on the INC form. The Incident Alert form itself is fully custom — ownership, BCC auto-population from CMDB, communications, monitoring status, and reporting all live there. Everything on IA is customized.</p>
              <p><strong>Problem Management:</strong> Base form was out-of-the-box, but custom fields were added over time (e.g., the SPL — SOM Product Liaison — field for ownership tracking). Linked to display under the Incident Alert form.</p>
              <p><strong>Change Management:</strong> Most customized. Includes: custom risk assessment form (migrated from Excel at leadership request), multiple workflow customizations approved via Jira stories for audit requirements. Also includes a partial tab auto-suggestion feature for tagging high-risk changes.</p>
              <p>No repository of customizations currently exists — Arun agreed to document them by process pillar as a follow-up action.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🗄️</span>How does the team rely on CMDB, and how accurate is it?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>CMDB accuracy is considered good from SOM's perspective — CI data, Business Application mapping, and assignment groups are reliable enough for their needs. The team's heavy reliance on CMDB shows up in the Incident Alert form: selecting the correct source CI auto-populates the BCC recipient list for major incident notifications, pulling directly from CMDB group mappings. Vishal noted this creates a significant dependency on CMDB data quality — if CI-to-group mappings are wrong, communications go to the wrong people.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>⏳</span>Why did the Now Assist Co-pilot take 6 months and 3 months just to reach QA?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>The SOM CDP Squad initiated this project themselves — it was not a formally assigned task. Because it wasn't a top priority for the COE, it lingered in the backlog despite the squad having the build ready. Moving from Lab → QA required COE involvement (Kaval is the SOM point of contact) and competing priorities meant it stayed deprioritized for months. Jyotsna summarized: "there was back and forth emails, then decisions to switch to a new instance, and it just got deprioritized." This is a systemic issue — internally-driven automation ideas get penalized by the same demand pipeline as externally-requested features.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🔮</span>Future state — what would SOM change about ServiceNow?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>The team's clear preference is to move toward more out-of-the-box features — but they want to do a side-by-side comparison first (Jyotsna: "like buying something on Amazon — show me what I get today vs. what out-of-the-box gives me"). They won't move just because it's standard; they need to see that the standard capability matches or improves on what they've built.</p>
              <p>Jyotsna also flagged a strategic consideration: as SOM's scope expands beyond MCS to practices and products, standardization becomes more important — different teams can't be on completely different workflows. But the exact scope/mandate isn't yet defined, so training and tool decisions are on hold pending leadership direction.</p>
              <p>Recommended follow-ups: speak to <strong>Christian Winnesburg</strong> (global process owner for Problem Management, currently testing out-of-the-box PM features in a clone instance) and <strong>Sandeep</strong> (Change Management automation/change velocity).</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}
