export default function Footer() {
    return (
        <footer>
            <nav aria-label="Secondary navigation">
                <ul>
                    <li>
                        <a href="mailto:[EMAIL]">[EMAIL]</a>
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
                </ul>
            </nav>

            <p>
                <small>[COPYRIGHT_YEAR] [YOUR_NAME]</small>
            </p>
        </footer>
    )
}