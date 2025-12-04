import React, { useEffect, useRef, useState } from 'react'
import './BrandMarquee.scss'

interface Brand {
    name: string
    url: string
    logo?: string
}

const brands: Brand[] = [
    { name: 'Leatherology', url: 'https://www.leatherology.com', logo: '/logos/leatherology.svg' },
    { name: 'Elizabeth Arden', url: 'https://www.elizabetharden.com', logo: '/logos/ea.svg' },
    { name: 'Dermaflash', url: 'https://www.dermaflash.com', logo: '/logos/dermaflash.svg' },
    { name: 'Filson', url: 'https://www.filson.com', logo: '/logos/filson.svg' },
    { name: 'Shinola', url: 'https://www.shinola.com', logo: '/logos/shinola.svg' },
    { name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com', logo: '/logos/bn.svg' },
    { name: 'Indigo', url: 'https://www.chapters.indigo.ca', logo: '/logos/indigo.svg' },
    { name: 'Coverstore', url: 'https://www.coverstore.com', logo: '/logos/coverstore.svg' },
    { name: 'BR Home', url: 'https://www.brhome.com', logo: '/logos/brh.svg' },
    { name: 'Glossier', url: 'https://www.glossier.com', logo: '/logos/glossier.svg' },
    { name: 'Birdies', url: 'https://www.birdies.com', logo: '/logos/birdies.svg' },
    { name: 'Magic Spoon', url: 'https://www.magicspoon.com', logo: '/logos/ms.svg' },
    { name: 'Psycho Bunny', url: 'https://www.psychobunny.com', logo: '/logos/pb.svg' },
    { name: 'MoMA', url: 'https://www.moma.org', logo: '/logos/moma.svg' },
    { name: 'Intelligentsia', url: 'https://www.intelligentsiacoffee.com', logo: '/logos/intelli.svg' },
    { name: 'BaubleBar', url: 'https://www.baublebar.com', logo: '/logos/baublebar.svg' },
]

const BrandMarquee: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const marquee = marqueeRef.current
        if (!marquee) return

        // Set up IntersectionObserver to pause when off-screen
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                rootMargin: '100px', // Start animation 100px before visible
                threshold: 0.1
            }
        )

        observer.observe(marquee)

        const trackElements = marquee.querySelectorAll('.brand-marquee__track')

        trackElements.forEach((track) => {
            const trackElement = track as HTMLElement
            const firstSet = trackElement.querySelector('.brand-marquee__set')
            if (firstSet) {
                // Reduce clones from 3 to 1 for better performance
                for (let i = 0; i < 1; i++) {
                    const clone = firstSet.cloneNode(true) as HTMLElement
                    trackElement.appendChild(clone)
                }
            }
        })

        return () => observer.disconnect()
    }, [])

    const togglePause = () => {
        setIsPaused(!isPaused)
    }

    return (
        <section className="brand-marquee">
            <div className="brand-marquee__container">
                <h2 className="brand-marquee__title">Brands I've Contributed To</h2>
                <p className="brand-marquee__subtitle">
                    Worked on e-commerce platforms and digital experiences across retail, beauty, and lifestyle brands
                </p>

                <button
                    className="brand-marquee__control"
                    onClick={togglePause}
                    aria-label={isPaused ? 'Play brand carousel' : 'Pause brand carousel'}
                    aria-pressed={isPaused}
                >
                    {isPaused ? (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                    ) : (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                        </svg>
                    )}
                    <span className="brand-marquee__control-text">
                        {isPaused ? 'Play' : 'Pause'}
                    </span>
                </button>

                <div
                    className={`brand-marquee__wrapper ${isPaused || !isVisible ? 'brand-marquee__wrapper--paused' : ''}`}
                    ref={marqueeRef}
                >
                    <div className="brand-marquee__track brand-marquee__track--forward">
                        <div className="brand-marquee__set">
                            {brands.slice(0, 8).map((brand, index) => (
                                <a
                                    key={`forward-${index}`}
                                    href={brand.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="brand-marquee__item"
                                    aria-label={`Visit ${brand.name} website`}
                                >
                                    {brand.logo ? (
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="brand-marquee__logo-img"
                                            onError={(e) => {
                                                // Fallback to text if image fails to load
                                                const target = e.target as HTMLImageElement
                                                target.style.display = 'none'
                                                const textSpan = target.nextElementSibling as HTMLElement
                                                if (textSpan) textSpan.style.display = 'inline'
                                            }}
                                        />
                                    ) : null}
                                    <span
                                        className="brand-marquee__logo-text"
                                        style={{ display: brand.logo ? 'none' : 'inline' }}
                                    >
                                        {brand.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="brand-marquee__track brand-marquee__track--reverse">
                        <div className="brand-marquee__set">
                            {brands.slice(8).map((brand, index) => (
                                <a
                                    key={`reverse-${index}`}
                                    href={brand.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="brand-marquee__item"
                                    aria-label={`Visit ${brand.name} website`}
                                >
                                    {brand.logo ? (
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="brand-marquee__logo-img"
                                            onError={(e) => {
                                                // Fallback to text if image fails to load
                                                const target = e.target as HTMLImageElement
                                                target.style.display = 'none'
                                                const textSpan = target.nextElementSibling as HTMLElement
                                                if (textSpan) textSpan.style.display = 'inline'
                                            }}
                                        />
                                    ) : null}
                                    <span
                                        className="brand-marquee__logo-text"
                                        style={{ display: brand.logo ? 'none' : 'inline' }}
                                    >
                                        {brand.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandMarquee
