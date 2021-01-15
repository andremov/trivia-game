import React from 'react';
import {ReactComponent as QuestionSVG} from "../Assets/question.svg";

export function QuestionHeading( { curQuestion, maxQuestion, data } ) {
    return (
        <div className={'card-heading'}>
            <div className={'question-counter'}>
                <QuestionSVG />
                <span>{curQuestion + '/' + maxQuestion}</span>
            </div>
            <h3>{data}</h3>
        </div>
    );
}

