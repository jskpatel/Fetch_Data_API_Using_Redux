import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from './User'
import { setUser } from './../../redux/actions/Index'

function UserList() {

    const users = useSelector(state => state)
    const dispatch = useDispatch()

    const fetchUsers = async () => {
        const response = await axios
            .get('https://jsonplaceholder.typicode.com/users')
            .catch(err => console.log('err ', err))

        dispatch(setUser(response.data))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    console.log(users)

    return (
        <>
            <div className='container'>
                <h4>UserList</h4>
                <div className='row'>
                    <User />
                </div>
            </div>
        </>
    )
}

export default UserList