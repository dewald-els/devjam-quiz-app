import React from "react";

const GameOverSection: React.FC = ({ children }) => {
    return (
        <article className="flex flex-col justify-center items-center py-5">
            { children }
        </article>
    )
}
export default GameOverSection;