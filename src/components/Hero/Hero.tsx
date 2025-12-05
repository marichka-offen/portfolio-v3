import Button from '@/components/Button/Button'
import InteractiveCode from '@/components/InteractiveCode/InteractiveCode'
import './Hero.scss'

export default function Hero() {

    return (
        <section id="hero" className="hero">
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
                            size="md"
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
                    <InteractiveCode />
                </div>
            </div>
        </section>
    )
}