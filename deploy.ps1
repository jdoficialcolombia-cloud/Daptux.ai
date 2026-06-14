# Script de Deploy a GitHub - Daptux.ai
# Para ejecutar: .\deploy.ps1
# Requiere: PowerShell 5.0+ y Git instalado

Write-Host "🚀 Iniciando deploy de Daptux.ai a GitHub..." -ForegroundColor Cyan

# 1. Verificar que Git está instalado
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "❌ Git no está instalado." -ForegroundColor Red
    Write-Host "Por favor instala Git desde: https://git-scm.com/" -ForegroundColor Yellow
    exit 1
}

# 2. Cambiar al directorio del script
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath
$projectDir = Get-Location

Write-Host "✓ Directorio del proyecto: $projectDir" -ForegroundColor Green

# 3. Verificar si es un repositorio Git
if (-not (Test-Path ".git")) {
    Write-Host ""
    Write-Host "📦 Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
    git remote add origin https://github.com/Daptux/Daptux.ai.git
    Write-Host "✓ Repositorio inicializado" -ForegroundColor Green
} else {
    Write-Host "✓ Repositorio Git ya existe" -ForegroundColor Green
}

# 4. Configurar Git
$gitUserName = git config user.name
if ([string]::IsNullOrEmpty($gitUserName)) {
    Write-Host ""
    Write-Host "⚙️ Configurando Git..." -ForegroundColor Yellow
    git config user.name "Daptux Team"
    git config user.email "info@daptux.ai"
    Write-Host "✓ Git configurado" -ForegroundColor Green
}

# 5. Mostrar estado
Write-Host ""
Write-Host "📋 Estado actual del repositorio:" -ForegroundColor Cyan
git status

# 6. Agregar archivos
Write-Host ""
Write-Host "➕ Agregando archivos..." -ForegroundColor Yellow
git add .
Write-Host "✓ Archivos agregados" -ForegroundColor Green

# 7. Crear commit
Write-Host ""
Write-Host "💾 Creando commit..." -ForegroundColor Yellow
$commitMessage = "Restructuración completa de Daptux.ai website - Diseño moderno, multiidioma y cotizador integrado"
git commit -m $commitMessage

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Commit creado" -ForegroundColor Green
} else {
    Write-Host "ℹ️ No hay cambios para commitear (ya están en el repositorio)" -ForegroundColor Yellow
}

# 8. Push a GitHub
Write-Host ""
Write-Host "🔄 Enviando a GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ ¡Deploy completado exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 Repositorio: https://github.com/Daptux/Daptux.ai" -ForegroundColor Cyan
    Write-Host "📍 Página web: https://daptux.github.io/Daptux.ai (después de habilitar Pages)" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📝 Próximos pasos:" -ForegroundColor Yellow
    Write-Host "1. Ve a: https://github.com/Daptux/Daptux.ai" -ForegroundColor White
    Write-Host "2. Haz clic en 'Settings' (en la parte superior)" -ForegroundColor White
    Write-Host "3. En el menú izquierdo, haz clic en 'Pages'" -ForegroundColor White
    Write-Host "4. Bajo 'Source', selecciona 'Deploy from a branch'" -ForegroundColor White
    Write-Host "5. Selecciona 'main' como rama" -ForegroundColor White
    Write-Host "6. Haz clic en 'Save'" -ForegroundColor White
    Write-Host "7. ¡Espera 1-2 minutos y visita: https://daptux.github.io/Daptux.ai" -ForegroundColor White
    Write-Host ""
    Write-Host "Verifica el archivo DEPLOY.md para más instrucciones detalladas" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Error durante el push. Verifica:" -ForegroundColor Red
    Write-Host "- Que tengas acceso al repositorio" -ForegroundColor Yellow
    Write-Host "- Que tu token de GitHub esté configurado" -ForegroundColor Yellow
    Write-Host "- Que la rama 'main' exista" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Para más ayuda, ve a: DEPLOY.md" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "¡Compartimos conocimiento. Creamos tecnología. Transformamos empresas!" -ForegroundColor Magenta
