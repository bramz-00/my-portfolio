import { ReusableTabs } from "@/components/CustomTabs";

type Skill = {
  name: string;
  category: string;
  icon?: string; // optional icon path or class
};

const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "DevOps" },
];

const Skills = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  // Generate tab data from categories
  const tabData = categories.map((category) => ({
    label: category,
    value: category.toLowerCase(),
    content: (
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 items-center justify-center md:grid-cols-3 gap-4">
        {skills
          .filter((s) => s.category === category)
          .map((skill, idx) => (
            <div
              key={idx}
              className="py-10 border rounded-3xl w-full bg-white hover:shadow-md transition duration-300"
            >
              <p className="text-center font-medium">{skill.name}</p>
            </div>
          ))}
      </div>
    ),
  }));

  return (
    <section
      id="skills"
      className="py-16 bg-[#F8FAFC]  w-full flex flex-col items-center justify-center "
    >
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

      <div className="flex justify-center mb-8 w-full">
        <ReusableTabs tabs={tabData} className="w-full max-w-full px-3 lg:p-12" />
      </div>
    </section>
  );
};

export default Skills;
