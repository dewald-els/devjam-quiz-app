import { useState } from "react";
import { DIFFICULTY } from "../../const/difficulty";
import { setAPIDifficulty } from "../Quiz/QuizAPI";

function MenuDifficulty() {
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
        <>
            <span className="text-lg text-gray-500 mb-2 inline-block">Choose a difficulty</span>
            <div className="grid grid-cols-3 gap-2">
            {difficultyButtons}
            </div>
        </>
    )
}
export default MenuDifficulty;