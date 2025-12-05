import { FaCode, FaRocket } from 'react-icons/fa'
import { MdSpeed } from 'react-icons/md'
import './CurrentStatus.scss'
import QuickContact from '../QuickContact/QuickContact'

export default function CurrentStatus() {
    return (
        <section className="current-status" aria-labelledby="current-status-heading">
            <div
                className="current-status__container"
            >
                <div
                    className="current-status__badge"
                >
                    <span className="current-status__badge-dot"></span>
                    Open to Opportunities
                </div>

                <h2 id="current-status-heading" className="current-status__heading">
                    Let's Connect
                </h2>

                <p className="current-status__text">
                    I'm looking for a team that values accessibility, performance, and thoughtful UX.
                    If you need a developer who brings technical expertise and design sensibility to every project,
                    let's connect.
                </p>

                <div className="current-status__tags">
                    <span className="current-status__tag">
                        <FaCode className="current-status__tag-icon" />
                        React & TypeScript
                    </span>
                    <span className="current-status__tag">
                        <FaRocket className="current-status__tag-icon" />
                        Accessibility-Focused
                    </span>
                    <span className="current-status__tag">
                        <MdSpeed className="current-status__tag-icon" />
                        Performance Optimization
                    </span>
                </div>
            </div>

            <QuickContact />
        </section>
    )
}