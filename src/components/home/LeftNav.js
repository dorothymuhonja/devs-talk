export default function LeftNav() {
    return (
        <>
        <div id="menu" className="col-md-7">
        <nav className="d-flex flex-column h-100 justify-content-evenly">
        <a href="somewhere" className="menu-item" data-tooltip="Home">
        <i className="fas fa-home material-icons"></i>
        </a>
        <a href="somewhere" className="menu-item " data-tooltip="Online Users">
        <i className="fas fa-users material-icons"></i>
        </a>
        <a  href="somewhere" className="menu-item" data-tooltip="Profile">
        <i className="fas fa-user-circle material-icons"></i>
        </a>
        <a  href="somewhere" className="menu-item" data-tooltip="Account Security">
        <i className="fas fa-lock material-icons"></i>
        </a>
        <a  href="somewhere" className="menu-item" data-tooltip="Settings">
        <i className="fas fa-sliders-h material-icons"></i>
        </a>
      </nav>
        </div>
        </>
    )
}