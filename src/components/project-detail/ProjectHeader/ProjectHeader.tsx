import { motion, useReducedMotion } from 'framer-motion'
import './ProjectHeader.scss'

interface ProjectHeaderProps {
    name: string
    summary: string
    role?: string
    timeline?: string
    status?: string
}

export default function ProjectHeader({
    name,
    summary,
    role,
    timeline,
    status,
}: ProjectHeaderProps) {
    const shouldReduceMotion = useReducedMotion()

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
        <motion.header
            className="project-header"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 className="project-header__title" variants={itemVariants}>
                {name}
            </motion.h1>

            <motion.p className="project-header__summary" variants={itemVariants}>
                {summary}
            </motion.p>

            <motion.div className="project-header__meta" variants={itemVariants}>
                {role && (
                    <div className="project-header__meta-item">
                        <span className="project-header__meta-label">Role</span>
                        <span className="project-header__meta-value">{role}</span>
                    </div>
                )}

                {timeline && (
                    <div className="project-header__meta-item">
                        <span className="project-header__meta-label">Timeline</span>
                        <span className="project-header__meta-value">{timeline}</span>
                    </div>
                )}

                {status && (
                    <div className="project-header__meta-item">
                        <span className="project-header__meta-label">Status</span>
                        <span className="project-header__status">{status}</span>
                    </div>
                )}
            </motion.div>
        </motion.header>
    )
}