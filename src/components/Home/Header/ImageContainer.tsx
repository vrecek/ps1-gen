import zshimg from '@/images/zshimg.png'
import bashimg from '@/images/bashimg.png'
import ImageShellExample from './ImageShellExample'


const ImageContainer = () => {
    const ps1zsh:  string = "$'┌─[%B%F{#ff8000}%T%f%b]%B%F{#33ff33}%n💀%m%f%b[%B%F{#3399ff}%~%f%b]\\n└─➤ '",
          ps1bash: string = "'\\[\\e[1m[\\[\\e[38;2;255;153;0m\\]\\A\\[\\e[0m\\]\\[\\e[1m\\]]\\[\\e[1;32m\\]\\u\[\\e[m\\]💀\\[\\e[1;32m\\]\\h\\[\\e[m\\][\\[\\e[1;34m\\]\\w\\[\\e[m\\]]\\[\\e[37m\\]\\$\\[\\e[m\\] '"


    return (
        <section className="image-container">

            <ImageShellExample img={zshimg} prompt={ps1zsh} alt='Zsh' />
            <div className="ln"></div>
            <ImageShellExample img={bashimg} prompt={ps1bash} alt='Bash' />

        </section>
    )
}


export default ImageContainer