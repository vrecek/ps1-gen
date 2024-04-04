import { IButton } from "@/interfaces/CommonInterfaces"


const Button = ({ txt, cname, clickFn }: IButton) => {
    return (
        <button onClick={clickFn} className={cname}>
            {txt}
        </button>
    )
}


export default Button