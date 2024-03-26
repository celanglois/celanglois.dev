import { i18n } from 'i18next';
import './ChangeLanguageButton.css';

interface Props {
  i18n: i18n;
}

const ChangeLanguageButton = ({ i18n }: Props) => {
  return (
    <div
      id="change-language-button-background"
      onClick={() => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
      }}
    >
      <div id="change-language-button-text">{i18n.language === 'en' ? 'FR' : 'EN'}</div>
    </div>
  );
};

export default ChangeLanguageButton;
