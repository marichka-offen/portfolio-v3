import { useState } from 'react'
import { motion } from 'framer-motion'
import './ImageWithPlaceholder.scss'

interface ImageWithPlaceholderProps {
    src: string
    alt: string
    className?: string
    onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void
}

export default function ImageWithPlaceholder({
    src,
    alt,
    className = '',
    onError
}: ImageWithPlaceholderProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleLoad = () => {
        setIsLoaded(true)
    }

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        setHasError(true)
        onError?.(e)
    }

    return (
        <div className={`image-with-placeholder ${className}`}>
            {!isLoaded && !hasError && (
                <div className="image-with-placeholder__skeleton" aria-hidden="true" />
            )}

            {hasError ? (
                <div className="image-with-placeholder__error" role="img" aria-label={alt}>
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                </div>
            ) : (
                <motion.img
                    src={src}
                    alt={alt}
                    className={className}
                    onLoad={handleLoad}
                    onError={handleError}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                />
            )}
        </div>
    )
}
