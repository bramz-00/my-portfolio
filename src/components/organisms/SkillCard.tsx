import type { Skill } from '@/types/collection';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import React, { useRef, useState } from 'react'

interface SkillData {
    icon: LucideIcon;
    color: string;
    tech_skills: Boolean;

    skills: Skill[];
}


interface SkillCardProps {
    category: string;
    data: SkillData;
    index: number;
    isExpanded: boolean;
    onToggle: (category: string) => void;
}



const SkillCard: React.FC<SkillCardProps> = ({ category, data, index, isExpanded, onToggle }) => {
    const Icon = data.icon;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const animationFrameRef = useRef<number | null>(null);

    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig,
    );
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig,
    );

    const handleMouseMove = (event: any) => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            const halfWidth = event.target.offsetWidth / 2;
            x.set(event.nativeEvent.offsetX - halfWidth);
        });
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="group "
        >
            <motion.div
                className={` overflow-y-visible z-10  rounded-2xl bg-white border-primary/30 border p-[1px] cursor-pointer`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onToggle(category)}
            >
                <div className="relative  h-full w-full flex flex-col gap-3  p-6 py-3">
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center justify-between w-full space-x-3">
                            <h3 className="text-base font-light text-primary">{category}</h3>
                            <motion.div
                                className={`p-3 rounded-xl bg-white border border-primary/30`}
                                whileHover={{ rotate: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Icon className="w-6 h-6 text-primary" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="text-sm   z-10 flex items-center justify-between text-gray-400">
                        {data.skills.length} skill{data.skills.length !== 1 ? 's' : ''}
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-1 rounded-lg bg-white ${isExpanded ? "text-primary animate-pulse" : "text-gray-400"}`}
                        >
                            <ChevronDown className="w-6 h-6 " />
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden/"
                            >
                                <motion.div
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: -20 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className={` relative grid  grid-cols-1 p-2 gap-6 ${!data.tech_skills && data.skills.every(i => !i.logo_url) ? "lg:grid-cols-1" : "lg:grid-cols-4"}`}

                                >

                                    {data.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            onMouseEnter={() => setHoveredIndex(skillIndex)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                                            className={` relative flex lg:flex-col-reverse flex-row lg:gap-3 gap-3  w-full lg:border-0 border-b lg:pb-0 pb-3  bg-white  ${!skill.logo_url ? "items-start justify-start" : "items-center justify-between"} `}

                                        >
                                            {skill.logo_url && <AnimatePresence>
                                                {hoveredIndex === skillIndex && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                            scale: 1,
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 260,
                                                                damping: 10,
                                                            },
                                                        }}
                                                        exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                                        style={{
                                                            translateX: translateX,
                                                            rotate: rotate,
                                                            whiteSpace: "nowrap",
                                                        }}
                                                        className="absolute lg:flex hidden bottom-full w-48 mb-2 left-1/2 -translate-x-1/2 z-50  flex-col items-center justify-center rounded-md border bg-transparent backdrop-blur-2xl text-primary px-4 py-4 text-xs -xl"
                                                    >
                                                        <div className="relative z-30 text-base font-bold text-primary">
                                                            {skill.name}
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                                            <div
                                                                className="bg-secondary h-2.5 rounded-full "
                                                                style={{ width: `${skill.level}%` }}
                                                            ></div>
                                                            <span className='inline-flex justify-end w-full items-center mt-1'> {skill.level}%</span>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>}
                                            <div className='flex flex-col gap-1'>
                                                < span className="text-gray-700 text-base lg:text-xs  text-start lg:text-center inline-flex items-end  font-light" >{skill.url ? <a href={skill.url} target='_blank'>{skill.name}</a> : skill.name}</span>

                                                {skill.logo_url && <div className=" block w-24 lg:hidden  bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                                    <div
                                                        className="bg-primary h-2.5 rounded-full "
                                                        style={{ width: `${skill.level}%` }}
                                                    ></div>
                                                    <span className='inline-flex justify-start w-full items-center mt-1 text-primary'> {skill.level}%</span>


                                                </div>}
                                            </div>
                                            {skill.logo_url && (
                                                skill.url ? (
                                                    <a href={skill.url} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            onMouseMove={handleMouseMove}
                                                            src={skill.logo_url}
                                                            className={`text-primary h-10 ${!data.tech_skills ? "w-14" : "w-10"}`}
                                                            alt={skill.name}
                                                        />
                                                    </a>
                                                ) : (
                                                    <img
                                                        onMouseMove={handleMouseMove}
                                                        src={skill.logo_url}
                                                        className={`text-primary h-10 ${!data.tech_skills ? "w-14" : "w-10"}`}
                                                        alt={skill.name}
                                                    />
                                                )
                                            )}



                                        </motion.div>
                                    ))}


                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div >
            </motion.div >
        </motion.div >
    );
};


export default SkillCard