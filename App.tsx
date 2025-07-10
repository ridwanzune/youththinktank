
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/OurWork';
import Events from './components/Events';
import Footer from './components/Footer';
import JoinFormModal from './components/JoinFormModal';
import EventPage from './components/EventPage';
import Team from './components/Team';
import Associations from './components/Associations';
import UpcomingEventPreview from './components/UpcomingEventPreview';
import type { Publication } from './types';
import ArticlePage from './components/ArticlePage';

export type Page = 'home' | 'about' | 'work' | 'events' | 'event-detail' | 'article';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [selectedArticle, setSelectedArticle] = useState<Publication | null>(null);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    
    const navigateTo = (page: Page) => {
        if (page !== 'article') {
            setSelectedArticle(null);
        }
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const navigateToArticle = (article: Publication) => {
        setSelectedArticle(article);
        setCurrentPage('article');
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'about':
                return <About />;
            case 'work':
                return <OurWork onNavigateToArticle={navigateToArticle} />;
            case 'events':
                return <Events onNavigate={navigateTo} />;
            case 'event-detail':
                return <EventPage onNavigate={navigateTo} />;
            case 'article':
                return selectedArticle ? (
                    <ArticlePage article={selectedArticle} onNavigate={navigateTo} />
                ) : (
                    <OurWork onNavigateToArticle={navigateToArticle} />
                );
            case 'home':
            default:
                return (
                    <>
                        <Hero onNavigate={navigateTo} />
                        <About />
                        <Team />
                        <Associations />
                        <UpcomingEventPreview onNavigate={navigateTo} />
                    </>
                );
        }
    };

    return (
        <div className="bg-[#0a101f] min-h-screen flex flex-col">
            <Header onOpenModal={handleOpenModal} onNavigate={navigateTo} currentPage={currentPage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
            <JoinFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default App;