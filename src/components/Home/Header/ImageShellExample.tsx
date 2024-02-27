import Image from "@/components/Common/Image"
import { IShellExample } from "@/interfaces/HomeInterfaces"


const ImageShellExample = ({ img, prompt, alt }: IShellExample) => {
    return (
        <section className="shell-example">

            <div>

                <p className="ps1">PS1 = </p>
                <p>{prompt}</p>

            </div>
            
            <Image src={img} altTxt={alt} />

        </section>
    )
}


export default ImageShellExample