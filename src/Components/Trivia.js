import React, { useState } from 'react';
import { QuestionCard } from "./QuestionCard";
import { ResultCard } from "./ResultCard";

export function Trivia( { q_data } ) {
    const [ curAnswer, setCurAnswer ] = useState(undefined)
    const [ curQ, setCurQ ] = useState(1)
    const [ rightCount, setRightCount ] = useState(0)
    
    function selectAnswer( value ) {
        setRightCount(rightCount + (q_data[curQ].answer === value ? 1 : 0))
        setCurAnswer(value)
    }
    
    function nextQuestion() {
        setCurAnswer(undefined)
        setCurQ(curQ + 1)
    }
    
    function reset() {
        setCurAnswer(undefined);
        setCurQ(1)
        setRightCount(0)
    }
    
    if ( curQ === q_data.length ) {
        return (
            <ResultCard
                maxQuestion={q_data.length - 1}
                correctCount={rightCount}
                backCallback={reset}
            />
        )
    } else {
        return (
            <QuestionCard
                questionData={q_data[curQ]}
                curQ={curQ}
                maxQ={q_data.length - 1}
                correctCount={rightCount}
                answer={curAnswer}
                selectAnswer={selectAnswer}
                nextCallback={nextQuestion}
            />
        );
    }
}

