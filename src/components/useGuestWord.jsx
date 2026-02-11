import { useEffect, useState } from 'react';
import { WORD_LIST } from "./WordList";

export const useGuestWord = () => {
    const [solution, setSolution] = useState(""); 
    const [guesses, setGuesses] = useState(Array(6).fill(""));
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);

    const initGame = () => {
        const randomWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
        setSolution(randomWord.toUpperCase());
        setGuesses(Array(6).fill(""));
        setTurn(0);
        setCurrentGuess("");
        setIsGameOver(false);
    };

    useEffect(() => {
        initGame
    }, []);

    useEffect(() => {
        const handleKeyUp = ({ key }) => {
            if (isGameOver) return;

            if (key === "Enter") {
                if (currentGuess.length < 5) return alert("Vui lòng nhập đủ 5 chữ cái!!!");

                const newGuesses = [...guesses];
                newGuesses[turn] = currentGuess.toUpperCase();

                setGuesses(newGuesses);

                if (currentGuess.toUpperCase() === solution || turn === 5) {
                    setIsGameOver(true);
                }

                setCurrentGuess("");
                setTurn(prev => prev + 1);
                return;
            }

            if (key === "Backspace") {
                setCurrentGuess(prev => prev.slice(0, -1));
                return;
            }

            if (/^[A-Za-z]$/.test(key)) {
                if (currentGuess.length < 5) {
                    setCurrentGuess(prev => prev + key.toUpperCase());
                }
            }
        };

        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);

    }, [currentGuess, turn, solution, isGameOver, guesses]);

    return { turn, currentGuess, guesses, isGameOver, solution, resetGame: initGame };
}