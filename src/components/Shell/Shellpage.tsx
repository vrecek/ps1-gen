import '@/css/Shellpage.css'
import AddPanel from './AddPanel/AddPanel'
import ElementsPanel from './ElementsPanel/ElementsPanel'
import OutputPanel from './OutputPanel/OutputPanel'
import { IElementState } from '@/interfaces/ShellInterfaces'
import React from 'react'


const Shellpage = () => {
    const SHELL: string = window.location.pathname.slice(1)
    const [elements, setElements] = React.useState<IElementState[]>([])
    const [highlighted, setHighlighted] = React.useState<string | null>(null)

    const unHighlight = (e: React.MouseEvent): void => {
        if (highlighted && (e.target as Element).className === 'main-wrap')
            setHighlighted(null)
    }

    
    return (
        <main onClick={unHighlight} className="shellpage">

            <h1>{SHELL}</h1>

            <div className='main-wrap'>

                <AddPanel 
                    setElements={setElements}
                    highlighted={highlighted}
                />

                <section className='elem-wrap'>

                    <ElementsPanel 
                        elements={elements}
                        highlighted={highlighted}
                        setElements={setElements}
                        setHighlighted={setHighlighted}
                    />
                    <OutputPanel 
                        elements={elements}
                        setElements={setElements}
                    />

                </section>

            </div>

        </main>
    )
}


export default Shellpage