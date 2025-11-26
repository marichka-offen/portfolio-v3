export default function Connect() {
    return (
        <section aria-labelledby="connect-heading">
            <h2 id="connect-heading">[SECTION_HEADING]</h2>

            <p>[PREFERRED_CONTACT_METHOD_TEXT]</p>

            <ul>
                <li>
                    <a href="mailto:[EMAIL]">Email: [EMAIL]</a>
                </li>
                <li>
                    <a
                        href="[GITHUB_URL]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="[LINKEDIN_URL]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="/resume.pdf" download>
                        Download Resume
                    </a>
                </li>
            </ul>
        </section>
    )
}