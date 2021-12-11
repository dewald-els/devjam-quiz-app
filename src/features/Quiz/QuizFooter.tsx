import { useNavigate } from "react-router-dom";
import { useQuestions } from "../../context/QuestionsProvider";
import { useQuizStats } from "../../context/QuizStatsProvider";

function QuizFooter() {
    const navigate = useNavigate()
    const { updateQuestions } = useQuestions();
    const { updateQuizStats } = useQuizStats()
    
    function handleQuitClick() {
        if (confirm('Are you sure?')) {
            updateQuestions([])
            updateQuizStats({
                gameOver: false,
                timer: '00:00'
            });
            navigate('/')
        }
    }

    return (
        <footer className="py-10">
            <button onClick={ handleQuitClick } className="bg-red-400 text-white p-2 w-20 rounded border-black border-2">
                Quit
            </button>
        </footer>
    )
}
export default QuizFooter;