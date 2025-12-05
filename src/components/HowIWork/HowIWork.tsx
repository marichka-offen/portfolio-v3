import SectionHeader from '@/components/SectionHeader/SectionHeader'
import './HowIWork.scss'

interface ProcessStep {
    title: string
    description: string
}

const processSteps: ProcessStep[] = [
    {
        title: 'Listen & Clarify',
        description: 'Ask questions that uncover the real problem'
    },
    {
        title: 'Prototype Fast',
        description: 'Build to think, not just to ship'
    },
    {
        title: 'Iterate Thoughtfully',
        description: 'Refine until it feels right'
    },
    {
        title: 'Document Everything',
        description: 'Write for the engineer who comes after'
    }
]

export default function HowIWork() {
    return (
        <section id="how-i-work" className="how-i-work" aria-labelledby="how-i-work-heading">
            <div className="how-i-work__container">
                <SectionHeader
                    id="how-i-work-heading"
                    title="How I Work"
                    subtitle="My approach to building thoughtful, user-centered solutions"
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
