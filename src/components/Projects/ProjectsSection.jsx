
import Project from './Project';
import './ProjectsSection.css';
const projects = require('../../data/projects.json');


function ProjectsSection(props) {

    let arr = [];
    for (let key of Object.keys(projects)){
        arr.push(projects[key]);
    }

    const projectList = arr.map((project) =>
        <Project key={project.id.toString()} data={project} />
    );

    return (
        <div className="section" id="projects">
            <div id="projects-section-container">     
                <div id="projects-section-header">
                    <h1>  My Projects  </h1>
                </div>
                <ul id="projects-container">
                    {projectList}
                </ul>
            </div>  
        </div>
    );
}

export default ProjectsSection;