# Capturas de pantalla de PettyPets

Pega aquí las capturas reales de la app. El sitio ya está preparado para mostrarlas.

## Formato

- **Tamaño recomendado:** 1080 × 2340 px (proporción 9:19,5, la del mockup de teléfono).
- **Formato:** WebP, calidad 80–85 (cada captura debería pesar menos de 150 KB).
- **Contenido:** usa mascotas de ejemplo. No muestres correos, nombres reales, códigos de hogar ni la barra de notificaciones con datos personales.
- Modo claro, con la batería y la hora del celular limpias (Android: *Opciones de desarrollador → Modo demostración de la IU del sistema*).

Para convertir de PNG a WebP sin instalar nada, puedes usar [Squoosh](https://squoosh.app) en el navegador.

## Archivos

| Archivo | Pantalla de la app que debe mostrar | ¿Dónde se usa? |
|---|---|---|
| `hero.webp` | **Cuidado**: los 6 indicadores diarios y el Semáforo de condición corporal de una mascota | Mockup del hero en `index.html`. Ya está enlazado: si el archivo no existe, se ve la vista de respaldo. |
| `carnet.webp` | **Carnet**: vacunas con lote y refuerzo, y el botón “QR Veterinario” | Reservado para la ficha de Play Store y futuras secciones |
| `qr.webp` | **Diálogo del QR veterinario** abierto | Ficha de Play Store |
| `auditor.webp` | **Auditar dosis / praxis veterinaria** con un veredicto 🟢 o 🔴 | Ficha de Play Store |
| `semaforo.webp` | **Semáforo “¿Puede comer esto?”** con un resultado (por ejemplo, “uvas”) | Ficha de Play Store |
| `comidas.webp` | **Comidas**: horario del día con gramos por toma | Ficha de Play Store |
| `enfermeria.webp` | **Enfermería**: tomas del día con una dosis bloqueada y quién la dio | Ficha de Play Store |
| `hogar.webp` | **Perfil → Hogar compartido**: miembros y código de invitación (tapa el código) | Ficha de Play Store |
| `tienda.webp` | **Tienda Ideal** con productos y tallas calculadas | Ficha de Play Store y presentación comercial |

> Mientras `hero.webp` no exista, el navegador registra un 404 al cargar el inicio. Es esperado, y desaparece al subir la captura.
