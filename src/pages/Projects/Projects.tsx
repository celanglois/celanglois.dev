import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import TechnologyBlock from '../../components/TechnologyBlock/TechnologyBlock';
import ChangeLanguageButton from '../../components/ChangeLanguageButton/ChangeLanguageButton';

const Projects = () => {
  // Translations
  const [t, i18n] = useTranslation('projects');

  // Window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 1061 ? 'normal' : window.innerWidth > 590 ? 'small' : 'tiny');
  window.addEventListener('resize', () => {
    window.innerWidth > 1061 ? setWindowWidth('normal') : window.innerWidth > 590 ? setWindowWidth('small') : setWindowWidth('tiny');
  });

  // Projects
  const projectItems = [
    {
      year: t('projects.portfolio.year'),
      name: t('projects.portfolio.project'),
      workedAt: t('projects.portfolio.worked-on-at'),
      technologies: [
        t('projects.portfolio.technologies.react'),
        t('projects.portfolio.technologies.typescript'),
        t('projects.portfolio.technologies.html'),
        t('projects.portfolio.technologies.css'),
      ],
      linkText: t('projects.portfolio.link-text'),
      link: t('projects.portfolio.link'),
    },
    {
      year: t('projects.mymd.year'),
      name: t('projects.mymd.project'),
      workedAt: t('projects.mymd.worked-on-at'),
      technologies: [
        t('projects.mymd.technologies.uno'),
        t('projects.mymd.technologies.cs'),
        t('projects.mymd.technologies.xaml'),
        t('projects.mymd.technologies.net'),
        t('projects.mymd.technologies.xamarin'),
      ],
      linkText: t('projects.mymd.link-text'),
      link: t('projects.mymd.link'),
    },
    {
      year: t('projects.myvca.year'),
      name: t('projects.myvca.project'),
      workedAt: t('projects.myvca.worked-on-at'),
      technologies: [
        t('projects.myvca.technologies.uno'),
        t('projects.myvca.technologies.cs'),
        t('projects.myvca.technologies.xaml'),
        t('projects.myvca.technologies.net'),
        t('projects.myvca.technologies.xamarin'),
      ],
      linkText: t('projects.myvca.link-text'),
      link: t('projects.myvca.link'),
    },
  ];
  const projectRows = projectItems.map((item, index) => {
    return (
      <tr key={index} className="table-row">
        <td>
          <div className="table-cell" id="year-cell">
            {item.year}
          </div>
        </td>
        <td className={windowWidth === 'tiny' ? 'hidden' : ''}>
          <div className="table-cell" id="project-cell">
            {item.name}
          </div>
        </td>
        <td className={windowWidth !== 'normal' ? 'hidden' : ''}>
          <div className="table-cell" id="worked-at-cell">
            {item.workedAt}
          </div>
        </td>
        <td className={windowWidth !== 'normal' ? 'hidden' : ''}>
          <div className="table-technologies-cell">
            {item.technologies.map((tech, index) => {
              return <TechnologyBlock key={index} name={tech} />;
            })}
          </div>
        </td>
        <td>
          <div className="table-cell">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="text-link">{item.linkText}</div>
            </a>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div id="background">
      <div id="content" className={windowWidth}>
        <div id="content-wrapper" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
          <div id="projects-header">
            <div>
              <a className="text-link" href="/" rel="noopener noreferrer">
                <div className="text-link">{t('name')}</div>
              </a>
              <div id="page-title">{t('title')}</div>
            </div>
            <ChangeLanguageButton i18n={i18n} />
          </div>
          <div id="table-wrapper" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
            <table id="projects-table">
              <thead id="table-header-row" className={windowWidth === 'tiny' ? 'small' : windowWidth}>
                <tr>
                  <th className="table-header">{t('headers.year')}</th>
                  <th className="table-header">{t('headers.project')}</th>
                  <th className={`table-header ${windowWidth !== 'normal' ? 'hidden' : ''}`}>{t('headers.worked-on-at')}</th>
                  <th className={`table-header ${windowWidth !== 'normal' ? 'hidden' : ''}`}>{t('headers.technologies')}</th>
                  <th className={`table-header ${windowWidth === 'tiny' ? 'hidden' : ''}`}>{t('headers.link')}</th>
                </tr>
              </thead>
              <tbody id="table-body">{projectRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
