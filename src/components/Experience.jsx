import React from 'react';

import nitas from "../assets/Logo/NITAS.jfif";
// import mgi from "../assets/Logo/MGI_Logo.webp";
import mgi from "../assets/Logo/Mgi.png";


const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Automation & PLC Trainee",
      company: "Neon Industrial Training & Automation System (NITAS)",
      unit: "Siemens S7-1200 & HMI Basic Training",
      period: "Ongoing",
      type: "Professional Training",
      description: "Hands-on technical training on Siemens S7-1200 PLC programming, TIA Portal software, logic gate design, industrial motor controls, and HMI design.",
      highlights: [
        "Programmed Ladder Diagrams (LAD) utilizing NO/NC contacts, timers, counters, and comparators in TIA Portal.",
        "Designed automation logic and control wiring for industrial motor starter circuits, including Star-Delta and Reverse-Forward setups.",
        "Configured S7-1200 hardware, IP communications, and I/O addressing for automated factory lines.",
        "Developed basic Human-Machine Interface (HMI) screen tags and animations to monitor industrial processes.",
        "Gained hands-on experience in simulation, IO forcing, Analog Processing (AI/AO), and Siemens HMI tag creation/animations."
      ],
      tags: [
        "Siemens S7-1200",
        "TIA Portal",
        "Ladder Logic (LAD)",
        "HMI Design",
        "Analog Processing",
        "Star-Delta Control",
        "Reverse-Forward Control",
        "Industrial Automation"
      ],
      logo: nitas,
    },
    {
      id: 2,
      role: "Industrial Engineering Intern",
      company: "Meghna Group of Industries (MGI)",
      unit: "Units: Everest Power Generation Co. Ltd. & Sugar Refinery. Fresh Cement and Meghna Pulp & Paper Mills",
      period: "September 26 – Present",
      type: "Student Internship",
      description: "Hands-on industrial training across heavy power plant operations, protection setups, switchgear, and power generation units.",
      highlights: [
        "Analyzed engine working principles, cooling, fuel systems, and protection setups at Everest Power.",
        "Studied LV/MV switchgear, EGB boilers, power transformers, and substation equipment.",
        "Executed coil resistance, multimeter continuity, and cable insulation tests using a megger.",
        "Tested magnetic contactors, relays, UMCs, and starter circuits (DOL, Star-Delta, Reverse-Forward).",
        "Calculated transformer ratings, circuit breaker sizing, busbars, and PFI plant designs.",
        "Explored 4-20mA instrumentation signal loops, sensor wiring, and DCS concepts.",
        "Participated in cement grinding, packing line operations, and maintenance policies at Unique Cement."
      ],
      tags: ["Power Generation", "EGB Boiler", "Alternator Operation", "LV/MV Switchgear", "Substation Equipments", "Motor Control", "Transformer Protection", "Engine Operation System", "Industrial Automation & Control"],
      logo: mgi,
    },
    // {
    //   id: 2,
    //   role: "Upcoming Plant Rotations",
    //   company: "Meghna Group of Industries (MGI)",
    //   unit: "Sugar Refinery, Unique Cement & Pulp Mills",
    //   period: "Upcoming Rotation",
    //   type: "Cross-Industry Learning",
    //   description: "Observing real-world applications of electrical systems, heavy automation, PLC/SCADA integration, and high-voltage power distribution.",
    //   highlights: [
    //     "Exploring heavy conveyor motor drives, sensor networks, and process automation.",
    //     "Studying industrial electrical safety and power distribution across large manufacturing facilities."
    //   ],
    //   tags: ["Factory Automation", "Industrial Wiring", "PLC Concepts", "Heavy Machinery"]
    // },
    // {
    //   id: 3,
    //   role: "Diploma in Electrical Engineering",
    //   company: "Barishal Polytechnic Institute",
    //   unit: "Academic Journey",
    //   period: "2023 – Present",
    //   type: "8th Semester Intern",
    //   description: "Acquiring strong fundamentals in circuit design, electrical machines, embedded hardware, and software integration.",
    //   highlights: [
    //     "Earned Level-3 Certificate in Electrical Installation & Maintenance.",
    //     "Competed in National Skills and Innovation Competition (2025)."
    //   ],
    //   tags: ["Circuit Design", "Embedded Systems", "Electrical Machines", "GTD Systems"]
    // }
  ];

  return (
    <div id="experience" className="min-h-screen flex items-center justify-center ">
      <div className="container mx-auto my-10  border-blue-700">
        {/* Section Heading */}
        <h1 className="gradient-text text-5xl md:text-6xl lg:text-7xl text-center font-black p-5">
          Experience
        </h1>
        <h6 className="mb-16 font-semibold text-gray-400 text-lg italic text-center">
          &quot;Gaining real-world industry exposure across heavy manufacturing and power units&quot;
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
            {experiences.slice().reverse().map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={` relative flex flex-col lg:flex-row items-center ${!isEven ? 'lg:flex-row-reverse' : ''
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
                    <div className="bg-slate-900/80 backdrop-blur-md border-4 border-cyan-500/20  hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group">

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
                      <div className='flex justify-between'>
                        <div>
                          <h3 className="text-xl group-hover:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-cyan-400 group-hover:text-gray-200 font-medium mb-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className="">
                          <img className='rounded-md  w-8  bg-gray-200 group-hover:scale-150' src={exp.logo || 'https://placehold.co/550x550/0f1629/ff7800.png?text=Julkarnain+Zunayed'} alt="" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 italic mb-4">
                        {exp.unit}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="text-sm text-gray-400 space-y-1.5 mb-5 list-disc pl-4">
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