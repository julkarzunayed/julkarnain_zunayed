{/* <Icon icon="skill-icons:github-dark" /> */ }
import React from 'react';
// const frontend = import.meta.glob("../assets/skills-logo/frontend/*.png", { eager: true })
// const frontendLogos = Object.values(frontend).map(img => img.default);

import { Code2, Wrench, Database, Layout, Cpu, Cloud, Icon, Zap, CircuitBoard, Cable, Settings, ShieldCheck, PlugZap, ListPlus } from "lucide-react";
import { Icon as IconIfy } from '@iconify/react/dist/iconify.js';

const SkillCard = ({ icon: Icon, title, color, skills }) => {
    Icon
    return (
        <div className="border-2 border-blue-800/ bg-blue-800/  p-4 sm:p-5 md:p-6 rounded-2xl bg-gray-800/50 border-cyan-500/10 hover:bg-gray-800/80 transition-all duration-300" style={{
            boxShadow: 'inset 2px 2px 4px #50505050,inset -2px -2px 4px #00ffff30'
        }}>
            <div className="flex items-center gap-2">
                <Icon className={`w-8 h-8 ${color}`} />
                <h4 className="text-white font-semibold text-xl">
                    {title}
                </h4>
            </div>
            <div className="flex  gap-3 flex-wrap mt-5 ">
                {/* <Icon icon="skill-icons:vite-light" width="256" height="256" /> */}
                {
                    skills?.map((skill, index) =>
                        <IconIfy key={index} icon={skill?.icon} style={{
                            ...skill?.style,
                            boxShadow: 'inset 4px 4px 6px #00000050,inset -4px -4px 6px #ffffff30'
                        }} className='w-20 h-20 bg-gray-700/50 hover:scale-105 hover:bg-gray-700 text-gray-100 border border-gray-600/60 p-2.5 rounded-lg' />
                    )
                }
                {/* <img key={``} src={``} alt="" className="max-h-16 bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600" /> */}
            </div>
        </div>
    )

}

const SkillCardText = ({ icon: Icon, title, color, skills }) => {
    // console.log("Icon", Icon)
    if (Icon?.icon) console.log("Icon")
    else console.log("no icons")
    return (
        <div className="border-2 border-blue-800/ bg-blue-800/  p-4 sm:p-5 md:p-6 rounded-2xl bg-gray-800/50 border-cyan-500/10 hover:bg-gray-800/80 transition-all duration-300" style={{
            boxShadow: 'inset 2px 2px 4px #50505050,inset -2px -2px 4px #00ffff30'
        }}>
            <div className="flex items-center gap-2">
                {/* <IconIfy icon={Icon?.icon} className={`w-8 h-8 `} /> */}
                {
                    Icon?.icon ?
                        <IconIfy icon={Icon?.icon} className={`w-8 h-8 ${Icon?.color}`}  />
                        :
                        <Icon className={`w-8 h-8 ${color}`} />
                }
                {/* <Icon className={`w-8 h-8 ${color}`} /> */}
                <h4 className="text-white font-semibold text-xl">
                    {title}
                </h4>
            </div>
            {/* <IconIfy key={index} icon={skill?.icon} style={{
                            ...skill?.style,
                            boxShadow: 'inset 4px 4px 6px #00000050,inset -4px -4px 6px #ffffff30'
                        }} className='w-20 h-20 bg-gray-700/50 hover:scale-105 hover:bg-gray-700 text-gray-100 border border-gray-600/60 p-2.5 rounded-lg' /> */}
            <div className="flex  gap-3 flex-wrap mt-5 ">
                {/* <Icon icon="skill-icons:vite-light" width="256" height="256" /> */}
                {
                    skills?.map((skill, index) =>
                        <div key={index}
                            style={{
                                boxShadow: 'inset 4px 4px 6px #00000050,inset -4px -4px 6px #ffffff30',
                                flex: '1 0 20%',
                            }}
                            className='flex items-center gap-2 justify-center h-20  bg-gray-700/50 hover:scale-105 hover:bg-gray-700 border border-gray-600/60 p-2.5 rounded-lg  text-center font-semibold text-cyan-400'
                        >
                            {/* Icons */}
                            <IconIfy key={index} icon={skill?.icon} style={{
                                ...skill?.style,
                            }} className='w-10 h-10 text-gray-200' />

                            {/* Skill Tag */}
                            {skill?.tag}
                        </div>)
                }
                {/* <img key={``} src={``} alt="" className="max-h-16 bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600" /> */}
            </div>
        </div>
    )
}
// ix/drive-safety
// game-icons:power-generator
// roentgen:building-bolt-door
// lime   indigo   amber
const Skills = () => {
    const skillsData = [
        // {
        //     icon: Code2,
        //     title: 'Frontend Development',
        //     color: 'text-blue-400',
        //     skills: [
        //         { icon: "logos:react" },
        //         { icon: "logos:vitejs" },
        //         { icon: "logos:react-router" },
        //         { icon: "logos:daisyui-icon" },
        //         { icon: "logos:tailwindcss-icon" },
        //         { icon: "logos:javascript" },
        //         { icon: "logos:css-3" },
        //         { icon: "logos:html-5" },
        //     ],
        //     skillIcon: true
        // },
        // {
        //     icon: Database,
        //     title: 'Backend Development',
        //     color: 'text-green-400',
        //     skills: [
        //         { icon: "logos:nodejs-icon" },
        //         { icon: "simple-icons:express", style: { color: "#fff" } },
        //         { icon: "logos:javascript" },
        //         { icon: "devicon:mongodb" },
        //         { icon: "logos:jwt-icon" },
        //         { icon: "logos:firebase-icon" },
        //     ],
        //     skillIcon: true
        // },
        // {
        //     icon: Layout,
        //     title: 'UI/UX',
        //     color: 'text-purple-400',
        //     skills: [
        //         { icon: "logos:figma" },
        //         { icon: "logos:adobe-photoshop" },
        //     ],
        //     skillIcon: true
        // },
        // {
        //     icon: Cloud,
        //     title: 'Claud & DevOps',
        //     color: 'text-orange-400',
        //     skills: [
        //         { icon: "logos:firebase-icon" },
        //         { icon: "skill-icons:vercel-dark" },
        //         { icon: "logos:netlify-icon" },
        //         { icon: "logos:git-icon" },
        //         { icon: "logos:github-icon" },
        //     ],
        //     skillIcon: true
        // },
        // {
        //     icon: Cpu,
        //     title: 'Tools & Technologies',
        //     color: 'text-pink-400',
        //     skills: [
        //         { icon: "logos:visual-studio-code" },
        //         { icon: "logos:npm-icon" },
        //         { icon: "logos:chrome" },
        //     ],
        //     skillIcon: true
        // },
        // {
        //     icon: Wrench,
        //     title: 'Technical Skills',
        //     color: 'text-blue-400',
        //     skills: [
        //         { icon: "streamline-cyber-color:programming-bug-2" },
        //         { icon: "streamline-pixel:coding-apps-websites-programming-bug" },
        //         { icon: "line-md:cog-loop" },
        //         { icon: "flat-color-icons:electronics" },
        //         { icon: "file-icons:electron", style: { color: "#00d8ff" } },
        //     ],
        //     skillIcon: true
        // },

        {
            icon: Zap,
            title: 'Power Generation & Heavy Systems',
            color: 'text-orange-400',
            skills: [
                {
                    tag: "Generator",
                    icon: "mdi:generator-portable",
                    icon2: "solar:danger-bold-duotone",
                },
                {
                    tag: "Turbines",
                    icon: "svg-spinners:wind-toy",
                    icon3: "mdi:turbine",
                    icon2: "mdi:engine"
                },
                {
                    tag: "Boilers",
                    icon: "icon-park-outline:boiler",
                    icon2: "mdi:boiler-water",
                    icon3: "ph:fire-bold",
                },
                {
                    tag: "Alternator",
                    icon: "hugeicons:sine-02",
                    icon3: "mdi:current-ac",
                    icon2: "mdi:sine-wave",
                },
                {
                    tag: "DC Systems",
                    icon: "bi:battery-charging",
                    icon2: "mdi:battery-charging-100",
                    icon3: "solar:battery-charge-bold-duotone",
                },
                {
                    tag: "Solar Systems",
                    icon: "game-icons:solar-power",
                    icon2: "hugeicons:solar-power",
                },
            ],
            skillIcon: false
        },
        {
            icon: {
                icon: "hugeicons:electric-tower-01",
                icon2: "carbon:network-2",
                color: "text-cyan-500"
            },
            title: 'Distribution & Switchgear Systems',
            color: 'text-blue-400',
            skills: [
                {
                    tag: "Substation",
                    icon: "game-icons:power-generator",
                    icon2: "tabler:utility-pole",
                    icon3: "mdi:transmission-tower",
                },
                {
                    tag: "Switchgear",
                    icon: "mdi:fuse",
                    icon2: "mdi:toggle-switch",
                    icon3: "solar:shield-warning-bold-duotone"
                },
                {
                    tag: "Power Transformer",
                    icon2: "mdi:transformer",
                    icon3: "ph:cpu-bold",
                    icon: "pinhead:electrical-transformer-and-bolt"
                },
                {
                    tag: "Distribution",
                    icon: "hugeicons:electric-tower-01",
                    icon2: "mdi:chart-bar-stacked",
                    icon3: "carbon:meter-alt"
                },
            ],
            skillIcon: false
        },
        {
            icon: {
                icon: "mdi:robot-industrial",
                color: "text-blue-400"
            },
            title: 'Industrial Automation & PLC',
            color: 'text-blue-400',
            skills: [
                {
                    tag: "Motor Controlling",
                    icon2: "mdi:engine-outline",
                    icon3: "mdi:rotate-right-bold",
                    icon: "tabler:circuit-motor",
                },
                {
                    tag: "Relay Protection",
                    icon: "arcticons:hvv-switch",
                    icon3: "ix/drive-safety",
                    icon2: "ph:shield-check-bold"
                },
                {
                    tag: "PLC",
                    icon2: "mdi:cpu-64-bit",
                    icon3: "carbon:circuit-board",
                    icon: "ix:plc-device-user-data-type",
                    style: { color: "#fff" }
                },
                {
                    tag: "HMI",
                    icon: "ix:plc",
                    style: { color: "#fff" }
                },
                {
                    tag: "VFD",
                    icon: "hugeicons:remote-control",
                    style: { color: "#fff" }
                },
                
            ],
            skillIcon: false
        },
        {
            icon: PlugZap,
            title: 'Core Electrical & Wiring',
            color: 'text-red-400',
            skills: [
                {
                    tag: "Industrial Wiring",
                    icon2: "ph:plug-charging-bold",
                    icon3: "",
                    icon: "mdi:cable-data",
                },
                {
                    tag: "3-Phase Motor Control",
                    icon2: "carbon:power-heat",
                    icon3: "ph:lightning-bold",
                    icon: "ix:drive-safety",
                },
                {
                    tag: "Maintenance",
                    icon3: "tabler:tools",
                    icon: "wpf:maintenance",
                    icon2: "solar:wrench-bold-duotone",
                },
            ],
            skillIcon: false
        },
        {
            icon: CircuitBoard,
            title: 'Embedded Systems & Microcontrollers',
            color: 'text-amber-400',
            skills: [
                {
                    tag: "Arduino",
                    icon2: "",
                    icon3: "",
                    icon: "skill-icons:arduino",
                },
                {
                    tag: "Microcontrollers",
                    icon2: "mdi:chip",
                    icon3: "",
                    icon: "solar:cpu-bold-duotone",
                },
                {
                    tag: "C/C++ Programming",
                    icon2: "simple-icons:cplusplus",
                    icon3: "",
                    icon: "skill-icons:cpp",
                },
            ],
            skillIcon: false
        },
        {
            icon: Wrench,
            title: 'Tools & Testing Equipment',
            color: 'text-red-400',
            skills: [
                {
                    tag: "DC Systems",
                    icon: "bi:battery-charging",
                    icon2: "mdi:battery-charging-100",
                    icon3: "solar:battery-charge-bold-duotone",
                },
                {
                    tag: "Testing",
                    icon: "qlementine-icons:meter-high-16",
                    icon3: "tabler:device-floppy",
                    icon2: "mdi:multimeter",
                },
                {
                    tag: "",
                    icon2: "",
                    icon3: "",
                    icon: "",
                },
                
            ],
            skillIcon: false
        },
        {
            icon: Code2,
            title: 'Programming & Development',
            color: 'text-blue-400',
            skills: [
                { icon: "skill-icons:arduino" },
                { icon: "skill-icons:cpp" },
                { icon: "skill-icons:javascript" },
                { icon: "skill-icons:c" },
            ],
            skillIcon: true
        },
        {
            icon: Layout,
            title: 'Web Development',
            color: 'text-green-400',
            skills: [
                { icon: "logos:javascript" },
                { icon: "logos:react" },
                { icon: "logos:css-3" },
                { icon: "logos:html-5" },
                { icon: "logos:nodejs-icon" },
                { icon: "simple-icons:express", style: { color: "#fff" } },
                { icon: "devicon:mongodb" },
                { icon: "logos:github-icon" },
            ],
            skillIcon: true
        },
        {
            icon: ListPlus,
            title: 'Additional Skills',
            color: 'text-green-400',
            skills: [
                { icon: "skill-icons:linux-dark" },
                { icon: "skill-icons:vscode-dark" },
                { icon: "skill-icons:windows-dark" },
                { icon: "teenyicons:ms-word-solid" },
                { icon: "teenyicons:ms-excel-outline" },
            ],
            skillIcon: true
        },
    ]
    return (
        <div id='skills' className='min-h-screen flex items-center justify-center'>
            <div className="container mx-auto my-10">
                <h1 className="gradient-text text-5xl md:text-6xl lg:text-7xl text-center font-black  p-5">
                    My Skills
                </h1>
                <h6 className="mb-10 font-semibold text-gray-400 text-lg italic text-center">
                    &quot; Learning new Technologies and skills &quot;
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                    {
                        skillsData?.map((category, index) =>
                            !category.skillIcon ?
                                <SkillCardText
                                    key={index}
                                    icon={category.icon}
                                    title={category.title}
                                    color={category.color}
                                    skills={category.skills}
                                />
                                :
                                <SkillCard
                                    key={index}
                                    icon={category.icon}
                                    title={category.title}
                                    color={category.color}
                                    skills={category.skills}
                                />
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Skills;