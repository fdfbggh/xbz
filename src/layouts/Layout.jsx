import Navbar from '../../components/navbar'
import NavbarMobile from '../../components/navbar_mobile'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer_mobile'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <NavbarMobile />

            <main>{children}</main>

            <Footer />
            <FooterMobile />
        </>
    )
}