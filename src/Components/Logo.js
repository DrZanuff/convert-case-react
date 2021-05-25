import logo from '../Images/logo192.png';
import './Logo.css';

function LogoHeader(){
    return(
        <div>
            <p >Made with:  </p>
            <div id="logo">
                <img src={logo} alt="" ></img>
            </div>
            
        </div>
    );
}

export default LogoHeader;