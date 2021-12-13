import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuestions } from "../../context/QuestionsProvider";
import { useQuizStats } from "../../context/QuizStatsProvider";
import AppHeader from "../../shared/AppHeader";
import { Question } from "../Quiz/QuizQuestion";
import GameOverResults from "./GameOverResults";
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
        <>
            <AppHeader />
            <div className="container">
                <section className="text-center py-5">
                    <h1 className="text-4xl font-bold">Game over</h1>
                    <p className="text-gray-500">This is how you did</p>
                </section>

                <GameOverSection>
                    <figure className="bg-blue rounded-full mb-3">
                        <img src="img/hourglass.png" alt="Hourglass" width="64" />
                    </figure>
                    <p className="text-xl font-bold">You took {stats.timer}</p>
                </GameOverSection>

                <GameOverSection>
                    <figure className="bg-blue rounded-full text-center mb-3">
                        <img src="img/brain.png" alt="Hourglass" width="64" />
                    </figure>
                    <p className="text-xl font-bold">You got {correct}/{ questions.length } correct!</p>
                </GameOverSection>

                {correct >= 5 && <GameOverSection>
                    <figure className="bg-blue rounded-full mb-3">
                        <img src="img/trophy.png" alt="Hourglass" width="64" />
                    </figure>
                    <p className="text-lg font-bold">You Passed the Quiz!</p>
                </GameOverSection>}

                {correct < 5 && <GameOverSection>
                    <figure className="bg-blue rounded-full mb-3">
                        <img src="img/wrong.png" alt="Wrong" width="64" />
                    </figure>
                    <p className="text-lg font-bold">You Failed the Quiz!</p>
                </GameOverSection>}

                <section className="text-center py-5 mb-10 md:flex md:justify-center">
                    <button onClick={() => onFinish('/quiz')}
                        className="block bg-pink text-white text-2xl px-5 py-2 rounded border-2 border-black w-full md:w-60">
                        Play Again
                    </button> &nbsp;

                    <button onClick={() => onFinish()}
                        className="block bg-green text-gray-800 text-2xl px-5 py-2 rounded border-2 border-black w-full md:w-60">
                        Back to menu
                    </button>
                </section>

                <GameOverResults questions={questions} />

            </div>

            <footer className="bg-yellow py-5">
                <div className="container">
                    <p>Created for <a className="underline" href="https://devjam.vercel.app/" target="_blank">DevJam</a> by <a className="underline" target="_blank" href="https://github.com/dewald-els/devjam-quiz-app">Dewald Els</a></p>
                </div>
            </footer>
        </>
    );
}
export default GameOver;