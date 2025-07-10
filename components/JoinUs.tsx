
import React from 'react';
import { ArrowRightIcon } from './IconComponents';

interface JoinUsProps {
    onOpenModal: () => void;
}

const JoinUs: React.FC<JoinUsProps> = ({ onOpenModal }) => {
    return (
        <section id="join" className="py-20 md:py-28 bg-[#0f172a]">
            <div className="container mx-auto px-6">
                <div className="text-center bg-gradient-to-r from-emerald-500 to-sky-500 p-10 md:p-16 rounded-xl shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Be a Part of the Change
                    </h2>
                    <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-8">
                        Are you passionate about making a difference? Join our network of young thinkers and leaders today.
                    </p>
                    <button 
                        onClick={onOpenModal}
                        className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg inline-flex items-center">
                        Join The Forum <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
