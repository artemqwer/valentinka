'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import ComplimentCard from '@/components/ComplimentCard';
import { Heart } from 'lucide-react';

const COMPLIMENTS = [
  "Ты буквально главный герой в лучшем смысле этого слова.",
  "Твой музыкальный вкус — это элита, честно.",
  "Общение с тобой — моя любимая терапия.",
  "Вайб — 10/10, официально подтверждено.",
  "Ты неиронично самый смешной человек, которого я знаю.",
  "Уметь делать скучные вещи веселыми — это твоя суперсила.",
  "Твои аутфиты всегда на высоте, без исключений.",
  "Доверил бы тебе aux-кабель без вопросов.",
  "Ты сегодня сияешь, кстати.",
  "Рад, что мы существуем в одно время.",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const nextCompliment = () => {
    setIndex((prev) => (prev + 1) % COMPLIMENTS.length);
  };

  const handleConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'],
        shapes: ['circle', 'square'],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'],
        shapes: ['circle', 'square'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Heart burst
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB'],
        shapes: ['circle'],
        scalar: 1.2,
      });
    }, 500);
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-pink-200/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-yellow-200/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Hero */}
      <div className="z-10 text-center mb-8 md:mb-12 max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-dela text-4xl md:text-6xl text-purple-600 mb-4 tracking-tight drop-shadow-sm">
            Привет!
          </h1>
          <p className="font-inter text-lg md:text-xl text-slate-600 font-medium">
            Я сделал эту страничку, чтобы напомнить тебе, какая ты потрясающая.
          </p>
        </motion.div>
      </div>

      {/* Deck */}
      <div className="z-10 mb-20 w-full flex justify-center px-4">
        <ComplimentCard
          compliment={COMPLIMENTS[index]}
          onClick={nextCompliment}
          index={index}
        />
      </div>

      {/* Footer */}
      <div className="z-20 fixed bottom-8 md:bottom-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConfetti}
          className="bg-white/80 backdrop-blur-sm border-2 border-pink-300 text-pink-500 font-dela py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-pink-50 transition-all flex items-center gap-2 text-lg"
        >
          <span>Обнять виртуально</span>
          <Heart className="w-5 h-5 fill-current" />
        </motion.button>
      </div>
    </main>
  );
}
