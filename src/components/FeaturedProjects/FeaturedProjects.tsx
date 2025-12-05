import "./FeaturedProjects.scss"
import CaseStudyCard from '@/components/CaseStudyCard/CaseStudyCard'
import { featuredProjects } from '@/data/projects'
import SectionHeader from "../SectionHeader/SectionHeader"

export default function FeaturedProjects() {
    return (
        <section id="featured-projects" className="featured-projects">

            <SectionHeader
                id="featured-projects-heading"
                title="Featured Projects"
                subtitle="Selected projects showcasing my expertise in modern web development"
                comment="Here's what I'm most proud of"
            />


            <div className="featured-projects__grid">
                {featuredProjects.map((project, index) => (
                    <CaseStudyCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}
