import '@/css/ElementsPanel.css'
import CurrentElement from './CurrentElement'
import { IElementsPanel } from '@/interfaces/ShellInterfaces'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import ElementsArrow from './ElementsArrow'


const ElementsPanel = ({ elements, setElements }: IElementsPanel) => {
    return (
        <section className="elements-panel">

            <p className="title">Elements</p>

            <div className='wrap'>

                <ElementsArrow icon={<FaArrowCircleLeft />} type='left' />

                <div className="overflow">
                    {
                        elements.map((x, i) => (
                            <CurrentElement 
                                key={i}
                                setElements={setElements}
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