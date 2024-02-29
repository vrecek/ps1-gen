import '@/css/index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import Image from './components/Common/Image'
import bg from '@/images/bg.png'
import Shellpage from './components/Shell/Shellpage'
import LayoutNavigation from './components/Layout/LayoutNavigation/LayoutNavigation'


function App() {
    return (
        <>
            <Image src={bg} cname='bg-img' />

            <BrowserRouter>

                <LayoutNavigation />
            
                <Routes>

                    <Route path='/' element={<Homepage />} />
                    <Route path='/bash' element={<Shellpage />} />
                    <Route path='/zsh' element={<Shellpage />} />

                </Routes>

            </BrowserRouter>
        </>
    )
}


export default App
