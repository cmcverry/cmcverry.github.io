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
                    <Col lg={{span:10, offset: 1}}>                
                        <Card id="" >
                            <Card.Header><h2>Background</h2></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                        My name is Christian McVerry. I have a wide background that has granted me both a strong technical and qualitative skill set. 
                                        I hold two bachelor's degrees: one in <span className="highlight-text">Computer Science from Oregon State University </span> and another 
                                        in <span className="highlight-text"> History from Skidmore College</span>. I have been successful in both 
                                        <span className="highlight-text"> technical</span> and <span className="highlight-text">liberal arts</span> learning environments, which 
                                        demonstrates my <span className="highlight-text">adaptability</span>, <span className="highlight-text">breadth</span>, and 
                                        <span className="highlight-text"> openness to learning</span>. I am always <span className="highlight-text">ready to learn 
                                        and try new things</span>. It is a passion of mine regardless of
                                        whether I am learning through a book, article, video, documentation, or just plain tinkering on my own. Equally 
                                        important, I love putting what I learn into practice. Over the past few years, alongside completing my degree in 
                                        Computer Science, <span className="highlight-text"> I have developed my own software applications, learned new programming 
                                        frameworks and APIs, and generally dabbled with technologies that have captured my interest</span> like building a Raspberry Pi arcade 
                                        console and diving into the Linux ecosystem.
                                    <br/>
                                    <br/>
                                        Another interesting thing about me, perhaps unconventional for a young software developer, is that I have well over a decade of gardening 
                                        experience that spans all the way back to my time in high school. Over the years, I <span className="highlight-text">managed </span> 
                                        a high school greenhouse, <span className="highlight-text"> volunteered</span> in various public gardens, and 
                                        even <span className="highlight-text">worked as a professional rose gardener</span> for about three years. In those three years, 
                                        I worked as a private contractor as well as an employee at the Elizabeth Park Conservancy where I was a steward to the oldest and the 
                                        third largest public rose garden in the United States. My time working as a professional gardener further developed my
                                         <span className="highlight-text"> leadership</span>, qualitative, and soft skills. But more than anything else, gardening has 
                                         reinforced in me the value of <span className="highlight-text">diligence, patience, and humility</span>. 
                                         While <span className="highlight-text"> more recently software development has been my primary endeavor</span>, I do spend 
                                         time gardening as a hobby.
                                </Card.Text>
                            </Card.Body>
                        </Card>   
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>                        
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
                                        <li>World History</li>
                                        <li>Chinese History (Qing Dynasty to People's Republic)</li>
                                        <li>Environmental Sustainability</li>
                                        <li>Gardening</li>
                                        <li>Rose Cultivation</li>
                                        <li>Outdoor Recreation</li>
                                    </ul>
                                
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col lg={{ span: 5, offset:0 }}>
                        <Card id="" >
                            <Card.Header><h2>Education</h2></Card.Header>
                            <Card.Body>
                                    <h4>
                                        B.S. Computer Science
                                        <br/>
                                        June 2022 
                                        <br/>
                                        Oregon State University - Corvallis, OR
                                        <br/>
                                        <h5 className="gpa">GPA: 3.98</h5>
                                    </h4>
                                        <br/>
                                    <h4>
                                        B.A. History
                                        <br/>
                                        May 2018
                                        <br/>
                                        Skidmore College - Saratoga Springs, NY 
                                        <br/>
                                        <h5 className="gpa">GPA: 3.3</h5>
                                    </h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                        <Card id="" >
                            <Card.Header><h2>Technical</h2></Card.Header>
                            <Card.Body>
                                    <p style={{color: 'orange', fontStyle: 'italic'}} >Note: this list contains what I have the most exposure to and use frequently. Not necessarily 
                                    full technical mastery</p>
                                    <h5>Programming Languages:</h5>
                                    <p>Python, C, C++, SQL, JavaScript, HTML, CSS</p>
                                    <h5>Libraries / Frameworks / APIs:</h5>
                                    <p>ReactJS, NodeJS, ExpressJS, React Native, Flask, OpenMP, OpenCL</p>
                                    <h5>Environments / Tools / Platforms:</h5>
                                    <p>Linux/Unix, Git, Google Cloud Platform, Firebase, Microsoft Azure, Figma, Asana, Visual Studio, VS Code, CLion</p>
                                    <h5>Conceptual:</h5>
                                    <p>Object-Oriented Programming, Parallel Programming, REST API, Microservice Architecture, Agile Concepts & Practices</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;