import React, { useState } from 'react';
import type { Event } from '../types';
import type { Page } from '../App';
import { CalendarIcon, ArrowRightIcon } from './IconComponents';

interface EventsProps {
    onNavigate: (page: Page) => void;
}

const allEvents: Event[] = [
    {
        id: 'july-revolution-festival',
        date: "JULY 24-26, 2025",
        title: "Event: A Festival of Remembrance of the July Revolution",
        description: "A three-day landmark launch festival to commemorate the historic July Revolution, built on three core pillars: National Integration, Intellectual Leadership, and Sustained Impact.",
        link: "#",
        status: "upcoming"
    },
    {
        date: "OCT 25, 2024",
        title: "Annual Youth Policy Dialogue",
        description: "Join our flagship event where young leaders, policymakers, and experts discuss the future of Bangladesh.",
        link: "#",
        status: "upcoming"
    },
    {
        date: "NOV 15, 2024",
        title: "Workshop: Research for National Impact",
        description: "A hands-on workshop to equip young researchers with tools to conduct studies that strengthen our nation.",
        link: "#",
        status: "upcoming"
    },
    {
        date: "DEC 05, 2024",
        title: "Webinar: The Green Economy Transition",
        description: "Exploring opportunities for Bangladesh's transition to a sustainable, self-reliant economy.",
        link: "#",
        status: "upcoming"
    },
     {
        date: "AUG 15, 2024",
        title: "National Mourning Day Discussion",
        description: "A solemn reflection on our history and a commitment to building the future envisioned by our founding fathers.",
        link: "#",
        status: "past"
    },
    {
        date: "JUL 01, 2024",
        title: "Roundtable on Digital Security Act",
        description: "A critical discussion on balancing freedom of speech with national security in the digital age.",
        link: "#",
        status: "past"
    },
];

const EventItem: React.FC<{ event: Event; onNavigate: (page: 'event-detail') => void; }> = ({ event, onNavigate }) => {
    const isSpecialEvent = event.id === 'july-revolution-festival';
    
    return (
        <div className="flex items-start space-x-6 p-6 glass-card rounded-lg hover:border-emerald-500/50 transition-colors duration-300">
            <div className="text-center">
                <div className="text-sm font-bold text-emerald-400">{event.date.split(' ')[0]} {event.date.split(',')[1]}</div>
                <div className="text-3xl font-extrabold text-white">{event.date.split(' ')[1].replace(',', '')}</div>
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-slate-400 mb-4">{event.description}</p>
                {isSpecialEvent ? (
                     <button onClick={() => onNavigate('event-detail')} className="font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center group">
                        View Event Details
                        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                ) : (
                    <a href={event.link} className="font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center group">
                        {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                )}
            </div>
        </div>
    );
};

const Events: React.FC<EventsProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

    const upcomingEvents = allEvents.filter(e => e.status === 'upcoming');
    const pastEvents = allEvents.filter(e => e.status === 'past');
    
    const TabButton: React.FC<{tab: 'upcoming' | 'past', label: string}> = ({tab, label}) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-lg font-semibold rounded-md transition-all duration-300 ${activeTab === tab ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-700/50'}`}
        >
            {label}
        </button>
    )

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
                        <CalendarIcon className="w-10 h-10 mr-4 text-emerald-400" />
                        Our <span className="gradient-text ml-2">Events</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Connect with us, learn from experts, and expand your network.
                    </p>
                </div>

                <div className="flex justify-center space-x-4 mb-10">
                    <TabButton tab="upcoming" label="Upcoming" />
                    <TabButton tab="past" label="Past" />
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {activeTab === 'upcoming' && upcomingEvents.map((event, index) => (
                        <EventItem key={`upcoming-${index}`} event={event} onNavigate={onNavigate as (page: 'event-detail') => void} />
                    ))}
                    {activeTab === 'past' && pastEvents.map((event, index) => (
                        <EventItem key={`past-${index}`} event={event} onNavigate={onNavigate as (page: 'event-detail') => void}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;