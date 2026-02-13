'use client';

import { motion, AnimatePresence } from 'framer-motion';

// Interface for the card props
interface ComplimentCardProps {
    compliment: string;
    onClick: () => void;
    index: number;
}

export default function ComplimentCard({ compliment, onClick, index }: ComplimentCardProps) {
    return (
        <div className="relative w-full max-w-sm md:max-w-md h-64 md:h-80 cursor-pointer perspective-1000 mx-auto" onClick={onClick}>
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border-4 border-pink-200 flex flex-col items-center justify-center p-8 text-center select-none"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <p className="font-dela text-xl md:text-3xl text-purple-600 leading-tight">
                        {compliment}
                    </p>
                    <div className="absolute bottom-6 right-6 text-pink-300 animate-pulse">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                    <p className="absolute bottom-6 left-6 text-xs text-slate-400 font-inter font-medium tracking-widest uppercase">
                        Нажми на меня
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
