import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const User = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default User