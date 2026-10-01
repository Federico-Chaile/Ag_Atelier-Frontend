import { Link } from 'react-router-dom'

function CategoriaCard({ nombre, imagen, destino }) {
  return (
    <Link
      to={destino}
      className="d-block position-relative rounded-4 overflow-hidden shadow-sm text-decoration-none categoria-card"
    >
      <div className="ratio ratio-4x3">
        <img src={imagen} className="w-100 h-100 object-fit-cover" alt={`Colección de ${nombre} de AG Atelier`} />
      </div>
      <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
        <h3 className="h5 mb-0">{nombre}</h3>
      </div>
    </Link>
  )
}

export default CategoriaCard
