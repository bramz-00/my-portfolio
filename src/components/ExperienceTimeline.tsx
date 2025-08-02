"use client";
import { Timeline } from "./ui/timeline";
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
  const entries = t("experiance.entries", { returnObjects: true }) as {
    title: string;
    company: string;
    date: string;
    link: string;
    logo: string;

    description?: string;
  }[];

  const data = entries.map((entry) => ({
    title: entry.company,
    link: entry.link,
    logo: logoMap[entry.logo],
    content: (
      <div>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {entry.date}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {entry.description}
        </p>
      </div>
    ),
  }));

  return (
    <section id="experience" className="py-16 w-full">
      <h2 className="text-4xl font-bold mb-12 text-left border-b pb-4">
        {t("experiance.title")}
      </h2>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
}
