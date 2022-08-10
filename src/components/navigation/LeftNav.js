import friendsIcon from "../../assets/icons/friends-icon.svg"
import groupsIcon from "../../assets/icons/groups-icon.svg"
import trendsIcon from "../../assets/icons/trending-icon.svg"
import hackathonsIcon from "../../assets/icons/hackathon-icon.svg"
import discoverIcon from "../../assets/icons/discover-icon.svg"
import eventsIcon from "../../assets/icons/events-icon.svg"
import savedIcon from "../../assets/icons/saved-icon.svg"
import jobsIcon from "../../assets/icons/jobs-icon.svg"
import { Link } from "react-router-dom"

export default function LeftNav() {
    return (
        <>
          <div className="left-nav p-4">
            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
                <span className="left-nav-icon-text">Profile</span>
              </div>
            </Link>

            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item mt-1 my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src={friendsIcon} />
                <span className="left-nav-icon-text">Friends</span>
              </div>
            </Link>

            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item mt-1 my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src={groupsIcon} />
                <span className="left-nav-icon-text">Groups</span>
              </div>
            </Link>

            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item mt-1 my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src={trendsIcon} />
                <span className="left-nav-icon-text">Trending</span>
              </div>
            </Link>

            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item mt-1 my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src={hackathonsIcon} />
                <span className="left-nav-icon-text">Hackathons</span>
              </div>
            </Link>

            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item mt-1 my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src={discoverIcon} />
                <span className="left-nav-icon-text">Discover</span>
              </div>
            </Link>

            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item mt-1 my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src={eventsIcon} />
                <span className="left-nav-icon-text">Events</span>
              </div>
            </Link>

            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item mt-1 my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src={savedIcon} />
                <span className="left-nav-icon-text">Saved</span>
              </div>
            </Link>

            <Link className="left-nav-link" to="/profile">
              <div className="left-nav-item mt-1 my-3">
                <img className="img-fluid rounded-circle left-nav-icons" alt="profile-avatar" 
                src={jobsIcon} />
                <span className="left-nav-icon-text">Jobs</span>
              </div>
            </Link>
          </div>
        </>
    )
}