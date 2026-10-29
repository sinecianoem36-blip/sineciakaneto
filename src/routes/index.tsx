import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowRight, Award, BookOpen, CalendarDays, Check, Clock3, Facebook, GraduationCap, Instagram, Mail, MapPin, Menu, MessageCircle, Plus, Sparkles, Users, X } from 'lucide-react'
import { faqs, programs, requirements, type Program } from '@/data/academic'

export const Route = createFileRoute('/')({ component: HomePage })

const navigation = [
  ['inicio', 'Inicio'], ['oferta', 'Oferta Académica'], ['inscripciones', 'Inscripciones'], ['noticias', 'Noticias'], ['galeria', 'Galería'], ['contacto', 'Contacto'],
]
const imageUrl = (file: string, width = 1000) => `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=85`
const imageSrcSet = (file: string) => [480, 800, 1100].map(width => `${imageUrl(file, width)} ${width}w`).join(', ')
const email = 'info@cens176-misiones.edu.ar'
const enrollmentUrl = 'https://inscripciones.sigi-des.com.ar/'
const mapAddress = encodeURIComponent('Gómez Portinho 5168, Posadas, Misiones, Argentina')
const gallery = [
  { file: 'actividad-aula.jpeg', title: 'Aprender en comunidad', description: 'Un encuentro en el aula con estudiantes y una presentación proyectada.', alt: 'Estudiantes del CENS Nº 176 en el aula durante una presentación con proyector y computadora', position: 'center 72%', width: 1226, height: 1544 },
  { file: 'metas-financieras.jpeg', title: 'Aprendizaje en el aula', description: 'Una presentación sobre metas financieras y el intercambio con estudiantes.', alt: 'Estudiantes en el aula frente a una presentación proyectada sobre metas financieras', position: 'center 65%', width: 1280, height: 1525 },
  { file: 'ateneo-administracion-publica.jpeg', title: 'Encuentro de Administración Pública', description: 'Participantes reunidos en el ateneo de Administración Pública del CENS Nº 176.', alt: 'Participantes del ateneo de Administración Pública frente al escenario con el nombre CENS Nº 176', position: 'center 60%', width: 1280, height: 1210 },
]
const news = [
  { category: 'OFERTA ACADÉMICA', title: 'Conocé el nuevo plan de Administración Pública', description: 'Una formación que integra informática, gestión y gobierno electrónico.', photo: gallery[1], target: '#publica', action: 'Explorar el plan', body: 'La Tecnicatura Superior en Informática Aplicada a la Administración Pública se organiza en tres años, con 19 materias anuales y una modalidad semipresencial. Incluye certificaciones parciales para acompañar tu desarrollo profesional. Encontrá el detalle de materias y acreditaciones en Oferta Académica.' },
  { category: 'COMUNIDAD EDUCATIVA', title: 'Tu próximo paso: prepará tu documentación', description: 'Todo lo que necesitás para consultar por tu inscripción.', photo: gallery[0], target: '#inscripciones', action: 'Ver los requisitos', body: 'Prepará fotocopia de D.N.I., partida de nacimiento, título secundario o constancia de título en trámite y dos fotografías 4 × 4. Si realizaste una inscripción online, guardá el comprobante. Consultá las fechas, cupos y el procedimiento por correo institucional: no hay un período de inscripción confirmado en este sitio.' },
  { category: 'VIDA INSTITUCIONAL', title: 'Sigamos conectados, dentro y fuera del aula', description: 'Encontrá las próximas novedades en nuestros canales oficiales.', photo: gallery[2], target: 'https://www.facebook.com/cens176', action: 'Visitar Facebook', body: 'Seguinos en Facebook e Instagram para conocer novedades de la comunidad educativa. Este espacio reúne información institucional; los próximos eventos se publicarán cuando sus fechas estén confirmadas.' },
]

function Brand({ footer = false }: { footer?: boolean }) {
  return <a href="#inicio" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="CENS Nº 176 — Inicio"><img className="brand-logo" src={imageUrl('escudo-cens176.png', 120)} alt="Escudo institucional del CENS Nº 176 de Posadas, Misiones" width="469" height="539" decoding="async" /><span><strong>CENS <span>Nº 176</span></strong><small>POSADAS · MISIONES</small></span></a>
}

function ProgramCard({ program }: { program: Program }) {
  const photo = program.icon === 'business' ? gallery[0] : gallery[1]
  return <article className={`program-card ${program.id}`} id={program.id}>
    <div className="program-visual"><img src={imageUrl(photo.file, 800)} srcSet={imageSrcSet(photo.file)} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1268px) 46vw, 550px" alt={photo.alt} width={photo.width} height={photo.height} style={{ objectPosition: photo.position }} loading="lazy" decoding="async" /><span className="program-tag">{program.badge}</span></div>
    <div className="program-body"><span className="eyebrow">TECNICATURA SUPERIOR</span><h3>{program.shortTitle}</h3><p className="program-description">{program.description}</p><div className="program-meta"><span><CalendarDays size={16} /> 3 años</span><span><Users size={16} /> Semipresencial</span><span><BookOpen size={16} /> {program.subjects} materias</span></div>
      <details className="program-details"><summary>Conocer la carrera y el plan de estudios <ArrowUpRight size={18} /></summary><div className="program-expanded"><h4>Tu formación, paso a paso</h4><p>{program.objective}</p><div className="modality-note"><Clock3 size={18} /><span>2 días por semana · Aproximadamente 4 hs reloj</span></div>{program.resolution && <p className="resolution">{program.resolution}</p>}<h4>Plan de estudios</h4>{program.years.map((subjects, index) => <details className="accordion" key={index}><summary><span>{index + 1}º Año <small>{subjects.length} materias</small></span><Plus size={18} /></summary><ul>{subjects.map(subject => <li key={subject}>{subject}</li>)}</ul></details>)}<h4>Certificaciones {program.id === 'publica' ? 'y acreditaciones parciales' : 'de capacitación laboral'}</h4>{program.certifications.map(certification => <details className="accordion certification" key={certification.title}><summary><span><small>{certification.level}</small>{certification.title}</span><Plus size={18} /></summary>{certification.subjects ? <ul>{certification.subjects.map(subject => <li key={subject}>{subject}</li>)}</ul> : <p>Certificación vinculada a las materias identificadas con el número correspondiente en el plan de estudios.</p>}{certification.note && <p className="certification-note">{certification.note}</p>}</details>)}<a className="button button-navy" href="#inscripciones">Quiero estudiar esta carrera <ArrowRight size={17} /></a></div></details>
    </div>
  </article>
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [selectedNews, setSelectedNews] = useState<number | null>(null)
  const [checkedRequirements, setCheckedRequirements] = useState<number[]>([])
  const dialogRef = useRef<HTMLDialogElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const modalOpen = lightbox !== null || selectedNews !== null

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id) })
    }, { rootMargin: '-18% 0px -55% 0px' })
    navigation.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (modalOpen) {
      previousFocus.current = document.activeElement as HTMLElement
      dialogRef.current?.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      dialogRef.current?.close()
      document.body.style.overflow = ''
      previousFocus.current?.focus({ preventScroll: true })
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  function closeModal() { setLightbox(null); setSelectedNews(null) }

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <div className="topbar"><div className="container"><span><MapPin size={13} /> Posadas, Misiones</span><span>Educación que abre caminos <span className="topbar-divider">|</span><a href={`mailto:${email}`}><Mail size={13} /> {email}</a></span></div></div>
    <header className="header">
      <div className="container header-content">
        <Brand />
        <nav id="mobile-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Navegación principal" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); menuButtonRef.current?.focus() } }}>
          {navigation.map(([id, label]) => <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a href="#inscripciones" className="header-cta" onClick={() => setMenuOpen(false)}>Inscribirme <ArrowUpRight size={16} /></a>
        <button ref={menuButtonRef} type="button" className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
    <main id="contenido">
      <section id="inicio" className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker"><span /> TU FUTURO, MÁS CERCA</div>
            <h1>Tu próximo paso<br /><em>empieza acá.</em></h1>
            <p>Formación superior para transformar tu futuro.<br className="desktop-break" /> Estudiá informática, conectá con nuevas oportunidades<br className="desktop-break" /> y crecé con nosotros en Misiones.</p>
            <div className="hero-actions">
              <a href="#inscripciones" className="button button-gold">Inscribirme ahora <ArrowUpRight size={19} /></a>
              <a href="#oferta" className="hero-secondary">Conocé nuestras carreras <ArrowRight size={17} /></a>
            </div>
            <div className="hero-community"><span className="community-icon"><Users size={22} /></span><span>Una comunidad que te acompaña.<br /><strong>Una formación que te impulsa.</strong></span></div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-ring" />
            <img className="hero-image" src={imageUrl(gallery[2].file, 1100)} srcSet={imageSrcSet(gallery[2].file)} sizes="(max-width: 700px) calc(100vw - 52px), (max-width: 1268px) 46vw, 550px" alt={gallery[2].alt} fetchPriority="high" width={gallery[2].width} height={gallery[2].height} />
            <div className="image-shade" />
            <div className="photo-caption"><span>APRENDER. COMPARTIR. CRECER.</span><small>El futuro se construye juntos.</small></div>
            <span className="image-label">Comunidad del CENS Nº 176</span>
            <div className="hero-note"><span><GraduationCap size={25} /></span><div><strong>Educación con propósito</strong><small>Herramientas para un mundo que cambia.</small></div></div>
          </div>
        </div>
        <span className="hero-bottom-label">CENTRO EDUCATIVO DE NIVEL SECUNDARIO Nº 176</span>
      </section>
      <div className="facts"><div className="container facts-grid"><div><span className="fact-icon"><GraduationCap /></span><span><strong>2 tecnicaturas</strong><small>Elegí tu camino profesional</small></span></div><div><span className="fact-icon"><CalendarDays /></span><span><strong>Modalidad semipresencial</strong><small>2 días por semana</small></span></div><div><span className="fact-icon"><Award /></span><span><strong>Certificaciones parciales</strong><small>Tu formación tiene etapas</small></span></div><div><span className="fact-icon"><MapPin /></span><span><strong>Posadas, Misiones</strong><small>Cerca de vos, cerca de tu futuro</small></span></div></div></div>
      <section className="section institution-section" id="institucion" aria-labelledby="institution-title">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow"><span /> NUESTRA INSTITUCIÓN</span><h2 id="institution-title">El CENS Nº 176,<br />nuestra comunidad.</h2></div><p>Un espacio de formación y encuentro en Posadas, Misiones.</p></div>
          <div className="institution-grid">
            <figure className="institution-facade"><img src={imageUrl('fachada-ilustrativa.jpeg', 1100)} srcSet={imageSrcSet('fachada-ilustrativa.jpeg')} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1268px) 55vw, 700px" alt="Ilustración proporcionada de una fachada con el nombre CENS Nº 176, entrada y ventanas con marcos azules" width="1236" height="864" loading="lazy" decoding="async" /><figcaption>Fachada ilustrativa generada por IA y proporcionada por la institución. No representa una fotografía verificada del edificio.</figcaption></figure>
            <div className="institution-details"><h3>Un lugar para encontrarnos</h3><p>Compartimos los recursos de nuestra institución y las actividades que reúnen a estudiantes y docentes.</p><figure className="institution-courtyard"><img src={imageUrl('patio-institucional.webp', 335)} srcSet={`${imageUrl('patio-institucional.webp', 240)} 240w, ${imageUrl('patio-institucional.webp', 335)} 335w`} sizes="(max-width: 375px) calc(100vw - 40px), 335px" alt="Patio cubierto con aulas en dos plantas y columnas azules, en la imagen proporcionada por la institución" width="335" height="234" loading="lazy" decoding="async" /><figcaption>Patio y espacios educativos · Imagen proporcionada.</figcaption></figure><a href="#contacto" className="text-link">Contacto y ubicación <ArrowUpRight size={18} /></a></div>
          </div>
        </div>
      </section>
      <section className="section offer-section" id="oferta"><div className="container"><div className="section-heading"><div><span className="eyebrow"><span /> OFERTA ACADÉMICA</span><h2>Elegí cómo querés<br className="mobile-break" /> construir tu futuro.</h2></div><p>Dos caminos, muchas oportunidades.<br />Encontrá la formación que va con vos.</p></div><div className="program-grid">{programs.map(program => <ProgramCard key={program.id} program={program} />)}</div><div className="offer-footnote"><Award size={18} /><span>Aprendé, avanzá y acreditá tus conocimientos con <strong>certificaciones laborales parciales.</strong></span></div></div></section>
      <section className="section enrollment-section" id="inscripciones"><div className="container enrollment-layout"><div className="enrollment-copy"><span className="eyebrow"><span /> INSCRIPCIONES & REQUISITOS</span><h2>El primer paso<br />lo das vos.</h2><p>Accedé al portal de inscripción online y prepará tu documentación. Estamos para acompañarte desde el comienzo.</p><div className="enrollment-actions"><a className="button button-navy" href={enrollmentUrl} target="_blank" rel="noopener noreferrer">Inscripción online en SIGI-DES <ArrowUpRight size={18} /></a><a className="text-link" href={`mailto:${email}?subject=${encodeURIComponent('Consulta de inscripción — CENS Nº 176')}`}>Consultar por mi inscripción <ArrowUpRight size={18} /></a></div><small className="enrollment-note">El portal SIGI-DES se abre en una nueva pestaña. Guardá tu comprobante de inscripción.<br />Consultá fechas, cupos y horarios con la institución. Este sitio no recibe ni almacena tus datos.</small></div><div className="requirements-card"><div className="requirements-heading"><span className="document-icon"><BookOpen size={23} /></span><div><h3>Tu documentación, lista.</h3><p>Marcá lo que ya tenés preparado.</p></div></div><div className="requirements-list">{requirements.map((requirement, index) => <label key={requirement} className={checkedRequirements.includes(index) ? 'requirement checked' : 'requirement'}><input type="checkbox" checked={checkedRequirements.includes(index)} onChange={() => setCheckedRequirements(current => current.includes(index) ? current.filter(item => item !== index) : [...current, index])} /><span className="check-box"><Check size={13} /></span><span>{requirement}</span></label>)}</div><div className="requirement-progress" aria-live="polite">{checkedRequirements.length === requirements.length ? '¡Tu checklist está completo! Consultá los próximos pasos.' : `${checkedRequirements.length} de ${requirements.length} requisitos preparados`}</div></div></div></section>
      <section className="section news-section" id="noticias"><div className="container"><div className="section-heading"><div><span className="eyebrow"><span /> NOTICIAS Y EVENTOS</span><h2>La vida en el CENS.</h2></div><a href="https://www.facebook.com/cens176" target="_blank" rel="noopener noreferrer" className="text-link">Seguí nuestras novedades <ArrowUpRight size={18} /></a></div><div className="news-grid">{news.map((item, index) => <article className="news-card" key={item.title}><div className="news-art"><img src={imageUrl(item.photo.file, 800)} srcSet={imageSrcSet(item.photo.file)} sizes="(max-width: 700px) 105px, (max-width: 1268px) 30vw, 400px" alt={item.photo.alt} width={item.photo.width} height={item.photo.height} style={{ objectPosition: item.photo.position }} loading="lazy" decoding="async" /></div><div className="news-body"><span className="eyebrow">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><button className="text-link" onClick={() => setSelectedNews(index)}>Leer más <ArrowUpRight size={17} /></button></div></article>)}</div><p className="section-note">Información institucional. Próximos eventos: fechas a confirmar.</p></div></section>
      <section className="section gallery-section" id="galeria">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow"><span /> NUESTRA COMUNIDAD</span><h2>Un lugar para aprender.<br />Un espacio para crecer.</h2></div>
            <p>Una mirada a lo que nos inspira:<br />las personas, la tecnología y el aprendizaje.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((photo, index) => <button className="gallery-photo" key={photo.title} onClick={() => setLightbox(index)} aria-label={`Ampliar imagen: ${photo.title}`}>
              <img src={imageUrl(photo.file, 800)} srcSet={imageSrcSet(photo.file)} sizes={index === 0 ? '(max-width: 700px) calc(100vw - 40px), (max-width: 1268px) 36vw, 460px' : '(max-width: 700px) calc((100vw - 52px) / 2), (max-width: 1268px) 28vw, 355px'} alt={photo.alt} style={{ objectPosition: photo.position }} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
              <span className="gallery-overlay"><span>{photo.title}</span><ArrowUpRight size={20} /></span>
            </button>)}
          </div>
          <p className="section-note">Fotografías proporcionadas por la institución: actividades en el aula y encuentros de nuestra comunidad.</p>
        </div>
      </section>
      <section className="section faq-section"><div className="container faq-layout"><div><span className="eyebrow"><span /> PREGUNTAS FRECUENTES</span><h2>Las dudas también<br />son un buen comienzo.</h2><p>Encontrá respuestas para dar<br />tu próximo paso con confianza.</p><a href={`mailto:${email}`} className="text-link">Hablemos de tu consulta <ArrowUpRight size={18} /></a></div><div className="faq-list">{faqs.map(faq => <details className="accordion" key={faq.question}><summary>{faq.question}<Plus size={19} /></summary><p>{faq.answer}</p></details>)}</div></div></section>
      <section className="section contact-section" id="contacto"><div className="container"><div className="section-heading"><div><span className="eyebrow"><span /> CONTACTO Y UBICACIÓN</span><h2>Estamos cerca.<br />Acercate a conocernos.</h2></div><p>Centro Educativo de Nivel Secundario Nº 176<br />Tu comunidad educativa en Posadas.</p></div><div className="contact-grid"><div className="contact-card"><div className="contact-line"><span><MapPin size={22} /></span><div><h3>Encontranos en Posadas</h3><p>Calle Gómez Portinho 5168<br />(chacra 32/33) · Posadas, Misiones</p></div></div><div className="contact-line"><span><Mail size={22} /></span><div><h3>Escribinos</h3><a href={`mailto:${email}`}>{email}</a></div></div><button className="button whatsapp-button" disabled><MessageCircle size={19} /> Contactar por WhatsApp (En Proceso)</button><small className="contact-note">El número oficial estará disponible próximamente.<br />Por ahora, podés comunicarte por correo.</small><div className="social-row"><span>Sigamos conectados</span><a href="https://www.facebook.com/cens176" target="_blank" rel="noopener noreferrer" aria-label="Facebook del CENS Nº 176"><Facebook size={20} /></a><a href="https://www.instagram.com/cens176/" target="_blank" rel="noopener noreferrer" aria-label="Instagram del CENS Nº 176"><Instagram size={20} /></a></div></div><div className="map-card"><iframe src={`https://maps.google.com/maps?q=${mapAddress}&z=16&output=embed`} title="Mapa de Gómez Portinho 5168, Posadas, Misiones" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`} target="_blank" rel="noopener noreferrer" className="map-link"><MapPin size={17} /> Ver ubicación en Google Maps <ArrowUpRight size={17} /></a></div></div></div></section>
      <section className="closing-banner"><div className="container"><div><span>UN NUEVO CAMINO TE ESPERA</span><h2>Tu futuro no se queda quieto.<br /><em>Vos tampoco.</em></h2></div><a href="#inscripciones" className="button button-gold">Quiero dar el primer paso <ArrowUpRight size={19} /></a><Sparkles className="closing-decoration" size={170} strokeWidth={0.5} /></div></section>
    </main>
    <footer className="footer"><div className="container footer-main"><div><Brand footer /><p>Educación, tecnología y oportunidades.<br />Desde Misiones, para tu futuro.</p></div><div><h3>Tu próximo paso</h3><a href="#oferta">Oferta Académica</a><a href="#inscripciones">Inscripciones & Requisitos</a><a href="#noticias">Noticias y Eventos</a></div><div><h3>Estamos conectados</h3><a href={`mailto:${email}`}>{email}</a><span>Gómez Portinho 5168 · Posadas</span><div className="footer-socials"><a href="https://www.facebook.com/cens176" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a><a href="https://www.instagram.com/cens176/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CENS Nº 176. Todos los derechos reservados.</span><span>Hecho para nuestra comunidad. <span className="misiones-dot" /> Misiones, Argentina</span></div></footer>
    <dialog ref={dialogRef} className="content-dialog" aria-labelledby="dialog-title" onCancel={event => { event.preventDefault(); closeModal() }} onClick={event => { if (event.target === event.currentTarget) closeModal() }}><button className="dialog-close" aria-label="Cerrar ventana" onClick={closeModal}><X size={23} /></button>{lightbox !== null && <><img className="lightbox-image" src={imageUrl(gallery[lightbox].file, 1280)} alt={gallery[lightbox].alt} width={gallery[lightbox].width} height={gallery[lightbox].height} /><div className="dialog-body"><span className="eyebrow">COMUNIDAD DEL CENS Nº 176</span><h2 id="dialog-title">{gallery[lightbox].title}</h2><p>{gallery[lightbox].description}</p><div className="gallery-controls"><button className="text-link" onClick={() => setLightbox((lightbox + gallery.length - 1) % gallery.length)}>← Anterior</button><span>{lightbox + 1} / {gallery.length}</span><button className="text-link" onClick={() => setLightbox((lightbox + 1) % gallery.length)}>Siguiente →</button></div></div></>}{selectedNews !== null && <div className="dialog-body news-dialog-body"><span className="eyebrow">{news[selectedNews].category}</span><h2 id="dialog-title">{news[selectedNews].title}</h2><p>{news[selectedNews].body}</p><a className="button button-navy" href={news[selectedNews].target} target={news[selectedNews].target.startsWith('https') ? '_blank' : undefined} rel={news[selectedNews].target.startsWith('https') ? 'noopener noreferrer' : undefined} onClick={closeModal}>{news[selectedNews].action}<ArrowUpRight size={18} /></a></div>}</dialog>
  </>
}
