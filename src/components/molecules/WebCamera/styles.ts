import styled from 'styled-components';

export default styled.div`
  .icon {
    color: ${({ theme }) => theme.palette.primary.light};
  }
  @media only screen and (max-device-width: 640px) {
    .webcamCapture {
      height: 100%;
      width: 100%;
    }
  }
  @media only screen and (max-device-width: 768px) {
    .webcamCapture {
      height: 100%;
      width: 100%;
    }
  }
`;
