import Icon from '@/components/Common/Icon';
import '@/css/OutputPanel.css'
import { FaRegClipboard } from "react-icons/fa";


const OutputPanel = () => {
    const copyToClipboard = (e: React.MouseEvent): void => {
        const t:   HTMLElement = e.currentTarget! as HTMLElement,
              svg: HTMLElement = [...t.children as HTMLCollectionOf<HTMLElement>].slice(-1)[0]


        window.navigator.clipboard.writeText('xdd')

        svg.style.color = 'rgb(109, 160, 255)'
        svg.style.scale = '.85'

        setTimeout(() => {
            svg.style.color = 'rgb(250, 250, 250)'
            svg.style.scale = '1'
        }, 200)

        const i: HTMLElement = document.createElement('i')
        i.textContent = 'Copied ✅'
        t.prepend(i)

        setTimeout(() => i.remove(), 1500)
    }


    return (
        <section className="output-panel">

            <p className="title">output (copy to ~/.zshrc)</p>

            <div>

                <p className='out'>
                    PS1=$'{``}'
                </p>

                <Icon clickFn={copyToClipboard} icon={<FaRegClipboard/>} />

            </div>

        </section>
    )
}


export default OutputPanel