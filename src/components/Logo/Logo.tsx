import './Logo.scss'

interface LogoProps {
    size?: number
    className?: string
}

export default function Logo({ size = 40, className = '' }: LogoProps) {
    return (
        <svg
            className={`logo ${className}`}
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Marichka Offen logo"
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-rose)" />
                    <stop offset="16.66%" stopColor="var(--color-coral)" />
                    <stop offset="33.33%" stopColor="var(--color-sunny)" />
                    <stop offset="50%" stopColor="var(--color-mint)" />
                    <stop offset="66.66%" stopColor="var(--color-sky)" />
                    <stop offset="83.33%" stopColor="var(--color-lavender)" />
                    <stop offset="100%" stopColor="var(--color-violet)" />
                </linearGradient>
            </defs>

            {/* Left brace { */}
            <path
                d="M 30 10 C 30 10, 20 10, 20 20 L 20 45 C 20 48, 16 52, 10 55 C 16 58, 20 62, 20 65 L 20 90 C 20 100, 30 100, 30 100"
                stroke="url(#logoGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Right brace } */}
            <path
                d="M 90 10 C 90 10, 100 10, 100 20 L 100 45 C 100 48, 104 52, 110 55 C 104 58, 100 62, 100 65 L 100 90 C 100 100, 90 100, 90 100"
                stroke="url(#logoGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Letter m */}
            <text
                x="60"
                y="75"
                fontFamily="'IBM Plex Mono', 'Consolas', 'Monaco', monospace"
                fontSize="50"
                fontWeight="600"
                textAnchor="middle"
                fill="url(#logoGradient)"
            >
                m
            </text>
        </svg>
    )
}
