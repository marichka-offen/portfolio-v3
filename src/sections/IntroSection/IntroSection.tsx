import './IntroSection.scss'
import me from '@/assets/images/me.jpg'
import PeopleIcon from '@/assets/icons/people.svg'
import WorkIcon from '@/assets/icons/columns.svg'
import StarsIcon from '@/assets/icons/stars.svg'
import MagicWand from '@/assets/icons/magic-wand.svg'
import IconLink from '../../components/IconLink/IconLink'

const links = [
    {
        icon: PeopleIcon,
        text: 'Learn fun facts about me',
        link: '/about#fun-facts',
    },
    {
        icon: WorkIcon,
        text: 'Browse my work history',
        link: '/about#work-history',
    },
    {
        icon: StarsIcon,
        text: 'Checkout my projects',
        link: '#projects',
    },
    {
        icon: MagicWand,
        text: 'See random talents',
        link: '/about#random-talents',
    }
]

export default function IntroSection() {
    return (
        <div className="intro__container">
            <div className="intro__column-left">
                <h1 className="intro__title">Marichka Offen</h1>
                <p className="intro__description">There’s something magical about turning messy UI into effortless UX that feels like second nature to users.</p>
                <div className="intro__profile">
                    <img className="intro__profile-image" src={me} alt="Profile" />
                    <div className="intro__profile-info">
                        <h2 className="intro__profile-role">Front end engineer</h2>
                        <h2 className="intro__profile-location">Web developer</h2>
                    </div>
                </div>
            </div>
            <div className="intro__column-right">
                <div className="intro__useful-links">
                    <h3 className="intro__useful-links-title">Where you can start:</h3>
                    <ul>
                        {links.map((linkItem, index) => (
                            <IconLink key={index} icon={linkItem.icon} text={linkItem.text} link={linkItem.link} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}