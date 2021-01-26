import React from 'react';
import { ErrorBoundary } from "./Utils/ErrorBoundary";
import { Trivia } from "./Components/Trivia";
import { getTriviaQuestions } from "./Services/Api";
import { Loading } from "./Components/Loading";

export class App extends React.Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            question_data : undefined
        }
    }
    
    componentDidMount() {
        getTriviaQuestions({}).then(r => {
            this.setState({
                question_data : r.results
            })
        })
    }
    
    render() {
        return (
            <ErrorBoundary>
                <div
                    className={'theme-backdrop'}
                >
                    {this.state.question_data?
                        // Show the trivia card when question data is loaded
                        <Trivia
                            trivia_data={this.state.question_data}
                        /> :
                        // Show the loading card while question data is loading
                        <Loading />
                    }
                </div>
            </ErrorBoundary>
        );
    }
}

