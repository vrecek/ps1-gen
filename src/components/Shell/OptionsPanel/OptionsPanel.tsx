import '@/css/OptionsPanel.css'
import { IoIosColorPalette } from "react-icons/io"
import OptionElement from './OptionElement'
import { IOptionElement } from '@/interfaces/ShellInterfaces'


const OptionsPanel = () => {
    const options: IOptionElement[] = [
        { text: 'Foreground', icon: <IoIosColorPalette />, clickFn: ()=>{} },
        { text: 'Background', icon: <IoIosColorPalette />, clickFn: ()=>{} },
    ]


    return (
        <section className="options-panel">

            <p className="title">Options</p>

            <div className="wrap">

                {
                    options.map((x, i) => (
                        <OptionElement
                            key={i}
                            text={x.text}
                            icon={x.icon}
                            clickFn={x.clickFn}
                        />
                    ))
                }

            </div>

        </section>
    )
}


export default OptionsPanel