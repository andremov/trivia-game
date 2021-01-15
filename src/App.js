import React from 'react';
import { ErrorBoundary } from "./Utils/ErrorBoundary";
import { Trivia } from "./Components/Trivia";
import { question_data } from "./Utils/Data";

export function App() {
    const [ lightMode, setLightMode ] = React.useState(false);
    
    
    return (
        <ErrorBoundary>
            <div
                className={'theme-backdrop'}
                style={lightMode ? { backgroundColor : 'white' } : { backgroundColor : 'black' }}
            >
                <button className={'theme-switcher'} onClick={() => setLightMode(!lightMode)}>
                    Switch Theme
                </button>
                
                <Trivia
                    q_data={question_data}
                />
            </div>
        </ErrorBoundary>
    );
}

