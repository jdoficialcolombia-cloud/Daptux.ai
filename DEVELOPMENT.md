# Guía de Desarrollo - Daptux.ai

## 📋 Tabla de Contenidos

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Instalación Local](#instalación-local)
3. [Cómo Contribuir](#cómo-contribuir)
4. [Sistema de Traducción](#sistema-de-traducción)
5. [Agregar Nuevas Características](#agregar-nuevas-características)
6. [Deployment](#deployment)

## Estructura del Proyecto

```
Daptux_pagina_web/
├── index.html                    # Página principal
├── quoteflow.html               # Sistema de cotizaciones
├── README.md                    # Documentación principal
├── package.json                 # Metadatos del proyecto
├── .gitignore                   # Archivos ignorados
│
├── src/
│   ├── css/
│   │   └── main.css            # Estilos principales (CSS moderno)
│   ├── js/
│   │   ├── i18n.js             # Sistema de traducción (ES/EN)
│   │   └── main.js             # Lógica de la aplicación
│   ├── assets/                 # Imágenes, logos, fuentes
│   └── pages/                  # Páginas adicionales (futuro)
│
├── Markdown/
│   ├── daptux_app_cotizaciones.md
│   ├── Modelo_corporativo.md
│   └── Línea_de_Negocio.md
│
└── Pronts/
    └── pront_1.txt             # Especificaciones del proyecto
```

## Instalación Local

### Requisitos
- Navegador web moderno
- (Opcional) Python o Node.js para servidor local

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/Daptux/Daptux.ai.git
cd Daptux.ai
```

2. **Abre la página localmente**
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# O simplemente abre index.html en el navegador
```

3. **Accede a la página**
```
http://localhost:8000
```

## Cómo Contribuir

### Proceso de Contribución

1. **Fork el repositorio**
2. **Crea una rama para tu feature**
   ```bash
   git checkout -b feature/nombre-feature
   ```
3. **Haz tus cambios**
4. **Commit con mensaje claro**
   ```bash
   git commit -m "Describe los cambios realizados"
   ```
5. **Push a tu fork**
   ```bash
   git push origin feature/nombre-feature
   ```
6. **Abre un Pull Request**

## Sistema de Traducción (i18n)

### Cómo funciona

El archivo `src/js/i18n.js` contiene todas las traducciones:

```javascript
const translations = {
  es: { /* Traducciones en español */ },
  en: { /* Traducciones en inglés */ }
}
```

### Agregar nuevo idioma

1. **Edita `src/js/i18n.js`**
2. **Agrega el nuevo idioma al objeto `translations`**

```javascript
const translations = {
  es: { /* ... */ },
  en: { /* ... */ },
  fr: {  // Nuevo idioma
    nav: {
      home: "Accueil",
      // ... más traducciones
    }
  }
}
```

3. **Actualiza los botones de idioma en `index.html`**

### Usar traducciones en HTML

```html
<!-- Elemento que cambia dinámicamente -->
<h1 data-i18n="hero.title">Título por defecto</h1>

<!-- Placeholder de input -->
<input data-i18n-placeholder="contact.form.name" placeholder="Nombre">
```

### Usar traducciones en JavaScript

```javascript
// Obtener traducción
const greeting = i18n.t('hero.title');

// Cambiar idioma
i18n.setLanguage('en');
```

## Agregar Nuevas Características

### Ejemplo: Agregar nueva sección

1. **Agrega HTML en `index.html`**
```html
<section class="section" id="nueva-seccion">
  <div class="container">
    <h2 data-i18n="newSection.title">Título</h2>
    <!-- Contenido -->
  </div>
</section>
```

2. **Agrega traducciones en `src/js/i18n.js`**
```javascript
newSection: {
  title: "Mi Nueva Sección",
  // ... más traducciones
}
```

3. **Agrega estilos en `src/css/main.css`**
```css
#nueva-seccion {
  /* estilos */
}
```

4. **Agrega lógica en `src/js/main.js` si es necesario**

## Deployment

### En GitHub Pages (Recomendado)

1. **Asegúrate de estar en la rama `main`**
   ```bash
   git checkout main
   ```

2. **Haz push de todos los cambios**
   ```bash
   git push origin main
   ```

3. **Habilita GitHub Pages en los settings del repositorio**
   - Ve a Settings → Pages
   - Selecciona "main" como rama
   - La página estará disponible en `https://daptux.github.io/Daptux.ai`

### En servidor personalizado

1. **Sube los archivos via FTP o SSH**
2. **Asegúrate de que `index.html` sea el archivo principal**
3. **Configura HTTPS si es posible**

## Mejores Prácticas

### CSS
- Usa variables CSS en `:root`
- Mobile-first approach
- Nomenclatura BEM cuando sea necesario

### JavaScript
- Usa nombres descriptivos
- Comenta código complejo
- Usa `const` y `let`, evita `var`

### HTML
- Usa atributos `data-` para JavaScript
- Semántica HTML5
- Accesibilidad (alt text, labels, etc.)

### Git
- Commits frecuentes y descriptivos
- Un feature por rama
- Mensajes en español o inglés consistentemente

## Troubleshooting

### La página no carga los estilos
- Verifica que los paths relativos sean correctos
- Abre la consola del navegador (F12) para ver errores

### Las traducciones no funcionan
- Verifica que `i18n.js` esté cargado antes de `main.js`
- Revisa la consola para mensajes de error

### Los datos del formulario no se guardan
- Verifica que localStorage esté habilitado
- Comprueba la consola de desarrollador

## Contacto

Para preguntas o sugerencias:
- 📧 info@daptux.ai
- 🐙 GitHub Issues: Crea un issue en el repositorio

---

**Compartimos conocimiento. Creamos tecnología. Transformamos empresas.**
