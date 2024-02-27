import Icon from "@/components/Common/Icon"
import { IHeaderOption } from "@/interfaces/HomeInterfaces"
import { NavigateFunction, useNavigate } from "react-router-dom"


const SelectOption = ({ icon, text, url }: IHeaderOption) => {
    const n: NavigateFunction = useNavigate()


    return (
        <div onClick={() => n(url)} className="select">

            <Icon icon={icon} />
            <p>{text}</p>

        </div>
    )
}


export default SelectOption