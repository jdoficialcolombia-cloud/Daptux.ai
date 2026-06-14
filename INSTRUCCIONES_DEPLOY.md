# 🚀 INSTRUCCIONES PARA SUBIR A GITHUB

## ⚡ FORMA RÁPIDA (Automatizada)

### En Windows (PowerShell)

1. **Abre PowerShell como Administrador**
   - Click derecho en el ícono de PowerShell
   - Selecciona "Ejecutar como administrador"

2. **Navega a la carpeta del proyecto**
   ```powershell
   cd "C:\Users\david\dgl\Documents\Daptux\Daptux_pagina_web"
   ```

3. **Ejecuta el script de deploy**
   ```powershell
   .\deploy.ps1
   ```

4. **El script automáticamente:**
   - ✅ Inicializa el repositorio Git
   - ✅ Agrega todos los archivos
   - ✅ Crea un commit
   - ✅ Sube a GitHub

5. **¡Listo!** La página estará en GitHub

---

## 🔧 FORMA MANUAL (Paso a Paso)

Si el script no funciona o prefieres hacerlo manualmente:

### Paso 1: Abrir Terminal

**En Windows:**
- Windows + R
- Escribe `cmd` o `powershell`
- Presiona Enter

### Paso 2: Ir a la Carpeta del Proyecto

```bash
cd C:\Users\david\dgl\Documents\Daptux\Daptux_pagina_web
```

### Paso 3: Inicializar Git

```bash
git init
```

### Paso 4: Agregar el Repositorio Remoto

```bash
git remote add origin https://github.com/Daptux/Daptux.ai.git
```

### Paso 5: Configurar Git (Primera vez)

```bash
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

### Paso 6: Agregar Todos los Archivos

```bash
git add .
```

### Paso 7: Crear el Primer Commit

```bash
git commit -m "Restructuración completa de Daptux.ai website"
```

### Paso 8: Enviar a GitHub

```bash
git push -u origin main
```

---

## ✅ Verificar que Todo Funcionó

Después de ejecutar los comandos:

1. **Ve a GitHub**
   ```
   https://github.com/Daptux/Daptux.ai
   ```

2. **Verifica que los archivos estén ahí:**
   - index.html
   - quoteflow.html
   - src/
   - README.md
   - Etc.

3. **Deberías ver un commit con el mensaje**
   ```
   "Restructuración completa de Daptux.ai website"
   ```

---

## 🌐 Habilitar GitHub Pages (Para ver la página en vivo)

Después de subir los archivos:

### Paso 1: Ir a Settings
1. Ve a: https://github.com/Daptux/Daptux.ai
2. Haz clic en **Settings** (esquina superior derecha)

### Paso 2: Buscar Pages
1. En el menú izquierdo, busca **Pages**
2. Haz clic en **Pages**

### Paso 3: Configurar Deploy
1. Bajo **Source**, selecciona **Deploy from a branch**
2. Selecciona rama **main**
3. Selecciona carpeta **(root)**
4. Haz clic en **Save**

### Paso 4: Esperar
- GitHub tardará 1-2 minutos en procesar
- Verás un mensaje: "Your site is published at..."

### Paso 5: Ver la Página
- URL: `https://daptux.github.io/Daptux.ai`
- ¡Tu página estará en vivo! 🎉

---

## 🔑 Problemas Comunes

### Error: "fatal: not a git repository"
**Solución:** Asegúrate de estar en la carpeta correcta
```bash
cd C:\Users\david\dgl\Documents\Daptux\Daptux_pagina_web
```

### Error: "Permission denied"
**Solución:** Asegúrate que Git está instalado
```bash
git --version
```

### Error: "The following untracked working tree files would be overwritten"
**Solución:** Agrega un .gitignore y limpia la carpeta

### Error: "fatal: 'origin' does not appear to be a 'git' repository"
**Solución:** Verifica que agregaste el repositorio remoto correcto
```bash
git remote -v
```

### Error: "Authentication failed"
**Solución:** Usa un token de acceso personal en lugar de contraseña
1. Ve a: https://github.com/settings/tokens
2. Genera un nuevo token
3. Usa ese token como contraseña

---

## 📱 Verificar que Todo Funciona

Una vez que GitHub Pages está habilitado:

1. **Abre tu navegador**
2. **Ve a:** `https://daptux.github.io/Daptux.ai`
3. **Verifica:**
   - ✅ La página se carga
   - ✅ El diseño se ve correcto
   - ✅ Puedes hacer clic en secciones
   - ✅ El botón ES/EN funciona
   - ✅ QuoteFlow abre correctamente

---

## 🎯 Checklist Final

- [ ] Ejecuté el script de deploy (o comandos manuales)
- [ ] No hay errores en la terminal
- [ ] Los archivos están en GitHub
- [ ] Habilité GitHub Pages
- [ ] La página se ve bien en vivo
- [ ] La traducción funciona
- [ ] QuoteFlow abre
- [ ] Formulario de contacto funciona

---

## 📞 Si Necesitas Ayuda

1. **Lee DEPLOY.md** - Guía detallada
2. **Lee DEVELOPMENT.md** - Información técnica
3. **Verifica TESTING.md** - Cómo probar
4. **Ve a docs/technical-specs.md** - Especificaciones

---

## 🚀 ¡Listo!

Una vez completados estos pasos, tu página de Daptux.ai estará:

✅ En GitHub: https://github.com/Daptux/Daptux.ai
✅ En vivo: https://daptux.github.io/Daptux.ai
✅ Actualizable desde GitHub
✅ Segura y respaldada
✅ Lista para dominio personalizado

---

## Siguientes Pasos Recomendados

### 1. Dominio Personalizado (Opcional)
- Compra un dominio (ej: daptux.ai)
- Ve a GitHub Pages settings
- Agrega el dominio personalizado

### 2. Agregar Logos
- Coloca logos en `src/assets/images/`
- Actualiza referencias en HTML

### 3. Configurar Email
- Backend para enviar emails desde contacto
- Usar servicio como SendGrid, Mailgun, etc.

### 4. Agregar Analytics
- Google Analytics
- Hotjar para heatmaps
- Sentry para error tracking

---

**¡Compartimos conocimiento. Creamos tecnología. Transformamos empresas!**

*Daptux.ai - Tu página web está lista* 🎉
