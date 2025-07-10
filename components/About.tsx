
import React from 'react';
import { LightbulbIcon, NetworkIcon } from './IconComponents';

const About: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-[#0f172a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold">The Future is <span className="gradient-text">Youth-Led & Nation-Focused</span></h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        We are a collective of passionate young leaders, researchers, and innovators dedicated to creating a prosperous and sovereign Bangladesh.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="relative">
                         <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-lg blur opacity-25"></div>
                         <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140405/mission_vision_fvwemf.jpg" alt="Youth collaboration" className="rounded-lg shadow-2xl relative" />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center"><LightbulbIcon className="w-8 h-8 mr-3 text-emerald-400"/>Our Mission</h3>
                            <p className="text-slate-400">
                                To serve as a dynamic hub for policy research and advocacy, empowering Bangladeshi youth to contribute effectively to national development and governance through evidence-based analysis, collaborative dialogue, and a commitment to our nation's sovereignty and progress.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center"><LightbulbIcon className="w-8 h-8 mr-3 text-sky-400"/>Our Vision</h3>
                            <p className="text-slate-400">
                                We envision a Bangladesh where a generation of nationalist youth are at the forefront of policy innovation, driving sustainable change and ensuring their voices are integral to shaping the nation's prosperous future.
                            </p>
                        </div>
                         <div>
                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center"><NetworkIcon className="w-8 h-8 mr-3 text-emerald-400"/>Networking & Support</h3>
                            <p className="text-slate-400">
                                We connect talented young minds with the resources, mentorship, and networks they need to thrive. We bridge the gap between ambition and opportunity, ensuring our brightest have the support to realize their vision for Bangladesh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
