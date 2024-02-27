import Image from '@/components/Common/Image'
import logo from '@/images/logo.png'


const Logo = () => {
    return (
        <section className="logo">

            <p className="name">PromptGen</p>
            <Image src={logo} altTxt='Logo' />

        </section>
    )
}


export default Logo