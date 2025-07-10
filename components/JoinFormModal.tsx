
import React, { useState } from 'react';
import { CloseIcon } from './IconComponents';

interface JoinFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const JoinFormModal: React.FC<JoinFormModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [interest, setInterest] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            console.log({ name, email, interest, message });
            setStatus('submitted');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                // Reset form
                setName('');
                setEmail('');
                setInterest('');
                setMessage('');
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative glass-card rounded-xl shadow-2xl w-full max-w-lg p-8 transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <CloseIcon className="w-6 h-6" />
                </button>
                
                {status === 'submitted' ? (
                     <div className="text-center">
                        <h2 className="text-3xl font-bold gradient-text mb-4">Thank You!</h2>
                        <p className="text-slate-300 text-lg">Your submission has been received. We will be in touch with you shortly.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold gradient-text mb-2">Get Involved</h2>
                        <p className="text-slate-400 mb-6">Join our mission to build a stronger Bangladesh.</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition" />
                            </div>
                             <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-slate-300 mb-1">Area of Interest</label>
                                <select id="interest" value={interest} onChange={e => setInterest(e.target.value)} required className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition appearance-none">
                                    <option value="" disabled>Select an area</option>
                                    <option value="economy">Economy & Trade</option>
                                    <option value="technology">Technology & Digital Sovereignty</option>
                                    <option value="social-policy">Social Policy & Governance</option>
                                    <option value="environment">Environment & Climate</option>
                                    <option value="foreign-policy">Foreign Policy & National Security</option>
                                    <option value="culture">Culture & Heritage</option>
                                </select>
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Why do you want to join? (Optional)</label>
                                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={3} className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-px disabled:bg-slate-600 disabled:cursor-not-allowed inline-flex items-center justify-center"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Application'
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default JoinFormModal;
