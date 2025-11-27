import { motion, useReducedMotion } from 'framer-motion'
import './TechnicalExpertise.scss'

interface TechCategory {
    [x: string]: any
    category: string
    technologies: string[]
}

interface TechnicalExpertiseProps {
    categories: TechCategory[]
}

export default function TechnicalExpertise({ categories }: TechnicalExpertiseProps) {
    const shouldReduceMotion = useReducedMotion()

    // Container variant - controls the overall stagger
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1, // 100ms between each category
                delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
        },
    }

    // Category variant - for each category container
    const categoryVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
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

    // Items container variant - controls stagger within category
    const itemsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.06, // 60ms between each item
                delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
        },
    }

    // Individual item variant
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: 'spring' as const,
                    stiffness: 200,
                    damping: 20,
                    mass: 0.8,
                },
        },
    }

    return (
        <section
            className="technical-expertise"
            aria-labelledby="technical-expertise-heading"
        >
            <h2 id="technical-expertise-heading" className="technical-expertise__heading">
                Technical Expertise
            </h2>

            <motion.div
                className="technical-expertise__categories"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        className="tech-category"
                        variants={categoryVariants}
                    >
                        <h3 className="tech-category__name">
                            {category.icon && <span className="tech-category__icon">{category.icon}</span>}
                            {category.category}
                        </h3>

                        <motion.ul
                            className="tech-category__items"
                            variants={itemsContainerVariants}
                        >
                            {category.technologies.map((tech, techIndex) => (
                                <motion.li
                                    key={tech}
                                    className="tech-item"
                                    variants={itemVariants}
                                >
                                    {tech}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}