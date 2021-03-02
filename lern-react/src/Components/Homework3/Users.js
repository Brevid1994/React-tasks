import React from 'react';
import data from '../../data.json'

class Users extends React.Component {

    render () {
        return(
            <div>
                { data.map( (item) => {
                    return <div className='block-for-user' key = {item.id}>
                        <h3> { `${item.name.first}`} </h3>
                        <h4> { `${item.name.last}`} </h4>
                        </div>
                })}

            </div>
        )
    }
}

export default Users;