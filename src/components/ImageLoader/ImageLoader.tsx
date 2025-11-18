import { useState } from "react"
import type { Picture } from "vite-imagetools"
import "./ImageLoader.scss"

type LoadingType = "lazy" | "eager"
type DecodingType = "sync" | "async" | "auto"
type FetchPriority = "high" | "low" | "auto"

interface ImageLoaderProps {
    image: Picture
    sizes: string
    alt: string
    loading?: LoadingType
    decoding?: DecodingType
    fetchPriority?: FetchPriority
    pictureClassName?: string
    imgClassName?: string
    wrapperClassName?: string
}

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ")

export default function ImageLoader({
    image,
    sizes,
    alt,
    loading = "lazy",
    decoding = "async",
    fetchPriority = "auto",
    pictureClassName,
    imgClassName,
    wrapperClassName,
}: ImageLoaderProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const handleLoad = () => setIsLoaded(true)
    const entries = Object.entries(image.sources)

    return (
        <div className={cx("image-loader", isLoaded && "image-loader--loaded", wrapperClassName)}>
            <picture className={pictureClassName}>
                {entries.map(([format, srcSet]) => (
                    <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
                ))}
                <img
                    className={imgClassName}
                    src={image.img.src}
                    width={image.img.w}
                    height={image.img.h}
                    alt={alt}
                    loading={loading}
                    decoding={decoding}
                    fetchPriority={fetchPriority}
                    onLoad={handleLoad}
                    onError={handleLoad}
                />
            </picture>
            <div className="image-loader__spinner" aria-hidden={!isLoaded}>
                <span className="image-loader__sr-text">Loading image...</span>
            </div>
        </div>
    )
}
