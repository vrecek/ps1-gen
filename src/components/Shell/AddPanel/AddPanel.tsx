import '@/css/AddPanel.css'
import { IElementsStateFn, IPanelOption } from '@/interfaces/ShellInterfaces'
import CustomText from './CustomText'
import OptionsPanel from '../OptionsPanel/OptionsPanel'
import React from 'react'


const AddPanel = ({ setElements }: IElementsStateFn) => {
    const options: IPanelOption[] = [
        { text: 'Hostname', value: '%m' },
        { text: 'Username', value: '%n' },
        { text: 'Current Path', value: '%~' },
        { text: 'Full path', value: '%/' },
        { text: '24 hour time', value: '%T' },
        { text: 'AM/PM time', value: '%t' },
        { text: 'YY-MM-DD', value: '%D' },
        { text: 'DD-MM-YY', value: '%D{%d-%m-%Y}' },
    ].map(x => { return {...x, id: Math.random().toString(16).slice(2) } })

    const addElement = (e: React.MouseEvent, type: IPanelOption): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement
        t.style.scale = '.9'
        setTimeout(() => t.style.scale = '1', 100)

        setElements(curr => {
            curr.push({...type})
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

            <CustomText />

            <OptionsPanel />

        </aside>
    )
}


export default AddPanel