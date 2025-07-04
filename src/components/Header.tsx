

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
import logo from "../assets/logo.svg"
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
                <nav aria-label="Global" className="">
                    <div className="flex  w-full  items-center  lg:justify-center justify-between  py-3 ">
                        <div className={`px-6 flex lg:justify-center w-full justify-between  items-center transition-all duration-300  ${scrolled ? "lg:gap-12 gap-2" : "lg:gap-30 gap-2"}`}>
                            <a href="#" className="-m-1.5 p-1.5">

                               <img src={logo} alt="" className={` ${scrolled ?"w-16":""}`} />
                            </a>


                            <div className="hidden lg:flex lg:gap-x-7 ">
                                {navigation.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <a key={item.name} href={item.href} className="hover:text-blue-600 flex text-sm/6 gap-2 items-center font-semibold text-gray-900">
                                            {item.name}
                                            <IconComponent className="text-2xl" />
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
