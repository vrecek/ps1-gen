import copyToClipboard from "@/utils/copyToClipboard";
import Icon from "../Common/Icon"
import { FaRegClipboard } from "react-icons/fa";
import { IConvertOutput } from "@/interfaces/ConvertInterfaces";


const ConvertOutput = ({ output, base }: IConvertOutput) => {
    const out: string = 'PS1=' + (base === 'bash' ? '$' : '') + `'${output}'` 


    return (
        <section className="convert-output">

            <p className="type">output</p>

            <div>

                <input className="output-i" type="text" value={out} readOnly />
                <Icon icon={<FaRegClipboard  />} clickFn={(e) => copyToClipboard(e, out)} />

            </div>

        </section>
    )
}


export default ConvertOutput