import Button from '@/components/Button/Button'
import InteractiveCode from '@/components/InteractiveCode/InteractiveCode'
import { ArrowRight } from '@/assets/icons'
import './Hero.scss'

export default function Hero() {

    return (
        <section id="hero" className="hero" data-nav-section="hero">
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
                        I'm a frontend engineer who gets weirdly excited about accessible design systems and finding bugs that hide three layers deep. I build interfaces that don't scare users away — with React, TypeScript, and a lot of thoughtful iteration.
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
                            icon={<ArrowRight />}
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