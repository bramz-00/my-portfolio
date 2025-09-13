"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  link?: string;
  logo?: string;
  content: React.ReactNode;
}

const TimelineItem = ({
  item,
  index
}: {
  item: TimelineEntry;
  index: number;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, {
    once: true,
    margin: "-20% 0px -20% 0px"
  });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="flex justify-start pt-4 w-full"
    >
      <div className="sticky flex flex-col  z-40 items-start top-40 self-start lg:w-full">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="h-10 absolute -left-2 top-2.5 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + 0.4,
              type: "spring",
              stiffness: 300
            }}
            className="h-4 w-4 rounded-full bg-primary  dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"
         
         />
          
        </motion.div>

        <motion.a target="_blank" rel="noopener noreferrer" href={item.link}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className=" text-xl flex lg:flex-row gap-4 lg:items-center items-start flex-col-reverse w-full justify-between pl-10 md:pl-20 md:text-xl font-bold text-neutral-500 dark:text-neutral-500"
        >

          {item.title}
          <div className="lg:h-16 lg:w-48 w-36 h-10 flex items-center justify-start">
            <img
              src={item.logo}
              alt={item.title}
              className=" object-contain rounded"
            />

          </div>

        </motion.a>
        <motion.div
          className="pl-10 md:pl-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {item.content}
        </motion.div>
      </div>

    </motion.div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);


  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans "
      ref={containerRef}
    >

      <div ref={ref} className="relative w-full pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
          />
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute -md:left-4 left-2.5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.5
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-primary to-transparent from-[0%] via-[10%] rounded-full origin-top"
          />
        </div>
      </div>
    </div>
  );
};