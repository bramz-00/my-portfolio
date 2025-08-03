import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import React from 'react'

interface SkillData {
    icon: LucideIcon;
    color: string;
    skills: string[];
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="group relative"
        >
            <motion.div
                className={`relative overflow-hidden rounded-2xl bg-white border-primary/30 border p-[1px] cursor-pointer`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onToggle(category)}
            >
                <div className="relative h-full w-full flex flex-col gap-3  p-6 py-3">
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

                    <div className="text-sm  flex items-center justify-between text-gray-400">
                        {data.skills.length} skill{data.skills.length !== 1 ? 's' : ''}
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-1 rounded-lg bg-white ${isExpanded ? "text-primary animate-pulse": "text-gray-400"}`}
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
                                className="overflow-hidden"
                            >
                                <motion.div
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: -20 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className="space-y-3"
                                >
                                    {data.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                                            className="flex items-center space-x-3 p-3 rounded-lg bg-white backdrop-blur-sm border border-primary/50 hover:border-gray-600/50 transition-colors"
                                        >
                                            <span className="text-primary text-sm font-medium">{skill}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};


export default SkillCard