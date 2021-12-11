import { useState } from "react";
import { Link } from "react-router-dom";
import { DIFFICULTY } from "../../const/difficulty";
import { setAPIDifficulty } from "../Quiz/QuizAPI";

function Menu() {

  const [difficulty, setDifficulty] = useState('easy')

  const onDifficultyClick = (difficulty: string) => {
    setAPIDifficulty(difficulty);
    setDifficulty(difficulty);
  }

  const difficultyButtons = DIFFICULTY.map(diff => {

    let className = 'p-2 border-black border-2 rounded ';

    if (diff === difficulty) {
      className += 'bg-blue';
    } else {
      className += 'bg-yellow';
    }

    return (
      <button
        key={diff}
        className={className}
        onClick={() => onDifficultyClick(diff)}>{diff}</button>
    )
  })

  return (
    <div className="container px-5 flex flex-col items-center">
      <header id="menu" className="py-10">
        <img src="img/speech-bubble.png" alt="Colourful speech bubble" width="128" />
        <h2 className="text-5xl font-bold">DevJam Quiz!</h2>
        <h4 className="text-gray-500">Test your brain!</h4>
      </header>
      <section className="mb-10">
        <span className="text-lg text-gray-500 mb-2 inline-block">Choose a difficulty</span>
        <div className="grid grid-cols-3 gap-2">
          {difficultyButtons}
        </div>
      </section>
      <section>
        <Link to="/quiz" className="px-10 py-5 flex flex-col bg-pink rounded-md border-black border-4">
          <span className="text-2xl font-semibold text-white">
            Play
          </span>
        </Link>
        <Link to="/about" className="p-10 flex flex-col rounded underline">About</Link>
      </section>
    </div>
  );
}
export default Menu;
