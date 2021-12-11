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
        <>
            <div className="container">
                <h1 className="text-4xl">Game over</h1>

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
                    <p className="text-xl font-bold">You got {correct}/10 correct!</p>
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

                <section className="text-center py-5 mb-10">
                    <button onClick={() => onFinish('/quiz')} className="bg-pink text-white text-2xl px-5 py-2 rounded border-2 border-black">Play Again</button> &nbsp;
                    <button onClick={() => onFinish()} className="bg-green text-gray-800 text-2xl px-5 py-2 rounded border-2 border-black">Back to menu</button>
                </section>

                <section className="p-5 mb-5 rounded border-2 border-gray-200">
                    <h4 className="text-xl mb-5 font-bold">Quiz Results</h4>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th align="left">Question</th>
                                <th align="left">Your answer</th>
                                <th align="left">Correct answer</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question: Question) => {
                                return (
                                    <tr>
                                        <td>{question.question}</td>
                                        <td>{question.player_answer}</td>
                                        <td>{question.correct_answer}</td>
                                        <td>
                                            {question.correct === true &&
                                                <img src="img/check.png" alt="Check" width="32" />
                                            }

                                            {question.correct === false &&
                                                <img src="img/wrong.png" alt="Wrong" width="32" />
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </section>



            </div>

            <footer className="bg-yellow py-5">
                <div className="container">
                    <p>Created for DevJam by Dewald Els</p>
                </div>                
            </footer>
        </>
    );
}
export default GameOver;