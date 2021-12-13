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

function QuizQuestion(props: PropTypes) {

  const question = props.question.question;

  const answers = [props.question.correct_answer, ...props.question.incorrect_answers].sort((a, b) => a.localeCompare(b))
    .map(answer => {
      return (
        <li key={answer}>
          <button onClick={() => props.onAnswer(answer)}
            className="bg-pink text-white py-4 px-10 rounded border-black border-2 mb-3 w-full md:w-fit">
            {answer}
          </button>
        </li>
      )
    })

  return (
    <>
      <section className="flex items-center mb-5">
        <figure className="mr-2 self-start md:self-center" style={{ minWidth: '32px' }}>
          <img src="img/question.png" alt="Question mark in pink" width="32" />
        </figure>
        <div>
          <p className="text-xl font-semibold">{question}</p>
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
