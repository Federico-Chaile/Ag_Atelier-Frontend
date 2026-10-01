import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const estadoInicial = {
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
}

function ContactoModal({ show, onHide }) {
  const [datos, setDatos] = useState(estadoInicial)
  const [validado, setValidado] = useState(false)

  const actualizarCampo = (event) => {
    const { name, value } = event.target
    const nuevoValor = name === 'telefono' ? value.replace(/\D/g, '').slice(0, 10) : value

    setDatos((anteriores) => ({
      ...anteriores,
      [name]: nuevoValor,
    }))
  }

  const enviarFormulario = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const formulario = event.currentTarget

    if (!formulario.checkValidity()) {
      setValidado(true)
      return
    }

    const destinatario = 'agatelier17@gmail.com'
    const asunto = `Nueva consulta web de: ${datos.nombre}`
    const cuerpo = `¡Hola AG Atelier!\n\nTienen una nueva consulta desde la página web:\n\nNombre: ${datos.nombre}\nEmail: ${datos.email}\nTeléfono: ${datos.telefono}\n\nMensaje:\n${datos.mensaje}`

    const urlGmail =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      `&to=${encodeURIComponent(destinatario)}` +
      `&su=${encodeURIComponent(asunto)}` +
      `&body=${encodeURIComponent(cuerpo)}`

    window.open(urlGmail, '_blank', 'noopener,noreferrer')

    setDatos(estadoInicial)
    setValidado(false)
    onHide()
  }

  const cerrarModal = () => {
    setValidado(false)
    onHide()
  }

  return (
    <Modal show={show} onHide={cerrarModal} centered>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Contactanos</Modal.Title>
      </Modal.Header>

      <Form noValidate validated={validado} onSubmit={enviarFormulario}>
        <Modal.Body className="fondo-modal">
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={datos.nombre}
              onChange={actualizarCampo}
              minLength={4}
              maxLength={60}
              autoComplete="name"
              placeholder="Nombre y apellido"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingresá tu nombre y apellido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={datos.email}
              onChange={actualizarCampo}
              autoComplete="email"
              placeholder="ejemplo@ejemplo.com"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingresá un email válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              value={datos.telefono}
              onChange={actualizarCampo}
              autoComplete="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={10}
              placeholder="Ej: 3851234567"
              required
            />
            <Form.Text className="text-muted">Ingresá 10 números, sin espacios ni guiones.</Form.Text>
            <Form.Control.Feedback type="invalid">
              El teléfono debe contener exactamente 10 números.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="mensaje">
            <Form.Label>Tu consulta</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="mensaje"
              value={datos.mensaje}
              onChange={actualizarCampo}
              minLength={10}
              maxLength={500}
              placeholder="Escribinos tu consulta..."
              required
            />
            <Form.Control.Feedback type="invalid">
              La consulta debe tener al menos 10 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="fondo-modal">
          <Button variant="outline-secondary" onClick={cerrarModal}>Cerrar</Button>
          <Button variant="dark" type="submit">Enviar mensaje</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ContactoModal
