# LKC Asesores

Sitio corporativo de LKC Asesores migrado a Angular 22 con componentes standalone, renderizado en servidor (SSR) y prerenderizado de la página principal.

## Desarrollo

```bash
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200/`.

## Verificación

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
```

La compilación de producción se genera en `dist/lkc-asesores/`.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` prueba, compila y publica automáticamente el sitio cuando se envían cambios a `main`.

En el repositorio de GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación. El workflow calcula automáticamente la ruta base a partir del nombre del repositorio.

## Estructura

- `src/app/components/`: secciones visuales standalone.
- `src/styles.css`: estilos globales y diseño responsive.
- `public/img/`: imágenes públicas.
- `legacy-site/`: copia de la versión original en HTML, CSS y JavaScript.
