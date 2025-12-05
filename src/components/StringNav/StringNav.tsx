import { useState, useEffect } from 'react'
import './StringNav.scss'

interface Section {
    id: string
    label: string
}

const sections: Section[] = [
    { id: 'featured-projects', label: 'Projects' },
    { id: 'technical-expertise', label: 'Skills' },
    { id: 'current-status', label: 'Contact' },
]

export default function StringNav() {
    const [activeSection, setActiveSection] = useState('hero')
    const [showTopLink, setShowTopLink] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show "Top" link after scrolling past hero
            setShowTopLink(window.scrollY > window.innerHeight * 0.5)

            // Find active section based on scroll position
            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id)
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    // Calculate string length based on distance from active section
    const getStringLength = (sectionId: string) => {
        const activeIndex = sections.findIndex((s) => s.id === activeSection)
        const sectionIndex = sections.findIndex((s) => s.id === sectionId)
        const distance = Math.abs(activeIndex - sectionIndex)

        // Closer sections have shorter strings (more visible)
        if (distance === 0) return '2em' // Active section
        if (distance === 1) return '4em'
        if (distance === 2) return '6em'
        return '8em' // Far sections
    }

    return (
        <>
            {/* Top link - left side */}
            {showTopLink && (
                <a
                    href="#top"
                    onClick={(e) => handleClick(e, 'top')}
                    className="string-nav__link string-nav__link--top"
                    aria-label="Back to top"
                >
                    Top of Article
                </a>
            )}

            {/* Section links - right side */}
            <nav className="string-nav" aria-label="Page sections">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => handleClick(e, section.id)}
                        className={`string-nav__link string-nav__link--section ${
                            activeSection === section.id ? 'string-nav__link--active' : ''
                        }`}
                        style={{ '--string-length': getStringLength(section.id) } as React.CSSProperties}
                        aria-label={`Go to ${section.label} section`}
                        aria-current={activeSection === section.id ? 'true' : undefined}
                    >
                        {section.label}
                    </a>
                ))}
            </nav>
        </>
    )
}
