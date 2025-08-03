import logo from '@/assets/university-logo.png';
import { useTranslation } from 'react-i18next';

type Project = {
  title: string;
  link: string;
};

type Recommendation = {
  text: string;
  author: string;
};

type Entry = {
  degree: string;
  institution: string;
  link: string;
  year: string;
  description?: string;
  skills?: string[];
  projects?: Project[];
  recommendations?: Recommendation[];
};

const Education = () => {
  const { t } = useTranslation();

  const entries = t("education.entries", { returnObjects: true }) as Entry[];

  return (
    <section id="education" className="lg:px-24 px-8 w-full mx-auto">
      <h2 className="text-4xl font-bold text-left mb-10 border-b pb-2">
        {t("education.title")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {entries.map((edu, index) => (
          <div
            key={index}
            className="bg-white  w-full  rounded-2xl px-6 py-6 transition gap-4 border"
          >
            <div className='flex lg:flex-row gap-3 flex-col-reverse justify-between  w-full  items-center  '>

            <div className="flex-col flex gap-1">
              <h3 className="lg:text-lg text-base font-medium text-primary">{edu.degree}</h3>
              <p className="text-sm text-gray-600 flex gap-3 flex-wrap">
                <a
                  href={edu.link}
                  className="hover:text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edu.institution}
                </a>
                • {edu.year}
              </p>
              {edu.description && (
                <p className="mt-2 text-gray-700 text-sm">{edu.description}</p>
              )}

            
            </div>
            {/* Logo */}
            <a
              href={edu.link}
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo}
                className="lg:w-56 w-80 h-28 object-contain border rounded-xl hover:shadow"
                alt="university logo"
              />
            </a>
            </div>

            <div>
                {/* Skills */}
              {edu.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs hover:bg-primary/10 cursor-pointer text-primary px-2 py-1 rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Projects */}
              {edu.projects && edu.projects.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-1 text-gray-700">Projects:</h4>
                  <ul className="list-none list-inside space-y-1 text-sm text-gray-600">
                    {edu.projects.map((project, idx) => (
                      <li key={idx} className=''>
                      <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-primary text-xs lg:base"
                        >
                          {project.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommendations */}
              {edu.recommendations && edu.recommendations.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-1 text-gray-700">Recommendations:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {edu.recommendations.map((rec, idx) => (
                      <li key={idx} className="italic">
                        “{rec.text}” — <span className="font-medium">{rec.author}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
