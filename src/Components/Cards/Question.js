import React, { Fragment } from 'react';
import { Answer } from "../Answer";
import { QuestionHeading } from "../QuestionHeading";
import { QuestionFooting } from "../QuestionFooting";
import { QuestionInfo } from "../QuestionInfo";
import { Timer } from "../Timer";

export function Question( { questionData, curQ, maxQ, correctCount, answer, nextCallback, selectAnswer } ) {
    const answers = [ true, false ]
    
    return (
        <Fragment>
            <Timer
                startTime={20}
                curQuestion={curQ}
            />
            
            <QuestionInfo
                curQuestion={curQ}
                maxQuestion={maxQ}
                category={questionData.category}
            />
            
            <QuestionHeading
                data={questionData.question}
            />
            
            <div className={'flex-2 flex-col'}>
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
        </Fragment>
    
    );
}
