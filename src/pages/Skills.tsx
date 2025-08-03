import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Zap, Users, Monitor, Globe, Plus, type LucideIcon } from 'lucide-react';

interface SkillData {
  icon: LucideIcon;
  color: string;
  skills: string[];
}

interface SkillsData {
  [key: string]: SkillData;
}

interface SkillCardProps {
  category: string;
  data: SkillData;
  index: number;
  isExpanded: boolean;
  onToggle: (category: string) => void;
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

const SkillCard: React.FC<SkillCardProps> = ({ category, data, index, isExpanded, onToggle }) => {
  const Icon = data.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group relative"
    >
      <motion.div
        className={`relative overflow-hidden rounded-2xl bg-white border-primary/30 border p-[1px] cursor-pointer`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onToggle(category)}
      >
        <div className="relative h-full w-full  p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <motion.div
                className={`p-3 rounded-xl bg-white border border-primary/30`}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-base font-light text-primary">{category}</h3>
            </div>
          </div>
          
          <div className="text-sm flex items-center justify-between text-gray-400 mb-4">
            {data.skills.length} skill{data.skills.length !== 1 ? 's' : ''}
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1 rounded-lg bg-gradient-to-br ${data.color}`}
            >
              <Plus className="w-4 h-4 text-white" />
            </motion.div>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="space-y-3"
                >
                  {data.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white backdrop-blur-sm border border-primary/50 hover:border-gray-600/50 transition-colors"
                    >
                      <span className="text-primary text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
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