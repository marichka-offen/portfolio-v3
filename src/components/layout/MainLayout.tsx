import { Outlet } from 'react-router-dom'
import SkipLink from './SkipLink'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function MainLayout() {
    return (
        <>
            <SkipLink />
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}