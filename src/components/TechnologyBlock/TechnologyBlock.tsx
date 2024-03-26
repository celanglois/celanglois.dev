import './TechnologyBlock.css';

interface Props {
  name: string;
}

const TechnologyBlock = ({ name }: Props) => {
  return <div id="technology-block">{name}</div>;
};

export default TechnologyBlock;
