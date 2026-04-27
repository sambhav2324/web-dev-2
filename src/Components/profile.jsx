import React from 'react'
import { useParams } from 'react-router-dom'

function Profile({ name }) {
    const { username } = useParams()
    return (
        <div>
            <h2>Profile</h2>
            <h1>{username}</h1>
            <h1>{name}</h1>
        </div>
    )
}

export default Profile