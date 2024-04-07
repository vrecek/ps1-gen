import Icon from "@/components/Common/Icon"
import { IElementsStateFn } from "@/interfaces/ShellInterfaces";
import generateID from "@/utils/generateID";
import { CiSquarePlus } from "react-icons/ci";


const CustomText = ({ setElements }: IElementsStateFn) => {
    const addCustomWord = (e: React.MouseEvent): void => {
        const t:     HTMLElement = e.currentTarget! as HTMLElement,
              input: HTMLInputElement = t.parentElement!.children[0] as HTMLInputElement,
              val:   string = input.value.replaceAll("'", '')
        

        if (val.length <= 0 || val.length > 10)
            return

        setElements(curr => {
            curr.push({
                id: generateID(),
                text: val,
                originalValue: val,
                prvText: val,
                value: val
            })
            return [...curr]
        })

        input.value = ''
    }


    return (
        <div className="custom-text">

            <p>Custom text (max 10 characters)</p>

            <div>

                <input type="text" spellCheck='false' />
                <Icon icon={<CiSquarePlus />} clickFn={addCustomWord} />

            </div>

        </div>
    )
}


export default CustomText