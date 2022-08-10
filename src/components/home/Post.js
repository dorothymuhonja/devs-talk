import picture from "../../assets/images/coding.jpg"
import heartIcon from "../../assets/icons/heart-icon.svg"

export default function Post() {

  return (
    <div className="post p-4">
      <div className="post-title d-flex w-25 justify-content-between">
        <div className="post-profile-image"></div>
        <div className="post-details">
          <p className="user-name"><span className="user-1"> User 1 </span>
          <br/>
         <span className="date text-muted" > 10 August</span>
    
          </p>
          
        </div>
      </div>
      <div className="post-body">
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
          <p><a href="#nfnhhn"><img src={heartIcon} alt="heart icon" className="heartIcon"/></a> You, User Two and 38 others like this</p>
        </div>
      </div>
      <div className="d-flex justify-content-around w-50">
        <p>Like</p>
        <p>Comment</p>
        <p>Share</p>
      </div>
      <div className="comment-section d-flex justify-content-between align-items-center">
        <div className="profile-image-small"></div>
        <input placeholder="Enter a comment"></input>
      </div>
    </div>
  );
}
