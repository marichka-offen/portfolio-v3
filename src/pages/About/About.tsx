import CertificatesSection from "@/layout/CertificatesSection/CertificatesSection"
import AboutSection from "../../layout/AboutSection/AboutSection"
import FunFactsSection from "../../layout/FunFactsSection/FunFactsSection"
// import HobbiesSection from "../../sections/HobbiesSection/HobbiesSection"
import SkillsSection from "../../layout/SkillsSection/SkillsSection"
import WorkHistorySection from "../../layout/WorkHistorySection/WorkHistorySection"
import "./About.scss"

export default function About() {
    return (
        <div className="about">
            <AboutSection />
            <FunFactsSection />
            <SkillsSection />
            <WorkHistorySection />
            <CertificatesSection />
            {/* <HobbiesSection /> */}
        </div>
    )
}