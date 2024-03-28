import Icon from "@/components/Common/Icon"
import { ICurrentElement } from "@/interfaces/ShellInterfaces";
import { FaTimes } from "react-icons/fa";


const ElementsOption = ({ text, setElements, elementID }: ICurrentElement) => {
    const deleteElement = (): void => {
        setElements(curr => {
            const i: number = curr.findIndex(x => x.id === elementID) 

            if (i !== -1)
                curr.splice(i, 1)

            return [...curr]
        })
    }


    return (
        <div className="current-option">

            <p>{text}</p>
            <Icon 
                clickFn={deleteElement}
                icon={<FaTimes />} 
            />

        </div>
    )
}


export default ElementsOption