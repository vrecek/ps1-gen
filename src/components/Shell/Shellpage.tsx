import '@/css/Shellpage.css'
import AddPanel from './AddPanel/AddPanel'
import ElementsPanel from './ElementsPanel/ElementsPanel'
import OutputPanel from './OutputPanel/OutputPanel'
import { IElementState, IToggledOptions } from '@/interfaces/ShellInterfaces'
import React from 'react'


const Shellpage = () => {
    const SHELL: string = window.location.pathname.slice(1)
    const [elements, setElements] = React.useState<IElementState[]>([])
    const [highlighted, setHighlighted] = React.useState<string | null>(null)
    const [optionToggled, setToggled] = React.useState<IToggledOptions>(null)

    const unHighlight = (e: React.MouseEvent): void => {
        if (highlighted && (e.target as Element).className === 'main-wrap') {
            setHighlighted(null)
            setToggled(null)
        }
    }

    
    return (
        <main onClick={unHighlight} className="shellpage">

            <h1>{SHELL}</h1>

            <div className='main-wrap'>

                <AddPanel 
                    setElements={setElements}
                    highlighted={highlighted}
                    toggled={optionToggled}
                    setToggled={setToggled}
                />

                <section className='elem-wrap'>

                    <ElementsPanel 
                        elements={elements}
                        highlighted={highlighted}
                        setElements={setElements}
                        setHighlighted={setHighlighted}
                        setToggled={setToggled}
                    />
                    <OutputPanel 
                        elements={elements}
                        setElements={setElements}
                        setHighlighted={setHighlighted}
                        setToggled={setToggled}
                    />

                </section>

            </div>

        </main>
    )
}


export default Shellpage