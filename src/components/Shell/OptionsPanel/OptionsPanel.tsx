import '@/css/OptionsPanel.css'
import { IoIosColorPalette } from "react-icons/io"
import OptionElement from './OptionElement'
import { IAddPanel, IElementState, IOptionElement, ShellInfo } from '@/interfaces/ShellInterfaces'
import ColorChange from './Options/ColorChange'
import React from 'react'
import hexToRgb from '@/utils/hexToRgb'


const OptionsPanel = ({ highlighted, setElements, setToggled, toggled, shell }: IAddPanel) => {
    const [prevColor, setPrevColor] = React.useState<string>('')
    const options: IOptionElement[] = [
        { text: 'Foreground', icon: <IoIosColorPalette />, clickFn: () => setToggled('foreground') },
        { text: 'Background', icon: <IoIosColorPalette />, clickFn: () => setToggled('background') },
    ]

    const renderOptionMenu = (): JSX.Element => {
        if (!highlighted)
            return <></>

        const colorFn = (hexColor: string, type: 'f' | 'b'): void => {
            const rgb: string = hexToRgb(hexColor)
            let newFG:      string,
                newBG:      string,
                bashCode:   ShellInfo,
                zshCode:    ShellInfo


            if (type === 'f')
            {
                newFG = hexColor
                zshCode = [`%F{${hexColor}}`, '%F{', '%f', hexColor]
                bashCode = [`\\e[38;2;${rgb}`, '\\e[38;2;', '\\e[0m', rgb]
            }
            else
            {
                newBG = hexColor
                zshCode = [`%K{${hexColor}}`, '%K{', '%k', hexColor]
                bashCode = [`\\e[48;2;${rgb}`, '\\e[48;2;', '\\e[0m' , rgb]
            }

            const [code_v, init_v, end_v, clr_v] = shell === 'zsh' ? zshCode : bashCode
            
            setElements(curr => {
                const element:  IElementState = curr.filter(x => x.id === highlighted)[0],
                      value:    string = element.value,
                      modIndex: number = value.indexOf(init_v)

                let   newValue: string

                if (modIndex !== -1)
                {
                    const i_start: number = modIndex + init_v.length
                    newValue = `${value.slice(0, i_start)}${clr_v}${value.slice(i_start + prevColor.length)}`
                }
                else
                    newValue = `${code_v}${value}${end_v}`


                newBG && (element.background = newBG)
                newFG && (element.foreground = newFG)
                element.value = newValue

                return [...curr]
            })

            setPrevColor(clr_v)
            setToggled(null)
        }

        switch (toggled) {
            case 'foreground':
                return  <ColorChange 
                            saveFn={(hex: string) => colorFn(hex, 'f')} 
                            header='Foreground change' 
                            setToggled={setToggled} 
                        />

            case 'background':
                return  <ColorChange 
                            saveFn={(hex: string) => colorFn(hex, 'b')} 
                            header='Background change' 
                            setToggled={setToggled} 
                        />

            default:
                return <></>
        }
    }


    return (
        <section className="options-panel">

            <p className="title">Options</p>

            <div className="wrap">

                { renderOptionMenu() }

                {
                    options.map((x, i) => (
                        <OptionElement
                            cname={highlighted ? '' : 'disabled'}
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