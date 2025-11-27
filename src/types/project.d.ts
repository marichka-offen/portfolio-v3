export interface Project {
    id: string
    name: string
    slug: string
    summary: string
    featured: boolean
    categories?: string[]
    technologies: string[]
    role?: string
    timeline?: string
    status?: string
    problem?: {
        context?: string
        challenge?: string
        constraints?: string[]
    }
    approach?: Array<{
        decision: string
        rationale: string
    }>
    implementation?: string[]
    outcomes?: {
        metrics?: string[]
        learnings?: string[]
    }
    demoUrl?: string
    repoUrl?: string
    isPrivate?: boolean
    technologiesByCategory?: TechnologyCategory[]
}

export interface TechnicalDecision {
    decision: string
    reasoning: string
}

export interface TechnicalAchievement {
    achievement: string
    description: string
}

export interface ProjectOutcome {
    metrics?: string[]
    learnings: string[]
}

export interface TechnologyCategory {
    category: string
    items: string[]
}
