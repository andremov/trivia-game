import React, { Fragment } from 'react';

export function Preamble({startCallback}) {
    return (
        <Fragment>
            <div className={'flex-1 flex-center-all bold-text'}>
                <span>Trivia Night!</span>
            </div>
            <div className={'flex-3 flex-col flex-center-all'}>
                <span>Ten questions.</span>
                <span>Ten seconds.</span>
                <span>Two options.</span>
                <span>Have you got what it takes?</span>
            </div>
            <button className={'primary green'} onClick={startCallback}>
                Start!
            </button>
        </Fragment>
    );
}

