import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

const StyledAppBar = styled(AppBar)`
  & .MuiToolbar-root {
    justify-content: space-between;
  }

  .title {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default StyledAppBar;
