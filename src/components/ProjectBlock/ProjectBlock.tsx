import TechnologyBlock from '../TechnologyBlock/TechnologyBlock';
import './ProjectBlock.css';

interface Props {
  image: string;
  title: string;
  description: string;
  technologyItems: string[];
  projectLink: string;
  lowOpacity: boolean;
  windowWidth: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectBlock = ({ image, title, description, technologyItems, projectLink, lowOpacity, windowWidth, onMouseEnter, onMouseLeave }: Props) => {
  const technologies = technologyItems.map((item, index) => <TechnologyBlock key={index} name={item} />);

  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <div id="hover-effect-wrapper" onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
        <div id="project-block" className={windowWidth === 'small' ? 'normal' : windowWidth}>
          <img className={`${lowOpacity ? 'low-opacity' : ''} ${windowWidth === 'small' ? 'normal' : windowWidth}`} id="image" src={image}></img>
          <div id="project-block-content">
            <div id="project-block-titles">
              <div className={lowOpacity ? 'low-opacity' : ''} id="project-block-title">
                {title}
              </div>
            </div>
            <div className={lowOpacity ? 'low-opacity' : ''} id="project-block-description">
              {description}
            </div>
            <div className={lowOpacity ? 'low-opacity' : ''} id="project-block-technologies">
              {technologies}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectBlock;
