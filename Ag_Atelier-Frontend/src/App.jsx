import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Galeria from './pages/galeria'
import SobreNosotros from './pages/sobrenosotros'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App