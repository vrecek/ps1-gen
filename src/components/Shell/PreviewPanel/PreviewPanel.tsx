import '@/css/PreviewPanel.css'
import { IShellPreview } from '@/interfaces/ShellInterfaces'


const PreviewPanel = ({ elements, shell }: IShellPreview) => {
    const displayElements = (): JSX.Element => {
        const rxStr: string[] = 
            shell === 'zsh' 
                ? ['%F{(#[a-z0-9]{6})', '%K{(#[a-z0-9]{6})'] 
                : ['\\e\\[38;2;([^m]+)m', '\\e\\[48;2;([^m]+)m']


        return (
            <p className='out'>
            {
                elements.map(x => {
                    const fg_bg: string[] = ['', '']

                    for (let i = 0; i < 2; i++) 
                    {
                        const rx:     RegExp = new RegExp(`${rxStr[i]}`),
                              hexClr: string | undefined = x.value.match(rx)?.[1]


                        if (hexClr) 
                        {
                            if (hexClr.includes(';')) 
                            {
                                const rgb: string = `rgb(${hexClr.replaceAll(';', ',')})`
                                fg_bg[i] = rgb

                                continue
                            }
                            
                            fg_bg[i] = hexClr
                        }
                    }

                    return <span key={x.id} style={{color: fg_bg[0], background: fg_bg[1]}}>
                        {x.prvText}
                    </span>
                })
            }
            </p>
        )
    }


    return (
        <section className="preview-panel">

            <p className="title">preview</p>

            <div className="preview">{displayElements()}</div>

        </section>
    )
}


export default PreviewPanel