# AG Atelier

Proyecto web desarrollado para **AG Atelier**, un emprendimiento de joyería y accesorios.

La aplicación fue desarrollada con **React + Vite**, utilizando React Bootstrap, React Router y componentes reutilizables.

## Integrantes

- Paloma Lucas
- Elio Federico Chaile
- Mariano Torres Mari

## Funcionalidades

- Página de Inicio.
- Galería de productos por categorías.
- Carrito de compras persistente.
- Envío de pedidos mediante WhatsApp.
- Formulario de contacto.
- Página Sobre Nosotros.
- Consumo de una API pública de productos.
- Diseño responsive.

## Tecnologías

- React
- Vite
- JavaScript
- React Bootstrap
- Bootstrap 5
- React Router
- Axios
- SweetAlert2
- CSS
- Git y GitHub
- Vercel

## Estrategias SEO
Se implementaron títulos descriptivos, metadatos, idioma `es-AR`, atributos `alt`, jerarquía de títulos y etiquetas semánticas como `main`, `section`, `nav` y `footer`.
## Components
La interfaz está dividida en componentes reutilizables como:

- `NavbarC`
- `FooterC`
- `ContactoModal`
- `CategoriaCard`
- `ProductoCard`
- `CarritoModal`
- `ProductosApi`

## Pages
Las vistas principales se encuentran separadas en:
```text
pages/
├── Home.jsx
├── Galeria.jsx
└── SobreNosotros.jsx
```

## map()
Se utiliza `map()` para generar dinámicamente categorías, productos, elementos del carrito y productos obtenidos desde la API.
## Props
Las props permiten enviar información y funciones entre componentes. Por ejemplo, `ProductoCard` recibe el producto y la función utilizada para agregarlo al carrito.
## React Router
Las rutas de la aplicación están organizadas en un componente independiente.

```text
/                → Inicio
/galeria         → Galería
/sobre-nosotros  → Sobre Nosotros
```
## Hooks
Se utiliza `useState` para manejar estados como el carrito, formularios, modales, productos de la API y estado de carga.
Se utiliza `useEffect` para guardar el carrito en `localStorage`, navegar hacia categorías y realizar la petición a la API pública.
## Consumo de API pública
Se utiliza **Axios** para consultar una API pública relacionada con joyería.
La URL se obtiene mediante:
```javascript
const API_URL = import.meta.env.VITE_API_URL
```
Los datos recibidos se almacenan con `useState` y la petición se realiza dentro de `useEffect`.
También se implementan:

- Estado de carga.
- Manejo de errores mediante `try/catch`.
- SweetAlert2 para mostrar errores al usuario.
- Variable de entorno para almacenar la URL.

## Variables de entorno

El proyecto utiliza las siguientes variables:

```env
VITE_CARRITO_KEY=
VITE_WHATSAPP_NUMBER=
VITE_CONTACT_EMAIL=
VITE_API_URL=
```

El archivo `.env` está incluido en `.gitignore` y no se sube al repositorio.

## Instalación

```bash
git clone https://github.com/Federico-Chaile/Ag_Atelier-Frontend.git
```

Instalar dependencias:
```bash
npm install
```
Ejecutar:

```bash
npm run dev
```
Verificar el proyecto:

```bash
npm run lint
npm run build
```
## Deploy
El proyecto se despliega mediante **Vercel**.
