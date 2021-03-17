import React from 'react';
import data from '../../data.json'

class Users extends React.Component {

    render () {
        return(
            <div className = 'users-block'>
            { data.map( (item) => {
                return <div className='block-for-user' key = {item._id}>
                    <span> { `${item.name.first}`} </span>
                    <span> { `${item.name.last}`} </span>
                </div>})}
            </div>
        )}
}

export default Users;