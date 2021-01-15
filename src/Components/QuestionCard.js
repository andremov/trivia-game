import React from 'react';
import { Answer } from "./Answer";
import { QuestionHeading } from "./QuestionHeading";
import { QuestionNav } from "./QuestionNav";

export function QuestionCard( { questionData, curQ, maxQ, correctCount, answer, nextCallback, selectAnswer } ) {
    const answers = [ true, false ]
    
    return (
        <div className={'question-card'}>
            <QuestionHeading
                curQuestion={curQ}
                maxQuestion={maxQ}
                data={questionData.question}
            />
            
            <div className={'question-options'}>
                {
                    answers.map(( item, i ) => {
                        return <Answer
                            onClick={() => selectAnswer(item)}
                            value={item}
                            key={i}
                            answeredQ={answer !== undefined}
                            showBadge={answer === item}
                            isAnswer={questionData.answer === item}
                        />
                    })
                }
            </div>
            
            <QuestionNav
                nextCallback={nextCallback}
                answeredQ={answer !== undefined}
                maxQuestion={maxQ}
                correctCount={correctCount}
            />
        </div>
    
    );
}

