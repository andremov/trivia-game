import React from 'react';
import { ReactComponent as QuestionSVG } from "../Assets/question.svg";

export function QuestionInfo( { category, curQuestion, maxQuestion } ) {
    return (
        <div className={'flex-1 flex-row progress-bar'}>
            <div className={'flex-row progress-display'}
                 style={{ '--percent' : (((curQuestion - 1) / maxQuestion) * 100) + '%' }}
            >
                <Contents category={category} curQuestion={curQuestion} maxQuestion={maxQuestion} />
            </div>
            <Contents category={category} curQuestion={curQuestion} maxQuestion={maxQuestion} />
        </div>
    );
}

function Contents( { curQuestion, maxQuestion, category } ) {
    
    return <React.Fragment>
        <div className={'flex-1 flex-row'}>
            <QuestionSVG />
            <span>{curQuestion + '/' + maxQuestion}</span>
        </div>
        
        <div className={'flex-3 bold-text'}>
            {category}
        </div>
    </React.Fragment>
}
