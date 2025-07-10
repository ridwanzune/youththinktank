import React from 'react';
import { ArrowRightIcon } from './IconComponents';
import type { Page } from '../App';

interface HeroProps {
    onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative text-white py-32 md:py-48 bg-cover bg-center" style={{ backgroundImage: `url('https://res.cloudinary.com/dy80ftu9k/image/upload/v1752141222/image_24_gkqoka.webp')` }}>
             <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tighter">
                    Empowering the Youth of <span className="gradient-text">Bangladesh</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                    A dedicated platform for young patriots to research, debate, and shape the future of Bangladesh through innovative, nation-first policy-making.
                </p>
                <p className="text-md md:text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                    Under the <span className="font-semibold text-slate-200">Foundation for Strategic and Development Studies (FSDS)</span>
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('work'); }} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg inline-flex items-center">
                        Explore Our Work
                        <ArrowRightIcon />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;