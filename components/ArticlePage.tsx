
import React from 'react';
import type { Publication } from '../types';
import type { Page } from '../App';

interface ArticlePageProps {
    article: Publication;
    onNavigate: (page: Page) => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onNavigate }) => {
    return (
        <div className="py-20 md:py-28 bg-[#0a101f]">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="inline-block bg-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 text-md font-semibold mb-4">{article.category}</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter">
                        {article.title}
                    </h1>
                </div>

                <img src={article.imageUrl} alt={article.title} className="rounded-lg shadow-xl w-full object-cover h-64 md:h-96 mb-12" />
                
                <div className="glass-card p-8 md:p-10 rounded-xl">
                    <div className="prose max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: article.content }}>
                        {/* Article content will be rendered here */}
                    </div>
                </div>

                <div className="text-center pt-12">
                    <button 
                        onClick={() => onNavigate('work')}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg inline-flex items-center"
                    >
                        Back to Publications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;