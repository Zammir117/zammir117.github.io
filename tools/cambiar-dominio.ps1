<#
.SYNOPSIS
  Cambia la URL base del sitio (https://zammir117.github.io) por un dominio propio en todos los archivos.

.EXAMPLE
  .\tools\cambiar-dominio.ps1 -NuevoDominio "https://tudominio.com"

.NOTES
  Reemplaza la URL en canonical, og:url, og:image, twitter:image, JSON-LD, sitemap.xml y robots.txt.
  Escribe en UTF-8 sin BOM. Ejecútalo desde la carpeta pettypets-web.
#>
param(
  [Parameter(Mandatory = $true)][string]$NuevoDominio,
  [string]$DominioActual = 'https://zammir117.github.io'
)

$NuevoDominio = $NuevoDominio.TrimEnd('/')
if ($NuevoDominio -notmatch '^https://') { throw 'El dominio debe empezar por https://' }

$raiz = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)
$archivos = Get-ChildItem -Path $raiz -File | Where-Object { $_.Extension -in '.html', '.xml', '.txt' }

foreach ($f in $archivos) {
  $texto = [System.IO.File]::ReadAllText($f.FullName, $utf8)
  if ($texto.Contains($DominioActual)) {
    [System.IO.File]::WriteAllText($f.FullName, $texto.Replace($DominioActual, $NuevoDominio), $utf8)
    Write-Host "Actualizado: $($f.Name)"
  }
}
Write-Host "Listo. Recuerda crear el archivo CNAME (ver CNAME.example) y actualizar las URLs en las tiendas."
