import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-xs">A</div>
                    <span className="font-bold text-slate-900">Alien AI</span>
                </div>
                <p className="text-sm text-slate-500">© 2024 Alien AI Inc. All rights reserved.</p>
                <div className="flex gap-6 text-sm text-slate-500">
                    <a href="#" className="hover:text-indigo-600">Privacy</a>
                    <a href="#" className="hover:text-indigo-600">Terms</a>
                    <a href="#" className="hover:text-indigo-600">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
