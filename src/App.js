import React, { useState } from 'react';
import { QuestionCard } from "./Components/QuestionCard";

export function App() {
    const [ answers, setAnswers ] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(1)
    
    function selectAnswer(value) {
        let a = answers;
        a[currentQuestion] = value
        setAnswers(a)
    }
    
    return (
         <QuestionCard
             question={currentQuestion}
             answer={answers[currentQuestion]}
             selectAnswer={selectAnswer}
             nextCallback={() => setCurrentQuestion(currentQuestion+1)}
             prevCallback={() => setCurrentQuestion(currentQuestion-1)}
         />
    );
}

