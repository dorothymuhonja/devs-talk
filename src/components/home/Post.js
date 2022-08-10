import picture from "../../assets/images/coding.jpg"
import heartIcon from "../../assets/icons/heart-icon.svg"
import likeIcon from "../../assets/icons/like-icon.svg"
import commentIcon from "../../assets/icons/comment-icon.svg"
import shareIcon from "../../assets/icons/share-icon.svg"

export default function Post() {

  return (
    <div className="post p-4">
      <div className="post-title d-flex w-25 justify-content-between">
        <div className="post-profile-image"><img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height={70} 
                  width={70}
                  alt="username avatar"
                  loading="lazy"
                />
        </div>
        <div className="post-details">
          <p className="user-name"><span className="user-1"> User 1 </span>
          <br/>
         <span className="date text-muted" > 10 August</span>
    
          </p>
          
        </div>
      </div>
      <div className="post-body mt-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          molestie ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec rhoncus in tortor ut laoreet. Donec sagittis quam libero,
          vitae ullamcorper ex pharetra et. Morbi ipsum leo, fringilla et orci
          id, molestie condimentum leo. Integer ultricies magna eget ex
          hendrerit viverra.

         <img src={picture} alt="code snippet" className="code-image"/>
        </p>
      </div>
      <div className="post-like-count d-flex">
        <div className="post-like"></div>
        <div className="post-like-identity">
          <p><a href="#nfnhhn"><img src={heartIcon} alt="heart icon" className="heartIcon"/></a><a href="#" className="profiles"> You</a>, <a href="#" className="profiles">User Two</a> and <a href="#" className="profiles">38 others</a> like this</p>
        </div>
      </div>
      <div className="d-flex justify-content-around w-50 align-center">
        <p><a href="#nfnhhn"><img src={likeIcon} alt="heart icon" className="likeIcon"/></a>  Like</p>
        <p><a href="#nfnhhn"><img src={commentIcon} alt="heart icon" className="commentIcon"/></a>  Comment</p>
        <p><a href="#nfnhhn"><img src={shareIcon} alt="heart icon" className="shareIcon"/></a>  Share</p>
      </div>
      <div className="comment-section d-flex justify-content-between align-items-center">
          <div className="profile-image-small">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height={30} 
              width={30}
              alt="username avatar"
              loading="lazy"
            />
          
          <div className="comment mx-3">
            <input placeholder="Enter a comment" ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
