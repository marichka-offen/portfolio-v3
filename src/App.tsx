import { Routes, Route } from 'react-router-dom'
import BackgroundLight from './components/BackgroundLight/BackgroundLight'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import './App.scss'

function App() {

    return (
        <>
            <BackgroundLight />
            <main className='app__container'>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/blog" element={<Blog />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    )
}

export default App
