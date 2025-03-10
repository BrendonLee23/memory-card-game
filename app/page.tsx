"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Sun, Moon, Cloud, Flower2, GitBranch, Camera, Book, Shield } from 'lucide-react'; // Mais ícones
import { toast } from "sonner";

type MemoryCard = {
  id: number;
  icon: string;
  isMatched: boolean;
  color: string;
};

const iconConfigs = [
  { icon: "Heart", component: Heart, color: "text-rose-400" },
  { icon: "Star", component: Star, color: "text-amber-400" },
  { icon: "Sun", component: Sun, color: "text-yellow-400" },
  { icon: "Moon", component: Moon, color: "text-purple-400" },
  { icon: "Cloud", component: Cloud, color: "text-sky-400" },
  { icon: "Flower2", component: Flower2, color: "text-emerald-400" },
  { icon: "GitBranch", component: GitBranch, color: "text-teal-400" },
  { icon: "Camera", component: Camera, color: "text-pink-400" },
  { icon: "Book", component: Book, color: "text-yellow-500" },
  { icon: "Shield", component: Shield, color: "text-indigo-500" }
];

const createCards = (numCards: number) => {
  const cards: MemoryCard[] = [];

  const icons = iconConfigs.slice(0, numCards / 2); // Garantir que temos ícones suficientes para a quantidade de cartas

  icons.forEach(({ icon, color }, index) => {
    cards.push(
      { id: index * 2, icon, color, isMatched: false },
      { id: index * 2 + 1, icon, color, isMatched: false }
    );
  });

  return cards.sort(() => Math.random() - 0.5);
};

export default function Home() {
  const [numCards, setNumCards] = useState(6); // Número de cartas por padrão
  const [cards, setCards] = useState<MemoryCard[]>(createCards(numCards));
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  const handleCardClick = (clickedIndex: number) => {
    if (isChecking || cards[clickedIndex].isMatched) return;
    if (flippedIndexes.includes(clickedIndex)) return;
    if (flippedIndexes.length === 2) return;

    const newFlipped = [...flippedIndexes, clickedIndex];
    setFlippedIndexes(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      const [firstIndex, secondIndex] = newFlipped;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.icon === secondCard.icon) {
        setTimeout(() => {
          setCards(cards.map((card) =>
            card.icon === firstCard.icon ? { ...card, isMatched: true } : card
          ));
          setFlippedIndexes([]);
          setMatches(m => m + 1);
          setIsChecking(false);

          if (matches === (cards.length / 2) - 1) {
            toast("🎉 Congratulations! You've found all the matches! 🎈", {
              className: "bg-purple-900 text-purple-100 border-purple-700"
            });
          }
        }, 500);
      } else {
        setTimeout(() => {
          setFlippedIndexes([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(createCards(numCards));
    setFlippedIndexes([]);
    setMatches(0);
    setIsChecking(false);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newNumCards = parseInt(e.target.value);
    setNumCards(newNumCards);
    setCards(createCards(newNumCards));
    setFlippedIndexes([]);
    setMatches(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 text-transparent bg-clip-text pb-2">
          Memory Match Game
        </h1>
        <p className="text-indigo-200">
          Matches found: {matches} of {cards.length / 2}
        </p>
        <div className="space-x-4">
          <select
            value={numCards}
            onChange={handleCardNumberChange}
            className="px-4 py-2 border border-indigo-600 rounded-lg text-indigo-200 bg-indigo-950"
          >
            {[6, 8, 10, 12, 14, 16, 18, 20].map(num => (
              <option key={num} value={num}>
                {num} Cards
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 p-6 rounded-xl bg-indigo-950/50 backdrop-blur-sm">
        {cards.map((card, index) => {
          const IconComponent = iconConfigs.find(cfg => cfg.icon === card.icon)?.component;
          return (
            <motion.div
              key={card.id}
              initial={{ rotateY: 0 }}
              animate={{
                rotateY: card.isMatched || flippedIndexes.includes(index) ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="perspective-1000"
            >
              <Card
                className={`relative w-24 h-24 md:w-32 md:h-32 cursor-pointer transform-style-3d transition-all duration-300 ${
                  card.isMatched
                    ? "bg-indigo-900/50 border-indigo-400/50"
                    : flippedIndexes.includes(index)
                    ? "bg-indigo-800/50 border-indigo-500/50"
                    : "bg-indigo-950 border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/80"
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-white/5" />
                <AnimatePresence>
                  {(card.isMatched || flippedIndexes.includes(index)) && IconComponent && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`w-12 h-12 ${card.isMatched 
                            ? `${card.color} filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`
                            : card.color
                          }`}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <Button
        onClick={resetGame}
        variant="outline"
        size="lg"
        className="bg-indigo-950 border-indigo-700 hover:bg-indigo-900 hover:border-indigo-500 text-indigo-200 hover:text-indigo-100"
      >
        Start New Game
      </Button>
    </div>
  );
}
