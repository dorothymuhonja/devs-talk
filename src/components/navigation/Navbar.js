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

            <div className="dropdown">
                <a
                  className="text-reset me-3"
                  href="#notifications"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell main-nav-icon"></i>
                  <span className="badge rounded-pill badge-notification bg-info">15</span>
                </a>
                <ul
                  className="dropdown-menu dropdown-content dropdown-menu-end p-2"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                <h3 className="main-settings-heading mx-2 my-2">Notifications</h3>
                  <li>
                    <a className="dropdown-item" href="#tu">Some news sfsg</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Another news wfvwef erferer</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Something else here and ... and wrap</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Something else here and ... and wrap wefwfwe</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Something else here and ... and wrap</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Something else here and ... and wrap ffsfds wfsd</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Something else here and ... and wrap sfsdfsd</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Something else here and ... and wrap sdsasf</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Something</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#tu">Something else here and ... and wrap</a>
                  </li>
                </ul>
              </div>

              <a className="text-reset me-3" href="#to">
              <i className="far fa-comment main-nav-icon"></i>
              </a> 

              <NavLink className="text-reset me-3" to="/settings">
                <i className="fas fa-cog main-nav-icon"></i>
              </NavLink>           
            
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