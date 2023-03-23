import styled from 'styled-components';

const HomeContainer = styled.div`
  .images-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    width: 100%;
    gap: 1rem;
  }

  .image {
    width: 120px;
    height: 120px;
  }

  .title {
    font-size: 22px;
    color: #9c27b0;
    font-weight: bold;
  }
`;

export { HomeContainer };
