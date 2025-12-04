import "./FeaturedProjects.scss"
import type ProjectCardData from '@/types/project'
import CaseStudyCard from '@/components/shared/CaseStudyCard/CaseStudyCard'

export default function FeaturedProjects({ projects }: { projects: ProjectCardData[] }) {
    return (
        <section id="featured-projects" className="featured-projects">
            <div className="featured-projects__header">
                <h2 className="featured-projects__heading">Featured Projects</h2>
                <p className="featured-projects__subtitle">
                    Selected projects showcasing my expertise in modern web development
                </p>
            </div>

            <div className="featured-projects__grid">
                {projects.map((project, index) => (
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
