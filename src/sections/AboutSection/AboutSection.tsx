import "./AboutSection.scss"
import me from '@/assets/images/me.jpg'
import BrightStar from '@/assets/icons/bright-star.svg'
import Palette from '@/assets/icons/palette.svg'
import Brain from '@/assets/icons/brain.svg'
import Suitcase from '@/assets/icons/suitcase.svg'
import IconLink from "@/components/IconLink/IconLink"

const links = [
    {
        icon: BrightStar,
        text: 'Fun facts',
        link: '/about#fun-facts',
    },
    {
        icon: Brain,
        text: 'Skills',
        link: '/about#skills',
    },
    {
        icon: Suitcase,
        text: 'Work history',
        link: '/about#work-history',
    },
    {
        icon: Palette,
        text: 'Random talents',
        link: '/about#random-talents',
    }
]

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-section__content">
                <h1 className="about-section__title">About</h1>
                <p className="about-section__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident magni quia assumenda, exercitationem modi nulla vero id. Animi enim pariatur necessitatibus architecto numquam aspernatur dignissimos ullam in reprehenderit voluptate.</p>
                <p className="about-section__text">Animi enim pariatur necessitatibus architecto numquam aspernatur dignissimos ullam in reprehenderit voluptate.</p>
                <p className="about-section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum necessitatibus quo quos? Enim doloremque ipsum eius aliquam maxime minus commodi, temporibus harum illo cupiditate suscipit omnis corrupti perferendis, consequuntur quos.</p>
                <p className="about-section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="about-section__text">Animi enim pariatur necessitatibus architecto numquam aspernatur dignissimos ullam in reprehenderit voluptate.</p>
            </div>
            <div className="about-section__sidebar">
                <div className="about-section__sidebar-content">
                    <h3 className="about-section__sidebar-title">Get to know me:</h3>
                    <ul className="about-section__sidebar-list">
                        {links.map((linkItem, index) => (
                            <IconLink key={index} icon={linkItem.icon} text={linkItem.text} link={linkItem.link} />
                        ))}
                    </ul>
                </div>

                <img className="about-section__sidebar-image" src={me} alt="About me image" />
            </div>
        </section>
    )
}