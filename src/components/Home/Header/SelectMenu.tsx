import { IHeaderOption } from "@/interfaces/HomeInterfaces"
import SelectOption from "./SelectOption"
import { SiGnubash, SiZsh } from "react-icons/si"
import { HiOutlineSwitchHorizontal } from "react-icons/hi";


const SelectMenu = () => {
    const selects: IHeaderOption[] = [
        { url: '/zsh', icon: <SiZsh />, text: 'ZSH' },
        { url: '/convert', icon: <HiOutlineSwitchHorizontal />, text: 'Convert' },
        { url: '/bash', icon: <SiGnubash />, text: 'Bash' }
    ]


    return (
        <section className="select-section">

            {
                selects.map((x, i) => (
                    <SelectOption
                        key={i}
                        icon={x.icon}
                        text={x.text}
                        url={x.url}
                    />
                ))
            }

        </section>
    )
}


export default SelectMenu