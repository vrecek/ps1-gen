import '@/css/ElementsPanel.css'
import CurrentElement from './CurrentElement'
import { IElementsPanel } from '@/interfaces/ShellInterfaces'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import ElementsArrow from './ElementsArrow'
import SwitchElements from './SwitchElements'


const ElementsPanel = ({ elements, setElements, setHighlighted, highlighted, setToggled }: IElementsPanel) => {
    return (
        <section className="elements-panel">

            <div className='entry-wrap'>

                <p className="title">Elements ({elements.length})</p>

                {
                    highlighted &&
                    <SwitchElements 
                        highlighted={highlighted} 
                        setElements={setElements}
                    />
                }

            </div>

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
                                fg={x.foreground}
                                bg={x.background}
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