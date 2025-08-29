import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  MapPin,
  Calendar,
  Award,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const quickInfoItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + index * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      className="lg:px-24 px-8 lg:max-w-5xl py-8 sm:py-10 lg:py-16 2xl:py-24 z-10 w-full"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className=" mx-auto px-4">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-left border-b pb-2"
          variants={titleVariants}
        >
          {t("about.title")}
        </motion.h2>

        <div className="grid lg:grid-cols-3 lg:gap-12 gap-4">
          {/* Left Column - Personal Info & Photo */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            {/* Quick Info */}
            <motion.div
              className="bg-primary/3 border border-primary rounded-2xl p-6 mb-8"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3
                className="text-lg font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {t("about.quick-info.title")}
              </motion.h3>
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: t("about.quick-info.location") },
                  { icon: Calendar, text: t("about.quick-info.experiance-year") },
                  { icon: Award, text: t("about.quick-info.jobTitle") },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-600"
                    custom={index}
                    variants={quickInfoItemVariants}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <item.icon size={18} className="text-primary" />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Detailed Information */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            variants={itemVariants}
          >
            {/* Bio/Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Users className="text-primary" />
                </motion.div>
                {t("about.my-story.title")}
              </motion.h3>
              <motion.div
                className="prose prose-lg text-gray-700 space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                }}
              >
                {[
                  t("about.my-story.p1"),
                  t("about.my-story.p2"),
                  t("about.my-story.p3"),
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: "easeOut",
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {index === 0 ? (
                      <>
                        <motion.strong
                          whileHover={{ color: "#7611a6" }}
                          transition={{ duration: 0.2 }}
                        >
                          Hi, I'm Zakaria BRAHAM!
                        </motion.strong>
                        {paragraph.substring(paragraph.indexOf('!') + 1)}
                      </>
                    ) : (
                      paragraph
                    )}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;