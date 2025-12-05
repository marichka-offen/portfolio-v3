import './LiveDemoCode.scss'

interface LiveDemoCodeProps {
    demoUrl?: string
    repoUrl?: string
    isPrivate?: boolean
}

export default function LiveDemoCode({ demoUrl, repoUrl, isPrivate }: LiveDemoCodeProps) {

    if (!demoUrl && !repoUrl) return null

    return (
        <section className="live-demo-code">
            <div className="live-demo-code__container">
                <h2 className="live-demo-code__heading">
                    {demoUrl && repoUrl ? 'Demo & Code' : demoUrl ? 'Live Demo' : 'View Code'}
                </h2>

                <div className="live-demo-code__links">
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-demo-code__link live-demo-code__link--demo"
                        >
                            View Live Demo
                            <span>→</span>
                        </a>
                    )}

                    {repoUrl && !isPrivate && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-demo-code__link live-demo-code__link--code"
                        >
                            View Code
                            <span>{'<>'}</span>
                        </a>
                    )}
                </div>

                {isPrivate && (
                    <p className="live-demo-code__private-note">
                        Code is proprietary—available upon request for review
                    </p>
                )}
            </div>
        </section>
    )
}