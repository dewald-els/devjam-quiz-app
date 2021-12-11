import parseHtml from "../../utils/parseHtml";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  player_answer?: string;
  correct: boolean;
};

type PropTypes = {
  question: Question,
  onAnswer: (answer: string) => void
};

function formatAnswers(answers: string[]) {
  return answers.map(answer => parseHtml(answer))
    .sort((a, b) => a.localeCompare(b))
}

function QuizQuestion(props: PropTypes) {

  const question = parseHtml(props.question.question)

  const answers = formatAnswers([props.question.correct_answer, ...props.question.incorrect_answers])
    .map(answer => {
      return (
        <li key={answer}>
          <button onClick={() => props.onAnswer(answer)}
            className="bg-pink text-white py-4 px-10 rounded border-black border-2 mb-3">
            {answer}
          </button>
        </li>
      )
    })

  return (
    <>
      <section className="flex items-center mb-5">
        <figure className="mr-2">
          <img src="img/question.png" alt="Question mark in pink" width="32" />
        </figure>
        <div>
          <p className="text-xl">{question}</p>
          <p className="text-gray-500">{props.question.category} - { props.question.difficulty }</p>
        </div>
      </section>

      <section>
        <ul className="">{answers}</ul>
      </section>

    </>
  );
}
export default QuizQuestion;
