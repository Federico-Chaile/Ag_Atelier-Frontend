import {Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home'
import Galeria from '../../pages/Galeria'
import SobreNosotros from '../../pages/SobreNosotros'

function Rutas ({onContacto}){
    return (
        <Routes>
            <Route path="/" element={<Home onContacto={onContacto}/>} />
            <Route path="/galeria" element={<Galeria onContacto={onContacto}/>} />
            <Route path="/sobre-nosotros" element={<SobreNosotros onContacto={onContacto}/>} />
        </Routes>
    )
}
export default Rutas