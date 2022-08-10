export default function OtherConnections() {
    return (
        <>
        <div className="mt-4">
            <h4 className="online-header">Other Connections</h4>
                
            <div className="online-body">
                <a href="#onlineUser">
                    <div className="connect-friends mt-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="request-avatar" 
                        className="img-fluid rounded-circle online-friends-image" />
                        <span className="logged-out dot">🔴</span>
                        
                        <div className="online-info">
                        <span className="online-users">Student Tea</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="online-body">
                <a href="#onlineUser">
                    <div className="connect-friends mt-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="request-avatar" 
                        className="img-fluid rounded-circle online-friends-image" />
                        <span className="logged-out dot">🔘</span>
                        
                        <div className="online-info">
                        <span className="online-users">Coffee Cake</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="online-body">
                <a href="#onlineUser">
                    <div className="connect-friends mt-3">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="request-avatar" 
                        className="img-fluid rounded-circle online-friends-image" />
                        <span className="logged-out dot">●</span>
                        
                        <div className="online-info">
                        <span className="online-users">Blue Berry</span>
                        </div>
                    </div>
                </a>
            </div>
            
        </div>
        </>
    )
}