import SkillRadar from "@/components/SkillRadar/SkillRadar"
import "./SkillsSection.scss"

export default function SkillsSection() {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <SkillRadar />
        </section>
    )
}