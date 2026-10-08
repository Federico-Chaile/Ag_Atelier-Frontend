import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function ProductoCard({ producto, onAgregar }) {
  const [agregado, setAgregado] = useState(false)

  const agregarProducto = () => {
    onAgregar(producto)
    setAgregado(true)

    setTimeout(() => {
      setAgregado(false)
    }, 1000)
  }

  return (
    <Card className="h-100 border-0 shadow rounded-4 overflow-hidden producto-card">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={producto.imagen}
          className="producto-img"
          alt={producto.nombre}
          loading="lazy"
        />

        <span className="badge text-bg-dark position-absolute top-0 start-0 m-3">
          {producto.categoriaNombre}
        </span>
      </div>

      <Card.Body className="d-flex flex-column p-4">
        <Card.Title as="h3" className="fs-4 mb-1">
          {producto.nombre}
        </Card.Title>

        <Card.Text className="text-secondary small mb-3">
          {producto.descripcion}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center mt-auto mb-3">
          <span className="text-secondary small">Precio</span>
          <p className="precio fw-bold fs-5 mb-0">
            ${producto.precio.toLocaleString('es-AR')}
          </p>
        </div>

        <Button
          variant={agregado ? 'success' : 'dark'}
          className="w-100"
          onClick={agregarProducto}
          disabled={agregado}
        >
          {agregado ? '✓ Agregado' : 'Agregar al carrito'}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductoCard
