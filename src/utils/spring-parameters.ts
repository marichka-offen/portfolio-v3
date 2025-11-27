// Spring Presets for Framer Motion
export const springs = {
    // Gentle spring - for large elements, sections
    gentle: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 1
    },

    // Default spring - most common use
    default: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 1
    },

    // Bouncy spring - for playful interactions
    bouncy: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        mass: 1
    },

    // Snappy spring - for quick feedback
    snappy: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.8
    },

    // Smooth spring - no overshoot
    smooth: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
    }
}