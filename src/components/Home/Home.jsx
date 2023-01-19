import './Home.css';
import Card from 'react-bootstrap/Card';
import React from 'react';
import gitHubIconHome from '../../assets/GitHub-Mark_2.png';
import linkedInIconHome from '../../assets/LinkedIn-Mark-2-edit.jpg';
// import profileImg from '../../assets/profileImage2.jpg';

function Home(props) {

    const cssVariable = {"--n":235};

    return (
        <div className="section" id="home">
            <div id="home-content-container">
                <Card id="home-bootstrap-overrides" style={{ width: "75vw" }}>
                    <Card.Body>
                        <p>me@personal_web_site:~$<span id="mock-program-execution"> ./introduction</span></p>
                        <span className="typing-text-animation" style={cssVariable}> Hello, my name is Christian McVerry. 
                            I am a recent Computer Science graduate, and aspiring professional software developer.
                            This is my personal web site where I share information about myself and software projects
                            that I have worked on.
                        </span>
                    </Card.Body>
                </Card>
                <div id="social-icon-container">
                    <a href='https://github.com/cmcverry'><img src={gitHubIconHome} alt="GitHub Link" height='60px' width='60px' /></a>
                    <a href='https://www.linkedin.com/in/christian-mcverry'><img src={linkedInIconHome} alt="LinkedIn Link" height='60px' width='60px' /></a>
                </div>
           
                {/* <div id="me-image-container">
                    <img src={profileImg} alt="Christian McVerry" width="250px"></img>
                </div> */}
            </div>          
        </div>
    );
}

export default Home;