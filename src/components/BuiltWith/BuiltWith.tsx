import './BuiltWith.scss'

/**
 * BuiltWith - A meta section showing what makes this portfolio special.
 *
 * This component is purely presentational - no state needed!
 * It's a good example of when a React component can just return JSX
 * without any hooks, effects, or state management.
 *
 * REACT CONCEPT: Presentational vs Container Components
 *
 * Presentational components:
 * - Focus on how things look
 * - Receive data via props
 * - Don't manage state
 * - Often just a function returning JSX
 *
 * This is one of those. It just renders static content about the portfolio.
 */
export default function BuiltWith() {
    return (
        <section className="built-with" aria-label="Portfolio technical details">
            <div className="built-with__container">
                <div className="built-with__inner">
                    <span className="built-with__label">This Portfolio:</span>

                    <div className="built-with__stats">
                        <span className="built-with__stat">
                            <span className="built-with__stat-icon" aria-hidden="true">✓</span>
                            <span>WCAG AA Compliant</span>
                        </span>
                        <span className="built-with__stat">
                            <span className="built-with__stat-icon" aria-hidden="true">⌨</span>
                            <span>Fully Keyboard Navigable</span>
                        </span>
                        <span className="built-with__stat">
                            <span className="built-with__stat-icon" aria-hidden="true">🔊</span>
                            <span>Custom Web Audio API</span>
                        </span>
                    </div>

                    <div className="built-with__tech">
                        <span className="built-with__tech-tag">React 19</span>
                        <span className="built-with__tech-tag">TypeScript</span>
                        <span className="built-with__tech-tag">Vite</span>
                        <span className="built-with__tech-tag">SCSS</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
