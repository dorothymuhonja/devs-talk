import React, { useState } from 'react'
import Signin from "./Signin";
import Signup from "./Signup";

export default function Welcome(){

    const [authType, setAuthType] = useState(false)

    function changeAuthType(){
        setAuthType(authType => !authType)
    }
    return (
        <>
        <div className="container-fluid">
            <div className="welcome-round-logo">
                
            </div>

            <div className="welcome-row">
                <div className="welcome-image">                    
                </div>

                <div className="welcome-auth-view">
                    <div className="welcome-auth-buttons">
                        <button onClick={changeAuthType} className="signin-btn" type="button">Sign In</button>
                        <button onClick={changeAuthType} className="register-btn" type="button">Register</button>
                    </div>
                    <hr />

                    <div className="welcome-auth-inner-view">
                        {authType? <Signup /> : <Signin />}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}