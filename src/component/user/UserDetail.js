import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedUser } from './../../redux/actions/Index'

function UserDetail() {

    const dispatch = useDispatch()

    const { userId } = useParams()
    console.log(userId)

    const user = useSelector(state => state.user)

    const fetchUserData = async () => {
        const response = await axios
            .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .catch(err => console.log('err ', err))

        dispatch(selectedUser(response.data))
    }

    useEffect(() => {
        if (userId && userId !== '') fetchUserData()
    }, [userId])

    console.log(user)

    return (
        <>
            <div className='container text-center'>

                {
                    Object.keys(user).length === 0 ? (
                        <div>...Loading</div>
                    ) : (
                        <ul className='list-unstyled userDetails'>
                            <li><strong><h3 className='mb-5 mt-3'>{user.name}</h3></strong> </li>
                            <li><strong>ID</strong> <br /> {user.id}</li>
                            <li><strong>Username</strong> <br /> {user.username}</li>
                            <li><strong>Email</strong> <br /> {user.email}</li>
                            <li><strong>Phone</strong> <br /> {user.phone}</li>
                            <li><strong>Website</strong> <br /> {user.website}</li>
                            <li><strong>Company name</strong> <br /> {user.company.name}</li>
                            <li><strong>Company catchPhrase</strong> <br /> {user.company.catchPhrase}</li>
                            <li><strong>Company bs</strong> <br /> {user.company.bs}</li>
                            <li><strong>Address</strong> <br /> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}<br />
                                {user.address.geo.lat}, {user.address.geo.lng}</li>
                        </ul>
                    )
                }
            </div>
        </>
    )
}

export default UserDetail
