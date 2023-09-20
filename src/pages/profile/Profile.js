import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <p onClick={ () => navigate("edit-profile") }>edit profile</p>
                <p onClick={ () => navigate("upload-avatar") }>upload avatar</p>
                <p onClick={ () => navigate("change-password") }>change password</p>
            </div>
            <Outlet />
        </>
    )
}

export default Profile