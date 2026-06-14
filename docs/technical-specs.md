# Especificaciones Técnicas - Daptux.ai

## 📐 Especificaciones del Proyecto

### Stack Tecnológico

#### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos y responsive
- **JavaScript (ES6+)** - Sin frameworks externos
- **localStorage** - Almacenamiento local

#### Características
- **Multiidioma**: Sistema i18n (ES/EN)
- **Responsive**: Mobile-first approach
- **PWA Ready**: Puede convertirse en Progressive Web App
- **Standalone**: No requiere dependencias externas

### Navegadores Soportados

| Navegador | Versión Mínima |
|-----------|---|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | 14+ |
| Chrome Mobile | 90+ |

### Requisitos de Performance

| Métrica | Objetivo |
|---------|----------|
| Lighthouse Score | > 90 |
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to Interactive (TTI) | < 3.5s |

---

## 🏗️ Arquitectura

### Estructura de Carpetas

```
src/
├── css/
│   └── main.css           (2500+ líneas)
│   └── [variables CSS]    (colores, tamaños, shadows)
│   └── [componentes]      (botones, cards, forms)
│   └── [responsive]       (media queries)
├── js/
│   ├── i18n.js            (400+ líneas, sistema de traducción)
│   └── main.js            (300+ líneas, lógica de la aplicación)
├── assets/
│   ├── images/            (logos, iconos, screenshots)
│   ├── fonts/             (tipografías personalizadas - futuro)
│   └── videos/            (backgrounds, demos - futuro)
└── pages/
    └── [páginas adicionales - futuro]
```

---

## 🎨 Paleta de Diseño

### Colores Primarios
- **Azul Daptux**: #0066FF
- **Azul Oscuro**: #0052CC
- **Negro**: #1A1A1A

### Colores Secundarios
- **Gris Claro**: #F8F9FA
- **Gris Medio**: #E0E0E0
- **Gris Oscuro**: #666666

### Estados
- **Success**: #10B981 (Verde)
- **Warning**: #F59E0B (Ámbar)
- **Error**: #EF4444 (Rojo)

### Sombras CSS
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow: 0 10px 30px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.15)
```

---

## 📱 Breakpoints Responsive

| Dispositivo | Ancho | Clases |
|-----------|-------|--------|
| Mobile | 320px - 480px | sm |
| Mobile L | 480px - 768px | md |
| Tablet | 768px - 1024px | lg |
| Desktop | 1024px+ | xl |
| Desktop L | 1200px+ | 2xl |

---

## 🌐 API de Traducción (i18n)

### Clase I18nManager

```javascript
// Métodos principales
i18n.setLanguage(lang)      // Cambiar idioma
i18n.t(key)                 // Obtener traducción
i18n.getTranslation(path)   // Obtener por path
i18n.updatePageTranslations() // Actualizar DOM
```

### Estructura de Traducciones

```javascript
translations = {
  es: {
    nav: { home: "...", contact: "..." },
    hero: { title: "...", subtitle: "..." },
    // ... más secciones
  },
  en: {
    nav: { home: "...", contact: "..." },
    // ... traducciones en inglés
  }
}
```

---

## 📋 Módulos de Página

### index.html (Página Principal)

#### Secciones
1. **Header/Navigation** (sticky)
2. **Hero** (gradiente azul)
3. **Services** (grid 4 columnas)
4. **Business Lines** (grid 4 tarjetas)
5. **Collaborative Model** (beneficios)
6. **QuoteFlow CTA**
7. **Contact Form**
8. **Footer**

#### Componentes Reutilizables
- `.button` - Botones (primary/secondary)
- `.card` - Tarjetas
- `.form-group` - Grupos de formulario
- `.grid` - Grid responsive

### quoteflow.html (Cotizador)

#### Pasos (4)
1. **Datos del Cliente**
   - Empresa, contacto, email, teléfono, sector
2. **Tipo de Solución**
   - Checkboxes de tipos de proyecto
   - Objetivo y número de usuarios
3. **Complejidad**
   - Select de complejidad (simple, media, compleja, muy compleja)
   - Checkboxes de funcionalidades (IA, integraciones, seguridad, soporte)
4. **Resumen**
   - Resumen de cotización
   - Descarga en CSV

#### Funcionalidades
- Validación de campos
- Cálculo dinámico de precios
- Almacenamiento en localStorage
- Descarga de cotización

---

## 💾 Almacenamiento Local

### Schema de localStorage

```javascript
// Idioma preferido
localStorage.language = "es" | "en"

// Contactos recibidos
localStorage.daptux_contacts = [
  {
    name: string,
    email: string,
    company: string,
    phone: string,
    message: string,
    timestamp: ISO string
  }
]

// Cotizaciones generadas
localStorage.daptux_quotes = [
  {
    empresa: string,
    contacto: string,
    email: string,
    totalEstimado: number,
    fechaGeneracion: string,
    // ... más campos
  }
]
```

---

## 🔐 Seguridad

### Medidas Implementadas
- ✅ Validación de inputs en formularios
- ✅ No se almacenan datos sensibles
- ✅ localStorage es local al navegador
- ✅ HTTPS recomendado para deploy
- ✅ No hay vulnerabilidades OWASP Top 10

### Recomendaciones para Producción
- [ ] Configurar CORS si existe API
- [ ] Implementar rate limiting en backend
- [ ] Usar environment variables para configuración
- [ ] Agregar Cloudflare o WAF
- [ ] Monitoreo de seguridad con Snyk

---

## 📊 SEO Optimización

### Meta Tags
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
```

### Estructura
- ✅ Heading hierarchy correcto (H1, H2, H3)
- ✅ Semantic HTML (header, nav, section, footer)
- ✅ URL amigables
- ✅ Internal linking
- ✅ Mobile-friendly

### Recomendaciones
- [ ] Agregar robots.txt
- [ ] Crear sitemap.xml
- [ ] Configurar Google Search Console
- [ ] Agregar schema.org structured data
- [ ] Setup de Google Analytics

---

## 🚀 Capacidades Futuras

### Corto Plazo
- [ ] Agregar backend (Node.js/Python)
- [ ] Base de datos (PostgreSQL/MongoDB)
- [ ] Email transaccional
- [ ] Autenticación de usuarios
- [ ] Admin panel

### Mediano Plazo
- [ ] API REST
- [ ] Dashboard de analíticas
- [ ] Sistema de pagos (Stripe/PayPal)
- [ ] Chat en vivo
- [ ] Blog/CMS

### Largo Plazo
- [ ] App móvil (React Native/Flutter)
- [ ] Integraciones con CRM
- [ ] Sistema de suscripciones
- [ ] Marketplace de templates

---

## 📈 Métricas y Monitoreo

### Tracking Recomendado
- Google Analytics 4
- Hotjar (heatmaps)
- Sentry (error tracking)
- New Relic (performance)

### Eventos a Registrar
- Page views
- Button clicks (CTA, QuoteFlow)
- Form submissions
- Language changes
- Quote downloads
- Time on page

---

## 🧪 Testing

### Unit Testing (Futuro)
- Jest para JavaScript
- Testing Library para componentes

### E2E Testing (Futuro)
- Cypress o Playwright
- Pruebas de flujos críticos

### Manual Testing
- Pruebas en navegadores reales
- Pruebas en dispositivos móviles
- Pruebas de accesibilidad

---

## 📦 Deployment

### Opciones
1. **GitHub Pages** (recomendado - free)
2. **Vercel** (mejor para Next.js)
3. **Netlify** (otra alternativa)
4. **AWS S3 + CloudFront**
5. **Servidor propio**

### CI/CD (Futuro)
- GitHub Actions
- Automatic deployments
- Testing before merge
- Environment variables

---

## 📝 Documentación

| Archivo | Propósito | Audiencia |
|---------|-----------|-----------|
| README.md | Overview | Todos |
| DEVELOPMENT.md | Guía de desarrollo | Developers |
| TESTING.md | Guía de testing | QA/Testers |
| DEPLOY.md | Instrucciones de deploy | DevOps/Developers |
| CHANGELOG.md | Cambios realizados | Todos |
| technical-specs.md | Especificaciones técnicas | Arquitectos/Leads |

---

## 🎯 KPIs de Éxito

| Métrica | Objetivo |
|---------|----------|
| Page Load Time | < 2 segundos |
| Bounce Rate | < 40% |
| Conversion Rate (QuoteFlow) | > 5% |
| Mobile Traffic | > 50% |
| SEO Ranking | Top 3 en keywords principales |
| User Engagement | > 2 minutos |

---

**Versión**: 1.0  
**Última actualización**: 2026-06-14  
**Responsable**: Daptux Team
