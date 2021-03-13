import React from 'react'
import names from '../../names.json'

class RandomUser extends React.Component {

    state = {
        people: ['Bob', 'James', 'Alex']
    }

    onAddRandomName = () => {
        const index = Math.floor(Math.random() * 13)
        const newPeopleList = [...this.state.people, names]
        this.setState({people: newPeopleList })
    }

    render () {
        return (
            <div>
                { this.state.people.map((item) => {
                return <div>{item}</div>
                })}
                <button onClick = { this.onAddRandomName } >Add name</button>
            </div>
        )
    }
}

export default RandomUser;