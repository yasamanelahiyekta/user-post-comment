import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home/Home"
import Aboutus from "../pages/about/Aboutus"
import Contact from "../pages/contactus/Contact"
import Profile from "../pages/profile/Profile"
import Changepassword from '../pages/profile/changepassword/Changepassword'
import Editprofile from "../pages/profile/editprofile/Editprofile"
import Uploadavatar from "../pages/profile/uploadavatar/Uploadavatar"
import Posts from '../pages/posts/Posts'
import Comments from '../pages/comments/Comments'
import Users from '../pages/users/Users'
function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/users' element={ <Users /> } />
                <Route path='/about' element={ <Aboutus /> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='/profile' element={ <Profile /> }  >
                    <Route path='edit-profile' element={ <Editprofile /> } />
                    <Route path='change-password' element={ <Changepassword /> } />
                    <Route path='upload-avatar' element={ <Uploadavatar /> } />
                </Route>
                <Route path='/users/:itemid' element={ <Posts /> } />
                <Route path='/users/:itemid/:postid' element={ <Comments /> } />
            </Routes>
        </>
    )
}

export default Router