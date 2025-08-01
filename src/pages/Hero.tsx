import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
    motion,
} from "motion/react";
const words = ["Web / Mobile Developer", "Software Engineer", "Freelancer", "Engineer"];
import { useTranslation } from "react-i18next";
import pic from '@/assets/zakaria-braham.webp'
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
const Hero = () => {
    const { t } = useTranslation();

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const total = words.length;
            const height = 40; // adjust to your item height (px)
            const duration = 1;
            const delay = 1.5;

            const tl = gsap.timeline({ repeat: -1 });

            for (let i = 1; i <= total; i++) {
                tl.to(listRef.current, {
                    y: `-=${height}`,
                    duration,
                    ease: "power2.inOut",
                    delay,
                });
            }

            // reset position to start smoothly
            tl.set(listRef.current, { y: 0 });
        }, listRef);

        return () => ctx.revert();
    }, []);
    return (
        <section id="home" className="lg:h-screen w-full relative">
            <div className="relative isolate px-6  lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>
                <div className="mx-auto max-w-5xl py-16 sm:py-24 lg:py-32 relative">
                    {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div> */}
                    <div className="flex lg:gap-24 gap-4 px-4 flex-col lg:flex-row relative" >


                        <div className="text-left  flex flex-col justify-center items-start gap-4 pt-10 lg:pt-0">
                            <motion.h1 initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{t("hero.title")} <br />Zakaria BRAHAM</motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                className="text-lg text-gray-600">{t("hero.subtitle")}</motion.p>
                            <div className="overflow-hidden h-[40px] w-full text-center">
                                <motion.div ref={listRef} className="flex flex-col"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}>
                                    {words.map((word, index) => (
                                        <div key={index} className="text-xl font-bold h-[40px] flex items-start justify-start">
                                            {word}
                                        </div>
                                    ))}
                                    <div className="text-xl font-bold h-[40px] flex items-center justify-start">
                                        {words[0]}
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }} className="flex gap-4 items-center lg:justify-start w-full justify-center">
                                <Button className="py-1.5 px-4 hover:bg-[#7611a6]/70 cursor-pointer bg-[#7611a6] rounded-3xl">My resume</Button>
                                <ContactModal />

                            </motion.div>
                        </div>
                          <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            src={pic}
                            alt="Zakaria BRAHAM"
                            className="mx-auto border h-96 w-80 rounded-xl object-top object-cover"
                        />
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero