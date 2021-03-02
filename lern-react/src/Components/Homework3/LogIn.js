import React from 'react';

class LogIn extends React.Component{
    state = {
        isSignedIn: false,
    }

    changeState = () => {
        setTimeout( () => {
            this.setState ( {isSignedIn: !this.state.isSignedIn} )
        }, 3000); 

    }


    render(){
        return(
            !this.state.isSignedIn ? (
            <button onClick = { this.changeState }>Sign In</button>
            ) : ( <p onClick = { this.changeState }>Hello user</p>
            )
        )
    }
}

export default LogIn;