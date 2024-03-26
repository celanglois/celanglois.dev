import './ImageLink.css';

interface Props {
  link: string;
  src: string;
}

const ImageLink = ({ link, src }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={src} className="logo-link" />
    </a>
  );
};

export default ImageLink;
