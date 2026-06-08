# G2B Constructora — Sitio web

Sitio corporativo de **G2B Constructora** (Grupo Constructor G2B): infraestructura hidráulica, PTAR y tratamiento de agua, protección hidráulica, redes sanitarias/pluviales y pavimentación.

Construido con **Astro 5 + Tailwind CSS v4**. Dirección de arte editorial con motivo de "plano de ingeniería + agua", sobre la paleta de marca (navy, gris acero, agua, verde eco).

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
npm run preview    # sirve el build
```

## Despliegue (Vercel)

Proyecto estático de Astro. Vercel detecta el framework automáticamente:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`

## Estructura

```
src/
  data/site.ts        Fuente única de datos (✅ validado vs. CV 2026 / ⏳ pendiente del cliente)
  layouts/Base.astro  Layout + SEO + fuentes
  components/         Header, Footer, Icon
  pages/index.astro   Home
  styles/global.css   Sistema de marca y utilidades de arte
public/img/           Logo (navy / blanco)
```

## Pendiente del cliente

Ver [`PENDIENTES-CLIENTE.md`](./PENDIENTES-CLIENTE.md): datos de contacto, casos de éxito, certificaciones, año de fundación, misión/visión, logo vectorial y fotografías reales de obra.
