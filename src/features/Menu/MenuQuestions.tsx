import { useState } from "react";
import { setAPIQuestionsAmount } from "../Quiz/QuizAPI";

const QUESTION_BUTTONS: number[] = [10, 20, 50]
function MenuQuestions() {
    const [amount, setAmount] = useState(10)

    const onAmountClick = (amount: number) => {
        setAPIQuestionsAmount(amount);
        setAmount(amount);
    }

    const difficultyButtons = QUESTION_BUTTONS.map((qAmount: number) => {

        let className = 'p-2 border-black border-2 rounded ';

        if (qAmount === amount) {
            className += 'bg-blue';
        } else {
            className += 'bg-yellow';
        }

        return (
            <button
                key={qAmount}
                className={className}
                onClick={() => onAmountClick(qAmount)}>{qAmount}</button>
        )
    })

    return (
        <section className="mb-10">
            <p className="text-lg text-gray-500 text-center">How many questions?</p>
            <div className="grid grid-cols-3 gap-2">
                {difficultyButtons}
            </div>

        </section>
    )
}
export default MenuQuestions;