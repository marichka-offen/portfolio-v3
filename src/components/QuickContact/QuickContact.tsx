import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './QuickContact.scss'

export default function QuickContact() {
    return (
        <section className="quick-contact">
            <ul className="quick-contact__links">
                <li className="quick-contact__item">
                    <a
                        href="mailto:marichka.offen@gmail.com"
                        className="quick-contact__link"
                    >
                        <div
                            className="quick-contact__icon"
                        >
                            <HiMail />
                        </div>
                        <span className="quick-contact__label">Email</span>
                    </a>
                </li>

                <li className="quick-contact__item">
                    <a
                        href="https://github.com/marichka-offen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-contact__link"
                    >
                        <div className="quick-contact__icon">
                            <FaGithub />
                        </div>
                        <span className="quick-contact__label">GitHub</span>
                    </a>
                </li>

                <li className="quick-contact__item">
                    <a
                        href="https://www.linkedin.com/in/marichka-offen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-contact__link"
                    >
                        <div className="quick-contact__icon">
                            <FaLinkedin />
                        </div>
                        <span className="quick-contact__label">LinkedIn</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}
