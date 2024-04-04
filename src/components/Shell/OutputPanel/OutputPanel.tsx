import Icon from '@/components/Common/Icon';
import '@/css/OutputPanel.css'
import { IOutputPanel } from '@/interfaces/ShellInterfaces';
import { FaRegClipboard, FaRegTrashAlt } from "react-icons/fa";


const OutputPanel = ({ elements, setElements, setHighlighted, setToggled }: IOutputPanel) => {
    const iconAction = (fn: () => void, e: React.MouseEvent, clickColor: string, iText?: string): void => {
        const t:      HTMLElement = e.currentTarget! as HTMLElement,
              svg:    HTMLElement = [...t.children][0] as HTMLElement

        fn()

        svg.style.color = clickColor
        svg.style.scale = '.85'

        setTimeout(() => {
            svg.style.color = 'rgb(250, 250, 250)'
            svg.style.scale = '1'
        }, 200)

        if (iText) {
            const i: HTMLElement = document.createElement('i')
            i.textContent = iText
            t.append(i)

            setTimeout(() => i.remove(), 1500)
        }
    }


    const copyToClipboard = (e: React.MouseEvent): void => {
        iconAction(() => {
            const prompt: string = elements.map(x => x.value).join('')
            window.navigator.clipboard.writeText(`PS1=$'${prompt}'`)

        }, e, 'rgb(109, 160, 255)', 'Copied ✅')
    }

    const clearPrompt = (e: React.MouseEvent): void => {
        iconAction(() => {
            setElements([])
            setHighlighted(null)
            setToggled(null)

        }, e, 'rgb(250, 57, 57)')
    }


    return (
        <section className="output-panel">

            <p className="title">output</p>

            <div className='container'>

                <p className='out'>
                    PS1=$'{`${elements.map(x => x.value).join('')}`}'
                </p>

                <div>

                    <Icon clickFn={clearPrompt} icon={<FaRegTrashAlt/>} />
                    <Icon clickFn={copyToClipboard} icon={<FaRegClipboard/>} />

                </div>

            </div>

        </section>
    )
}


export default OutputPanel