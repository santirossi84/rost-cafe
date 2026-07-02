import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import MenuDashboard from './pages/MenuDashboard.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-base-950">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<MenuDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
