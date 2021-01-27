import React, { Fragment } from 'react';
import { Answer } from "../Answer";
import { QuestionStatement } from "../QuestionStatement";
import { QuestionInfo } from "../QuestionInfo";
import { Timer } from "../Timer";

export function Question( { questionData, curQ, maxQ, correctCount, answer, nextCallback, selectAnswer } ) {
    const answers = [...questionData.incorrect_answers, questionData.correct_answer].sort((a,b) => a>b? -1 : 1)
    
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
            
            <QuestionStatement
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
        </Fragment>
    
    );
}

