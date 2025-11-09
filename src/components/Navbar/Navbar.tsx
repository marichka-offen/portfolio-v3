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
            <a href="#" className="nav__item">
                Work
            </a>
            <Link to="/about" className="nav__item">
                About
            </Link>
            <Link to="/blog" className="nav__item">
                Blog
            </Link>
            <a href="#" className="nav__item">
                Contact
            </a>
        </nav>
    )
}