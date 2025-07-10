
import React from 'react';
import { LightbulbIcon, NetworkIcon } from './IconComponents';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="glass-card p-6 rounded-xl border border-slate-800 transition-all duration-300 ease-in-out hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:scale-[1.03] hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
            {icon}
            {title}
        </h3>
        <p className="text-slate-400">
            {children}
        </p>
    </div>
);


const About: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-[#0f172a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold">The Future is <span className="gradient-text">Youth-Led & Nation-Focused</span></h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        We are a collective of passionate young leaders, researchers, and innovators dedicated to creating a prosperous and sovereign Bangladesh.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="relative group cursor-pointer">
                         <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                         <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140405/mission_vision_fvwemf.jpg" alt="Youth collaboration" className="rounded-lg shadow-2xl relative transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="space-y-8">
                       <FeatureCard icon={<LightbulbIcon className="w-8 h-8 mr-3 text-emerald-400"/>} title="Our Mission">
                             To serve as a dynamic hub for policy research and advocacy, empowering Bangladeshi youth to contribute effectively to national development and governance through evidence-based analysis, collaborative dialogue, and a commitment to our nation's sovereignty and progress.
                       </FeatureCard>

                       <FeatureCard icon={<LightbulbIcon className="w-8 h-8 mr-3 text-sky-400"/>} title="Our Vision">
                           We envision a Bangladesh where a generation of nationalist youth are at the forefront of policy innovation, driving sustainable change and ensuring their voices are integral to shaping the nation's prosperous future.
                       </FeatureCard>
                       
                       <FeatureCard icon={<NetworkIcon className="w-8 h-8 mr-3 text-emerald-400"/>} title="Networking & Support">
                           We connect talented young minds with the resources, mentorship, and networks they need to thrive. We bridge the gap between ambition and opportunity, ensuring our brightest have the support to realize their vision for Bangladesh.
                       </FeatureCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
