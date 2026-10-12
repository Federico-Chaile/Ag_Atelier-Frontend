import { useState } from 'react'
import ContactoModal from './components/ContactoModal'
import FooterC from './components/FooterC'
import NavbarC from './components/NavbarC'
import Rutas from './components/routes/Rutas'

function App() {
  const [mostrarContacto, setMostrarContacto] = useState(false)

  const abrirContacto = () => setMostrarContacto(true)
  const cerrarContacto = () => setMostrarContacto(false)

  return (
    <>
      <NavbarC onContacto={abrirContacto}/>
      <Rutas onContacto={abrirContacto}/>
      <FooterC onContacto={abrirContacto}/>

      <ContactoModal show={mostrarContacto} onHide={cerrarContacto} />
    </>
  )
}

export default App
