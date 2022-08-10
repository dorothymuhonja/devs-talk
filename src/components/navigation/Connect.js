export default function Connect() {
    return (
        <>
        <div className="main-connect p-3">
            <h3 className="connect-header">Connection Requests</h3>

            <div className="request-body">
                <div className="connect-request mt-3">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="request-avatar" 
                    className="img-fluid rounded-circle request-image" />
                    
                    <div className="request-info">
                    <span className="request-username">Toby McGuire</span>
                    <span className="request-mutuals">Followed by 3 mutual friends</span>
                    </div>
                </div>
                <div className="request-btn mt-3">
                    <button type="button" className="btn btn-accept btn-block">Accept</button>
                    <button type="button" className="btn btn-light btn-delete btn-block">Delete</button>
                </div>
            </div>

            <div className="request-body">
                <div className="connect-request mt-3">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="request-avatar" 
                    className="img-fluid rounded-circle request-image" />
                    
                    <div className="request-info">
                    <span className="request-username">Tom Holland</span>
                    <span className="request-mutuals">Followed by 5 mutual friends</span>
                    </div>
                </div>
                <div className="request-btn mt-3">
                    <button type="button" className="btn btn-accept btn-block">Accept</button>
                    <button type="button" className="btn btn-light btn-delete btn-block">Delete</button>
                </div>
            </div>
        </div>
        </>
    )
}