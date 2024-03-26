import TechnologyBlock from '../TechnologyBlock/TechnologyBlock';
import './ExperienceBlock.css';

interface Props {
  startYear: string;
  endYear: string;
  title: string;
  formerTitleItems: string[];
  company: string;
  description: string;
  technologyItems: string[];
  companyLink: string;
  lowOpacity: boolean;
  windowWidth: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ExperienceBlock = ({
  startYear,
  endYear,
  title,
  formerTitleItems,
  company,
  description,
  technologyItems,
  companyLink,
  lowOpacity,
  windowWidth,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const technologies = technologyItems.map((item, index) => <TechnologyBlock key={index} name={item} />);
  const formerTitles = formerTitleItems.map((item, index) => (
    <div key={index} className={`experience-block-former-title ${lowOpacity ? 'low-opacity' : ''}`}>
      {item}
    </div>
  ));

  return (
    <a href={companyLink} target="_blank" rel="noopener noreferrer">
      <div id="hover-effect-wrapper" onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
        <div id="experience-block" className={windowWidth === 'small' ? 'normal' : windowWidth}>
          <div className={lowOpacity ? 'low-opacity' : ''} id="time">{`${startYear} — ${endYear}`}</div>
          <div id="experience-block-content">
            <div id="experience-block-titles">
              <div className={lowOpacity ? 'low-opacity' : ''} id="experience-block-title">{`${title} · ${company}`}</div>
              {formerTitles}
            </div>
            <div className={lowOpacity ? 'low-opacity' : ''} id="experience-block-description">
              {description}
            </div>
            <div className={lowOpacity ? 'low-opacity' : ''} id="experience-block-technologies">
              {technologies}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ExperienceBlock;
