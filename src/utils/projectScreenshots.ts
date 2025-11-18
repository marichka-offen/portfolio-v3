const screenshotModules = import.meta.glob<string>(
    '@/assets/images/screenshots/**/*.{png,jpg,jpeg,webp,avif}',
    { eager: true, import: 'default' },
)

type ScreenshotEntry = { src: string, orderKey: string }

const groupedScreenshots = Object.entries(screenshotModules).reduce<Record<string, ScreenshotEntry[]>>((acc, [path, src]) => {
    const match = path.match(/screenshots\/([^/]+)\/([^/]+)$/)
    if (!match) {
        return acc
    }

    const [, slug, fileName] = match

    if (!acc[slug]) {
        acc[slug] = []
    }

    acc[slug].push({ src, orderKey: fileName })
    return acc
}, {})

const orderedScreenshots = Object.entries(groupedScreenshots).reduce<Record<string, string[]>>((acc, [slug, entries]) => {
    acc[slug] = entries
        .sort((a, b) => a.orderKey.localeCompare(b.orderKey, undefined, { numeric: true }))
        .map(({ src }) => src)
    return acc
}, {})

export function getProjectScreenshots(slug: string) {
    return orderedScreenshots[slug] ?? []
}
