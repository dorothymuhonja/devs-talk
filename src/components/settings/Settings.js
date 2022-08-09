import { Link } from "react-router-dom"
import General from "./General"

export default function Settings(){
    return(
        <>
        <div className="container mt-5">
            <div className="main-setting">
                <Link type="button" className="btn btn-settings active-setting-btn" to="settings/general">General</Link>
                <Link type="button" className="btn btn-settings" to="settings/general">Privacy</Link>
                <Link type="button" className="btn btn-settings" to="settings/general">Security and Login</Link>
                <Link type="button" className="btn btn-settings" to="settings/general">Notifications</Link>
            </div>

            <div className="more-settings mt-4">
                <General />
            </div>
        </div>
        </>
    )
}