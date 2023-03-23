import { useTranslation } from 'react-i18next';
import { Container } from '../../components/molecules';
import { NotFoundContainer } from './styles';

/**
 * Page not found screen
 */
const NotFound = (): JSX.Element => {
  const { t } = useTranslation('page_not_found');

  return (
    <Container
      withHeader={false}
      sx={{
        '.main': {
          justifyContent: 'center',
        },
      }}
    >
      <NotFoundContainer>
        <h1 className='title'>{`404 ${t('title')}`}</h1>
        <p>{t('body')}</p>
        <p>{t('description')}</p>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound;
