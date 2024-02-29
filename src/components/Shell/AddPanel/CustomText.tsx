import Icon from "@/components/Common/Icon"
import { CiSquarePlus } from "react-icons/ci";


const CustomText = () => {
    const addCustomWord = (e: React.MouseEvent): void => {

    }


    return (
        <div className="custom-text">

            <p>Custom text</p>

            <div>

                <input type="text" spellCheck='false' />
                <Icon icon={<CiSquarePlus />} clickFn={addCustomWord} />

            </div>

        </div>
    )
}


export default CustomText