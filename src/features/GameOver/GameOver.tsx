import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuestions } from "../../context/QuestionsProvider";
import { useQuizStats } from "../../context/QuizStatsProvider";
import { Question } from "../Quiz/QuizQuestion";
import GameOverSection from "./GameOverSection";

function GameOver() {

    const navigate = useNavigate()
    const { quizStats: stats, updateQuizStats } = useQuizStats()
    const { questions, updateQuestions } = useQuestions()
    const correct = questions.reduce((acc, curr: Question) => {
        if (curr.correct === true) {
            return acc + 1
        }
        return acc;
    }, 0)

    useEffect(() => {
        if (stats.gameOver === false) {
            navigate('/');
        }
    }, [])

    function onFinish(path: string = '/') {
        updateQuizStats({
            gameOver: false,
            timer: '00:00'
        })

        updateQuestions([])

        navigate(path);
    }

    return (
        <div className="container">
            <h1 className="text-4xl">Game over</h1>

            <GameOverSection>
                <figure className="bg-blue rounded-full">
                    <img src="img/hourglass.png" alt="Hourglass" width="64" />
                </figure>
                <p>You took {stats.timer}</p>
            </GameOverSection>

            <GameOverSection>
                <figure className="bg-blue rounded-full text-center">
                    <img src="img/brain.png" alt="Hourglass" width="64" />
                </figure>
                <p>You got { correct }/10 correct!</p>
            </GameOverSection>

            <GameOverSection>
                <figure className="bg-blue rounded-full text-center">
                    <img src="img/trophy.png" alt="Hourglass" width="64" />
                </figure>
                <p>You Passed the Quiz!</p>
            </GameOverSection>

            <section className="text-center p-5">
                <button onClick={ () => onFinish('/quiz') } className="bg-pink text-white text-2xl px-5 py-2 rounded border-2 border-black">Play Again</button> &nbsp;
                <button onClick={ () => onFinish() } className="bg-green text-gray-800 text-2xl px-5 py-2 rounded border-2 border-black">Back to menu</button>
            </section>

        </div>
    );
}
export default GameOver;