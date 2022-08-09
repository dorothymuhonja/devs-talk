// import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export default function Settings(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/settings/general");
    }

    return(
        <>
        <div className="container mt-5">
            <div className="main-setting">
                <NavLink type="button" className="btn btn-settings" to="/settings/general">General</NavLink>
                <NavLink type="button" className="btn btn-settings" to="/settings/privacy">Privacy</NavLink>
                <NavLink type="button" className="btn btn-settings" to="/settings/security">Security and Login</NavLink>
                <NavLink type="button" className="btn btn-settings" to="/settings/notifications">Notifications</NavLink>
            </div>
        </div>
        </>
    )
}