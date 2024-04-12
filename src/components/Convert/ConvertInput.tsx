import { IConvertInput } from "@/interfaces/ConvertInterfaces"
import Button from "../Common/Button"
import { extendBashCodeValues, extendZshCodeValues } from "@/utils/shell_init"
import bashToZsh from "@/utils/bashToZsh"
import zshToBash from "@/utils/zshToBash"


const ConvertInput = ({ setFn, base }: IConvertInput) => {
    const convertFn = (e: React.FormEvent): void => {
        e.preventDefault()

        const {value} = (e.currentTarget as HTMLFormElement).elements[0] as HTMLInputElement
        
        let newValue: string = value,
            infoArr:  string[][]

        // Trim the PS1='', PS1=$''
        if (!newValue.indexOf("PS1="))
        {
            const startTrim: number = !newValue.indexOf("PS1=$") ? 6 : 5
            newValue = newValue.slice(startTrim, newValue.length - 1)
        }

        if (base === 'zsh')
        {
            infoArr = [extendZshCodeValues, extendBashCodeValues]

            newValue = zshToBash('%F', "%f", '\\e\[38;2;', newValue)
            newValue = zshToBash('%K', '%k', '\\e\[48;2;', newValue)

            newValue = newValue.replaceAll('%B', '\\e[1m').replaceAll('%b', '\\e[0m')
        }
        else
        {
            infoArr = [extendBashCodeValues, extendZshCodeValues]

            newValue = bashToZsh('\\e\[38;2', '%f', '%F', newValue)
            newValue = bashToZsh('\\e\[48;2', '%k', '%K', newValue)

            newValue = newValue.replaceAll('\\e[1m', '%B').replaceAll('\\e[0m', '%b')
        }
 

        // elements: \u -> %n, \h -> %m
        for (let i = 0; i < infoArr[0].length; i++)
            newValue = newValue.replaceAll(infoArr[0][i], infoArr[1][i])


        setFn(newValue)
    }


    return (
        <section className="convert-input">

            <p className="type">input</p>

            <form onSubmit={convertFn}>

                <input type="text" spellCheck='false' />
                
                <Button txt="Convert" />

            </form>

        </section>
    )
}


export default ConvertInput