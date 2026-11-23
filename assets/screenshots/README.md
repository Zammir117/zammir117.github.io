# Capturas de pantalla de PettyPets

Copias procesadas de capturas reales de la app: sin barra de estado y con los datos personales ocultos.
El detalle de cada original, la decisión tomada y las capturas pendientes están en [catalogo.md](catalogo.md).

## Archivos publicados

Cada captura tiene dos tamaños para `srcset`: `-360.webp` (360 × 765) y `-720.webp` (720 × 1530), en WebP con calidad 80.

| Archivo | Pantalla de la app | Dónde se usa |
|---|---|---|
| `cuidado-360/720.webp` | **Cuidado**: perfil de Chester (Rottweiler, 10 kg, 2 vacunas), simulador ±1 mes, botón QR Veterinario y semáforo de condición corporal en verde | Hero (sin `lazy`), galería |
| `carnet-qr-360/720.webp` | **Certificado clínico digital** de Chester con su resumen clínico. El QR está alterado por privacidad | Galería |
| `semaforo-360/720.webp` | **Semáforo “¿Puede comer esto?”**: el aguacate marcado como peligroso, con su explicación | Galería |
| `comidas-360/720.webp` | **Comidas**: plan de 295 g al día en 4 tomas de 74 g y horario “Óptimo” | Galería |
| `enfermeria-360/720.webp` | **Modo Enfermería**: toma pendiente con “Dar dosis”, auditor de dosis y tratamiento activo | Galería |
| `tienda-360/720.webp` | **Tienda Ideal**: alimento recomendado para un Rottweiler de 2 meses con “¿Por qué para Chester?” | Galería |

Peso total de la galería (12 archivos): unos 540 KB. Cada versión de 720 px pesa menos de 80 KB.

## Cómo agregar o reemplazar una captura

1. Guarda el original en `Imagenes para poner en la pagina/` (no se publica).
2. Revisa que no tenga datos personales: nombres, correos, fotos de personas, códigos de invitación o notificaciones.
3. Recorta la barra de estado y exporta `nombre-360.webp` y `nombre-720.webp` (WebP con calidad 80, 720 px de ancho como máximo).
4. Usa siempre `width`/`height`, `loading="lazy"` (menos en el hero) y un `alt` que describa lo que se ve.

Para convertir sin instalar nada puedes usar [Squoosh](https://squoosh.app). El material para la ficha de Google Play
está fuera del repositorio, en `C:\Users\MSI\Documents\Proyectos\pettypets-store-assets\`.
