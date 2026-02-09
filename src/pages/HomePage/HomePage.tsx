import { brandLogos, builtWithStats, builtWithTech, featuredWork, moreWork, skills, testimonials, timeline } from "@/data/data"
import InteractiveCode from "@/components/InteractiveCode/InteractiveCode"
import { useCallback, useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import './HomePage.scss'

export default function HomePage() {
    const [progress, setProgress] = useState(0)
    const [openTimeline, setOpenTimeline] = useState<Set<string>>(() => new Set(['nova']))
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [showBackToTop, setShowBackToTop] = useState(false)
    const intervalRef = useRef<number | null>(null)
    const location = useLocation()
    const marqueeTrackRef = useRef<HTMLDivElement | null>(null)
    const marqueeSetRef = useRef<HTMLDivElement | null>(null)

    const nextTestimonial = useCallback(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, [])

    const prevTestimonial = useCallback(() => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }, [])

    // Auto-rotate testimonials
    useEffect(() => {
        if (isPaused) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }

        intervalRef.current = window.setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [isPaused])

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setProgress(scrollPercent)
            setShowBackToTop(scrollTop > 400)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (!location.hash) return
        const targetId = location.hash.slice(1)
        const target = document.getElementById(targetId)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [location.hash])

    useEffect(() => {
        const track = marqueeTrackRef.current
        const set = marqueeSetRef.current
        if (!track || !set) return

        const speedPxPerSecond = 80
        const updateMarquee = () => {
            const width = Math.ceil(set.getBoundingClientRect().width)
            if (!width) return
            track.style.setProperty('--marquee-distance', `${width}px`)
            track.style.setProperty('--marquee-duration', `${width / speedPxPerSecond}s`)
        }

        updateMarquee()

        if ('ResizeObserver' in window) {
            const observer = new ResizeObserver(updateMarquee)
            observer.observe(set)
            return () => observer.disconnect()
        }

        window.addEventListener('resize', updateMarquee)
        return () => window.removeEventListener('resize', updateMarquee)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    const handleTimelineToggle = (id: string) => {
        setOpenTimeline((prev) => {
            const next = new Set(prev)
            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }
            return next
        })
    }

    return (
        <div className="revamp">
            <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <nav className="nav" role="navigation" aria-label="Main navigation">
                <div className="container nav__inner">
                    <a href="/" className="nav__logo">
                        Marichka Offen
                    </a>
                    <ul className="nav__links">
                        <li>
                            <a href="#work" className="nav__link">
                                Work
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav__link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="nav__link">
                                Experience
                            </a>
                        </li>
                    </ul>
                    <a href="mailto:marichka.offen@gmail.com" className="nav__cta">
                        Get in Touch
                    </a>
                </div>
            </nav>

            <main id="main-content">
                <section className="hero">
                    <div className="container hero__grid">
                        <div className="hero__content">
                            <div className="hero__badge">
                                <span className="hero__badge-dot" aria-hidden="true" />
                                Available for new projects
                            </div>

                            <h1 className="hero__title">
                                I build <span className="hero__title-accent">accessible</span> web experiences
                            </h1>

                            <p className="hero__description">
                                Frontend engineer specializing in high-performance e-commerce and design systems. 6+ years
                                shipping production code for brands like Rare Beauty, Barnes & Noble, and Stumptown.
                            </p>

                            <div className="hero__stats">
                                <div className="hero__stat">
                                    <div className="hero__stat-value">50+</div>
                                    <div className="hero__stat-label">Projects shipped</div>
                                </div>
                                <div className="hero__stat">
                                    <div className="hero__stat-value">6+</div>
                                    <div className="hero__stat-label">Years experience</div>
                                </div>
                                <div className="hero__stat">
                                    <div className="hero__stat-value">20+</div>
                                    <div className="hero__stat-label">Brands served</div>
                                </div>
                            </div>

                            <div className="hero__cta-group">
                                <a href="#work" className="btn btn--primary">
                                    View Case Studies
                                    <svg
                                        className="btn__icon"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                                <a href="#experience" className="btn btn--secondary">
                                    See Experience
                                </a>
                            </div>
                        </div>

                        <div className="hero__visual">
                            <InteractiveCode />
                        </div>
                    </div>
                </section>

                <section className="brands" aria-label="Brands I've worked with">
                    <div className="brands__label">Shipped code for</div>
                    <div className="brands__track" ref={marqueeTrackRef}>
                        <div className="brands__set" ref={marqueeSetRef}>
                            {brandLogos.map((logo) => (
                                <img key={logo.src} src={logo.src} alt={logo.alt} className="brands__logo" />
                            ))}
                        </div>
                        <div className="brands__set" aria-hidden="true">
                            {brandLogos.map((logo) => (
                                <img key={`${logo.src}-dup`} src={logo.src} alt="" className="brands__logo" />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="work" className="featured">
                    <div className="container">
                        <header className="section-header">
                            <span className="section-label">Featured Work</span>
                            <h2 className="section-title">Selected Case Studies</h2>
                        </header>

                        <div className="bento-grid">
                            {featuredWork.map((card) => (
                                <article key={card.id} className={`bento-card bento-card--${card.size}${card.comingSoon ? ' bento-card--coming-soon' : ''}`}>
                                    {card.comingSoon ? (
                                        <div className="bento-card__image bento-card__image--wip" aria-hidden="true">
                                            <span className="bento-card__wip-icon">🚧</span>
                                        </div>
                                    ) : card.image ? (
                                        <img src={card.image} alt={card.title} className="bento-card__image" loading="lazy" />
                                    ) : (
                                        <div className="bento-card__image" style={{ background: card.gradient }} aria-hidden="true" />
                                    )}
                                    <div className="bento-card__content">
                                        <div className="bento-card__tags">
                                            {card.tags.map((tag) => (
                                                <span key={tag} className="bento-card__tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="bento-card__title">{card.title}</h3>
                                        <p className="bento-card__description">{card.description}</p>
                                        {card.comingSoon ? (
                                            <span className="bento-card__status">Work in progress...</span>
                                        ) : (
                                            <a href={card.link} className="bento-card__link">
                                                View Case Study
                                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>

                        <section className="more-work">
                            <div className="more-work__header">
                                <h3 className="more-work__title">More Work</h3>
                                <span className="more-work__hint">Hover to flip</span>
                            </div>

                            <div className="more-work__grid">
                                {moreWork.map((item) => (
                                    <div key={item.id} className="flip-card" tabIndex={0}>
                                        <div className="flip-card__inner">
                                            <div className="flip-card__front">
                                                <div className={`flip-card__icon flip-card__icon--${item.iconTone}`}>{item.icon}</div>
                                                <h4 className="flip-card__title">{item.title}</h4>
                                                <p className="flip-card__role">{item.role}</p>
                                                <p className="flip-card__teaser">{item.teaser}</p>
                                                <span className="flip-card__flip-hint">↻ Flip for details</span>
                                            </div>
                                            <div className="flip-card__back">
                                                <h4 className="flip-card__back-title">The Story</h4>
                                                <p className="flip-card__description">{item.story}</p>
                                                <div className="flip-card__tags">
                                                    {item.tags.map((tag) => (
                                                        <span key={tag} className="flip-card__tag">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <a href={item.link} className="flip-card__link" target="_blank" rel="noopener noreferrer">
                                                    Visit Site →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </section>

                <section id="about" className="skills">
                    <div className="container">
                        <header className="section-header">
                            <span className="section-label">Expertise</span>
                            <h2 className="section-title">How I Work</h2>
                        </header>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <article key={skill.title} className="skill-card">
                                    <div className="skill-card__icon" aria-hidden="true">
                                        {skill.icon}
                                    </div>
                                    <h3 className="skill-card__title">{skill.title}</h3>
                                    <p className="skill-card__description">{skill.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="container">
                        <header className="section-header">
                            <span className="section-label">Testimonials</span>
                            <h2 className="section-title">What People Say</h2>
                        </header>
                        <div
                            className="testimonials__carousel"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <button
                                className="testimonials__nav testimonials__nav--prev"
                                onClick={prevTestimonial}
                                aria-label="Previous testimonial"
                                type="button"
                            >
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <div className="testimonials__slides">
                                <div
                                    className="testimonials__track"
                                    style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                                >
                                    {testimonials.map((testimonial) => (
                                        <blockquote key={testimonial.id} className="testimonial-card">
                                            <p className="testimonial-card__quote">"{testimonial.quote}"</p>
                                            <footer className="testimonial-card__author">
                                                <div className="testimonial-card__avatar" aria-hidden="true">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div className="testimonial-card__info">
                                                    <div className="testimonial-card__name">{testimonial.name}</div>
                                                    <div className="testimonial-card__title">{testimonial.title}</div>
                                                    <div className="testimonial-card__context">{testimonial.context}</div>
                                                </div>
                                            </footer>
                                        </blockquote>
                                    ))}
                                </div>
                            </div>
                            <button
                                className="testimonials__nav testimonials__nav--next"
                                onClick={nextTestimonial}
                                aria-label="Next testimonial"
                                type="button"
                            >
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div className="testimonials__dots">
                            {testimonials.map((t, i) => (
                                <button
                                    key={t.id}
                                    className={`testimonials__dot${i === activeTestimonial ? ' testimonials__dot--active' : ''}`}
                                    onClick={() => setActiveTestimonial(i)}
                                    aria-label={`Go to testimonial from ${t.name}`}
                                    type="button"
                                />
                            ))}
                        </div>
                        <a
                            href="https://www.linkedin.com/in/marichkaoffen/details/recommendations/"
                            className="testimonials__verify"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Verify on LinkedIn
                        </a>
                    </div>
                </section>

                <section id="experience" className="timeline">
                    <div className="container">
                        <header className="section-header">
                            <span className="section-label">Experience</span>
                            <h2 className="section-title">Career Timeline</h2>
                        </header>
                        <div className="timeline-list">
                            {timeline.map((item) => {
                                const isOpen = openTimeline.has(item.id)
                                return (
                                    <details
                                        key={item.id}
                                        className={`timeline-item${item.highlight ? ' timeline-item--current' : ''}`}
                                        open={isOpen}
                                    >
                                        <div className="timeline-item__dot" aria-hidden="true" />
                                        <summary
                                            className="timeline-item__header"
                                            onClick={(event) => {
                                                event.preventDefault()
                                                handleTimelineToggle(item.id)
                                            }}
                                        >
                                            <div>
                                                <div className="timeline-item__date">{item.date}</div>
                                                <h3 className="timeline-item__title">{item.title}</h3>
                                                <div className="timeline-item__company">{item.company}</div>
                                                {item.subtitle && <div className="timeline-item__subtitle">{item.subtitle}</div>}
                                            </div>
                                            <button
                                                className="timeline-item__toggle"
                                                aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.title}`}
                                                type="button"
                                                onClick={(event) => {
                                                    event.preventDefault()
                                                    event.stopPropagation()
                                                    handleTimelineToggle(item.id)
                                                }}
                                            >
                                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </summary>
                                        <div className="timeline-item__content">
                                            <p className="timeline-item__description">{item.description}</p>
                                            {item.tags && (
                                                <div className="timeline-item__tags">
                                                    {item.tags.map((tag) => (
                                                        <span key={tag} className="timeline-item__tag">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </details>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <div className="cta-card">
                            <h2 className="cta-card__title">Let&apos;s build something great</h2>
                            <p className="cta-card__description">
                                Have a project in mind? I&apos;m currently available for freelance work and full-time opportunities.
                            </p>
                            <div className="cta-card__buttons">
                                <a href="mailto:marichka.offen@gmail.com" className="btn btn--holographic">
                                    Start a Conversation
                                </a>
                                <a
                                    href="/Marichka_Offen_Resume_2026.pdf"
                                    className="btn btn--secondary"
                                    download="Marichka_Offen_Resume_2026.pdf"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section className="built-with">
                <div className="container">
                    <div className="built-with__inner">
                        <span className="built-with__label">This Portfolio:</span>
                        <div className="built-with__stats">
                            {builtWithStats.map((stat) => (
                                <span key={stat} className="built-with__stat">
                                    <span className="built-with__stat-icon" aria-hidden="true">
                                        ✓
                                    </span>
                                    {stat}
                                </span>
                            ))}
                        </div>
                        <div className="built-with__tech">
                            {builtWithTech.map((tech) => (
                                <span key={tech} className="built-with__tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container footer__inner">
                    <p className="footer__copy">© {new Date().getFullYear()} Marichka Offen</p>
                    <nav className="footer__links" aria-label="Footer navigation">
                        <a href="https://github.com/marichka-offen" className="footer__link">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/marichkaoffen" className="footer__link">
                            LinkedIn
                        </a>
                        <a href="mailto:marichka.offen@gmail.com" className="footer__link">
                            Email
                        </a>
                    </nav>
                </div>
            </footer>

            <a href="mailto:marichka.offen@gmail.com" className="floating-cta">
                Hire Me
            </a>

            <button
                className={`back-to-top${showBackToTop ? ' back-to-top--visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
                type="button"
            >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    )
}
