type WordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

const HangedMan = ({ guessedLetters, wordToGuess }: WordProps) => {
  return (
    <div className="guessword">
      {wordToGuess.split("").map((letter,num) => (
        <span key={num}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangedMan;
