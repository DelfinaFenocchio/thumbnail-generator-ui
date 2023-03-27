import styled from 'styled-components';

const StyledContainer = styled.span`
  display: flex;
  .icon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.primary.light};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description-container {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }

  .description-title {
    font-size: 12px;
    font-weight: bold;
  }

  .description-body {
    font-size: 10px;
  }

  p {
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export { StyledContainer };
