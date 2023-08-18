import {  useCallback, useEffect, useState } from "react";
import "./App.css";
import word from "./wordList.json";
import Alphabet from "./components/Alphabet";
import HangedManDisplay from "./components/HangedManDisplay";
import HangedMan from "./components/HangedMan";

function App() {
  function Word() {
    return word[Math.floor(Math.random() * word.length)];
  }

  const [wordToGuess, setWordToGuess] = useState(Word());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const Loser = incorrectGuesses.length >= 6;
  const Winner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addLetter = (letter: string) => {
    setWordToGuess(Word)
    setGuessedLetters((unusedLetters) => [...unusedLetters, letter]);
  };

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || Loser || Winner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, Winner, Loser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(Word())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])
  return (
    <>

      <div >
        {/* <p>{wordToGuess}</p> */}
        {Winner && "Winner"}
        {Loser && "Loser"}
      </div>
      <HangedManDisplay attempts={incorrectGuesses.length} />
      <HangedMan guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <Alphabet
        disabled={Winner || Loser}
        active={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
        inactive={incorrectGuesses}
        addLetter={addLetter}
      />
    </>
  );
}

export default App;
