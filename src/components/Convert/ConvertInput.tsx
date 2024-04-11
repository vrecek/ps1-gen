import { IConvertInput } from "@/interfaces/ConvertInterfaces"
import Button from "../Common/Button"
import { bashCodeValues, zshCodeValues } from "@/utils/shell_init"
import rgbToHex from "@/utils/rgbToHex"


const ConvertInput = ({ setFn, base }: IConvertInput) => {
    const convertFn = (e: React.FormEvent): void => {
        e.preventDefault()

        const {value} = (e.currentTarget as HTMLFormElement).elements[0] as HTMLInputElement
        
        let newValue: string = value,
            leftArr:  string[],
            rightArr: string[],
            shellObj

        const bashObj = {
            fgStart: '\\e\[38;2',
            bgStart: '\\e\[48;2',
        }


        if (base === 'zsh')
        {
            leftArr = zshCodeValues
            rightArr = bashCodeValues
            shellObj = bashObj
        }
        else
        {
            leftArr = bashCodeValues
            rightArr = zshCodeValues
            shellObj = bashObj
        }


        const fn = (start: string, lowSymbol: string, uppSymbol: string) => {
            while (true)
            {
                // Index of a starting element \e[xx;2
                const startIndex: number = newValue.indexOf(start)

                if (startIndex === -1)
                    break

                // Slice the RGB from the \e[xx;2;x;x;xm
                const rgb: string = newValue.slice(
                    startIndex + 8, 
                    newValue.indexOf('m', startIndex)
                )
                const hex: string = rgbToHex(rgb)

                // Replace the bash color \e[xx;2;x;x;xm -> %X{#xxxxxx}
                const zshValue: string = `${uppSymbol}{${hex}}`
                newValue = newValue.replace(`${start};${rgb}m`, zshValue)

                // Index of a ending element \e[0m
                const endIndex: number = newValue.indexOf('\\e[0m', newValue.indexOf(zshValue))

                // Slice the string to replace the \e[0m that matches the zsh color placement
                newValue = `${newValue.slice(0, endIndex)}${lowSymbol}${newValue.slice(endIndex + 5)}`
            }
        }
        
        const {fgStart, bgStart} = shellObj

        // colors: BASH -> ZSH
        fn(fgStart, '%f', '%F')
        fn(bgStart, '%k', '%K')
 

        // elements: \u -> %n, \h -> %m, etc...
        for (let i = 0; i < leftArr.length; i++)
            newValue = newValue.replaceAll(leftArr[i], rightArr[i])


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