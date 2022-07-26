import Post from '../home/Post'

export default function Profile() {
    return(
        <>
        <div className="container-fluid">
            <img className="img-fluid whole" 
            src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" 
            alt="main-profile" />
        </div>

        <div className="blog hidden-xs">
            <ul className="col-xs-12 blog-nav">
                <div className="col-sm-offset-4 col-xs-8 ">
                    <li><span className='profile-name'>Abzed Mohammed</span>
                    <br /><span className='profile-username text-muted'>@Abzedizo</span></li>
                    <div className='followers'>
                        <li>Followed by <b><a href="#to">2.3k people</a></b></li>
                        <li>Followed by <b><a href="#to">2.3k people</a></b></li>
                        <button className='edit-profile-btn' type="button">Edit Profile</button>
                    </div>
                </div>
            </ul>  
        </div>

        <div className="container">
            <div className="row mb-5">
                <div className="col-xs-12 col-sm-4 def-post">
                    <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
                    alt="avatar" className="img-fluid rounded-circle default" />
                    <div className="post mt-3 p-3">
                        <p className="post-name"> Introduction</p>
                        <p className="post-desc">
                            <small>An enthusiast always coding. In love with programming and nurturing next generation of techies.</small>
                        </p>
                        <p>From <b>Nairobi, Kenya</b></p>
                        <p>Studied <b>Computer Science</b> at <b>Strathmore University</b> (2019 - 2023)</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-8 profile-feed">
                    <Post />
                </div>
            </div>
        </div>
        </>
    )
}