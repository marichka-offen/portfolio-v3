interface ProblemContextProps {
    problem: string
}

export default function ProblemContext({ problem }: ProblemContextProps) {
    return (
        <section aria-labelledby="problem-context-heading">
            <h2 id="problem-context-heading">[SECTION_HEADING]</h2>
            <p>{problem}</p>
        </section>
    )
}