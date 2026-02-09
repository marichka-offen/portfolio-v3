import './Hero.scss'

export default function Hero() {

    return (
        <section className="hero">
            <div className="container hero__grid">
                <div className="hero__content">
                    <div className="hero__badge">
                        <span className="hero__badge-dot" aria-hidden="true" />
                        Available for new projects
                    </div>

                    <h1 className="hero__title">
                        I build <span className="hero__title-accent">accessible</span> web experiences
                    </h1>

                    <p className="hero__description">
                        Frontend engineer specializing in high-performance e-commerce and design systems. 6+ years shipping
                        production code for brands like Rare Beauty, Barnes & Noble, and Stumptown.
                    </p>

                    <div className="hero__stats">
                        <div className="hero__stat">
                            <div className="hero__stat-value">50+</div>
                            <div className="hero__stat-label">Projects shipped</div>
                        </div>
                        <div className="hero__stat">
                            <div className="hero__stat-value">6+</div>
                            <div className="hero__stat-label">Years experience</div>
                        </div>
                        <div className="hero__stat">
                            <div className="hero__stat-value">15+</div>
                            <div className="hero__stat-label">Brands served</div>
                        </div>
                    </div>

                    <div className="hero__cta-group">
                        <a href="#work" className="btn btn--primary">
                            View Case Studies
                            <svg className="btn__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#experience" className="btn btn--secondary">
                            See Experience
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="code-block">
                        <div className="code-block__header">
                            <span className="code-block__dot code-block__dot--red" />
                            <span className="code-block__dot code-block__dot--yellow" />
                            <span className="code-block__dot code-block__dot--green" />
                            <span className="code-block__filename">Portfolio.tsx</span>
                        </div>
                        <div className="code-block__content" aria-live="polite">
                            <div className="code-block__line">
                                <span className="code-block__line-number">1</span>
                                <span className="code-block__keyword">const</span> <span className="code-block__function">Portfolio</span>{' '}
                                <span className="code-block__punctuation">=</span> <span className="code-block__bracket">{'{'}</span>
                            </div>
                            <div className="code-block__line">
                                <span className="code-block__line-number">2</span>
                                <span className="code-block__property">  name</span>
                                <span className="code-block__punctuation">:</span>{' '}
                                <span className="code-block__string code-block__value">"Marichka Offen"</span>
                                <span className="code-block__punctuation">,</span>
                            </div>
                            <div className="code-block__line">
                                <span className="code-block__line-number">3</span>
                                <span className="code-block__property">  role</span>
                                <span className="code-block__punctuation">:</span>{' '}
                                <span className="code-block__string code-block__value">"Frontend Engineer"</span>
                                <span className="code-block__punctuation">,</span>
                            </div>
                            <div className="code-block__line">
                                <span className="code-block__line-number">4</span>
                                <span className="code-block__property">  focus</span>
                                <span className="code-block__punctuation">:</span>{' '}
                                <span className="code-block__string code-block__value">"accessibility"</span>
                                <span className="code-block__punctuation">,</span>
                            </div>
                            <div className="code-block__line">
                                <span className="code-block__line-number">5</span>
                                <span className="code-block__property">  yearsExp</span>
                                <span className="code-block__punctuation">:</span>{' '}
                                <span className="code-block__string code-block__value">6</span>
                                <span className="code-block__punctuation">,</span>
                            </div>
                            <div className="code-block__line">
                                <span className="code-block__line-number">6</span>
                                <span className="code-block__property">  status</span>
                                <span className="code-block__punctuation">:</span>{' '}
                                <span className="code-block__string code-block__value">"open to work"</span>
                                <span className="code-block__punctuation">,</span>
                            </div>
                            <div className="code-block__line">
                                <span className="code-block__line-number">7</span>
                                <span className="code-block__bracket">{'}'}</span>
                                <span className="code-block__cursor" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}