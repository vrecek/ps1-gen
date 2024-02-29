import '@/css/AddPanel.css'
import { IPanelOption } from '@/interfaces/ShellInterfaces'
import CustomText from './CustomText'
import OptionsPanel from '../OptionsPanel/OptionsPanel'


const AddPanel = () => {
    const options: IPanelOption[] = [
        { name: 'Hostname', value: '%m' },
        { name: 'Username', value: '%n' },
        { name: 'Current Path', value: '%~' },
        { name: 'Full path', value: '%/' },
        { name: '24 hour time', value: '%T' },
        { name: 'AM/PM time', value: '%t' },
        { name: 'YY-MM-DD Date', value: '%D' },
        { name: 'DD-MM-YY Date', value: '%D{%d-%m-%Y}' },
    ]


    return (
        <aside className="add-panel">

            <p className="title">Append</p>

            <div className='wrap-default'>

                {
                    options.map((x, i) => (
                        <p key={i}>{x.name}</p>
                    ))
                }

            </div>

            <CustomText />

            <OptionsPanel />

        </aside>
    )
}


export default AddPanel