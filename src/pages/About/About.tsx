import AboutSection from "../../sections/AboutSection/AboutSection"
import FunFactsSection from "../../sections/FunFactsSection/FunFactsSection"
// import HobbiesSection from "../../sections/HobbiesSection/HobbiesSection"
import SkillsSection from "../../sections/SkillsSection/SkillsSection"
import WorkHistorySection from "../../sections/WorkHistorySection/WorkHistorySection"
import "./About.scss"

export default function About() {
    return (
        <div className="about">
            {/* About block, two column, content summary on the left */}
            <AboutSection />

            {/* Fun facts */}
            <FunFactsSection />

            {/* Skills */}
            <SkillsSection />

            {/* WORK history */}
            <WorkHistorySection />

            {/* Hobbies */}
            {/* <HobbiesSection /> */}
        </div>
    )
}