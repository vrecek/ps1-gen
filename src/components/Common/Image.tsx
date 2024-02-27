import { IImage } from "@/interfaces/CommonInterfaces"


const Image = ({cname, src, altTxt}: IImage) => {
    return (
        <figure className={cname}>

            <img src={src} alt={altTxt} />

        </figure>
    )
}


export default Image