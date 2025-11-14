import { Link } from "react-router-dom"
import houseIcon from '@/assets/icons/house.svg'
import './Navbar.scss'

export default function Navbar() {

    return (
        <nav className="nav">
            <div className="nav__highlight"></div>
            <Link to="/" className="nav__item">
                <img src={houseIcon} alt="Link to Home page" />
            </Link>
            <Link to="/about" className="nav__item">
                About
            </Link>
            <Link
                to="/#work"
                className="nav__item"
                onClick={(e) => {
                    if (window.location.hash === "#work") {
                        e.preventDefault()
                        const el = document.querySelector("#work")
                        if (el) el.scrollIntoView({ behavior: "smooth" })
                    }
                }}
            >
                Projects
            </Link>
            <a href="https://www.linkedin.com/in/marichka-offen/details/recommendations/" target="_blank" className="nav__item">
                Endorsements<sup>↗</sup>
            </a>
            <a href="mailto:marichka.offen@gmail.com" target="_blank" className="nav__item">
                Contact<sup>↗</sup>
            </a>
        </nav>
    )
}