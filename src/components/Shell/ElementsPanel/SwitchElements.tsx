import { ESwitch, IElementState, ISwitchElements } from "@/interfaces/ShellInterfaces"


const SwitchElements = ({ highlighted, setElements }: ISwitchElements) => {
    const switchElement = (type: ESwitch): void => {
        setElements(curr => {
            const i:    number = curr.findIndex(x => x.id === highlighted),
                  cont: Element[] = [...document.querySelector('section.elements-panel div.wrap div.overflow')!.children]

            if (
                curr.length <= 1 || i === -1 ||
                cont.length !== curr.length ||
                type === ESwitch.LEFT && i === 0 ||
                type === ESwitch.RIGHT && i === curr.length - 1
            )
                return [...curr]


            const currBuf: IElementState = curr[i + type]
            
            curr[i + type] = curr[i]
            curr[i] = currBuf

            return [...curr]
        })
    }


    return (
        <div className="switch-element">

            <span onClick={() => switchElement(ESwitch.LEFT)}>&lt;</span>
            <span onClick={() => switchElement(ESwitch.RIGHT)}>&gt;</span>

        </div>
    )
}


export default SwitchElements