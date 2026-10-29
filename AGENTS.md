# CENS Nº 176

## Arquitectura

Sitio institucional en español de Argentina, construido con TanStack Start, React 19 y TypeScript estricto. Es una única página con navegación por anclas, desplegables nativos y estados locales de interfaz. Se despliega en Netlify con la integración oficial para Vite/TanStack Start.

## Directorios y archivos

- `src/routes/index.tsx`: página principal, navegación adaptable, tarjetas de carreras, checklist, novedades, galería con diálogo, preguntas frecuentes, contacto y mapa.
- `src/routes/__root.tsx`: documento HTML en `es-AR`, metadatos de la institución, favicon y página de error 404. No agregar `og:image`: la plataforma lo suministra.
- `src/data/academic.ts`: planes completos, certificaciones, objetivos, requisitos y preguntas frecuentes con tipos explícitos.
- `src/styles.css`: paleta, tipografía, componentes, diseños adaptables, foco visible y preferencias de movimiento reducido.
- `public/img`: recursos proporcionados por la institución: escudo, fotografías educativas, ateneo, patio y fachada ilustrativa. Servirlos mediante Netlify Image CDN, no como originales de alta resolución. No incorporar recursos ajenos.
- El favicon utiliza el escudo proporcionado, servido mediante Netlify Image CDN; se retiró la marca genérica de libro.
- `src/router.tsx`: configuración de TanStack Router. `src/routeTree.gen.ts` se genera automáticamente; no editarlo manualmente.
- `netlify.toml` y `vite.config.ts`: configuración del despliegue y de la integración con Netlify.

## Convenciones

Usar componentes con nombres PascalCase, identificadores descriptivos y tipos estrictos. Usar importaciones con alias `@/` para módulos de `src`. Mantener las materias en los datos y no duplicarlas en los componentes. La paleta combina azul profundo, dorado, blanco cálido, verde selva y rojo tierra; conservar esta identidad.

Mantener los desplegables nativos `details`/`summary` por su soporte de teclado y su funcionamiento sin JavaScript. Los diálogos usan `showModal()` para conservar la gestión nativa de foco y Escape; devolver el foco sin desplazar la página. Cualquier interacción nueva debe contemplar teclado, nombres accesibles, pantallas pequeñas y movimiento reducido.

## Decisiones importantes

El sitio no procesa inscripciones ni almacena datos personales. El módulo de inscripción enlaza al portal externo SIGI-DES proporcionado por la institución. El checklist es temporal y se reinicia con la página. No hay base de datos, autenticación, formularios ni funciones propios porque el alcance es informativo. Si se incorpora persistencia en el futuro, usar las primitivas de Netlify y leer las habilidades correspondientes; no añadir almacenamiento local ni servicios externos para registros.

No inventar fechas de eventos, disponibilidad de cupos, un número de WhatsApp ni validez nacional. WhatsApp permanece deshabilitado hasta recibir el teléfono oficial. La validez nacional de Informática Empresarial sigue indicada como «en trámite».

Los encabezados muestran «Tecnicatura Superior» y el nombre de la especialidad por separado. Las fotografías y el escudo fueron proporcionados por la institución. La fachada generada por IA permanece identificada como ilustrativa, no como una fotografía verificada. La imagen del patio no debe ampliarse por encima de sus 335 px originales. Las novedades iniciales son información institucional, no eventos ficticios.

La certificación pública declarada de 608 hs contiene materias que suman 576 hs. Conservar la cifra proporcionada y la aclaración hasta obtener confirmación institucional. El mapa es una búsqueda de la dirección facilitada, no un punto verificado en terreno.

## Entorno

Node.js 22 y pnpm. `pnpm dev` usa el puerto 3000; `netlify dev --port 8889` emula la plataforma. El despliegue automático ejecuta el comando de compilación de `netlify.toml`. En sesiones administradas por la plataforma, no ejecutar servidores ni validaciones locales cuando las instrucciones de la tarea los prohíban. Nunca imprimir credenciales ni valores de variables sensibles.
