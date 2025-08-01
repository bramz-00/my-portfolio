type Education = {
  degree: string;
  institution: string;
  year: string;
  description?: string;
};

const education: Education[] = [
  {
    degree: "Master's in Computer Science",
    institution: "University of Technology",
    year: "2022 - 2024",
    description: "Specialized in Web and Cloud Engineering.",
  },
  {
    degree: "Bachelor in Software Engineering",
    institution: "Tech University",
    year: "2019 - 2022",
    description: "Focused on full-stack development and systems.",
  },
];



 const Education =() =>{
  return (
    <section id="education" className="py-16 lg:px-24 px-8 w-full mx-auto ">
      <h2 className="text-4xl font-bold text-left mb-10 border-b pb-2">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className=" px-6 py-4 bg-white shadow-sm rounded-md hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-600">{edu.institution} • {edu.year}</p>
            {edu.description && (
              <p className="mt-2 text-gray-700">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education