import React from 'react';

class Bindning extends React.Component {

    state = {
        value: ''
    }

    onChange = (event) => {
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <input 
            type = 'text'
            value = {this.state.value}
            onChange = {this.onChange}>
            </input>
        )
    }
}

export default Bindning;