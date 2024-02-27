import Icon from "@/components/Common/Icon"
import { INavbarLinks } from "@/interfaces/LayoutInterfaces"
import { GoHomeFill } from "react-icons/go"
import { SiZsh, SiGnubash } from "react-icons/si"
import { NavigateFunction, useNavigate } from "react-router-dom"


const NavIcons = () => {
    const n:     NavigateFunction = useNavigate()
    const icons: INavbarLinks[] = [

        { icon: <SiZsh />, url: '/' },
        { icon: <SiGnubash />, url: '/bash' },
        { icon: <GoHomeFill />, url: '/zsh' }
        
    ]

    
    return (
        <section className="nav-icons">

            {
                icons.map((x, i) => (
                    <Icon
                        key={i}
                        icon={x.icon}
                        cname="icon"
                        clickFn={() => n(x.url)}
                    />
                ))
            }

        </section>
    )
}


export default NavIcons