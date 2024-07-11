import { useCallback, useEffect, useRef, useState } from "react";
import questions from "../questions";
import quizCompleted from "../assets/quiz-complete.png";
import Question from "./Question";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestion =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const handleOnAnswer = useCallback(
    function handleOnAnswer(answer) {
      setAnswerState("answered");
      setUserAnswers((prev) => {
        return [...prev, answer];
      });
      setTimeout(() => {
        if (questions[activeQuestion].answers[0] === answer) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestion]
  );
  const handleSkipAnswer = useCallback(
    () => handleOnAnswer(null),
    [handleOnAnswer]
  );
  const isCompleted = questions.length === activeQuestion;
  if (isCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleted} alt="quizCompleted" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }
  // useEffect(() => {
  //   setShuffledState(
  //     [...questions[activeQuestion].answers].sort(() => Math.random() - 0.5)
  //   );
  // }, [activeQuestion]);
  setTimeout(() => {
    handleOnAnswer(null);
  }, 1000 * 10);

  return (
    <div id="quiz">
      <Question
      key={activeQuestion}
        questionText={questions[activeQuestion].text}
        userAnswers={userAnswers}
        handleOnAnswer={handleOnAnswer}
        answerState={answerState}
        activeQuestion={activeQuestion}
        onTimeOut={handleSkipAnswer}
      />
    </div>
  );
};
export default Quiz;
