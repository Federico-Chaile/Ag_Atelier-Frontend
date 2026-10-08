import { useEffect, useState } from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import CarritoModal from '../components/CarritoModal'
import ProductoCard from '../components/ProductoCard'
import { categorias, productos } from '../data/productos'

function Galeria({ onContacto }) {
  const [carrito, setCarrito] = useState([])
  const [mostrarCarrito, setMostrarCarrito] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')
    const seccion = document.getElementById(id)

    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find((item) => item.id === producto.id)

      if (productoExistente) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }

      return [...carritoActual, { ...producto, cantidad: 1 }]
    })
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const cantidadTotal = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  )

  return (
    <main id="inicio">
      <section className="py-5 border-bottom">
        <Container>
          <div className="bg-dark text-white rounded-4 shadow p-4 p-md-5 text-center">
            <p className="text-uppercase small fw-semibold text-white-50 mb-2">
              AG Atelier
            </p>

            <h1 className="display-4 fw-semibold mb-3">Nuestra colección</h1>

            <p className="lead text-white-50 mx-auto mb-4">
              Explorá nuestros accesorios y encontrá ese detalle que mejor acompañe tu estilo.
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-2">
              {categorias.map((categoria) => (
                <a
                  key={categoria.id}
                  href={`#${categoria.id}`}
                  className="btn btn-outline-light rounded-pill px-4"
                >
                  {categoria.nombre}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {categorias.map((categoria, indice) => {
        const productosCategoria = productos.filter(
          (producto) => producto.categoria === categoria.id
        )

        return (
          <section
            key={categoria.id}
            id={categoria.id}
            className={`py-5 ${indice % 2 !== 0 ? 'bg-light' : ''}`}
          >
            <Container>
              <div className="d-flex justify-content-between align-items-end border-bottom pb-3 mb-4">
                <div>
                  <Badge bg="dark" className="mb-2">
                    Colección
                  </Badge>

                  <h2 className="display-6 mb-1">{categoria.nombre}</h2>

                  <p className="text-secondary mb-0">
                    {categoria.descripcion}
                  </p>
                </div>

                <span className="text-secondary d-none d-md-block">
                  {productosCategoria.length}{' '}
                  {productosCategoria.length === 1 ? 'producto' : 'productos'}
                </span>
              </div>

              <Row className="g-4">
                {productosCategoria.map((producto) => (
                  <Col
                    key={producto.id}
                    xs={12}
                    sm={6}
                    lg={4}
                    xl={3}
                  >
                    <ProductoCard
                      producto={producto}
                      onAgregar={agregarAlCarrito}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        )
      })}

      <section className="py-5">
        <Container>
          <Row className="align-items-center g-4 py-4 border-top border-bottom">
            <Col xs={12} lg={8} className="text-center text-lg-start">
              <p className="text-uppercase small fw-semibold galeria-marca mb-2">
                ¿Necesitás ayuda?
              </p>
              <h2 className="display-6 mb-2">¿Buscás algo en particular?</h2>
              <p className="text-secondary mb-0">
                Consultanos por disponibilidad o por algún accesorio que estés buscando.
              </p>
            </Col>

            <Col xs={12} lg={4} className="text-center text-lg-end">
              <Button variant="dark" size="lg" className="px-4" onClick={onContacto}>
                Contactanos
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <Button
        type="button"
        className="btn-carrito"
        aria-label={`Abrir carrito. ${cantidadTotal} productos`}
        onClick={() => setMostrarCarrito(true)}
      >
        🛒 <span>{cantidadTotal}</span>
      </Button>

      <CarritoModal
        show={mostrarCarrito}
        onHide={() => setMostrarCarrito(false)}
        carrito={carrito}
        onVaciar={vaciarCarrito}
      />
    </main>
  )
}

export default Galeria
