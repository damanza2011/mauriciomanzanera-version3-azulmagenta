Write-Host "=====================================================================" -ForegroundColor Cyan
Write-Host "   LANZANDO PLATAFORMA WEB MAURICIO MANZANERA JARAMILLO - VERSION 3" -ForegroundColor Magenta
Write-Host "            EDICION AZUL MAGENTA - SOLUCIONES ECOLOGICAS" -ForegroundColor White
Write-Host "=====================================================================" -ForegroundColor Cyan
Write-Host ""
$htmlPath = Join-Path $PSScriptRoot "index.html"
Write-Host "Abriendo $htmlPath en el navegador..." -ForegroundColor Green
Start-Process $htmlPath
Write-Host "Listo. Despliegue local completado." -ForegroundColor Yellow
