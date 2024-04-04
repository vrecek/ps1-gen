import '@/css/ElementsPanel.css'
import CurrentElement from './CurrentElement'
import { IElementsPanel } from '@/interfaces/ShellInterfaces'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import ElementsArrow from './ElementsArrow'


const ElementsPanel = ({ elements, setElements, setHighlighted, highlighted, setToggled }: IElementsPanel) => {
    return (
        <section className="elements-panel">

            <p className="title">Elements ({elements.length})</p>

            <div className='wrap'>

                <ElementsArrow icon={<FaArrowCircleLeft />} type='left' />

                <div className="overflow">
                    {
                        elements.map((x, i) => (
                            <CurrentElement 
                                key={i}
                                setElements={setElements}
                                setHighlighted={setHighlighted}
                                highlighted={highlighted}
                                setToggled={setToggled}
                                text={x.text}
                                elementID={x.id}
                            />
                        ))
                    }
                </div>

                <ElementsArrow icon={<FaArrowCircleRight />} type='right' />
                
            </div>

        </section>
    )
}


export default ElementsPanel