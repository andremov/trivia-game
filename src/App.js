import React from 'react';
import { ErrorBoundary } from "./Utils/ErrorBoundary";
import { Trivia } from "./Components/Trivia";
import { getTriviaQuestions } from "./Services/Api";
import { Loading } from "./Components/Loading";
import { PolkaDot } from "./Components/FancyFX/PolkaDot";

export class App extends React.Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            question_data : undefined
        }
    }
    
    componentDidMount() {
        getTriviaQuestions({amount: settings.number_of_questions}).then(r => {
            this.setState({
                question_data : r.results
            })
        })
    }
    
    render() {
        return (
            <ErrorBoundary>
                <PolkaDot color={'#1286f1'} />
                <PolkaDot color={'#13de85'} />
                <PolkaDot color={'#d0067f'} />
                <PolkaDot color={'#7206d0'} />
                <PolkaDot color={'#ef7e05'} />
                <PolkaDot color={'#06d0bf'} />
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

