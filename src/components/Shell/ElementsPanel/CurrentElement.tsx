import Icon from "@/components/Common/Icon"
import { ICurrentElement } from "@/interfaces/ShellInterfaces";
import { FaTimes } from "react-icons/fa";


const ElementsOption = ({
    text, setElements, elementID, setHighlighted, highlighted, setToggled, bg, fg
}: ICurrentElement) => {

    const isHighlighted: boolean = elementID === highlighted

    const deleteElement = (): void => {
        if (isHighlighted) {
            setHighlighted(null)
            setToggled(null)
        }

        setElements(curr => {
            const i: number = curr.findIndex(x => x.id === elementID) 

            if (i !== -1)
                curr.splice(i, 1)

            return [...curr]
        })
    }

    const highlightOption = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target! as HTMLElement
        
        if (t.className !== 'del-icon')
            setHighlighted(elementID)
    }


    return (
        <div 
            onClick={highlightOption} 
            className={`current-option ${isHighlighted ? 'toggled' : ''}`}
            style={{color: fg, background: bg}}
        >

            <p>{text}</p>
            <Icon 
                cname="del-icon"
                clickFn={deleteElement}
                icon={<FaTimes />} 
            />

        </div>
    )
}


export default ElementsOption