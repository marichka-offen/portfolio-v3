import './Home.scss'

export default function Home() {
    return (
        <div className="home__container">
            <div className="home__column-left">
                <h1 className="home__title">Marichka Offen</h1>
                <p className="home__description">One of my deepest joys comes from turning messy UI into effortless UX that feels like second nature to users.</p>
                <div className="home__profile">
                    <img src="/profile.jpg" alt="Profile" className="home__profile-image" />
                    <div className="home__profile-info">
                        <p className="home__profile-role">Front end engineer</p>
                        <p className="home__profile-location">Web developer</p>
                    </div>
                </div>
            </div>
            <div className="home__column-right">
                <div className="home__useful-links">
                    <h3>Where you can start</h3>
                    <ul>
                        <li><a href="#" className="home__link">Learn fun facts about me</a></li>
                        <li><a href="#" className="home__link">Browse my work history</a></li>
                        <li><a href="#" className="home__link">Read something</a></li>
                        <li><a href="#" className="home__link">Or else</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}