import '@/css/OptionsPanel.css'
import { IoIosColorPalette } from "react-icons/io"
import OptionElement from './OptionElement'
import { IAddPanel, IElementState, IOptionElement } from '@/interfaces/ShellInterfaces'
import ColorChange from './Options/ColorChange'


const OptionsPanel = ({ highlighted, setElements, setToggled, toggled }: IAddPanel) => {
    const options: IOptionElement[] = [
        { text: 'Foreground', icon: <IoIosColorPalette />, clickFn: () => setToggled('foreground') },
        { text: 'Background', icon: <IoIosColorPalette />, clickFn: () => setToggled('background') },
    ]

    const renderOptionMenu = (): JSX.Element => {
        const colorFn = (hexColor: string, type: 'f' | 'k'): void => {
            const curr: HTMLElement = document.querySelector('section.elements-panel div.current-option.toggled')!
            
            if (type === 'f')
                (curr.children[0] as HTMLElement).style.color = hexColor
            else if (type === 'k')
                curr.style.background = hexColor

            setElements(curr => {
                const element:   IElementState = curr.filter(x => x.id === highlighted)[0],
                      typeUpper: string = type.toUpperCase(),
                      {value, originalValue} = element

                let newValue:    string = `%${typeUpper}{${hexColor}}${originalValue}%${type}`

                if (value.includes(`%${typeUpper}`)) {
                    const i: number = value.indexOf(`%${typeUpper}`)
                    newValue = `${value.slice(0, i + 3)}${hexColor}${value.slice(i + 10)}`
                }
                else if (
                    type === 'f' && value.includes('%K') ||
                    type === 'k' && value.includes('%F')
                ) {
                    newValue = newValue.replace(originalValue, value)
                }

                element.value = newValue

                return [...curr]
            })

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
                            saveFn={(hex: string) => colorFn(hex, 'k')} 
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