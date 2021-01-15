import React from 'react';

export class ErrorBoundary extends React.Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            hasError : false
        }
    }
    
    componentDidCatch( error, errorInfo ) {
        
        this.setState({
            hasError : true,
            errorInfo : errorInfo
        })
        
    }
    
    render() {
        if ( this.state.hasError ) {
            return <div className={'styled-div'}>
                <h2>Oops!</h2>
                
                <div>Something went wrong.</div>
                
                <button onClick={this.props.resetCallback}>
                    Back
                </button>
            </div>
        }
        
        return this.props.children
    }
}

