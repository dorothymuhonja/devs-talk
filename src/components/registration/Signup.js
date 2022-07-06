export default function Signup(){
    return (
        <>
            <form>
            <input className="register-input" type="text" name="names" placeholder="Name" />
            <input className="register-input" type="text" name="username" placeholder="Username" />
            <input className="register-input" type="date" name="bithday" placeholder="Birthday" />
            <input className="register-input" type="email" name="email" placeholder="Email Address" />
            <input className="register-input" type="password" name="password" placeholder="Password" />
            <input className="register-input" type="password" name="confirm-password" placeholder="Confirm Password" />

            <p className="register-agreement"><small>By signing up you agree to the Terms and Conditions</small></p>

            <input type="submit" className="register-button" value="Register" />
            </form>
        </>
    )
}