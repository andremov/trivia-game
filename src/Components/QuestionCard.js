import React from 'react';
import { Answer } from "./Answer";
import { QuestionHeading } from "./QuestionHeading";
import { QuestionFooting } from "./QuestionFooting";

export function QuestionCard( { questionData, curQ, maxQ, correctCount, answer, nextCallback, selectAnswer } ) {
    const answers = [ true, false ]
    
    return (
        <div className={'question-card'}>
            <QuestionHeading
                curQuestion={curQ}
                maxQuestion={maxQ}
                data={questionData.question}
            />
            
            <div className={'q-body'}>
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
            
            <QuestionFooting
                nextCallback={nextCallback}
                answeredQ={answer !== undefined}
                maxQuestion={maxQ}
                isLast={curQ === maxQ}
                correctCount={correctCount}
            />
        </div>
    
    );
}

