import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './Home'
import AboutPage from './AboutPage'
import Teams from './Teams'
import Newsletter from './Newsletter'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      <Analytics />
    </>
  )
}
