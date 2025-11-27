import { motion, useReducedMotion } from 'framer-motion'
import './TechnologiesUsed.scss'

interface TechCategory {
    category: string
    items: string[]
}

interface TechnologiesUsedProps {
    categories?: TechCategory[]
}

export default function TechnologiesUsed({ categories }: TechnologiesUsedProps) {
    const shouldReduceMotion = useReducedMotion()

    if (!categories || categories.length === 0) return null

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
                delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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

    return (
        <section className="technologies-used">
            <h2 className="technologies-used__heading">Technologies Used</h2>

            <motion.div
                className="technologies-used__grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {categories.map((category, index) => (
                    <motion.div key={index} className="tech-category" variants={itemVariants}>
                        <h3 className="tech-category__name">{category.category}</h3>
                        <ul className="tech-category__list">
                            {category.items.map((item, idx) => (
                                <li key={idx} className="tech-category__item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}