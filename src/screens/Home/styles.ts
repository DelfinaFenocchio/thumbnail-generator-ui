import styled from 'styled-components';

const HomeContainer = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  width: 100%;

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
    color: #e040fb;
    font-weight: bold;
  }

  .image-container {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: ${theme.palette.background.card}}
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .image-container:hover {
    border-color: theme.palette.primary.main};
  }
  .image-containe:focus,
  .image-containe:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
);

export { HomeContainer };
