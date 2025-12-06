interface IconProps {
    width?: number
    height?: number
    className?: string
}

export default function ChevronDown({ width = 16, height = 16, className }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={className}
        >
            <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
