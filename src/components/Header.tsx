

import { useEffect, useState } from 'react'
import { MobileNavbar } from './MobileNavbar';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { CiGrid42 } from "react-icons/ci";
import { RxInfoCircled } from "react-icons/rx";
import { TbChartDots3 } from "react-icons/tb";
import { BsDiagram2 } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { PiContactlessPaymentLight } from "react-icons/pi";

export default function Header() {
    const { t } = useTranslation();

    const navigation = [
        { name: t("nav.about"), icon: RxInfoCircled, href: "#about", },
        { name: t("nav.skills"), icon: TbChartDots3, href: "#skills" },
        { name: t("nav.projects"), icon: BsDiagram2, href: "#projects" },
        { name: t("nav.experience"), icon: CiGrid42, href: "#experience" },
        { name: t("nav.education"), icon: IoSchoolOutline, href: "#education" },
        { name: t("nav.contact-me"), icon: PiContactlessPaymentLight, href: "#contact-me" },

    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Changer à 50 selon tes besoins
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="bg-white justify-center flex items-center w-full">
            <header className={` fixed  items-center   top-0  z-50 transition-all duration-300 ${scrolled ? " shadow lg:mt-4 lg:w-5xl w-full   rounded-b-lg lg:rounded-xl backdrop-blur-2xl transition-all duration-300 bg-white" : "w-full"
                }`} >
                <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
                    <div className="flex lg:flex-1 w-full items-center justify-between ">
                        <a href="#" className="-m-1.5 p-1.5">

                            Zakaria Braham
                        </a>
                        <div className='flex lg:gap-12  gap-2 items-center '>


                            <div className="hidden lg:flex lg:gap-x-7 ">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <LanguageSwitcher />
                            <div className="flex lg:hidden">

                                <MobileNavbar navigation={navigation} />

                            </div>
                        </div>

                    </div>
                </nav>

            </header>


        </div>
    )
}
