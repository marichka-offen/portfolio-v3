import { useEffect, useMemo, useRef } from 'react'
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
import type { Swiper as SwiperInstance } from 'swiper'

type WorkSectionProps = {
    activeSlug?: string
}

export default function WorkSection({ activeSlug }: WorkSectionProps) {
    const swiperRef = useRef<SwiperInstance | null>(null)

    const activeSlideIndex = useMemo(() => {
        if (!activeSlug) return null
        const index = projectData.findIndex((project) => project.slug === activeSlug)
        return index >= 0 ? index : null
    }, [activeSlug])

    useEffect(() => {
        if (swiperRef.current && activeSlideIndex !== null) {
            swiperRef.current.slideToLoop(activeSlideIndex, 500)
        }
    }, [activeSlideIndex])

    return (
        <section className="work">
            <h2 className="work__title" id="projects">All projects</h2>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={24}
                navigation={true}
                modules={[Scrollbar, Navigation, Keyboard, A11y]}
                centeredSlides={true}
                enabled={true}
                loop={true}
                initialSlide={activeSlideIndex ?? 0}
                onSwiper={(instance) => (swiperRef.current = instance)}
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
