import { IConvertSection } from "@/interfaces/ConvertInterfaces"
import ConvertInput from "./ConvertInput"
import ConvertOutput from "./ConvertOutput"


const ConvertSection = ({ base, setFn, output }: IConvertSection) => {
    return (
        <section className="convert-section">

            <p className="entry-para">{base} ➡️ {base === 'bash' ? 'zsh' : 'bash'}</p>

            <ConvertInput setFn={setFn} base={base} />
            <ConvertOutput output={output} base={base} />

        </section>
    )
}


export default ConvertSection