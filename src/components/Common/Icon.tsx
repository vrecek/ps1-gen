import { IIcon } from "@/interfaces/CommonInterfaces"


const Icon = ({ icon, cname, clickFn }: IIcon) => {
    return (
        <span onClick={clickFn} className={cname}>

            {icon}

        </span>
    )
}


export default Icon