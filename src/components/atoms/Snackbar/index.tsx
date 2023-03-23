import { Snackbar as SnackbarMUI, Alert, type AlertColor } from '@mui/material';

interface ISnackbar {
  text: string;
  open: boolean;
  handleClose: () => void;
  severity: AlertColor;
}

/**
 * Custom Snackbar
 * @param props
 * @param props.text Text to be shown on the snackbar
 * @param props.open If true, the component is shown
 * @param props.handleClose Callback fired when the component requests to be closed. Typically onClose is used to set state in the parent component, which is used to control the Snackbar open prop
 * @param props.severity The severity of the alert. This defines the color and icon used
 * @returns
 */
const Snackbar = ({ text, open, handleClose, severity }: ISnackbar): JSX.Element => (
  <SnackbarMUI
    open={open}
    autoHideDuration={3000}
    onClose={handleClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  >
    <Alert variant='filled' severity={severity}>
      {text}
    </Alert>
  </SnackbarMUI>
);

export default Snackbar;
