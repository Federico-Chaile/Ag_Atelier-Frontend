# AG Atelier

Proyecto web desarrollado para **AG Atelier**, un emprendimiento de joyería y accesorios.

La aplicación fue desarrollada con **React + Vite**, utilizando React Bootstrap, React Router y componentes reutilizables para mantener una estructura clara, ordenada y responsive.

## Integrantes

- Paloma Lucas
- Elio Federico Chaile
- Mariano Torres Mari

## Funcionalidades

- Página de Inicio.
- Galería de productos por categorías.
- Carrito de compras.
- Cálculo de cantidades y total.
- Envío de pedidos por WhatsApp.
- Formulario de contacto.
- Página Sobre Nosotros.
- Diseño responsive.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Bootstrap
- Bootstrap 5
- React Router
- CSS
- Git y GitHub
- Vercel

## 1. Estrategias SEO

Se aplicaron buenas prácticas de SEO para mejorar la estructura y el posicionamiento del sitio.

Se utilizaron:

- Títulos descriptivos.
- Meta description.
- Meta robots.
- Idioma `es-AR`.
- Etiquetas semánticas como `main`, `section`, `nav` y `footer`.
- Jerarquía correcta con `h1`, `h2` y `h3`.
- Atributos `alt` descriptivos en las imágenes.

Estas prácticas ayudan a que los motores de búsqueda comprendan mejor el contenido del sitio.

## 2. Components

La interfaz fue dividida en componentes reutilizables para evitar repetir código y facilitar el mantenimiento.

Algunos de los componentes utilizados son:

- `NavbarC`
- `FooterC`
- `ContactoModal`
- `CategoriaCard`
- `ProductoCard`
- `CarritoModal`

Por ejemplo, `ProductoCard` se reutiliza para mostrar distintos productos utilizando los datos que recibe mediante props.

## 3. Pages

Las principales vistas de la aplicación se encuentran separadas dentro de la carpeta `pages`.

```text
pages/
├── Home.jsx
├── Galeria.jsx
└── SobreNosotros.jsx
