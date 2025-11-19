import { Link } from "react-router-dom"
import houseIcon from '@/assets/icons/house.svg'
import './Navbar.scss'

export default function Navbar() {

    return (
        <header>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" className="nav__item">
                            <img src={houseIcon} alt="Link to Home page" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav__item">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/#projects"
                            className="nav__item"
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
                    </li>
                    <li className="hide-on-mobile">
                        <a href="https://www.linkedin.com/in/marichka-offen/details/recommendations/" target="_blank" className="nav__item">
                            Endorsements
                            {/* <sup>↗</sup> */}
                        </a>
                    </li>
                    <li>
                        <a href="mailto:marichka.offen@gmail.com" target="_blank" className="nav__item">
                            Contact
                            {/* <sup>↗</sup> */}
                        </a>
                    </li>
                </ul>


            </nav>
        </header>
    )
}