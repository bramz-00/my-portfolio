import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Zap, Users, Globe, Plus, type LucideIcon, AppWindow, Languages } from 'lucide-react';
import SkillCard from '@/components/organisms/SkillCard';
import type { Skill } from '@/types/collection';




interface SkillData {
  icon: LucideIcon;
  color: string;
  tech_skills: Boolean;
  skills: Skill[];
}

interface SkillsData {
  [key: string]: SkillData;
}

const skillsData: SkillsData = {
  "Languages": {
    icon: Languages,
    color: "from-blue-500 to-cyan-500",
    tech_skills: false,
    skills: [
      { name: "English", url: "", level: 60, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMfflVjNnT2Bwz_iiO41zdliLvQCxNFqHLA&s" },
      { name: "French", url: "", level: 80, logo_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png" },
      { name: "Arabic", url: "", level: 100, logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Flag_of_Saudi_Arabia.png" },
      { name: "Kabyle", url: "", level: 100, logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Berber_flag.svg/1200px-Berber_flag.svg.png" },



    ]
  },
  "Programming Languages": {
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    tech_skills: true,
    skills: [
      { name: "Java", url: "https://www.java.com/", level: 70, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "PHP", url: "https://www.php.net/", level: 85, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "C", url: "https://www.c-language.org/", level: 70, logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png" },
      { name: "TS", url: "https://www.typescriptlang.org/", level: 70, logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png" },

    ]
  },
  "Backend Frameworks": {
    icon: Server,
    color: "from-purple-500 to-pink-500",
    tech_skills: true,
    skills: [
      { name: "Laravel", url: "https://laravel.com/", level: 85, logo_url: "https://laravel.com/img/logomark.min.svg" },
      { name: "Symfony", url: "https://symfony.com/", level: 70, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
      { name: "Spring Boot", url: "https://spring.io/projects/spring-boot", level: 60, logo_url: "https://dominickm.com/wp-content/uploads/2016/06/spring-boot-logo_full.png" },
      { name: "Nest.js", url: "https://nestjs.com/", level: 60, logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" }
    ]
  },
  "Frontend Frameworks & Libraries": {
    icon: Zap,
    color: "from-orange-500 to-red-500",
    tech_skills: true,
    skills: [
      { name: "React.js", url: "https://react.dev/", level: 80, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", url: "https://vuejs.org/", level: 70, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/", level: 80, logo_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Inertia.js", url: "https://inertiajs.com/", level: 80, logo_url: "https://avatars.githubusercontent.com/u/47703742?s=280&v=4" },
      { name: "Socket.IO", url: "https://socket.io/", level: 70, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "Shadcn", url: "https://ui.shadcn.com/", level: 80, logo_url: "https://avatars.githubusercontent.com/u/139895814?v=4" },
      { name: "React Native/Expo", url: "https://expo.dev/", level: 70, logo_url: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
      { name: "Flutter", url: "https://flutter.dev/", level: 60, logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png" },

    ]
  },
  "Databases": {
    icon: Database,
    color: "from-green-500 to-emerald-500",
    tech_skills: true,
    skills: [
      { name: "MySQL", url: "https://www.mysql.com/", level: 90, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/", level: 70, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Oracle", url: "https://www.oracle.com/", level: 70, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "SQLite", url: "https://sqlite.org/", level: 80, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "Firebase", url: "https://firebase.google.com/", level: 50, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", url: "https://www.mongodb.com/", level: 70, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", url: "https://redis.io/", level: 60, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
    ]
  },
  "Project Management": {
    icon: Users,
    color: "from-indigo-500 to-purple-500",
    tech_skills: true,
    skills: [
      { name: "Merise", url: "", level: 70, logo_url: "https://img.over-blog-kiwi.com/2/49/57/72/20171104/ob_45c694_merise.png" },
      { name: "UML", url: "", level: 80, logo_url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmlSljgWXD4nYzIxYYVXSmbXoM5mKZTVfwoKOwPs0XHJRFLkSNcEZLQh79bLvmV6XFGEsju_yKY5Oe6S3_LHfjMibYbiKnmnMDkD2PfYlEFB4rB20-HkouyApe4EVnd1uToSjxQ7BEtn50-VYc4FBPbQpWy9EFALsc5e5Gibk_BB1yY4UenTTFm1Rozis/s1716/LOGO%20(1).png" },
      { name: "Scrum", url: "", level: 70, logo_url: "https://training.objectware.fr/wp-content/uploads/2022/03/Scrum-768x768.png" },
    ]
  },

  "APIs & Integrations": {
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
    tech_skills: true,
    skills: [
      { name: "Oauth2", url: "https://oauth.net/2/", level: 60, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKrLFyxsn3nmXX7uPY7UufZLB7K6iwkFM6Mnr2F82OErbSb-sts_znov6DKoy__0peoE&usqp=CAU" },
      { name: "OpenStreetMap", url: "https://www.openstreetmap.org/", level: 50, logo_url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg" },
      { name: "Twilio", url: "https://www.twilio.com/", level: 50, logo_url: "https://images.icon-icons.com/2699/PNG/512/twilio_logo_icon_168416.png" },
      { name: "OpenAI API", url: "https://openai.com/api/", level: 70, logo_url: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png" },
      { name: "Mailtrap", url: "https://mailtrap.io/", level: 80, logo_url: "https://framerusercontent.com/images/PmJcVRDOl1SNZ8g4jSuFNZSV0o.png" },
      { name: "Cloudinary", url: "https://cloudinary.com/", level: 70, logo_url: "https://yt3.googleusercontent.com/wgfGCUUb1Rym8LAwvXuzHqfSpbByVs_11uhzj6Xw8rEFurIWxspBlIqU_2IRswKz947D3-yV=s900-c-k-c0x00ffffff-no-rj" }
    ]
  },
  "DevOps & CI/CD": {
    icon: Server,
    color: "from-rose-500 to-pink-500",
    tech_skills: true,
    skills: [
      { name: "Docker", url: "https://www.docker.com/", level: 60, logo_url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" },
      { name: "Git", url: "https://git-scm.com/", level: 70, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "CyPress", url: "https://www.cypress.io/", level: 50, logo_url: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/cypress-icon-moigrz5nimpd7rsob0bisu.png/cypress-icon-pg9bdlubveoefqouilbg.png?_a=DATAg1AAZAA0 " },
      { name: "Apache", url: "https://httpd.apache.org/", level: 70, logo_url: "https://images.seeklogo.com/logo-png/31/2/apache-logo-png_seeklogo-314278.png" },
      { name: "Nginx", url: "https://nginx.org/", level: 70, logo_url: "https://images.icon-icons.com/2699/PNG/512/nginx_logo_icon_169915.png" },
      { name: "Tomcat", url: "https://tomcat.apache.org/", level: 60, logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Apache_Tomcat_logo.svg/1200px-Apache_Tomcat_logo.svg.png" },

    ]
  },
  "Platforms": {
    icon: AppWindow,
    color: "from-rose-500 to-pink-500",
    tech_skills: true,
    skills: [
      { name: "ClickUp", url: "https://clickup.com/", level: 70, logo_url: "https://cdn.brandfetch.io/idU6lzwMYA/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
      { name: "GitHub", url: "https://github.com/", level: 80, logo_url: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" },
      { name: "GitLab", url: "https://gitlab.com/", level: 70, logo_url: "https://cdn.worldvectorlogo.com/logos/gitlab.svg" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira", level: 60, logo_url: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png" },
      { name: "Vercel CI/CD", url: "https://vercel.com/", level: 70, logo_url: "https://www.svgrepo.com/show/327408/logo-vercel.svg" }
      , { name: "Slack", url: "https://slack.com/", level: 80, logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
      { name: "MS Teams", url: "https://www.microsoft.com/microsoft-teams/", level: 80, logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/800px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" }

    ]
  },
  "Additional Skills": {
    icon: Plus,
    color: "from-amber-500 to-yellow-500",
    tech_skills: false,
    skills: [
      { name: "Strong ability to manage multiple projects simultaneously", url: "", level: 50, logo_url: "" },
      { name: "Team coordination and development management", url: "", level: 50, logo_url: "" },
      { name: "Effective client communication", url: "", level: 50, logo_url: "" }
    ]
  }
};

const SkillSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const handleCardToggle = (category: any) => {
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
        <p className="lg:block hidden text-gray-700 py-2 mb-3">
          <b>Note:</b> Hover over each item to see the skill level.
        </p>        {/* Filter Pills */}
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
            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === 'all'
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
              className={`px-4 py-2 rounded-full font-medium transition-all ${filter === category
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3"
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

export default SkillSection;