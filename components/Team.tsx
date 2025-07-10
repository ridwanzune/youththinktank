
import React, { useRef, useEffect, useCallback } from 'react';
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
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    },
    {
        name: "Kamal Hossain",
        role: "Head of Policy Advocacy",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "Nadia Islam",
        role: "Events & Outreach",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "Ahmed Chowdhury",
        role: "Chief Technology Officer",
        imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop"
    },
    {
        name: "Sadia Afrin",
        role: "Legal Advisor",
        imageUrl: "https://images.unsplash.com/photo-1589386417682-270478c24328?q=80&w=1887&auto=format&fit=crop"
    },
];

const duplicatedTeamMembers = [...teamMembers, ...teamMembers];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center w-60 flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110">
        <div className="relative inline-block">
            <img 
                className="w-40 h-40 rounded-full object-cover mx-auto shadow-2xl border-4 border-slate-700 pointer-events-none" 
                src={member.imageUrl} 
                alt={`Photo of ${member.name}`}
                loading="lazy"
                decoding="async"
            />
             <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-500 to-sky-500 p-1 rounded-full">
               <div className="w-6 h-6 bg-slate-800 rounded-full"/>
            </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-white whitespace-nowrap">{member.name}</h3>
        <p className="text-emerald-400 font-semibold whitespace-nowrap">{member.role}</p>
    </div>
);

const Team: React.FC = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const scrollerInnerRef = useRef<HTMLUListElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const velocity = useRef(0.5); // Speed of auto-scroll

    const animate = useCallback((_time: number) => {
        if (!scrollerRef.current || !scrollerInnerRef.current) return;

        if (!isDragging.current) {
            scrollerRef.current.scrollLeft += velocity.current;
            if (scrollerRef.current.scrollLeft >= scrollerInnerRef.current.scrollWidth / 2) {
                scrollerRef.current.scrollLeft = 0;
            }
        }
        animationFrameId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        animationFrameId.current = requestAnimationFrame(animate);
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [animate]);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (!scrollerRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - scrollerRef.current.offsetLeft;
        scrollLeft.current = scrollerRef.current.scrollLeft;
        scrollerRef.current.classList.add('dragging');
    }, []);

    const handleDragEnd = useCallback(() => {
        if (!scrollerRef.current) return;
        isDragging.current = false;
        scrollerRef.current.classList.remove('dragging');
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging.current || !scrollerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Drag speed multiplier
        scrollerRef.current.scrollLeft = scrollLeft.current - walk;
    }, []);
    
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (!scrollerRef.current) return;
        isDragging.current = true;
        startX.current = e.touches[0].pageX - scrollerRef.current.offsetLeft;
        scrollLeft.current = scrollerRef.current.scrollLeft;
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!isDragging.current || !scrollerRef.current) return;
        const x = e.touches[0].pageX - scrollerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollerRef.current.scrollLeft = scrollLeft.current - walk;
    }, []);


    return (
        <section id="team" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
                        <UsersIcon className="w-10 h-10 mr-4 text-sky-400" />
                        Our <span className="gradient-text ml-2">Leadership</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Meet the dedicated individuals guiding our mission to empower the next generation of Bangladeshi leaders.
                    </p>
                </div>
            </div>
            <div 
                className="scroller w-full"
                ref={scrollerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleDragEnd}
                onMouseUp={handleDragEnd}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleDragEnd}
                onTouchMove={handleTouchMove}
            >
                <ul className="scroller-inner" ref={scrollerInnerRef}>
                     {duplicatedTeamMembers.map((member, index) => (
                        <li key={index} className="px-8 py-4">
                            <TeamMemberCard member={member} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Team;