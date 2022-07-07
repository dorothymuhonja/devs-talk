export default function Signin(){
    return (
        <div>
            <form>
            <input className="register-input" type="email" name="email" placeholder="Email Address" />
            <input className="register-input" type="password" name="password" placeholder="Password" />
            <input type="submit" className="register-button" value="LOG IN" />
            </form>
        </div>
    )
}