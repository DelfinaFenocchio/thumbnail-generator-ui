import styled from 'styled-components';

const StyledForm = styled.form`
  .take-photo-icon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #ab47bc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
  }

  .take-photo {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .preview-image {
    max-width: 100%;
  }
`;

export default StyledForm;
