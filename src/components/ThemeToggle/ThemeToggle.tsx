import { useTheme } from '@/hooks/useTheme'
import './ThemeToggle.scss'

export default function ThemeToggle() {
    const { resolvedTheme, toggleTheme } = useTheme()
    const isDark = resolvedTheme === 'dark'

    return (
        <button
            className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? '🌙' : '☀️'}
        </button>
    )
}
