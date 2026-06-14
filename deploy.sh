#!/bin/bash
# Script de Deploy a GitHub - Daptux.ai
# Este script automatiza el proceso de subir la página a GitHub

echo "🚀 Inicializando deploy de Daptux.ai a GitHub..."

# Verificar que Git está instalado
if ! command -v git &> /dev/null
then
    echo "❌ Git no está instalado. Por favor instala Git desde https://git-scm.com/"
    exit 1
fi

# Cambiar al directorio del proyecto
cd "$(dirname "$0")"
PROJECT_DIR=$(pwd)
echo "📁 Directorio del proyecto: $PROJECT_DIR"

# 1. Verificar si es un repositorio Git
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositorio Git..."
    git init
    git remote add origin https://github.com/Daptux/Daptux.ai.git
else
    echo "✓ Repositorio Git ya existe"
fi

# 2. Configurar Git (si no está configurado)
if [ -z "$(git config user.name)" ]; then
    echo "⚙️ Configurando Git..."
    git config user.name "Daptux Team"
    git config user.email "info@daptux.ai"
fi

# 3. Verificar estado
echo ""
echo "📋 Estado actual:"
git status

# 4. Agregar archivos
echo ""
echo "➕ Agregando archivos..."
git add .
echo "✓ Archivos agregados"

# 5. Crear commit
echo ""
echo "💾 Creando commit..."
COMMIT_MESSAGE="Restructuración completa de Daptux.ai website - Diseño moderno, multiidioma y cotizador integrado"
git commit -m "$COMMIT_MESSAGE"

# 6. Push a GitHub
echo ""
echo "🔄 Enviando a GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Deploy completado exitosamente!"
    echo ""
    echo "📍 Repositorio: https://github.com/Daptux/Daptux.ai"
    echo "📍 Página web: https://daptux.github.io/Daptux.ai (después de habilitar Pages)"
    echo ""
    echo "📝 Próximos pasos:"
    echo "1. Ve a: https://github.com/Daptux/Daptux.ai"
    echo "2. Ve a Settings → Pages"
    echo "3. Selecciona 'main' como rama de deploy"
    echo "4. ¡Listo! La página estará disponible en pocos minutos"
else
    echo ""
    echo "❌ Error durante el push. Verifica:"
    echo "- Que tengas acceso al repositorio"
    echo "- Que tu token de GitHub esté configurado"
    echo "- Que la rama 'main' exista"
    exit 1
fi
