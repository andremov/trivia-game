import React from 'react';
import { Answer } from "./Answer";
import { QuestionHeading } from "./QuestionHeading";
import { QuestionNav } from "./QuestionNav";

export function QuestionCard( { questionData, questionCount, maxQuestion, correctCount, answer, nextCallback, selectAnswer } ) {
    const answers = [ true, false ]
    
    return (
        <div className={'question-card'}>
            <QuestionHeading
                curQuestion={questionCount}
                maxQuestion={maxQuestion}
                data={questionData.question}
            />
            
            <div className={'question-options'}>
                {
                    answers.map(( item, i ) => {
                        return <Answer
                            onClick={() => selectAnswer(item)}
                            value={item}
                            key={i}
                            selected={answer !== undefined}
                            showBadge={answer === item}
                            isAnswer={questionData.answer === item}
                        />
                    })
                }
            </div>
            
            <QuestionNav
                nextCallback={nextCallback}
                toResultsCallback={questionCount === maxQuestion}
                maxQuestion={maxQuestion}
                correctCount={correctCount}
            />
        </div>
    
    );
}

