import React from 'react';
import { ErrorBoundary } from "./Utils/ErrorBoundary";
import { Trivia } from "./Components/Trivia";
import { getTriviaQuestions } from "./Services/Api";
import { LoadingCircle } from "./Components/LoadingCircle";
import { PolkaDot } from "./Components/FancyFX/PolkaDot";
import { settings } from "./Utils/Settings";

export class App extends React.Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            question_data : undefined,
            theme : 0
        }
    }
    
    componentDidMount() {
        getTriviaQuestions({ amount : settings.number_of_questions }).then(r => {
            this.setState({
                question_data : r.results
            })
        })
    }
    
    render() {
        return (
            <ErrorBoundary>
                
                <PolkaDot color={[ '#1286f1', '#021221' ][this.state.theme]} />
                <PolkaDot color={[ '#13de85', '#042f1c' ][this.state.theme]} />
                <PolkaDot color={[ '#d0067f', '#2b011a' ][this.state.theme]} />
                <PolkaDot color={[ '#7206d0', '#11011f' ][this.state.theme]} />
                <PolkaDot color={[ '#ef7e05', '#402202' ][this.state.theme]} />
                <PolkaDot color={[ '#06d0bf', '#02413c' ][this.state.theme]} />
                
                <ThemeButton
                    onClick={() => this.setState({ theme : (this.state.theme + 1) % 2 })}
                />
                <div
                    className={'theme-backdrop ' + [ 'light-theme', 'dark-theme' ][this.state.theme]}
                >
                    {this.state.question_data ?
                        // Show the trivia card when question data is loaded
                        <Trivia
                            trivia_data={this.state.question_data}
                        /> :
                        // Show the loading card while question data is loading
                        <LoadingCircle />
                    }
                </div>
            </ErrorBoundary>
        );
    }
}

function ThemeButton( { onClick } ) {
    return <button className={'theme-button'} onClick={onClick}>
        Switch mode
    </button>
}
