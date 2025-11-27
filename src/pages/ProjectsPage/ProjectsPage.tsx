import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/layout/PageTransition/PageTransition'
import ProjectFilter from '@/components/projects/ProjectFilter/ProjectFilter'
import ProjectGrid from '@/components/projects/ProjectGrid/ProjectGrid'
import { projects } from '@/data/projects'
import './ProjectsPage.scss'

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [activeSort, setActiveSort] = useState('recent')

    // Extract unique categories from projects
    const categories = useMemo(() => {
        const allCategories = projects.flatMap((p) => p.categories || [])
        const uniqueCategories = Array.from(new Set(allCategories))
        return ['All', ...uniqueCategories.sort()]
    }, [])

    const sortOptions = [
        { value: 'recent', label: 'Most Recent' },
        { value: 'complex', label: 'Most Complex' },
        { value: 'alphabetical', label: 'Alphabetical' },
    ]

    // Filter and sort projects
    const filteredAndSortedProjects = useMemo(() => {
        // Filter by category
        let filtered = projects
        if (activeCategory !== 'all') {
            filtered = projects.filter((p) =>
                p.categories?.some((cat: string) => cat.toLowerCase() === activeCategory)
            )
        }

        // Sort
        let sorted = [...filtered]
        switch (activeSort) {
            case 'recent':
                // Assuming projects are already in recent order in the data file
                // Or you can sort by a date field if you have one
                break
            case 'complex':
                // Sort by number of technologies (proxy for complexity)
                sorted.sort((a, b) => b.technologies.length - a.technologies.length)
                break
            case 'alphabetical':
                sorted.sort((a, b) => a.name.localeCompare(b.name))
                break
        }

        return sorted
    }, [activeCategory, activeSort])

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category)
    }

    const handleSortChange = (sort: string) => {
        setActiveSort(sort)
    }

    const handleResetFilters = () => {
        setActiveCategory('all')
        setActiveSort('recent')
    }

    return (
        <PageTransition>
            <div className="projects-page">
                <header className="projects-page__header">
                    <h1 className="projects-page__title">Projects</h1>
                    <p className="projects-page__intro">
                        A collection of web applications, tools, and experiments I've built.
                        Each project demonstrates different technical skills and problem-solving approaches.
                    </p>
                </header>

                {/* Filter Controls */}
                {projects.length >= 2 && (
                    <ProjectFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={handleCategoryChange}
                        sortOptions={sortOptions}
                        activeSort={activeSort}
                        onSortChange={handleSortChange}
                        projectCount={filteredAndSortedProjects.length}
                    />
                )}

                {/* Projects Grid */}
                <div className="projects-page__content">
                    <AnimatePresence mode="wait">
                        {filteredAndSortedProjects.length > 0 ? (
                            <motion.div
                                key={`${activeCategory}-${activeSort}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectGrid projects={filteredAndSortedProjects} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                className="projects-page__empty"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="projects-page__empty-icon">🔍</div>
                                <h2 className="projects-page__empty-title">No projects found</h2>
                                <p className="projects-page__empty-text">
                                    Try adjusting your filters to see more projects
                                </p>
                                <button
                                    className="projects-page__empty-button"
                                    onClick={handleResetFilters}
                                >
                                    Reset Filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Additional Work Mention (Optional) */}
                {filteredAndSortedProjects.length > 0 && (
                    <motion.aside
                        className="projects-page__additional"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="projects-page__additional-title">
                            Looking for more?
                        </h2>
                        <p className="projects-page__additional-text">
                            These are my main portfolio pieces. I've also contributed to open-source
                            projects and built smaller experiments—feel free to check out my GitHub
                            for the full picture.
                        </p>
                    </motion.aside>
                )}
            </div>
        </PageTransition>
    )
}