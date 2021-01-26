import React, { useState } from 'react';
import { Question } from "./Cards/Question";
import { Results } from "./Cards/Results";
import { Preamble } from "./Cards/Preamble";

export function Trivia( { trivia_data } ) {
    const [ answers, setAnswers ] = useState(new Array(trivia_data.length))
    const [ curQ, setCurQ ] = useState(0)
    const [ correct, setCorrectCount ] = useState(0)
    
    console.log(trivia_data)
    
    function selectAnswer( value ) {
        let answers = answers;
        answers[curQ] = value;
        console.log(trivia_data)
        console.log(value)
        setAnswers(answers)
    }
    
    function next() {
        setCurQ(curQ + 1)
    }
    
    function reset() {
        setCurQ(0)
    }
    
    function start() {
        setCurQ(1)
    }
    
    return (
        <div className={'trivia-card'}>
            <ContentWrapper
                trivia_data={trivia_data}
                curQ={curQ}
                maxQ={trivia_data.length}
                resetCallback={reset}
                startCallback={start}
                nextCallback={next}
                selectAnswer={selectAnswer}
                curAnswer={answers[curQ]}
                correctCount={correct}
            />
        </div>
    )
}

function ContentWrapper( props ) {
    const { trivia_data, curQ, maxQ, resetCallback, startCallback, curAnswer, selectAnswer, nextCallback, correctCount } = props;
    if ( curQ === maxQ ) {
        return (
            <Results
                maxQuestion={maxQ - 1}
                correctCount={correctCount}
                resetCallback={resetCallback}
            />
        )
    } else if ( curQ === 0 ) {
        return (
            <Preamble
                startCallback={startCallback}
            />
        )
    } else {
        return (
            <Question
                questionData={trivia_data[curQ]}
                curQ={curQ}
                maxQ={maxQ - 1}
                correctCount={correctCount}
                answer={curAnswer}
                selectAnswer={selectAnswer}
                nextCallback={nextCallback}
            />
        );
    }
}
