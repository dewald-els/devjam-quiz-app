import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useQuestions } from "../../context/QuestionsProvider";
import { useQuizStats } from "../../context/QuizStatsProvider";
import AppHeader from "../../shared/AppHeader";
import { apiFetchQuestions } from "./QuizAPI";
import QuizFooter from "./QuizFooter";
import QuizQuestion from "./QuizQuestion";
import QuizTimer from "./QuizTimer";

function Quiz() {

  const [questionIdx, setQuestionIdx] = useState(0)
  const { quizStats, updateQuizStats } = useQuizStats();
  const { questions, updateQuestions } = useQuestions();

  const navigate = useNavigate()

  useEffect(() => {

    const init = async () => {
      const [apiError, apiQuestions] = await apiFetchQuestions();
      if (apiError === null) {
        updateQuestions(apiQuestions);
      }
    }

    init()

  }, []);

  useEffect(() => {
    if (quizStats.gameOver === true) {
      navigate('/game-over')
    }
  }, [quizStats.gameOver, navigate])

  function handleOnAnswer(answer: string): void {

    const questionCopy = [...questions]

    questionCopy[questionIdx].player_answer = answer;
    questionCopy[questionIdx].correct = answer === questionCopy[questionIdx].correct_answer;

    updateQuestions(questionCopy);

    if (questionIdx + 1 === questions.length) {
      updateQuizStats({
        ...quizStats,
        gameOver: true,
      });
    } else {
      setQuestionIdx(questionIdx + 1);
    }
  }

  function handleEmitTimer(time: string) {
    updateQuizStats({
      ...quizStats,
      timer: time
    })
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        {questions.length === 0 && <p>Loading questions...</p>}
        {questions.length > 0 &&
          <>
            <QuizTimer onEmitTimer={handleEmitTimer} />
            <QuizQuestion question={questions[questionIdx]} onAnswer={handleOnAnswer} />
          </>
        }

        <QuizFooter />
      </div>
    </>
  );
}
export default Quiz;
