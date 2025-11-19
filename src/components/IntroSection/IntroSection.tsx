import './IntroSection.scss'
import { profilePhoto } from '@/assets/images/profilePhoto'
import PeopleIcon from '@/assets/icons/people.svg'
import WorkIcon from '@/assets/icons/columns.svg'
import StarsIcon from '@/assets/icons/stars.svg'
import MagicWand from '@/assets/icons/magic-wand.svg'
import type { IconLink } from "@/types"
import AsideNav from '@/components/AsideNav/AsideNav'

const links: IconLink[] = [
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
] as const

const profilePhotoSources = Object.entries(profilePhoto.sources)
const profilePhotoSizes = '(max-width: 768px) 60vw, 320px'

export default function IntroSection() {
    return (
        <div className='horizontal-layout'>
            <section className="intro__column-left">
                <h1 className="intro__title">Marichka Offen</h1>
                <blockquote className="intro__description">There's something magical about turning messy UI into effortless UX that feels like second nature to users.</blockquote>
                <div className="intro__profile">
                    <picture>
                        {profilePhotoSources.map(([format, srcSet]) => (
                            <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={profilePhotoSizes} />
                        ))}
                        <img
                            className="intro__profile-image"
                            src={profilePhoto.img.src}
                            width={profilePhoto.img.w}
                            height={profilePhoto.img.h}
                            alt="Portrait of Marichka being silly"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                        />
                    </picture>
                    <ul className="intro__profile-info">
                        <li className="intro__profile-info-item">Front end engineer</li>
                        <li className="intro__profile-info-item">Web developer</li>
                    </ul>
                </div>
            </section>
            <AsideNav title="Where you can start:" links={links} />
        </div>
    )
}
