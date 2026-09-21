# Estudio Tecnología — UADE Diseño Gráfico

App de estudio offline armada a partir del material de la cátedra.

## Cómo abrirla

Doble clic en **`index.html`**. No necesita internet ni instalar nada.

> Si algún navegador bloquea la carga de los archivos locales, abrí una consola en esta
> carpeta y ejecutá `python -m http.server 8000`, después entrá a `http://localhost:8000`.

## Qué tiene

| Sección | Contenido |
|---|---|
| **Inicio** | Progreso, los 10 datos más preguntados y un plan de estudio en 4 bloques |
| **Resumen** | 12 unidades con tablas, imágenes del apunte, buscador y marcado de "leída" |
| **Flashcards** | 71 tarjetas con giro, filtro por categoría, modo "solo las difíciles" y repetición de las falladas |
| **Glosario** | 65 términos buscables |
| **Cuestionario** | 60 preguntas de opción múltiple con explicación, por módulo o mezcladas |
| **Simulacro** | El examen modelo completo: opción múltiple, completar (autocorregible) y desarrollo con respuesta modelo |
| **Juegos** | Mezclador RGB/CMYK · Ráster o vector · Adiviná los Kelvin · Contrarreloj V/F · Memotest · Ordená la secuencia |
| **Material original** | Los PDF y DOCX de la cátedra + las imágenes del apunte |

## Atajos en Flashcards

- `Espacio` — dar vuelta la tarjeta
- `←` / `→` — anterior / siguiente
- `1` — no la sabía · `2` — la sabía

## Notas

- El progreso (unidades leídas, flashcards dominadas, mejor nota, respuestas del simulacro)
  se guarda en el navegador. El botón **Reiniciar progreso** lo borra.
- Hay tema claro y oscuro con el botón **Tema**.

## Estructura

```
Tecnologia/
├── index.html          la app
├── css/style.css
├── js/data.js          todo el contenido de la materia
├── js/app.js           navegación, resumen, flashcards, quiz, simulacro
├── js/games.js         los 6 juegos
├── img/                imágenes extraídas del apunte del parcial
└── material/           PDF y DOCX originales de la cátedra
```
