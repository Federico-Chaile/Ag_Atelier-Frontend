import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FooterC({ onContacto }) {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={5}>
            <h5 className="text-uppercase fw-bold mb-3">AG Atelier</h5>
            <p className="text-white-50 mb-3">
              Accesorios seleccionados especialmente para acompañar tu estilo y darle un detalle diferente a cada momento.
            </p>
            <span className="small text-white-50">Santiago del Estero</span>
          </Col>

          <Col xs={6} md={3} className="ms-md-auto">
            <h5 className="fs-6 text-uppercase fw-bold mb-3">Navegación</h5>
            <div className="d-flex flex-column gap-2">
              <Link to="/" className="text-white-50 text-decoration-none">Inicio</Link>
              <Link to="/galeria" className="text-white-50 text-decoration-none">Galería</Link>
              <Link to="/sobre-nosotros" className="text-white-50 text-decoration-none">Sobre Nosotros</Link>
              <button
                type="button"
                className="btn btn-link text-white-50 text-decoration-none text-start p-0"
                onClick={onContacto}
              >
                Contacto
              </button>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <h5 className="fs-6 text-uppercase fw-bold mb-3">Seguinos</h5>
            <a
              href="https://www.instagram.com/ag_atelier4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none d-flex align-items-center mb-3"
            >
              <img src="/img/ig_logo.png" alt="Instagram de AG Atelier" width="25" className="me-2" />
              <span>@ag_atelier4</span>
            </a>
            <p className="small text-white-50 mb-0">Descubrí novedades y nuevos ingresos.</p>
          </Col>
        </Row>

        <hr className="my-4 border-secondary opacity-50" />

        <Row className="align-items-center g-2">
          <Col xs={12} md={6} className="text-center text-md-start">
            <p className="small text-white-50 mb-0">© 2026 AG Atelier. Todos los derechos reservados.</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <span className="small text-white-50">Joyería · Accesorios · Estilo</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterC
