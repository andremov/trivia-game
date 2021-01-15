import React  from 'react';
import { ErrorBoundary } from "./Utils/ErrorBoundary";
import { Trivia } from "./Components/Trivia";
import { question_data } from "./Utils/Data";

export function App() {
    
    return (
        <ErrorBoundary>
            <Trivia
                q_data={question_data}
            />
        </ErrorBoundary>
    );
}

