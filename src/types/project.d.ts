export default interface ProjectCardData {
    id: string
    title: string
    slug: string
    tagline: string
    role: string
    timeline: string
    technologies: string[]
    status: string
    url: string
    image: string
    imageAlt?: string

    card: {
        summary: string
        challengeTeaser: string
        techHighlights: string[]
    }

    full: {
        problem: string[]
        challenges: string[]
        whatMadeThisHard: string[]
        whatIBuilt: string[]
        whatIdDoDifferently: string[]
        visibleWork: string | string[] | [string, string][]
    }
}