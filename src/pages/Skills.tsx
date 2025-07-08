

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

  return (

    <section id="skills" className="py-16 bg-[#F8FAFC] lg:p-8 p-4 w-full   mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

      <div className="space-y-10 lg:px-24 px-2">
        {categories.map((cat, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold mb-4">{cat}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full">
              {skills
                .filter((s) => s.category === cat)
                .map((skill, idx) => (
                  <div
                    key={idx}
                    className="py-48 border  rounded-3xl  w-full bg-white hover:shadow-md transition duration-300"
                  >
                    <p className="text-center font-medium">{skill.name}</p>
                    <p className="text-center font-medium">{skill.name}</p>

                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>



    </section>
  )
}

export default Skills