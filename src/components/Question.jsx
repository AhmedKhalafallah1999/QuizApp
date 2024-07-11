import questions from "../questions";
import Timer from "./Timer";
import Answers from "./Answers";
const Question = ({
  questionText,
  userAnswers,
  handleOnAnswer,
  answerState,
  activeQuestion,
  onTimeOut,
}) => {
  return (
    <div id="question">
      <Timer timeOut={10000} onTimeOut={onTimeOut} />
      <h2>{questionText}</h2>
      <Answers
        answerState={answerState}
        handleOnAnswer={handleOnAnswer}
        userAnswers={userAnswers}
        activeQuestion={activeQuestion}
      />
    </div>
  );
};
export default Question;
