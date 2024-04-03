import Icon from "@/components/Common/Icon"
import { IOptionElement } from "@/interfaces/ShellInterfaces"


const OptionElement = ({text, icon, cname, clickFn}: IOptionElement) => {
    return (
        <div onClick={clickFn} className={`option ${cname}`}>

            <Icon icon={icon} />

            <p>{text}</p>

        </div>
    )
}


export default OptionElement