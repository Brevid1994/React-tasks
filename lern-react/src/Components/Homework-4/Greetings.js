import React from 'react';

class SayHello extends React.Component {

    state = {
        loader: false,
        greet: ''
    }

    onRunTimer = () => {
        setTimeout( this.sayHello, 3000);
        this.setState({ loader: true })
    }

    sayHello = () => {
        this.setState({ greet: 'Hello', loader: false })
    }


    render(){
        return(
            <div>
                <button onClick={ this.onRunTimer } >Say hi</button>
                {this.state.loader && <div className='loader'></div>}
                <span>{this.state.greet}</span>
            </div>
        )
    }
}

export default SayHello;