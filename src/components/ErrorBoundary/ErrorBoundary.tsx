import { Component, type ReactNode } from 'react'
import './ErrorBoundary.scss'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null })
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback
            }

            return (
                <div className="error-boundary">
                    <div className="error-boundary__content">
                        <h2 className="error-boundary__title">Something went wrong</h2>
                        <p className="error-boundary__message">
                            We couldn't load this page. Please try again.
                        </p>
                        <div className="error-boundary__actions">
                            <button
                                className="error-boundary__btn"
                                onClick={this.handleRetry}
                                type="button"
                            >
                                Try again
                            </button>
                            <a href="/" className="error-boundary__link">
                                Go home
                            </a>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
