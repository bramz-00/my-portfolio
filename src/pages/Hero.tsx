import { useEffect, useRef } from "react";
import gsap from "gsap";

const words = ["Web / Mobile Developer", "Software Engineer", "Freelancer", "Engineer"];
import { useTranslation } from "react-i18next";

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
        <div>
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
                <div className="mx-auto max-w-3xl py-16 sm:py-24 lg:py-32">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center pt-8">
                        <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">{t("hero.title")} Zakaria BRAHAM</h1>
                        <p className="text-lg text-gray-600">{t("hero.subtitle")}</p>
                        <div className="overflow-hidden h-[40px] w-full text-center">
                            <div ref={listRef} className="flex flex-col">
                                {words.map((word, index) => (
                                    <div key={index} className="text-xl font-bold h-[40px] flex items-center justify-center">
                                        {word}
                                    </div>
                                ))}
                                {/* Duplicate the first word to create seamless loop */}
                                <div className="text-xl font-bold h-[40px] flex items-center justify-center">
                                    {words[0]}
                                </div>
                            </div>
                        </div>
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
        </div>
    )
}

export default Hero