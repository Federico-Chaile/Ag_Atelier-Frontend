import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactoModal from './components/ContactoModal'
import FooterC from './components/FooterC'
import NavbarC from './components/NavbarC'
import Galeria from './pages/Galeria'
import Home from './pages/Home'
import SobreNosotros from './pages/SobreNosotros'

function App() {
  const [mostrarContacto, setMostrarContacto] = useState(false)

  const abrirContacto = () => setMostrarContacto(true)
  const cerrarContacto = () => setMostrarContacto(false)

  return (
    <>
      <NavbarC onContacto={abrirContacto} />

      <Routes>
        <Route path="/" element={<Home onContacto={abrirContacto} />} />
        <Route path="/galeria" element={<Galeria onContacto={abrirContacto} />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>

      <FooterC onContacto={abrirContacto} />
      <ContactoModal show={mostrarContacto} onHide={cerrarContacto} />
    </>
  )
}

export default App
