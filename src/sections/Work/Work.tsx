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
    { title: 'Framebridge', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Stumptown Coffee Roasters', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Rare Beauty', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Haus Labs', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Elizabeth Arden', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Leatherology', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Dermaflesh', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Paper Source', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Prefect UI Library', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Prefect Design', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Vue Charts', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Nova Ukraine', tags: ['tag1', 'tag2', 'tag3'] },
]


export default function Work() {
    return (
        <div className="work__container">
            <h2 className="work__title">All work</h2>
            <Swiper
                slidesPerView={'auto'}
                loop={true}
                centeredSlides={true}
                spaceBetween={20}
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