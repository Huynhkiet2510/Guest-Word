import Row from "./Row.jsx"
import { useGuestWord } from "./useGuestWord.jsx"

const GuestWord = () => {
    const { solution, guesses, turn, currentGuess, isGameOver, resetGame } = useGuestWord();

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-50 p-4'>
            <div className="flex flex-col items-center max-w-sm w-full">

                <h1 className='font-bold text-4xl mb-8 tracking-tighter text-gray-800 uppercase'>
                    Guest Word
                </h1>

                <div className='flex flex-col gap-2 mb-8'>
                    {guesses.map((guess, i) => (
                        <Row
                            key={i}
                            guess={i === turn ? currentGuess : guess}
                            isCurrent={i === turn}
                            solution={solution}
                            isSubmitted={i < turn}
                        />
                    ))}
                </div>

                {isGameOver && (
                    <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
                        <div className="text-center">
                            <p className="text-gray-500 uppercase tracking-widest text-sm">Đáp án đúng</p>
                            <h2 className="text-2xl font-black text-green-600 tracking-[0.5em] ml-[0.5em]">
                                {solution}
                            </h2>
                        </div>

                        <button
                            onClick={resetGame}
                            className="mt-2 px-8 py-3 bg-gray-800 text-white rounded-md font-bold hover:bg-black transition-all shadow-md active:scale-95 uppercase text-sm tracking-wider"
                        >
                            Chơi lại
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GuestWord