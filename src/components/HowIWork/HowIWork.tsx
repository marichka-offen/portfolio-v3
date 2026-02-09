import SectionHeader from '@/components/SectionHeader/SectionHeader'
import './HowIWork.scss'

interface ProcessStep {
    title: string
    description: string
}

const processSteps: ProcessStep[] = [
    {
        title: 'Debug Deep',
        description: 'Find the root cause, not the symptom'
    },
    {
        title: 'Accessibility First',
        description: 'Build for everyone from the start'
    },
    {
        title: 'Ship Fast, Ship Right',
        description: 'Production-ready code that lasts'
    },
    {
        title: 'Document for Humans',
        description: 'Write for the engineer who comes after'
    }
]

export default function HowIWork() {
    return (
        <section id="how-i-work" className="how-i-work" data-nav-section="how-i-work" aria-labelledby="how-i-work-heading">
            <div className="how-i-work__container">
                <SectionHeader
                    id="how-i-work-heading"
                    title="How I Work"
                    subtitle="Debugging precision, accessibility-first, and code that lasts"
                />

                <div className="how-i-work__venn">
                    {processSteps.map((step, index) => (
                        <div key={step.title} className={`how-i-work__circle how-i-work__circle--${index + 1}`}>
                            <div className="how-i-work__circle-content">
                                <h3 className="how-i-work__step-title">{step.title}</h3>
                                <p className="how-i-work__step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
