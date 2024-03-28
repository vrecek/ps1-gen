import Icon from "@/components/Common/Icon"
import { IElementsArrow } from "@/interfaces/ShellInterfaces"


const ElementsArrow = ({ icon, type }: IElementsArrow) => {
    const moveScroll = (e: React.MouseEvent): void => {
        const t:      HTMLElement = e.currentTarget! as HTMLElement,
              bar:    HTMLElement = t.parentElement!.children[1] as HTMLElement,
              MOVEPX: number = 200
        
        type === 'left' 
            ? bar.scrollLeft -= MOVEPX 
            : bar.scrollLeft += MOVEPX

        t.style.scale = '.9'
        setTimeout(() => t.style.scale = '1', 200)
    }


    return (
        <Icon
            cname="element-arrow"
            icon={icon}
            clickFn={moveScroll}
        />
    )
}


export default ElementsArrow