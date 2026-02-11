const Row = ({ guess, isCurrent, isSubmitted }) => {
    const tiles = Array(5).fill("");

    return (
        <div className="flex gap-2 mb-2">
            {tiles.map((_, i) => {
                let char = "";
                let statusClass = "border-gray-300 text-black";

                if (isSubmitted && guess) {
                    char = guess[i].key;
                    const s = guess[i].status;
                    if (s === "green") statusClass = "bg-green-500 border-green-500 text-white";
                    else if (s === "yellow") statusClass = "bg-yellow-500 border-yellow-500 text-white";
                    else statusClass = "bg-gray-500 border-gray-500 text-white";
                } else if (isCurrent) {
                    char = guess[i] || "";
                    if (char) statusClass = "border-gray-600";
                }

                return (
                    <div key={i} className={`w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold uppercase transition-all duration-500 ${statusClass}`}>
                        {char}
                    </div>
                );
            })}
        </div>
    );
};

export default Row;