import { Outlet } from 'react-router-dom'
import SkipLink from './SkipLink'
import Header from './Header'
import Footer from './Footer'

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