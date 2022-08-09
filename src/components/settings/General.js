export default function General(){
    return(
        <>
        <div className="container general-settings mt-4">
            <h3 className="main-settings-heading">General Settings</h3>
            <div className="mt-4">
                <p>
                <span className="text-muted general-heading">Name</span> 
                <span className="general-info">User One</span>
                <span className="general-info-edit"><a href="#edit">Edit</a></span>
                </p>

                <p>
                <span className="text-muted general-heading">Username</span> 
                <span className="general-info">@UserOne</span>
                <span className="general-info-edit"><a href="#edit">Edit</a></span>
                </p>

                <p>
                <span className="text-muted general-heading">Conatct</span> 
                <span className="general-info">userone@somedormain.com</span>
                <span className="general-info-edit"><a href="#edit">Edit</a></span>
                </p>

                <p>
                <span className="text-muted general-heading">Phone</span> 
                <span className="general-info">+254 712 345 789</span>
                <span className="general-info-edit"><a href="#edit">Edit</a></span>
                </p>
            </div>
        </div>
        </>
    )
}