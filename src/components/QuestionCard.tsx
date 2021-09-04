// Types
import { AnswerObject } from "../App";
import { ButtonWrapper } from './QuestionCard.style'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questNr: number;
    totalQuests: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questNr,
    totalQuests

}) => {
    return (
        <div className="number" >
            <p>Question: {questNr} / {totalQuests}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}

                    >
                        <button className="btn btn-quest" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
