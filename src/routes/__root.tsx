import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const siteName = 'CENS Nº 176 | Tu próximo paso empieza acá'
const siteDescription = 'Conocé las tecnicaturas superiores del CENS Nº 176 en Posadas, Misiones. Formación semipresencial en informática, empresa y administración pública.'

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  head: () => ({
    links: [{ rel: 'icon', href: '/.netlify/images?url=/img/escudo-cens176.png&w=64&fm=png', type: 'image/png' }],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'theme-color', content: '#122b43' },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function NotFoundPage() {
  return <main className="not-found"><span className="eyebrow">CENS Nº 176 · POSADAS</span><h1>Este camino no lleva a una página.</h1><p>Volvé al inicio para conocer nuestras carreras y encontrar la información que necesitás.</p><a className="button button-navy" href="/">Volver al inicio</a></main>
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
