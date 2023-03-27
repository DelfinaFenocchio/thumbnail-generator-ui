import { type SxProps } from '@mui/material';
import { Header } from '@atoms';
import { StyledContainer } from './styles';

interface IContainer {
  children: JSX.Element;
  withHeader?: boolean;
  sx?: SxProps;
}

/**
 * Container molecule for our screens. This reusable container makes it easy and quick to use best practices when creating our UI, while also not repeating code unnecessarily.
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {boolean} props.withHeader If true, the rendered component will include the header
 * @param {SxProps} props.sx The system prop that allows defining system overrides as well as additional CSS styles
 * @returns {JSX.Element} Container molecule
 */
const Container = ({ children, withHeader = true, sx }: IContainer): JSX.Element => {
  return (
    <StyledContainer sx={sx}>
      {withHeader && <Header />}
      <div className='main'>{children}</div>
    </StyledContainer>
  );
};

export default Container;
