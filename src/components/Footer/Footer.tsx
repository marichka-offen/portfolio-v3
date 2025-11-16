import { Link } from 'react-router-dom'
import Linkedin from '@/assets/icons/linkedin.svg'
import Github from '@/assets/icons/github.svg'
import './Footer.scss'

export default function Footer() {

    return (
        <footer className="footer">
            <div className='footer__nav'>
                <Link to="/about" className="footer__item">
                    About
                </Link>
                <Link
                    to="/#projects"
                    className="footer__item"
                    onClick={(e) => {
                        if (window.location.hash === "#projects") {
                            e.preventDefault()
                            const el = document.querySelector("#projects")
                            if (el) el.scrollIntoView({ behavior: "smooth" })
                        }
                    }}
                >
                    Projects
                </Link>
                <a href="https://www.linkedin.com/in/marichka-offen/details/recommendations/" target="_blank" className="footer__item">
                    Endorsements<sup>↗</sup>
                </a>
                <a href="mailto:marichka.offen@gmail.com" target="_blank" className="footer__item">
                    Contact<sup>↗</sup>
                </a>
            </div>
            <div className="footer__social-links">
                <a href="https://www.linkedin.com/in/marichka-offen/" target="_blank"><img className="footer__social-link" src={Linkedin} alt="LinkedIn" /></a>
                <a href="https://github.com/marichka-offen" target="_blank"><img className="footer__social-link" src={Github} alt="GitHub" /></a>
            </div>
        </footer>
    )
}