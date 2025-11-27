// Framer Motion Stagger Config
export const staggerConfigs = {
    tight: {
        staggerChildren: 0.06,
        delayChildren: 0
    },

    default: {
        staggerChildren: 0.08,
        delayChildren: 0.1
    },

    relaxed: {
        staggerChildren: 0.12,
        delayChildren: 0.15
    },

    // For wave effects (groups)
    wave: {
        staggerChildren: 0.1,
        delayChildren: 0.2
    }
}