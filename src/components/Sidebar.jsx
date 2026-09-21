import { NavLink } from 'react-router-dom'

const MCK_LOGO_SVG = `<svg width="88" height="28" viewBox="0 0 283.4 90.2"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="McKinsey &amp; Company" role="img">
<g fill="#FFFFFF">
  <path d="M5.7,5.7c0-0.7-1.9-2.5-2.5-2.5H1.6V1.6h9.5l9.8,24.6h0.2L31.4,1.6h8.5v1.6h-1.6c-0.6,0-2.5,1.8-2.5,2.5v24.5
    c0,0.7,1.9,2.5,2.5,2.5h1.6v1.6H27.3v-1.6h1.6c0.6,0,2.5-1.8,2.5-2.5V6.4L19.5,34.8L7.7,5.9v24.2c0,0.7,1.9,2.5,2.5,2.5h1.6v1.6
    H1.6v-1.6h1.6c0.6,0,2.5-1.8,2.5-2.5V5.7z"/>
  <path d="M53.6,20.3c0.6-3.3,0-6.2-3.6-6.2c-4.2,0-6.3,3.4-6.3,8.3c0,4.7,3,8.6,7.8,8.6c3.7,0,5.2-1.3,6.7-3.8h1.3
      c-1.4,4.6-4.2,7.5-9.5,7.5c-5.9,0-9.7-5-9.7-11c0-6.8,4.5-11.3,10.1-11.3c3.3,0,5.6,1,7.5,3l-3.1,4.8L53.6,20.3z"/>
  <path d="M64.6,51.1c0,2.6,1.8,4.7,4.6,5.8c4.2,4.5,9.3,9.3,13.7,13.3c1.3-2.1,1.7-4.3,1.7-6.9c0-3-2-4.8-5.2-4.9v-1.6
      H91v1.6h-1.3c-0.6,0-2.9,2.6-2.9,3.5C86.8,64.6,86,68,84,71c2.4,2.1,4.7,4,6.6,5.3h2v1.6H89c-3.2,0-5.4-0.9-8.1-3.3
      c-2.6,2.5-5.9,3.9-10.7,3.9c-5.3,0-10.3-3.9-10.3-9.6c0-4.5,2.3-7.8,5.2-9.9c-1.6-2-2.6-3.9-2.6-6.8c0-4.7,3-7.3,7.8-7.3
      c3,0,4.6,1,6,1c0.7,0,1.2,0,1.5-0.6h1.4V53h-1.4c0-2.2-3.2-6.6-7.6-6.6C66.7,46.4,64.6,48.1,64.6,51.1z M63.2,66.7
      c0,4.7,5,9.1,9.6,9.1c2.9,0,5.2-0.8,7.1-2.2c-4.7-4.1-10-9.2-14.1-13.8C64.1,61.6,63.2,63.4,63.2,66.7z"/>
</g>
</svg>`

const NAV_ITEMS = [
  { label: 'Overview',       path: '/',             icon: '🏠',  badge: null,        badgeClass: '' },
  { label: 'Project Scope',  path: '/scope',        icon: '📋',  badge: null,        badgeClass: '' },
  { type: 'separator', label: 'Functional Areas' },
  { label: 'Operations',    path: '/operations',   icon: '⚙️',  badge: '7 Teams',   badgeClass: 'complete' },
  { label: 'SOM',           path: '/som',          icon: '📊',  badge: 'Complete',  badgeClass: 'complete' },
  { label: 'Observability', path: '/observability',icon: '🔭',  badge: 'Complete',  badgeClass: 'complete' },
  { label: 'CMDB',          path: '/cmdb',         icon: '🗄️',  badge: 'Complete',  badgeClass: 'complete' },
  { label: 'DTO',           path: '/dto',          icon: '🛡️',  badge: '6 Teams',   badgeClass: 'complete' },
  { label: 'Practices',     path: '/practices',    icon: '📋',  badge: 'Complete',  badgeClass: 'complete' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar" role="navigation" aria-label="Main navigation">
      <div className="sidebar-brand">
        <div
          className="sidebar-logo"
          dangerouslySetInnerHTML={{ __html: MCK_LOGO_SVG }}
        />
        <p className="sidebar-tagline">
          ServiceNow Platform Strategy &amp; Enablement<br />
          Current-State Assessment · v0.2 Draft
        </p>
      </div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item, i) => {
          if (item.type === 'separator') {
            return <div key={i} className="nav-separator">{item.label}</div>
          }
          return (
            <NavLink
              key={i}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              aria-current={undefined}
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && (
                <span className={`nav-badge ${item.badgeClass || ''}`}>{item.badge}</span>
              )}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
