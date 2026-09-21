import { useState, useEffect } from 'react'

export default function Operations() {
  const [activeTab, setActiveTab] = useState('network')

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
        <span>Operations</span>
      </div>
      <h1>⚙️ Operations</h1>
      <p className="subtitle">IT operations teams across MCS infrastructure — incident, change, and problem management</p>
      <div className="header-meta">
        <span className="meta-pill">📅 Interviews: September 14–18, 2026</span>
        <span className="meta-pill">👤 Workstream Lead: Heath Williams</span>
        <span className="meta-pill">✅ 7 Teams Interviewed</span>
      </div>
    </div>

    <div className="page-content">

      
      <div className="summary-box">
        <h3>Overview</h3>
        <p>
          Operations covers a broad set of MCS infrastructure teams using ServiceNow primarily for
          <strong>Incident, Change, and Problem Management</strong> (ITSM core).
          All seven teams have been interviewed: <strong>Network</strong>, <strong>Cloud/Containers/Tooling</strong>,
          <strong>Messaging</strong>, <strong>SREs</strong>, <strong>PMAT</strong>, <strong>CCE</strong>, and <strong>EDAP</strong>.
          Cross-cutting themes: <strong>API write access to ServiceNow</strong> for agent-based automation,
          <strong>CMDB dependency mapping gaps</strong>, a universal desire for a <strong>Slack-to-ServiceNow bridge</strong>,
          and frustration with slow custom development turnaround from the central team.
        </p>
        <div className="summary-meta">
          <div className="summary-meta-item"><strong>Teams interviewed</strong>Network · Cloud/Containers · Messaging · SREs · PMAT · CCE · EDAP</div>
          <div className="summary-meta-item"><strong>Workstream lead</strong>Heath Williams</div>
          <div className="summary-meta-item"><strong>Common theme</strong>API write access · CMDB dependency mapping · Slack→SN bridge · Agent automation</div>
          <div className="summary-meta-item"><strong>Status</strong>All 7 teams complete ✅</div>
        </div>
      </div>

      
      <div className="stat-bar">
        <div className="stat-item">
          <div className="stat-value">7</div>
          <div className="stat-label">Teams Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">0</div>
          <div className="stat-label">Teams Pending</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">~500/mo</div>
          <div className="stat-label">Auto-resolved Mailbox Requests (Messaging)</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">90%</div>
          <div className="stat-label">SRE Tickets Resolved Internally</div>
        </div>
      </div>

      
      <div className="tabs" style={{ marginTop: "8px" }}>
        <button className={`tab-btn${activeTab === 'network' ? ' active' : ''}` } onClick={() => setActiveTab('network')} data-tab="network">🌐 Network</button>
        <button className={`tab-btn${activeTab === 'cloud' ? ' active' : ''}` } onClick={() => setActiveTab('cloud')} data-tab="cloud">☁️ Cloud &amp; Containers</button>
        <button className={`tab-btn${activeTab === 'messaging' ? ' active' : ''}` } onClick={() => setActiveTab('messaging')} data-tab="messaging">📨 Messaging</button>
        <button className={`tab-btn${activeTab === 'sres' ? ' active' : ''}` } onClick={() => setActiveTab('sres')} data-tab="sres">🖥️ SREs</button>
        <button className={`tab-btn${activeTab === 'pmat' ? ' active' : ''}` } onClick={() => setActiveTab('pmat')} data-tab="pmat">🏢 PMAT</button>
        <button className={`tab-btn${activeTab === 'cce' ? ' active' : ''}` } onClick={() => setActiveTab('cce')} data-tab="cce">📞 CCE</button>
        <button className={`tab-btn${activeTab === 'edap' ? ' active' : ''}` } onClick={() => setActiveTab('edap')} data-tab="edap">🗃️ EDAP</button>
      </div>

      
      <div className={`tab-panel${activeTab === 'network' ? ' active' : ''}` } id="tab-network">

        <div className="diagram-panel" style={{ marginTop: "20px" }}>
          <div className="diagram-panel-header">
            <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — Network</span>
            <span className="diagram-panel-meta">Click to enlarge</span>
          </div>
          <img className="diagram-panel-img" src="/images/network.png" alt="Network ServiceNow Process Diagram" />
        </div>

        <div className="summary-box">
          <h3>Network Team — Vinay Jain</h3>
          <p>The Network team uses ServiceNow as its primary operational tool for <strong>Incident, Change, and Problem Management</strong> and as its <strong>CMDB for all network inventory</strong>. The team has <strong>no platform customizations</strong> — all modules are out-of-the-box. The main pain point is an unclear process for getting ServiceNow API credentials that would allow automation tools and agents to interact with ITSM modules and CMDB programmatically. The team is already building its own AI agent ("Van") for circuit-outage triage using ServiceNow as the data source.</p>
          <div className="summary-meta">
            <div className="summary-meta-item"><strong>Interviewee</strong>Vinay Jain (Network Team Lead, India)</div>
            <div className="summary-meta-item"><strong>Date</strong>September 14, 2026</div>
            <div className="summary-meta-item"><strong>Customizations</strong>None known</div>
            <div className="summary-meta-item"><strong>AI pilot</strong>"Van" agent for circuit-outage triage</div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">🔧 Modules &amp; Tools</h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">📦 ServiceNow Modules</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>ITSM</strong> — Incident, Change, Problem (all out-of-the-box, no customizations)</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🗄️</span><span><strong>CMDB</strong> — All network inventory lives here. Discovery patterns automatically detect new devices.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔒</span><span><strong>Vulnerability Management</strong> — Consumer only (not owner). Security team owns it and provides a dashboard showing vulnerabilities on Network's products/services.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🤖</span><span><strong>AI Summarization</strong> — Used to summarize incident history/comments; found useful during handovers and when a ticket has a long update trail.</span></li>
              </ul>
            </div>
            <div className="card">
              <div className="card-title">🛠️ Adjacent Tools</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>📋</span><span><strong>Jira</strong> — Sprint planning, project work, architecture/design (e.g., quarterly network maintenance planning). Not for incident management.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📚</span><span><strong>Confluence</strong> — Knowledge base articles and documentation (NOT in ServiceNow's own Knowledge Base module).</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔧</span><span><strong>Monitoring tool (separate)</strong> — Auto-generates bulk incident tickets based on defined alert rules. Change/maintenance mode is set manually in a separate UI (pain point).</span></li>
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
                <h4>Alert/Incident Creation</h4>
                <p>~Bulk of tickets auto-generated from monitoring system (alert rules). User-reported incidents raised manually via GHD. Device discovery into CMDB is fully automated via discovery patterns.</p>
                <span className="step-tag auto">🤖 Automated (monitoring)</span>
                <span className="step-tag manual">🖐 Manual (user-reported)</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Triage &amp; Escalation</h4>
                <p>Standard ITSM incident process. All operational work stays within ServiceNow. Change tickets raised by the Network team itself (or requested by other teams).</p>
                <span className="step-tag manual">🖐 Manual</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">3</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Change Window — Maintenance Mode (Pain Point)</h4>
                <p>During change windows, in-scope devices are manually placed into maintenance mode on the monitoring tool to prevent false alarms. This requires a separate UI and manual lookup. Could be automated by pulling the device list directly from the change record's scope to auto-schedule maintenance.</p>
                <span className="step-tag manual">🖐 Manual — automation opportunity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">🔴 Pain Points &amp; Opportunities</h2>
          <ul className="insight-list">
            <li className="insight-item">
              <span className="insight-icon">🔑</span>
              <div className="insight-body">
                <h4>Unclear process for API credentials to automate ITSM/CMDB interactions</h4>
                <p>The team is unclear on how to request ServiceNow service account/API credentials that would let their automation tools and agents interact with ITSM modules and CMDB programmatically. Vinay flagged this as "likely a need across many teams right now, given the push toward AI-assisted automation."</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">⚡</span>
              <div className="insight-body">
                <h4>Manual maintenance mode during change windows</h4>
                <p>Could be automated by leveraging the existing ServiceNow–monitoring tool integration — pulling the device list and change window directly from the change record to auto-schedule maintenance, rather than doing it manually in a separate UI.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🗺️</span>
              <div className="insight-body">
                <h4>Service mapping gap for CMDB-based impact analysis</h4>
                <p>The team is interested in building out service mapping/dependency data so change management can auto-suggest impact assessments. Acknowledged as hard to build in a hybrid/cloud environment, but valuable. Keen on the planned ITIL v5 change model using CMDB data to auto-calculate risk scores and auto-approve low-risk changes.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">💬 Key Interview Highlights</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>🤖</span>AI capabilities in use and in progress
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <p><strong>In use:</strong> ServiceNow's AI summarization feature to summarize incident history/comments — useful during handovers and when a ticket has a long comment trail.</p>
                <p style={{ marginTop: "8px" }}><strong>In progress (own build):</strong> "Van" — an agent being built to handle repetitive circuit-outage triage steps. Uses ServiceNow as the data source and trigger point. Documented, repeatable steps and escalation paths (including how to open tickets with service providers) make this a strong AI candidate. No major concerns beyond keeping a human in the loop.</p>
                <p style={{ marginTop: "8px" }}><strong>Not yet on:</strong> The AIOps POC mentioned by Heath (noise reduction/correlation using Dynatrace enrichment across 3 tools) — Network isn't on that pilot yet.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>🔮</span>If you redesigned ServiceNow from scratch — what would change?
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                  <li>Use years of institutional knowledge in ticket comments to auto-suggest likely causes/next steps when a new incident comes in — with a human still making the final call.</li>
                  <li>Deepen change management–monitoring integration so maintenance windows are set automatically from the change record's device scope, rather than manually in a separate tool.</li>
                  <li>Build out service mapping/dependency data to enable auto-suggested impact assessments in change management.</li>
                  <li>Move to the planned ITIL v5 change management model: clean CMDB/service-mapping data + AI to auto-calculate risk scores and auto-approve low-risk changes, reducing manual FCAB/risk-survey steps.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div className={`tab-panel${activeTab === 'cloud' ? ' active' : ''}` } id="tab-cloud">

        <div className="diagram-panel" style={{ marginTop: "20px" }}>
          <div className="diagram-panel-header">
            <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — Cloud, Containers &amp; Tooling</span>
            <span className="diagram-panel-meta">Click to enlarge</span>
          </div>
          <img className="diagram-panel-img" src="/images/cloud-containers.png" alt="Cloud Containers ServiceNow Process Diagram" />
        </div>

        <div className="summary-box">
          <h3>Cloud, Containers, IAM, OSPS, McKID, Wave Hosting / Tooling, STA</h3>
          <p>Two leads — <strong>Abhishek Bhatia</strong> (Cloud, Containers, IAM, OSPS, McKID, Wave Hosting) and <strong>Venugopal Singh</strong> (Tooling, STA, and OFT Observability Monitoring) — covering a broad set of platform teams. Intake comes through multiple channels (Platform McKinsey, GHD, STA, Slack). The biggest pain points are the <strong>lack of standardized write access to ServiceNow APIs</strong> (blocking automated ticket creation from Slack agents) and <strong>missing upstream service/dependency mapping</strong> in CMDB. Teams are independently building agents for the same repetitive problems.</p>
          <div className="summary-meta">
            <div className="summary-meta-item"><strong>Interviewees</strong>Abhishek Bhatia · Venugopal Singh</div>
            <div className="summary-meta-item"><strong>Also present</strong>Priti Singh (ServiceNow platform team)</div>
            <div className="summary-meta-item"><strong>Date</strong>September 15, 2026</div>
            <div className="summary-meta-item"><strong>Key gap</strong>API write access · CMDB dependency mapping · Agent-to-agent handoff</div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">🔧 Modules &amp; Tools</h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">📦 ServiceNow Modules</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>ITSM</strong> — Incident, Change, Problem. Reporting/dashboards pulled into Snowflake for monthly/quarterly health trend reporting.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📋</span><span><strong>CSM (Case Management)</strong> — STA additionally uses this module: a separate, client-facing instance (not accessible even to GHD, since it holds client data) with its own intake portal. Same underlying ITSM-style pattern.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔮</span><span><strong>Predictive Intelligence plugin</strong> — exists but data quality currently limits its usefulness (Priti confirmed)</span></li>
              </ul>
            </div>
            <div className="card">
              <div className="card-title">🛠️ Tools &amp; Customizations</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>💬</span><span><strong>Slack-based AI agents</strong> — both teams have built agents answering user queries in Slack. No connector today for agent to auto-create ServiceNow ticket when unresolved.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📂</span><span><strong>Subcategory field</strong> — custom field added for some assignment groups (not active/default for all). Helps capture deeper ticket-type insight for service reviews.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📧</span><span><strong>Email-to-ticket</strong> — currently used by Application Management (HR, Risk stakeholders prefer email). STA's CSM module also has email-to-case. Generally moving away from approving new email-to-ticket requests unless clearly justified.</span></li>
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
                <h4>Multi-Channel Intake</h4>
                <p>Four intake types: (1) regular tickets via Platform McKinsey, GHD, or STA; (2) observability/infrastructure monitoring alerts; (3) RITMs (task-based requests with other teams); (4) shrinking set of IT Ops portal forms being migrated to Platform McKinsey. All ultimately create incident records in ServiceNow.</p>
                <span className="step-tag auto">🤖 Partially Automated</span>
                <span className="step-tag manual">🖐 Manual (Slack channel)</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Self-Serve First (where possible)</h4>
                <p>Self-serve options exist for common requests (e.g., container platform or GitHub access) — a ticket is only manually created and worked when self-serve doesn't resolve the need. Workflow automations run outside ServiceNow; ServiceNow only receives an incident if a workflow errors or fails to complete.</p>
                <span className="step-tag auto">🤖 Self-serve automated</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">3</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Triage &amp; Resolution (SRE pattern)</h4>
                <p>~90% of tickets resolved within the SRE group itself. Escalation, when needed, tends to be horizontal (looping in Networking or Tooling) rather than vertical handoff.</p>
                <span className="step-tag manual">🖐 Manual triage</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">4</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Gap: No Agent-to-Agent Handoff</h4>
                <p>When a Slack-based support agent can't resolve an issue, there's no mechanism to automatically create/enrich a ServiceNow ticket with the troubleshooting context already gathered. The user has to separately go to GHD or the Platform McKinsey form — an extra manual step and context loss for the engineer.</p>
                <span className="step-tag manual">⚠️ Manual gap — automation opportunity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">🔴 Pain Points &amp; Opportunities</h2>
          <ul className="insight-list">
            <li className="insight-item">
              <span className="insight-icon">🔑</span>
              <div className="insight-body">
                <h4>No standardized write access to ServiceNow APIs</h4>
                <p>Current API/MCP access works well for reading data out of ServiceNow but not for writing data in. No clear, standard process to request it — new automation requests aren't generally being fulfilled today. Multiple teams are independently building bespoke agents for what are really common, cross-team needs. Top ask: a standardized way to get write access, so teams stop building one-off customizations for the same problem.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🗺️</span>
              <div className="insight-body">
                <h4>Missing upstream dependency/service mapping</h4>
                <p>Foundational platforms (e.g., McKinsey ID, Vault) that many applications rely on for auth/secrets have no visibility into which downstream applications depend on them. Impact analysis for changes and DR/backup-restore exercises require significant manual effort. Gaps lead to major incident communications being overly broad (sent to wide audience "just in case") or missing genuinely impacted consumers.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🤖</span>
              <div className="insight-body">
                <h4>Duplicate effort: every team building their own Slack-to-ServiceNow agent</h4>
                <p>Both Abhishek's and Venu's teams have built Slack-based AI agents for repetitive how-to queries. Abhishek's team also has a small in-ServiceNow POC where an agent answers common how-to questions directly in the ticket. All of these solve the same problem in different ways — a platform-level standardized solution would reduce duplicated effort.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">💬 Key Interview Highlights</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>📊</span>AI and automation in use
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <p><strong>In use:</strong> Standard case-summarization works fine. Both teams have built Slack-based AI agents to answer user queries outside ServiceNow. Abhishek's team has a small in-ServiceNow POC where an agent answers common how-to questions and emails the requester back.</p>
                <p style={{ marginTop: "8px" }}><strong>Predictive modeling:</strong> One team has already built an LLM-based model predicting monthly ticket volume (predicted 163 vs. 200 actual). The ask: whether ServiceNow's built-in Predictive Intelligence/AIOps capability could serve this need as a standard feature rather than each team custom-building it. Priti noted the plugin exists but data quality currently limits its usefulness.</p>
                <p style={{ marginTop: "8px" }}><strong>AI-assisted reporting wish:</strong> Layering AI-generated recommendations and trend analysis on top of existing platform analytics — flagging rising ticket volumes and suggesting what to automate — currently done manually.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div className={`tab-panel${activeTab === 'messaging' ? ' active' : ''}` } id="tab-messaging">

        <div className="diagram-panel" style={{ marginTop: "20px" }}>
          <div className="diagram-panel-header">
            <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — Messaging</span>
            <span className="diagram-panel-meta">Click to enlarge</span>
          </div>
          <img className="diagram-panel-img" src="/images/messaging.png" alt="Messaging ServiceNow Process Diagram" />
        </div>

        <div className="summary-box">
          <h3>Messaging — Dipin Mehta &amp; Aman Kumar</h3>
          <p>The Messaging team runs two queues — <strong>MCS Messaging (primary)</strong> and <strong>DLP</strong> — and is primarily focused on incident management. They have built several <strong>self-serve workflows</strong> (shared mailbox creation, ~500/month fully automated) and use ServiceNow's <strong>On-Call module</strong> since Messaging support runs 24x7. The team is satisfied overall — no major day-to-day challenges — but has specific pain points around <strong>unclear custom-development ownership</strong> after original contractors left, and the speed of the development request pipeline.</p>
          <div className="summary-meta">
            <div className="summary-meta-item"><strong>Interviewees</strong>Dipin Mehta · Aman Kumar</div>
            <div className="summary-meta-item"><strong>Also present</strong>Priti Singh (ServiceNow platform team)</div>
            <div className="summary-meta-item"><strong>Date</strong>September 15, 2026</div>
            <div className="summary-meta-item"><strong>Top strength</strong>High automation of repetitive requests (~500/mo shared mailbox)</div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">🔧 Modules &amp; Customizations</h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">📦 Modules Used</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>ITSM</strong> — Incident, Problem, Change, RITM (Request Management)</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📞</span><span><strong>On-Call module</strong> — Used since Messaging support runs 24x7. No other modules outside ITSM.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🤖</span><span><strong>AI Assist (Incident Summarization)</strong> — Used for incidents that hop between multiple teams/technologies and build up a long history.</span></li>
              </ul>
            </div>
            <div className="card">
              <div className="card-title">🔧 Custom Workflows Built</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>📬</span><span><strong>Shared mailbox creation</strong> — Self-serve portal, ~500/month, fully automated (form → RITM → Exchange backend → auto-close, 30–45 min end-to-end)</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🏢</span><span><strong>Room mailbox creation</strong> — Self-serve portal integrated with Exchange backend</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📧</span><span><strong>Email-to-incident routing</strong> — Custom backend routing rules (built with ServiceNow team) redirect certain emails directly into the Messaging queue, bypassing GHD</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔥</span><span><strong>Firewall rule request workflow</strong> — Built on behalf of network/security team (static content in ServiceNow)</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>IP whitelist requests</strong> — Fully automated: submit → RITM → backend whitelist → user notified</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📄</span><span><strong>Proofpoint/secure email enrollment form</strong> — Custom intake form</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔎</span><span><strong>Custom GHD-facing pages</strong> — Find users, follow, enable/disable out-of-office (built to reduce GHD escalations to Messaging)</span></li>
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
                <h4>Self-Serve Intake (High Volume)</h4>
                <p>User fills out self-serve form (e.g., shared mailbox creation) integrated with GHD portal → creates RITM → triggers backend Exchange workflow → mailbox created in ~30–45 min → RITM auto-closes and user notified. The RITM is primarily for audit/tracking; the actual work happens outside ServiceNow.</p>
                <span className="step-tag auto">🤖 ~500/mo — Fully Automated</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Incident Intake (Dual Path)</h4>
                <p>(1) Manual — GHD takes user details, categorizes, routes to MCS Messaging queue. (2) Automated — users email a dedicated address; backend routing rules redirect emails directly into the Messaging queue as incidents, bypassing GHD.</p>
                <span className="step-tag auto">🤖 Automated (email routing)</span>
                <span className="step-tag manual">🖐 Manual (GHD path)</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">3</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Investigation</h4>
                <p>~80% of incidents require genuine investigation rather than following a fixed runbook — which is why the team hasn't invested in building out formal ServiceNow knowledge articles. Documentation lives in Confluence. AI summarization used for complex, multi-team incidents.</p>
                <span className="step-tag manual">🖐 Manual investigation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">🔴 Pain Points &amp; Opportunities</h2>
          <ul className="insight-list">
            <li className="insight-item">
              <span className="insight-icon">👥</span>
              <div className="insight-body">
                <h4>Unclear ownership of custom development after original contractors left</h4>
                <p>The ServiceNow contractors who originally built the team's custom interfaces have since left. The team doesn't know who to approach to modify fields or workflows in their custom intake forms, and requests bounce between people unfamiliar with the specific integration. Torsten's team (ITSM module owner) has been identified as the go-to contact going forward.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🔄</span>
              <div className="insight-body">
                <h4>Azure app registration secret rotation — manual, recurring challenge</h4>
                <p>The lookup used during shared mailbox creation (~500/month) depends on an Azure app registration whose secret must be rotated every 3 months per policy. Chasing down the right person to rotate it each cycle has been an ongoing challenge. Ask: a standard ServiceNow interface for entering a secret key that updates automatically on the backend. Priti agreed to look into it — flagged as likely not unique to Messaging.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">⚡</span>
              <div className="insight-body">
                <h4>Slow development request pipeline (multi-week sprint-based intake)</h4>
                <p>New custom development requests go through a sprint-based intake process that can take multiple weeks just to scope before work begins. The team asked for faster, more predictable turnaround. Related: a stalled request for a China-market-specific version of the shared mailbox interface (~1.5 years ago) forced the China team to build a workaround directly with Microsoft China that doesn't fully match the global tool's functionality.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">💬 Key Interview Highlights</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>🤖</span>AI and automation in use
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <p><strong>In use:</strong> ServiceNow AI Assist for incident summarization — particularly useful for incidents that hop between multiple teams/technologies. No other AI capabilities in active use.</p>
                <p style={{ marginTop: "8px" }}><strong>Aware of:</strong> Early-stage AIOps pilots (event/alert correlation across a few products, with Dynatrace connectors) — still in early stages and contingent on reducing customizations to use more out-of-the-box functionality.</p>
                <p style={{ marginTop: "8px" }}><strong>In exploration:</strong> Aman is exploring automating the group-IT-portal user-addition tickets (~20–30/month, ~5–10 min each) using the ServiceNow MCP server. Flagged needing a clear point of contact for support/troubleshooting if stuck — Torsten's team identified as the right contact.</p>
                <p style={{ marginTop: "8px" }}><strong>Training gap:</strong> No communication channel today for upcoming ServiceNow features and releases — the team doesn't know what's coming, which makes it hard to know what training would be useful. A recurring forum on upcoming releases was suggested.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>🔮</span>If you redesigned ServiceNow from scratch — what would change?
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <p>Overall satisfied — no major day-to-day challenges with ServiceNow itself. Main asks: (1) faster, clearer support for custom development requests; (2) continuing to explore AIOps/MCP-based automation. The team's view: ServiceNow is working well for them; the gaps are around support/ownership of custom work, not the platform itself.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div className={`tab-content${activeTab === 'sres' ? ' active' : ''}` } id="tab-sres">

        <div className="diagram-panel" style={{ marginTop: "20px" }}>
          <div className="diagram-panel-header">
            <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — SREs</span>
            <span className="diagram-panel-meta">Click to enlarge</span>
          </div>
          <img className="diagram-panel-img" src="/images/sres.png" alt="SREs ServiceNow Process Diagram" />
        </div>

        <div className="section">
          <h2 className="section-title">👥 Team Summary</h2>
          <p style={{ marginBottom: "12px" }}>
            <strong>SRE pods</strong> support a wide range of individual "solution" teams. ServiceNow adoption varies significantly by solution team — some use it heavily (Incidents from monitoring, Cases for support), others default to Jira, and some don't use ServiceNow at all. The team uses <strong>On-Call scheduling</strong> (recently migrated from Splunk On-Call) and the <strong>CSM (Cases) module</strong>, which was purchased specifically when SRE/STA moved off Salesforce.
          </p>
          <p>
            <strong>Interviewees:</strong> Manuel Vasquez (ServiceNow SRE champion, day-to-day operations) &amp; Sam Mesbahi (leads two SRE pods, CSM/customer-focused view) · <strong>Date:</strong> Sep 17, 2026
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">🛠️ Modules &amp; Tools</h2>
          <ul className="tools-list">
            <li style={{ display: "flex", gap: "8px" }}><span>🎫</span><span><strong>ITSM — Incident</strong> — Alerts from monitoring trigger incidents in SRE queues; P1/P2 trigger On-Call voice notifications</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>📂</span><span><strong>CSM (Cases)</strong> — Purchased to replace Salesforce; used for L1/L2 support requests from solution-team clients who have a portal; heavily customized workspace layout by STA</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>📞</span><span><strong>On-Call scheduling</strong> — Used firm-wide by all SRE teams; migrated from Splunk On-Call; working well with minor open issues</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Change — FCAB approval only</strong> — Sam's SRE leads participate in FCAB approval for client-facing solution changes; no SRE-created Change records in ServiceNow</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>🔧</span><span><strong>Jira</strong> — Dominant alternative; intended model is "Jira for build support, ServiceNow for operate support" but many solution teams use Jira for both</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>📊</span><span><strong>Dynatrace</strong> — Synthetic monitoring; triggers cases/incidents via native integration when configured (some only send email/webhook, causing manual ticket creation)</span></li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">🔄 End-to-End Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-body">
                <strong>Incident intake (2 paths)</strong>
                <p>(A) Monitoring alert → auto-creates Case → SCA triages → creates related Incident if genuine outage. (B) User emails support@mckinsey.com → Case opened → SCA resolves or escalates to SRE (L2).</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-body">
                <strong>P1/P2 escalation via On-Call</strong>
                <p>ServiceNow On-Call triggers voice call/notification to on-call engineer. Engineer acknowledges, works from Confluence/GitHub runbooks.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-body">
                <strong>Investigation &amp; resolution</strong>
                <p>Engineer updates ticket status (New → Assigned/Active), adds work notes, resolves/closes. Cross-team communication happens over Slack (manually reflected back into ticket).</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-body">
                <strong>Daily handover (manual)</strong>
                <p>Handover pasted into Slack 3× a day rather than pulled from a shared dashboard. No automated reporting or dashboard in place.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">⚠️ Pain Points &amp; Opportunities</h2>
          <ul className="pain-list">
            <li className="insight-item">
              <span className="insight-icon">🚪</span>
              <div className="insight-body">
                <h4>No client portal — biggest pain point</h4>
                <p>Current public intake (web form + email-to-Case) gives client users zero visibility into ticket status, SLA, or ownership. A replacement has been repeatedly deprioritized due to funding, despite a completed ServiceNow Impact assessment of the CSM module documenting gaps in detail.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🔀</span>
              <div className="insight-body">
                <h4>Fragmented tooling — work invisible in ServiceNow</h4>
                <p>Many solution teams' clients use Jira or plain Slack, limiting how much of SRE's real workload is visible in ServiceNow. The intended "Jira for build, ServiceNow for operate" model isn't consistently followed.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">📊</span>
              <div className="insight-body">
                <h4>No shared dashboards — manual 3x/day Slack handover</h4>
                <p>Native ServiceNow reporting doesn't cover their use case. Manuel wants a shared dashboard to replace the team's manual Slack handover write-up. Sam flagged on-call schedule isn't fed into SPOC Slack channels automatically.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">💬</span>
              <div className="insight-body">
                <h4>No Slack ↔ ServiceNow bridge</h4>
                <p>SREs handle a lot of communication over Slack, then manually reflect updates back into tickets. Sam wants a Slack agentic chatbot (like Platform McKinsey's "get help" channel) to deflect L1/L2 case volume and auto-create incidents from Slack.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🗂️</span>
              <div className="insight-body">
                <h4>Stale assignment groups &amp; ownership data</h4>
                <p>Multiple stale groups identified live during interview (merged teams, deprecated titles, completed project groups). Sam was missing from one live group he should be in. Reflects broader CMDB/ownership trust issue — ~30–40% of CMDB fields trusted; operational status and contacts are least trustworthy.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">💬 Key Interview Highlights</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>🤖</span>AI &amp; automation readiness
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <p><strong>Not using AI features</strong> — Manuel: hasn't seen incident summarization (volume is ~1–2/month). Sam: Now Assist exists on Cases but used "very little."</p>
                <p style={{ marginTop: "8px" }}><strong>Clear opportunity:</strong> Slack-based self-serve deflection ("Ask AI" chatbot). Sam noted Platform McKinsey's "get help" channel already does this — can even create incidents from Slack — and wishes every team had it.</p>
                <p style={{ marginTop: "8px" }}><strong>Reporting:</strong> Manuel is already planning to try the ServiceNow MCP with Cursor to query data and build custom reports, since native reporting doesn't surface what they need.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>🔮</span>Broader platform context shared by Heath
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <p>The firm is evaluating whether to stand up a <strong>second ServiceNow instance</strong> (brownfield or greenfield) specifically to escape accumulated customization blocking out-of-the-box AI features (correlations, auto-RCA).</p>
                <p style={{ marginTop: "8px" }}>Also piloting <strong>ITIL v5-style automatic change-risk scoring/auto-approval</strong> (vs. today's ITIL v3 FCAB model) with Ricardo and Eugene's team — starting with Gandalf and GitHub Actions pipelines, with eye toward extending to Practices (current audit gap: change management happening outside ServiceNow).</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>📋</span>Sam's redesign wishlist
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <ul style={{ lineHeight: 1.8 }}>
                  <li>Customer-first intake fixing the client portal gap</li>
                  <li>Internal support teams (not just PMs) able to own L1/L2/L3 support-model definitions — currently only PMs have edit access in product portal</li>
                  <li>Pre-built, easily customizable dashboards for SREs</li>
                  <li>Roll-up of SLA/OLA performance to leadership for accountability</li>
                  <li>Agentic Slack "Ask AI" chatbot for self-serve deflection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div className={`tab-content${activeTab === 'pmat' ? ' active' : ''}` } id="tab-pmat">

        <div className="diagram-panel" style={{ marginTop: "20px" }}>
          <div className="diagram-panel-header">
            <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — PMAT (Premises Monitoring &amp; AV Technology)</span>
            <span className="diagram-panel-meta">Click to enlarge</span>
          </div>
          <img className="diagram-panel-img" src="/images/pmat.png" alt="PMAT ServiceNow Process Diagram" />
        </div>

        <div className="section">
          <h2 className="section-title">👥 Team Summary</h2>
          <p style={{ marginBottom: "12px" }}>
            <strong>PMAT (Premises Monitoring and Access Team)</strong> handles two core responsibilities: (1) first-response alarm monitoring across ~140 offices globally using Lenel OnGuard, and (2) Lenel product/access control hardware + CCTV surveillance support, including end-user support for Office Services. Real-time alarm monitoring runs in Lenel OnGuard (outside ServiceNow); ServiceNow captures incident records for audit, device reliability, and compliance tracking.
          </p>
          <p>
            <strong>Interviewee:</strong> Karla Barquero (PMAT global lead) · <strong>Interviewers:</strong> Heath Williams &amp; Priti Singh · <strong>Date:</strong> Sep 16, 2026
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">🛠️ Modules &amp; Tools</h2>
          <ul className="tools-list">
            <li style={{ display: "flex", gap: "8px" }}><span>🎫</span><span><strong>ITSM — Incident</strong> — End-user requests (email-to-incident), Lenel critical alarms (mail-to-ticket), camera ping-check via Event Management, GHD queue-to-queue routing</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>🔄</span><span><strong>Event Management</strong> — Ping-check workflow triggers incidents when cameras stop responding; separate mechanism from Lenel alarm ticketing</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Change &amp; Problem</strong> — Approving changes affecting their products; occasional problem tickets; IPT tasks from GRC/IRM module</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>🏢</span><span><strong>Lenel OnGuard</strong> — Primary real-time alarm monitoring platform; not ServiceNow; also handles live video feeds during panic/fire events</span></li>
            <li style={{ display: "flex", gap: "8px" }}><span>📊</span><span><strong>Power BI</strong> — Karla built a dashboard on ServiceNow incident data, but it excludes all Slack-handled work (known incomplete baseline)</span></li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">🔄 End-to-End Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-body">
                <strong>Intake (automated ticket creation)</strong>
                <p>Two channels: (A) end-user email → email-to-incident (bypasses GHD); (B) Lenel critical alarms (fire, panic, emergency doors) → mail-to-ticket integration for tracking/audit only. Real-time response happens in Lenel OnGuard, not ServiceNow.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-body">
                <strong>CI tagging (manual pain point)</strong>
                <p>All Lenel-originated incidents land tagged with one generic "Physical Security" CI (old catch-all). Fixing requires an API-based integration that hasn't been resourced. No bulk CI-editing (only bulk assign/resolve), so agents often skip CI correction at high volume → degrades reporting.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-body">
                <strong>Resolution &amp; communication</strong>
                <p>Most Slack-handled requests (ITSAs, local IT, Office Services) never become ServiceNow incidents — work is invisible in reporting. Team historically replied from internal inbox rather than ServiceNow (security stakeholder visibility requirement); adoption improving under Karla's coaching.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">⚠️ Pain Points &amp; Opportunities</h2>
          <ul className="pain-list">
            <li className="insight-item">
              <span className="insight-icon">🏷️</span>
              <div className="insight-body">
                <h4>Generic "Physical Security" CI on all Lenel incidents + no bulk CI-editing</h4>
                <p>A single hardware/electrical fault can cascade into ~100 incidents. All land with the same meaningless CI. Fixing requires an API-based integration (~$30K to move to Event Management). Makes correcting CIs at volume impractical and directly degrades reporting accuracy.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">📈</span>
              <div className="insight-body">
                <h4>~4,500 Lenel-driven incidents/month — mostly noise</h4>
                <p>Karla confirmed an average of roughly 4.5K Lenel-driven incidents a month, calling it "more pain than benefit." A single electrical fault can generate ~100 incidents from one root cause. She's exploring moving Lenel alarms to Event Management (~$30K cost) or removing them from the Incident table entirely.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">💬</span>
              <div className="insight-body">
                <h4>Slack work completely invisible — highest-traffic SPOC channel reviewed</h4>
                <p>PMAT's SPOC channel has by far the highest traffic of any team Heath reviewed, but none of that volume shows up in ServiceNow incident data or reporting. The baseline is known to be incomplete. Priority: accurate, complete total request volume measurement.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🔗</span>
              <div className="insight-body">
                <h4>Lenel device estate outside CMDB entirely</h4>
                <p>Badges, doors, and alarms managed in Lenel OnGuard — zero CMDB visibility. Cameras exist in CMDB but accuracy is low (no dedicated reviewer; online/offline ping-check is new and still WIP). Documentation partially migrated to ServiceNow KB — bulk still in Confluence.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2 className="section-title">💬 Key Interview Highlights</h2>
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>🤖</span>AI &amp; automation readiness
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <p><strong>Now Assist:</strong> Used situationally — incident summarization is genuinely helpful for tickets with long history (extended vendor back-and-forth), but not needed for short/direct tickets (majority).</p>
                <p style={{ marginTop: "8px" }}><strong>Explored:</strong> A Slack-based self-serve flow for alarm suppression (ITSA selects device + duration to suppress/re-enable). Blocked by: (1) Firm Security requires human-in-the-loop approval + guaranteed revert; (2) direct Lenel integration not straightforward.</p>
                <p style={{ marginTop: "8px" }}><strong>Knowledge base:</strong> Team recently learned of an MCP-based tool (via Cursor) that can auto-generate KB-ready HTML documentation — plans to use this to accelerate Confluence → ServiceNow KB migration.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-trigger" aria-expanded="false">
                <span>🔮</span>Karla's redesign wishlist
                <span className="accordion-chevron">▼</span>
              </button>
              <div className="accordion-body">
                <ul style={{ lineHeight: 1.8 }}>
                  <li><strong>Move Lenel alarm incidents out of the Incident table</strong> — either remove from ServiceNow or shift to Event Management (~$30K cost being evaluated vs. business case value)</li>
                  <li><strong>Auto-create ServiceNow incidents from Slack requests</strong> — would finally quantify and track the large share of Slack-handled work</li>
                  <li><strong>Bulk CI-editing capability</strong> (beyond bulk assign/resolve) — would materially reduce manual effort on reporting accuracy</li>
                  <li><strong>Consolidate two intake channels</strong> (Lenel alarms vs. CMDB device events) into a single channel (Priti's suggestion)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      
      <div className={`tab-panel${activeTab === 'cce' ? ' active' : ''}` } id="tab-cce">

        <div className="diagram-panel" style={{ marginTop: "20px" }}>
          <div className="diagram-panel-header">
            <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — CCE / Communications &amp; Collaboration</span>
            <span className="diagram-panel-meta">Click to enlarge</span>
          </div>
          <img className="diagram-panel-img" src="/images/cce.png" alt="CCE ServiceNow Process Diagram" />
        </div>

        <div className="summary-box" style={{ marginTop: "20px" }}>
          <h3>Team Summary</h3>
          <p>
            MCS CCE (Communications and Collaboration Engineering — formerly Voice and Video) engineers and operates the firm's
            communications and collaboration products. <strong>Four assignment groups</strong> sit under Inder Cheema and Naresh Prajapati:
            MCS CCE, MCS CCE Collaboration Tools, MCS CCE VoIP Engineering, and MCS CCE Video Engineering.
            ServiceNow is used extensively across <strong>Incident, Change, Problem, Knowledge, CMDB, Certificate Management, On-Call,
            and Contact Center orchestration</strong>. The team's biggest frustrations are an <strong>unclear ownership path for automation requests</strong>
            after contractor departures, <strong>noisy Zoom Room alerts</strong> unlinked to CMDB assets, and
            <strong>no notification when new ServiceNow capabilities ship</strong> — meaning Now Assist and AI features are technically
            available but not being used simply because the team doesn't know about them.
          </p>
          <div className="summary-meta">
            <div className="summary-meta-item"><strong>Interviewees</strong>Inder Cheema · Naresh Prajapati</div>
            <div className="summary-meta-item"><strong>Interviewer</strong>Heath Williams</div>
            <div className="summary-meta-item"><strong>Sub-areas</strong>Voice · In-room Video · MS Teams · CCT Office · Contact Center</div>
            <div className="summary-meta-item"><strong>Key gap</strong>AI awareness gap — Now Assist available but unused</div>
          </div>
        </div>

        
        <div className="stat-bar">
          <div className="stat-item"><div className="stat-value">4</div><div className="stat-label">Assignment Groups</div></div>
          <div className="stat-item"><div className="stat-value">3</div><div className="stat-label">FCAB Groups</div></div>
          <div className="stat-item"><div className="stat-value">~2,800</div><div className="stat-label">In-room Video Devices</div></div>
          <div className="stat-item"><div className="stat-value">0</div><div className="stat-label">Teams Using Now Assist</div></div>
          <div className="stat-item"><div className="stat-value">10+ modules</div><div className="stat-label">ServiceNow Modules in Use</div></div>
        </div>

        
        <div className="section">
          <h2 className="section-title">🔧 Modules &amp; Tools</h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">📦 ServiceNow Modules</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Incident, Change, Problem</strong> — Core ITSM across all sub-areas</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📚</span><span><strong>Knowledge Objects</strong> — User-facing how-tos (engineering docs go in Confluence)</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🗄️</span><span><strong>CMDB / Asset</strong> — ~2,800 in-room video devices, Teams service ownership, Voice, Operations</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📋</span><span><strong>Service Catalog / GHD Software</strong> — Zoom, Mentimeter, Webex, Teams license requests</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔒</span><span><strong>Security Incident Tasks (SITs)</strong> — From SIR module, similar to an RITM</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔐</span><span><strong>Certificate Module</strong> — Auto-generates and deploys certs to video devices</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📞</span><span><strong>On-Call Schedule</strong> — Replaced Splunk On-Call; MCS CCE on-call management</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🤖</span><span><strong>AI Agent Studio</strong> — Used in Operations area</span></li>
              </ul>
            </div>
            <div className="card">
              <div className="card-title">🛠️ Adjacent Tools</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>💬</span><span><strong>Zoom / Webex / Teams</strong> — Admin consoles; Zoom–ServiceNow app for in-room video alert-to-incident</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🏢</span><span><strong>Microsoft 365 Admin Center / Entra ID</strong> — Teams administration, compliance, CQD</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📊</span><span><strong>Power BI / SharePoint / Excel</strong> — Asset inventory fields CMDB can't flexibly accommodate</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📈</span><span><strong>Dynatrace</strong> — Monitoring and anomaly-based alerting (replacing legacy Splunk)</span></li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="section">
          <h2 className="section-title">🔄 Key Workflows &amp; Automation</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-line"><div className="step-dot">1</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Incident Management — Multi-channel Intake</h4>
                <p>Incidents arrive via automated monitoring/alert-driven (Zoom Room device-down alerts, Dynatrace), email-to-ServiceNow, Slack integration, GHD-originated tickets, and local IT tickets. Alert-driven Zoom Room tickets auto-close if device becomes reachable within ~10–30 seconds.</p>
                <span className="step-tag auto">🤖 Partial Automation</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Catalog-to-Provision (Zoom/Mentimeter/Webex)</h4>
                <p>Colleague submits GHD Software catalog item → recording and AI-feature grants are automated end-to-end. Webinar 500 license automation in progress. Any failure reverts to manual work.</p>
                <span className="step-tag auto">🤖 Mostly Automated</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">3</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Certificate Management</h4>
                <p>Custom script generates and deploys certificates automatically to video devices, driven entirely through the ServiceNow certificate module.</p>
                <span className="step-tag auto">🤖 Fully Automated</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">4</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Voice / Contact Center Orchestration</h4>
                <p>ServiceNow orchestrates: VGI Service Desk (agents monitored in CMS), GHD IVR knowledge retrieval, voicemail-to-ticket via email, and On-Call scheduling. Avaya/AWS auto-notifies the on-call colleague by phone call and SMS.</p>
                <span className="step-tag auto">🤖 Mostly Automated</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="section">
          <h2 className="section-title">🔴 Top Pain Points</h2>
          <ul className="insight-list">
            <li className="insight-item">
              <span className="insight-icon">🔍</span>
              <div className="insight-body">
                <h4>Unclear automation/ownership path after contractor departures</h4>
                <p>Tech leads can no longer identify who within the ServiceNow team to approach for new automations or catalog items. Getting one custom intake form took 15–20 days and multiple calls just to get requirements understood.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">📢</span>
              <div className="insight-body">
                <h4>No notification when new ServiceNow capabilities ship — AI features unused despite being available</h4>
                <p>Now Assist is technically available today — nobody is using it. The gap isn't willingness, it's awareness. An informal handoff that used to alert the team when a new ServiceNow version entered dev/testing no longer exists.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🔔</span>
              <div className="insight-body">
                <h4>Zoom Room alerts are noisy and unlinked to CMDB</h4>
                <p>Alerts don't attach to the corresponding CMDB asset/room record, making it a manual effort to count alerts per room. Desired fix: delay incident creation by 30–45 minutes, link alerts to the correct CMDB asset, and add smarter suppression logic.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">⚙️</span>
              <div className="insight-body">
                <h4>Manual cross-platform coordination for Microsoft Teams governance</h4>
                <p>Teams work spans ServiceNow, Microsoft 365, Microsoft support, security, and operations — visibility across those systems is entirely manual with no automated handoffs.</p>
              </div>
            </li>
          </ul>
        </div>

        
        <div className="section">
          <h2 className="section-title">🤖 AI &amp; Automation Readiness</h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">Current AI Usage</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>⚠️</span><span><strong>Now Assist: NOT in use</strong> — Available today but unused due to lack of awareness</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🟡</span><span><strong>AI Agent Studio</strong> — Used in Operations (limited scope)</span></li>
              </ul>
            </div>
            <div className="card">
              <div className="card-title">Top Automation Candidates</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>Zoom Room alert delay + CMDB linkage</strong> — Delay 30–45 min, link alert to asset, auto-suppress transient issues</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>Non-Poly CMDB auto-discovery + decommissioning</strong> — Eliminate manual DTEN, Logitech entries</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>MS Teams: ticket triage, KO generation, governance checks</strong> — AI-assisted with human review</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>Webinar 500 license automation</strong> — Already in progress</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      
      <div className={`tab-panel${activeTab === 'edap' ? ' active' : ''}` } id="tab-edap">

        <div className="diagram-panel" style={{ marginTop: "20px" }}>
          <div className="diagram-panel-header">
            <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — EDAP / ERP, Database &amp; Analytics Platform</span>
            <span className="diagram-panel-meta">Click to enlarge</span>
          </div>
          <img className="diagram-panel-img" src="/images/edap.png" alt="EDAP ServiceNow Process Diagram" />
        </div>

        <div className="summary-box" style={{ marginTop: "20px" }}>
          <h3>Team Summary</h3>
          <p>
            EDAP (ERP, Database &amp; Analytics Platform) manages platforms and products across both
            <strong>client-facing solutions</strong> (Spendscape, SCM, SupplyHQ) and
            <strong>internal enterprise systems</strong> (Firm Financials, Payroll, Snowflake).
            Harvinder Singh Kohli leads the ~40-person group across India, Canada, the US, and Costa Rica;
            Inam Khan leads the analytics side.
            ServiceNow is deeply integrated across all EDAP operations — Incident, Change, Problem, Request (RITM/Cases),
            Vulnerability Management, and On-Call. The team's biggest frustration is the
            <strong>ServiceNow MCP's read-only limitation</strong> — they're already using Jira's MCP (which supports writes)
            and want ServiceNow to match parity so they can stop running two separate integration paths.
            Custom form delivery is also painfully slow: one request took <strong>15–20 days and multiple calls</strong> just to scope.
          </p>
          <div className="summary-meta">
            <div className="summary-meta-item"><strong>Interviewees</strong>Harvinder Singh Kohli · Inam Khan</div>
            <div className="summary-meta-item"><strong>Interviewers</strong>Heath Williams, Priti Singh</div>
            <div className="summary-meta-item"><strong>Group size</strong>~40 people across India, Canada, US, Costa Rica</div>
            <div className="summary-meta-item"><strong>Key ask</strong>ServiceNow MCP write access + self-serve form creation</div>
          </div>
        </div>

        
        <div className="stat-bar">
          <div className="stat-item"><div className="stat-value">~40</div><div className="stat-label">Group Size (people)</div></div>
          <div className="stat-item"><div className="stat-value">~90%</div><div className="stat-label">Change Requests from SAP Area</div></div>
          <div className="stat-item"><div className="stat-value">40–45%</div><div className="stat-label">Tickets Deflected by Ask AI Bot</div></div>
          <div className="stat-item"><div className="stat-value">15–20 days</div><div className="stat-label">To Deliver One Custom Form</div></div>
          <div className="stat-item"><div className="stat-value">Read-only</div><div className="stat-label">ServiceNow MCP Today</div></div>
        </div>

        
        <div className="section">
          <h2 className="section-title">🔧 Modules &amp; Tools</h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">📦 ServiceNow Modules</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Incident</strong> — Alerts from Dynatrace/Oracle OEM, Platform McKinsey, and Slack SPOC channels</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Change Management</strong> — Heaviest in SAP area (~90% of change requests); Non-prod → Prod → FCAB flow</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Problem Management</strong> — Triggered by SOM after major incidents, or proactively</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Request Management</strong> — RITM, Task, and Cases for external clients</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔒</span><span><strong>Vulnerability Management</strong> — Remediation Tasks</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📞</span><span><strong>On-Call</strong> — Database team only (replaced Splunk On-Call)</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔐</span><span><strong>Certificate Management</strong> — Database team only, for SSL certificates</span></li>
              </ul>
            </div>
            <div className="card">
              <div className="card-title">🛠️ Adjacent Tools</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>📋</span><span><strong>Jira</strong> — Used firm-wide for all user requests, longer projects, epics. Jira MCP supports read + write.</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>💬</span><span><strong>Slack SPOC Channels</strong> — "Ask AI" bot deflects 40–45% of requests directly</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📊</span><span><strong>Tableau / Snowflake (Modern Analytics)</strong> — Built against Snowflake copy of SN data; native reporting insufficient</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🔌</span><span><strong>ServiceNow MCP (read) + API (write)</strong> — Two separate paths; team wants to consolidate</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>📡</span><span><strong>Dynatrace / Oracle OEM</strong> — Monitoring and auto-generating incidents into ServiceNow</span></li>
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
                <h4>Incident Intake — Three Channels</h4>
                <p>(a) Automated alerts from Dynatrace/Oracle OEM → directly into EDAP's queue. (b) Platform McKinsey "Get Help" intake form maps directly into the queue. (c) SPOC Slack channels — "Ask AI" bot resolves ~40–45% directly; unresolved requests are routed to ServiceNow tickets.</p>
                <span className="step-tag auto">🤖 Partially Automated</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>Change Management — Jira Planning → ServiceNow Execution</h4>
                <p>Planning/design happens in Jira; once ready for deployment, team raises Non-prod then Prod Change records in ServiceNow. Normal changes go to FCAB(s) for approval; Emergency changes take a faster path. SAP area generates ~90% of change requests.</p>
                <span className="step-tag manual">🖐 Manual (FCAB approval required)</span>
              </div>
            </div>
            <div className="process-step">
              <div className="step-line"><div className="step-dot">3</div><div className="step-connector"></div></div>
              <div className="step-body">
                <h4>SAP Access AI Agent — Custom Intake Form</h4>
                <p>Custom ServiceNow intake form for SAP access requests feeds an AI agent that reads the request, automatically runs the necessary queries, and routes to an engineer for approval before executing in production.</p>
                <span className="step-tag auto">🤖 AI-assisted (human approval required)</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="section">
          <h2 className="section-title">🔴 Top Pain Points</h2>
          <ul className="insight-list">
            <li className="insight-item">
              <span className="insight-icon">🔧</span>
              <div className="insight-body">
                <h4>ServiceNow MCP is read-only — forces two separate integration paths</h4>
                <p>The team already uses Jira's MCP to update, comment on, and close tasks directly. ServiceNow's MCP is read-only today, forcing EDAP to run MCP for reads and the API for writes. The team wants a single MCP path with write capability — the #1 operational improvement request.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🐢</span>
              <div className="insight-body">
                <h4>Custom form delivery is painfully slow — 15–20 days for one form</h4>
                <p>One custom intake form took 15–20 days and multiple calls just to get requirements understood. The team wants self-serve form creation — ideally prompt-based ("describe the form you want and get it built") rather than a drag-and-drop GUI.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🔑</span>
              <div className="insight-body">
                <h4>API key provisioning is broken — one request took a month and still isn't working</h4>
                <p>One API key request took about a month to fulfill. As of the interview, the key still isn't working and the issue remains open (tracked as FCT-51006).</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">🔄</span>
              <div className="insight-body">
                <h4>Duplicate incidents from recurring monitoring alerts</h4>
                <p>The same recurring monitoring alert can spawn a new ServiceNow incident before the prior one is resolved, adding noise and extra closure effort. Tracked internally as FCT-51006.</p>
              </div>
            </li>
          </ul>
        </div>

        
        <div className="section">
          <h2 className="section-title">🤖 AI &amp; Automation</h2>
          <div className="grid-2">
            <div className="card">
              <div className="card-title">Current AI Usage</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>Ask AI bot (Platform McKinsey)</strong> — Deflects 40–45% of Slack/Get Help requests before they become tickets</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>✅</span><span><strong>SAP Access AI Agent</strong> — Reads custom intake form, runs queries, routes for human approval</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🟡</span><span><strong>Now Assist (closure notes)</strong> — Database team only</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>❌</span><span><strong>Incident summarization banner</strong> — No one using it (confirmed live on the call)</span></li>
              </ul>
            </div>
            <div className="card">
              <div className="card-title">Top Automation Candidates</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
                <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>Slack → ServiceNow bridge</strong> — When Ask AI can't resolve, automatically create a ticket with context</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>Write-back via MCP</strong> — Close tickets + add notes, not just read/update</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>Self-serve form creation</strong> — Prompt-based, natural-language-first form creation</span></li>
                <li style={{ display: "flex", gap: "8px" }}><span>🎯</span><span><strong>Natural-language ops dashboard</strong> — Describe the report → get auto-refreshing trend link</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}
