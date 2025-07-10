
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
            <div className="container mx-auto px-6 text-center text-slate-400">
                <p>&copy; {new Date().getFullYear()} Youth Think Tank Forum Bangladesh. All Rights Reserved.</p>
                <p className="text-sm mt-2">Designed with passion for a brighter future.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
