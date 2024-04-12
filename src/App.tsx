import '@/css/index.css'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import Image from './components/Common/Image'
import bg from '@/images/bg.png'
import Shellpage from './components/Shell/Shellpage'
import LayoutNavigation from './components/Layout/LayoutNavigation/LayoutNavigation'
import Convert from './components/Convert/Convert'


function App() {
    return (
        <>
            <Image src={bg} cname='bg-img' />

            <HashRouter>

                <LayoutNavigation />
            
                <Routes>

                    <Route path='/' element={<Homepage />} />
                    <Route path='/bash' element={<Shellpage shell='bash' />} />
                    <Route path='/zsh' element={<Shellpage shell='zsh' />} />
                    <Route path='/convert' element={<Convert />} />

                </Routes>

            </HashRouter>
        </>
    )
}


export default App
