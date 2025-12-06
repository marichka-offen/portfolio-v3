interface IconProps {
    width?: number
    height?: number
    className?: string
}

export default function ArrowLeft({ width = 20, height = 20, className }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className={className}
        >
            <path
                d="M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16667"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
