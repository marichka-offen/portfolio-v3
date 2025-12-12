import './GradientBackground.scss'

export default function GradientBackground() {

    return (
        <div className="gradient-background">
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