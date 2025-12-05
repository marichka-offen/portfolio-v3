import './ProblemContext.scss'

interface ProblemContextProps {
    problem?: {
        context?: string
        challenge?: string
        constraints?: string[]
    }
}

export default function ProblemContext({ problem }: ProblemContextProps) {
    if (!problem) return null

    return (
        <section
            className="problem-context"
        >
            <div className="problem-context__container">
                <h2 className="problem-context__heading">The Problem</h2>

                {problem.context && (
                    <p className="problem-context__text">{problem.context}</p>
                )}

                {problem.challenge && (
                    <p className="problem-context__text">
                        <strong>Key Challenge:</strong> {problem.challenge}
                    </p>
                )}

                {problem.constraints && problem.constraints.length > 0 && (
                    <p className="problem-context__text">
                        <strong>Constraints:</strong> {problem.constraints.join(', ')}
                    </p>
                )}
            </div>
        </section>
    )
}
