# Daptux.ai - Página Web y Cotizador

Bienvenido a Daptux.ai, la solución completa para transformar tu negocio con tecnología.

## 🚀 Características

- **Diseño Moderno**: Interfaz profesional e intuitiva
- **Multiidioma**: Soporte completo para Español e Inglés
- **QuoteFlow**: Sistema de cotización profesional integrado
- **Líneas de Negocio**: Presentación de todas nuestras soluciones verticales
- **Modelo Colaborativo**: Información sobre nuestro modelo de conocimiento compartido
- **Responsive**: Completamente adaptado a todos los dispositivos

## 📁 Estructura del Proyecto

```
Daptux_pagina_web/
├── index.html              # Página principal
├── quoteflow.html          # Cotizador profesional
├── src/
│   ├── css/
│   │   └── main.css        # Estilos principales
│   ├── js/
│   │   ├── i18n.js         # Sistema de traducción
│   │   └── main.js         # Funcionalidad principal
│   ├── assets/             # Imágenes y recursos
│   └── pages/              # Páginas adicionales
├── Markdown/               # Documentación
├── Pronts/                 # Prompts y especificaciones
└── README.md              # Este archivo
```

## 🎨 Identidad de Marca

### Colores principales
- **Azul Primario**: #0066ff
- **Azul Oscuro**: #0052cc
- **Secundario**: #1a1a1a
- **Fondo Claro**: #f8f9fa

### Tipografía
- Font: System fonts (San Francisco, Segoe UI, Roboto)
- H1: 3.5rem
- H2: 2.5rem
- Cuerpo: 1rem

## 🌍 Funcionalidades Principales

### Página Principal
- Hero con CTA
- Servicios ofrecidos
- Líneas de negocio
- Modelo colaborativo
- Formulario de contacto
- Footer completo

### Sistema de Traducción
- ES/EN completamente funcional
- Almacenamiento de preferencia en localStorage
- Dinámico y escalable

### QuoteFlow - Cotizador
Proceso paso a paso:
1. **Datos del Cliente**: Información de la empresa y contacto
2. **Tipo de Solución**: Seleccionar tipo de proyecto y objetivo
3. **Complejidad**: Definir nivel de complejidad y funcionalidades
4. **Resumen**: Revisión final y descarga de cotización

## 💻 Tecnologías Usadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive y moderno
- **JavaScript Vanilla**: Sin dependencias externas
- **localStorage**: Almacenamiento de datos

## 🚀 Cómo Usar

### Localmente
1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo! La página está lista para usar

### Deployment
- Compatible con cualquier servidor web
- Archivos estáticos (no requiere backend)
- Optimizado para rendimiento

## 📝 Contenido desde Markdown

El contenido se extrae de:
- `Markdown/daptux_app_cotizaciones.md` - Especificaciones de QuoteFlow
- `Markdown/Modelo_corporativo.md` - Filosofía colaborativa
- `Markdown/Línea_de_Negocio.md` - Líneas de negocio disponibles

## 📧 Formularios y Datos

### Contacto
Los mensajes se almacenan en localStorage:
```javascript
JSON.parse(localStorage.getItem('daptux_contacts'))
```

### Cotizaciones
Las cotizaciones generadas se almacenan en:
```javascript
JSON.parse(localStorage.getItem('daptux_quotes'))
```

## 🔧 Personalización

### Agregar nuevo idioma
Edita `src/js/i18n.js` y agrega el nuevo idioma al objeto `translations`.

### Cambiar colores
Modifica las variables CSS en `src/css/main.css`:
```css
:root {
  --primary: #0066ff;
  --primary-dark: #0052cc;
  /* ... más variables ... */
}
```

### Agregar nueva sección
1. Agrega HTML en `index.html`
2. Agrega traducciones en `src/js/i18n.js`
3. Agrega estilos en `src/css/main.css`

## 📱 Responsive

Optimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1200px+)

## 📊 Líneas de Negocio

### 1. Daptux Web
Sitios web corporativos con blog, SEO y panel de administración.

### 2. Daptux FlowPay
Plataforma SaaS para gestión de solicitudes de pago y proveedores.

### 3. Daptux Ganadería
Software especializado para control ganadero e inventario.

### 4. Daptux Restaurante
Solución completa para gestión de restaurantes y cafeterías.

## 🤝 Modelo Colaborativo

En Daptux creemos que el conocimiento compartido es el motor de la innovación:
- Reutilizar componentes y soluciones
- Compartir metodologías probadas
- Acceso a casos de éxito
- Crecimiento colectivo

## 📞 Contacto

- 📧 Email: info@daptux.ai
- 🔗 LinkedIn: [Daptux](https://linkedin.com/company/daptux)
- 🐦 Twitter: [@daptux](https://twitter.com/daptux)
- 💻 GitHub: [Daptux](https://github.com/daptux)

## 📄 Licencia

© 2026 Daptux.ai - Todos los derechos reservados

---

**Compartimos conocimiento. Creamos tecnología. Transformamos empresas.**
