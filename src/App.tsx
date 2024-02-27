import '@/css/index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/Home/Homepage'
import Image from './components/Common/Image'
import bg from '@/images/bg.png'


function App() {
    return (
        <>
            <Image src={bg} cname='bg-img' />

            <BrowserRouter>
            
                <Routes>

                    <Route path='/' element={<Homepage />} />
                    <Route path='/:var' element={<Homepage />} />

                </Routes>

            </BrowserRouter>
        </>
    )
}


export default App
