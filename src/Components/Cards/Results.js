import React, { Fragment } from 'react';
import { QuestionInfo } from "../QuestionInfo";
import { ResultItem } from "../ResultItem";

export function Results( { maxQuestion, resetCallback, answer_data, trivia_data } ) {
    return (
        <Fragment>
            
            <QuestionInfo
                curQuestion={maxQuestion}
                maxQuestion={maxQuestion}
                category={'Results'}
            />
            
            <div className={'flex-3 flex-col'}>
                {trivia_data.map(( item, i ) => <ResultItem
                        key={i}
                        index={i}
                        selected={answer_data[i]}
                        correct={item.correct_answer}
                    />
                )}
            </div>
            
            <div className={'flex-2 flex-col'}>
                <div className={'flex-1'}>
                    Score: {trivia_data.filter((item,i) => item.correct_answer === answer_data[i]).length}
                </div>
                <button
                    className={'primary green'}
                    onClick={resetCallback}
                >
                    Try again!
                </button>
            </div>
        
        </Fragment>
    );
}

