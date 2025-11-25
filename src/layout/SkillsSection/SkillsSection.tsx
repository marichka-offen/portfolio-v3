import SkillRadar from "@/components/SkillRadar/SkillRadar"
import { tags } from "@/data/tags"
import "./SkillsSection.scss"
import Tag from "@/components/Tag/Tag"

const categories: string[] = [
    "UX & Interaction",
    "Shopify / E-Commerce",
    "Engineering",
    "Systems & Architecture",
    "Collaboration",
    "Tooling"
]

const icon = (category: string) => {
    switch (category) {
        case "UX & Interaction":
            return "magic-wand"
        case "Shopify / E-Commerce":
            return "cart"
        case "Engineering":
            return "code"
        case "Systems & Architecture":
            return "intersect"
        case "Collaboration":
            return "group"
        case "Tooling":
            return "tools"
        default:
            return "❓"
    }
}

export default function SkillsSection() {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-section__skills-mobile mobile-only">
                {categories.map((category) => (
                    <div className="skills-section__skills-category" key={category}>
                        <h3 className="skills-section__skills-category-title">
                            <i className={`icon ${icon(category)} skills-section__skills-category-icon`} />
                            {category}:
                        </h3>
                        <ul className="skills-section__skills-category-tags">
                            {tags[category].map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <span className="skills-section__radar hide-on-mobile">
                <SkillRadar />
            </span>
        </section>
    )
}