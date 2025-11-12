import { useEffect, useState } from "react"
import './SwiperSlideContent.scss'
import type { ProjectData } from "@/types"

interface SwiperSlideContentProps {
    project: ProjectData
}
// const images = import.meta.glob('@/assets/images/projects/*.png', { eager: true })


export default function SwiperSlideContent({ project: { title, color, tags, icon } }: SwiperSlideContentProps) {
    const handle = title.toLowerCase().split(' ').join('-')
    const hrefLink = `/work/${handle}`
    // const imageFallback = (images['/src/assets/images/projects/fallback.png'] as { default: string }).default
    // const [imageSrc, setImageSrc] = useState<string>(imageFallback)

    // useEffect(() => {
    //     const path = `/src/assets/images/projects/${handle}.png`
    //     const match = images[path] as { default: string } | undefined

    //     if (match) {
    //         setImageSrc(match.default)
    //     }

    // }, [title])


    return (
        <div className='swiper-slide-content'>
            <a href={hrefLink} className="swiper-slide-content__card" style={{ backgroundColor: color }} >
                {/* <img src={imageSrc} className="swiper-slide-content__image" /> */}
                <i className={`icon ${icon}`} />
                {/* <div className="swiper-slide-content__backdrop"></div> */}
                {/* <div> ► </div> */}
            </a>
            <div className="swiper-slide-content__info">
                <h3 className="swiper-slide-content__title">{title}</h3>
                <ul className="swiper-slide-content__tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="swiper-slide-content__tag">{tag}</li>
                    ))}
                </ul>
            </div>

            {/*  */}
        </div>
    )
}