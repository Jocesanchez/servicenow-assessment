import { useEffect } from 'react'

export default function Cmdb() {

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
        <span>CMDB</span>
      </div>
      <h1>🗄️ CMDB — Configuration Management Database</h1>
      <p className="subtitle">3-layer architecture · CSDM-aligned model · Service mapping gap · Custom Product Portal</p>
      <div className="header-meta">
        <span className="meta-pill">📅 Interview: September 17, 2026</span>
        <span className="meta-pill">👤 Interviewers: Priti Singh, Heath Williams</span>
        <span className="meta-pill">✅ Interview Complete</span>
      </div>
    </div>

    <div className="page-content">

      
      <div className="diagram-panel">
        <div className="diagram-panel-header">
          <span className="diagram-panel-title">🗺️ End-to-End Process Diagram — CMDB Discovery &amp; Quality</span>
          <span className="diagram-panel-meta">Click to enlarge</span>
        </div>
        <img className="diagram-panel-img" src="/images/cmdb.png" alt="CMDB ServiceNow Process Diagram" />
      </div>

      
      <div className="summary-box">
        <h3>Team Summary</h3>
        <p>
          The CMDB team (Ondrej Burda &amp; Gabriel Banas) manages the firm's Configuration Management Database across
          <strong>three layers</strong>: on-prem infrastructure, cloud infrastructure, and Product Inventory.
          The CMDB structure is considered sound — the team's view is that outstanding gaps are <strong>process and firm-mandate problems,
          not structural or technical CMDB problems</strong>. The biggest long-term gap is the missing service catalog layer and
          upstream/downstream dependency mapping, which has existed as an unsolved problem for ~22 years.
          The <strong>My Product Portal</strong> (how most users interact with CMDB product data) is a fully custom build —
          it does not correspond to any out-of-the-box ServiceNow module.
        </p>
        <div className="summary-meta">
          <div className="summary-meta-item"><strong>Interviewees</strong>Ondrej Burda · Gabriel Banas</div>
          <div className="summary-meta-item"><strong>Interviewers</strong>Priti Singh, Heath Williams</div>
          <div className="summary-meta-item"><strong>Data model</strong>CSDM-aligned Business Applications (McKinsey influenced CSDM v1)</div>
          <div className="summary-meta-item"><strong>Primary gap</strong>Service catalog + upstream dependency mapping (~22 years unsolved)</div>
        </div>
      </div>

      
      <div className="stat-bar">
        <div className="stat-item">
          <div className="stat-value">3</div>
          <div className="stat-label">CMDB Layers</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">&lt;1/1000</div>
          <div className="stat-label">Records via Manual Entry</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">~22 yrs</div>
          <div className="stat-label">Service Catalog Gap Age</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">~2M</div>
          <div className="stat-label">CIs from Dynatrace Lab Push</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">Daily</div>
          <div className="stat-label">Discovery Override Cadence</div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🏗️ CMDB Structure &amp; Data Sources</h2>
        <div className="grid-2">
          <div className="card">
            <div className="card-title">📐 Three Layers</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: ".85rem" }}>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span style={{ background: "var(--mds-color-electric-blue-500)", color: "#fff", padding: "2px 8px", borderRadius: "4px", fontSize: ".7rem", fontWeight: 700, flexShrink: 0 }}>Layer 1</span><div><strong>On-prem Infrastructure</strong><br /><span style={{ color: "var(--mds-color-text-subtle)" }}>Including OS-level data. Fully automated via ServiceNow Discovery. On-prem monitoring is fully automated off CMDB — operational issues surface quickly.</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span style={{ background: "var(--mds-color-electric-blue-500)", color: "#fff", padding: "2px 8px", borderRadius: "4px", fontSize: ".7rem", fontWeight: 700, flexShrink: 0 }}>Layer 2</span><div><strong>Cloud Infrastructure</strong><br /><span style={{ color: "var(--mds-color-text-subtle)" }}>Instances and services (not OS-level). Cloud account without an owner, devices undiscovered for 7+ days, discrepancies between CMDB/Wiz.io/cloud providers all actively tracked. Cloud monitoring lags well behind on-prem — no standardized event monitoring for cloud resources today.</span></div></li>
              <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}><span style={{ background: "var(--mds-color-electric-blue-500)", color: "#fff", padding: "2px 8px", borderRadius: "4px", fontSize: ".7rem", fontWeight: 700, flexShrink: 0 }}>Layer 3</span><div><strong>Product Inventory</strong><br /><span style={{ color: "var(--mds-color-text-subtle)" }}>Every product gets onboarded into CMDB as part of registration. Products are ServiceNow Business Applications, CSDM-compatible. Product ID is mandatory firm-wide. Surfaced via the custom My Product Portal.</span></div></li>
            </ul>
            <div style={{ marginTop: "14px", padding: "10px", background: "var(--mds-color-background-subtle)", borderRadius: "6px", fontSize: ".78rem", color: "var(--mds-color-text-subtle)" }}>
              <strong>Out of scope:</strong> End-user devices — owned by HAM and Shruti Modak's team, not this CMDB team.
            </div>
          </div>
          <div className="card">
            <div className="card-title">📥 Data Sources &amp; Identification</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: ".85rem", color: "var(--mds-color-text-subtle)" }}>
              <li style={{ display: "flex", gap: "8px" }}><span>🔍</span><span><strong>ServiceNow Discovery (primary)</strong> — uses the correlation engine (IRE) for identification and reconciliation. Standard for all new integrations.</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>❄️</span><span><strong>Snowflake-fed feeds</strong> — domains/certificates from certificate management and network teams. External data for items not discoverable via standard Discovery.</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🔧</span><span><strong>Legacy Snowflake 1:1 integrations (shrinking)</strong> — a couple of integrations that predate IRE write directly to a CMDB class without going through IRE. Known exception, being migrated to standard approach.</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>✏️</span><span><strong>Manual entry (&lt;1 in 1,000)</strong> — true edge case: ~10–50 non-discoverable network/on-prem devices, M&amp;A situations (newly acquired company can take years to onboard), and government-restricted environments.</span></li>
              <li style={{ display: "flex", gap: "8px" }}><span>🏷️</span><span><strong>Mandatory tagging</strong> — ProductID and Used_For are mandatory on every taggable resource. If a cloud resource is missing its tag, it inherits its parent cloud account's product mapping.</span></li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🔴 Top Pain Points &amp; Gaps</h2>
        <ul className="insight-list">
          <li className="insight-item">
            <span className="insight-icon">🗂️</span>
            <div className="insight-body">
              <h4>Missing service catalog layer — ~22 years unsolved</h4>
              <p>There is no real service catalog for technical products (only a lighter one for end-user offerings like ordering a laptop). Three separate initiatives to fix this have been started and deprioritized in recent years (most recently with EAL last year). The team's new approach — developed with Vishal Nandwani — is to close part of this gap indirectly by requiring a defined support model (L1/L2/L3) before a team can stand up a service. This ties catalog capture to a process teams already need, rather than asking teams to do extra registration work.</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">🔗</span>
            <div className="insight-body">
              <h4>No full upstream/downstream service dependency mapping</h4>
              <p>There is no automated view of every downstream product or application affected when a shared server or database goes down — only whatever relationships a team has <em>chosen to manually define</em>. True service mapping was piloted years ago: 4 people, 6 months, only ~10 of ~3,000 products modeled, and those were already obsolete by the time modeling finished. Estimated investment needed: 10 people over ~2 years. Today, only simpler <strong>tag-based service mapping</strong> exists — a flat, unweighted relationship between a CI and its Application Service, with no automatic upstream discovery. This is a key target of the governance initiative with Vishal Nandwani.</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">💻</span>
            <div className="insight-body">
              <h4>No way to compel product teams to capture software-defined CIs</h4>
              <p>Software-defined objects — Jira projects, Confluence spaces, "Lili" agents, Terraform workspaces, Azure app registrations — are not systematically captured. The CMDB team built a custom "Lifecycle CI" API years ago (Terraform and Azure teams already use it), but there's no firm mandate to force other teams to register their software-defined objects. A governance/priority gap, not a technical one.</p>
            </div>
          </li>
          <li className="insight-item">
            <span className="insight-icon">📊</span>
            <div className="insight-body">
              <h4>Missing org-level team-structure source data</h4>
              <p>Team structure and organizational hierarchy data that would tie CIs to current teams/owners isn't reliably fed into CMDB as a source. This creates ownership gaps — especially as teams reorganize — and makes automated escalation routing unreliable.</p>
            </div>
          </li>
        </ul>
      </div>

      
      <div className="section">
        <h2 className="section-title">📐 Data Model &amp; Product Portal</h2>
        <div className="grid-2">
          <div className="card">
            <div className="card-title">🏛️ CSDM-Aligned Model</div>
            <p>Products are modeled as <strong>ServiceNow Business Applications</strong>, CSDM-compatible. Notably, McKinsey had direct input into CSDM v1 — the firm's model actually influenced ServiceNow's own "ID model," rather than the reverse.</p>
            <p style={{ marginTop: "8px" }}><strong>Important:</strong> Business Applications (products) are deliberately <em>not</em> linked directly to incidents/changes — per ServiceNow/CSDM standard, CIs map to Application Services instead, and those map to assignment groups for support. Where a product appears directly on an incident's CI field, that's typically an Event Management routing override or leftover legacy data, not the intended design.</p>
            <p style={{ marginTop: "8px" }}>Products are not modeled as children of other products — the "Primary Business Application" field is deliberately blank on product records.</p>
          </div>
          <div className="card">
            <div className="card-title">🖥️ My Product Portal — Custom Build</div>
            <p>The Product Portal is a <strong>fully custom build</strong> — it does not correspond to any out-of-the-box ServiceNow module (not ITSM, not ITOM). It sits on top of ServiceNow's CMDB backend tables and integrates with additional systems via API.</p>
            <p style={{ marginTop: "8px" }}>It was built custom because the firm chose not to invest in additional ServiceNow modules at the time, and has since grown well beyond that original scope. The <em>underlying product record</em> is a genuine CMDB_CI Business Application record, fully CSDM-compatible — but the portal experience layered on top is entirely custom.</p>
            <div className="tag-list" style={{ marginTop: "10px" }}>
              <span className="tag">Custom UI</span>
              <span className="tag">CSDM Backend</span>
              <span className="tag">API-integrated</span>
              <span className="tag">Not out-of-the-box</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">🤖 AI &amp; Automation Assessment</h2>
        <div className="card">
          <div className="card-title">Ondrej &amp; Gabriel's View on AI for CMDB</div>
          <ul className="insight-list" style={{ marginTop: "8px" }}>
            <li className="insight-item">
              <span className="insight-icon">🧐</span>
              <div className="insight-body">
                <h4>Ondrej: "Until I see it, I will not believe it"</h4>
                <p>ServiceNow's promised AI-driven service-mapping capabilities are unproven. If delivered, they could help with service-mapping identification — but the team isn't investing on that promise yet. On the product/business layer, native ServiceNow AI capabilities (e.g., relationship recommendations) currently lag significantly, so the team is <strong>building that capability outside ServiceNow, on top of ServiceNow data</strong>.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">⚠️</span>
              <div className="insight-body">
                <h4>Caution on AI for core CI maintenance</h4>
                <p>Ondrej is cautious about applying AI to core CI maintenance or deduplication directly — discovery and reconciliation processes are already mature. An AI incorrectly judging records as duplicates and removing them is a real risk, not a clear win.</p>
              </div>
            </li>
            <li className="insight-item">
              <span className="insight-icon">💡</span>
              <div className="insight-body">
                <h4>Gabriel: AI will improve CMDB indirectly</h4>
                <p>The CMDB is foundational data that AI consumes across the platform. Applying AI to adjacent processes (change, incident) will <em>surface</em> today's CMDB gaps — changes not linked properly to CIs, incidents not mapped as they should be. That exposure drives improvement, but the underlying fixes are still hard work done by people, not something AI does on its own.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="section">
        <h2 className="section-title">💬 Full Interview Q&amp;A</h2>
        <div className="accordion">

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🔑</span>When is a product required to be in CMDB, and what are the exceptions?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>Never optional in principle — every product must be in CMDB, otherwise related processes (support, cost, risk) don't function. Product ID has been made mandatory firm-wide over the years. Two clarified exceptions: (1) Products still in intake sit in "Under Evaluation" status without a Product ID — stub records excluded from the standard catalog and integrations (e.g., can't provision a GitHub repo) until approved. (2) Platform McKinsey project references are stored/linked for reference but never surface on the Product Portal and also sit in "Under Evaluation."</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>📡</span>How does CMDB health get measured?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>Daily overview of newly discovered devices. On-prem monitoring is fully automated off the CMDB, so operational issues surface quickly. A dedicated Asset Management team actively tracks: cloud accounts without an owner, devices undiscovered for 7+ days, discrepancies between CMDB/Wiz.io/cloud providers, and zero-trust follow-up (unrecognized device on office network flagged for local IT). The team deliberately does NOT optimize for a "green" CMDB health dashboard — the real goal is cross-checking data against other sources to find gaps, including for audit purposes. Regular stale/orphan CI cleanup jobs run today and are being consolidated into ServiceNow's Data Manager framework, with KPIs on staleness/orphan rates tied to class-manager rules.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🔗</span>Why doesn't true service mapping exist, and what's the new approach?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>True service mapping (weighted upstream/downstream dependencies) was piloted years ago: 4 people, 6 months, only ~10 of ~3,000 products modeled, and those were already obsolete by the time modeling finished. Estimated to be viable only with ~10 people over ~2 years of sustained investment — never prioritized at that scale.</p>
              <p style={{ marginTop: "8px" }}>The new approach (developed with Vishal Nandwani): close part of this gap <em>indirectly</em> by requiring a defined support model (L1/L2/L3) before a team can stand up a service. This ties service catalog capture to a process teams already need, rather than asking for extra work. What exists today: simpler tag-based service mapping — a flat, unweighted relationship between a CI and the Application Service it's tagged to. No automatic upstream discovery.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>📊</span>What data quality issues are most concerning across the estate?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>From Priti's broader review (flagged in several other interviews): most CIs across the estate are missing upstream dependency mapping. This affects SOC's automated escalation routing, BC/DR's ability to automate recovery plans, and change impact analysis for Operations teams. Ondrej confirmed this matters most for foundational/infrastructure services (DNS, DHCP, network) where downstream impact isn't visible without explicit relationships.</p>
              <p style={{ marginTop: "8px" }}>Also: cloud-resource monitoring lags well behind on-prem. On-prem servers are auto-onboarded into monitoring and generate events automatically; there is no equivalent standardized event monitoring for cloud resources today, making cloud-side issues comparatively invisible to the CMDB/event pipeline.</p>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-trigger" aria-expanded="false">
              <span>🏛️</span>CMDB team's structural assessment: what would they change?
              <span className="accordion-chevron">▼</span>
            </button>
            <div className="accordion-body">
              <p>Ondrej's answer: <strong>"Nothing."</strong> The CMDB structure itself is considered sound. Outstanding gaps (service catalog, dependency/service mapping, software-defined CI capture) are process and firm-mandate problems, not structural or technical CMDB problems. The team's model is CSDM-compatible, well-maintained, and actively monitored. The gaps exist because of resourcing and governance priorities, not because the underlying platform or data model is wrong.</p>
              <p style={{ marginTop: "8px" }}>Illustrative example: three separate attempts to get the Database Management/Oracle operations team to maintain even a simple inventory mapping databases to the products they serve were unsuccessful — not because CMDB couldn't support it, but because it wasn't a priority for that team. This is a resourcing/mandate problem, not a CMDB tooling problem.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}
