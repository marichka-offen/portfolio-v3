import React, { useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import { additionalProjects } from '../../data/projects'
import { ChevronDown } from '@/assets/icons'
import './ProjectsGrid.scss'
import SectionHeader from '../SectionHeader/SectionHeader'

const INITIAL_VISIBLE_COUNT = 3

const ProjectsGrid: React.FC = () => {
    const [showAll, setShowAll] = useState(false)
    const visibleProjects = showAll ? additionalProjects : additionalProjects.slice(0, INITIAL_VISIBLE_COUNT)
    const hasMore = additionalProjects.length > INITIAL_VISIBLE_COUNT

    return (
        <section id="technical-expertise" className="projects-grid" data-nav-section="technical-expertise">
            <div className="projects-grid__container">
                <SectionHeader
                    id="projects-grid-heading"
                    title="Projects"
                    subtitle="Various work across e-commerce, accessibility, and platform development"
                    comment=""
                />

                <div className="projects-grid__grid">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                {hasMore && (
                    <div className="projects-grid__actions">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="projects-grid__show-more"
                            aria-expanded={showAll}
                            type="button"
                        >
                            <span>{showAll ? 'Show Less' : `View All Projects (${additionalProjects.length})`}</span>
                            <div style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', display: 'flex' }}>
                                <ChevronDown />
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectsGrid
