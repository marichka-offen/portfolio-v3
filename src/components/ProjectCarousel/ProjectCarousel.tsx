import { useEffect, useMemo, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'
import 'swiper/css/keyboard'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { Grid, Navigation, Keyboard, A11y, Pagination, Scrollbar } from 'swiper/modules'
import { projectData } from '@/data/projects'
import type { Swiper as SwiperInstance } from 'swiper'
import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectCarousel.scss'

type ProjectCarouselProps = {
    activeSlug?: string
}

export default function ProjectCarousel({ activeSlug }: ProjectCarouselProps) {
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
        <section className="project-carousel">
            <h2 className="project-carousel__title" id="projects">All projects</h2>

            {/* <div className='scroll-grid'>

                {projectData.map((project, index) => (
                    <span className='scroll-grid__item' key={index}>
                        <ProjectCard project={project} />
                    </span>
                ))}
            </div> */}
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
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}