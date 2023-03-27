import styled from 'styled-components';
import { Box } from '@mui/material';

const StyledBox = styled(Box)`
  text-align: center;

  .preview-image {
    max-width: 600px;
  }
  .input-file-upload {
    display: none;
  }
`;

const StyledArea = styled.div<{ dragActive: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 1rem;
  border-style: dashed;
  border-color: ${({ theme }) => theme.palette.primary.main};
  padding: 15px;
  cursor: pointer;
  margin: 10px 0px;
  opacity: ${({ dragActive }) => (dragActive ? 0.5 : 1)};
`;

export { StyledBox, StyledArea };
