# PhotoWall | Mango Morado

PhotoWall es una aplicación web que permite a los usuarios subir y mostrar imágenes en una galería interactiva y dinámica utilizando NanoGallery2. La galería se presenta en un diseño tipo mosaico y cuenta con un botón flotante para facilitar la subida de nuevas imágenes.

## Características

- Subida de imágenes mediante un botón flotante.
- Visualización de imágenes en una galería tipo mosaico utilizando NanoGallery2.
- Diseño responsivo que se adapta a diferentes tamaños de pantalla.
- Backend con Node.js y Express para manejar la carga y visualización de imágenes.

## Requisitos

- Node.js (versión 12 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio a tu máquina local:

    ```bash
    git clone https://github.com/velosergio/PhotoWall
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd PhotoWall
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor:

    ```bash
    node server.js
    ```

2. Abre tu navegador y navega a `http://localhost:3000`.

3. Usa el botón flotante `+` en la esquina inferior derecha para seleccionar y subir imágenes. Las imágenes se mostrarán automáticamente en la galería tipo mosaico.

## Estructura del Proyecto

- `public/`
  - `index.html`: Archivo HTML principal.
  - `styles.css`: Estilos personalizados para la página.
  - `script.js`: Lógica de JavaScript para manejar la galería y la subida de imágenes.
- `uploads/`: Directorio donde se almacenan las imágenes subidas.
- `server.js`: Archivo del servidor Node.js para manejar las rutas de la aplicación.
- `package.json`: Archivo de configuración de npm con las dependencias del proyecto.

## Tecnologías Utilizadas

- [NanoGallery2](https://nanogallery2.nanostudio.org/) para la galería de imágenes.
- [Node.js](https://nodejs.org/) y [Express](https://expressjs.com/) para el backend.
- [Multer](https://github.com/expressjs/multer) para la gestión de la subida de archivos.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna mejora o corrección, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
