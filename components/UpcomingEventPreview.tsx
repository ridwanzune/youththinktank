
import React from 'react';
import type { Page } from '../App';
import { ArrowRightIcon } from './IconComponents';

interface UpcomingEventPreviewProps {
    onNavigate: (page: Page) => void;
}

const UpcomingEventPreview: React.FC<UpcomingEventPreviewProps> = ({ onNavigate }) => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Upcoming <span className="gradient-text">Signature Event</span>
                    </h2>
                </div>
                <div className="glass-card rounded-xl shadow-lg hover:shadow-sky-500/20 transition-all duration-300 overflow-hidden md:flex md:items-center group">
                    <div className="md:w-1/2 overflow-hidden">
                        <img src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1752140404/July_remembereance_imae_1_mkez0p.webp" alt="Festival of Remembrance" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async"/>
                    </div>
                    <div className="p-8 md:p-12 md:w-1/2">
                        <p className="text-sm font-bold text-emerald-400 tracking-widest">JULY 31, 2025</p>
                         <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">A Festival of Remembrance of the July Revolution</h3>
                         <p className="text-slate-400 mb-6">
                            Join our landmark launch event to commemorate the historic July Revolution, built on the pillars of National Integration, Intellectual Leadership, and Sustained Impact.
                         </p>
                         <button onClick={() => onNavigate('event-detail')} className="font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center group/link text-lg">
                            View Full Details
                            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEventPreview;