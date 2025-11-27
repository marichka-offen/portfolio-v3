import { motion, useReducedMotion } from 'framer-motion'
import './ProjectFilter.scss'

interface SortOption {
    value: string
    label: string
}

interface ProjectFilterProps {
    categories: string[]
    activeCategory: string
    onCategoryChange: (category: string) => void
    sortOptions: SortOption[]
    activeSort: string
    onSortChange: (sort: string) => void
    projectCount?: number
}

export default function ProjectFilter({
    categories,
    activeCategory,
    onCategoryChange,
    sortOptions,
    activeSort,
    onSortChange,
    projectCount,
}: ProjectFilterProps) {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: 'spring' as const,
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                },
        },
    }

    const buttonHover = shouldReduceMotion
        ? {}
        : {
            scale: 1.05,
            transition: {
                type: 'spring' as const,
                stiffness: 400,
                damping: 25,
            },
        }

    const buttonTap = shouldReduceMotion ? {} : { scale: 0.98 }

    return (
        <motion.div
            className="project-filter"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="project-filter__controls">
                {/* Category Filters */}
                <div className="project-filter__categories">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            className={`project-filter__category ${activeCategory === category.toLowerCase()
                                    ? 'project-filter__category--active'
                                    : ''
                                }`}
                            onClick={() => onCategoryChange(category.toLowerCase())}
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Sort Options */}
                <div className="project-filter__sort">
                    <label htmlFor="sort-select" className="project-filter__sort-label">
                        Sort by:
                    </label>
                    <select
                        id="sort-select"
                        className="project-filter__sort-select"
                        value={activeSort}
                        onChange={(e) => onSortChange(e.target.value)}
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Project Count */}
            {projectCount !== undefined && (
                <motion.p
                    className="project-filter__count"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Showing {projectCount} {projectCount === 1 ? 'project' : 'projects'}
                </motion.p>
            )}
        </motion.div>
    )
}