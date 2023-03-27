import { type SxProps } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface LoaderProps {
  sx?: SxProps;
  size?: number;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
}

/**
 * Loader component
 * @param {object} props
 * @param {SxProps} props.sx The system prop that allows defining system overrides as well as additional CSS styles
 * @param {"inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined} props.color
 * @param {number} props.size
 */
const Loader = ({ sx, size = 25, color = 'inherit' }: LoaderProps): JSX.Element => {
  return <CircularProgress sx={sx} color={color} size={size} />;
};

export default Loader;
