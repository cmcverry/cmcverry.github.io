import './Project.css';
import Card from 'react-bootstrap/Card';
import ProjectModal from './ProjectModal/ProjectModal.jsx';
import React, {useState} from 'react';

function Project(props){

    const [modalShow, setModalShow] = useState(false);

    const data = props.data;
    let demo;
    let image;
    let repo;


    if (!data.repo){
        repo = <span></span>
    } 
    else {
        repo = <a className="demo-link" href={data.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    }

    if (!data.url){
       demo = <span></span>
    }
    else {
        if (data.limitedUI){
            demo =  <a className="demo-link" href={data.url} target="_blank" rel="noopener noreferrer">Demo (primarily backend app with limited GUI)</a>
        }
        else{
            demo =  <a className="demo-link" href={data.url} target="_blank" rel="noopener noreferrer">Demo</a>
        }
    }

    if (!data.image){
        image = <span></span>
     }
     else {
         image =  <img className="project-image" onClick={() => setModalShow(true)} src={data.image} alt={data.projectName}></img>
     }

    return (
            <Card id="project-bootstrap-overrides" >
                <Card.Header><h2>{data.projectName}</h2>{repo}<br/>{demo}</Card.Header>
                <Card.Body>
                        <h5>({data.stack})</h5>
                        <br/>
                        <h6>Overview</h6>
                        <p>{data.description}</p>
                        <h6>To Do</h6>
                        <p>{data.goals}</p>
                        {image}
                </Card.Body>
                <ProjectModal 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data = {data}
                />
            </Card>   
        );
}

export default Project;