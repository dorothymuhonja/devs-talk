export default function LeftNav() {
    return (
        <>
        <div className="menu main-left-container">
        <nav className="">
        <a  href="somewhere" className="menu__item menu__item--active" data-tooltip="Home">
        <i className="fas fa-home material-icons"></i>
        </a>
        <a  href="somewhere" className="menu__item " data-tooltip="Online Users">
        <i class="fas fa-users material-icons"></i>
        </a>
        <a  href="somewhere" className="menu__item" data-tooltip="Profile">
        <i class="fas fa-user-circle material-icons"></i>
        </a>
        <a  href="somewhere" className="menu__item" data-tooltip="Account Security">
        <i class="fas fa-lock material-icons"></i>
        </a>
        <a  href="somewhere" className="menu__item" data-tooltip="Settings">
        <i class="fas fa-sliders-h material-icons"></i>
        </a>
      </nav>
        </div>
        </>
    )
}