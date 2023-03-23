import { type SxProps } from '@mui/material';
import Loader from '../Loader';
import StyledButton from './styles';

interface ButtonProps {
  text: string;
  variant?: 'contained' | 'outlined' | 'text' | undefined;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  sx?: SxProps;
}

/**
 * Custom button component
 * @param {object} props
 * @param {string} props.text button text
 * @param {'contained' | 'outlined' | 'text'} props.variant The variant to use.
 * @param {disabled} props.disabled If true, the component is disabled.
 * @param {() => void | () => Promise<void>} props.onClick onClick function
 * @param {object} props.sx The system prop that allows defining system overrides as well as additional CSS styles
 * @param {boolean} props.isLoading If something is loading and displays an animation
 * @param {'submit' | 'reset' | 'button'} props.type Button's type
 * @returns
 */
const Button = ({
  text,
  variant = 'contained',
  disabled,
  onClick,
  sx,
  isLoading = false,
  type = 'button',
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type} sx={sx} variant={variant}>
      {isLoading ? <Loader /> : <p>{text}</p>}
    </StyledButton>
  );
};

export default Button;
