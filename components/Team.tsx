import React from 'react';
import type { TeamMember } from '../types';
import { UsersIcon } from './IconComponents';

const teamMembers: TeamMember[] = [
    {
        name: "Zubair Kabir",
        role: "President and Chairman",
        imageUrl: "https://res.cloudinary.com/dy80ftu9k/image/upload/v1752141370/472873594_10164937388544778_1148277413455252591_n_ndwmh1.jpg"
    },
    {
        name: "Fatima Rahman",
        role: "Director of Research",
        imageUrl: "https://picsum.photos/400/400?random=11"
    },
    {
        name: "Kamal Hossain",
        role: "Head of Policy Advocacy",
        imageUrl: "https://picsum.photos/400/400?random=12"
    },
    {
        name: "Nadia Islam",
        role: "Events & Outreach Coordinator",
        imageUrl: "https://picsum.photos/400/400?random=13"
    }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <div className="relative inline-block">
            <img 
                className="w-40 h-40 rounded-full object-cover mx-auto shadow-2xl border-4 border-slate-700" 
                src={member.imageUrl} 
                alt={`Photo of ${member.name}`} 
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-500 to-sky-500 p-1 rounded-full">
               <div className="w-6 h-6 bg-slate-800 rounded-full"/>
            </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{member.name}</h3>
        <p className="text-emerald-400 font-semibold">{member.role}</p>
    </div>
);

const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
                        <UsersIcon className="w-10 h-10 mr-4 text-sky-400" />
                        Our <span className="gradient-text ml-2">Leadership</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Meet the dedicated individuals guiding our mission to empower the next generation of Bangladeshi leaders.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;