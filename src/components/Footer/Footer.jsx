import './Footer.css';
import gitHubIcon from '../../assets/github-mark-white.png';
import linkedInIcon from '../../assets/LI-In-Bug.png';

function Footer (props){

    return (
        <div id="footer" className="section">
            <div id="footer-content">
                <div id="footer-flexbox">
                    <p>Find me on:</p>
                    <a href='https://github.com/cmcverry'><img src={gitHubIcon} alt="GitHub Link" height='30px' width='30px' /></a>
                    <a href='https://www.linkedin.com/in/christian-mcverry'><img src={linkedInIcon} alt="LinkedIn Link" height='30px' width='40px' /></a>
                </div>
                <p>email: cmcverry@gmail.com</p>
            </div>
        </div>
    );
}

export default Footer;