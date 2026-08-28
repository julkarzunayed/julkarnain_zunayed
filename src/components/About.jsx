import React from 'react';
// import profileImage from "../assets/profile/profile_by_canva.png"

const About = () => {
    return (
        <section className="min-h-screen border border-blue-800/20  text-white py-16 flex items-center justify-center">
            <div className='container mx-auto px-4 flex gap-10 flex-col lg:flex-row items-center justify-center'>
                <figure className=''>
                    <img className='rounded-full border-4 border-blue-900 max-w-3xs lg:max-w-xs  logo-drop-shadow'
                        // src={profileImage || `'https://placehold.co/550x550/0f1629/ff7800.png?text=Julkarnain+Zunayed'`}
                        src='https://placehold.co/660x660/0f1629/ff7800.png?text=?'
                        alt="" />
                </figure>
                <div className="max-w-2xl">
                    <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
                    <p className="text-lg leading-relaxed">
                        I&apos;m Julkarnain Zunayed, a Disciplined Electrical Engineering student with expertise in circuit simulation, embedded systems, and industrial electrical layouts. A fast learner and active listener  skilled at bridging the gap between hardware design and digital control systems to optimize operational efficiency.
                        <br />
                        I&apos;m skilled in electrical work, electronics, IT
                        support, problem-solving, and creative thinking. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;