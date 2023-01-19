import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import React, {useEffect} from 'react';
import logo from '../../logo.svg';

function NavigationBar(props) {
  
    useEffect(() => {
        window.addEventListener('scroll', () => {

            document.querySelectorAll(".section").forEach((function (section){
            
            if(section.getBoundingClientRect().top < 750){
                const sectionID = section.attributes.id.value;
                const elements = document.getElementsByClassName("nav-link");
                for (let i = 0; i < elements.length; i++){
                    // console.log(elements[i].classList.values, t);
                    if (!elements[i].classList.contains("nav-" + sectionID)){
                        elements[i].classList.remove("active");
                    }
                    else{
                        elements[i].classList.add("active")
                    }
                }
            } 
            }))
        });
    }, []);


    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="Portfolio web site logo"
            />
             </Navbar.Brand>
            <Container id="nav-bootstrap-overrides">
                <Nav id="nav-bootstrap-overrides" defaultActiveKey="#home" variant="tabs">
                    <Nav.Link id="nav-bootstrap-overrides" className="nav-home" href="#home">Home</Nav.Link>
                    <Nav.Link id="nav-bootstrap-overrides" className="nav-about" href="#about">About</Nav.Link>
                    <Nav.Link id="nav-bootstrap-overrides" className="nav-projects" href="#projects">Portfolio</Nav.Link>
                    <Nav.Link id="nav-bootstrap-overrides" className="nav-footer" href="#footer">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;