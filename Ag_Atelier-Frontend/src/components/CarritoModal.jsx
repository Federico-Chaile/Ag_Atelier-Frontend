import { Button, Modal } from 'react-bootstrap'

function CarritoModal({ show, onHide, carrito, onVaciar }) {
  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.precio * producto.cantidad,
    0
  )

  const enviarWhatsApp = () => {
    if (carrito.length === 0) return

    let mensaje = 'Hola AG Atelier, quiero realizar este pedido:\n\n'

    carrito.forEach((producto) => {
      const subtotal = producto.precio * producto.cantidad

      mensaje += `${producto.cantidad} x ${producto.nombre} - $${subtotal.toLocaleString('es-AR')}\n`
    })

    mensaje += `\nTotal: $${total.toLocaleString('es-AR')}`

    const numeroWhatsApp = '5492617590562'
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Tu carrito</Modal.Title>
      </Modal.Header>

      <Modal.Body className="fondo-modal">
        {carrito.length === 0 ? (
          <p className="text-secondary mb-0">Tu carrito está vacío.</p>
        ) : (
          carrito.map((producto) => (
            <div
              key={producto.id}
              className="d-flex justify-content-between gap-3 py-3 border-bottom"
            >
              <div>
                <strong className="d-block">{producto.nombre}</strong>
                <span className="small text-secondary">
                  {producto.cantidad} x ${producto.precio.toLocaleString('es-AR')}
                </span>
              </div>

              <span className="fw-semibold">
                ${(producto.precio * producto.cantidad).toLocaleString('es-AR')}
              </span>
            </div>
          ))
        )}

        <div className="d-flex justify-content-between align-items-center pt-4">
          <span className="fw-semibold">Total</span>
          <strong className="fs-5">${total.toLocaleString('es-AR')}</strong>
        </div>
      </Modal.Body>

      <Modal.Footer className="fondo-modal">
        <Button
          variant="outline-secondary"
          onClick={onVaciar}
          disabled={carrito.length === 0}
        >
          Vaciar carrito
        </Button>

        <Button
          variant="dark"
          onClick={enviarWhatsApp}
          disabled={carrito.length === 0}
        >
          Enviar por WhatsApp
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CarritoModal
