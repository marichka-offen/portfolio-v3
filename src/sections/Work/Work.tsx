import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import './Work.scss'

// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/navigation'
// @ts-ignore
import 'swiper/css/pagination'
// @ts-ignore
import 'swiper/css/scrollbar'
// @ts-ignore
import 'swiper/css/a11y'
// @ts-ignore
import 'swiper/css/keyboard'
import SwiperSlideContent from '../../components/SwiperSlideContent/SwiperSlideContent'

interface ProjectData {
    title: string,
    tags: string[]
}

const projectData: ProjectData[] = [
    { title: 'Title 1', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 2', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 3', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 4', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 5', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 8', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 9', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 3', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 4', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Title 5', tags: ['tag1', 'tag2', 'tag3'] }
]


export default function Work() {
    return (
        <div className="work__container">
            <h2 className="work__title">All work</h2>
            <Swiper
                slidesPerView={'auto'}
                loop={true}
                centeredSlides={true}
                spaceBetween={50}
                className='swiper-carousel'
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <SwiperSlideContent title={project.title} tags={project.tags} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}