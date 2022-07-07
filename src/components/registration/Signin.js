export default function Signin(){
    return (
        <div className="auth-view">
            <p>Log in using:</p>
            <div className="socials">
                <div className="social-icon"><p className="text-center"><i className="fa fa-twitter"></i></p></div>
                <div className="social-icon"><p className="text-center"><i className="fa fa-facebook"></i></p></div>
                <div className="social-icon"><p className="text-center"><i className="fa fa-google"></i></p></div>
            </div>
            {/* <form> */}
            <input type="email" name="email" placeholder="Email Address" />
            <input type="password" name="password" placeholder="Password" />
            <p id="forgot">Forgot Password?</p>
            <buton className="custom-btn" type="submit">LOG IN</buton>
            {/* </form> */}
        </div>
    )
}