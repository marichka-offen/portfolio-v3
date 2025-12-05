import { useState, useEffect } from 'react'
import './StringNav.scss'

interface Section {
    id: string
    label: string
    side: 'left' | 'right'
}

const sections: Section[] = [
    { id: 'hero', label: 'Intro', side: 'right' },
    { id: 'how-i-work', label: 'Process', side: 'right' },
    { id: 'career-timeline', label: 'Timeline', side: 'right' },
    { id: 'featured-projects', label: 'Featured', side: 'right' },
    { id: 'technical-expertise', label: 'Projects', side: 'right' },
    { id: 'current-status', label: 'Contact', side: 'right' },
]

export default function StringNav() {
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const handleScroll = () => {
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
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <nav className="folder-nav" aria-label="Page sections">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleClick(e, section.id)}
                    className={`folder-nav__tab folder-nav__tab--${section.side} ${
                        activeSection === section.id ? 'folder-nav__tab--active' : ''
                    }`}
                    aria-label={`Go to ${section.label} section`}
                    aria-current={activeSection === section.id ? 'true' : undefined}
                >
                    <span className="folder-nav__label">{section.label}</span>
                </a>
            ))}
        </nav>
    )
}
