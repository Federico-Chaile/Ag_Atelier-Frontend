import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Card, Col, Row, Spinner } from 'react-bootstrap'

function ProductosApi() {
  const [productosApi, setProductosApi] = useState([])
  const [cargando, setCargando] = useState(true)

  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        setCargando(true)

        if (!API_URL) {
          throw new Error('No se encontró VITE_API_URL')
        }

        const response = await axios.get(API_URL)

        setProductosApi(response.data.products)
      } catch (error) {
        console.error('Error al obtener productos:', error)

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar los productos de inspiración.',
        })
      } finally {
        setCargando(false)
      }
    }

    obtenerProductos()
  }, [API_URL])

  if (cargando) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" />

        <p className="text-secondary mt-3 mb-0">
          Cargando productos...
        </p>
      </div>
    )
  }

  return (
    <Row className="g-4 justify-content-center">
      {productosApi.map((producto) => (
        <Col
          key={producto.id}
          xs={12}
          sm={6}
          lg={4}
          xl={4}
        >
          <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <Card.Img
              variant="top"
              src={producto.thumbnail}
              alt={producto.title}
              className="producto-api-img bg-white p-4"
            />

            <Card.Body className="d-flex flex-column">
              <Card.Title as="h3" className="h5">
                {producto.title}
              </Card.Title>

              <Card.Text className="text-secondary small">
                {producto.description}
              </Card.Text>

              <p className="fw-bold mt-auto mb-0">
                USD ${producto.price}
              </p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProductosApi