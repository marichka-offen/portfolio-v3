import { Swiper, SwiperSlide } from 'swiper/react'
import './WorkSection.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import 'swiper/css/keyboard'
import { Navigation, Keyboard, A11y, Scrollbar } from 'swiper/modules'
import SwiperSlideContent from '../../components/SwiperSlideContent/SwiperSlideContent'
import { projectData } from '@/data/projects'

export default function WorkSection() {
    return (
        <section className="work">
            <h2 className="work__title" id="projects">All projects</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    '@0.75': {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                        loop: false,
                        centerInsufficientSlides: true,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                        loop: false,
                    },
                    '@1.50': {
                        slidesPerView: 5,
                        spaceBetween: 50,
                        loop: true,
                    },
                }}
                navigation={true}
                modules={[Scrollbar, Navigation, Keyboard, A11y]}
                centeredSlides={true}
                enabled={true}
                scrollbar={{ draggable: true, snapOnRelease: true }}
                className='swiper-carousel'
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <SwiperSlideContent project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}