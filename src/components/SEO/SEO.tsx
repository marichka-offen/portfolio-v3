import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
    title?: string
    description?: string
    image?: string
    type?: 'website' | 'article'
    canonical?: string
}

export default function SEO({
    title = 'Marichka Offen - Frontend Engineer',
    description = 'Frontend engineer specializing in React, TypeScript, Shopify, and accessible web experiences. 6+ years shipping production code for brands like Rare Beauty, Barnes & Noble, and Stumptown Coffee Roasters.',
    image = 'https://marichka.dev/og-image.png',
    type = 'website',
    canonical
}: SEOProps) {
    const location = useLocation()
    const baseUrl = 'https://marichka.dev'
    const currentUrl = canonical || `${baseUrl}${location.pathname}`

    // Full title with brand
    const fullTitle = title.includes('Marichka Offen')
        ? title
        : `${title} | Marichka Offen - Frontend Engineer`

    useEffect(() => {
        // Update document title
        document.title = fullTitle

        // Update or create meta tags
        const updateMetaTag = (property: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name'
            let element = document.querySelector(`meta[${attribute}="${property}"]`)

            if (!element) {
                element = document.createElement('meta')
                element.setAttribute(attribute, property)
                document.head.appendChild(element)
            }

            element.setAttribute('content', content)
        }

        // Update basic meta tags
        updateMetaTag('description', description)

        // Update Open Graph tags
        updateMetaTag('og:title', title, true)
        updateMetaTag('og:description', description, true)
        updateMetaTag('og:image', image, true)
        updateMetaTag('og:url', currentUrl, true)
        updateMetaTag('og:type', type, true)

        // Update Twitter Card tags
        updateMetaTag('twitter:title', title)
        updateMetaTag('twitter:description', description)
        updateMetaTag('twitter:image', image)

        // Update or create canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]')
        if (!canonicalLink) {
            canonicalLink = document.createElement('link')
            canonicalLink.setAttribute('rel', 'canonical')
            document.head.appendChild(canonicalLink)
        }
        canonicalLink.setAttribute('href', currentUrl)
    }, [fullTitle, title, description, image, type, currentUrl])

    return null
}
