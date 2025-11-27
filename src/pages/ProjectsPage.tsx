import { useState } from 'react'
import ProjectFilter from '../components/projects/ProjectFilter'
import ProjectGrid from '../components/projects/ProjectGrid/ProjectGrid'
import { projects } from '../data/projects'
import PageTransition from '@/components/layout/PageTransition/PageTransition'

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [activeSort, setActiveSort] = useState('recent')

    const categories = ['All', '[CATEGORY_1]', '[CATEGORY_2]', '[CATEGORY_3]']
    const sortOptions = [
        { value: 'recent', label: '[MOST_RECENT]' },
        { value: 'complex', label: '[MOST_COMPLEX]' }
    ]

    // Placeholder filtering/sorting logic
    const filteredProjects = projects

    return (
        <PageTransition>
            <h1>[PAGE_TITLE]</h1>

            <p>[OPTIONAL_PAGE_INTRODUCTION]</p>

            {projects.length >= 6 && (
                <ProjectFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    sortOptions={sortOptions}
                    activeSort={activeSort}
                    onSortChange={setActiveSort}
                />
            )}

            <ProjectGrid projects={filteredProjects} />

            {/* Conditional additional work mention */}
            <aside>
                <p>[OPTIONAL_ADDITIONAL_WORK_MENTION]</p>
            </aside>
        </PageTransition>
    )
}