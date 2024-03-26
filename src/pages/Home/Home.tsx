import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NavBarItem from '../../components/NavBarItem/NavBarItem';
import ImageLink from '../../components/ImageLink/ImageLink';
import ExperienceBlock from '../../components/ExperienceBlock/ExperienceBlock';
import ProjectBlock from '../../components/ProjectBlock/ProjectBlock';
import ChangeLanguageButton from '../../components/ChangeLanguageButton/ChangeLanguageButton';
import './Home.css';

const Home = () => {
  // Translations
  const [t, i18n] = useTranslation('home');

  // Window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 1061 ? 'normal' : window.innerWidth > 590 ? 'small' : 'tiny');
  window.addEventListener('resize', () => {
    window.innerWidth > 1061 ? setWindowWidth('normal') : window.innerWidth > 590 ? setWindowWidth('small') : setWindowWidth('tiny');
  });

  // Nav Bar
  const navBarItems = [
    { text: t('header.navbar.about'), section: 'about' },
    { text: t('header.navbar.experience'), section: 'experience' },
    { text: t('header.navbar.projects'), section: 'projects' },
  ];
  const [selectedNavBarItem, setSelectedNavBarItem] = useState(navBarItems[0].section);
  const navBar = navBarItems.map((item, index) => (
    <NavBarItem key={index} selected={selectedNavBarItem === item.section} text={item.text} section={item.section} onSelectItem={() => setSelectedNavBarItem(item.section)} />
  ));

  // Image Links
  const imageLinkItems = [
    { link: t('header.links.github.link'), src: t('header.links.github.image') },
    { link: t('header.links.linkedin.link'), src: t('header.links.linkedin.image') },
    { link: t('header.links.x.link'), src: t('header.links.x.image') },
  ];
  const imageLinks = imageLinkItems.map((item, index) => <ImageLink key={index} link={item.link} src={item.src} />);

  // Experiences
  const experienceItems = [
    {
      start: t('content.experiences.nventive.start'),
      end: t('content.experiences.nventive.end'),
      title: t('content.experiences.nventive.position'),
      formerTitles: [t('content.experiences.nventive.former-positions.mobile-developer-intern')],
      company: t('content.experiences.nventive.company'),
      desc: t('content.experiences.nventive.description'),
      techs: [
        t('content.experiences.nventive.technologies.c#'),
        t('content.experiences.nventive.technologies.xaml'),
        t('content.experiences.nventive.technologies.uno'),
        t('content.experiences.nventive.technologies.flutter'),
        t('content.experiences.nventive.technologies.dart'),
      ],
      link: t('content.experiences.nventive.link'),
    },
  ];
  const [selectedExperienceItem, setSelectedExperienceItem] = useState(-1);
  const experiences = experienceItems.map((item, index) => (
    <ExperienceBlock
      key={index}
      startYear={item.start}
      endYear={item.end}
      title={item.title}
      formerTitleItems={item.formerTitles}
      company={item.company}
      description={item.desc}
      technologyItems={item.techs}
      companyLink={item.link}
      lowOpacity={selectedExperienceItem != -1 && selectedExperienceItem != index ? true : false}
      windowWidth={windowWidth}
      onMouseEnter={() => setSelectedExperienceItem(index)}
      onMouseLeave={() => setSelectedExperienceItem(-1)}
    />
  ));

  // Projects
  const projectItems = [
    {
      image: t('content.projects.portfolio.image'),
      title: t('content.projects.portfolio.name'),
      desc: t('content.projects.portfolio.description'),
      techs: [
        t('content.projects.portfolio.technologies.react'),
        t('content.projects.portfolio.technologies.typescript'),
        t('content.projects.portfolio.technologies.html'),
        t('content.projects.portfolio.technologies.css'),
      ],
      projectLink: t('content.projects.portfolio.link'),
    },
  ];
  const [selectedProjectItem, setSelectedProjectItem] = useState(-1);
  const projects = projectItems.map((item, index) => (
    <ProjectBlock
      key={index}
      image={item.image}
      title={item.title}
      description={item.desc}
      technologyItems={item.techs}
      projectLink={item.projectLink}
      lowOpacity={selectedProjectItem != -1 && selectedProjectItem != index ? true : false}
      windowWidth={windowWidth}
      onMouseEnter={() => setSelectedProjectItem(index)}
      onMouseLeave={() => setSelectedProjectItem(-1)}
    />
  ));

  return (
    <div id="background">
      <div id="content" className={windowWidth}>
        <div id="left-panel" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
          <div id="header">
            <div id="page-title">{t('header.name')}</div>
            <div id="page-subtitle">{t('header.title')}</div>
          </div>
          <div id="body" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
            {navBar}
          </div>
          <div id="footer" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
            <div id="image-links-wrapper">{imageLinks}</div>
            <div id="left-panel-change-language-wrapper" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
              <ChangeLanguageButton i18n={i18n} />
            </div>
          </div>
        </div>
        <div id="right-panel" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
          <div id="right-panel-change-language-wrapper" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
            <ChangeLanguageButton i18n={i18n} />
          </div>
          <div id="scroll-view">
            <div className="section" id="about">
              {t('content.about')}
            </div>
            <div className="section" id="experience">
              <div id="experiences">{experiences}</div>
              <a className="text-link" href={t('content.resume')} target="_blank" rel="noopener noreferrer">
                <div className="text-link">{t('content.view-resume')}</div>
              </a>
            </div>
            <div className="section" id="projects">
              {projects}
              <a className="text-link" href="/projects" rel="noopener noreferrer">
                <div className="text-link">{t('content.view-projects')}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
