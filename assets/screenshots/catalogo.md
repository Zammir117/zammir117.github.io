# Catálogo de capturas de PettyPets

Fecha: 22 de noviembre de 2026. Las 17 capturas originales (720 × 1600 px, JPEG reenviado por WhatsApp) están en
`Imagenes para poner en la pagina/`. Esa carpeta está en `.gitignore`: los originales **nunca se publican**, porque
varios contienen datos personales. Solo se publican las copias procesadas de esta carpeta.

Proceso aplicado a todas las copias usadas: se recortan los 70 px de la **barra de estado** (operador, hora,
notificaciones y batería), así que quedan en 720 × 1530 px. Las zonas con datos personales se **pixelan y difuminan**
de forma irreversible.

> Las capturas vienen de la app instalada en el celular, **v1.13.0 de la rama `feat/ios-kmp-ready`**, no de la
> 1.13.1 de `main`. La interfaz de estas pantallas es la misma, pero esa build muestra “Fuentes y referencias
> científicas” y no tiene el interruptor de estadísticas de uso.

## Tabla

| # | Archivo original (`WhatsApp Image 2026-11-22 at …`) | Pantalla / módulo | Calidad | Decisión | Motivo |
|---|---|---|---|---|---|
| 0 | `6.51.42 PM (1).jpeg` | Cuidado (desplazada: simulador, QR, condición corporal, vacunas) | Nítida | Descartar | Duplica la #1, que muestra además el perfil de la mascota |
| 1 | `6.51.42 PM.jpeg` | **Cuidado** (perfil de Chester, simulador ±1 mes, QR, semáforo corporal) | Nítida | **Usar → `cuidado`** (hero, galería, Play, og-image) | Es la pantalla que mejor resume la app |
| 2 | `6.51.43 PM (1).jpeg` | Cuidado (ejercicio, cuidados de la raza, recomendados) | Nítida | Descartar | Mezcla tres bloques; la Tienda se ve mejor en la #10 |
| 3 | `6.51.43 PM (2).jpeg` | Cuidado (recomendados, consejo de la etapa, aviso veterinario) | Nítida | Descartar | Redundante con la #10 y la #1 |
| 4 | `6.51.43 PM (3).jpeg` | **Comidas** (plan 295 g, 4 tomas de 74 g, horario óptimo) | Nítida; el botón flotante “+ Comida” tapa parte de una tarjeta | **Usar → `comidas`** | Muestra el cálculo de porciones y la evaluación del horario |
| 5 | `6.51.43 PM (4).jpeg` | Comidas (1 de 4 servidas, comida bloqueada) | Nítida | Descartar | Muestra el **nombre real** (“Servida por …”); la #4 cubre el módulo sin datos personales |
| 6 | `6.51.43 PM (5).jpeg` | **Modo Enfermería** (toma pendiente, Dar dosis, auditor) | Nítida; el tratamiento se llama “prueba” | **Usar → `enfermeria`** con difuminado | Se oculta “Registrado por <nombre real>” |
| 7 | `6.51.43 PM (6).jpeg` | Carnet clínico (QR, vacunas al día, guía de dosis, auditor) | Nítida | Descartar | **Contradicción visible**: dice “Vacunas al día (2 aplicadas)” y luego “Vacunas (0) · Sin vacunas registradas”. Revisar en la app |
| 8 | `6.51.43 PM.jpeg` | Cuidado (indicadores: comida, frecuencia, agua, hidratación, popó) | Nítida | **Usar → `indicadores`** (solo Play) | Muestra los indicadores diarios; en el sitio ya se describen en texto |
| 9 | `6.51.44 PM (1).jpeg` | **Semáforo** (“¿Puede comer esto?”, aguacate peligroso) | Nítida | **Usar → `semaforo`** | Ejemplo claro del semáforo con su explicación |
| 10 | `6.51.44 PM (2).jpeg` | **Tienda Ideal** (alimento para Rottweiler de 2 meses, “¿Por qué para Chester?”) | Nítida | **Usar → `tienda`** | Muestra el motor de recomendación (clave para la venta) |
| 11 | `6.51.44 PM (3).jpeg` | Perfil → **Hogar compartido** (sincronización, código, miembros) | Nítida | **Usar → `hogar-compartido`** (solo Play) con difuminado | Se ocultan el nombre del hogar, el **código de invitación vigente**, la foto y el nombre del miembro. En el sitio no se usa porque los difuminados restan claridad |
| 12 | `6.51.44 PM (4).jpeg` | Perfil (apariencia y módulos activos) | Nítida | Descartar | Pantalla de ajustes, poco atractiva |
| 13 | `6.51.44 PM (5).jpeg` | Perfil (notificaciones y unidades) | Nítida | Descartar | Ajustes; se describen en texto |
| 14 | `6.51.44 PM (6).jpeg` | Perfil (publicidad y tallas, fuentes científicas, copia de seguridad) | Nítida | Descartar | Ajustes. Sirvió para confirmar las fuentes científicas que cita la app |
| 15 | `6.51.44 PM (7).jpeg` | Perfil (copia de seguridad, privacidad, eliminar cuenta) | Nítida | Descartar | Ajustes; reservada por si App Store pide mostrar el borrado de cuenta |
| 16 | `6.51.44 PM.jpeg` | **Certificado clínico digital con QR** | Nítida | **Usar → `carnet-qr`** con QR alterado | El QR codificaba “Tutor: <nombre real>”. Se convirtió en un mosaico ilegible (verificado con un lector de QR) que conserva solo las esquinas de posición |

## Datos personales eliminados

| Copia | Qué se ocultó | Cómo |
|---|---|---|
| Todas | Barra de estado: operador (Movistar), notificaciones, red y batería | Recorte de 70 px |
| `enfermeria` | “Registrado por <nombre real>” | Pixelado + difuminado |
| `carnet-qr` | Contenido del código QR (nombre del tutor) | Mosaico binario ilegible; verificado con OpenCV (no decodifica) |
| `hogar-compartido` (solo Play) | Nombre del hogar, código de invitación vigente, foto de perfil y nombre del miembro | Pixelado + difuminado |

La foto de Chester (el perro) se conserva: es de la mascota y no identifica a ninguna persona.

## Capturas pendientes (recomendadas)

- **Carnet con vacunas registradas**, sin la contradicción de la #7, con 2 o 3 vacunas con lote y refuerzo.
- **Auditor de vacunas** con un veredicto 🟢 o 🔴 (hoy solo se ve el botón).
- **Hogar compartido sin datos reales**: una cuenta de prueba (por ejemplo, “Hogar Demo”) con 2 miembros ficticios, para usarla en el sitio sin difuminados.
- **Comida bloqueada “Servida por …”** con un miembro de prueba: muestra la prevención de dosis dobles.
- **Modo Enfermería con un medicamento realista** en lugar de “prueba”.
- Tomarlas idealmente en un celular a **1080 px de ancho** (no reenviadas por WhatsApp, que las comprime a 720 px) y con la barra de estado limpia (modo demostración de Android).
