import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function User() {

    const users = useSelector(state => state.allUsers.users)
    console.log('User component -> ', users)

    return (
        <>
            {
                users.map(user => {
                    return <div className='col-3' key={user.id}>
                        <ul>
                            <li>ID: {user.id}</li>
                            <li>Name: <Link to={`/UserDetail/${user.id}`} >{user.name}</Link></li>
                            <li>Email: {user.email}</li>
                        </ul>
                    </div>
                })
            }
        </>
    )
}

export default User