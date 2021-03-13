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
            <div className='signIn-block'>
                {!this.state.isSignedIn ? (
                    <button onClick = { this.changeState } className = 'signIn-button'>Sign In</button>
                        ) : ( 
                    <p onClick = { this.changeState } className = 'sigIn-greet'>Hello user</p>)}
            </div>

        )
    }
}

export default LogIn;