

import { useEffect, useState } from 'react'
import { MobileNavbar } from './MobileNavbar';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { CiGrid42 } from "react-icons/ci";
import { RxInfoCircled } from "react-icons/rx";
import { TbChartDots3 } from "react-icons/tb";
import { BsDiagram2 } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
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

    ];
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolledDown, setScrolledDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Ajout logique pour changement d'apparence (pas hide/show)
            if (currentScrollY > 20) {
                setScrolledDown(true); // active bg-white/70 et shadow
            } else {
                setScrolledDown(false); // remet bg-transparent
            }

            // Hide/show header
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowHeader(false); // hide
            } else {
                setShowHeader(true); // show
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className="bg-white justify-center flex items-center w-full">
            <header
                className={`
                    fixed lg:-top-4 z-50 -top-4
                    items-center
                    rounded-b-lg lg:rounded-xl
                    2xl:w-[48rem] lg:w-[48rem] w-full
                    transition-all duration-500 ease-in-out
                    transform
                    ${showHeader ? "translate-y-0  lg:top-4 top-0" : "-translate-y-full"}
                    ${scrolledDown ? "bg-white/70 shadow backdrop-blur-2xl" : "bg-transparent shadow-none"}`}
            >
                <nav aria-label="Global" className="">
                    <div className="flex  w-full  items-center  lg:justify-center justify-between  py-3 ">
                        <div className={`lg:px-2 px-2 flex lg:justify-center w-full justify-between  items-center transition-all duration-300  lg:gap-10 gap-2`}>
                            <a href="/" className="flex items-center gap-2">
                                <FiTerminal className="text-xl text-primary" />
                                <span className="font-bold text-base capitalize">Zakaria Braham</span>
                            </a>


                            <div className="hidden lg:grid grid-cols-5 items-center text-center justify-center lg:gap-x-6 w-md ">
                                {navigation.map((item) => {
                                    return (
                                        <a key={item.name} href={item.href} className="hover:text-primary  2xl:text-sm lg:text-xs text-xs gap-2 w-24 text-center  font-semibold text-gray-900">
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
