export default function Signup(){
    return (
        <div className="auth-view">
            {/* <form> */}
            <input type="text" name="names" placeholder="Name" />
            <input type="text" name="username" placeholder="Username" />
            <input type="date" name="bithday" placeholder="Birthday" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirm-password" placeholder="Confirm Password" />

            <p className="register-agreement"><small>By signing up you agree to the Terms and Conditions</small></p>

            <input type="submit" className="custom-btn" value="Register" />
            {/* </form> */}
        </div>
    )
}