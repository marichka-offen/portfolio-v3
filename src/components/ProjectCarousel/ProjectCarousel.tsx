import { useEffect, useMemo, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css/pagination'
import { Navigation, Keyboard, Pagination } from 'swiper/modules'
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
            <Swiper
                centeredSlides={true}
                className='swiper-carousel'
                hashNavigation={true}
                initialSlide={activeSlideIndex ?? 0}
                loop={true}
                modules={[Navigation, Keyboard, Pagination]}
                navigation={true}
                onSwiper={(instance) => (swiperRef.current = instance)}
                pagination={{ type: 'fraction' }}
                slidesPerView={'auto'}
                spaceBetween={8}
            >
                {projectData.map((project, index) => (
                    <SwiperSlide data-hash={project.slug} key={index}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}