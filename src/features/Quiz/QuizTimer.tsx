import { useEffect } from "react"
import { useStopwatch } from "react-timer-hook"
import { useQuizStats } from "../../context/QuizStatsProvider"
import padTime from "../../utils/padTime"

type PropTypes = {
    onEmitTimer: (time: string) => void
}

function QuizTimer({ onEmitTimer }: PropTypes) {
    
    const { minutes, seconds } = useStopwatch({
        autoStart: true
    })

    const { quizStats } = useQuizStats();

    useEffect(() => {
        if (quizStats.gameOver === true) {
            onEmitTimer(`${padTime(minutes)}:${padTime(seconds)}`);
        }
    }, [ quizStats.gameOver ])

    return (
        <section className="flex items-center mb-5">
            <figure className="bg-blue rounded-full w-8 h-8">
                <img src="img/hourglass.png" alt="Hourglass" width="32" />
            </figure>
            <span className="font-semibold">
                {padTime(minutes)}:{padTime(seconds)}
            </span>
        </section>

    )
}
export default QuizTimer