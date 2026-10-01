import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CategoriaCard from '../components/CategoriaCard'

const categorias = [
  { nombre: 'Aritos', imagen: '/img/aritos1.png', destino: '/galeria#aritos' },
  { nombre: 'Pulseras', imagen: '/img/pulsera4.png', destino: '/galeria#pulseras' },
  { nombre: 'Collares', imagen: '/img/collar1.png', destino: '/galeria#collares' },
  { nombre: 'Anillos', imagen: '/img/anillo1.jpg', destino: '/galeria#anillos' },
  { nombre: 'Maquillaje', imagen: '/img/maquillaje1.png', destino: '/galeria#maquillaje' },
]

function Home({ onContacto }) {
  return (
    <main>
      <section className="py-5 border-bottom">
        <Container className="py-lg-4">
          <Row className="align-items-center g-5">
            <Col xs={12} lg={5} className="text-center text-lg-start">
              <p className="text-uppercase small fw-semibold mb-2 galeria-marca">AG Atelier</p>
              <h1 className="display-3 fw-semibold mb-4">Detalles que acompañan tu estilo.</h1>
              <p className="lead text-secondary mb-4">
                Una selección de accesorios elegidos para acompañarte todos los días y darle un detalle especial a cada look.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-3">
                <Link to="/galeria" className="btn btn-dark btn-lg px-4">Explorar colección</Link>
                <Link to="/sobre-nosotros" className="text-dark text-decoration-underline">Conocé nuestra historia</Link>
              </div>
            </Col>

            <Col xs={12} lg={7}>
              <Carousel className="rounded-4 overflow-hidden shadow">
                <Carousel.Item>
                  <img src="/img/aritos_dor.png" className="d-block w-100 hero-carousel-img" alt="Aritos dorados de AG Atelier" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/img/pul_celeste.png" className="d-block w-100 hero-carousel-img" alt="Pulsera de piedras celestes" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/img/pulseras_cora.png" className="d-block w-100 hero-carousel-img" alt="Pulseras para compartir" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-lg-4">
          <Row className="align-items-end mb-4">
            <Col lg={7}>
              <p className="text-uppercase small fw-semibold galeria-marca mb-1">Encontrá tu estilo</p>
              <h2 className="display-6 mb-2">Explorá por categoría</h2>
              <p className="text-secondary mb-0">Una selección pensada para que encuentres fácilmente lo que estás buscando.</p>
            </Col>
          </Row>

          <Row xs={2} md={3} lg={5} className="g-3">
            {categorias.map((categoria) => (
              <Col key={categoria.nombre}>
                <CategoriaCard {...categoria} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container className="py-lg-5">
          <Row className="align-items-end mb-5">
            <Col lg={8}>
              <p className="text-uppercase small fw-semibold galeria-marca mb-1">Selección AG</p>
              <h2 className="display-6 mb-2">Algunos de nuestros favoritos</h2>
              <p className="text-secondary mb-0">Piezas elegidas por su diseño, versatilidad y estilo.</p>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <Link to="/galeria" className="link-dark fw-semibold text-decoration-none">Descubrir todos →</Link>
            </Col>
          </Row>

          <Row className="g-4 align-items-start">
            <Col xs={12} lg={6}>
              <Link to="/galeria#aritos" className="text-decoration-none text-dark d-block">
                <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm mb-3">
                  <img src="/img/aritos1.png" className="w-100 h-100 object-fit-cover" alt="Aritos bañados en oro de AG Atelier" />
                </div>
                <div className="d-flex justify-content-between align-items-start gap-3">
                  <div>
                    <p className="text-uppercase small galeria-marca mb-1">Aritos</p>
                    <h3 className="h3 mb-2">Aritos bañados en oro</h3>
                    <p className="text-secondary mb-0">Un diseño delicado que se adapta tanto a lo cotidiano como a ocasiones especiales.</p>
                  </div>
                  <span className="fs-4">↗</span>
                </div>
              </Link>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <Link to="/galeria#collares" className="text-decoration-none text-dark d-block">
                <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm mb-3">
                  <img src="/img/collar1.png" className="w-100 h-100 object-fit-cover" alt="Collar blanco de AG Atelier" />
                </div>
                <p className="text-uppercase small galeria-marca mb-1">Collares</p>
                <div className="d-flex justify-content-between align-items-start">
                  <h3 className="h5 mb-0">Collar blanco</h3>
                  <span>↗</span>
                </div>
              </Link>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <Link to="/galeria#pulseras" className="text-decoration-none text-dark d-block">
                <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm mb-3">
                  <img src="/img/pulsera4.png" className="w-100 h-100 object-fit-cover" alt="Pulsera de piedras de AG Atelier" />
                </div>
                <p className="text-uppercase small galeria-marca mb-1">Pulseras</p>
                <div className="d-flex justify-content-between align-items-start">
                  <h3 className="h5 mb-0">Pulsera de piedras</h3>
                  <span>↗</span>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-lg-5">
          <Row className="align-items-center g-5">
            <Col xs={12} lg={6}>
              <div className="position-relative">
                <img src="/img/milagros.jpeg" className="img-fluid w-100 rounded-4 object-fit-cover shadow-sm historia-img" alt="Milagros, fundadora de AG Atelier" />
                <div className="position-absolute bottom-0 start-0 m-3 m-md-4 bg-light rounded-3 px-3 py-2 shadow-sm">
                  <span className="small text-secondary d-block">Detrás de AG Atelier</span>
                  <strong className="fs-5">Milagros</strong>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              <p className="text-uppercase small fw-semibold galeria-marca mb-2">Nuestra historia</p>
              <h2 className="display-6 mb-4">Elegir cada detalle también es parte del estilo.</h2>
              <p className="text-secondary fs-5">
                AG Atelier nació como un proyecto personal de Milagros, combinando sus estudios con una idea que fue creciendo a partir de su interés por los accesorios y el estilo.
              </p>
              <p className="text-secondary">
                Cada pieza se selecciona a través de un proveedor de confianza, teniendo en cuenta lo que buscan sus clientas, sus preferencias y las tendencias que mejor representan la identidad de AG Atelier.
              </p>
              <Row className="g-4 my-4">
                <Col xs={6}>
                  <span className="d-block fs-3">01</span>
                  <p className="small text-secondary mb-0">Selección pensada según gustos reales.</p>
                </Col>
                <Col xs={6}>
                  <span className="d-block fs-3">02</span>
                  <p className="small text-secondary mb-0">Atención cercana y personalizada.</p>
                </Col>
              </Row>
              <Link to="/sobre-nosotros" className="link-dark fw-semibold text-decoration-none">Conocer AG Atelier →</Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 border-top border-bottom">
        <Container className="py-lg-3">
          <Row className="g-4 align-items-start">
            <Col md={4}>
              <span className="small text-secondary">01 · Selección</span>
              <h2 className="h4 mt-2">Piezas elegidas con criterio</h2>
              <p className="text-secondary mb-0">Productos seleccionados según estilo, tendencias y uso cotidiano.</p>
            </Col>
            <Col md={4}>
              <span className="small text-secondary">02 · Cercanía</span>
              <h2 className="h4 mt-2">Atención directa</h2>
              <p className="text-secondary mb-0">Una experiencia cercana para acompañar cada consulta.</p>
            </Col>
            <Col md={4}>
              <span className="small text-secondary">03 · Simple</span>
              <h2 className="h4 mt-2">Elegir sin complicaciones</h2>
              <p className="text-secondary mb-0">Una navegación clara para encontrar rápidamente lo que buscás.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-lg-4">
          <Row className="align-items-center g-4 py-4 py-md-5 border-bottom">
            <Col xs={12} lg={8} className="text-center text-lg-start">
              <p className="text-uppercase small fw-semibold galeria-marca mb-2">¿Podemos ayudarte?</p>
              <h2 className="display-6 mb-2">¿Buscás algo en particular?</h2>
              <p className="text-secondary mb-0">Consultanos por disponibilidad o por algún accesorio que estés buscando.</p>
            </Col>
            <Col xs={12} lg={4} className="text-center text-lg-end">
              <button type="button" className="btn btn-dark btn-lg px-4" onClick={onContacto}>Contactanos</button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Home
