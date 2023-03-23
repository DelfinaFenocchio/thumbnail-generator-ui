import styled from 'styled-components';
import { Box } from '@mui/material';

const StyledContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    display: flex;
    max-width: 600px;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
`;

export { StyledContainer };
