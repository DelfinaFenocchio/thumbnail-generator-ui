import StyledCloseIconContainer from './styles';

interface IWebCamera {
  handleClick: () => void;
  icon: JSX.Element;
}

/**
 * Div treated as a button and with an icon in the middle
 * @param {object} props
 * @param {() => void || () => Promise<void>} props.handleClick Function onClick
 * @param {JSX.Element} icon The Icon component
 */
const IconButton = ({ handleClick, icon }: IWebCamera): JSX.Element => {
  return <StyledCloseIconContainer onClick={handleClick}>{icon}</StyledCloseIconContainer>;
};
export default IconButton;
