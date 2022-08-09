import { NavLink } from "react-router-dom";
import logo from "../../assets/images/devs-no-bg.png"

export default function Navbar(){
    return ( 
      <nav className="py-3 px-4 mb-4 navbar main-navbar navbar-expand-lg"> 
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
            <NavLink className="navbar-brand mt-2 mt-lg-0" to="/">
              <img src={logo} className="rounded-circle" width={40} height={40} alt="Devs-Talk-Logo" />
            </NavLink> 

            <form>
              <div className="main-nav-search mx-3">
                <input type="search" classname="nav-search" placeholder="Search Devs Talk" />
              </div>
            </form>
          </div> 
           
          <div className="d-flex align-items-center"> 
            <NavLink className="text-reset me-3" to="/settings">
              <i class="fas fa-cog main-nav-icon"></i>
            </NavLink> 

            <a className="text-reset me-3" href="#to">
            <i class="far fa-comment main-nav-icon"></i>
            </a> 

            <div class="dropdown">
              <a
                class="text-reset me-3"
                href="#to"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bell main-nav-icon"></i>
                <span class="badge rounded-pill badge-notification bg-info">1</span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#tu">Some news</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#tu">Another news</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#tu">Something else here</a>
                </li>
              </ul>
            </div>
            
            <div className="main-nav-profile-pic">
              <NavLink
                to="/profile"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height={30} 
                  width={30}
                  alt="username avatar"
                  loading="lazy"
                />
              </NavLink>
            </div>
          </div> 
        </div> 
      </nav> 

    )
}