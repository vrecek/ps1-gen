import copyToClipboard from "@/utils/copyToClipboard";
import Icon from "../Common/Icon"
import { FaRegClipboard } from "react-icons/fa";
import { IConvertOutput } from "@/interfaces/ConvertInterfaces";


const ConvertOutput = ({ output }: IConvertOutput) => {
    return (
        <section className="convert-output">

            <p className="type">output</p>

            <div>

                <input className="output-i" type="text" value={output} readOnly />
                <Icon icon={<FaRegClipboard  />} clickFn={(e) => copyToClipboard(e, output)} />

            </div>

        </section>
    )
}


export default ConvertOutput