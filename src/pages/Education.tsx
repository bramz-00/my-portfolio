import logo from '@/assets/university-logo.png';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  const entries = t("education.entries", { returnObjects: true }) as {
    degree: string;
    institution: string;
    link: string;
    year: string;
    description?: string;
  }[];

  return (
    <section id="education" className="py-16 lg:px-24 px-8 w-full mx-auto">
      <h2 className="text-4xl font-bold text-left mb-10 border-b pb-2">{t("education.title")}</h2>
      <div className="space-y-6">
        {entries.map((edu, index) => (
          <div
            key={index}
            className="flex px-6 py-8 justify-between w-full items-center border bg-white shadow-sm rounded-md hover:shadow-md transition"
          >
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-600 flex gap-3">
                <a href={edu.link} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                  {edu.institution}
                </a>
                • {edu.year}
              </p>
              {edu.description && (
                <p className="mt-2 text-gray-700">{edu.description}</p>
              )}
            </div>
            <a href={edu.link} className="hover:text-primary lg:block hidden" target="_blank" rel="noopener noreferrer">
              <img src={logo} className="w-56 h-20" alt="university logo" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
