import OtherConnections from "./OtherConnections";

export default function Online() {
    return (
        <>
        <div className="main-online mt-4 p-3">
            <h4 className="online-header">Who's Online?</h4>
                
            <div className="online-body">
                <a href="#onlineUser">
                    <div className="connect-friends mt-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="request-avatar" 
                        className="img-fluid rounded-circle online-friends-image" />
                        <span className="logged-in dot">🟢</span>
                        
                        <div className="online-info">
                        <span className="online-users">Toby McGuire</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="online-body">
                <a href="#onlineUser">
                    <div className="connect-friends mt-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="request-avatar" 
                        className="img-fluid rounded-circle online-friends-image" />
                        <span className="logged-in dot">●</span>
                        
                        <div className="online-info">
                        <span className="online-users">Rails Ruby</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="online-body">
                <a href="#onlineUser">
                    <div className="connect-friends mt-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="request-avatar" 
                        className="img-fluid rounded-circle online-friends-image" />
                        <span className="logged-in dot">🟢</span>
                        
                        <div className="online-info">
                        <span className="online-users">Gems Snake</span>
                        </div>
                    </div>
                </a>
            </div>

            <OtherConnections />
            
        </div>
        </>
    )
}