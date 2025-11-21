import ProjectGrid from '@/components/ProjectGrid/ProjectGrid'
import IntroSection from '@/components/IntroSection/IntroSection'
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel'

export default function Home() {
    return (
        <>
            <IntroSection />
            {/* <ProjectGrid /> */}
            <ProjectCarousel />
        </>
    )
}