
import React from 'react';
import type { Page } from '../App';
import Logo from './Logo';

interface HeaderProps {
    onOpenModal: () => void;
    onNavigate: (page: Page) => void;
    currentPage: Page;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    onNavigate: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
    const isActive = page === currentPage;
    return (
        <a 
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onNavigate(page);
            }} 
            className={`transition-colors duration-300 ${isActive ? 'text-white font-semibold border-b-2 border-emerald-500' : 'text-slate-300 hover:text-white'}`}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </a>
    );
};


const Header: React.FC<HeaderProps> = ({ onOpenModal, onNavigate, currentPage }) => {
    return (
        <header className="sticky top-0 z-50 glass-card">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a 
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigate('home');
                    }}
                >
                    <Logo />
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <NavLink page="about" currentPage={currentPage} onNavigate={onNavigate}>About</NavLink>
                    <NavLink page="work" currentPage={currentPage} onNavigate={onNavigate}>Our Work</NavLink>
                    <NavLink page="events" currentPage={currentPage} onNavigate={onNavigate}>Events</NavLink>
                </nav>
                <button 
                    onClick={onOpenModal}
                    className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-px"
                >
                    Get Involved
                </button>
            </div>
        </header>
    );
};

export default Header;
