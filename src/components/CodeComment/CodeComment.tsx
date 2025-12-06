import './CodeComment.scss'

interface CodeCommentProps {
    children: string
}

export default function CodeComment({ children }: CodeCommentProps) {
    return (
        <div className="code-comment" aria-hidden="true">
            <span className="code-comment__text">// {children}</span>
        </div>
    )
}
