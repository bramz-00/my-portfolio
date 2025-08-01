

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
import { MobileBottomNavbar } from './MobileBottomNavbar';
import { FiTerminal } from 'react-icons/fi';
export default function Header() {
    const { t } = useTranslation();

    const navigation = [
        { name: t("nav.about"), icon: RxInfoCircled, href: "#about", },
        { name: t("nav.experience"), icon: CiGrid42, href: "#experience" },
        { name: t("nav.skills"), icon: TbChartDots3, href: "#skills" },
        { name: t("nav.education"), icon: IoSchoolOutline, href: "#education" },
        { name: t("nav.projects"), icon: BsDiagram2, href: "#projects" },
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
            <header className={` fixed   items-center   top-0 rounded-b-lg lg:rounded-xl bg-white  z-50 transition-all duration-300 ${scrolled ? " shadow 2xl:w-5xl lg:mt-4 lg:w-4xl w-full backdrop-blur-2xl    bg-white/60 transition-all duration-300 " : "lg:bg-transparent w-full"
                }`} >
                <nav aria-label="Global" className="">
                    <div className="flex  w-full  items-center  lg:justify-center justify-between  py-3 ">
                        <div className={`lg:px-6 px-2 flex lg:justify-center w-full justify-between  items-center transition-all duration-300  ${scrolled ? "lg:gap-24 gap-2" : "xl:gap-30 lg:gap-16 gap-2"}`}>
                            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">

                               <FiTerminal className="text-xl text-primary" /> 
                                <span className="font-bold text-base capitalize">Zakaria Braham</span>
                            </a>


                            <div className="hidden lg:flex lg:gap-x-6 ">
                                {navigation.map((item) => {
                                    return (
                                        <a key={item.name} href={item.href} className="hover:text-primary flex 2xl:text-base lg:text-sm text-xs gap-2 items-center font-semibold text-gray-900">
                                            {item.name}
                                        </a>
                                    )
                                })}
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <LanguageSwitcher />
                                <div className="block lg:hidden">

                                <MobileNavbar navigation={navigation} />
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>

            </header>
            <div className="flex lg:hidden">

                <MobileBottomNavbar navigation={navigation} />

            </div>


        </div>
    )
}
