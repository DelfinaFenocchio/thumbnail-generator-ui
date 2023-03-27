import styled from 'styled-components';

const StyledImagesContainer = styled.div`
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
    text-transform: uppercase;
    background: linear-gradient(to right, #e450bb 0%, #7987dd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .image-container {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: ${({ theme }) => theme.palette.background.paper}}
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .image-container:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  .url-container {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .url-text {
    margin-right: 5px;
  }
`;

export default StyledImagesContainer;
