

import { useEffect, useState } from 'react'
import { MobileNavbar } from './MobileNavbar';
import { LanguageSwitcher } from './LanguageSwitcher';

const navigation = [
    { name: 'About me', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Experiance', href: '#' },
    { name: 'Education', href: '#' },
]

export default function Header() {
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
            <header className={` fixed  items-center   top-0  z-50 transition-all duration-300 ${scrolled ? " shadow lg:mt-4 lg:w-5xl w-full   rounded-xl backdrop-blur-2xl transition-all duration-300" : "w-full"
                }`} >
                <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
                    <div className="flex lg:flex-1 w-full items-center justify-between ">
                        <a href="#" className="-m-1.5 p-1.5">

                            Zakaria Braham
                        </a>
                        <div className='flex lg:gap-6  gap-2 items-center '>


                            <div className="hidden lg:flex lg:gap-x-12 ">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                        {item.name}
                                    </a>
                                ))}
                                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                        Contact me <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <LanguageSwitcher />
                            <div className="flex lg:hidden">

                                <MobileNavbar />

                            </div>
                        </div>

                    </div>
                </nav>

            </header>


        </div>
    )
}
