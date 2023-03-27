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
`;

export default StyledForm;
