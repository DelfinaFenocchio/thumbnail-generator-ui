import styled from 'styled-components';

const StyledForm = styled.form`
  .take-photo-icon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.primary.light};
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

  .delete-icon {
    color: ${({ theme }) => theme.palette.error.light};
  }

  .title {
    text-transform: uppercase;
    background: linear-gradient(to right, #e450bb 0%, #7987dd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

export default StyledForm;
