"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Tech Corp",
    date: "Jan 2023 - Present",
    description: "Built modern web interfaces using React and Tailwind CSS.",
  },
  {
    title: "Intern Developer",
    company: "StartupX",
    date: "Jun 2022 - Dec 2022",
    description: "Contributed to internal tools with Vue.js and Laravel.",
  },
];

export default function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");

      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, timelineRef); // 👈 important : scope to ref

    return () => ctx.revert(); // 👈 clean on unmount
  }, []);

  return (
    <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">My Experience</h2>
      <div ref={timelineRef} className="relative border-l-2 border-gray-300">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-item mb-10 ml-4 relative pl-6"
          >
            <div className="absolute left-[-10px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md" />
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <span className="text-sm text-gray-500">
              {exp.company} • {exp.date}
            </span>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
