# Sitio web oficial de PettyPets

Landing comercial y portal legal de la app **PettyPets** (`co.pettypets.app`), publicado con GitHub Pages en
**https://zammir117.github.io**.

- Stack: HTML5 semántico + Tailwind CSS v3.4 (compilado con el Standalone CLI, sin Node) + JavaScript vanilla.
- Sin servidor, sin formularios con backend, sin cookies ni analítica en el sitio.
- Responsable: Johhan Zammir Soto Andrade · Santiago de Cali, Colombia · zammirandrade@gmail.com

## Estructura

```
pettypets-web/
├── index.html              Landing (hero, especies, funcionalidades, empresas, respaldo, quiénes somos, contacto, FAQ)
├── privacidad.html         Política de privacidad (Ley 1581 de 2012)
├── terminos.html           Términos de uso + descargo veterinario + bibliografía
├── eliminar-cuenta.html    Eliminación de cuenta y datos (requisito de Google Play)
├── soporte.html            URL de soporte (requisito de App Store)
├── 404.html                Página de error (rutas absolutas /...)
├── favicon.svg · apple-touch-icon.png
├── robots.txt · sitemap.xml · .nojekyll · .gitignore
├── CNAME.example           Guía para conectar un dominio propio
├── tailwind.config.js · src/input.css
├── tools/cambiar-dominio.ps1
└── assets/
    ├── css/styles.css      CSS COMPILADO (se sube al repositorio: GitHub Pages no compila)
    ├── js/main.js          Menú móvil, año del pie, sombra de la barra
    ├── logo.png            Logo 256 px (copia del logo de la app)
    ├── og-image.png        Imagen para redes 1200×630
    ├── img/                logo-96/192/512.webp e icons/*.webp (íconos de pestañas de la app)
    └── screenshots/        Capturas de la app (ver su README.md)
```

## Compilar Tailwind (PowerShell)

1. Descarga el ejecutable una sola vez, dentro de `pettypets-web` (está en `.gitignore` y no se sube):

   ```powershell
   Invoke-WebRequest -Uri "https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-windows-x64.exe" -OutFile ".\tailwindcss.exe"
   ```

2. Compila el CSS minificado:

   ```powershell
   .\tailwindcss.exe -c .\tailwind.config.js -i .\src\input.css -o .\assets\css\styles.css --minify
   ```

3. Mientras editas, para que se recompile solo:

   ```powershell
   .\tailwindcss.exe -c .\tailwind.config.js -i .\src\input.css -o .\assets\css\styles.css --watch
   ```

Recompila **siempre** que cambies clases en los HTML y sube el `styles.css` resultante.

## Probar en local

```powershell
python -m http.server 8080
# abre http://localhost:8080
```

La página 404 usa rutas absolutas (`/assets/...`): se ve bien en el servidor local y en GitHub Pages, pero no al abrirla con doble clic.

## Capturas y logo

- **Capturas:** guárdalas en `assets/screenshots/` con los nombres de [assets/screenshots/README.md](assets/screenshots/README.md). Basta con `hero.webp` (1080×2340, WebP): el mockup del inicio la muestra automáticamente.
- **Logo:** `assets/logo.png` y `assets/img/logo-*.webp` salen de `res/drawable-nodpi/logo_mascotas.png` de la app. Si cambia el logo, reemplaza esos archivos con los mismos nombres y tamaños.
- **Colores:** el color de marca es el teal de la app (`#00796B`, `brand-600`). Los acentos por módulo usan la paleta de Tailwind (emerald, orange, cyan, red, violet) en tonos 700/800 cuando son texto, para cumplir WCAG AA.

## Cambiar al dominio propio

La URL base `https://zammir117.github.io` aparece en canonical, Open Graph, Twitter, JSON-LD, `sitemap.xml` y `robots.txt`. Para cambiarla en todos los archivos con un solo comando:

```powershell
.\tools\cambiar-dominio.ps1 -NuevoDominio "https://tudominio.com"
```

Después sigue los pasos de [CNAME.example](CNAME.example) (DNS, archivo `CNAME` y *Enforce HTTPS*) y actualiza las URLs en las tiendas.

## Publicar en GitHub Pages (PowerShell)

Con el repositorio `zammir117.github.io` ya creado y vacío en GitHub:

```powershell
cd C:\Users\MSI\Documents\Proyectos\pettypets-web
git init
git branch -M main
git add .
git commit -m "Sitio oficial de PettyPets: landing y páginas legales"
git remote add origin https://github.com/Zammir117/zammir117.github.io.git
git push -u origin main
```

Luego, en GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**
En 1–3 minutos el sitio queda en https://zammir117.github.io.

## Marcadores pendientes

| Marcador | Archivo | Qué hacer |
|---|---|---|
| `{{VERIFICAR}}` (4 veces) | `terminos.html` §14 Bibliografía | Confirmar la versión de la guía WSAVA que usa la app, las resoluciones del ICA, el documento de Fedequinas y la fuente de la fórmula RER |
| `{{URL_PLAY_STORE}}` | `index.html` (comentario del hero) | Al publicar, cambiar el bloque “Próximamente en Google Play” por la insignia oficial enlazada a la ficha |

Datos ya resueltos con el proyecto y tus respuestas: correo `zammirandrade@gmail.com`, ciudad Santiago de Cali, fotos solo locales, Tienda sin afiliados ni comisiones, app gratuita y fecha de vigencia 22 de noviembre de 2026.

## Checklist antes de enviar a las tiendas

### URLs para cada campo

| Consola | Campo | URL |
|---|---|---|
| Google Play Console | Política de privacidad | https://zammir117.github.io/privacidad.html |
| Google Play Console | Seguridad de los datos → URL para eliminar la cuenta | https://zammir117.github.io/eliminar-cuenta.html |
| Google Play Console | Sitio web de la ficha (opcional) | https://zammir117.github.io/ |
| App Store Connect | Privacy Policy URL | https://zammir117.github.io/privacidad.html |
| App Store Connect | Support URL | https://zammir117.github.io/soporte.html |
| App Store Connect | Marketing URL (opcional) | https://zammir117.github.io/ |

### Coherencia de datos (revisar antes de enviar)

- [ ] **Google Analytics → Administrar → Configuración de datos → Retención: 14 meses.** La política lo afirma.
- [ ] Confirmar en la documentación de Firebase que Crashlytics conserva los reportes **90 días**, como dice la política.
- [ ] Formulario **Seguridad de los datos** en Play Console, coherente con `privacidad.html`. Sugerencia a revisar con la página oficial de Firebase “Data disclosure for Google Play”:
  - Información personal → Nombre, Correo electrónico, ID de usuario: recopilados, no compartidos, opcionales (solo con Google). Finalidad: funcionalidad de la app y gestión de la cuenta.
  - Fotos → solo la URL de la foto de perfil de Google. Las fotos de mascotas y carnés **no salen del celular**, así que no son “recopiladas” según la definición de Play.
  - Contenido de la mascota y del hogar (Firestore): declararlo en la categoría que mejor encaje (por ejemplo, “Otro contenido generado por el usuario”). Recopilado, no compartido, opcional.
  - Actividad en la app → Interacciones · Información y rendimiento → Registros de fallos y Diagnóstico · Dispositivo u otros IDs: recopilados, no compartidos, opcionales (interruptor en Perfil). Finalidad: estadísticas.
  - Ubicación aproximada: revisar si Google exige declararla, porque Analytics la deduce de la IP.
  - Cifrado en tránsito: **Sí**. El usuario puede pedir la eliminación: **Sí**.
- [ ] Declaración de **ID de publicidad**: **No** (la app elimina el permiso `AD_ID`).
- [ ] Cambiar en la próxima versión de la app el texto “Compartir estadísticas **anónimas** de uso” por “estadísticas de uso” o “seudónimas”, y actualizar la política interna (`LegalComponents.kt`) para que coincida con la web.
- [ ] Si cambia la app (monetización, publicidad, afiliados, venta a una empresa, nuevos SDK o permisos), actualiza **antes** `privacidad.html`, `eliminar-cuenta.html`, la política interna y el formulario de Play.

### Sitio

- [ ] Subir `assets/screenshots/hero.webp`.
- [ ] Al publicar la app, reemplazar los botones de estado por las insignias oficiales de Google Play y App Store (solo cuando estén publicadas y enlazadas).
- [ ] Revisar Lighthouse en móvil (objetivo ≥ 90 en las 4 categorías) en la URL publicada.
- [ ] Probar los 5 enlaces en vivo y que los botones de correo abran el asunto correcto.

> Los textos legales son una base profesional y no constituyen asesoría jurídica. Revísalos antes de publicar.
