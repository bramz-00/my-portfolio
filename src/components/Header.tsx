

import { useEffect, useState } from 'react'

const navigation = [
    { name: 'About me', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Experiance', href: '#' },
    { name: 'Education', href: '#' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
            <header className={` fixed  items-center   top-0   z-50 transition-all duration-300 ${scrolled ? " shadow mt-4 w-5xl  rounded-xl backdrop-blur-2xl" : "w-full"
                }`} >
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
                            Zakaria Braham
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Contact me <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>

            </header>


        </div>
    )
}
