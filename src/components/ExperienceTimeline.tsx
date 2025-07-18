"use client";
import { Timeline } from "./ui/timeline";
import { useTranslation } from "react-i18next";


export default function ExperienceTimeline() {
      const { t } = useTranslation();
  
  const data = [
    {
      title: t("experience.aladvise.company"),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          </p>
          <div className="grid grid-cols-2 gap-4">
        
            
          </div>
        </div>
      ),
      
    },
        {
      title: t("experience.bdigitall.company"),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          </p>
          <div className="grid grid-cols-2 gap-4">
        
            
          </div>
        </div>
      ),
      
    },
            {
      title: t("experience.m2i-services.company"),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          </p>
          <div className="grid grid-cols-2 gap-4">
        
            
          </div>
        </div>
      ),
      
    },

  ];


  return (
    <section id="experience" className="py-16 px-4 w-full">
      <h2 className="text-4xl font-bold mb-12 text-center">My Experience</h2>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
}
