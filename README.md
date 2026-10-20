# 🌿 Green Paradise Hotel & Bungalows Tingo María
## Calendario Interno de Planificación de Contenido para Redes Sociales

Aplicación web interna, ligera y 100% estática para la gestión, seguimiento y coordinación de publicaciones en redes sociales (Facebook, Instagram, TikTok, YouTube) de **Green Paradise Hotel & Bungalows Tingo María** ([greenparadise-hotel.com](https://greenparadise-hotel.com/)).

---

### ✨ Características Principales

1. **Vistas de Planificación:**
   - **Vista Mes (`#/mes`):** Cuadrícula de 7 columnas (Lunes a Domingo). Cada día muestra el número y las mini-tarjetas de cada publicación (título, marca Hotel/Bungalows, iconos de redes y estado). Si hay más de 3 publicaciones, muestra el indicador `+X más`. Al pulsar sobre cualquier día se abre la vista detallada de esa fecha.
   - **Vista Semana (`#/semana`):** Columnas diarias con hora programada (o *Sin hora*), título, marca, tipo de formato (🖼️ Imagen / 🎬 Video), iconos de redes y estado.
   - **Vista Día (`#/dia` y `#/dia/YYYY-MM-DD`):** 
     - Sin fecha seleccionada: Cuadrícula mensual de resumen diario con accesos directos.
     - Con fecha seleccionada: Tarjetas completas de publicación con galería de imágenes interactiva (hacer clic en una miniatura cambia la imagen principal), visualizador de copy con botón de un clic para copiar al portapapeles, checkboxes interactivos de *Publicado* por red social y botones de navegación rápida entre días contiguos.
   - **Vista Pendientes (`#/pendientes`):** Lista de tareas de redes sin fecha obligatoria (fotos requeridas, edición de reels, contactos de influencers, plantillas), con checkboxes de *Hecho* y botón de notificación directa por WhatsApp.

2. **Integración con WhatsApp:**
   - Notificaciones y envío de ideas directamente al número del hotel (`51936574554`).
   - Al registrar una idea con marca **Ambos**, se generan automáticamente dos publicaciones vinculadas con el mismo `grupoId` (una para Hotel y otra para Bungalows) y el mensaje de WhatsApp incluye la indicación expresa de crear ambas piezas de contenido.

3. **Logo Oficial & Navegación Limpia:**
   - Utiliza el logo SVG oficial extraído directamente del menú principal de [greenparadise-hotel.com](https://greenparadise-hotel.com/).
   - Menú superior limpio en escritorio enfocado 100% en las cuatro vistas de planificación: **Mes**, **Semana**, **Día** y **Pendientes**.

---

### 🚀 Publicación en GitHub Pages (Paso a Paso)

Esta aplicación fue diseñada para funcionar de forma estática en cualquier servidor web o en **GitHub Pages** sin necesidad de Node.js, compilación ni base de datos:

1. **Crear el repositorio en GitHub:**
   - Entra a [GitHub](https://github.com/) y crea un nuevo repositorio público o privado (ejemplo: `greenparadise-redes`).

2. **Subir los archivos:**
   Sube la estructura del proyecto en la raíz del repositorio:
   ```text
   ├── index.html
   ├── styles.css
   ├── app.js
   ├── README.md
   ├── data/
   │   └── calendar.json
   └── images/
       ├── logo.svg
       ├── bungalow-deluxe.svg
       ├── bungalow-interior.svg
       ├── piscina-selva.svg
       ├── bella-durmiente-tour.svg
       ├── restaurant-tingo.svg
       ├── coctel-exotico.svg
       └── desayuno-amazonico.svg
   ```

3. **Activar GitHub Pages:**
   - En tu repositorio de GitHub, haz clic en **Settings** (Configuración).
   - En el menú lateral izquierdo, selecciona **Pages**.
   - En la sección **Build and deployment**:
     - **Source:** Selecciona `Deploy from a branch`.
     - **Branch:** Selecciona `main` (o `master`) y en la carpeta elige `/ (root)`.
     - Haz clic en **Save** (Guardar).

4. **Acceder a la web:**
   - En 1 o 2 minutos, GitHub Pages generará tu enlace público:  
     `https://<tu-usuario>.github.io/<tu-repositorio>/`

---

### 📝 Cómo Actualizar el Calendario (`data/calendar.json`)

El archivo `data/calendar.json` contiene la configuración, las publicaciones y los pendientes.

#### Estructura de Configuración:
```json
{
  "config": {
    "whatsapp": "51936574554",
    "pin": "GP2026",
    "nombre": "Green Paradise Hotel & Bungalows",
    "ubicacion": "Tingo María, Huánuco - Perú"
  }
}
```

#### Estructura de una Publicación:
```json
{
  "id": "pub-101",
  "grupoId": "grp-101",
  "fecha": "2026-10-31",
  "hora": "19:00",
  "titulo": "Noche de Leyendas & Fogata en los Bungalows",
  "descripcion": "Evento especial con fogata y degustación de macerados regionales.",
  "copy": "Este 31 de octubre, vive una noche mágica bajo el cielo estrellado de Tingo María ✨🔥...",
  "tipo": "imagen",
  "marca": "bungalows",
  "redes": ["facebook", "instagram", "tiktok"],
  "imagenes": [
    "images/bungalow-deluxe.svg",
    "images/coctel-exotico.svg"
  ],
  "publicado": {
    "facebook": false,
    "instagram": false,
    "tiktok": false
  },
  "estado": "programado"
}
```

- **Si no tiene imagen:** Dejar `imagenes: []`. La interfaz mostrará automáticamente el bloque ámbar `"Sin imagen"`.
- **Si no tiene copy:** Dejar `copy: ""`. La interfaz mostrará `"Sin copy"`.
- **Si no tiene hora:** Dejar `hora: ""`. La interfaz mostrará `"Sin hora"`.
- **Estado publicado:** Cuando `estado: "publicado"`, la tarjeta aplica opacidad y un check verde distintivo.

---

### 🖼️ Cómo Agregar Nuevas Imágenes

1. Guarda las fotos o diseños en la carpeta `/images/` (por ejemplo: `images/promocion-noviembre.jpg`).
2. En `data/calendar.json`, dentro de la propiedad `imagenes` de la publicación, escribe la ruta relativa:
   ```json
   "imagenes": [
     "images/promocion-noviembre.jpg"
   ]
   ```
3. Si incluyes más de una imagen en el arreglo, la vista del día mostrará una galería con miniaturas intercambiables.

---

### 🔒 Cambio de PIN o Teléfono de WhatsApp

Puedes modificar el número de WhatsApp y la clave de acceso editando directamente `data/calendar.json`:
- `"whatsapp": "51936574554"` (con código de país sin signo `+`).
- `"pin": "GP2026"`.
