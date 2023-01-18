import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function About(props) {

    return (
        <div className="section" id="about">
            <h1>About Me</h1>
            <Container id="about-bootstrap-overrides">
                <Row>
                    <Col md={{span: 5, offset: 1}}>                
                        <Card id="" >
                            <Card.Header><h2>Background</h2></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                        My name is Christian McVerry. I have a varied background with both a strong technical and qualitative skill set. I hold two bachelors degrees: 
                                        one in Computer Science from Oregon State University and another in History from Skidmore College. I enjoy learning new things, 
                                         developing software, web applications, experimenting with new frameworks and APIs, and generally dabbling  with technologies that capture my interest.
                                    <br/>
                                    <br/>
                                        Unrelated to the tech side of me, I also have heaps of gardening experience, which is another interest of mine. Over the years I have spent time
                                        volunteering in various public gardens and even worked as a professional rose gardener for about three years. I have worked as a private contractor as well as an employee at 
                                        the Elizabeth Park Conservancy where I was a steward to the oldest and the third largest public rose garden in the United States. My time working as a professional
                                        gardener further developed my leadership, qualitative, and soft skills. While in recent years software development has been my primary endeavor, I do spend time gardening as hobby.
                                </Card.Text>
                            </Card.Body>
                        </Card>   
                    </Col>
                    <Col md={{ span: 5, offset: 0 }}>                        
                        <Card id="" >
                            <Card.Header><h2>Interests</h2></Card.Header>
                            <Card.Body>
                                
                                    <h4>Tech:</h4>
                                    <ul>
                                        <li>Software Engineering</li>
                                        <li>Web Development</li>
                                        <li>Cloud Computing</li>
                                        <li>Parallel Programming</li>
                                        <li>Graphics and Video Games</li>
                                    </ul>
                                    <h4>Non-Tech:</h4>
                                    <ul>
                                        <li>Environmental Sustainability</li>
                                        <li>Gardening</li>
                                        <li>Rose Cultivation</li>
                                        <li>Outdoor Recreation</li>
                                    </ul>
                                
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1 }}>
                        <Card id="" >
                            <Card.Header><h2>Education</h2></Card.Header>
                            <Card.Body>
                                    <h4>
                                        Bachelor of Science, Computer Science
                                        <br/>
                                        June 2022 
                                        <br/>
                                        Oregon State University - Corvallis, OR
                                    </h4>
                                        <br/>
                                    <h4>
                                        Bachelor of Arts, History
                                        <br/>
                                        May 2018
                                        <br/>
                                        Skidmore College - Saratoga Springs, NY 
                                        <br/>
                                    </h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{ span: 5, offset: 0 }}>
                        <Card id="" >
                            <Card.Header><h2>Technical</h2></Card.Header>
                            <Card.Body>
                                    <p style={{color: 'orange', fontStyle: 'italic'}} >( Note: this list conttains what I use frequently or have the most exposure with using. Not necessarily 
                                    full mastery. )</p>
                                    <h5>Programming Languages:</h5>
                                    <p>Python, JavaScript, C/C++, SQL, HTML/CSS</p>
                                    <h5>Libraries / Frameworks / APIs:</h5>
                                    <p>ReactJS, NodeJS, ExpressJS, React Native, Flask, OpenMP, OpenCL</p>
                                    <h5>Environments / Tools / Platforms:</h5>
                                    <p>Unix/Linux, Git, Google Cloud Platform, Microsoft Azure, Firebase, Figma, Asana, VS Code, IntelliJ IDEA, CLion</p>
                                    <h5>Conceptual:</h5>
                                    <p>Object-Oriented Programming, Parallel Proramming, RESTful API, Microservice Architecture, Agile Concepts & Practices</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;