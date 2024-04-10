import { IConvertInput } from "@/interfaces/ConvertInterfaces"
import Button from "../Common/Button"


const ConvertInput = ({ setFn, base }: IConvertInput) => {
    const convertFn = (e: React.FormEvent): void => {
        e.preventDefault()

        const {value} = (e.currentTarget as HTMLFormElement).elements[0] as HTMLInputElement
        console.log(value)

        setFn(`${base} set`)
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