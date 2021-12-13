import { Question } from "../Quiz/QuizQuestion";

type PropTypes = {
    questions: Question[]
}

function GameOverResults({ questions }: PropTypes) {
    return (

        <section className="mb-5 rounded border-2">
            <header className="bg-gray-100 p-2 mb-5">
                <h4 className="text-2xl font-bold">Quiz Results</h4>
            </header>
            <div>
                {questions.map((question: Question, idx: number) => {
                    return (
                        <div key={question.question} className="text-gray-700 p-5 border-b-2 last:border-b-0">

                            <figure>
                                {question.correct === true &&
                                    <img src="img/check.png" alt="Check" width="32" />
                                }

                                {question.correct === false &&
                                    <img src="img/wrong.png" alt="Wrong" width="32" />
                                }
                            </figure>

                            <p className="font-bold">{idx + 1}. { question.question }</p>
                            <p>Your answer: {question.player_answer}</p>
                            <p>Correct answer: {question.correct_answer}</p>

                        </div>
                    )
                })}
            </div>
        </section>

    );
}
export default GameOverResults;