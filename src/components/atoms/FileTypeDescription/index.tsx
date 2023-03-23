import { StyledContainer } from './styles';

interface IFileType {
  icon: JSX.Element;
  title: string;
  body: string;
}

/**
 * Component to indicate supported files
 * @param {object} props
 * @param {JSX.Element} props.icon File type icon
 * @param {string} props.title Title's file, eg: image, video
 * @param {string} props.body File's types, eg: jpeg, png
 * @returns
 */
const FileTypeDescription = ({ icon, title, body }: IFileType): JSX.Element => (
  <StyledContainer>
    <div className='icon'>{icon}</div>
    <div className='description-container'>
      <p className='description-title'>{title}</p>
      <p className='description-body'>{body}</p>
    </div>
  </StyledContainer>
);

export default FileTypeDescription;
