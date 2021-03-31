import React, { useState } from 'react'
import axios from 'axios'

const Autorization = () => {
    const [users, setUsers] = useState([])
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')


    const onShowUser = async () => {
        try{ 
            const response = await axios.get('http://localhost:3001/auth/sign-in')
            console.log(response);
            setUsers(response.data);
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div>НИХЕРА НЕ ПОНИМАЮ!!!!!!!!
            <input type='login'></input>
            <input type='passwordn'></input>
            <button onClick = { onShowUser }>Sign in</button>
            {users.map( () => {
                
            })
            }
        </div>
    )
}

export default Autorization;