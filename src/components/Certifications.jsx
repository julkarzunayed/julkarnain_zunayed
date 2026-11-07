import { Icon } from 'lucide-react';
import React from 'react';
import { GoLinkExternal } from 'react-icons/go';

const certificationsData = [
    {
        id: 1,
        courseName: "Electrical Installation and Maintenance for Light Engineering (Level - 3)",
        organization: "NATIONAL SKILLS DEVELOPMENT AUTHORITY (NSDA)",
        skills: ["Motor Control", "Industrial Wiring", "House Wiring", "Motor Rewinding", "OSH Practices", "Electrical Safety"],
        previewUrl: "https://drive.google.com/file/d/1Ca-78y3NEC4-pl506KJj-VIZXiiiqhHf/view?usp=drive_link",
    },
    {
        id: 2,
        courseName: "Complete Web Development Course",
        organization: "Programming Hero",
        skills: ["JavaScript", "Node.js", "Concept of Programming", "MERN Stack", "Server Concepts", "ReactJS", "ExpressJS", "MongoDB"],
        previewUrl: "https://drive.google.com/file/d/1DKbXSKon1zqOXCdbU-bk-88kjT6UBAQp/view?usp=drive_link",
    },
    {
        id: 3,
        courseName: "Computer Office Application (360 hrs)",
        organization: "Bangladesh Technical Education Board (BTEB)",
        skills: ["MS Word", "MS Excel", "MS PowerPoint", "e-Mail Writing", "Computer Fundamentals"],
        previewUrl: "https://drive.google.com/file/d/1BnupSr7zuSErjXyStZef01FyfvU6sb4D/view?usp=drive_link",
    },
];

const Certifications = () => {
    return (
        <section id='projects' className='min-h-screen flex items-center justify-center border border-blue-700/10 '>
            <div className="container mx-auto my-10">
                <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl text-center font-black  p-5">
                    Certifications & Training
                </h1>
                <h6 className="mb-10 font-semibold text-gray-400 text-lg italic text-center">
                    &quot;Validating technical competence through specialized programs and continuous learning.&quot;
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {certificationsData.map((cert) => (
                        <div key={cert.id} className="bg-gradient-to-br hover:bg-gradient-to-tr from-teal-400/70 via-cyan-500/50 to-indigo-500/50 rounded-xl p-[3px] transition-all duration-300 hover:scale-105">
                            <div
                                className="p-3 sm:p-6   bg-[#0f1629] rounded-[10px] space-y-2 md:space-y-3 h-full flex flex-col justify-between"
                            >
                                <div>
                                    {/* Course Title */}
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {cert.courseName}
                                    </h3>

                                    {/* Providing Organization */}
                                    <p className="text-sm text-gray-400 font-medium mb-4">
                                        {cert.organization}
                                    </p>

                                    {/* Skills Tokens / Badges */}
                                    <div className="flex gap-1.5 flex-wrap border-l-4 border-blue-500 pl-3">
                                        {
                                            cert.skills.map((skill, index) =>
                                                <span
                                                    key={index}
                                                    className="bg-gradient-to-r  from-blue-500 via-purple-5 to-purple-500 bg-center hover:bg-[length:200%_200%] rounded-full py-0.5 px-3 flex items-center gap-0.5">
                                                    {skill}
                                                </span>
                                            )
                                        }
                                    </div>
                                    {/* <div className="flex flex-wrap gap-2 mb-6">
                                        {cert.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md border border-gray-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div> */}
                                </div>

                                {/* Preview Link Button */}
                                <div className="pt-4 border-t border-gray-800 flex justify-end">
                                    <a
                                        href={cert.previewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"

                                    >
                                        <div className="bg-gradient-to-r p-[2px] rounded-[8px]  from-blue-500 via-purple-5 to-purple-500 bg-center">
                                            <div className="bg-slate-800 px-3 py-2 rounded-md flex items-center justify-center gap-2 text-sm font-semibold text-white hover:bg-slate-700 transition-colors duration-300">
                                                View Certificate <GoLinkExternal className="text-base" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;