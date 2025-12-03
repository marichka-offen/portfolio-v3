import React, { useEffect, useRef } from 'react'
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

    useEffect(() => {
        const marquee = marqueeRef.current
        if (!marquee) return

        const trackElements = marquee.querySelectorAll('.brand-marquee__track')

        trackElements.forEach((track) => {
            const trackElement = track as HTMLElement
            const firstSet = trackElement.querySelector('.brand-marquee__set')
            if (firstSet) {
                // Create multiple clones for seamless looping
                for (let i = 0; i < 3; i++) {
                    const clone = firstSet.cloneNode(true) as HTMLElement
                    trackElement.appendChild(clone)
                }
            }
        })
    }, [])

    return (
        <section className="brand-marquee">
            <div className="brand-marquee__container">
                <h2 className="brand-marquee__title">Companies I've Worked With</h2>

                <div className="brand-marquee__wrapper" ref={marqueeRef}>
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
