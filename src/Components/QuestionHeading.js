import React from 'react';

export function QuestionHeading( { data } ) {
    let b = document.createElement('div');
    b.innerHTML=data;
    
    return (
        <div className={'flex-3 styled-div'}>
            {b.innerText}
        </div>
    );
}

