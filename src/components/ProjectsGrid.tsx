import React from 'react';
import ProjectCard from './ProjectCard';
import { additionalProjects } from '../data/projects';
import './ProjectsGrid.scss';

const ProjectsGrid: React.FC = () => {
    return (
        <section className="projects-grid">
            <div className="projects-grid__container">
                <header className="projects-grid__header">
                    <h2 className="projects-grid__title">More Projects</h2>
                    <p className="projects-grid__subtitle">
                        Additional work across e-commerce, accessibility, and platform development
                    </p>
                </header>

                <div className="projects-grid__grid">
                    {additionalProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
