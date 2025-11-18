import { Link } from 'react-router-dom'
import Tag from '../Tag/Tag'
import './SwiperSlideContent.scss'
import type { ProjectData } from "@/types"

interface SwiperSlideContentProps {
    project: ProjectData
}

export default function SwiperSlideContent({ project: { title, color, tags, icon, slug } }: SwiperSlideContentProps) {
    return (
        <div className='swiper-slide-content'>
            <Link
                to={`/projects/${slug}`}
                className="swiper-slide-content__card"
                style={{ backgroundColor: color }}
                aria-label={`Read more about ${title}`}
            >
                <i className={`icon ${icon}`} />
            </Link>
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
