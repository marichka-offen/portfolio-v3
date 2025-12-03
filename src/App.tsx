import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import { useScrollToTop } from './hooks/useScrollToTop'
import GradientBackground from '@/components/common/GradientBackground/GradientBackground'
import './App.scss'

export default function App() {
    const location = useLocation()
    useScrollToTop()

    return (
        <div className="app">
            <GradientBackground />

            {/* <SunbeamBackground /> */}

            {/* <MetaBalls
                color="#FFB36A"
                cursorBallColor="#FFB36A"n
                cursorBallSize={2}
                ballCount={25}
                animationSize={10}
                enableMouseInteraction={false}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1.2}
                speed={0.1}
            /> */}

            <div className="app__content">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<HomePage />} />
                            {/* <Route path="about" element={<AboutPage />} />
                            <Route path="projects" element={<ProjectsPage />} />
                            <Route path="projects/:slug" element={<ProjectDetailPage />} /> */}
                        </Route>
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    )
}
