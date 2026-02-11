import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem('theme') as Theme | null
        return stored || 'system'
    })

    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
        if (theme === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
        return theme
    })

    useEffect(() => {
        const root = document.documentElement

        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            const handleChange = (e: MediaQueryListEvent) => {
                const newTheme = e.matches ? 'dark' : 'light'
                setResolvedTheme(newTheme)
                root.setAttribute('data-theme', newTheme)
            }

            setResolvedTheme(mediaQuery.matches ? 'dark' : 'light')
            root.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light')

            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        } else {
            setResolvedTheme(theme)
            root.setAttribute('data-theme', theme)
        }
    }, [theme])

    const toggleTheme = () => {
        const newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return { theme, resolvedTheme, toggleTheme, setTheme }
}
