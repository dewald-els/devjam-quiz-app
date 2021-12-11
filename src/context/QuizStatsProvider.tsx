import React, { createContext, useContext, useState } from "react";

export interface QuizStats {
    timer: string;
    gameOver: boolean;
}

type ContextType = {
    quizStats: QuizStats,
    updateQuizStats: (stats: QuizStats) => void
}

const QuizContext = createContext<ContextType>({
    quizStats: {
        timer: '00:00',
        gameOver: false,
    },
    updateQuizStats: () => {}
})

export function useQuizStats(): ContextType {
    return useContext<ContextType>(QuizContext);
}

const QuizStatsProvider: React.FC = ({ children }) => {

    const [quizStats, setQuizStats] = useState<QuizStats>({
        timer: '00:00',
        gameOver: false,
    });

    const updateQuizStats = (stats: QuizStats) => {
        setQuizStats(stats);
    }

    return (
        <QuizContext.Provider value={{ quizStats, updateQuizStats }}>
            {children}
        </QuizContext.Provider>
    );
}
export default QuizStatsProvider;