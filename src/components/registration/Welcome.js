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
        <div className="container-fluid welcome">
            <div className="welcome-menu">
                <div className="col-lg-1"><div className="welcome-round-logo"></div>
                
                </div>
                <h1 className="subtitle">DEV TALKS</h1>
            </div>
            <div className="welcome-body">
                <div className="left col-lg-7">
                <div className="welcome-image">
                </div>
                <h1 className="title text-blue-500">Be Collaborative</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed molestie ipsum.</p>
                </div>
                <div className=" col-lg-5">
                <div className="welcome-auth-view">
                    <div className="tab">
                        <div id="sign-in-corner" className="tab-bar"><button className="text-center" onClick={changeAuthType}>Sign In</button></div>
                        <div id="register-corner" className="tab-bar center-block"><button onClick={changeAuthType}>Register</button></div>
                    </div>
                    {/* <div className="welcome-auth-buttons">
                        <button onClick={changeAuthType} className="btn" type="button">Sign In</button>
                        <button onClick={changeAuthType} className="btn" type="button">Register</button>
                    </div> 
                    <hr /> */}
                    <div className="welcome-auth-inner-view">
                        {authType? <Signup /> : <Signin />}
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}