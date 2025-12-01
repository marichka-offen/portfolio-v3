import './GradientBackground.scss'

export default function GradientBackground() {
    return (
        <div className="gradient-background">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="blob" />
                        <feBlend in="SourceGraphic" in2="blob" />
                    </filter>
                </defs>
            </svg>
            <div className="gradient-background__container">
                <div className="gradient-background__gradient gradient-background__gradient--one"></div>
                <div className="gradient-background__gradient gradient-background__gradient--two"></div>
                <div className="gradient-background__gradient gradient-background__gradient--three"></div>
                <div className="gradient-background__gradient gradient-background__gradient--four"></div>
                <div className="gradient-background__gradient gradient-background__gradient--five"></div>
                <div className="gradient-background__gradient gradient-background__gradient--interactive"></div>
            </div>
        </div>
    )
}