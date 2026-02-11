import { Link } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found__container">
                <div className="not-found__content">
                    <div className="not-found__badge">
                        <span className="not-found__badge-dot" aria-hidden="true" />
                        Error 404
                    </div>

                    <h1 className="not-found__title">
                        Oops! This page went on <span className="not-found__title-accent">vacation</span>
                    </h1>

                    <p className="not-found__description">
                        Looks like this page decided to quit without giving two weeks notice.
                        Classic developer move. But don't worry—the rest of my portfolio is still here,
                        working hard and definitely not napping.
                    </p>

                    <div className="not-found__suggestions">
                        <p className="not-found__suggestions-title">You might be looking for:</p>
                        <ul className="not-found__list">
                            <li>
                                <Link to="/#work" className="not-found__link">
                                    My work and case studies
                                </Link>
                            </li>
                            <li>
                                <Link to="/#about" className="not-found__link">
                                    What I do and how I work
                                </Link>
                            </li>
                            <li>
                                <Link to="/#experience" className="not-found__link">
                                    My career journey
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="not-found__actions">
                        <Link to="/" className="btn btn--primary">
                            Back to Home
                            <svg
                                className="btn__icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </Link>
                        <a href="mailto:marichka.offen@gmail.com" className="btn btn--secondary">
                            Get in Touch
                        </a>
                    </div>

                    <div className="not-found__ascii" aria-hidden="true">
                        <pre>
{`    ¯\\_(ツ)_/¯`}
                        </pre>
                    </div>
                </div>

                <div className="not-found__visual" aria-hidden="true">
                    <div className="not-found__code">
                        <div className="not-found__code-line">
                            <span className="not-found__code-keyword">const</span>{' '}
                            <span className="not-found__code-variable">page</span>{' '}
                            <span className="not-found__code-operator">=</span>{' '}
                            <span className="not-found__code-function">findPage</span>
                            <span className="not-found__code-punctuation">(</span>
                            <span className="not-found__code-string">'{window.location.pathname}'</span>
                            <span className="not-found__code-punctuation">)</span>
                        </div>
                        <div className="not-found__code-line">
                            <span className="not-found__code-keyword">if</span>{' '}
                            <span className="not-found__code-punctuation">(</span>
                            <span className="not-found__code-operator">!</span>
                            <span className="not-found__code-variable">page</span>
                            <span className="not-found__code-punctuation">)</span>{' '}
                            <span className="not-found__code-punctuation">{'{'}</span>
                        </div>
                        <div className="not-found__code-line not-found__code-line--indent">
                            <span className="not-found__code-keyword">return</span>{' '}
                            <span className="not-found__code-error">&lt;NotFound /&gt;</span>
                        </div>
                        <div className="not-found__code-line">
                            <span className="not-found__code-punctuation">{'}'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
