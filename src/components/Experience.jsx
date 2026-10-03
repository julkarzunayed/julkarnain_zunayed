import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Industrial Engineering Intern",
      company: "Meghna Group of Industries (MGI)",
      unit: "Everest Power Generation Co. Ltd.",
      period: "September 26 – Present",
      type: "Student Internship",
      description: "Hands-on industrial training across heavy power plant operations, protection setups, switchgears, and power generation units.",
      highlights: [
        "Studied engine working principles, cooling, lubricating, fuel/air, and protection systems.",
        "Gained practical insights into Alternator principles, load distribution, and EGB boilers.",
        "Analyzed LV/MV switchgear systems, Auxiliary Transformers, and Substation Equipment.",
        "Explored Transformer Protection Systems, Plant DC Systems, and Motor Controlling Systems."
      ],
      tags: ["Power Generation", "LV/MV Switchgear", "Substation", "Motor Control", "Transformer Protection"]
    },
    {
      id: 2,
      role: "Upcoming Plant Rotations",
      company: "Meghna Group of Industries (MGI)",
      unit: "Sugar Refinery, Unique Cement & Pulp Mills",
      period: "Upcoming Rotation",
      type: "Cross-Industry Learning",
      description: "Observing real-world applications of electrical systems, heavy automation, PLC/SCADA integration, and high-voltage power distribution.",
      highlights: [
        "Exploring heavy conveyor motor drives, sensor networks, and process automation.",
        "Studying industrial electrical safety and power distribution across large manufacturing facilities."
      ],
      tags: ["Factory Automation", "Industrial Wiring", "PLC Concepts", "Heavy Machinery"]
    },
    {
      id: 3,
      role: "Diploma in Electrical Engineering",
      company: "Barishal Polytechnic Institute",
      unit: "Academic Journey",
      period: "2023 – Present",
      type: "8th Semester Intern",
      description: "Acquiring strong fundamentals in circuit design, electrical machines, embedded hardware, and software integration.",
      highlights: [
        "Earned Level-3 Certificate in Electrical Installation & Maintenance.",
        "Competed in National Skills and Innovation Competition (2025)."
      ],
      tags: ["Circuit Design", "Embedded Systems", "Electrical Machines", "GTD Systems"]
    }
  ];

  return (
    <div id="experience" className="min-h-screen flex items-center justify-center ">
      <div className="container mx-auto my-10  border-blue-700">
        {/* Section Heading */}
        <h1 className="gradient-text text-5xl md:text-6xl lg:text-7xl text-center font-black p-5">
          Experience
        </h1>
        <h6 className="mb-16 font-semibold text-gray-400 text-lg italic text-center">
          &quot; Overcoming challenges and gaining valuable insights &quot;
        </h6>

        {/* Tree / Timeline Stem Container */}
        <div className="relative  mx-auto ">
          {/* Vertical Glowing Trunk Line: 
              - On small/medium screens (< lg): Positioned on the RIGHT side (`right-4 md:right-8 translate-x-1/2`)
              - On large screens (>= lg): Centered (`lg:left-1/2 lg:-translate-x-1/2`)
          */}
          
          <div className="absolute right-4 md:right-8 lg:left-1/2 top-0 bottom-0 w-1 translate-x-1/2 lg:-translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

          {/* Experience Nodes */}
          <div className="space-y-12 ">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  className={` relative flex flex-col lg:flex-row items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Tree Connector Dot:
                      - Right-aligned on small/medium screens
                      - Centered on large screens
                  */}
                  <div className="absolute right-4 md:right-8 lg:left-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 z-10 flex items-center justify-center shadow-[0_0_12px_#06b6d4]">
                    <div className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                  </div>

                  {/* Card Container:
                      - Small/Medium (< lg): Occupies left area with padding on the right (`pr-12 md:pr-16 w-full`)
                      - Large (>= lg): Occupies 50% width and alternates side (`lg:w-1/2 lg:px-8 lg:pr-0`)
                  */}
                  {/* w-full lg:w-1/2 px-4 md:px-8 */}
                  <div className={`w-full lg:w-1/2 pr-12 md:pr-16  ${isEven ? 'lg:pl-0 lg:pr-8' : 'lg:pl-8 lg:pr-0'}`}>
                    <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group">
                      
                      {/* Badge & Period */}
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                          {exp.type}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">
                          {exp.period}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-cyan-400 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-xs text-gray-400 italic mb-4">
                        {exp.unit}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="text-xs text-gray-400 space-y-1.5 mb-5 list-disc pl-4">
                        {exp.highlights.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-cyan-200 border border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

// import React from 'react';


// const Experience = () => {
//     return (
//         <div id='experience' className='min-h-screen flex items-center justify-center border border-blue-700/10 '>
//             <div className="container mx-auto my-10">
//                 <h1 className="gradient-text text-5xl md:text-6xl lg:text-7xl text-center font-black  p-5">
//                     Experience
//                 </h1>
//                 <h6 className="mb-10 font-semibold text-gray-400 text-lg italic text-center">
//                     &quot; Overcoming challenges and gaining valuable insights &quot;
//                 </h6>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Experience;