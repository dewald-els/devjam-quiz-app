import React from "react";
import QuestionsProvider from "./QuestionsProvider";
import QuizStatsProvider from "./QuizStatsProvider";

const AppContext: React.FC = ({ children }) => {
    return (
        <QuestionsProvider>
            <QuizStatsProvider>
                {children}
            </QuizStatsProvider>
        </QuestionsProvider>
    )
}
export default AppContext;