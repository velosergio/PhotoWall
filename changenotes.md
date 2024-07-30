# Changenotes

## [Version 0.0.5] - 2024-07-30

### Added
- Se agregaron las dependencias e inició la implementación del backend usando CoreUI
- Ruta y lógica para `/forgot-password` para permitir a los usuarios restablecer su contraseña
- Nueva ruta `/admin` protegida para acceso al dashboard

### Changed
- Actualización del formulario de login para redirigir a `/admin` después de iniciar sesión
- Integración del sistema de autenticación para proteger la ruta `/admin`

### Fixed
- Correcciones en la configuración de las rutas para evitar errores al cargar archivos

## [Version 0.0.4] - 2024-07-30

### Added
- Nuevo archivo changenotes.md
- Sharp.js para optimizar las imágenes subidas
- Passport.js para manejar la autenticación de usuarios
- bcryptjs para el hashing de contraseñas
- sqlite3 como base de datos
- Rutas de autenticación: Login, Register y Logout
- Rutas para manejo de imágenes: subida y listado
- Nueva ruta para obtener todos los usuarios registrados

### Changed
- Modularización del archivo server.js en varios archivos
- Ajuste en el diseño del botón flotante y la barra inferior

### Fixed
- Se corrigio el .gitignore para que ahora incluya la carpeta uploads pero ignore el contenido
