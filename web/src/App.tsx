import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutPage from './AboutPage'
import Teams from './Teams'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  )
}
