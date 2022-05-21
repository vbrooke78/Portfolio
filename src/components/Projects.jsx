import project_data from '../utils/project_data';
import { ReactComponent as YourSVG } from '../assets/github.svg';

const Projects = () => {
  return (
    <>
      <h1 className="header">Projects</h1>
      <ul className="project-list">
        {project_data.map((project, index) => {
          return (
            <li key={index} className="project-card">
              <div className="project-card-header">
                <div className="project-card-header-h1">
                  <h1>{project.title}</h1>
                </div>
                <div className="project-card-header-image">
                  <a href={project.github} target="_blank">
                    <img
                      className="project-card-header-image"
                      alt="github logo"
                      src={require('../assets/github-image.png')}
                    />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h2 className="project-info-header">Technologies</h2>
                <section className="project-tech">
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
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
