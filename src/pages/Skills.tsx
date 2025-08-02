// import { ReusableTabs } from "@/components/CustomTabs";
import { FiTerminal } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import { BsDiagram3 } from 'react-icons/bs';

// type Skill = {
//   name: string;
//   category: string;
//   icon?: string; // optional icon path or class
// };

// const skills: Skill[] = [
//   { name: "React", category: "Frontend" },
//   { name: "Vue.js", category: "Frontend" },
//   { name: "Tailwind CSS", category: "Frontend" },
//   { name: "Node.js", category: "Backend" },
//   { name: "Laravel", category: "Backend" },
//   { name: "MySQL", category: "Database" },
//   { name: "MongoDB", category: "Database" },
//   { name: "Git", category: "Tools" },
//   { name: "Docker", category: "DevOps" },
// ];

const Skills = () => {
  // const categories = Array.from(new Set(skills.map((s) => s.category)));

  // // Generate tab data from categories
  // const tabData = categories.map((category) => ({
  //   label: category,
  //   value: category.toLowerCase(),
  //   content: (
  //     <div className="grid grid-cols-1 w-full sm:grid-cols-2 items-center justify-center md:grid-cols-3 gap-4">
  //       {skills
  //         .filter((s) => s.category === category)
  //         .map((skill, idx) => (
  //           <div
  //             key={idx}
  //             className="py-10 border rounded-3xl w-full bg-white hover:shadow-md transition duration-300"
  //           >
  //             <p className="text-center font-medium">{skill.name}</p>
  //           </div>
  //         ))}
  //     </div>
  //   ),
  // }));

  return (
    <section
      id="skills"
      className="py-16 bg-transparent   w-full  lg:px-24 px-8"
    >
  <h2 className="text-4xl font-bold mb-12 text-left border-b pb-4">
      Skills
      </h2>
   <div className="rounded-xl p-6 shadow-sm lg:rounded-3xl lg:p-10 grid gap-12 lg:grid-cols-3">
       <div className="flex flex-col gap-2 lg:gap-4 ">
        <FiTerminal className="text-[2.5rem] text-primary" />
        <h2 className="text-lg lg:text-2xl font-semibold">Full Stack</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
      </div>

      <div className="flex flex-col gap-2 lg:gap-4">
        <FaTrophy className="text-[2.5rem] text-primary" />
        <h2 className="text-lg lg:text-2xl font-semibold">Industry Leader</h2>
        <p className="text-gray-400">
          Neque viverra justo nec ultrices dui. Est ultricies integer quis auctor elit.
        </p>
      </div>

      <div className="flex flex-col gap-2 lg:gap-4">
        <BsDiagram3 className="text-[2.5rem] text-primary" />
        <h2 className="text-lg lg:text-2xl font-semibold">Strategy-Minded</h2>
        <p className="text-gray-400">
          Urna porttitor rhoncus dolor purus non enim praesent ornare.
        </p>
      </div>

   </div>


    </section>
  );
};

export default Skills;
