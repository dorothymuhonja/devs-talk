export default function NewPost(){
    return (
        <>
            <div className="newpost-section d-flex justify-content-between align-items-center my-5">
            <div className="newpost-profile-image-small">
                <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height={30} 
                width={30}
                alt="username avatar"
                loading="lazy"
                />
            
            <div className="newpost mx-3">
                <input type="text" className="input-group-lg" placeholder="What’s on your mind, User?" />
            </div>
            </div>
        </div>
        </>
    )
}