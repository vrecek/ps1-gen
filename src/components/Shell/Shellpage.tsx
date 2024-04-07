import '@/css/Shellpage.css'
import AddPanel from './AddPanel/AddPanel'
import ElementsPanel from './ElementsPanel/ElementsPanel'
import OutputPanel from './OutputPanel/OutputPanel'
import { IElementState, IShellPage, IToggledOptions } from '@/interfaces/ShellInterfaces'
import React from 'react'
import PreviewPanel from './PreviewPanel/PreviewPanel'


const Shellpage = ({ shell }: IShellPage) => {
    const [elements, setElements] = React.useState<IElementState[]>([])
    const [highlighted, setHighlighted] = React.useState<string | null>(null)
    const [optionToggled, setToggled] = React.useState<IToggledOptions>(null)

    React.useEffect(() => {
        setElements([])
        setHighlighted(null)
        setToggled(null)

    }, [window.location.pathname])

    const unHighlight = (e: React.MouseEvent): void => {
        if (highlighted && (e.target as Element).className === 'main-wrap') {
            setHighlighted(null)
            setToggled(null)
        }
    }

    
    return (
        <main onClick={unHighlight} className="shellpage">

            <h1>{shell}</h1>

            <div className='main-wrap'>

                <AddPanel 
                    shell={shell}
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
                        shell={shell}
                        elements={elements}
                        setElements={setElements}
                        setHighlighted={setHighlighted}
                        setToggled={setToggled}
                    />
                    <PreviewPanel
                        elements={elements}
                        shell={shell}
                    />

                </section>

            </div>

        </main>
    )
}


export default Shellpage