#!/usr/bin/env python3
"""
Recalcula los ?v= de los CSS y JS de cada materia usando el hash del archivo.

GitHub Pages cachea agresivo: sin esto, después de un deploy el navegador
puede seguir sirviendo el CSS o el JS viejo. Al colgarle el hash del
contenido, cualquier cambio real cambia la URL y el navegador la vuelve a
pedir; si el archivo no cambió, el caché se sigue aprovechando.

Correlo desde la raíz del repo antes de commitear:

    python tools/bump-cache.py
"""
import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Cada materia: la página y sus assets como (href en el HTML, archivo en disco)
PAGES = {
    "Tecnologia/index.html": [
        ("../shared/style.css", "shared/style.css"),
        ("js/data.js", "Tecnologia/js/data.js"),
        ("js/games.js", "Tecnologia/js/games.js"),
        ("../shared/app.js", "shared/app.js"),
    ],
    "Semiotica/index.html": [
        ("../shared/style.css", "shared/style.css"),
        ("js/data.js", "Semiotica/js/data.js"),
        ("js/games.js", "Semiotica/js/games.js"),
        ("../shared/app.js", "shared/app.js"),
    ],
}


def short_hash(path: Path) -> str:
    return hashlib.sha1(path.read_bytes()).hexdigest()[:8]


def main() -> int:
    changed = False
    for page, refs in PAGES.items():
        page_path = ROOT / page
        if not page_path.exists():
            print(f"  ! falta {page}", file=sys.stderr)
            return 1

        html = original = page_path.read_text(encoding="utf-8")
        for href, asset in refs:
            asset_path = ROOT / asset
            if not asset_path.exists():
                print(f"  ! falta {asset}", file=sys.stderr)
                return 1
            version = short_hash(asset_path)
            html = re.sub(
                re.escape(href) + r"(\?v=[0-9a-f]+)?",
                f"{href}?v={version}",
                html,
            )

        if html != original:
            page_path.write_text(html, encoding="utf-8")
            changed = True
            print(f"  actualizado {page}")
        else:
            print(f"  sin cambios {page}")

    print("listo." if changed else "nada que hacer, ya estaba al día.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
