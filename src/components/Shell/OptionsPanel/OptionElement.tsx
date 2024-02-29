import Icon from "@/components/Common/Icon"
import { IOptionElement } from "@/interfaces/ShellInterfaces"


const OptionElement = ({text, icon, clickFn}: IOptionElement) => {
    return (
        <div onClick={clickFn} className="option disabled">

            <Icon icon={icon} />

            <p>{text}</p>

        </div>
    )
}


export default OptionElement