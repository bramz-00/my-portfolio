import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Zap, Users, Monitor, Globe, Plus, type LucideIcon } from 'lucide-react';
import SkillCard from '@/components/SkillCard';
interface SkillData {
    icon: LucideIcon;
    color: string;
    skills: string[];
}

interface SkillsData {
    [key: string]: SkillData;

}

const skillsData: SkillsData = {
    "Languages": {
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        skills: ["PHP", "Java", "C", "C++", "JavaScript", "HTML", "CSS", "SQL"]
    },
    "Frameworks": {
        icon: Server,
        color: "from-purple-500 to-pink-500",
        skills: ["Laravel", "Symfony", "Spring Boot", "Next.js", "Express.js", "Nuxt.js", "Vue.js"]
    },
    "Libraries & Real-time": {
        icon: Zap,
        color: "from-orange-500 to-red-500",
        skills: ["React.js", "Inertia.js", "Socket.IO"]
    },
    "Databases": {
        icon: Database,
        color: "from-green-500 to-emerald-500",
        skills: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "SQLite", "Firebase"]
    },
    "Project Management": {
        icon: Users,
        color: "from-indigo-500 to-purple-500",
        skills: ["Merise", "UML", "Scrum", "Slack", "Jira", "ClickUp", "Microsoft Teams", "SharePoint"]
    },
    "Operating Systems": {
        icon: Monitor,
        color: "from-gray-500 to-slate-500",
        skills: ["Linux (Ubuntu, Debian, Manjaro)", "Windows"]
    },
    "APIs & Integrations": {
        icon: Globe,
        color: "from-teal-500 to-cyan-500",
        skills: ["Stripe", "OpenStreetMap", "Twilio", "OpenAI API", "Mailtrap", "Cloudinary", "LLM Integration in Backend (OpenAI, HuggingFace, etc.)"]
    },
    "DevOps & CI/CD": {
        icon: Server,
        color: "from-rose-500 to-pink-500",
        skills: ["Docker", "Git", "GitHub", "GitLab", "Linux", "VMware", "Apache", "Nginx", "Tomcat", "LDAP"]
    },
    "Additional Skills": {
        icon: Plus,
        color: "from-amber-500 to-yellow-500",
        skills: ["Strong ability to manage multiple projects simultaneously", "Team coordination and development management", "Effective client communication"]
    }
};
const Skills: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const handleCardToggle = (category:any) => {
    setExpandedCard(expandedCard === category ? null : category);
  };

  const categories = Object.keys(skillsData);
  const filteredCategories = filter === 'all' ? categories : categories.filter(cat => cat.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id='skills' className="dark:bg-gradient-to-br py-24 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-white lg:px-24 px-8 w-full mx-auto lg:max-w-5xl">
      <div className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold text-left mb-10 border-b pb-2"
         initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
      >
        Skills
      </motion.h2>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'all'
              ? 'text-white bg-primary shadow-lg'
              : 'bg-white text-primary border-primary border '
            }`}
          >
            All Skills
          </motion.button>
          {['Languages', 'Frameworks', 'DevOps'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === category
               ? 'text-white bg-primary shadow-lg'
              : 'bg-white text-primary border-primary border '
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <SkillCard
                key={category}
                category={category}
                data={skillsData[category]}
                index={index}
                isExpanded={expandedCard === category}
                onToggle={handleCardToggle}
              />
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
};

export default Skills;