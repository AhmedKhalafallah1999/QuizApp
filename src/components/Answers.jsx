import { useRef } from "react";
import questions from "../questions";
const Answers = ({
  answerState,
  handleOnAnswer,
  userAnswers,
  activeQuestion,
}) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...questions[activeQuestion].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = userAnswers[userAnswers.length - 1] === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => handleOnAnswer(answer)}
              className={cssClasses}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Answers;
