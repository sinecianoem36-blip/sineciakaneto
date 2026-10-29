# CENS Nº 176 — Sitio institucional

Sitio del Centro Educativo de Nivel Secundario Nº 176, en Posadas, Misiones. Presenta las dos tecnicaturas superiores, sus planes por año y certificaciones parciales, requisitos de inscripción, información institucional, una galería de fotografías proporcionadas por la institución, preguntas frecuentes y contacto con mapa.

## Tecnologías

TanStack Start y TanStack Router, React 19, TypeScript, Vite, Tailwind CSS 4, estilos personalizados e íconos Lucide. La integración oficial de Netlify administra el despliegue. Las imágenes estáticas se sirven en tamaños adaptables mediante Netlify Image CDN.

## Desarrollo local

Con Node.js 22 y pnpm instalados:

```bash
pnpm install
pnpm dev
```

La aplicación se abre en el puerto 3000. Para emular también las funciones de la plataforma y Image CDN, con Netlify CLI instalado y el proyecto vinculado:

```bash
netlify dev --port 8889
```

La compilación de producción está configurada en `netlify.toml`; Netlify la ejecuta durante el despliegue y publica `dist/client`.

## Actualizar el contenido

Los planes, las certificaciones, los requisitos y las preguntas frecuentes están centralizados en `src/data/academic.ts`. Los contenidos de novedades, la galería y los datos de contacto están en `src/routes/index.tsx`. La identidad visual se define en `src/styles.css` y los metadatos en `src/routes/__root.tsx`.

No hay un panel administrativo ni se reciben solicitudes de inscripción en este sitio. Los accesos de inscripción llevan al módulo de requisitos, que incluye un enlace al portal externo SIGI-DES (`https://inscripciones.sigi-des.com.ar/`) y una consulta por correo. El portal se abre en una nueva pestaña y se recomienda guardar el comprobante. El checklist es una ayuda temporal: se reinicia al recargar y no representa una inscripción ni almacena documentación personal.

## Recursos visuales

Se utilizan exclusivamente los seis recursos suministrados, trasladados a `public/img` con nombres descriptivos. El escudo institucional identifica el encabezado, el pie y el favicon. Las fotos de aula acompañan las carreras y las novedades; la foto del ateneo se muestra en la portada y en la galería junto con las fotos educativas. Los íconos de interfaz se conservan para orientar la navegación, no como logos o imágenes de relleno.

El módulo institucional reúne la imagen del patio (limitada a su ancho original de 335 px) y la fachada generada por IA, identificada expresamente como ilustrativa y no como una fotografía verificada. Todas las imágenes se sirven mediante Netlify Image CDN, con textos alternativos, proporciones consistentes y tamaños adaptables. La galería ampliada muestra la fotografía completa sin recortarla.

## Información pendiente de la institución

- El botón de WhatsApp se muestra como «En Proceso», sin enlace, porque no se proporcionó un teléfono. Cuando se confirme, reemplazarlo por un enlace a `https://wa.me/` seguido del número oficial completo en formato internacional, sin signos ni espacios.
- La fachada suministrada es una ilustración generada por IA y conserva su aclaración; reemplazarla por una fotografía institucional autorizada cuando esté disponible y actualizar su texto alternativo y leyenda.
- Las tarjetas de novedades reúnen información proporcionada, sin inventar eventos, fechas, cupos ni períodos de inscripción. Reemplazarlas o ampliarlas con anuncios confirmados.
- Se conservó la carga declarada de 608 horas para Operador de Aplicaciones Ofimáticas Multiplataforma, pero las materias detalladas suman 576 horas. Se agregó una aclaración para que la institución confirme la diferencia.
- El mapa busca la dirección proporcionada; conviene verificar el punto que devuelve Google Maps antes de la difusión institucional.

## Dominio

El proyecto queda preparado para alojarse en Netlify. El dominio de NIC.ar y la zona DNS de FreeDNS se vinculan desde la configuración de dominios del sitio en Netlify, usando los registros que indique la plataforma para ese dominio. Este desarrollo no modificó el dominio ni la delegación DNS.
