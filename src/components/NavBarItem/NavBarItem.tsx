import './NavBarItem.css';

interface Props {
  section: string;
  selected: boolean;
  text: string;
  onSelectItem: (item: string) => void;
}

const NavBarItem = ({ section, selected, text, onSelectItem }: Props) => {
  const linkElement = document.querySelector(`#${section}`);

  return (
    <div
      id="wrapper"
      onClick={() => {
        onSelectItem(section);
        if (linkElement) linkElement.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <div className={`${selected && 'unselected'}`}>
        <svg className="indicator" height="30" width="32">
          <rect className="indicator" fill="#c5c6c7" height="2" width="25" y="9" />
        </svg>
      </div>
      <div className={`${!selected && 'unselected'}`}>
        <svg height="30" width="56">
          <rect fill="#66fcf1" height="2" width="48" y="9" />
        </svg>
      </div>
      <div id={selected ? 'selected-title' : 'title'} className={`${!selected && 'item'}`}>
        {text}
      </div>
    </div>
  );
};

export default NavBarItem;
