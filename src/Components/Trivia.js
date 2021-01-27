import React, { useState } from 'react';
import { Question } from "./Cards/Question";
import { Results } from "./Cards/Results";
import { Preamble } from "./Cards/Preamble";
import { settings } from "../Utils/Settings";

export function Trivia( { trivia_data } ) {
    const [ answers, setAnswers ] = useState(new Array(trivia_data.length))
    const [ curQ, setCurQ ] = useState(0)
    const [ open, setOpen ] = useState(true)
    
    function answer( value ) {
        let answers1 = answers;
        answers1[curQ - 1] = value;
        setAnswers(answers1)
        
        setOpen(false) // close the question temporarily
        
        setTimeout(() => { // after 5 seconds, move to next question
            setCurQ(curQ + 1)
            setOpen(true)
        }, settings.question_buffer * 1000)
    }
    
    function reset() {
        setCurQ(0)
        setAnswers(new Array(trivia_data.length))
        setOpen(true)
    }
    
    function start() {
        setCurQ(1)
    }
    
    return (
        <div className={'trivia-card'}>
            <ContentWrapper
                trivia_data={trivia_data}
                answer_data={answers}
                question_data={trivia_data[curQ - 1]}
                curQ={curQ}
                maxQ={trivia_data.length}
                
                resetCallback={reset}
                startCallback={start}
                answerCallback={answer}
                
                curAnswer={answers[curQ - 1]}
                isOpen={open}
            />
        </div>
    )
}

function ContentWrapper( props ) {
    const { trivia_data, answer_data, question_data, curQ, maxQ, resetCallback, isOpen, startCallback, curAnswer, answerCallback } = props;
    
    if ( curQ-1 === maxQ ) {
        return (
            <Results
                maxQuestion={maxQ}
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
