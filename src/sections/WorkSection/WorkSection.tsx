import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import './WorkSection.scss'

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
    color: string,
    tags: string[]
}

const projectData: ProjectData[] = [
    { title: 'Framebridge', color: '#eee1715e', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Stumptown Coffee Roasters', color: "#28201d5e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Rare Beauty', color: "#7f25495e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Haus Labs', color: "#7474745e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Elizabeth Arden', color: "#ba0c2f5e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Leatherology', color: "#0000005e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Dermaflesh', color: "#F469DB5e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Paper Source', color: "#00838d5e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Prefect UI Library', color: "#f5c6cb5e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Prefect Design', color: "#f5c6cb5e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Vue Charts', color: "#f5c6cb5e", tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Nova Ukraine', color: "#f5c6cb5e", tags: ['tag1', 'tag2', 'tag3'] },
]


export default function WorkSection() {
    return (
        <div className="work__container">
            <h2 className="work__title">All work</h2>
            <Swiper
                slidesPerView={'auto'}
                loop={true}
                centeredSlides={true}
                spaceBetween={56}
                className='swiper-carousel'
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <SwiperSlideContent title={project.title} color={project.color} tags={project.tags} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}