// Custom SVG icons for tools not available in Simple Icons
// Designed to match Simple Icons style (24x24, monochrome, simple paths)

interface IconProps {
    className?: string
    size?: number
}

export function IconVSCode({ className, size = 24 }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
            className={className}
        >
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
        </svg>
    )
}

export function IconDevTools({ className, size = 24 }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
            className={className}
        >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.84 4.67h1.68v1.678h-1.68V4.67zm-3.36 1.68h1.68v1.677H7.8V6.35zm6.72 0h1.68v1.677h-1.68V6.35zM4.44 8.03h1.68v1.68H4.44v-1.68zm3.36 0h1.68v1.68H7.8v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm-15.12 3.36h1.68v1.68H2.76v-1.68zm3.36 0h1.68v1.68H6.12v-1.68zm3.36 0h1.68v1.68H9.48v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm-15.12 3.36h1.68v1.68H2.76v-1.68zm3.36 0h1.68v1.68H6.12v-1.68zm3.36 0h1.68v1.68H9.48v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm-13.44 3.36h1.68v1.68H4.44v-1.68zm3.36 0h1.68v1.68H7.8v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68zm3.36 0h1.68v1.68h-1.68v-1.68z" />
        </svg>
    )
}

export function IconVisualStudio({ className, size = 24 }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
            className={className}
        >
            <path d="M17.583.063a1.5 1.5 0 0 0-1.032.392L8.1 7.476 3.132 3.667a1 1 0 0 0-1.284.055l-.792.792a1 1 0 0 0 0 1.414L4.6 9.5.056 13.172a1 1 0 0 0 0 1.414l.792.792a1 1 0 0 0 1.284.055L7.1 11.524l8.451 7.021a1.5 1.5 0 0 0 2.394-.892l1.052-15.286A1.5 1.5 0 0 0 17.583.063zm-6.584 9.437l4.001 3.5-4.001 3.5V9.5z" />
        </svg>
    )
}

export function IconCSharp({ className, size = 24 }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
            className={className}
        >
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM9.426 7.12a5.55 5.55 0 0 1 1.985.38v1.181a4.5 4.5 0 0 0-2.025-.566c-1.462 0-2.448.848-2.448 2.148 0 1.305.987 2.158 2.448 2.158.71 0 1.422-.193 2.025-.566v1.186a5.55 5.55 0 0 1-1.985.38c-2.105 0-3.667-1.39-3.667-3.158 0-1.768 1.562-3.143 3.667-3.143zm7.459 0h.908v1.677h1.677v.908h-1.677v1.677h-.908v-1.677h-1.677v-.908h1.677V7.12zm-2.786 0h.908v1.677h1.677v.908h-1.677v1.677h-.908v-1.677h-1.677v-.908h1.677V7.12z" />
        </svg>
    )
}

export function IconMSSQL({ className, size = 24 }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
            className={className}
        >
            <path d="M8.186 3.000c-1.873.002-4.041.416-5.516.814-.337.091-.638.175-.885.256v15.548c.234.072.508.143.81.215 1.469.351 3.628.71 5.591.71 1.365 0 2.6-.229 3.65-.639 1.05-.41 1.913-1.021 2.56-1.793.647-.772 1.096-1.693 1.326-2.706.23-1.013.345-2.109.345-3.237V3.000H8.186zM19.937 3l-3.219 8.438L13.5 3h-2.062l4.5 11.719-1.031 2.687c-.207.542-.462.933-.762 1.157-.3.225-.696.362-1.181.362-.275 0-.55-.042-.825-.125v1.688c.375.083.75.125 1.125.125.825 0 1.538-.208 2.125-.625.588-.417 1.063-1.042 1.438-1.875L22.125 3h-2.188z" />
        </svg>
    )
}
