import Button from "@/components/Common/Button"
import { IColorChange } from "@/interfaces/ShellInterfaces"


const ColorChange = ({ setToggled, header, saveFn }: IColorChange) => {
    const closeElement = (): void => setToggled(null)

    const save = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              input: HTMLInputElement = [...t.parentElement!.parentElement!.children][1] as HTMLInputElement

        saveFn(input.value)
    }


    return (
        <section className="opt">

            <h6>{header}</h6>

            <input type="color" />

            <div>

                <Button cname="save-btn" txt="Save" clickFn={save} />
                <Button cname="close-btn" txt="Close" clickFn={closeElement} />

            </div>

        </section>
    )
}


export default ColorChange