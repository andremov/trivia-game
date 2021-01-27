import React from 'react';

export function QuestionStatement( { data } ) {
    let b = document.createElement('div');
    b.innerHTML=data;
    
    return (
        <div className={'flex-3 styled-div flex-center-all'}>
            {b.innerText}
        </div>
    );
}

