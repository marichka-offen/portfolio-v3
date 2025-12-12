import { useState, useRef, useEffect, useCallback } from 'react'
import './InteractiveCode.scss'

interface CodeProperty {
    key: string
    values: string[]
    type: 'string' | 'number' | 'boolean' | 'array'
    interactive: boolean
    secretValue?: string // Konami code easter egg
}

const codeProperties: CodeProperty[] = [
    {
        key: 'experienceYears',
        values: ['6', '7', '2190', '52560', '3.154e+7'], // years, also years, days, hours, seconds
        type: 'number',
        interactive: true,
        secretValue: '∞ // still learning every day'
    },
    {
        key: 'empathy',
        values: ['true', 'always', '💯', 'Number.MAX_SAFE_INTEGER', 'Infinity'],
        type: 'boolean',
        interactive: true,
        secretValue: '❤️ // it\'s a superpower'
    },
    {
        key: 'communication',
        values: [
            '["clear", "warm", "human"]',
            '["enthusiastic", "precise", "visual"]',
            '["thoughtful", "honest", "kind"]',
            '["patient", "collaborative", "direct"]',
            '["code reviews", "pair programming", "documentation"]'
        ],
        type: 'array',
        interactive: true,
        secretValue: '["empathetic", "genuine", "sometimes uses too many emojis"]'
    },
    {
        key: 'designApproach',
        values: [
            'sharp sense for detail, aesthetics, and user comfort',
            'pixel-perfect with purpose',
            'beauty meets accessibility',
            'form follows function, but make it pretty',
            'users first, always'
        ],
        type: 'string',
        interactive: true,
        secretValue: 'sweat the details, ship the delight ✨'
    },
    {
        key: 'strength',
        values: [
            'keeps going even when the ground disappears',
            'turns constraints into creative solutions',
            'finds the bug everyone else missed',
            'asks the right questions before writing code',
            'makes complex things feel simple'
        ],
        type: 'string',
        interactive: true,
        secretValue: 'cares deeply about craft and people 🌟'
    },
    {
        key: 'weakness',
        values: [
            'peppermint mochas',
            'overthinking edge cases',
            'naming variables',
            'perfectionism disguised as craftsmanship',
            'refactoring things that work just fine'
        ],
        type: 'string',
        interactive: true,
        secretValue: 'gets emotionally attached to good code'
    }
]

const playClickSound = (muted: boolean) => {
    if (muted) return

    try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.value = 800
        oscillator.type = 'sine'

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.1)
    } catch {
    }
}

const playShuffleSound = (muted: boolean) => {
    if (muted) return

    try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.value = 600
        oscillator.type = 'sine'

        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.15)
    } catch {
    }
}

export default function InteractiveCode() {
    const [propertyStates, setPropertyStates] = useState<Record<string, number>>(() => {
        const initial: Record<string, number> = {}
        codeProperties.forEach(prop => {
            initial[prop.key] = 0
        })
        return initial
    })

    const [showCursor, setShowCursor] = useState(true)
    const [announcement, setAnnouncement] = useState('')
    const [isMuted, setIsMuted] = useState(false)
    const [konamiMode, setKonamiMode] = useState(false)
    const cursorRef = useRef<number | undefined>(undefined)
    const konamiSequenceRef = useRef<string[]>([])

    // Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']

    useEffect(() => {
        cursorRef.current = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 530)

        return () => {
            if (cursorRef.current) {
                clearInterval(cursorRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && konamiMode) {
                setKonamiMode(false)
                setAnnouncement('Returned to normal mode')
                return
            }

            const newSequence = [...konamiSequenceRef.current, e.key.toLowerCase()].slice(-10)
            konamiSequenceRef.current = newSequence

            if (newSequence.join(',') === konamiCode.join(',')) {
                setKonamiMode(true)
                setAnnouncement('🎉 Secret developer mode activated!')
                playShuffleSound(isMuted)
                konamiSequenceRef.current = []
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isMuted, konamiMode])

    const cycleProperty = useCallback((key: string) => {
        const property = codeProperties.find(p => p.key === key)
        if (!property || !property.interactive) return

        playClickSound(isMuted)

        setPropertyStates(prev => {
            const currentIndex = prev[key]
            const nextIndex = (currentIndex + 1) % property.values.length
            const nextValue = property.values[nextIndex]

            setAnnouncement(`${key} changed to ${nextValue}`)

            return {
                ...prev,
                [key]: nextIndex
            }
        })
    }, [isMuted])

    const shuffleAll = useCallback(() => {
        playShuffleSound(isMuted)

        setPropertyStates(() => {
            const shuffled: Record<string, number> = {}
            codeProperties.forEach(prop => {
                shuffled[prop.key] = Math.floor(Math.random() * prop.values.length)
            })
            return shuffled
        })

        setAnnouncement('All values shuffled!')
    }, [isMuted])

    const toggleMute = useCallback(() => {
        setIsMuted(prev => !prev)
        setAnnouncement(isMuted ? 'Sound enabled' : 'Sound muted')
    }, [isMuted])

    const handleKeyPress = (e: React.KeyboardEvent, key: string) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            cycleProperty(key)
        }
    }

    const renderValue = (property: CodeProperty) => {
        const value = konamiMode && property.secretValue
            ? property.secretValue
            : property.values[propertyStates[property.key]]

        const className = property.type === 'number'
            ? 'hero__code-number'
            : property.type === 'boolean'
                ? 'hero__code-boolean'
                : property.type === 'array'
                    ? 'hero__code-string'
                    : 'hero__code-string'

        if (property.interactive) {
            return (
                <button
                    className={`interactive-code__value ${className} ${konamiMode ? 'interactive-code__value--konami' : ''}`}
                    onClick={() => cycleProperty(property.key)}
                    onKeyDown={(e) => handleKeyPress(e, property.key)}
                    aria-label={`${property.key}: ${value}. Click to cycle through values.`}
                    type="button"
                    disabled={konamiMode}
                >
                    {property.type === 'array' || konamiMode ? value : `"${value}"`}

                    {property.key !== 'weakness' && <span className="interactive-code__value--comma">,</span>}
                </button>
            )
        }

        return (
            <span className={className}>
                {property.type === 'array' ? value : `"${value}"`}
            </span>
        )
    }

    return (
        <div className="interactive-code">
            <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="interactive-code__sr-only"
            >
                {announcement}
            </div>

            <div className="hero__code-window">
                <div className="hero__code-header">
                    <div className="hero__code-dots">
                        <span className="hero__code-dot hero__code-dot--close"></span>
                        <span className="hero__code-dot hero__code-dot--minimize"></span>
                        <span className="hero__code-dot hero__code-dot--maximize"></span>
                    </div>
                    <div className="hero__code-title">
                        {konamiMode ? '✨ Developer Mode ✨' : 'Portfolio.tsx'}
                    </div>
                    <div className="hero__code-controls">
                        <button
                            className="interactive-code__control-btn"
                            onClick={shuffleAll}
                            aria-label="Shuffle all values"
                            type="button"
                            title="Shuffle all"
                        >
                            🎲
                        </button>
                        <button
                            className="interactive-code__control-btn"
                            onClick={toggleMute}
                            aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
                            type="button"
                            title={isMuted ? 'Unmute' : 'Mute'}
                        >
                            {isMuted ? '🔇' : '🔊'}
                        </button>
                    </div>
                </div>
                <div className="hero__code-content">
                    <code className="hero__code">
                        <span className="hero__code-line">
                            <span className="hero__code-keyword">const</span>{' '}
                            <span className="hero__code-variable">marichka</span> = {'{'}<br />
                        </span>

                        {codeProperties.map((property, index) => (
                            <span key={property.key} className="hero__code-line">
                                {'  '}
                                <span className="hero__code-property">{property.key}</span>:{' '}
                                {renderValue(property)}
                                {property.key === 'weakness' && (
                                    <span className="interactive-code__coffee-wrapper">
                                        <svg
                                            className="interactive-code__coffee"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 225 225"
                                            aria-hidden="true"
                                        >
                                            <path d="M 189.230469 30.726562 L 187.804688 30.726562 L 178.742188 3.558594 C 178.570312 3.050781 178.328125 2.578125 178.007812 2.148438 C 177.691406 1.714844 177.316406 1.339844 176.878906 1.027344 C 176.445312 0.714844 175.96875 0.472656 175.460938 0.308594 C 174.949219 0.144531 174.425781 0.0625 173.886719 0.0625 L 51.128906 0.0625 C 50.59375 0.0625 50.066406 0.144531 49.558594 0.308594 C 49.046875 0.472656 48.574219 0.714844 48.136719 1.027344 C 47.703125 1.339844 47.324219 1.714844 47.007812 2.148438 C 46.6875 2.578125 46.445312 3.050781 46.273438 3.558594 L 37.210938 30.726562 L 35.785156 30.726562 C 35.113281 30.726562 34.449219 30.792969 33.789062 30.925781 C 33.128906 31.054688 32.488281 31.25 31.871094 31.503906 C 31.25 31.761719 30.660156 32.078125 30.101562 32.449219 C 29.542969 32.824219 29.027344 33.246094 28.550781 33.722656 C 28.074219 34.195312 27.652344 34.710938 27.277344 35.269531 C 26.90625 35.828125 26.589844 36.417969 26.332031 37.039062 C 26.078125 37.65625 25.882812 38.296875 25.75 38.953125 C 25.621094 39.613281 25.554688 40.277344 25.554688 40.949219 L 25.554688 51.171875 C 25.554688 51.839844 25.621094 52.507812 25.75 53.164062 C 25.882812 53.824219 26.078125 54.460938 26.332031 55.082031 C 26.589844 55.703125 26.90625 56.292969 27.277344 56.847656 C 27.652344 57.40625 28.074219 57.921875 28.550781 58.398438 C 29.027344 58.871094 29.542969 59.296875 30.101562 59.667969 C 30.660156 60.042969 31.25 60.355469 31.871094 60.613281 C 32.488281 60.871094 33.128906 61.066406 33.789062 61.195312 C 34.449219 61.328125 35.113281 61.390625 35.785156 61.390625 L 36.238281 61.390625 L 50.28125 211.03125 C 50.363281 211.976562 50.535156 212.902344 50.792969 213.816406 C 51.050781 214.726562 51.390625 215.605469 51.8125 216.457031 C 52.234375 217.304688 52.730469 218.105469 53.300781 218.863281 C 53.871094 219.621094 54.507812 220.316406 55.210938 220.957031 C 55.910156 221.59375 56.664062 222.160156 57.472656 222.660156 C 58.277344 223.15625 59.125 223.578125 60.011719 223.917969 C 60.894531 224.257812 61.804688 224.515625 62.738281 224.683594 C 63.667969 224.855469 64.609375 224.941406 65.558594 224.9375 L 159.457031 224.9375 C 160.40625 224.941406 161.347656 224.855469 162.277344 224.683594 C 163.210938 224.515625 164.121094 224.257812 165.003906 223.917969 C 165.890625 223.578125 166.734375 223.160156 167.542969 222.660156 C 168.347656 222.164062 169.101562 221.59375 169.804688 220.957031 C 170.503906 220.320312 171.140625 219.621094 171.714844 218.867188 C 172.285156 218.109375 172.78125 217.308594 173.203125 216.460938 C 173.625 215.609375 173.964844 214.730469 174.222656 213.820312 C 174.480469 212.90625 174.652344 211.980469 174.734375 211.035156 L 188.777344 61.390625 L 189.230469 61.390625 C 189.902344 61.390625 190.570312 61.328125 191.226562 61.195312 C 191.886719 61.066406 192.527344 60.871094 193.148438 60.613281 C 193.765625 60.355469 194.355469 60.042969 194.914062 59.667969 C 195.472656 59.296875 195.992188 58.871094 196.464844 58.398438 C 196.941406 57.921875 197.363281 57.40625 197.738281 56.847656 C 198.109375 56.292969 198.425781 55.703125 198.683594 55.082031 C 198.941406 54.460938 199.132812 53.824219 199.265625 53.164062 C 199.394531 52.507812 199.460938 51.839844 199.460938 51.171875 L 199.460938 40.949219 C 199.460938 40.277344 199.394531 39.613281 199.265625 38.953125 C 199.132812 38.296875 198.941406 37.65625 198.683594 37.039062 C 198.425781 36.417969 198.109375 35.828125 197.738281 35.269531 C 197.363281 34.710938 196.941406 34.195312 196.464844 33.722656 C 195.992188 33.246094 195.472656 32.824219 194.914062 32.449219 C 194.355469 32.078125 193.765625 31.761719 193.148438 31.503906 C 192.527344 31.25 191.886719 31.054688 191.226562 30.925781 C 190.570312 30.792969 189.902344 30.726562 189.230469 30.726562 Z M 54.816406 10.285156 L 170.199219 10.285156 L 177.023438 30.726562 L 47.992188 30.726562 Z M 166.992188 184.050781 L 58.042969 184.050781 L 49.394531 92.058594 L 175.621094 92.058594 Z M 159.457031 214.714844 L 65.558594 214.714844 C 64.921875 214.714844 64.304688 214.601562 63.710938 214.371094 C 63.117188 214.140625 62.585938 213.8125 62.117188 213.382812 C 61.644531 212.953125 61.269531 212.453125 60.984375 211.882812 C 60.699219 211.316406 60.527344 210.714844 60.46875 210.082031 L 58.984375 194.273438 L 166.03125 194.273438 L 164.546875 210.085938 C 164.488281 210.71875 164.316406 211.320312 164.03125 211.886719 C 163.746094 212.457031 163.371094 212.957031 162.898438 213.382812 C 162.429688 213.8125 161.894531 214.140625 161.300781 214.371094 C 160.710938 214.601562 160.09375 214.714844 159.457031 214.714844 Z M 176.582031 81.835938 L 48.433594 81.835938 L 46.527344 61.390625 L 178.492188 61.390625 Z M 184.117188 51.171875 L 35.785156 51.171875 L 35.785156 40.949219 L 189.230469 40.949219 L 189.230469 51.171875 Z M 184.117188 51.171875" />
                                        </svg>
                                        <span className="interactive-code__steam" aria-hidden="true">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </span>
                                )}
                                <br />
                            </span>
                        ))}

                        <span className="hero__code-line">
                            {'}'}
                            <span
                                className={`interactive-code__cursor ${showCursor ? 'interactive-code__cursor--visible' : ''}`}
                                aria-hidden="true"
                            >
                                ▊
                            </span>
                        </span>
                    </code>

                    {!konamiMode ? (
                        <p className="interactive-code__hint" aria-hidden="true">
                            💡 Click values to explore • 🎲 Shuffle all
                        </p>
                    ) : (
                        <p className="interactive-code__hint interactive-code__hint--konami" aria-hidden="true">
                            ✨ You found the secret! Press ESC to return ✨
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
