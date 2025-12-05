import "./FeaturedProjects.scss"
import CaseStudyCard from '@/components/CaseStudyCard/CaseStudyCard'
import { featuredProjects } from '@/data/projects'

export default function FeaturedProjects() {
    return (
        <section id="featured-projects" className="featured-projects">
            <div className="featured-projects__header">
                <h2 className="featured-projects__heading">Featured Projects</h2>
                <p className="featured-projects__subtitle">
                    Selected projects showcasing my expertise in modern web development
                </p>
            </div>

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
