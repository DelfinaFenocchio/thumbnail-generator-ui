import { type SxProps } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface LoaderProps {
  sx?: SxProps;
  size?: number;
}

/**
 * Loader component
 * @param {object} props
 * @param {SxProps} props.sx The system prop that allows defining system overrides as well as additional CSS styles
 */
const Loader = ({ sx }: LoaderProps): JSX.Element => {
  return <CircularProgress sx={sx} color={'inherit'} size={25} />;
};

export default Loader;
