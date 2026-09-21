import { useState, useEffect } from 'react'

export default function Dto() {
  const [activeTab, setActiveTab] = useState('bcdr')

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
        <span>DTO</span>
      </div>
      <h1>🛡️ DTO — Digital Technology Office</h1>
      <p className="subtitle">Stakeholder interview findings across 6 DTO sub-teams</p>
      <div className="header-meta">
        <span className="meta-pill">📅 Interviews: Sep 14–17, 2026</span>
        <span className="meta-pill">👤 Lead: Jose Manuel Sanchez</span>
        <span className="meta-pill">✅ 6 sub-teams complete</span>
      </div>
    </div>

    <div className="page-content">

      
      <div className="summary-box">
        <h3>DTO Overview</h3>
        <p>
          The Digital Technology Office (DTO) encompasses six distinct functional groups, each with different ServiceNow
          usage patterns. The SOC is the most mature ServiceNow user (~90% automated incident creation). BC/DR relies on
          ServiceNow for resilience tiering but does critical recovery-plan work outside the platform in Word documents.
          Forensics &amp; Threat Intel is primarily a heavy consumer/reader of ServiceNow data. GRC acts as an enabler —
          building ServiceNow workflows for risk, compliance, and legal customers. Practices manages AI tools &amp; platform
          support for consulting groups and is piloting Now Assist / Knowledge Central as an AI first-responder.
          IAM (Identity &amp; Access Management) uses ServiceNow as a source of truth (CMDB, Product Catalog), for support
          queues, and some self-service forms — but is increasingly moving self-service ownership to Platform McKinsey.
        </p>
        <div className="summary-meta">
          <div className="summary-meta-item"><strong>Sub-teams</strong>BC/DR · SOC · Forensics &amp; TI · GRC · Practices · IAM</div>
          <div className="summary-meta-item"><strong>Primary modules</strong>SecOps, INC, Change, IRM, Product Registry, Now Assist</div>
          <div className="summary-meta-item"><strong>Key theme</strong>CMDB completeness is a shared blocker across all 5 teams</div>
        </div>
      </div>

      
      <div className="tabs" style={{ marginTop: "8px" }}>
        <button className={`tab-btn${activeTab === 'tab-bcdr' ? ' active' : ''}` } onClick={() => setActiveTab('tab-bcdr')} data-tab="tab-bcdr">🔒 BC / DR</button>
        <button className={`tab-btn${activeTab === 'tab-soc' ? ' active' : ''}` } onClick={() => setActiveTab('tab-soc')} data-tab="tab-soc">🛡️ SOC</button>
        <button className={`tab-btn${activeTab === 'tab-forensics' ? ' active' : ''}` } onClick={() => setActiveTab('tab-forensics')} data-tab="tab-forensics">🔍 Forensics &amp; TI</button>
        <button className={`tab-btn${activeTab === 'tab-grc' ? ' active' : ''}` } onClick={() => setActiveTab('tab-grc')} data-tab="tab-grc">📜 GRC</button>
        <button className={`tab-btn${activeTab === 'tab-practices' ? ' active' : ''}` } onClick={() => setActiveTab('tab-practices')} data-tab="tab-practices">📋 Practices</button>
        <button className={`tab-btn${activeTab === 'tab-iam' ? ' active' : ''}` } onClick={() => setActiveTab('tab-iam')} data-tab="tab-iam">🔐 IAM</button>
      </div>

        
        <div className={`tab-panel${activeTab === 'bcdr' ? ' active' : ''}` } id="tab-bcdr">

          <div className="diagram-panel" style={{ marginTop: "20px" }}>
            <div className="diagram-panel-header">
              <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — BC/DR (Business Continuity &amp; Disaster Recovery)</span>
              <span className="diagram-panel-meta">Click to enlarge</span>
            </div>
            <img className="diagram-panel-img" src="/images/bcdr.png" alt="BC-DR ServiceNow Process Diagram" />
          </div>

          
          <div className="card mt-24">
            <div className="card-title">📋 Team Summary</div>
            <p><strong>Interviewee:</strong> Amit Sharma &nbsp;|&nbsp; <strong>Date:</strong> September 17, 2026</p>
            <p>
              The BC/DR team runs three workstreams: <strong>product disaster resilience</strong>,
              <strong>business capability planning</strong>, and <strong>backup/disaster-recovery operations</strong>.
              ServiceNow supports resilience tiering (RTO/RPO), compliance tracking via the Product Registry,
              and standard operational processes (problem and change management) for backup and recovery.
              Critical recovery-plan content is currently maintained in Word documents linked from ServiceNow records —
              not natively in the platform.
            </p>
            <div className="tag-list">
              <span className="tag">Product Registry</span>
              <span className="tag">Change Management</span>
              <span className="tag">BC Module (QA only)</span>
              <span className="tag">RTO/RPO Tiering</span>
              <span className="tag">Compliance Dashboard</span>
            </div>
          </div>

          
          <div className="stat-bar">
            <div className="stat-item"><div className="stat-value">71</div><div className="stat-label">Products with Recovery Docs</div><div className="stat-sub">100% compliance for control 1</div></div>
            <div className="stat-item"><div className="stat-value">3</div><div className="stat-label">Resilience Workstreams</div><div className="stat-sub">Disaster resilience · Business capability · Backup/DR</div></div>
            <div className="stat-item"><div className="stat-value">~40%</div><div className="stat-label">BC Plan Auto-generation Potential</div><div className="stat-sub">If CMDB dependency mapping is complete</div></div>
            <div className="stat-item"><div className="stat-value">261</div><div className="stat-label">BC Plans in QA Module</div><div className="stat-sub">Mostly 2023-era drafts; not yet cloud-ready</div></div>
          </div>

          
          <div className="section mt-24">
            <h2 className="section-title">🔄 End-to-End Process</h2>
            
            <div className="placeholder-notice">
              <span>📎</span>
              <span><strong>E2E Process Document:</strong> Formal process diagram will be added when provided. The steps below are synthesized from the stakeholder interview.</span>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">1</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Product Registration &amp; RTO/RPO Classification</h4>
                  <p>Product owners register products in ServiceNow and classify their RTO/RPO tier (e.g., Active Directory = T0/P1: recovery within 8 hours, backups within 24 hours). Classification drives downstream compliance requirements.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">2</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Recovery Plan Authoring (Word Document)</h4>
                  <p>Product owners complete a Word-based "Product Recovery Plan" template covering ownership, hosting/cloud details, upstream/downstream dependencies, and the recovery procedure. The document is linked from the ServiceNow record but lives outside the platform.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                  <span className="step-tag" style={{ background: "#FEEBEB", color: "var(--mds-color-crimson-red-500)" }}>⚠️ Staleness Risk</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">3</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Compliance Dashboard Tracking</h4>
                  <p>Three controls are tracked in ServiceNow: (1) every product has a recovery document, (2) each plan is reviewed annually, (3) each plan is tested annually. Control 1 is currently at 100%; controls 2 &amp; 3 are improving.</p>
                  <span className="step-tag partial">⚡ Partially Automated</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">4</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Annual Review &amp; Testing</h4>
                  <p>Plans are reviewed and tested annually. Review and test dates are captured in custom ServiceNow fields added to the product table. Activity is low but improving per Amit's assessment.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">5</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Incident / DR Activation</h4>
                  <p>When a DR event occurs, the recovery plan is executed following the Word document procedure. Change and problem management records in ServiceNow are used for operational coordination during recovery.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="section">
            <h2 className="section-title">🔴 Top Pain Points</h2>
            <ul className="insight-list">
              <li className="insight-item">
                <span className="insight-icon">🔗</span>
                <div className="insight-body">
                  <h4>No upstream/downstream dependency mapping in CMDB</h4>
                  <p>Dependencies are tracked manually in Word documents and go stale over time as servers are renamed or migrated to cloud. This is the single biggest blocker for automating BC plan content generation (~40% of a plan could be auto-generated if this data were complete).</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">📦</span>
                <div className="insight-body">
                  <h4>Business Continuity module is outdated and underused</h4>
                  <p>The BC module exists in ServiceNow (currently only in QA with ~261 plans) but is on-prem-oriented, not aligned with the team's cloud footprint, and has had no consistent activity since 2023.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">🚨</span>
                <div className="insight-body">
                  <h4>Gaps in recovery documentation surfaced during incidents</h4>
                  <p>A recent incident (~200 servers unavailable) revealed that several products lacked recovery documentation. Better automation and visibility would have caught this earlier.</p>
                </div>
              </li>
            </ul>
          </div>

          
          <div className="section">
            <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
            <div className="accordion">

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>📦</span>Which ServiceNow modules does BC/DR use?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Modules in use: the <strong>Product Registry / UPC table</strong> (technical and resilience details), the <strong>Business Capability Mapping table</strong>, and <strong>Change Management</strong>. Alongside ServiceNow, the team maintains a Word-based "Product Recovery Plan" document (linked from the ServiceNow record, not a native form) that captures ownership, hosting/cloud details, dependencies, and the recovery procedure. A Business Continuity Planning module exists in ServiceNow (currently only in QA, ~261 plans) but is not actively used by this team.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>⚙️</span>What customizations has the team built or requested?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Custom fields/pages on the product table to capture the recovery-plan <strong>review date</strong> and <strong>testing date</strong>, supporting the resilience compliance dashboard. These were requested by the team before Amit joined the group. No upgrade issues were reported; the customized fields remain in active, regular use.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🗄️</span>How accurate/complete is the CMDB data the team relies on?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>The team does not validate CMDB data directly and relies on other teams to supply it, so reliability is uncertain. The key gap is the <strong>absence of upstream/downstream dependency mapping</strong> in CMDB — a prerequisite for any automation of business-continuity planning.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🤖</span>Where could AI or automation have the biggest impact?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Amit estimated that roughly <strong>40% of a business-continuity plan</strong> could be automatically generated if dependency and system data were complete and integrated with the Business Continuity module. The top automation candidate is the manual authoring and maintenance of recovery-plan documents (dependencies, architecture, ownership) currently done in Word.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🎓</span>Training and future state — what would the team change?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>The team is not currently using AI-assisted ServiceNow capabilities. The most impactful change would be: (1) <strong>completing dependency data in CMDB</strong> to enable automation, and (2) <strong>modernizing the Business Continuity module</strong> to align with the firm's cloud-first footprint. Integrating recovery plan content natively into ServiceNow (rather than Word) would eliminate staleness risk as infrastructure changes.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        
        <div className={`tab-panel${activeTab === 'soc' ? ' active' : ''}` } id="tab-soc">

          <div className="diagram-panel" style={{ marginTop: "20px" }}>
            <div className="diagram-panel-header">
              <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — SOC (Security Operations Center)</span>
              <span className="diagram-panel-meta">Click to enlarge</span>
            </div>
            <img className="diagram-panel-img" src="/images/soc.png" alt="SOC ServiceNow Process Diagram" />
          </div>

          <div className="card mt-24">
            <div className="card-title">📋 Team Summary</div>
            <p><strong>Interviewee:</strong> Prashant Saxena &nbsp;|&nbsp; <strong>Date:</strong> September 14, 2026</p>
            <p>
              The SOC's primary function is <strong>security incident management</strong>.
              ServiceNow SecOps (Security Incident Response) is the team's primary tool, used for all incident tickets
              raised from security alerts. The team also uses the standard Incident (INC) module to collaborate with
              support teams (SREs, product teams) and to handle request tasks (use-case tuning, access requests).
              ~90% of security-incident creation is automated via Palo Alto's SOAR tool (XIM) + Serenity AI agents.
            </p>
            <div className="tag-list">
              <span className="tag">ServiceNow SecOps</span>
              <span className="tag">Incident (INC)</span>
              <span className="tag">Palo Alto SOAR</span>
              <span className="tag">Serenity AI Platform</span>
              <span className="tag">CMDB Enrichment</span>
            </div>
          </div>

          <div className="section mt-24">
            <h2 className="section-title">🔄 End-to-End Process</h2>
            <div className="placeholder-notice">
              <span>📎</span>
              <span><strong>E2E Process Document:</strong> Formal process diagram will be added when provided. The steps below are synthesized from the stakeholder interview.</span>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">1</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Alert Ingestion via Palo Alto SOAR (XIM)</h4>
                  <p>Security alerts are ingested from the SIEM by Palo Alto's SOAR tool (XIM). Correlation logic is applied and a <strong>Security Incident Record (SIR)</strong> is automatically created in ServiceNow SecOps, pre-populated with description, short description, attack vector, and impacted practices.</p>
                  <span className="step-tag auto">🤖 Automated (~90%)</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">2</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>AI-driven Tier 1/2 Enrichment (Serenity)</h4>
                  <p>AI agents built in the Palo Alto tool perform Tier 1/Tier 2 analysis, enriching the SIR with CMDB data and vendor data. Analysis notes are written back into ServiceNow automatically. Cloud asset gaps (e.g., storage buckets) require separate lookup in <strong>Viz</strong>.</p>
                  <span className="step-tag auto">🤖 Automated</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">3</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Analyst Review &amp; Investigation</h4>
                  <p>The analyst reviews enriched ticket notes, investigates the incident, decides on the required action, and records findings in ServiceNow. Escalation to SREs/product teams uses standard INC module. Escalation routing is currently manual due to incomplete CMDB ownership data.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">4</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Reporting &amp; Ad-hoc Classification</h4>
                  <p>When stakeholders request reports with ad-hoc criteria (e.g., "GitHub-related incidents in August"), analysts must manually re-read ticket descriptions to classify incidents if no existing tag matches. This takes 1–2 days depending on ticket volume. A Serenity-based reporting agent is in development.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                  <span className="step-tag" style={{ background: "#FFF9D6", color: "#996600" }}>⚡ Automation In Progress</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">🔴 Top Pain Points</h2>
            <ul className="insight-list">
              <li className="insight-item">
                <span className="insight-icon">🗄️</span>
                <div className="insight-body">
                  <h4>Incomplete CMDB — especially cloud assets and ownership</h4>
                  <p>The SOC heavily relies on CMDB for incident enrichment and identifying asset owners, but is still working to update product-owner and technical POC information. CMDB also lacks complete cloud asset data (storage buckets), requiring separate lookup in Viz — forcing analysts to use multiple tools for a single incident.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">🐌</span>
                <div className="insight-body">
                  <h4>Slow ServiceNow customization turnaround</h4>
                  <p>Prashant cited 2–3 meetings about ServiceNow's native AI capabilities with no concrete outcome yet. This is why the SOC keeps building automation externally (Palo Alto, Serenity) despite added API overhead — ServiceNow's native development cycle is too slow for the team's needs.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">💰</span>
                <div className="insight-body">
                  <h4>Uncertainty on AI capability licensing</h4>
                  <p>The team doesn't know whether ServiceNow's AI capabilities are included in the existing license or require additional cost. This uncertainty is slowing adoption decisions and pushing the team toward external tools.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="section">
            <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
            <div className="accordion">

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🔧</span>What customizations has the SOC built or requested?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>The SecOps form was customized from the start (built by Bratislav) with custom fields for <strong>attack vectors</strong> and <strong>impacted practices</strong> — not available out-of-the-box. The most recent request was a field to capture the AI agent's "verdict" (previously buried in free-text notes). An ongoing discussion with Radoslaw covers using ServiceNow's native AI for automated reporting.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>⚙️</span>What workarounds exist outside ServiceNow?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Most SOC work happens in ServiceNow, but AI enrichment runs in <strong>Palo Alto SOAR</strong> and <strong>Serenity</strong> outside the platform. Cloud asset lookups (storage buckets not in CMDB) require a separate tool, <strong>Viz</strong>. The team would prefer a single point of access rather than checking multiple tools per incident.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🤖</span>AI and automation readiness
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>The team is building a <strong>natural-language reporting agent</strong> on Serenity to replace the manual re-read-and-classify process. The ideal capability: an AI that accepts prompts like "find incidents in August related to citizen developers or AI coding tools" and returns results in minutes. This could reduce a 1–2 day reporting task to hours.</p>
                  <p style={{ marginTop: "10px" }}>An additional automation candidate is a <strong>ServiceNow queue manager</strong> — an AI that automatically prioritizes tickets in the SOC queue without requiring a human to monitor it or an external API call to Palo Alto XIM. This would free analysts to focus on active incidents rather than queue triage. Native ServiceNow AI would be preferred if the platform could deliver it faster than external tools.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🎓</span>Training and future state
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>The team's training needs are primarily around ServiceNow native AI capabilities — specifically understanding what's included in the license, how to configure it, and what it can do versus external tools. The broader future-state ask: faster ServiceNow customization delivery so the SOC doesn't have to keep building everything in external platforms.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        
        <div className={`tab-panel${activeTab === 'forensics' ? ' active' : ''}` } id="tab-forensics">

          <div className="diagram-panel" style={{ marginTop: "20px" }}>
            <div className="diagram-panel-header">
              <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — Forensics &amp; Threat Intel</span>
              <span className="diagram-panel-meta">Click to enlarge</span>
            </div>
            <img className="diagram-panel-img" src="/images/forensics.png" alt="Forensics ServiceNow Process Diagram" />
          </div>

          <div className="card mt-24">
            <div className="card-title">📋 Team Summary</div>
            <p><strong>Interviewee:</strong> Angela Nucci (Manager, Technology &amp; Operations — Digital Risk Intelligence &amp; Investigations) &nbsp;|&nbsp; <strong>Date:</strong> September 14, 2026</p>
            <p>
              Angela oversees technology and operations for <strong>Digital Risk Intelligence and Investigations</strong>,
              which includes Threat Intelligence and Forensics. Her team uses ServiceNow primarily as a
              <strong>research tool and escalation target</strong> — not as a primary operational system.
              Digital Risk Intelligence case management runs on <strong>Salesforce</strong> (deliberate decision due to
              people/HR/conduct matter overlap with Risk, HR, and E&amp;C). Threat Intelligence and Forensics use
              ServiceNow tickets/queues for their operational work.
            </p>
            <div className="tag-list">
              <span className="tag">Incident (INC)</span>
              <span className="tag">Change</span>
              <span className="tag">Problem</span>
              <span className="tag">Security Incidents (SIR)</span>
              <span className="tag">Salesforce (case mgmt)</span>
              <span className="tag">JIRA</span>
              <span className="tag">XOR/XSOAR/XSIM</span>
            </div>
          </div>

          
          <div className="stat-bar">
            <div className="stat-item"><div className="stat-value">~2–3</div><div className="stat-label">Operational SN Tickets/Week</div><div className="stat-sub">Team acts as L2 escalation, not primary ops</div></div>
            <div className="stat-item"><div className="stat-value">Salesforce</div><div className="stat-label">Case Management System</div><div className="stat-sub">Deliberate — HR/conduct matters shared with Risk, HR, E&amp;C</div></div>
            <div className="stat-item"><div className="stat-value">1</div><div className="stat-label">Automation Candidate Identified</div><div className="stat-sub">Caller alert on departing employee block</div></div>
          </div>

          <div className="section mt-24">
            <h2 className="section-title">🔄 End-to-End Process</h2>
            <div className="placeholder-notice">
              <span>📎</span>
              <span><strong>E2E Process Document:</strong> Formal process diagram will be added when provided. The steps below are synthesized from the stakeholder interview.</span>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">1</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Exception Request Intake</h4>
                  <p>Exception requests (e.g., departing employee requesting to transfer personal files) flow automatically into the team's ServiceNow queue. Adding a departing employee to a block list is also automated.</p>
                  <span className="step-tag auto">🤖 Automated</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">2</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Investigation Research in ServiceNow</h4>
                  <p>During investigations, analysts search across ServiceNow's INC, ITM, and SIR records to piece together user history, allocated assets, software licenses, exceptions, USB suspensions, and prior GHD interactions. ServiceNow functions primarily as a research/reference database at this stage.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">3</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Escalation &amp; INC Creation</h4>
                  <p>Angela's team creates INCs directly to responsible teams (e.g., Network) only when needed to escalate an issue — they do not route every request through GHD. Most security automation runs through XOR/XSIM/XSOAR rather than natively in ServiceNow.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">4</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Caller Alert (Departing Employee Block)</h4>
                  <p>When a departing employee is placed on a block, adding a "caller alert" in ServiceNow is currently a <strong>manual step</strong> — flagged as an automation candidate.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                  <span className="step-tag" style={{ background: "#FFF9D6", color: "#996600" }}>⚡ Automation Candidate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">🔴 Top Pain Points</h2>
            <ul className="insight-list">
              <li className="insight-item">
                <span className="insight-icon">🏗️</span>
                <div className="insight-body">
                  <h4>Retrofitting old ServiceNow forms to current business model</h4>
                  <p>Threat Intelligence and Forensics have been "retrofitting" older ServiceNow forms to fit their current business model instead of redesigning them from scratch. This drives extra manual work to capture metrics/KPIs that the current fields don't support — a structural technical debt issue.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">🗂️</span>
                <div className="insight-body">
                  <h4>Fragmented tool landscape for case management</h4>
                  <p>Digital Risk Intelligence and Investigations case management runs in Salesforce (people/HR/conduct matters); high-level project tracking is in JIRA; security automation runs in XOR/XSIM/XSOAR. ServiceNow is one of several systems — the lack of consolidation creates friction during investigations.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">🔔</span>
                <div className="insight-body">
                  <h4>Manual caller alert on departing employee blocks</h4>
                  <p>A known manual step that could be automated — a workflow trigger for adding the caller alert when a departing employee block is created. Low complexity, high reliability impact.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="section">
            <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
            <div className="accordion">

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🗄️</span>How does the team view CMDB accuracy?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Angela considers CMDB <strong>reliable and significantly improved</strong> over the last few years, though there is still room for improvement. The main gap is usability rather than data quality — navigating tables is easy for experienced users but difficult for less experienced ones, even though front-end pages like the product portal already pull from CMDB. She recommends continued improvement of the product portal. She also tested ServiceNow's newer AI/natural-language CMDB search and found it doesn't work reliably yet.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🤖</span>AI readiness and automation candidates
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>The clearest automation candidate is the <strong>caller alert for departing employee blocks</strong>. Most other security workflows are already automated through XOR/XSIM/XSOAR rather than natively in ServiceNow. Angela sees the biggest AI opportunity in making ServiceNow data more accessible and searchable for investigations — reducing the time analysts spend manually piecing together user history from multiple tables.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🎓</span>Training needs and future state
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Angela's team has mixed ServiceNow usage patterns. The biggest future-state improvement would be redesigning the Forensics and Threat Intelligence ServiceNow forms to match their current business model (rather than continuing to retrofit old forms), and improving the front-end product portal so investigation research is faster for less experienced users. On AI: natural-language CMDB search would be valuable once it works reliably.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>⚙️</span>Why does Insider Risk use Salesforce instead of ServiceNow?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>This was a deliberate decision. Insider Risk investigations are people/disciplinary matters, and Risk, HR, and E&amp;C all manage their matters in Salesforce (CMS). Since Insider Risk cases are closely related to those teams' work, they use the same system for case management. Those teams (Risk, HR, E&amp;C) do not operate out of ServiceNow.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>💼</span>ServiceNow for license &amp; vendor tracking — potential expansion
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Angela raised the possibility of exploring ServiceNow as a platform for <strong>software-license, vendor, budget, and cost tracking</strong> — functions currently managed across other tools including Aravo. She manages software licenses at scale and sees potential value in consolidating tracking for products and vendors with broader firm-wide financial impact into ServiceNow. This is an untapped expansion opportunity worth evaluating.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>📊</span>Training needs: reporting, dashboards &amp; visualizations
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Angela assessed the team's ServiceNow knowledge as <strong>moderate</strong>. The team knows how to navigate, create issues, cases, and tickets, but is not advanced. She identified <strong>customized reports, dashboards, and visualizations</strong> as the most useful training areas — especially valuable after forms are redesigned to capture better KPI fields. Current dashboards are primarily basic table views; the team wants to learn more advanced views and search techniques. Angela requested a detailed walkthrough of how Threat Intelligence and Forensics use ServiceNow so the platform team can identify improvements.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        
        <div className={`tab-panel${activeTab === 'grc' ? ' active' : ''}` } id="tab-grc">

          <div className="diagram-panel" style={{ marginTop: "20px" }}>
            <div className="diagram-panel-header">
              <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — GRC (Internal Risk Platform)</span>
              <span className="diagram-panel-meta">Click to enlarge</span>
            </div>
            <img className="diagram-panel-img" src="/images/grc.png" alt="GRC ServiceNow Process Diagram" />
          </div>

          <div className="card mt-24">
            <div className="card-title">📋 Team Summary</div>
            <p><strong>Interviewees:</strong> Sterling Rong (Lead, Internal Risk — GRC Platform &amp; Products) &amp; Kevin D'Costa (Leader, GRC Platform &amp; Products) &nbsp;|&nbsp; <strong>Date:</strong> September 16, 2026</p>
            <p>
              Sterling's team, <strong>Internal Risk</strong>, sits within Kevin's broader GRC Platform &amp; Products organization.
              Their primary function is <strong>coordinating and enabling ServiceNow development</strong> for risk, compliance, and legal customers.
              <em>The team itself does not use ServiceNow for its own day-to-day work or ticketing</em> — ServiceNow is the front-end/workflow
              platform they enable for their business customers, not an operational tool they use themselves.
              Configuration/build work is done by the central ServiceNow build team (Raj Deep's group: Dan Shoemaker, Ashish Raturi, Peter Zalman)
              based on requirements Sterling's team gathers.
            </p>
            <div className="tag-list">
              <span className="tag">IRM (Integrated Risk Management)</span>
              <span className="tag">My ENC Portal</span>
              <span className="tag">Ask Risk Experience</span>
              <span className="tag">Custom Scoped App (Firm Security Risk)</span>
              <span className="tag">Now Assist (Customer-facing)</span>
            </div>
          </div>

          <div className="section mt-24">
            <h2 className="section-title">🔄 Enablement Process (Not Operational E2E)</h2>
            <div className="placeholder-notice">
              <span>📎</span>
              <span><strong>Note:</strong> GRC doesn't have a typical operational E2E in ServiceNow. Their process is requirements-gathering → design → build (via central team) → go-live for their business customers.</span>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">1</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Requirements Gathering</h4>
                  <p>A risk/compliance/legal function identifies a workflow need. Sterling's team meets with the business customer to understand requirements, define the intake form/process design, and evaluate ServiceNow as the right platform.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">2</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Design &amp; Intake Definition</h4>
                  <p>Sterling's team defines the ServiceNow intake form, process flow, notification logic, and threaded-response behavior. Design is handed off to the central ServiceNow build team for development.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">3</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Build (Central ServiceNow Team)</h4>
                  <p>Raj Deep's group builds the configured workflow. This phase is where the primary bottleneck exists — demand far exceeds the team's delivery capacity, leading to multi-quarter delays on new projects.</p>
                  <span className="step-tag partial">⚡ Central Team Dependent</span>
                  <span className="step-tag" style={{ background: "#FEEBEB", color: "var(--mds-color-crimson-red-500)" }}>⚠️ Bottleneck</span>
                </div>
              </div>
              <div className="process-step">
                <div className="step-line">
                  <div className="step-dot">4</div>
                  <div className="step-connector"></div>
                </div>
                <div className="step-body">
                  <h4>Go-live &amp; Ongoing Support</h4>
                  <p>After go-live, incidents and enhancement requests go back to the central ServiceNow team. Business-quality-report issues can stay open longer than business expects. A new UI project originally expected in Q2 2026 slipped into 2027.</p>
                  <span className="step-tag manual">🖐 Manual</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">🔴 Top Pain Points</h2>
            <ul className="insight-list">
              <li className="insight-item">
                <span className="insight-icon">⏳</span>
                <div className="insight-body">
                  <h4>Delivery capacity/velocity — demand far exceeds build-team capacity</h4>
                  <p>New requests and builds typically take months, not days. A firm-security new-UI project originally expected in Q2 2026 slipped multiple quarters into 2027. This forces difficult prioritization conversations and leaves customer teams waiting.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">🐌</span>
                <div className="insight-body">
                  <h4>Slow post-go-live support turnaround</h4>
                  <p>Incidents — including business-quality-report issues — can stay open longer than business expects, whether resolved by the central team or escalated to the vendor. Creates frustration and erodes confidence in the platform.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">🖥️</span>
                <div className="insight-body">
                  <h4>Native ServiceNow UI/UX is a significant limitation</h4>
                  <p>Kevin described the core ServiceNow UI/UX (search, data entry, information access) as a significant constraint. Teams build extra UI layers on top of the data model, but those layers are still constrained by the underlying platform (performance, access issues). A related secondary pain point is the lack of a mobile experience for a largely mobile/traveling user base (e.g., consultants).</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="section">
            <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
            <div className="accordion">

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>📦</span>What capabilities has GRC built for business customers?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Three main capabilities built by the central ServiceNow team based on GRC requirements: (1) <strong>My ENC</strong> — a compliance knowledge landing page with an intake form that routes to compliance as a ServiceNow case with notifications/threaded responses; (2) <strong>Ask Risk</strong> — a similar experience for risk policy questions; (3) a <strong>custom scoped application</strong> for the firm security risk function. The IRM module is used directly by risk and compliance function staff.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🗄️</span>How does GRC manage CMDB data?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>GRC is both a <strong>user and a steward</strong> of CMDB data. Many of their products are listed in CMDB (visible via My Product Portal), and they are directly responsible for maintaining the accuracy of those records. Kevin: "I can't expect some other team to clean up my own house." The risk and compliance workflows they enable rely heavily on CMDB — specifically product archetypes and control-validation information used in "risk as code." They identified a need for additional product fields and worked with Arvind to add them. Overall accuracy is actively improving through ongoing stewardship.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🤖</span>AI / Now Assist usage
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Not directly by Sterling's team (they aren't operational users). However, their <strong>business customers do have access to Now Assist</strong> — for example, a colleague can ask Now Assist where to go for an ENC-related question and it will direct them to the "My ENC" intake form using published knowledge articles. Sterling's main training recommendation: simplify ServiceNow configuration terminology and reduce the multi-day workshop overhead to make citizen development realistic.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🔮</span>Future state — what would GRC change?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Two main areas: (1) <strong>UI/UX</strong> — ServiceNow itself has acknowledged this (introducing "Workspaces"), but meaningful improvement is still needed; (2) <strong>Developer/builder experience</strong> — creating update sets, writing configuration, and pushing to higher environments is far more cumbersome than modern low-code/AI tools like Cursor. Sterling's ideal: a <strong>rapid, self-service application-development environment</strong> within ServiceNow that lets teams like his build lightweight capabilities themselves — reducing delivery timelines from months to a much shorter cycle.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🌍</span>Data localization — an open question for ServiceNow
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Kevin raised a critical open question: can ServiceNow support <strong>country-specific data residency requirements</strong>? Regulations in Europe, China, France, Canada, and other regions may require certain personal or citizen data to remain within national boundaries. Kevin was not aware of an implemented ServiceNow capability that fully addresses this, while acknowledging it might exist but not be deployed. <strong>This needs to be assessed as part of evaluating ServiceNow's future role</strong> — any service-management expansion could be blocked or complicated by data localization constraints in these geographies.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        
        <div className={`tab-panel${activeTab === 'practices' ? ' active' : ''}` } id="tab-practices">

          <div className="diagram-panel" style={{ marginTop: "20px" }}>
            <div className="diagram-panel-header">
              <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — Practices</span>
              <span className="diagram-panel-meta">Click to enlarge</span>
            </div>
            <img className="diagram-panel-img" src="/images/practices.png" alt="Practices ServiceNow Process Diagram" />
          </div>

          
          <div className="card mt-24">
            <div className="card-title">📋 Team Summary</div>
            <p><strong>Interviewee:</strong> Ocheme Saleh &nbsp;|&nbsp; <strong>Date:</strong> September 14, 2026</p>
            <p>
              The Practices team supports AI tools and platform enablement for consulting practice groups.
              They manage ServiceNow for <strong>incident management</strong>, <strong>change tracking</strong>,
              and are piloting <strong>Now Assist / Knowledge Central (KC)</strong> as an AI first-responder
              in support Slack channels. The team has personally solved the reporting pain point through an
              MCP/Cursor connection to ServiceNow — but advocates for a native in-platform AI analysis experience
              so all users can benefit, not just technically advanced team members.
            </p>
            <div className="tag-list">
              <span className="tag">Incident (INC)</span>
              <span className="tag">Change Management</span>
              <span className="tag">Problem Management</span>
              <span className="tag">Now Assist / KC (Pilot)</span>
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

          
          <div className="section mt-24">
            <h2 className="section-title">🔧 Modules &amp; Tools in Use</h2>
            <div className="grid-2">
              <div className="card">
                <div className="card-title">📦 ServiceNow Modules</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>📋</span><div><strong>Incident (INC)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Primary module — ticket creation, assignment, resolution, and user notification</span></div></li>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🔄</span><div><strong>Change Management</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Formal change tracking — though many teams still document in Confluence/Word and email in</span></div></li>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>⚠️</span><div><strong>Problem Management</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Exists and workflows are in place, but adoption and completion are inconsistent</span></div></li>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🤖</span><div><strong>Now Assist / Knowledge Central (KC)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Pilot — AI first-responder in support Slack channels; KC deflection metrics in use</span></div></li>
                </ul>
              </div>
              <div className="card">
                <div className="card-title">🛠️ Tools Used Alongside ServiceNow</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🧠</span><div><strong>Cursor + MCP (ServiceNow connection)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Pulls ServiceNow data on request; refreshes dashboards without manual extraction</span></div></li>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>📊</span><div><strong>Power BI (formerly Tableau)</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Used for reporting and analysis after data is exported from ServiceNow</span></div></li>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>📝</span><div><strong>Confluence / Word</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Used by some practice groups for change documentation instead of ServiceNow change module</span></div></li>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span>🔗</span><div><strong>Dynatrace</strong><br /><span style={{ fontSize: ".8rem", color: "var(--mds-color-text-subtle)" }}>Integrated to automatically create ServiceNow tickets from monitoring alerts</span></div></li>
                </ul>
              </div>
            </div>
          </div>

          
          <div className="section mt-24">
            <h2 className="section-title">🔄 End-to-End Process</h2>
            <div className="grid-2" style={{ gap: "24px" }}>
              <div>
                <h3 style={{ fontSize: ".9rem", fontWeight: 700, color: "var(--mds-color-electric-blue-500)", marginBottom: "14px" }}>🎫 Incident Management</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-line"><div className="step-dot">1</div><div className="step-connector"></div></div>
                    <div className="step-body">
                      <h4>Ticket Creation</h4>
                      <p>Created via ServiceNow portal, email, or automated from Dynatrace monitoring alerts. Platform McKinsey's custom "Get Help" request also creates ServiceNow incidents.</p>
                      <span className="step-tag partial">⚡ Partially Automated</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
                    <div className="step-body">
                      <h4>Assignment &amp; Work</h4>
                      <p>Ticket assigned to appropriate team member. Investigation and resolution performed. ServiceNow used for updates throughout the lifecycle.</p>
                      <span className="step-tag manual">🖐 Manual</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-line"><div className="step-dot">3</div></div>
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
                    <div className="step-line"><div className="step-dot">1</div><div className="step-connector"></div></div>
                    <div className="step-body">
                      <h4>Change Documentation (External)</h4>
                      <p>Some teams (e.g., Org practice) document changes in Confluence/Word and route approvals via email — never touching ServiceNow's change module.</p>
                      <span className="step-tag manual">🖐 Manual</span>
                      <span className="step-tag" style={{ background: "#FEEBEB", color: "var(--mds-color-crimson-red-500)" }}>⚠️ Inconsistent Adoption</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-line"><div className="step-dot">2</div><div className="step-connector"></div></div>
                    <div className="step-body">
                      <h4>Email → ServiceNow Case (Audit)</h4>
                      <p>Teams that bypass the formal module email support@mckinsey.com → creates a ServiceNow case for audit purposes only. STA reviews and closes.</p>
                      <span className="step-tag manual">🖐 Manual</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-line"><div className="step-dot">3</div></div>
                    <div className="step-body">
                      <h4>Standard Change Auto-creation (Proposed)</h4>
                      <p>Longstanding proposal: CI/CD pipelines automatically create and process standard-change records on deployment. Never adopted — more critical now as AI-driven development increases release frequency.</p>
                      <span className="step-tag" style={{ background: "#FFF9D6", color: "#996600" }}>⚡ Not Yet Implemented</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="section mt-24">
            <h2 className="section-title">🔴 Top Pain Points</h2>
            <ul className="insight-list">
              <li className="insight-item">
                <span className="insight-icon">📉</span>
                <div className="insight-body">
                  <h4>Native reporting/analytics is difficult and unintuitive</h4>
                  <p>Native ServiceNow reporting produces unintuitive charts and requires expertise to configure. Teams pull data to Excel and analyze in Power BI. The interviewee solved this personally via MCP/Cursor → ServiceNow, but this is not available to the broader team. Ideal: <em>"a Cursor window inside ServiceNow"</em> — in-platform natural-language analysis.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">📝</span>
                <div className="insight-body">
                  <h4>Lack of automated standard-change logging</h4>
                  <p>Teams still document changes manually (Confluence/email) instead of having CI/CD pipelines automatically create and process standard-change records. Becoming more pressing as AI-driven development increases release frequency.</p>
                </div>
              </li>
              <li className="insight-item">
                <span className="insight-icon">❌</span>
                <div className="insight-body">
                  <h4>Low adoption and completion of problem management</h4>
                  <p>Problem management tools exist but SREs often don't complete root-cause documentation or vendor follow-up consistently. CMDB usability (navigation for less-experienced users, unreliable natural-language search) is a related secondary pain point.</p>
                </div>
              </li>
            </ul>
          </div>

          
          <div className="section mt-24">
            <h2 className="section-title">🤖 AI &amp; Automation Readiness</h2>
            <div className="grid-2">
              <div className="card">
                <div className="card-title">✅ In Use / Piloting</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li style={{ display: "flex", gap: "8px" }}><span>🤖</span><div><strong>Now Assist / Knowledge Central (KC)</strong><p>Piloting as AI first-responder in support Slack channels. KC deflection metrics already tracked. ~40% of incoming requests are simple how-to/setup questions addressable by AI; up to ~60% could be partially addressed.</p></div></li>
                  <li style={{ display: "flex", gap: "8px" }}><span>📊</span><div><strong>MCP/Cursor → ServiceNow reporting</strong><p>Interviewee personally uses MCP connection to pull ServiceNow data and refresh dashboards — eliminates manual extraction. Not yet available to the broader team.</p></div></li>
                </ul>
              </div>
              <div className="card">
                <div className="card-title">⚡ Top Automation Candidates</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li style={{ display: "flex", gap: "8px" }}><span>💬</span><div><strong>AI deflection for simple support tickets</strong><p>~40% of incoming requests are basic access/setup/how-to questions. An AI first-responder could deflect these. Key risk: knowledge consistency — different bots must reference the same knowledge repository.</p></div></li>
                  <li style={{ display: "flex", gap: "8px" }}><span>🔄</span><div><strong>CI/CD pipeline → Standard Change auto-creation</strong><p>Auto-create and process standard-change records on deployment. Removes manual data entry for low-risk releases — especially critical for AI-driven development teams.</p></div></li>
                </ul>
              </div>
            </div>
          </div>

          
          <div className="section mt-24">
            <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
            <div className="accordion">

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🏢</span>What is the team's primary function, and how does ServiceNow support day-to-day work?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>The team supports AI tools and platform enablement for consulting practice groups. ServiceNow is used for incident management, change tracking, and problem management. Dynatrace alerts have been integrated to automatically create tickets. Platform McKinsey built its own custom "Get Help" integration that also creates ServiceNow incidents.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🔧</span>What customizations has the team built or requested?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>The current team hasn't requested customizations directly. However, the interviewee personally led the project-management side of the <strong>Salesforce-to-ServiceNow migration</strong> and worked closely with the ServiceNow COEI to recreate custom forms and workflows for practice teams — specifically for Forward, GMNS, Org, and Wave practice groups. No upgrade issues or rarely-used customizations reported.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>⚙️</span>What workarounds or manual steps exist outside ServiceNow?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>(1) <strong>Change tracking outside the formal module:</strong> Some teams (e.g., Org practice) still document changes in Confluence/Word and route approvals via email rather than using ServiceNow's change workflow. (2) <strong>Reporting:</strong> ServiceNow's native reporting is considered difficult to use, so data is exported to Excel and analyzed in Power BI. The interviewee has automated this via MCP/Cursor → ServiceNow — but it still runs outside ServiceNow itself.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🗄️</span>How does the team rate CMDB accuracy and usability?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>CMDB is considered reliable and has improved significantly. The main gap is <strong>usability rather than data quality</strong> — navigating tables is easy for experienced users but difficult for average users. The interviewee tested ServiceNow's newer AI/natural-language CMDB search and found it doesn't work reliably yet, though improvement is expected with future updates.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🎓</span>Training needs and knowledge levels across the team
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Mixed knowledge across the team. The interviewee and colleague Dayana have strong ServiceNow knowledge. Colleague Sakshi has some exposure through Platform McKinsey workflow work. Remaining colleagues have limited experience. <strong>Recommended:</strong> a general ServiceNow overview for less-experienced colleagues, plus dedicated change-management training if senior leadership mandates standardized change-management practices.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>🔮</span>Future state — what would Practices change about ServiceNow?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Two main areas: (1) <strong>UI</strong> — not very user-friendly, especially for first-time users. (2) <strong>Performance at scale</strong> — ServiceNow is fast with ~100 tickets but becomes very slow when searching across 1,000–2,000+ tickets. On whether ServiceNow is the right tool: yes, for now — it's the right platform for integrated incident/change/problem management because they're interlinked with product/asset data and CMDB.</p>
                </div>
              </div>

              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>👥</span>Who else should be interviewed?
                  <span className="accordion-chevron">▼</span>
                </button>
                <div className="accordion-body">
                  <p>Suggested contact: <strong>Sam Mesbahi</strong> (former colleague) — to clarify the current state and ownership of <strong>ServiceNow On-Call</strong>, an engineering-side capability (migrated from VictorOps/Splunk On-Call) that the interviewee helped set up. Ownership between Engineering, Operations, and DTO is unclear post-reorganization and needs alignment.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        
        <div className={`tab-panel${activeTab === 'iam' ? ' active' : ''}` } id="tab-iam">

          
          <div className="diagram-panel" style={{ marginTop: "20px" }}>
            <div className="diagram-panel-header">
              <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — IAM / Identity &amp; Access Management</span>
              <span className="diagram-panel-meta">Click to enlarge</span>
            </div>
            <img className="diagram-panel-img" src="/images/iam.png" alt="IAM ServiceNow Process Diagram" />
          </div>

          
          <div className="summary-box" style={{ marginTop: "20px" }}>
            <h3>Team Summary</h3>
            <p>
              The IAM team (Ganesh Gembali) provides <strong>identity and access management</strong> capabilities for all firm teams,
              using Okta and Active Directory as their primary platforms. ServiceNow supports three key use cases for IAM:
              (1) <strong>source of truth</strong> — the Product Catalog (who owns what, instance lifecycle) and CMDB
              (asset data for identity security decisions); (2) <strong>support</strong> — all IAM support queues are managed via ServiceNow;
              and (3) <strong>self-service</strong> — some services run on the IT Services platform, though ownership is gradually
              shifting to Platform McKinsey. The team's core frustration is the inability to build, test, and adjust their own
              ServiceNow capabilities without going through the central team for every change.
            </p>
            <div className="summary-meta">
              <div className="summary-meta-item"><strong>Interviewee</strong>Ganesh Gembali</div>
              <div className="summary-meta-item"><strong>Interviewer</strong>Jose Manuel Sanchez</div>
              <div className="summary-meta-item"><strong>Primary platforms</strong>Okta · Active Directory · ServiceNow · Platform McKinsey</div>
              <div className="summary-meta-item"><strong>Key theme</strong>Direct ownership — ability to build &amp; deploy their own self-service capabilities</div>
            </div>
          </div>

          
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-value">3</div>
              <div className="stat-label">ServiceNow Use Cases</div>
              <div className="stat-sub">Source of truth · Support · Self-service</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">~40<span style={{ fontSize: "1rem" }}>%</span></div>
              <div className="stat-label">Licenses Appear Inactive</div>
              <div className="stat-sub">Flagged during cross-team license review</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">0</div>
              <div className="stat-label">AI / Now Assist in Use</div>
              <div className="stat-sub">No native AI adoption yet; building externally on own platforms</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Months</div>
              <div className="stat-label">To Deliver Small Form Changes</div>
              <div className="stat-sub">1 day to prototype 70–80%; months to close remaining gaps</div>
            </div>
          </div>

          
          <div className="section">
            <h2 className="section-title">Modules &amp; Tools</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div>
                <h3 style={{ fontSize: "13px", fontWeight: 600, marginBottom: "14px", color: "var(--mds-color-text-headings)" }}>ServiceNow modules / use cases</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}><span style={{ background: "#EFF4FF", color: "#1B41CC", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500 }}>Product Catalog</span> Source of truth for who owns what, instance lifecycle</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}><span style={{ background: "#EFF4FF", color: "#1B41CC", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500 }}>CMDB</span> Device lifecycle, decommission/offboarding decisions</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}><span style={{ background: "#EFF4FF", color: "#1B41CC", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500 }}>Support Queues</span> All IAM support tickets routed via ServiceNow</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}><span style={{ background: "#EFF4FF", color: "#1B41CC", padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500 }}>Self-Service Forms</span> AD service account requests, PKI certificate requests</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "13px", fontWeight: 600, marginBottom: "14px", color: "var(--mds-color-text-headings)" }}>Tools used alongside ServiceNow</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}><span style={{ background: "var(--mds-color-background-subtle)", color: "var(--mds-color-text-subtle)", padding: "2px 8px", borderRadius: "4px", fontSize: "11px" }}>Okta</span> Primary identity platform</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}><span style={{ background: "var(--mds-color-background-subtle)", color: "var(--mds-color-text-subtle)", padding: "2px 8px", borderRadius: "4px", fontSize: "11px" }}>Active Directory</span> Service accounts, access management</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}><span style={{ background: "var(--mds-color-background-subtle)", color: "var(--mds-color-text-subtle)", padding: "2px 8px", borderRadius: "4px", fontSize: "11px" }}>Platform McKinsey</span> Target platform for self-service capabilities (migration underway)</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}><span style={{ background: "var(--mds-color-background-subtle)", color: "var(--mds-color-text-subtle)", padding: "2px 8px", borderRadius: "4px", fontSize: "11px" }}>GHD</span> Collaboration on access-related support automation</li>
                </ul>
              </div>
            </div>
          </div>

          
          <div className="section">
            <h2 className="section-title">CMDB Dependency</h2>
            <div className="summary-box">
              <p>
                IAM is <strong>heavily dependent on CMDB</strong> for device lifecycle decisions — particularly for identity security
                (which devices need protection vs. can be excluded). During service-account asset tagging, the team found
                notable discrepancies, possibly caused in part by IAM's own internal processes.
              </p>
              <p style={{ marginTop: "10px" }}>
                Despite known gaps, IAM's stated position is to <strong>treat CMDB as the authoritative source</strong> for device lifecycle status
                (e.g., proceeding with offboarding when a system is marked decommissioned without waiting for separate confirmation),
                while requiring every accountable team to keep its own CMDB records current. IAM avoids maintaining parallel
                case-by-case exceptions and pushes teams to update at the source.
              </p>
              <div className="summary-meta" style={{ marginTop: "16px" }}>
                <div className="summary-meta-item"><strong>CMDB accuracy assessment</strong>Notable discrepancies found during asset tagging — treated as source of truth despite gaps</div>
                <div className="summary-meta-item"><strong>IAM policy</strong>CMDB is authoritative; teams must maintain their own records — no parallel tracking</div>
              </div>
            </div>
          </div>

          
          <div className="section">
            <h2 className="section-title">🔴 Top Pain Points</h2>
            <div className="accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="true">
                  <span>1. Getting changes shipped takes a long time</span>
                  <span className="accordion-icon">▾</span>
                </button>
                <div className="accordion-body open">
                  <p>Even though ServiceNow self-service feels quick to start, <strong>collaborating with the ServiceNow team and getting changes actually shipped takes a long time</strong>. A basic form can be built in about a day and cover 70–80% of a requirement — but closing the remaining gaps can take months. Changes require coordination with a separate, small ServiceNow team handling requests from many groups. Release timing is hard to predict (manual promotion across environments, no clear visibility into what changed where).</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>2. Very limited control to build or modify their own forms</span>
                  <span className="accordion-icon">▾</span>
                </button>
                <div className="accordion-body">
                  <p>IAM has <strong>very limited control to build or modify its own forms</strong>. The platform's interaction model is not well suited to modern engineering practices such as DevOps or continuous delivery. There is no SDK, no version control for ServiceNow configurations, and no self-service way to publish updates — every change, including minor field edits, requires central team coordination and manual promotion across environments.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>3. Platform not aligned with modern engineering practices</span>
                  <span className="accordion-icon">▾</span>
                </button>
                <div className="accordion-body">
                  <p>The ServiceNow development model doesn't align with how IAM's engineering teams work. IAM engineers are used to building, testing, and deploying their own solutions directly (as they do on Platform McKinsey). ServiceNow's model of requiring an external team to implement every change — with no SDK, no sandbox, and no visible deployment pipeline — makes it increasingly unattractive vs. Platform McKinsey.</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="section">
            <h2 className="section-title">🤖 AI &amp; Automation Readiness</h2>
            <div className="summary-box">
              <h3>Current AI Usage</h3>
              <p>IAM is <strong>not using any AI or Now Assist</strong> capabilities today. The team has started some work to resolve access-related issues using MCP integrations from their own platforms (Okta, AD) — but this is outside ServiceNow.</p>
            </div>
            <div className="summary-box" style={{ marginTop: "16px" }}>
              <h3>Top Automation Opportunities</h3>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "var(--mds-color-text-default)", lineHeight: 1.6 }}>
                <li><strong>MCP-enabled engineering playground/sandbox:</strong> IAM wants an environment to experiment, prototype, and run hackathons without needing production access — with integration to ServiceNow agents and Now Assist so teams can connect their own MCP solutions.</li>
                <li><strong>Direct self-service capability ownership:</strong> The ability to build, test, and deploy self-service forms and workflows themselves — via exposed/documented SDKs and APIs — instead of translating requirements to ServiceNow personnel.</li>
                <li><strong>Better integration between Okta/AD and ServiceNow:</strong> Automate access-related issue resolution using the team's own MCP tooling, connected to ServiceNow's agent framework.</li>
              </ul>
            </div>
          </div>

          
          <div className="section">
            <h2 className="section-title">📋 Full Interview Q&amp;A</h2>
            <div className="accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>Team Overview — Primary function and ServiceNow role</span>
                  <span className="accordion-icon">▾</span>
                </button>
                <div className="accordion-body">
                  <p><strong>Q:</strong> What is your team's primary function, and how does ServiceNow support your day-to-day work?</p>
                  <p style={{ marginTop: "8px" }}><strong>A:</strong> IAM provides identity and access management capabilities for all firm teams, using platforms such as Okta and Active Directory. ServiceNow supports three key use cases: (1) source of truth — the Product Catalog (who owns what, to manage instances/lifecycle) and CMDB (asset data, especially for identity security, to determine which devices need protection vs. can be excluded); (2) support — all IAM support queues are managed via ServiceNow; and (3) self-service — some services run on the IT Services platform, though ownership is gradually shifting to Platform McKinsey. IAM also collaborates closely with GHD on access-related support automation.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>Modules &amp; Tools — What is used and how</span>
                  <span className="accordion-icon">▾</span>
                </button>
                <div className="accordion-body">
                  <p><strong>Q:</strong> Which ServiceNow modules does your team use, and what other tools do you rely on alongside it?</p>
                  <p style={{ marginTop: "8px" }}><strong>A:</strong> The team does not know the exact module names — they generally work through ServiceNow personnel rather than directly operating the modules, so they describe their work by use case rather than by module. Self-service integrations use standard APIs for CMDB and product data; IAM SREs (not product teams directly) coordinate with the ServiceNow team. Tools alongside ServiceNow: Platform McKinsey (the target platform for self-service capabilities going forward). Salesforce is not used for these activities.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>Pain Points — Top issues with ServiceNow today</span>
                  <span className="accordion-icon">▾</span>
                </button>
                <div className="accordion-body">
                  <p><strong>Q:</strong> What are the top 2–3 pain points your team experiences with ServiceNow today?</p>
                  <p style={{ marginTop: "8px" }}><strong>A:</strong> (1) Even though ServiceNow self-service feels quick to start, collaborating with the ServiceNow team and getting changes actually shipped takes a long time. (2) Very limited control for IAM to build/modify its own forms, and the platform's interaction model is not well suited to modern engineering practices such as DevOps or continuous delivery. (3) A basic form can be built in about a day and cover 70–80% of a requirement, but closing the remaining gaps can take months, since changes require coordination with a separate, small ServiceNow team handling requests from many groups, and release timing is hard to predict (manual promotion across environments, no clear visibility into what changed where).</p>
                  <p style={{ marginTop: "12px" }}><strong>Q:</strong> What would have the biggest positive impact on your team's daily work?</p>
                  <p style={{ marginTop: "8px" }}><strong>A:</strong> Direct ownership: the ability to build, test, and adjust self-service solutions themselves — via exposed/documented SDKs and APIs, and an engineering playground/sandbox for prototyping — instead of repeatedly explaining and translating requirements to ServiceNow personnel and waiting on a small central team.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" aria-expanded="false">
                  <span>AI &amp; Automation — Current use and future candidates</span>
                  <span className="accordion-icon">▾</span>
                </button>
                <div className="accordion-body">
                  <p><strong>Q:</strong> Is your team using or piloting any AI-assisted capabilities (e.g., Now Assist)?</p>
                  <p style={{ marginTop: "8px" }}><strong>A:</strong> No.</p>
                  <p style={{ marginTop: "12px" }}><strong>Q:</strong> What repetitive/rules-based tasks look like good AI or automation candidates?</p>
                  <p style={{ marginTop: "8px" }}><strong>A:</strong> IAM has already started some work to resolve access-related issues more effectively using MCP integrations from their own platforms. They also asked for an MCP-enabled engineering playground/sandbox to experiment, prototype, and run hackathons without needing production access, plus integration with ServiceNow agents and Now Assist so teams can connect their own MCP solutions instead of creating many disconnected agents.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
    </>
  )
}
