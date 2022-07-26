import logo from '../../assets/images/devs.png'

export default function WelcomeLogo(){
    return(
        <div className="welcome-logo">
            <img className='img-fluid' src={logo} alt="welcome-logo" />
        </div>
    )
}