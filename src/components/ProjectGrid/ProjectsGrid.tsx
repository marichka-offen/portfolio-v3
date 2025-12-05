import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import { additionalProjects } from '../../data/projects'
import './ProjectsGrid.scss'
import SectionHeader from '../SectionHeader/SectionHeader'

const ProjectsGrid: React.FC = () => {
    return (
        <section id="technical-expertise" className="projects-grid">
            <div className="projects-grid__container">
                <SectionHeader
                    id="projects-grid-heading"
                    title="Projects"
                    subtitle="Various work across e-commerce, accessibility, and platform development"
                    comment=""
                />

                <div className="projects-grid__grid">
                    {additionalProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsGrid
