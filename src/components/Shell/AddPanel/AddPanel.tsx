import '@/css/AddPanel.css'
import { IAddPanel, IPanelOption } from '@/interfaces/ShellInterfaces'
import CustomText from './CustomText'
import OptionsPanel from '../OptionsPanel/OptionsPanel'
import React from 'react'
import generateID from '@/utils/generateID'


const AddPanel = ({ setElements, highlighted, setToggled, toggled }: IAddPanel) => {
    const options: IPanelOption[] = [
        { text: 'Hostname', value: '%m' },
        { text: 'Username', value: '%n' },
        { text: 'Current Path', value: '%~' },
        { text: 'Full path', value: '%/' },
        { text: '24 hour time', value: '%T' },
        { text: 'AM/PM time', value: '%t' },
        { text: 'YY-MM-DD', value: '%D' },
        { text: 'DD-MM-YY', value: '%D{%d-%m-%Y}' },
    ]

    const addElement = (e: React.MouseEvent, type: IPanelOption): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement

        t.style.scale = '.9'
        setTimeout(() => t.style.scale = '1', 100)

        setElements(curr => {
            curr.push({
                ...type, 
                originalValue: type.value,
                id: generateID()
            })

            return [...curr]
        }) 
    }


    return (
        <aside className="add-panel">

            <p className="title">Append</p>

            <div className='wrap-default'>

                {
                    options.map((x, i) => (
                        <p onClick={(e) => addElement(e, x)} key={i}>
                            {x.text}
                        </p>
                    ))
                }

            </div>

            <CustomText setElements={setElements} />

            <OptionsPanel 
                highlighted={highlighted}
                setElements={setElements}
                setToggled={setToggled}
                toggled={toggled}
            />

        </aside>
    )
}


export default AddPanel