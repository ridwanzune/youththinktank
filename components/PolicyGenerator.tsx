
import React, { useState, useCallback } from 'react';
import { generatePolicyIdea } from '../services/geminiService';
import { SparklesIcon, ArrowRightIcon } from './IconComponents';

const PolicyGenerator: React.FC = () => {
    const [topic, setTopic] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [result, setResult] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleGenerate = useCallback(async () => {
        if (!topic.trim()) {
            setError('Please enter a topic to generate ideas.');
            return;
        }

        setIsLoading(true);
        setError('');
        setResult('');

        try {
            const idea = await generatePolicyIdea(topic);
            setResult(idea);
        } catch (err: any) {
            setError(err.message || 'Failed to generate policy idea. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [topic]);

    return (
        <section id="policy-generator" className="py-20 md:py-28 bg-[#0f172a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
                        <SparklesIcon className="w-10 h-10 mr-4 text-emerald-400" />
                        AI-Powered <span className="gradient-text ml-2">Policy Idea Generator</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Have an idea? Enter a topic below and let our AI help you draft a preliminary policy brief.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto glass-card p-8 rounded-xl shadow-2xl">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="e.g., 'Youth unemployment in rural areas'"
                            className="flex-grow bg-slate-800 border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-300"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={isLoading}
                            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-px disabled:bg-slate-600 disabled:cursor-not-allowed inline-flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </>
                            ) : (
                                <>
                                    Generate Idea <ArrowRightIcon className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </button>
                    </div>

                    {error && <p className="mt-4 text-red-400">{error}</p>}

                    {result && (
                        <div className="mt-8 p-6 bg-slate-900 rounded-lg border border-slate-700">
                           <h3 className="text-xl font-bold gradient-text mb-4">Generated Policy Brief</h3>
                           <div className="text-slate-300 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: result }}></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PolicyGenerator;
