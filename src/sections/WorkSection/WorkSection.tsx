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
            <h2 className="work__title" id="work">All work</h2>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
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
        </section>
    )
}