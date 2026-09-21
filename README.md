# Estudio UADE — Diseño Gráfico

Apps de estudio armadas con el material de cada cátedra: resúmenes, flashcards,
cuestionarios, simulacros y juegos. Todo HTML/CSS/JS plano, sin dependencias ni build.

**→ [Abrir](https://maiinev.github.io/estudio-uade-diseno/)**

## Materias

| Materia | Contenido |
|---|---|
| [**Tecnología**](Tecnologia/) | Teoría del color y tecnología digital · 12 unidades, 71 flashcards, 60 preguntas, simulacro con autocorrección y 6 juegos |
| [**Semiótica**](Semiotica/) | El signo, la imagen, el mito y el espacio · 15 unidades, 105 flashcards, 90 preguntas, simulacro con respuestas modelo y 6 juegos |

## Cómo usarlo

- **Online:** entrá al link de arriba. Anda en celular (con gestos de swipe) y en escritorio.
- **Local:** doble clic en `index.html`. No necesita internet ni instalar nada.

El progreso se guarda en el navegador (`localStorage`), así que cada dispositivo lleva el suyo.

## Estructura

```
├── index.html          índice de materias
├── shared/             motor y estilos que comparten todas las materias
│   ├── app.js          navegación, resumen, flashcards, quiz, simulacro, gestos
│   └── style.css
├── Tecnologia/
│   ├── index.html
│   ├── js/data.js      todo el contenido de la materia
│   ├── js/games.js     los juegos propios de la materia
│   ├── img/
│   └── material/       originales de la cátedra
└── Semiotica/          misma estructura
```

Para sumar una materia nueva: copiar la carpeta de una existente, reemplazar
`js/data.js` (incluido su `CONFIG.key`, que aísla el progreso de cada app),
escribir sus juegos en `js/games.js` y agregarla al `index.html` raíz.

Después de tocar cualquier CSS o JS, correr antes de commitear:

```
python tools/bump-cache.py
```

Le cuelga a cada asset el hash de su contenido (`style.css?v=d8c6dbce`) para
que GitHub Pages no sirva la versión cacheada después de un deploy.

---

Material de estudio personal para la carrera de Diseño Gráfico de UADE.
