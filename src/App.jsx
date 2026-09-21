import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Lightbox from './components/Lightbox.jsx'
import Overview from './pages/Overview.jsx'
import Scope from './pages/Scope.jsx'
import Operations from './pages/Operations.jsx'
import Som from './pages/Som.jsx'
import Observability from './pages/Observability.jsx'
import Cmdb from './pages/Cmdb.jsx'
import Dto from './pages/Dto.jsx'
import Practices from './pages/Practices.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Lightbox />
      <main className="main">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/som" element={<Som />} />
          <Route path="/observability" element={<Observability />} />
          <Route path="/cmdb" element={<Cmdb />} />
          <Route path="/dto" element={<Dto />} />
          <Route path="/practices" element={<Practices />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
