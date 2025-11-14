import Tag from '../Tag/Tag'
import './SwiperSlideContent.scss'
import type { ProjectData } from "@/types"

interface SwiperSlideContentProps {
    project: ProjectData
}

export default function SwiperSlideContent({ project: { title, color, tags, icon } }: SwiperSlideContentProps) {
    // const handle = title.toLowerCase().split(' ').join('-')
    // const hrefLink = `/work/${handle}`

    return (
        <div className='swiper-slide-content'>
            {/* <a href={hrefLink} className="swiper-slide-content__card" style={{ backgroundColor: color }} >
                <i className={`icon ${icon}`} />
            </a> */}
            <div className="swiper-slide-content__card" style={{ backgroundColor: color }} >
                <i className={`icon ${icon}`} />
            </div>
            <div className="swiper-slide-content__info">
                <h3 className="swiper-slide-content__title">{title}</h3>
                <ul className="swiper-slide-content__tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="swiper-slide-content__tag">
                            <Tag>{tag}</Tag>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}