import React, { useState } from 'react';
import { QuestionCard } from "./Components/QuestionCard";
import { ErrorBoundary } from "./Utils/ErrorBoundary";
import { question_data } from "./Utils/Data";

export function App() {
    const [ answer, setAnswer ] = useState(undefined)
    const [ currentQuestion, setCurrentQuestion ] = useState(1)
    const [ correct, setCorrect ] = useState(0)
    
    function selectAnswer( value ) {
        setCorrect(correct + (question_data[currentQuestion].answer === value ? 1 : 0))
        setAnswer(value)
    }
    
    function nextQuestion() {
        setAnswer(undefined)
        setCurrentQuestion(currentQuestion + 1)
    }
    
    function doReset() {
        setCurrentQuestion(1)
        setAnswer(undefined)
        setCorrect(0)
    }
    
    return (
        <ErrorBoundary
            resetCallback={doReset}
        >
            <QuestionCard
                questionData={question_data[currentQuestion]}
                questionCount={currentQuestion}
                maxQuestion={question_data.length - 1}
                correctCount={correct}
                answer={answer}
                selectAnswer={selectAnswer}
                nextCallback={nextQuestion}
            />
        </ErrorBoundary>
    );
}

