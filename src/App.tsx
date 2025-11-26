import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:slug" element={<ProjectDetailPage />} />
            </Route>
        </Routes>
    )
}

export default App