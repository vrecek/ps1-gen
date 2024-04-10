import '@/css/Convert.css'
import ConvertSection from './ConvertSection'
import React from 'react'


const Convert = () => {
    const [bashOut, setBash] = React.useState<string>('')
    const [zshOut, setZsh] = React.useState<string>('')

    const setBashFn = (out: string) => setBash(out)
    const setZshFn = (out: string) => setZsh(out)


    return (
        <main className="convert-page">

            <ConvertSection output={bashOut} setFn={setBashFn} base='bash' />
            <ConvertSection output={zshOut} setFn={setZshFn} base='zsh' />

        </main>
    )
}


export default Convert