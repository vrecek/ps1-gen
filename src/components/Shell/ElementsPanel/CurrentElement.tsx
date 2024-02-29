import Icon from "@/components/Common/Icon"
import { ICurrentElement } from "@/interfaces/ShellInterfaces";
import { FaTimes } from "react-icons/fa";


const ElementsOption = ({ text }: ICurrentElement) => {
    return (
        <div className="current-option">

            <p>{text}</p>
            <Icon icon={<FaTimes />} />

        </div>
    )
}


export default ElementsOption