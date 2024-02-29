import '@/css/Shellpage.css'
import AddPanel from './AddPanel/AddPanel'
import ElementsPanel from './ElementsPanel/ElementsPanel'
import OutputPanel from './OutputPanel/OutputPanel'


const Shellpage = () => {
    const SHELL: string = window.location.pathname.slice(1)


    return (
        <main className="shellpage">

            <h1>{SHELL}</h1>

            <div className='main-wrap'>

                <AddPanel />

                <section className='elem-wrap'>

                    <ElementsPanel />
                    <OutputPanel />

                </section>

            </div>

        </main>
    )
}


export default Shellpage