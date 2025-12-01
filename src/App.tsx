import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import { useScrollToTop } from './hooks/useScrollToTop'

import GradientBackground from '@/components/common/GradientBackground/GradientBackground'
import Header from '@/components/common/Header/Header'
import './App.scss'

export default function App() {
    const location = useLocation()
    useScrollToTop()

    return (
        <div className="app">
            <GradientBackground />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="projects" element={<ProjectsPage />} />
                        <Route path="projects/:slug" element={<ProjectDetailPage />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </div>
    )
}
