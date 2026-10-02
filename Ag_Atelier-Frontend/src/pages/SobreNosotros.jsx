import { Col, Container, Row } from 'react-bootstrap'

function SobreNosotros() {
  return (
    <main>
      <section className="py-5 border-bottom">
        <Container className="py-lg-5">
          <Row className="justify-content-center">
            <Col xs={12} lg={9} className="text-center">
              <p className="text-uppercase small fw-semibold galeria-marca mb-2">Nuestra historia</p>
              <h1 className="display-3 mb-4">Un emprendimiento que nació en familia.</h1>
              <p className="lead text-secondary mx-auto mb-0">
                AG Atelier comenzó hace apenas dos meses, a partir de una idea que nació con el apoyo y la iniciativa de dos personas muy importantes: mi mamá y mi madrina.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-lg-5">
          <Row className="align-items-center g-5">
            <Col xs={12} lg={5}>
              <div className="position-relative">
                <img
                  src="/img/milagros.jpeg"
                  className="img-fluid w-100 rounded-4 shadow-sm object-fit-cover"
                  alt="Milagros, fundadora de AG Atelier"
                />
                <div className="position-absolute bottom-0 start-0 m-3 m-md-4 bg-light rounded-3 px-3 py-2 shadow-sm">
                  <span className="small text-secondary d-block">Detrás de AG Atelier</span>
                  <strong className="fs-5">Milagros</strong>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={7}>
              <p className="text-uppercase small fw-semibold galeria-marca mb-2">Cómo empezó</p>
              <h2 className="display-6 mb-4">De una idea familiar a un proyecto propio.</h2>
              <p className="text-secondary fs-5">
                Mi mamá y mi madrina fueron quienes me dieron la iniciativa para empezar a emprender. Con su apoyo nació la idea de crear algo propio y dar los primeros pasos con AG Atelier.
              </p>
              <p className="text-secondary">
                Todo comenzó de una manera simple: ofreciendo los primeros productos a familiares y conocidos. A partir de esas primeras ventas, el proyecto empezó a tomar forma y a encontrar su propia identidad.
              </p>
              <p className="text-secondary mb-0">
                Además de ser un proyecto que disfruto, AG Atelier nació también como una forma de generar un ingreso mientras continúo avanzando con mis estudios.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container className="py-lg-4">
          <Row className="mb-5">
            <Col lg={7}>
              <p className="text-uppercase small fw-semibold galeria-marca mb-2">Un comienzo reciente</p>
              <h2 className="display-6 mb-2">Una historia que recién empieza.</h2>
              <p className="text-secondary mb-0">Cada etapa fue ayudando a construir lo que hoy representa AG Atelier.</p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col xs={12} md={4}>
              <div className="h-100 border-top pt-4">
                <span className="text-secondary small">01</span>
                <h3 className="h4 mt-2">La iniciativa</h3>
                <p className="text-secondary mb-0">
                  La idea comenzó gracias al impulso de mi mamá y mi madrina, quienes me animaron a empezar mi propio emprendimiento.
                </p>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div className="h-100 border-top pt-4">
                <span className="text-secondary small">02</span>
                <h3 className="h4 mt-2">Las primeras ventas</h3>
                <p className="text-secondary mb-0">
                  Los primeros productos llegaron a familiares y conocidos, que fueron también quienes acompañaron los primeros pasos del proyecto.
                </p>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div className="h-100 border-top pt-4">
                <span className="text-secondary small">03</span>
                <h3 className="h4 mt-2">Seguir creciendo</h3>
                <p className="text-secondary mb-0">
                  El objetivo ahora es ampliar la variedad de productos, crecer en Instagram y hacer que AG Atelier llegue cada vez a más personas.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-lg-5">
          <Row className="align-items-center g-5">
            <Col xs={12} lg={5}>
              <p className="text-uppercase small fw-semibold galeria-marca mb-2">El nombre</p>
              <h2 className="display-5 mb-3">¿Qué significa AG Atelier?</h2>
              <p className="text-secondary mb-0">El nombre también tiene una historia y un significado especial detrás.</p>
            </Col>

            <Col xs={12} lg={7}>
              <Row className="g-4">
                <Col xs={12} sm={4}>
                  <div className="border-top pt-3">
                    <span className="display-5">A</span>
                    <h3 className="h5 mt-2">Amadeo</h3>
                    <p className="text-secondary small mb-0">La primera inicial que forma parte del nombre AG Atelier.</p>
                  </div>
                </Col>
                <Col xs={12} sm={4}>
                  <div className="border-top pt-3">
                    <span className="display-5">G</span>
                    <h3 className="h5 mt-2">Grecia</h3>
                    <p className="text-secondary small mb-0">La segunda inicial que completa la identidad del nombre.</p>
                  </div>
                </Col>
                <Col xs={12} sm={4}>
                  <div className="border-top pt-3">
                    <span className="display-5">Atelier</span>
                    <h3 className="h5 mt-2">La idea</h3>
                    <p className="text-secondary small mb-0">En francés, Atelier hace referencia a un espacio o taller creativo.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 border-top border-bottom">
        <Container className="py-lg-4">
          <Row className="align-items-start g-5">
            <Col xs={12} lg={5}>
              <p className="text-uppercase small fw-semibold galeria-marca mb-2">Nuestra selección</p>
              <h2 className="display-6 mb-3">Elegante, moderno y pensado para todos los días.</h2>
              <p className="text-secondary mb-0">
                No elegimos productos solamente porque estén de moda. Buscamos piezas que también usaríamos nosotros y que puedan formar parte del día a día.
              </p>
            </Col>

            <Col xs={12} lg={7}>
              <Row className="g-4">
                <Col xs={12} md={4}>
                  <span className="small text-secondary">01</span>
                  <h3 className="h4 mt-2">Tendencia</h3>
                  <p className="text-secondary mb-0">Observamos estilos y tendencias actuales para mantener una selección renovada.</p>
                </Col>
                <Col xs={12} md={4}>
                  <span className="small text-secondary">02</span>
                  <h3 className="h4 mt-2">Estilo</h3>
                  <p className="text-secondary mb-0">Elegimos piezas elegantes y modernas que realmente usaríamos.</p>
                </Col>
                <Col xs={12} md={4}>
                  <span className="small text-secondary">03</span>
                  <h3 className="h4 mt-2">Día a día</h3>
                  <p className="text-secondary mb-0">Buscamos accesorios versátiles, pensados para acompañar el uso cotidiano y perdurar en el tiempo.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-dark text-white">
        <Container className="py-lg-4">
          <Row className="align-items-center g-4">
            <Col xs={12} lg={4}>
              <p className="text-uppercase small text-white-50 mb-2">Lo que nos representa</p>
              <h2 className="display-6 mb-0">Más que elegir productos.</h2>
            </Col>
            <Col xs={12} lg={8}>
              <p className="fs-4 mb-3">Atención personalizada y cariño en cada detalle.</p>
              <p className="text-white-50 mb-0">
                La cercanía con quienes eligen AG Atelier es una parte fundamental del emprendimiento. Nos importa acompañar cada consulta, escuchar qué están buscando y brindar una atención personal durante todo el proceso.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="py-lg-4">
          <div className="text-center mb-5">
            <p className="text-uppercase small fw-semibold galeria-marca mb-2">Detrás del sitio</p>
            <h2 className="display-6 mb-2">Equipo de desarrollo</h2>
            <p className="text-secondary mb-0">Desarrollo del proyecto web de AG Atelier.</p>
          </div>

          <Row className="justify-content-center g-4">
            <Col xs={12} md={4}>
              <div className="text-center border-top pt-4">
                <span className="small text-secondary">01</span>
                <h3 className="h4 mt-2 mb-1">Paloma Lucas</h3>
                <p className="text-secondary mb-0">Desarrollo del proyecto</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="text-center border-top pt-4">
                <span className="small text-secondary">02</span>
                <h3 className="h4 mt-2 mb-1">Elio Federico Chaile</h3>
                <p className="text-secondary mb-0">Desarrollo del proyecto</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="text-center border-top pt-4">
                <span className="small text-secondary">03</span>
                <h3 className="h4 mt-2 mb-1">Mariano Torres Mari</h3>
                <p className="text-secondary mb-0">Desarrollo del proyecto</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default SobreNosotros
