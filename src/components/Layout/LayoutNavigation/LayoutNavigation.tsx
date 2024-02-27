import Logo from "./Logo"
import NavIcons from "./NavIcons"
import SocialIcons from "./SocialIcons"
import '@/css/LayoutNavigation.css'


const LayoutNavigation = () => {
    return (
        <nav className="layout-navigation">

            <SocialIcons />
            <Logo />
            <NavIcons />

        </nav>
    )
}


export default LayoutNavigation