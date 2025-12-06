import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './StringNav.scss'

interface Section {
    id: string
    label: string
    side: 'left' | 'right'
}

const homePageSections: Section[] = [
    { id: 'hero', label: 'Intro', side: 'right' },
    { id: 'how-i-work', label: 'Process', side: 'right' },
    { id: 'career-timeline', label: 'Timeline', side: 'right' },
    { id: 'featured-projects', label: 'Featured', side: 'right' },
    { id: 'technical-expertise', label: 'Projects', side: 'right' },
    { id: 'current-status', label: 'Contact', side: 'right' },
]

const caseStudySections: Section[] = [
    { id: 'case-study-hero', label: 'Intro', side: 'right' },
    { id: 'case-study-overview', label: 'Overview', side: 'right' },
    { id: 'case-study-problem', label: 'Problem', side: 'right' },
    { id: 'case-study-challenges', label: 'Challenges', side: 'right' },
    { id: 'case-study-solution', label: 'Solution', side: 'right' },
    { id: 'case-study-results', label: 'Results', side: 'right' },
]

export default function StringNav() {
    const [activeSection, setActiveSection] = useState('')
    const location = useLocation()
    const isCaseStudy = location.pathname.startsWith('/case-studies/')
    const sections = isCaseStudy ? caseStudySections : homePageSections

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.querySelector(`[data-nav-section="${sections[i].id}"]`)
                if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections, location.pathname])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.querySelector(`[data-nav-section="${id}"]`)
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
                    className={`folder-nav__tab folder-nav__tab--${section.side} ${activeSection === section.id ? 'folder-nav__tab--active' : ''
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
