import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const SocialMediaIcons = () => {

    const icons = [
        { icon: FaFacebookF, href: "https://web.facebook.com/zakaria.bram.00", },
        { icon: BsInstagram, href: "https://instagram.com/zakaria.bram" },
        { icon: FiGithub, href: "https://github.com/bramz-00" },
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/zakaria-braham" },
        { icon: MdOutlineAlternateEmail, href: "mailto:zakaria.braham@outlook.com" },
        { icon: FaWhatsapp, href: "https://wa.me/213562262160" },
    ]
    return (
        <ul className="flex lg:justify-start justify-center gap-3 w-full py-4    ">
            {icons.map((item) => {
                const IconComponent = item.icon;
                return (
                    <li className="border border-primary/10 rounded-full text-primary bg-white p-2 hover:bg-primary/10 transition-all duration-300  hover:-translate-y-1 " key={item.href}>
                        <a href={item.href} className="">
                            <IconComponent className="lg:w-8 lg:h-8 h-6 w-6" />
                        </a>
                    </li>
                )
            }
            )}

        </ul>
    )
}

export default SocialMediaIcons