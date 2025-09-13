"use client";
import { Timeline } from "../molecules/timeline";
import { useTranslation } from "react-i18next";
import aladviseLogo from '@/assets/companies/aladvise.png';
import m2iLogo from '@/assets/companies/m2i.png';
import bdigitallLogo from '@/assets/companies/bdigitall.webp';

export default function ExperienceTimeline() {
  const { t } = useTranslation();

  const logoMap: Record<string, string> = {
    aladvise: aladviseLogo,
    m2i: m2iLogo,
    bdigitall: bdigitallLogo,
  };
  const entries = t("experience.entries", { returnObjects: true }) as {
    title: string;
    company: string;
    date: string;
    link: string;
    logo: string;
    responsibilities?: string[];
    projects?: string[];
    description?: string;
  }[];

const data = entries.map((entry) => {
  const projects = entry.projects ?? [];
  const responsibilities = entry.responsibilities ?? [];

  return {
    title : entry.title,
    link: entry.link,
    logo: logoMap[entry.logo],
    content: (
      <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {entry.company}
        </p>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {entry.date}
        </p>

        {entry.description && (
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{entry.description}</p>
        )}

        {responsibilities.length > 0 && (
          <div className="mb-2">
            <p className="font-semibold text-gray-800 dark:text-gray-200">Responsibilities:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
              {responsibilities.map((item, index) => (
                <li key={`res-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {projects.length > 0 && (
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Projects:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
              {projects.map((project, index) => (
                <li key={`proj-${index}`}>{project}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  };
});


  return (
    <section id="experience" className="py-16 w-full">
      <h2 className="text-4xl font-bold mb-6 text-left border-b pb-2">
        {t("experience.title")}
      </h2>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
}
