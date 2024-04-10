import '@/css/AddPanel.css'
import { IAddPanel, IPanelOption } from '@/interfaces/ShellInterfaces'
import CustomText from './CustomText'
import OptionsPanel from '../OptionsPanel/OptionsPanel'
import React from 'react'
import generateID from '@/utils/generateID'
import shellInsertValues from '@/utils/shell_init'


const AddPanel = ({ setElements, highlighted, setToggled, toggled, shell }: IAddPanel) => {
    const options: IPanelOption[] = shellInsertValues(shell)

    const addElement = (e: React.MouseEvent, type: IPanelOption): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement

        t.style.scale = '.9'
        setTimeout(() => t.style.scale = '1', 100)

        setElements(curr => {
            curr.push({
                ...type, 
                originalValue: type.value,
                id: generateID(),
                background: '',
                foreground: ''
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
                shell={shell}
            />

        </aside>
    )
}


export default AddPanel