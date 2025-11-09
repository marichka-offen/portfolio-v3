import './BackgroundLight.scss'

export default function BackgroundLight() {
    return (
        <div className="light__container">
            <div className="light__group">
                <div className="light light--1"></div>
                <div className="light light--2"></div>
                <div className="light light--3"></div>
            </div>
            <div className="light__overlay"></div>
        </div>
    )
}