export interface Project {
    id: string
    categories?: string[]
    name: string
    slug: string
    summary: string
    role: string
    timeline: string
    status?: string
    technologies: string[]
    featured: boolean
    category?: string[]
    problem: string
    approach: TechnicalDecision[]
    implementation: TechnicalAchievement[]
    outcomes: ProjectOutcome
    demoUrl?: string
    repoUrl?: string
    isPrivate: boolean
    technologiesByCategory: TechnologyCategory[]
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
    technologies: string[]
}