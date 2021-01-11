import React from 'react';
import { Answer } from "./Answer";
import { Question } from "./Question";
import { question_data } from "../Utils/Data";
import { QuestionNav } from "./QuestionNav";

export function QuestionCard( { question, answer, prevCallback, nextCallback, selectAnswer } ) {
    const answers = [ true, false ]
    
    return (
        <div className={'question-card'}>
            <Question data={question_data[question].question} />
            <div className={'question-answers'}>
                {
                    answers.map(( item, i ) => {
                        return <Answer
                            onClick={() => selectAnswer(item)}
                            value={item}
                            key={i}
                            selected={answer !== undefined}
                            isAnswer={question_data[question].answer === item}
                        />
                    })
                }
            </div>
            <QuestionNav
                prevCallback={prevCallback}
                nextCallback={nextCallback}
                curQuestion={question}
                maxQuestion={question_data.length - 1}
            />
        </div>
    );
}

