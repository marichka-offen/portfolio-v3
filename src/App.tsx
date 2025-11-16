import { Routes, Route } from 'react-router-dom'
import BackgroundLight from './components/BackgroundLight/BackgroundLight'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound'
import './App.scss'
import ScrollToHash from './components/ScrollToHash/ScrollToHash'
import Footer from './components/Footer/Footer'

function App() {

    return (
        <>
            <BackgroundLight />
            <main className='app__container'>
                <Navbar />
                <ScrollToHash />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/blog" element={<Blog />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </main>
        </>
    )
}

export default App
