import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import './WorkSection.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import 'swiper/css/keyboard'
import SwiperSlideContent from '../../components/SwiperSlideContent/SwiperSlideContent'
import { projectData } from '@/data/projects'

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
                        <SwiperSlideContent project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}