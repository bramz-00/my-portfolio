import logo from '@/assets/university-logo.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const, // ✅ Ajout du `as const`
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const, // ✅
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const, // ✅
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const, // ✅
      },
    },
  };

  return (
    <motion.section
      id="education"
      className="lg:px-24 px-8 w-full mx-auto lg:max-w-5xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-left mb-10 border-b pb-2"
        variants={itemVariants}
      >
        {t("education.title")}
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-4"
        variants={containerVariants}
      >
        {entries.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white w-full rounded-2xl px-6 py-6 transition gap-4 border"
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: { duration: 0.2 }
            }}
          >
            <div className='flex lg:flex-row gap-3 flex-col-reverse justify-between w-full items-center'>
              <motion.div
                className="flex-col flex gap-1"
                variants={itemVariants}
              >
                <motion.h3
                  className="lg:text-lg text-base font-medium text-primary"
                  variants={itemVariants}
                >
                  {edu.degree}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-600 flex gap-3 flex-wrap"
                  variants={itemVariants}
                >
                  <a
                    href={edu.link}
                    className="hover:text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {edu.institution}
                  </a>
                  • {edu.year}
                </motion.p>
                {edu.description && (
                  <motion.p
                    className="mt-2 text-gray-700 text-sm"
                    variants={itemVariants}
                  >
                    {edu.description}
                  </motion.p>
                )}
              </motion.div>

              {/* Logo */}
              <motion.a
                href={edu.link}
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
                variants={logoVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={logo}
                  className="lg:w-56 w-80 h-28 object-contain border rounded-xl hover:shadow"
                  alt="university logo"
                />
              </motion.a>
            </div>

            <motion.div variants={itemVariants}>
              {/* Skills */}
              {edu.skills && (
                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {edu.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="text-xs hover:bg-primary/10 cursor-pointer text-primary px-2 py-1 rounded-full border border-primary/20"
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(var(--primary-rgb), 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              {/* Projects */}
              {edu.projects && edu.projects.length > 0 && (
                <motion.div
                  className="mt-4"
                  variants={itemVariants}
                >
                  <motion.h4
                    className="text-sm font-medium mb-1 text-gray-700"
                    variants={itemVariants}
                  >
                    Projects:
                  </motion.h4>
                  <motion.ul
                    className="list-none list-inside space-y-1 text-sm text-gray-600"
                    variants={containerVariants}
                  >
                    {edu.projects.map((project, idx) => (
                      <motion.li
                        key={idx}
                        className=''
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-primary text-xs lg:base"
                        >
                          {project.title}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}

              {/* Recommendations */}
              {edu.recommendations && edu.recommendations.length > 0 && (
                <motion.div
                  className="mt-4"
                  variants={itemVariants}
                >
                  <motion.h4
                    className="text-sm font-medium mb-1 text-gray-700"
                    variants={itemVariants}
                  >
                    Recommendations:
                  </motion.h4>
                  <motion.ul
                    className="space-y-1 text-sm text-gray-700"
                    variants={containerVariants}
                  >
                    {edu.recommendations.map((rec, idx) => (
                      <motion.li
                        key={idx}
                        className="italic"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        "{rec.text}" — <span className="font-medium">{rec.author}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;