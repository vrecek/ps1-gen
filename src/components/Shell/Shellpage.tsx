import '@/css/Shellpage.css'
import AddPanel from './AddPanel/AddPanel'
import ElementsPanel from './ElementsPanel/ElementsPanel'
import OutputPanel from './OutputPanel/OutputPanel'
import { IElementState } from '@/interfaces/ShellInterfaces'
import React from 'react'


const Shellpage = () => {
    const SHELL: string = window.location.pathname.slice(1)
    const [elements, setElements] = React.useState<IElementState[]>([])

    
    return (
        <main className="shellpage">

            <h1>{SHELL}</h1>

            <div className='main-wrap'>

                <AddPanel 
                    setElements={setElements}
                />

                <section className='elem-wrap'>

                    <ElementsPanel 
                        elements={elements}
                        setElements={setElements}
                    />
                    <OutputPanel />

                </section>

            </div>

        </main>
    )
}


export default Shellpage