import React from 'react'
import names from '../../names.json'

class RandomUser extends React.Component {
    state = {
        people: [names.splice('')] 
    }

    addUser = () => {
        this.setState ( { people: [[...this.state.people, 'Andrei', 'Alex']] } )
    }

    

    render () {
        return (
            <div>
                { this.state.people }
                <button onClick = { this.addUser }>Add name
                </button>
            </div>
        )
    }
}

export default RandomUser;