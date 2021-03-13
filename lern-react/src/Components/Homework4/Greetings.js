import React from 'react';

class SayHello extends React.Component {

    state = {
        loader: false,
        greet: ''
    }

    onRunTimer = () => {
        setTimeout( this.sayHello, 3000);
        this.setState({ loader: true, greet: '' })
    }

    sayHello = () => {
        this.setState({ greet: 'Hello', loader: false })
    }


    render(){
        return(
            <div className = 'greeting-block'>
                <button onClick={ this.onRunTimer } className = 'greeting-button'>Say hi</button>
                {this.state.loader && <div className='loader'></div>}
                <span className = 'greeting'>{this.state.greet}</span>
            </div>
        )
    }
}

export default SayHello;