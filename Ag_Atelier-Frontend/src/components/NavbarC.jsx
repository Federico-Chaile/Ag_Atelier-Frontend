import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function NavbarC({ onContacto }) {
  return (
    <Navbar expand="lg" className="border-bottom">
      <Container fluid className="px-4 px-lg-5">
        <Navbar.Brand as={Link} to="/">
          <img src="/img/age_logo.png" alt="Logo de AG Atelier" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarPrincipal" />

        <Navbar.Collapse id="navbarPrincipal">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>

            <NavDropdown title="Productos" id="productosDropdown">
              <NavDropdown.Item as={Link} to="/galeria#pulseras">Pulseras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/galeria#aritos">Aritos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/galeria#anillos">Anillos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/galeria#collares">Collares</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/galeria#maquillaje">Maquillaje</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/galeria">
              Galería
            </Nav.Link>

            <Nav.Link as={NavLink} to="/sobre-nosotros">
              Sobre Nosotros
            </Nav.Link>

            <Button variant="dark" className="ms-lg-2 px-4" onClick={onContacto}>
              Contacto
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarC
