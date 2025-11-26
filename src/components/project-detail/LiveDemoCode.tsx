interface LiveDemoCodeProps {
    demoUrl?: string
    repoUrl?: string
    isPrivate: boolean
    privateExplanation?: string
    guestCredentials?: {
        username: string
        password: string
    }
}

export default function LiveDemoCode({
    demoUrl,
    repoUrl,
    isPrivate,
    privateExplanation,
    guestCredentials
}: LiveDemoCodeProps) {
    return (
        <section aria-labelledby="live-demo-code-heading">
            <h2 id="live-demo-code-heading">[SECTION_HEADING]</h2>

            {demoUrl && (
                <div>
                    <h3>[LIVE_DEMO_SUBHEADING]</h3>
                    <p>
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            [VIEW_LIVE_DEMO_TEXT]
                        </a>
                    </p>

                    {guestCredentials && (
                        <dl>
                            <dt>Username:</dt>
                            <dd>{guestCredentials.username}</dd>
                            <dt>Password:</dt>
                            <dd>{guestCredentials.password}</dd>
                        </dl>
                    )}
                </div>
            )}

            {repoUrl && !isPrivate && (
                <div>
                    <h3>[SOURCE_CODE_SUBHEADING]</h3>
                    <p>
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            [VIEW_ON_GITHUB_TEXT]
                        </a>
                    </p>
                </div>
            )}

            {isPrivate && privateExplanation && (
                <div>
                    <h3>[CODE_UNAVAILABLE_SUBHEADING]</h3>
                    <p>{privateExplanation}</p>
                </div>
            )}
        </section>
    )
}