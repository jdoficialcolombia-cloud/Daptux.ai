# Guía de Deploy a GitHub - Daptux.ai

## 🚀 Instrucciones para Subir a GitHub

### Requisitos Previos
- Git instalado: https://git-scm.com/
- Cuenta en GitHub
- Acceso al repositorio: https://github.com/Daptux/Daptux.ai

---

## 📝 Pasos para el Deploy

### 1. Configurar Git (Primera vez)

```bash
# Configura tu identidad
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### 2. Clonar el Repositorio

```bash
# Navega a donde guardarás el proyecto
cd C:\Users\david\dgl\Documents\Daptux\Daptux_pagina_web

# Clona el repositorio
git clone https://github.com/Daptux/Daptux.ai.git .
```

Si el repositorio está vacío, puedes inicializar uno nuevo:

```bash
git init
git remote add origin https://github.com/Daptux/Daptux.ai.git
```

### 3. Copiar Archivos

Asegúrate de que todos estos archivos están en la carpeta principal:

```
✓ index.html
✓ quoteflow.html
✓ README.md
✓ DEVELOPMENT.md
✓ TESTING.md
✓ CHANGELOG.md
✓ package.json
✓ .gitignore
✓ src/ (carpeta con todos los archivos)
✓ Markdown/ (con tu contenido)
✓ Pronts/ (con especificaciones)
```

### 4. Agregar Archivos a Git

```bash
# Agregar todos los archivos
git add .

# Ver qué se va a agregar
git status
```

### 5. Hacer el Primer Commit

```bash
git commit -m "Restructuración completa de Daptux.ai website"
```

### 6. Hacer Push al Repositorio

```bash
# Push a la rama main
git push -u origin main

# Luego solo necesitarás
git push
```

---

## 🔄 Workflow para Cambios Futuros

### Para agregar cambios nuevos

```bash
# 1. Verifica cambios
git status

# 2. Agrega cambios
git add .

# 3. Commit
git commit -m "Descripción clara del cambio"

# 4. Push
git push
```

### Usando ramas (recomendado)

```bash
# Crear nueva rama
git checkout -b feature/nombre-del-feature

# Hacer cambios...

# Agregar cambios
git add .
git commit -m "Descripción"

# Push a la rama
git push origin feature/nombre-del-feature

# En GitHub: Abrir Pull Request
# Una vez aprobado, merge a main
```

---

## 🌐 Habilitar GitHub Pages

### Para ver la página en vivo (https://daptux.github.io/Daptux.ai)

1. Ve a **Settings** del repositorio
2. En la sección **Pages** (en el menú izquierdo)
3. Selecciona:
   - Source: Deploy from a branch
   - Branch: main / folder: (root)
4. Haz clic en Save
5. Espera 1-2 minutos
6. La página estará disponible en: `https://daptux.github.io/Daptux.ai`

---

## 📋 Checklist Previo al Deploy

Antes de hacer push:

- [ ] Todos los archivos HTML se abren correctamente
- [ ] Los estilos CSS cargan correctamente
- [ ] El JavaScript funciona sin errores (F12 Console)
- [ ] Las traducciones (ES/EN) funcionan
- [ ] QuoteFlow abre y funciona
- [ ] El formulario de contacto funciona
- [ ] Todos los enlaces internos funcionan
- [ ] La página es responsive (prueba en mobile)
- [ ] No hay archivos de desarrollo innecesarios

---

## 🔐 Proteger la Rama Main

### Recomendado para equipos

1. Ve a **Settings** → **Branches**
2. En "Branch protection rules" → **Add rule**
3. Protege la rama "main":
   - Require a pull request before merging
   - Require status checks to pass
   - Include administrators

---

## 📊 Verificar Deployment

Después del push:

```bash
# Ver historial de commits
git log --oneline

# Ver ramas
git branch -a

# Ver estado actual
git status
```

---

## 🐛 Solucionar Problemas

### Error: "fatal: not a git repository"

```bash
# Estás fuera de la carpeta del proyecto
cd C:\Users\david\dgl\Documents\Daptux\Daptux_pagina_web
```

### Error: "rejected ... (non-fast-forward)"

```bash
# Alguien hizo cambios antes que tú
git pull
git push
```

### Error: "remote: Permission denied"

```bash
# Necesitas establecer tus credenciales
git config --global user.name "Tu Usuario"
git config --global user.email "tu@email.com"

# O usar SSH:
git remote set-url origin git@github.com:Daptux/Daptux.ai.git
```

---

## 📚 Recursos Útiles

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

---

## ✅ Verificación Final

Después de hacer push, verifica:

1. **En GitHub.com**
   - [ ] Los archivos están en el repositorio
   - [ ] El README.md se ve correctamente
   - [ ] Hay un commit con el mensaje "Restructuración completa"

2. **En GitHub Pages**
   - [ ] La página carga en `https://daptux.github.io/Daptux.ai`
   - [ ] El diseño se ve correcto
   - [ ] Los botones funcionan
   - [ ] La traducción funciona

---

## 🎉 ¡Listo!

Tu página web de Daptux.ai está ahora en:
- **Repositorio**: https://github.com/Daptux/Daptux.ai
- **Página en vivo**: https://daptux.github.io/Daptux.ai (después de habilitar Pages)

---

**Próximos pasos recomendados:**
1. Agregar dominio personalizado (daptux.ai)
2. Configurar HTTPS (automático con GitHub Pages)
3. Agregar Google Analytics
4. Configurar email para formulario de contacto

---

**Compartimos conocimiento. Creamos tecnología. Transformamos empresas.**
