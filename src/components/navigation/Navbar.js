import { Link } from "react-router-dom";

export default function Navbar(){
    return ( 
      <nav className="py-2 px-4 mb-4 navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container-fluid"> 
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
 
          <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
            <a className="navbar-brand mt-2 mt-lg-0" href="#to">
            <svg style={{height:"20px"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
            </a> 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#to">Feed</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#to">Groups</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#to">My Posts</a>
              </li>
            </ul>
          </div>  
          <div className="d-flex align-items-center"> 
            <a className="text-reset me-3" href="#to">
              <i className="fas fa-shopping-cart"></i>
            </a> 
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#to"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#to">Some news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#to">Another news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#to">Something else here</a>
                </li>
              </ul>
            </div> 
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#to"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#to">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#to">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#to">Logout</a>
                </li>
              </ul>
            </div>
          </div> 
        </div> 
      </nav> 

    )
}