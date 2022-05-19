import { Link } from 'react-router-dom';
import project_data from '../utils/project_data';
import { ReactComponent as YourSVG } from '../assets/github.svg';

const Projects = () => {
  return (
    <ul className="project-list">
      {project_data.map((project, index) => {
        return (
          <li key={index} className="project-card">
            <div className="project-card-header">
              <h1>{project.title}</h1>

              <YourSVG className="svg" />
            </div>
            <div className="project-info">
              <div className="project-tech">
                <h3>Technologies</h3>
                <section>
                  {project.technologies.map((tech, index) => {
                    return (
                      <li key={index}>
                        <p>{tech}</p>
                      </li>
                    );
                  })}
                </section>
              </div>
              <div className="project-img">
                <img alt="screenshot" src={project.image} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
