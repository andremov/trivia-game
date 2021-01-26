import React from 'react';
import { ReactComponent as QuestionSVG } from "../Assets/question.svg";

export function QuestionInfo( { category, curQuestion, maxQuestion } ) {
    return (
        <div className={'flex-1 flex-row'}>
            <div className={'flex-1 flex-row'}>
                <QuestionSVG />
                <span>{curQuestion + '/' + maxQuestion}</span>
            </div>
            
            <div className={'flex-3'}>
                {category}
            </div>
        </div>
    );
}

