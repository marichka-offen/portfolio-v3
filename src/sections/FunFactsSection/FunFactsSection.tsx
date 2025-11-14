import Fact from "@/components/Fact/Fact"
import type { FactData } from "@/types"
import "./FunFactsSection.scss"

const facts: FactData[] = [
    {
        title: "Title of something",
        description: "Description of something",
        imageUrl: "/path/to/image.jpg",
        tag: "some tag"
    },
    {
        title: "Title of something",
        description: "Description of something",
        imageUrl: "/path/to/image.jpg",
        tag: "some tag"
    },
    {
        title: "Title of something",
        description: "Description of something",
        imageUrl: "/path/to/image.jpg",
        tag: "some tag"
    },
    {
        title: "Title of something",
        description: "Description of something",
        imageUrl: "/path/to/image.jpg",
        tag: "some tag"
    }
]

export default function FunFactsSection() {
    return (
        <section id="fun-facts" className="fun-facts-section">
            <h2 className="fun-fact-section__title">Fun Facts</h2>
            <ul className="fun-facts-section__facts-list">
                {facts.map((fact, index) => (
                    <Fact key={index} {...fact} />
                ))}
            </ul>
        </section>
    )
}