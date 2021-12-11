import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"
import { Question } from "../features/Quiz/QuizQuestion";

type ContextType = {
    questions: Question[],
    updateQuestions: (questions: Question[]) => void
}

const QuestionsContext = createContext<ContextType>({
    questions: [],
    updateQuestions: () => {}
});

export function useQuestions() {
    return useContext(QuestionsContext);
}

const QuestionsProvider: React.FC = ({ children }) => {

    const [questions, setQuestions] = useState<Question[]>([])

    const updateQuestions = (questions: Question[]) => {
        setQuestions(_ => questions);
    }

    return (
        <QuestionsContext.Provider value={{ questions, updateQuestions }}>
            {children}
        </QuestionsContext.Provider>
    )
}
export default QuestionsProvider