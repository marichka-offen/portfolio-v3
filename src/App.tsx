import { Routes, Route } from 'react-router-dom'
import { useRef } from 'react'
import BackgroundLight from './components/BackgroundLight/BackgroundLight'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About/About'
import Project from './pages/Project/Project'
import NotFound from './pages/NotFound'
import './App.scss'
import ScrollToHash from './components/ScrollToHash/ScrollToHash'
import Footer from './components/Footer/Footer'

function App() {
    const toTopButton = useRef<HTMLButtonElement>(null)

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 500) {
            toTopButton.current!.style.display = "flex"
        } else {
            toTopButton.current!.style.display = "none"
        }
    }

    window.onscroll = function () { scrollFunction() }

    return (
        <>
            <BackgroundLight />
            <div className='app__container'>
                <Navbar />
                <main>
                    <ScrollToHash />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects/:slug" element={<Project />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>

            <button ref={toTopButton} type='button' title='Scroll to top' className="app__back-to-top" onClick={handleScrollToTop}>↑</button>
        </>
    )
}

export default App
