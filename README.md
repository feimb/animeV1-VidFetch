# Anime Downloader

Aplicación para descubrir episodios de series a partir de una URL y descargarlos secuencialmente utilizando **yt-dlp**.

El proyecto busca ofrecer un sistema modular de scraping y descarga multimedia, con una API REST que permita administrar los trabajos y consultar su progreso.

## 🚀 Tecnologías

| Tecnología | Uso                      |
| ---------- | ------------------------ |
| Node.js    | Runtime                  |
| Javascript | Lenguaje                 |
| Express    | API REST                 |
| Crawlee    | Crawling y scraping      |
| Playwright | Navegación web dinámica  |
| Cheerio    | Extracción de HTML       |
| yt-dlp     | Descarga de videos       |
| FFmpeg     | Procesamiento multimedia |
| Postman    | Pruebas de API           |

## 📁 Estructura del proyecto

### apto a cambios
```text
anime-downloader/
│
├── src/
│   ├── server.ts
│   │
│   ├── routes/
│   │   └── download.routes.ts
│   │
│   ├── controllers/
│   │   └── download.controller.ts
│   │
│   ├── scraper/
│   │   ├── index.ts
│   │   └── extractors/
│   │
│   ├── downloader/
│   │   ├── index.ts
│   │   └── queue.ts
│   │
│   ├── services/
│   │   └── download.service.ts
│   │
│   └── types/
│       └── episode.ts
│
├── downloads/
├── package.json
├── tsconfig.json
└── README.md
```

## ⚙️ Requisitos

Antes de ejecutar el proyecto, necesitas:

- Node.js
- npm
- yt-dlp
- FFmpeg
- cheerio
- puppeter

## 📋 Funcionalidades

### MVP

- [ ] Recibir una URL de una serie.
- [ ] Detectar los episodios disponibles.
- [ ] Extraer las URLs de los episodios.
- [ ] Descargar episodios mediante yt-dlp.
- [ ] Descargar secuencialmente.
- [ ] Mostrar el progreso de descarga.
- [ ] Evitar descargar episodios duplicados.
- [ ] Gestionar errores y reintentos.

### Futuras funcionalidades

- [ ] Seleccionar episodios específicos.
- [ ] Seleccionar calidad y formato.
- [ ] Administrar múltiples series.
- [ ] Historial de descargas.
- [ ] Pausar y reanudar descargas.
- [ ] Interfaz web con React.
- [ ] Soporte para múltiples extractores.

## 🧩 Arquitectura

El proyecto se divide en cuatro componentes principales:

**1. Scraper**

Recibe la URL de una serie y descubre los episodios disponibles utilizando Crawlee y Playwright.

**2. Extractors**

Contiene extractores independientes para cada sitio compatible. Cada extractor se encarga de identificar los episodios y sus respectivos enlaces.

**3. Downloader**

Utiliza yt-dlp para descargar los videos y FFmpeg para procesarlos cuando sea necesario.

**4. Queue**

Administra los trabajos pendientes y ejecuta las descargas secuencialmente, registrando el estado de cada episodio.

## 🛡️ Consideraciones

- Descargar únicamente contenido que tengas autorización para descargar.
- No intentar eludir DRM ni restricciones de acceso.
- Validar las URLs recibidas por la API.
- Evitar exponer el servicio de descargas sin autenticación.
- Restringir el acceso del scraper a direcciones internas y servicios locales.

## 📌 Estado del proyecto

**En desarrollo.**

Actualmente se plantea la arquitectura inicial y la integración de las herramientas de scraping y descarga.

## 📄 Licencia

Por definir.
