import '@/css/ElementsPanel.css'
import CurrentElement from './CurrentElement'


const ElementsPanel = () => {
    const opts: string[] = ['test', 'hostname', 'username', '💀']


    return (
        <section className="elements-panel">

            <p className="title">Elements</p>

            <div className='wrap'>

                {
                    opts.map((x, i) => (
                        <CurrentElement 
                            key={i}
                            text={x}
                        />
                    ))
                }
                
            </div>

        </section>
    )
}


export default ElementsPanel