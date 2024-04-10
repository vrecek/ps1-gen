import Icon from '@/components/Common/Icon';
import '@/css/OutputPanel.css'
import { IOutputPanel } from '@/interfaces/ShellInterfaces';
import copyToClipboard from '@/utils/copyToClipboard';
import { FaRegClipboard, FaRegTrashAlt } from "react-icons/fa";


const OutputPanel = ({ elements, setElements, setHighlighted, setToggled, shell }: IOutputPanel) => {
    const PSout: string = shell === 'zsh' ? "PS1=$'" : "PS1='"

    const copyToClipboardFn = (e: React.MouseEvent): void => {
        const prompt: string = elements.map(x => x.value).join('')
        
        copyToClipboard(e, `${PSout}${prompt}'`)
    }

    const clearPrompt = (e: React.MouseEvent): void => {
        const svg: HTMLElement = [...e.currentTarget!.children][0] as HTMLElement

        svg.style.color = 'rgb(250, 57, 57)'
        svg.style.scale = '.85'

        setTimeout(() => {
            svg.style.color = 'rgb(250, 250, 250)'
            svg.style.scale = '1'
        }, 200)

        setElements([])
        setHighlighted(null)
        setToggled(null)
    }


    return (
        <section className="output-panel">

            <p className="title">output</p>

            <div className='container'>

                <p className='out'>
                    {PSout}{`${elements.map(x => x.value).join('')}`}'
                </p>

                <div>

                    <Icon clickFn={clearPrompt} icon={<FaRegTrashAlt/>} />
                    <Icon clickFn={copyToClipboardFn} icon={<FaRegClipboard/>} />

                </div>

            </div>

        </section>
    )
}


export default OutputPanel