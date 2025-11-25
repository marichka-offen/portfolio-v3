import "./AboutSection.scss"
import { profilePhoto } from '@/assets/images/profilePhoto'
import BrightStar from '@/assets/icons/bright-star.svg'
// import Palette from '@/assets/icons/palette.svg'
import Brain from '@/assets/icons/brain.svg'
import Suitcase from '@/assets/icons/suitcase.svg'
import PageStar from "@/assets/icons/page-star.svg"
import type { IconLink } from "@/types"
import AsideNav from "@/components/AsideNav/AsideNav"

const links: IconLink[] = [
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
        icon: PageStar,
        text: 'Certifications',
        link: '/about#certificates',
    },
    // {
    //     icon: Palette,
    //     text: 'Random talents',
    //     link: '/about#random-talents',
    // }
] as const

const sidebarPhotoSources = Object.entries(profilePhoto.sources)
const sidebarPhotoSizes = '(max-width: 768px) 60vw, 260px'

export default function AboutSection() {
    return (
        <div className="about-section">
            <section className="about-section__content">
                <h1 className="about-section__title">About</h1>
                <div className="about-section__text-content">
                    <p className="about-section__text">Hi, I’m Marichka, a front-end developer with 5+ years of experience crafting thoughtful, user-centered web experiences.</p>

                    <p className="about-section__text">For the past 2.5 years, I’ve specialized in Shopify development, building and refining online stores for brands like Framebridge, Paper Source, Haus Labs, Rare Beauty, Stumptown Coffee Roasters and more. Before that, I worked across various platforms and frameworks. I learn new tech fast and adapt even faster.</p>
                    <p>I’m known for three things:</p>

                    <ul>
                        <li>Precision and problem-solving: I can trace issues to their source, explain them clearly, and offer smart alternatives.</li>
                        <li>Pixel-perfect implementation: I translate Figma designs into seamless, responsive, accessible interfaces.</li>
                        <li>Empathy for the end user: I prioritize comfort, clarity, and flow over shortcuts.</li>
                    </ul>
                    <p className="about-section__text">My background in languages and communication makes collaboration natural. I believe good code should come with good conversation. I also volunteer as a developer and project manager for a nonprofit, because purposeful work fuels me.</p>

                    <p className="about-section__text">If you’re looking for someone reliable, detail-oriented, and genuinely invested in the quality of your project – let’s talk. I’ll bring the skill, the patience, and just the right spark of creativity to make it shine.</p>
                </div>
            </section>
            {/* <div className="about-section__sidebar"> */}
            {/* <div className="about-section__sidebar-content"> */}
            <AsideNav title="Get to know me:" links={links}>
                <picture>
                    {sidebarPhotoSources.map(([format, srcSet]) => (
                        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sidebarPhotoSizes} />
                    ))}
                    <img
                        className="about-section__sidebar-image"
                        src={profilePhoto.img.src}
                        width={profilePhoto.img.w}
                        height={profilePhoto.img.h}
                        alt="Portrait of Marichka being silly"
                        loading="lazy"
                        decoding="async"
                    />
                </picture>
            </AsideNav>
            {/* </div> */}

            {/* <picture>
                    {sidebarPhotoSources.map(([format, srcSet]) => (
                        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sidebarPhotoSizes} />
                    ))}
                    <img
                        className="about-section__sidebar-image"
                        src={profilePhoto.img.src}
                        width={profilePhoto.img.w}
                        height={profilePhoto.img.h}
                        alt="About me image"
                        loading="lazy"
                        decoding="async"
                    />
                </picture> */}
            {/* </div> */}
            {/* <h1 className="about-section__title hide-on-small-desktop hide-on-desktop">About</h1> */}
        </div>
    )
}
