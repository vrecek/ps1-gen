import Icon from "@/components/Common/Icon"
import { FaGithubSquare } from "react-icons/fa"


const SocialIcons = () => {
    return (
        <section className="social-icons">

            <Icon
                cname="icon"
                icon={<FaGithubSquare />}
                clickFn={() => window.open('https://github.com/vrecek', '_blank')}
            />

        </section>
    )
}


export default SocialIcons