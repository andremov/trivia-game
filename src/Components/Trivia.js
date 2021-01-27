import React, { useState } from 'react';
import { Question } from "./Cards/Question";
import { Results } from "./Cards/Results";
import { Preamble } from "./Cards/Preamble";

export function Trivia( { trivia_data } ) {
    const [ answers, setAnswers ] = useState(new Array(trivia_data.length))
    const [ curQ, setCurQ ] = useState(0)
    const [ correct, setCorrectCount ] = useState(0)
    const [ open, setOpen ] = useState(true)
    
    function answer( value ) {
        let answers1 = answers;
        answers1[curQ - 1] = value;
        setOpen(false)
        console.log(trivia_data[curQ - 1].correct_answer, value)
        if ( trivia_data[curQ - 1].correct_answer === value ) {
            setCorrectCount(correct + 1)
            console.log('Correct!')
        }
        setAnswers(answers1)
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
                answer_data={answers}
                question_data={trivia_data[curQ-1]}
                curQ={curQ}
                maxQ={trivia_data.length}
                
                resetCallback={reset}
                startCallback={start}
                answerCallback={answer}
                
                curAnswer={answers[curQ-1]}
                isOpen={open}
            />
        </div>
    )
}

function ContentWrapper( props ) {
    const { trivia_data, answer_data, question_data, curQ, maxQ, resetCallback, isOpen, startCallback, curAnswer, answerCallback } = props;
    
    if ( curQ === maxQ ) {
        return (
            <Results
                maxQuestion={maxQ - 1}
                resetCallback={resetCallback}
                trivia_data={trivia_data}
                answer_data={answer_data}
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
                questionData={question_data}
                curQ={curQ}
                maxQ={maxQ}
                answer={curAnswer}
                isOpen={isOpen}
                selectAnswer={answerCallback}
            />
        );
    }
}
