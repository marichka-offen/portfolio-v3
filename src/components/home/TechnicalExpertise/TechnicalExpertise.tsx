import './TechnicalExpertise.scss'
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiCss3,
    SiSass,
    SiTailwindcss,
    SiRemix,
    SiVuedotjs,
    SiNodedotjs,
    SiFigma,
    SiMiro,
    SiSketch,
    SiShopify,
    SiAlgolia,
    SiLighthouse,
    SiVite,
    SiRedux,
    SiGraphql,
    SiWebpack,
    SiGithub,
    SiAsana,
    SiSlack,
    SiConfluence,
    SiNotion,
    SiGit,
    SiEslint,
    SiPostgresql,
    SiDotnet,
    SiBlazor,
} from 'react-icons/si'
import { IconVSCode, IconDevTools, IconVisualStudio, IconCSharp, IconMSSQL } from './CustomIcons'
import type { ComponentType } from 'react'

interface RadarSkill {
    name: string
    ring: 'adopt' | 'trial' | 'assess' | 'hold'
    icon?: ComponentType<{ className?: string; size?: number }>
}

interface TechCategory {
    category: string
    skills: RadarSkill[]
}

interface TechnicalExpertiseProps {
    categories: TechCategory[]
}

// Icon mapping
export const iconMap: Record<string, ComponentType<{ className?: string; size?: number }>> = {
    React: SiReact,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    'CSS/SCSS': SiCss3,
    SCSS: SiSass,
    Sass: SiSass,
    Tailwind: SiTailwindcss,
    Liquid: SiShopify,
    Remix: SiRemix,
    Vue: SiVuedotjs,
    'Node.js': SiNodedotjs,
    Figma: SiFigma,
    Miro: SiMiro,
    Sketch: SiSketch,
    Shopify: SiShopify,
    'Shopify Liquid': SiShopify,
    'Shopify CLI': SiShopify,
    Algolia: SiAlgolia,
    Lighthouse: SiLighthouse,
    Vite: SiVite,
    Redux: SiRedux,
    GraphQL: SiGraphql,
    Webpack: SiWebpack,
    GitHub: SiGithub,
    Asana: SiAsana,
    Slack: SiSlack,
    Confluence: SiConfluence,
    Notion: SiNotion,
    Git: SiGit,
    'VS Code': IconVSCode,
    DevTools: IconDevTools,
    ESLint: SiEslint,
    'Visual Studio': IconVisualStudio,
    'C#': IconCSharp,
    MSSQL: IconMSSQL,
    PostgreSQL: SiPostgresql,
    '.NET': SiDotnet,
    Blazor: SiBlazor,
    'REST APIs': SiGraphql,
    'Metafields API': SiShopify,
}

// Bubble cluster component - static layout
function BubbleCluster({ category }: { category: TechCategory }) {
    const getBubbleSize = (ring: string) => {
        switch (ring) {
            case 'adopt':
                return 40
            case 'trial':
                return 32
            case 'assess':
                return 26
            default:
                return 32
        }
    }

    return (
        <div className="bubble-cluster">
            <h3 className="bubble-cluster__title">{category.category}</h3>
            <div className="bubble-cluster__bubbles">
                {category.skills.map((skill) => {
                    const Icon = iconMap[skill.name]
                    const size = getBubbleSize(skill.ring)
                    const iconSize = size * 0.4

                    // Shorten label intelligently
                    const getShortLabel = (name: string) => {
                        if (name === 'CSS/SCSS') return 'CSS'
                        if (name === 'Shopify Liquid') return 'Liquid'
                        if (name === 'Shopify CLI') return 'CLI'
                        if (name === 'REST APIs') return 'REST'
                        if (name === 'Metafields API') return 'Meta'
                        if (name === 'Visual Studio') return 'VS'
                        if (name === 'VS Code') return 'VSC'

                        if (name.length <= 8) return name

                        const firstWord = name.split(' ')[0]
                        return firstWord.length <= 8 ? firstWord : name.substring(0, 6)
                    }

                    return (
                        <div
                            key={skill.name}
                            className={`skill-bubble skill-bubble--${skill.ring}`}
                            title={skill.name}
                            style={{
                                width: `${size * 2}px`,
                                height: `${size * 2}px`,
                            }}
                        >
                            <div className="skill-bubble__content">
                                {Icon && (
                                    <Icon className="skill-bubble__icon" size={iconSize} />
                                )}
                                <span className="skill-bubble__label">
                                    {getShortLabel(skill.name)}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default function TechnicalExpertise({ categories }: TechnicalExpertiseProps) {
    return (
        <section className="technical-expertise" aria-labelledby="technical-expertise-heading">
            <h2 id="technical-expertise-heading" className="technical-expertise__heading">
                Technical Expertise
            </h2>

            <div className="bubble-clusters">
                {categories.map((category) => (
                    <BubbleCluster key={category.category} category={category} />
                ))}
            </div>

            {/* Legend */}
            <div className="expertise-legend">
                <span className="expertise-legend__label">Size indicates experience level:</span>
                <div className="expertise-legend__items">
                    <span className="expertise-legend__item">
                        <span className="expertise-legend__bubble expertise-legend__bubble--large"></span>
                        Current
                    </span>
                    <span className="expertise-legend__item">
                        <span className="expertise-legend__bubble expertise-legend__bubble--medium"></span>
                        Exploring
                    </span>
                    <span className="expertise-legend__item">
                        <span className="expertise-legend__bubble expertise-legend__bubble--small"></span>
                        Past
                    </span>
                </div>
            </div>
        </section>
    )
}
