import colorlogo from '../img/logo1.png';
import logo from '../img/whitelogo.png';
const Nav = ({minimal,  setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false

    return (
        <nav>
        <div className="logo-container">
            <img className="logo" src={minimal ? colorlogo : logo} alt="logo" />
        </div>

        {!authToken &&  !minimal && <button className="nav-button" onClick={handleClick} disabled={showModal}>Log In</button>}
    </nav>
    )
}

export default Nav