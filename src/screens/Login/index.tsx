import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/molecules';
import { Button } from '../../components/atoms';
import { StyledContainer } from './styles';

/**
 * Login screen
 */
const Login: React.FC = () => {
  const { loginWithRedirect, isLoading } = useAuth0();
  const { t } = useTranslation('login');

  /**
   * Function to authenticate the user
   * @props {React.SyntheticEvent} event
   */
  const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
    await loginWithRedirect();
  };

  return (
    <Container
      withHeader={false}
      sx={{
        '.main': {
          justifyContent: 'center',
        },
      }}
    >
      <StyledContainer>
        <h1 className='title'>Thumbnail Generator</h1>
        <img src='src/assets/thumbnail.png' alt='image' className='logo' />
        <form onSubmit={handleSubmit}>
          <p className='description'>{t('body')}</p>
          <Button text={t('button')} type='submit' isLoading={isLoading} />
        </form>
      </StyledContainer>
    </Container>
  );
};

export default Login;
