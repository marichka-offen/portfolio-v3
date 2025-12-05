import Button from '@/components/Button/Button'
import './Hero.scss'

export default function Hero() {

    return (
        <section className="hero">
            <div className="hero__grid">
                <div
                    className="hero__content"
                >
                    <div className="hero__label">
                        Frontend Developer
                    </div>

                    <h1 className="hero__name">
                        Marichka Offen
                    </h1>

                    <p className="hero__description">
                        I build accessible, performant web experiences with React, TypeScript, and modern design systems. Focused on creating interfaces that are both beautiful and inclusive.
                    </p>

                    <div className="hero__cta-wrapper">
                        <Button
                            href="#featured-projects"
                            variant="primary"
                            size="lg"
                            onClick={(e) => {
                                e?.preventDefault()
                                document.querySelector('#featured-projects')?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }}
                            icon={
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        >
                            View My Work
                        </Button>
                    </div>
                </div>

                <div
                    className="hero__visual"
                >
                    <div className="hero__code-window">
                        <div className="hero__code-header">
                            <div className="hero__code-dots">
                                <span className="hero__code-dot hero__code-dot--close"></span>
                                <span className="hero__code-dot hero__code-dot--minimize"></span>
                                <span className="hero__code-dot hero__code-dot--maximize"></span>
                            </div>
                            <div className="hero__code-title">Portfolio.tsx</div>
                        </div>
                        <div className="hero__code-content">
                            <code className="hero__code">
                                <span className="hero__code-line">
                                    <span className="hero__code-keyword">const</span>{' '}
                                    <span className="hero__code-variable">marichka</span> = {'{'}<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">experienceYears</span>:{' '}
                                    <span className="hero__code-number">6</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">empathy</span>:{' '}
                                    <span className="hero__code-boolean">true</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">communication</span>:{' '}
                                    <span className="hero__code-string">["clear", "warm", "human"]</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">designApproach</span>:{' '}
                                    <span className="hero__code-string">'sharp sense for detail, aesthetics, and user comfort'</span><br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">strength</span>:{' '}
                                    <span className="hero__code-string">'keeps going even when the ground disappears'</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">weakness</span>:{' '}
                                    <span className="hero__code-string">'peppermint mochas'</span>,<br />
                                </span>
                                <span className="hero__code-line">{'}'}</span>
                            </code>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="hero__scroll-indicator"
            >
                <div
                    className="hero__scroll-chevron"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 10L12 15L17 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <span className="hero__scroll-text">Scroll to explore</span>
            </div>
        </section>
    )
}