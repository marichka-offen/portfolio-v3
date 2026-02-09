export type FeaturedCard = {
    id: string
    title: string
    description: string
    tags: string[]
    link: string
    size: 'large' | 'medium'
    image?: string
    gradient?: string
    comingSoon?: boolean
}

export type MoreWork = {
    id: string
    title: string
    role: string
    teaser: string
    story: string
    icon: string
    iconTone: 'mint' | 'coral' | 'lavender' | 'peach' | 'sky'
    tags: string[]
    link: string
}

export type TimelineItem = {
    id: string
    date: string
    title: string
    company: string
    subtitle?: string
    description: string
    tags?: string[]
    highlight?: boolean
}