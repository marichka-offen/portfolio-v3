import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFound/NotFound'

const CaseStudy = lazy(() => import('@/pages/CaseStudy/CaseStudy'))

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/case-studies/:slug"
                    element={
                        <ErrorBoundary>
                            <Suspense fallback={<div className="case-study-loading">Loading...</div>}>
                                <CaseStudy />
                            </Suspense>
                        </ErrorBoundary>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
